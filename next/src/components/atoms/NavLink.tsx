import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import Link from '@/src/components/atoms/Link'
import cn from '@/src/utils/cn'

export interface INavLinkProps {
  url: string
  children: ReactNode
}

const NavLink = ({ url, children }: INavLinkProps) => {
  const router = useRouter()
  const isActive = router.asPath === url

  return (
    <Link
      href={url}
      className={cn('whitespace-nowrap', { 'underline underline-offset-2': isActive })}
    >
      {children}
    </Link>
  )
}

export default NavLink
