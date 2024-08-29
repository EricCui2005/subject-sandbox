import {
  Box,
  Flex,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import dynamic from 'next/dynamic';
import ReactPlayer from "react-player";
import styles from './Button.module.css';
import { SRTPrompt } from './string.js';
import {transcripts} from "../subtitles/transcripts.js";
import videoLessons from "../data/videoLessons.json";
import lessons from "../data/lessons.json";

// TODO: Add additional data related to user
// TODO: Add additional data related to user
const DeepChat = dynamic(() => import('deep-chat-react').then(mod => mod.DeepChat), { ssr: false });

export function VideoPage() {

  // Storing the state of the window
  const [hasWindow, setHasWindow] = useState(false);

  // Storing which lesson is loaded in the ReactPlayer
  const [selectedLesson, setSelectedLesson] = useState(videoLessons[0]);

  // Deisgnates the window as available once it loads
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const [prompt, setPrompt] = useState(''); // States for different prompt types
  const [response, setResponse] = useState([{ role: 'ai', text: 'Hello! I am the Subject virtual copilot! How can I help?' }]); // Chat history
  const [triggerApiCall, setTriggerApiCall] = useState(false); // text API trigger
  const [triggerVideoApiCall, setTriggerVideoApiCall] = useState(false); // video API trigger
  const [timestamp, setTimestamp] = useState(0); // Timestamp jumping
  const [jumpButton, setJumpButton] = useState(false); // Renders the jump button

  const [loadedLesson, setLoadedLesson] = useState<any>(null); // Stores the loaded lesson
  const [shouldSeek, setShouldSeek] = useState(false); // Seeks the video to the timestamp
  const [videoReady, setVideoReady] = useState(false); // Designates if the video is ready to be played
  const [edit, setEdit] = useState(false); // Sets whether or not the prompts are to be in edit mode

  // Scuffed implementation
  const [input1, setInput1] = useState('campaigning');
  const [input2, setInput2] = useState('campaign tactics');
  const [input3, setInput3] = useState('campaigning');
  const [input4, setInput4] = useState('PACs');
  const [inputE, setInputE] = useState('cars');

  const playerRef = useRef<ReactPlayer | null>(null); // Ref to video player

  // Function to call for a pure chat generation
  const chatCall = async () => {
    const API_KEY = 'sk-proj-Nn2EY4OGsq491ijHn5aFT3BlbkFJTpWt1ZJ4rTgHijMzN46j';
    const headers = {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    };

    // API try-catch block
    try {
      const result = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: prompt }
        ]
      }, { headers });
  
      // Response from GPT
      const newResponse = { role: 'ai', text: result.data.choices[0].message.content };

      // Updating the chat history
      setResponse(prevResponses => [...prevResponses, newResponse]);
    } catch (error) {
      console.error('Failed to fetch response:', error);
      alert('Error calling OpenAI API. Check the console for more details.');
    }
  };

  // Converts SRT time stamp to seconds
  function srtTimeToSeconds(srtTime : string) {
    const [hours, minutes, seconds] = srtTime.split(':');
    const [secs, millis] = seconds.split(',');
    const totalSeconds = 
      parseInt(hours, 10) * 3600 +
      parseInt(minutes, 10) * 60 +
      parseInt(secs, 10) +
      parseInt(millis, 10) / 1000;
    return totalSeconds;
  }

  // Function to call for a video jump-button generation
  const videoChatCall = async () => {
    const API_KEY = 'sk-proj-Nn2EY4OGsq491ijHn5aFT3BlbkFJTpWt1ZJ4rTgHijMzN46j';
    const headers = {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    };
    try {
      const result = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: prompt }
        ]
      }, { headers });
  
      // Response from GPT
      const newResponse = { role: 'ai', text: result.data.choices[0].message.content };

      // Updating the chat history
      console.log(srtTimeToSeconds(newResponse.text));
      setTimestamp(srtTimeToSeconds(newResponse.text));
      setJumpButton(true);
    } catch (error) {
      console.error('Failed to fetch response:', error);
      alert('Error calling OpenAI API. Check the console for more details.');
    }
  };

  function videoJump() {
    setVideoReady(false);
    setSelectedLesson(loadedLesson);
    setShouldSeek(true);
  }

  useEffect(() => {
    if (shouldSeek && videoReady) {
      console.log('Jumping');
      playerRef.current?.seekTo(timestamp);
      setShouldSeek(false);
    }
  }, [shouldSeek, videoReady]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  // Trigger the chat call when prompt is updated and ready
  useEffect(() => {
    if (triggerApiCall) {
      console.log('Triggering chat call');
      chatCall();
      setTriggerApiCall(false); // Reset the trigger
    }
    if (triggerVideoApiCall) {
      console.log('Triggering video chat call');
      videoChatCall();
      setTriggerVideoApiCall(false); // Reset the trigger
    }
  }, [triggerApiCall, triggerVideoApiCall]); // Depend on triggerApiCall state

  // DeepChat state
  const [activeChat, setActiveChat] = useState(false);

  // Function attached to button to open and close chat window
  function handleClick() {
    setActiveChat(!activeChat);
  }

  // Text API call
  function promptCall(buttonPrompt: string) {
    setPrompt(buttonPrompt);
    setResponse(prevResponses => [...prevResponses, { role: 'user', text: buttonPrompt }]);
    setTriggerApiCall(true);
  }

  // Video API call
  function videoPromptCall(searchPhrase: string) {
    
    // Searching for instances of the particular regular expression in the transcript
    let frequencies: {[key: string]: number} = {};
    for (let key in transcripts) {
      frequencies[(transcripts as any)[key].id] = (((transcripts as any)[key].transcript.match(new RegExp(searchPhrase, 'g'))) ?? []).length;
    }

    // Finding the transcript with the highest instances of the regular expression
    let transcriptID = (transcripts as any)[Object.keys(transcripts)[0]].id;
    for (let key in frequencies) {
      if (frequencies[key] > frequencies[transcriptID]) {
        transcriptID = key;
      }
    }
    console.log(transcriptID);
    const idTitlePairs = {
      'JxVdmuJFYyE14_qKYgAsV': 'Elections',
      'Ols7Ma8qKyotfU_XuRfsX': 'Campaigns Finance and Controversies',
      'PxPLV95obQG5MlzISVjR4': 'Types of PACs',
      'xNbUJiK5PP09_8jT-mJNl': 'Interest Groups'
    }
    const videoCallPrompt = `${SRTPrompt} ${(transcripts as any)[(idTitlePairs as any)[transcriptID]].transcript}`;
    setPrompt(videoCallPrompt);
    setLoadedLesson((lessons as any)[transcriptID]);
    console.log((lessons as any)[transcriptID]);
    
    setTriggerVideoApiCall(true);
  }

  // DeepChat initial messages
  const initialMessages = [

    {
      role: 'ai', text: response 
    }
  ];

  // VideoPage
  return (
    <Box pb="90px">
      <Flex w="100%" align="center" flexDir="column">
        <Box w="100%" maxW="952px" minH="100%" px={[8, null, null, null, 0]}>
          <Box
            pb={3}
            mt={6}
            borderBottom="1px solid"
            borderColor="$subtle-border"
            mb={6}
          >
            <Box>
              <Text as="h1" textStyle="$header-03" mb={2}>
                Topic 5.1 Elections
              </Text>
              <Box mb={6}>
                <UnorderedList>
                  {videoLessons.map((lesson) => (
                    <ListItem key={lesson.id}>
                      <Link onClick={() => setSelectedLesson(lesson)}>
                        {lesson.title}
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Box>
            <Text as="h3" textStyle="$title-03">
              {selectedLesson.title}
            </Text>
          </Box>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '10px',
              width: '1000px',
              }}>
              {hasWindow && (
                <ReactPlayer
                  ref={playerRef}
                  pip={true}
                  width="100%"
                  height="100%"
                  controls={true}
                  loop={false}
                  url={selectedLesson.videoUrl}
                  onReady={() => {
                    console.log('Video is ready');
                    setVideoReady(true);
                  }}
                />
              )}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
                }}>
                {activeChat && 
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <DeepChat
                   messageStyles={{
                    default: {
                      shared: {
                        bubble: {
                          backgroundColor: 'unset',
                          marginTop: '10px',
                          marginBottom: '10px',
                          boxShadow: '0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16)',
                        },
                      },
                      user: {
                        bubble: {
                          background: "#0249D5",
                          // 'linear-gradient(130deg, #2870EA 20%, #1B4AEF 77.5%)',
                        },
                      },
                      ai: {
                        bubble: {
                          background: "#545A64",
                          // 'rgba(255,255,255,0.7)',
                          color: "#FFFFFF",
                        },
                      },
                    },
                   }}
                    directConnection={{
                      openAI: {
                        key: 'sk-proj-Nn2EY4OGsq491ijHn5aFT3BlbkFJTpWt1ZJ4rTgHijMzN46j',
                        chat: true
                      }
                    }}
                    style={{ 
                      borderRadius: '10px', 
                      height: '300px', 
                      width: '400px', 
                      backgroundColor: 'rgba(64, 64, 64, 0.8)', 
                      border: '1px solid rgba(64, 64, 64, 0.2)', 
                      color: 'black',
                    }}
                    textInput={{ 
                      placeholder: { 
                        text: 'How can I help?',
                        style: {
                          color: 'rgba(255, 255, 255, 0.7)s',
                          fontSize: '16px',
                          fontFamily: 'Arial',
                        }
                      },
                      styles: {
                        container: {
                          color: 'white',
                          borderRadius: '4px',
                          border: 'unset',
                          width: '78%',
                          marginLeft: '-15px',
                          boxShadow: '0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16)',
                          backgroundColor: 'rgba(100, 100, 100, 0.8)',
                        }, 
                      } 
                    }}
                    initialMessages={response} 
                  />
                  {/* Clickable Prompts */}
                  {!edit && <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '10px',
                      gap: '15px',
                      }}>
                      <button onClick={() => promptCall(`Generate me an example of ${input1} based on ${inputE}.`)} className={styles.promptButton}>
                        Generate me an example of [ {input1} ] based on [ {inputE} ].
                      </button>
                      <button onClick={() => promptCall(`What is a real-world example of ${input2}?`)} className={styles.promptButton}>
                        What is a real-world example of [ {input2} ]?
                      </button>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '1px',
                      gap: '15px',
                      }}>
                      <button onClick={() => promptCall(`Can you further explain ${input3}?`)} className={styles.promptButton}>
                        Can you further explain [ {input3} ]?
                      </button>
                      <button onClick={() => videoPromptCall(input4)} className={styles.promptButton}>
                        Where in the module does it talk about [ {input4} ]?
                      </button>
                    </div>
                  </div>}
                  {/* Editable Prompts */}
                  {edit && <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '10px',
                      gap: '15px',
                      }}>
                      <div className={styles.promptButtonEdit}>
                        <span>
                          Generate me an example of <input onChange={(e) => setInput1(e.target.value)} type="text" value={input1} className={styles.inputBox}/> based on <input onChange={(e) => setInputE(e.target.value)} type="text" value={inputE} className={styles.inputBox}/>.
                        </span>
                      </div>
                      <div className={styles.promptButtonEdit}>
                        <span>
                          What is a real-world example of <input onChange={(e) => setInput2(e.target.value)} type="text" value={input2} className={styles.inputBox}/>?
                        </span>
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '1px',
                      gap: '15px',
                      }}>
                      <div className={styles.promptButtonEdit}>
                        <span>
                          Can you further explain <input onChange={(e) => setInput3(e.target.value)} type="text" value={input3} className={styles.inputBox}/>?
                        </span>
                      </div>
                      <div className={styles.promptButtonEdit}>
                        <span>
                          Where in the module does it talk about <input onChange={(e) => setInput4(e.target.value)} type="text" value={input4} className={styles.inputBox}/>?
                        </span>
                      </div>
                    </div>
                  </div>}
                  {!edit && <button onClick={() => setEdit(!edit)}style={{marginTop: '10px', width: '150px',}} className={styles.chatButton}>
                    Edit Prompts
                  </button>}
                  {edit && <button onClick={() => setEdit(!edit)}style={{marginTop: '10px', backgroundColor: 'rgb(97, 97, 97)', border: 'solid rgb(97, 97, 97) 1px', width: '100px',}} className={styles.chatButton}>
                    Save
                  </button>}

                </div>    
                }
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              margin: '8px'
              }}>
                <button onClick={handleClick} className={styles.chatButton}>
                  DeepChat
                </button>
                {jumpButton && <button onClick={() => videoJump()} className={styles.chatButton}>
                  Jump to timestamp
                </button>}
            </div>   
        </Box>
      </Flex>
    </Box>
  );
}
