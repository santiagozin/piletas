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
  		spacing: {
  			'var-xs': 'var(--spacing-xs)',
  			'var-sm': 'var(--spacing-sm)',
  			'var-md': 'var(--spacing-md)',
  			'var-lg': 'var(--spacing-lg)',
  			'var-xl': 'var(--spacing-xl)',
  			'var-2xl': 'var(--spacing-2xl)',
  			'var-3xl': 'var(--spacing-3xl)',
  			'var-4xl': 'var(--spacing-4xl)',
  			'var-5xl': 'var(--spacing-5xl)',
  		},
  		width: {
  			'var-xs': 'var(--width-xs)',
  			'var-sm': 'var(--width-sm)',
  			'var-md': 'var(--width-md)',
  			'var-lg': 'var(--width-lg)',
  			'var-xl': 'var(--width-xl)',
  			'var-2xl': 'var(--width-2xl)',
  			'var-3xl': 'var(--width-3xl)',
  			'var-4xl': 'var(--width-4xl)',
  			'var-5xl': 'var(--width-5xl)',
  			'var-6xl': 'var(--width-6xl)',
  			'var-7xl': 'var(--width-7xl)',
  		},
  		height: {
  			'var-xs': 'var(--height-xs)',
  			'var-sm': 'var(--height-sm)',
  			'var-md': 'var(--height-md)',
  			'var-lg': 'var(--height-lg)',
  			'var-xl': 'var(--height-xl)',
  			'var-2xl': 'var(--height-2xl)',
  			'var-3xl': 'var(--height-3xl)',
  			'var-4xl': 'var(--height-4xl)',
  			'var-5xl': 'var(--height-5xl)',
  		},
  		size: {
  			'var-xs': 'var(--size-xs)',
  			'var-sm': 'var(--size-sm)',
  			'var-md': 'var(--size-md)',
  			'var-lg': 'var(--size-lg)',
  			'var-xl': 'var(--size-xl)',
  			'var-2xl': 'var(--size-2xl)',
  			'var-3xl': 'var(--size-3xl)',
  			'var-4xl': 'var(--size-4xl)',
  			'var-5xl': 'var(--size-5xl)',
  		},
  		borderRadius: {
  			'var-xs': 'var(--radius-xs)',
  			'var-sm': 'var(--radius-sm)',
  			'var-md': 'var(--radius-md)',
  			'var-lg': 'var(--radius-lg)',
  			'var-xl': 'var(--radius-xl)',
  			'var-2xl': 'var(--radius-2xl)',
  			'var-3xl': 'var(--radius-3xl)',
  			'var-full': 'var(--radius-full)',
  		},
  		fontSize: {
  			'var-xs': 'var(--font-xs)',
  			'var-sm': 'var(--font-sm)',
  			'var-base': 'var(--font-base)',
  			'var-lg': 'var(--font-lg)',
  			'var-xl': 'var(--font-xl)',
  			'var-2xl': 'var(--font-2xl)',
  			'var-3xl': 'var(--font-3xl)',
  			'var-4xl': 'var(--font-4xl)',
  			'var-5xl': 'var(--font-5xl)',
  			'var-6xl': 'var(--font-6xl)',
  			'var-7xl': 'var(--font-7xl)',
  			'var-8xl': 'var(--font-8xl)',
  			'var-9xl': 'var(--font-9xl)',
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
