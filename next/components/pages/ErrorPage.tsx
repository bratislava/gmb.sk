import React from 'react'

import { GeneralEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import Footer from '../molecules/Footer'

interface ErrorPageProps {
  contactInfo?: WithAttributes<GeneralEntityFragment> | null | undefined
  statusCode: number
}

const ErrorPage = ({ statusCode, contactInfo }: ErrorPageProps) => {
  return (
    <>
      <div className="flex h-[calc(100vh-119px)] w-full flex-col items-center justify-center text-center">
        <h1 className="text-xxl">----- {statusCode} -----</h1>
        <h2 className="text-xl">
          {
            {
              404: 'Page not found',
              500: 'Internal server error',
            }[statusCode]
          }
        </h2>
      </div>
      {contactInfo && <Footer contactInfo={contactInfo} />}
    </>
  )
}

export default ErrorPage
