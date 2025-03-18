import { useTranslation } from 'next-i18next'

import Button from '@/src/components/atoms/Button'

/* Based on approach here: https://levelup.gitconnected.com/build-an-accessible-skip-to-content-anchor-link-with-react-140903f3bd7e */
const handleSkip = () => {
  const contentElement: HTMLElement | null = document.querySelector('main:first-of-type')
  if (contentElement) {
    contentElement.setAttribute('tabindex', '0')
    contentElement.focus()
    setTimeout(() => contentElement.removeAttribute('tabindex'), 1000)
  }
}

const SkipNavigation = () => {
  const { t } = useTranslation()

  return (
    <div className="fixed left-0 top-nav z-10 translate-x-[-1000px] bg-white p-6 transition-transform focus-within:translate-x-0">
      <Button onClick={handleSkip}>{t('navigation.skipNavigation')}</Button>
    </div>
  )
}

export default SkipNavigation
