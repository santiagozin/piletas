import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    darkMode: ['class'],
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsla(206,100%,73.3%,1)'
  			},
  			secondary: '#ededed',
  			tertiary: '#222222',
  			quaternary: '#333333',
  			quinary: '#444444',
  			pensok: '#294a72'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-poppins)',
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			fadeIn: {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			blink: {
  				'0%': {
  					opacity: '0.2'
  				},
  				'20%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0.2'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			fadeIn: 'fadeIn .3s ease-in-out',
  			carousel: 'marquee 60s linear infinite',
  			blink: 'blink 1.4s both infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};

export default config;
