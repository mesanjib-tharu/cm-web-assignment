import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      padding: {
        DEFAULT: '15px',
      }
    },
    fontSize: {
      base: "16px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px' 
    },
    extend: {
      colors:{
        primary: '#242a2b',
        secondary: '#808080',
        'gray-custom': '#393939',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        gray: '#e8f0f1'
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none', // Remove underline
              color: '#3b82f6', // Set custom color (e.g., Tailwind's blue-500)
              fontSize: '16px', // Set custom font size
              '&:hover': {
                color: '#1d4ed8', // Change color on hover (e.g., Tailwind's blue-700)
              },
            },
          },
        },
      },
      fontFamily: {
        inter:["var(--inter)"],
        primary:["var(--inter)"],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
        // Add custom weights
        custom1: '350', // Example custom weight
        custom2: '450', // Example custom weight
      },
      stroke: {
        lightGray: "#F5F5F5",
      },
      boxShadow:{
        custom1: '0px 2px 40px 0px rgba(8,70,78,0.08)',
        custom2: '0px 0px 30px 0px rgba(8,73,81,0.06)',
        custom3: '0px 0px 30px 0px rgba(0, 0, 0, 0.25)' /** Header shadow */
      },
      backgroundImage:{
        services: 'url(../../assets/img/services/bg.svg',
        testimonials: 'url(../../assets/img/testimonials/bg.svg',
        departments: 'url(../../assets/img/departments/bg.svg',
        quoteLeft: 'url(../../assets/icons/testimonials/quote-left.svg',
        quoteRight: 'url(../../assets/icons/testimonials/quote-right.svg',
      }
    },
  },
  plugins: [],
}
export default config
