import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1b9cdc'
      },
      screens: {
        xs: '480px'
      }
    }
  },
  plugins: []
}
export default config
