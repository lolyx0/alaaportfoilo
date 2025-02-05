module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'glowing': '0 0 5px #ff6ec7, 0 0 10px #ff6ec7, 0 0 20px #ff6ec7, 0 0 40px #ff6ec7',
      },
      fontFamily: {
        domine: ['"Domine"', 'serif'], 
      },
    },
  },
  plugins: [],
};
