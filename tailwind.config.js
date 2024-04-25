/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      content: {
        'money': 'url("money.svg")',
        'chevron': 'url("chevron.svg")',
        'frame': 'url("frame.svg")',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue': '#007FBA',
        'bg1': '#F9F9F9',
        'gray1': '#37474F',
        'gray2': '#455A64',
        'gray3': '#CFD8DC',
        'gray4': '#F1F4F5',
      }
    },
  },
  plugins: [],
};
