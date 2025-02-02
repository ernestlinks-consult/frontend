/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: "#050582",
        //     background: "var(--background)",
        //     foreground: "var(--foreground)",
      },
      spacing: {
        4.5: "1.125rem",
      },
      width: {
        hw: "1440px",
        iw: "120px",
        wlg: "120px",
        wmd: "126px",
        wsm: "91px",
      },
      height: {
        hlg: "60px",
        ih: "80px",
        hmd: "54px",
        hsm: "40px",
      },
      borderRadius: {
        8: "8px",
      },
    },
  },
  plugins: [],
};
