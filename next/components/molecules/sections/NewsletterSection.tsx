import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import NewsletterImg from '../../../assets/images/newsletterimg.png'
import Button from '../../atoms/Button'
import Section from './Section'

export interface NewsletterSectionProps {
  anchor?: string
}

const NewsletterSection = ({ anchor }: NewsletterSectionProps) => {
  const { t } = useTranslation()
  const [email, setEmail] = React.useState('')
  const [agree, setAgree] = React.useState(false)
  const [emailError, setEmailError] = React.useState<string>('')
  const [agreeError, setAgreeError] = React.useState<string>('')

  const clear = () => {
    setEmail('')
    setAgree(false)
    setEmailError('')
    setAgreeError('')
  }

  const isFormValid = (): boolean => {
    const newAgreeError = !agree ? t('errors.fieldMandatory') : ''

    let newEmailError = ''
    if (email.length === 0) {
      newEmailError = t('errors.emailMandatory')
    } else if (
      !/^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z\-]+\.)+[A-Za-z]{2,}))$/.test(
        String(email).toLowerCase()
      )
    ) {
      newEmailError = t('errors.emailIncorrectFormat')
    }

    setEmailError(newEmailError)
    setAgreeError(newAgreeError)

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
          render={({ subscribe }) => {
            const handleSubmit = () => {
              if (isFormValid()) {
                subscribe({
                  EMAIL: email,
                })
                clear()
              }
            }
            return (
              <div>
                <p className="pt-yLg text-xl">{t('newsletter.beInformedEvents')}</p>
                <div className="flex flex-col gap-xMd pt-10 pb-2 md:flex-row">
                  <div className="grow">
                    <input
                      className="w-full border-2 border-white bg-transparent p-2 py-[calc(18px*var(--icon-size-factor))] text-btn"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      required
                      placeholder={t('newsletter.insertEmail')}
                      aria-invalid={emailError !== ''}
                      aria-labelledby="email-error"
                    />
                    {emailError ? (
                      <p id="email-error" className="text-red-500 ">
                        {emailError}
                      </p>
                    ) : null}
                    <div className="my-6 flex w-full items-center">
                      <input
                        id="gdprCheckbox"
                        type="checkbox"
                        className="relative mr-xSm mt-[-1px] box-border inline-block h-[var(--font-size-btn)] w-[var(--font-size-btn)] flex-none cursor-pointer appearance-none border-2 border-white bg-transparent after:absolute after:top-[-1px] after:left-0 after:inline-block after:text-btn after:font-heavy after:leading-[var(--font-size-btn)] after:text-[#000] after:content-[''] checked:bg-white checked:after:content-['✔']"
                        checked={agree}
                        required
                        onChange={() => setAgree((prev) => !prev)}
                        aria-labelledby="agree-error"
                        aria-invalid={agreeError !== ''}
                      />
                      <label
                        htmlFor="gdprCheckbox"
                        className="cursor-pointer select-none overflow-x-hidden whitespace-nowrap text-btn"
                      >
                        {t('common.gdprAccept')}
                        <span className="pl-[6px] text-red-500">*</span>
                      </label>
                    </div>
                    {agreeError ? (
                      <p id="agree-error" className="-mt-3 pb-5 text-red-500">
                        {agreeError}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <Button color="light" onClick={handleSubmit} className="whitespace-nowrap" type="submit">
                      {t('common.login')}
                    </Button>
                  </div>
                </div>
              </div>
            )
          }}
        />
      </div>
      <div className="mb-yMd flex justify-center lg:mb-0 lg:w-2/6 ">
        <div className="flex w-full justify-center lg:block">
          <Image src={NewsletterImg} alt="newsletter" unoptimized />
        </div>
      </div>
    </Section>
  )
}

export default NewsletterSection
