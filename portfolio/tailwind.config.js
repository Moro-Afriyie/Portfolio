module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'blue-gradient': 'linear-gradient(to bottom, #3b7eeb, #0094ee, #00a6e9, #15b6df, #5bc3d5)',
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
			backgroundColor: {
				hire: 'rgba(0,0,0,0.3)',
			},
		},
	},
	plugins: [],
};
