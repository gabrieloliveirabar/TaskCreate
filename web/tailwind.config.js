/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#1C89C7',
        button_background: '#23ABFA',
        button_background_red:'#FA2323',
        header_background: '#11547A',
        input_background: '#11547A',
        h1:'#ffff',
       
      },
      fontFamily: {
        
        sans: ["Inter", "Arial", "sans-serif"]
      },
      fontStyle:['hover', focus]
    },
  },
  plugins: [],
}

