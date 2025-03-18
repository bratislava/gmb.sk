import { useTranslation } from 'next-i18next'

import PageWrapper from '@/src/components/pages/PageWrapper'

interface ErrorPageProps {
  statusCode: number
}

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <div className="flex h-[calc(100vh-119px)] w-full flex-col items-center justify-center text-center">
        <h1 className="text-xxl">----- {statusCode} -----</h1>
        <h2 className="text-xl">
          {
            {
              404: t('common.errors.404'),
              500: 'Internal server error',
            }[statusCode]
          }
        </h2>
      </div>
    </PageWrapper>
  )
}

export default ErrorPage
