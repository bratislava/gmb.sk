import { PropsWithChildren } from 'react'

import Footer from '@/src/components/molecules/Footer'
import Navigation from '@/src/components/molecules/Navigation'
import { ContentPageEntityFragment } from '@/src/services/graphql'
import { WithAttributes } from '@/src/utils/isDefined'

interface IPageWrapperProps {
  contentPage?: WithAttributes<ContentPageEntityFragment>
}

const PageWrapper = ({ children, contentPage }: PropsWithChildren<IPageWrapperProps>) => {
  return (
    <>
      <header>
        <Navigation contentPage={contentPage} />
      </header>
      <main className="scroll-mt-nav">{children}</main>
      <footer>
        <Footer contentPage={contentPage} />
      </footer>
    </>
  )
}

export default PageWrapper
