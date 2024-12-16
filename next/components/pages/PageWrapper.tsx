import { PropsWithChildren } from 'react'

import Footer from '@/components/molecules/Footer'
import Navigation from '@/components/molecules/Navigation'
import { ContentPageEntityFragment } from '@/graphql'
import { WithAttributes } from '@/utils/isDefined'

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
