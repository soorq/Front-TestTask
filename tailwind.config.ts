import type { PluginAPI } from 'tailwindcss/types/config';
import defaultTheme from 'tailwindcss/defaultTheme';
import { type Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const PliginAnimationDelay = plugin(
    ({
        matchUtilities,
        theme
    }: {
        matchUtilities: PluginAPI['matchUtilities'];
        theme: PluginAPI['theme'];
    }) => {
        matchUtilities(
            {
                'animation-delay': (value: string) => {
                    return {
                        'animation-delay': value
                    };
                }
            },
            {
                values: theme('transitionDelay')
            }
        );
    }
);

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}'
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    secondary: 'hsl(var(--background-secondary))'
                },
                stroke: {
                    DEFAULT: 'hsl(var(--stroke))',
                    secondary: 'hsl(var(--stroke-secondary))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                loading: {
                    '0%, 40%, 100%': {
                        transform: 'scaleY(0.05)'
                    },
                    '20%': {
                        transform: 'scaleY(2.5)'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [
        require('tailwindcss-animate'),
        PliginAnimationDelay,
        require('autoprefixer')
    ]
} satisfies Config;

export default config;
