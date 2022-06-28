const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities }) => {
  matchUtilities({
    dw: (value) => ({
      width: `calc(${value}*var(--icon-size-factor))`,
    }),
    dh: (value) => ({
      height: `calc(${value}*var(--icon-size-factor))`,
    }),
  })
})
