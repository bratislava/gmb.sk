import { PropsWithChildren } from 'react'

import Footer from '@/src/components/molecules/Footer'
import Navigation from '@/src/components/molecules/Navigation'
import { ContentPageEntityFragment, MainPageEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

export type PageWrapperProps = {
  page?: WithAttributes<ContentPageEntityFragment> | WithAttributes<MainPageEntityFragment>
}

const PageWrapper = ({ children, page }: PropsWithChildren<PageWrapperProps>) => {
  return (
    <>
      <header>
        <Navigation page={page} />
      </header>
      <main className="scroll-mt-nav">{children}</main>
      <footer>
        <Footer page={page} />
      </footer>
    </>
  )
}

export default PageWrapper
