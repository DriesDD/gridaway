module.exports = {
  purge: {
    enabled: true,
    content: ['instyle.html']
  },
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.8rem',
      'tiny': '.5rem',
      'base': '1rem',
      'lg': '1.25rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      spacing: {
        '68': '17rem',
        '70': '17.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      colors: {
        palesteel: '#E4EFF5',
        brightblue: '#39ABEF',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'group-hover'],
    translate: ['responsive', 'hover','group-hover'],
    margin: ['responsive', 'hover', 'group-hover'],
    gridTemplateColumns: ['responsive'],
  },
  plugins: [require('tailwindcss'),
    require('autoprefixer'),
  ],
}