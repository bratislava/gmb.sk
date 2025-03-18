import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import NewsletterImg from '@/src/assets/images/v-obraze-white.png'
import Button from '@/src/components/atoms/Button'
import Checkbox from '@/src/components/atoms/Checkbox'
import Section from '@/src/components/molecules/sections/Section'
import { generateImageSizes } from '@/src/utils/generateImageSizes'

export interface NewsletterSectionProps {
  anchor?: string
}

const NewsletterSection = ({ anchor }: NewsletterSectionProps) => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [agree, setAgree] = useState(false)
  const [emailError, setEmailError] = useState<string>('')
  const [agreeError, setAgreeError] = useState<string>('')

  const emailRef = useRef<HTMLInputElement>(null)
  const agreeRef = useRef<HTMLInputElement>(null)

  const clear = () => {
    setEmail('')
    setAgree(false)
    setEmailError('')
    setAgreeError('')
  }

  useEffect(() => {
    setAgreeError('')
  }, [agree])

  const isFormValid = (): boolean => {
    const newAgreeError = agree ? '' : t('errors.fieldMandatory')

    let newEmailError = ''
    if (email.length === 0) {
      newEmailError = t('errors.emailMandatory')
    } else if (
      !/^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/.test(
        String(email).toLowerCase()
      )
    ) {
      newEmailError = t('errors.emailIncorrectFormat')
    }

    setEmailError(newEmailError)
    setAgreeError(newAgreeError)

    if (newAgreeError) {
      agreeRef?.current?.focus()
    }

    if (newEmailError) {
      emailRef?.current?.focus()
    }

    return !newEmailError && !newAgreeError
  }

  return (
    <Section
      anchor={anchor}
      color="dark"
      className="flex w-full flex-col-reverse justify-between px-xMd py-yLg lg:flex-row"
    >
      <div className="lg:w-4/6 xl:w-3/6">
        <h2 className="text-xxl">
          {t('newsletter.beInThePicture')}
          <br />
          <span className="font-regular">{t('newsletter.newsletter')}</span>
        </h2>

        <MailchimpSubscribe
          url="https://gmb.us3.list-manage.com/subscribe/post?u=26c2efb55660fd966cd447999&id=e18d8cb372"
          render={({ subscribe, status }) => {
            const handleSubmit = () => {
              if (isFormValid()) {
                subscribe({
                  EMAIL: email,
                })
                clear()
              }
            }

            return (
              <>
                <p className="py-yLg text-xl">{t('newsletter.beInformedEvents')}</p>
                <label htmlFor="email-input" className="text-md">
                  {t('newsletter.insertEmail')}
                  <span className="pl-[6px] text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-xMd py-2 md:flex-row">
                  <div className="grow">
                    <input
                      id="email-input"
                      className="w-full border-2 border-white bg-transparent p-2 py-[calc(18*var(--size-factor))] text-btn"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      required
                      aria-invalid={emailError !== ''}
                      ref={emailRef}
                    />
                    {emailError ? (
                      <label htmlFor="email-input" id="email-error" className="text-red-500">
                        <span className="sr-only">{t('errors.error')}: </span>
                        {emailError}
                      </label>
                    ) : null}
                    <div className="mt-6 flex w-full items-center lg:whitespace-nowrap">
                      <Checkbox isSelected={agree} onChange={setAgree} hasError={!!agreeError}>
                        {t('common.gdprAccept')}
                        <span className="pl-[6px] text-red-500">*</span>
                      </Checkbox>
                    </div>
                    {agreeError ? (
                      <label
                        htmlFor="gdprCheckbox"
                        id="agree-error"
                        className="-mt-3 pb-5 text-red-500"
                      >
                        <span className="sr-only">{t('errors.error')}: </span>
                        {agreeError}
                      </label>
                    ) : null}

                    {status === 'error' ? (
                      <p className="pt-10 text-sm text-red-600">{t('newsletter.failure')}</p>
                    ) : null}
                    {status === 'success' ? (
                      <p className="pt-10 text-sm text-green-600">{t('newsletter.success')}</p>
                    ) : null}
                    {status === 'sending' ? (
                      <p className="pt-10 text-sm">{t('newsletter.sending')}</p>
                    ) : null}
                  </div>
                  <div>
                    <Button
                      color="light"
                      onClick={handleSubmit}
                      className="whitespace-nowrap"
                      type="submit"
                      disabled={status === 'sending'}
                    >
                      {t('common.login')}
                    </Button>
                  </div>
                </div>
              </>
            )
          }}
        />
      </div>
      <div className="relative mb-yMd h-40 text-center lg:mb-0 lg:h-auto lg:w-2/6">
        <Image
          src={NewsletterImg}
          alt="newsletter"
          fill
          className="object-contain"
          sizes={generateImageSizes({ default: '33vw' })}
        />
      </div>
    </Section>
  )
}

export default NewsletterSection
