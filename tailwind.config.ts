import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSmoothing: {
        'antialiased': 'antialiased',
        'subpixel-antialiased': 'subpixel-antialiased',
      },
      textRendering: {
        'optimize-legibility': 'optimizeLegibility',
        'optimize-speed': 'optimizeSpeed',
        'geometric-precision': 'geometricPrecision',
      },
    },
  },
  plugins: [],
};

export default config;
