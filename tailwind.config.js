module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#593774', //purple
          secondary: '#d6f8db', //light-green
          accent: '#d6f8db',//light-green
          neutral: '#fcd1e0',//pink
          "base-100": '#ffffff',//bg: white
          "base-200": '#d6f8db',//table headers: light-green
          "base-300": '#d6f8db',//row hover color: light-green
          "base-content": '#F8C3B8'//light-green
        },
      },
    ],
  },
}
