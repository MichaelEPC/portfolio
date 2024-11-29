/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      hypermb: "420px",
      // => @media (min-width: 550px) { ... }

      mb: "500px",
      // => @media (min-width: 550px) { ... }

      presm: "540px",
      // => @media (min-width: 550px) { ... }

      smde: "550px",
      // => @media (min-width: 550px) { ... }

      sm: "682px",
      // => @media (min-width: 640px) { ... }

      premd: "720px",
      // => @media (min-width: 640px) { ... }

      md: "890px",
      // => @media (min-width: 768px) { ... }

      lg: "940px",
      // => @media (min-width: 1024px) { ... }

      xl: "1080px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1360px",
      // => @media (min-width: 1520px) { ... }

      "3xl": "1700px",
      // => @media (min-width: 1520px) { ... }
    },
    extend: {
      colors: {
        "principal-color": "#5eb6f4",
        "third-color": "#fffffd",
        "ligh-gray": "#DDDDDD",
        "text-color": "#707070",
        "tailwind-color": "#38BDF8",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
