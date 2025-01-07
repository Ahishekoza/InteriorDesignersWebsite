// eslint-disable-next-line no-undef
// import textFillStroke from 'tailwindcss-text-fill-stroke';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	colors: {
  		'dark-green': '#2D322C',
  		'mango-orange': '#F79009',
  		white: '#FFFFFF',
  		red: '#FF0000',
  		purple: '#7e5bef',
  		pink: '#ff49db',
  		orange: '#ff7849',
  		green: '#13ce66',
  		yellow: '#ffc82c'
  	},
  	fontFamily: {
  		orbitron: [
  			'Orbitron',
  			'sans-serif'
  		],
  		montserrat: [
  			'Montserrat',
  			'sans-serif'
  		]
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  // eslint-disable-next-line no-undef
//   plugins: [textFillStroke, require("tailwindcss-animate")],
};
