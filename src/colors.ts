const courseColors = {
  $english: "#E45D3A", // $red-400
  $science: "#107B4B", // $secondary-400
  $math: "#0249D5", // $primary-400
  $history: "#6B4CC1", // $purple-400
  $elective: "#000000", // $gray-1000
  $world: "#F69C49", // $orange-400
  $physical: "#F4C01E", // $yellow-400
  $visual: "#FCA9A9", // $pink-400
  $electives: "#000000", // $gray-1000
};

export const darkColors = {
  ...courseColors,
  "$bg-01": "#1A1B1F", // $gray-999
  "$bg-02": "#212226", // $gray-900
  "$bg-03": "#282A2E", // $gray-800
  "$subtle-border": "#303236", // $gray-700
  "$component-border": "#545A64", // $gray-500
  "$emphasis-border": "#FCFDFF", // $gray-000
  "$muted-border": "#000000", // $gray-1000
  "$text-01": "#FCFDFF", // $gray-000
  "$text-02": "#B0B5C0", // $gray-200
  "$text-03": "#8D939F", // $gray-300
  "$primary-text": "#407DF7", // $primary-100
  "$secondary-text": "#FCFDFF", // $gray-000
  "$tertiary-text": "#B0B5C0", // $gray-200
  "$icon-text": "#6E7480", // $gray-400
  "$placeholder-text": "#8D939F", // $gray-300
  "$disabled-text": "#545A64", // $gray-500
  "$primary-button": "#0249D5", // $primary-400
  "$secondary-button": "#FCFDFF", // $gray-000
  "$tertiary-button": "#FCFDFF", // $gray-000
  "$primary-button-text": "#FFFFFF", // $gray-000
  "$secondary-button-text": "#FFFFFF", // $gray-000
  "$tertiary-button-text": "#FFFFFF", // $gray-000
  "$hover-primary-text": "#7AA7FF", // $primary-50
  "$hover-secondary-text": "#407DF7", // $primary-100
  "$hover-tertiary-text": "#FCFDFF", // $gray-000
  "$hover-primary": "#175FEB", // $primary-200
  "$hover-secondary": "#303236", // $gray-700
  "$hover-tertiary": "#303236", // $gray-700
  "$hover-ui": "#303236", // $gray-700
  "$selected-ui": "#282A2E", // $gray-800
  "$press-primary": "#0038A6", // $primary-600
  "$press-secondary": "#282A2E", // $gray-800
  "$press-tertiary": "#282A2E", // $gray-800
  $focus: "#FCFDFF", // $gray-000
  $active: "#0249D5", // $primary-400
  $error: "#E45D3A", // $red-400
  $success: "#107B4B", // $secondary-400
  $important: "#0249D5", // $primary-400
  $warning: "#F69C49", // $orange-400
  "$tertiary-01": "#F4C01E", // $yellow-400
  "$tertiary-02": "#F69C49", // $orange-400
  "$tertiary-03": "#6B4CC1", // $purple-400
  "$tertiary-04": "#FCA9A9", // $pink-400
  "$tertiary-05": "#F9FAF5", // $beige-400
  "$modal-overlay": "#111213", // $gray-1000
};

export const lightColors = {
  ...courseColors,
  "$bg-01": "#FFFFFF", // $gray-000
  "$bg-02": "#F2F2F2", // $gray-100
  "$bg-03": "#F9FAF5", // off-white
  "$subtle-border": "#E8E8E8", // $gray-200
  "$component-border": "#B8B8B8", // $gray-400
  "$emphasis-border": "#000000", // $gray-1000
  "$muted-border": "#F2F2F2", // $gray-100
  "$text-01": "#000000", // $gray-1000
  "$text-02": "#525252", // $gray-800
  "$text-03": "#707070", // $gray-700
  "$primary-text": "#0249D5", // $primary-400
  "$secondary-text": "#000000", // $gray-1000
  "$tertiary-text": "#525252", // $gray-800
  "$icon-text": "#858585", // $gray-600
  "$placeholder-text": "#707070", // $gray-700
  "$disabled-text": "#A3A3A3", // $gray-500
  "$primary-button": "#0249D5", // $primary-400
  "$secondary-button": "#B8B8B8", // $gray-400
  "$tertiary-button": "#000000", // $gray-1000
  "$primary-button-text": "#FFFFFF", // $gray-000
  "$secondary-button-text": "#000000", // $gray-1000
  "$tertiary-button-text": "#000000", // $gray-1000
  "$hover-primary-text": "#175FEB", // $primary-200
  "$hover-secondary-text": "#0249D5", // $primary-400
  "$hover-tertiary-text": "#000000", // $gray-1000
  "$hover-primary": "#175FEB", // $primary-200
  "$hover-secondary": "#E8E8E8", // $gray-200
  "$hover-tertiary": "#E8E8E8", // $gray-200
  "$hover-ui": "#E8E8E8", // $gray-200
  "$selected-ui": "#F2F2F2", // $gray-100
  "$press-primary": "#0038A6", // $primary-600
  "$press-secondary": "#DBDBDB", // $gray-300
  "$press-tertiary": "#DBDBDB", // $gray-300
  $focus: "#000000", // $gray-1000
  $active: "#0249D5", // $primary-400
  $error: "#E45D3A", // $red-400
  $success: "#107B4B", // $secondary-400
  $important: "#0249D5", // $primary-400
  $warning: "#F69C49", // $orange-400
  "$tertiary-01": "#F69C49", // $orange-400
  "$tertiary-02": "#F69C49", // $orange-400
  "$tertiary-03": "#6B4CC1", // $purple-400
  "$tertiary-04": "#FCA9A9", // $pink-400
  "$tertiary-05": "#F9FAF5", // $beige-400
  "$modal-overlay": "#111213", // $gray-1000
};

export const colors = {
  ...courseColors,
  "$bg-01": {
    _dark: "#1A1B1F",
    _light: "#FFFFFF",
  },
  "$bg-02": {
    _dark: "#212226",
    _light: "#F2F2F2",
  },
  "$bg-03": {
    _dark: "#282A2E",
    _light: "#F9FAF5",
  },
  "$subtle-border": {
    _dark: "#303236",
    _light: "#E8E8E8",
  },
  "$component-border": {
    _dark: "#545A64",
    _light: "#B8B8B8",
  },
  "$emphasis-border": {
    _dark: "#FCFDFF",
    _light: "#000000",
  },
  "$muted-border": {
    _dark: "#000000",
    _light: "#F2F2F2",
  },
  "$text-01": {
    _dark: "#FCFDFF",
    _light: "#000000",
  },
  "$text-02": {
    _dark: "#B0B5C0",
    _light: "#525252",
  },
  "$text-03": {
    _dark: "#8D939F",
    _light: "#707070",
  },
  "$primary-text": {
    _dark: "#407DF7",
    _light: "#0249D5",
  },
  "$secondary-text": {
    _dark: "#FCFDFF",
    _light: "#000000",
  },
  "$tertiary-text": {
    _dark: "#B0B5C0",
    _light: "#525252",
  },
  "$icon-text": {
    _dark: "#6E7480",
    _light: "#858585",
  },
  "$placeholder-text": {
    _dark: "#8D939F",
    _light: "#707070",
  },
  "$disabled-text": {
    _dark: "#545A64",
    _light: "#A3A3A3",
  },
  "$primary-button": {
    _dark: "#0249D5",
    _light: "#0249D5",
  },
  "$secondary-button": {
    _dark: "#FCFDFF",
    _light: "#B8B8B8",
  },
  "$tertiary-button": {
    _dark: "#FCFDFF",
    _light: "#000000",
  },
  "$primary-button-text": {
    _dark: "#FFFFFF",
    _light: "#FFFFFF",
  },
  "$secondary-button-text": {
    _dark: "#FFFFFF",
    _light: "#000000",
  },
  "$tertiary-button-text": {
    _dark: "#FFFFFF",
    _light: "#000000",
  },
  "$hover-primary-text": {
    _dark: "#7AA7FF",
    _light: "#175FEB",
  },
  "$hover-secondary-text": {
    _dark: "#407DF7",
    _light: "#0249D5",
  },
  "$hover-tertiary-text": {
    _dark: "#FCFDFF",
    _light: "#000000",
  },
  "$hover-primary": {
    _dark: "#175FEB",
    _light: "#175FEB",
  },
  "$hover-secondary": {
    _dark: "#303236",
    _light: "#E8E8E8",
  },
  "$hover-tertiary": {
    _dark: "#303236",
    _light: "#E8E8E8",
  },
  "$hover-ui": {
    _dark: "#303236",
    _light: "#E8E8E8",
  },
  "$selected-ui": {
    _dark: "#282A2E",
    _light: "#F2F2F2",
  },
  "$press-primary": {
    _dark: "#0038A6",
    _light: "#0038A6",
  },
  "$press-secondary": {
    _dark: "#282A2E",
    _light: "#DBDBDB",
  },
  "$press-tertiary": {
    _dark: "#282A2E",
    _light: "#DBDBDB",
  },
  $focus: {
    _dark: "#FCFDFF",
    _light: "#000000",
  },
  $active: {
    _dark: "#0249D5",
    _light: "#0249D5",
  },
  $error: {
    _dark: "#E45D3A",
    _light: "#E45D3A",
  },
  $success: {
    _dark: "#107B4B",
    _light: "#107B4B",
  },
  $important: {
    _dark: "#0249D5",
    _light: "#0249D5",
  },
  $warning: {
    _dark: "#F69C49",
    _light: "#F69C49",
  },
  "$tertiary-01": {
    _dark: "#F4C01E",
    _light: "#F69C49",
  },
  "$tertiary-02": {
    _dark: "#F69C49",
    _light: "#F69C49",
  },
  "$tertiary-03": {
    _dark: "#6B4CC1",
    _light: "#6B4CC1",
  },
  "$tertiary-04": {
    _dark: "#FCA9A9",
    _light: "#FCA9A9",
  },
  "$tertiary-05": {
    _dark: "#F9FAF5",
    _light: "#F9FAF5",
  },
  "$modal-overlay": {
    _dark: "#111213",
    _light: "#111213",
  },
};
