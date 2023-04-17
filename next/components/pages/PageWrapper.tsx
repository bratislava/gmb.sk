import React, { PropsWithChildren } from 'react'

import { ContentPageEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import Footer from '../molecules/Footer'
import Navigation from '../molecules/Navigation'

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
