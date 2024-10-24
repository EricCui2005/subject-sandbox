import Head from "next/head";
import { VideoPage } from "@/components/VideoPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subject - Stanford Sandbox</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoPage />
    </>
  );
}
