import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        table: '286px 1fr 1fr 1fr 90px',
      },
      colors: {
        'ui-gray-900': '#111928',
        'ui-gray-500': '#6B7280',
        'ui-gray-200': '#E5E7EB',
        'ui-gray-50': '#F9FAFB',
        'ui-green-600': '#057A55',
        'ui-green-100': '#DEF7EC',
        'ui-red-600': '#540303',
        'ui-red-100': '#F7DEDE',
      },
    },
  },
  plugins: [],
}
export default config
