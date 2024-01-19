const defaultColors = {
  white: '#fff',
  black: '#000',
  
  textGrey: '#b9b9b9',
  error: '#B00020',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
}

const light = {
  dark: false,
  colors: {
    'background-app': '#292e34',
    background: '#000',
    surface: '#000',
    foreground: '#fff',
    label: '#6e6e6e',

    primary: '#ffc107',
    secondary: '#111',
    accent: '#000',

    ...defaultColors,
  },
}

const dark = {
  dark: true,
  colors: {
    ...defaultColors,
  },
}

export default { light, dark }
