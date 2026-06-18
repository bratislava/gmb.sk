declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string; className?: string }
  >

  const src = ReactComponent
  export default src
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.css'

// swiper CSS exports have no `types` field in their package.json exports map, so TS can't resolve them
declare module 'swiper/css'
declare module 'swiper/css/navigation'
declare module 'swiper/css/pagination'
