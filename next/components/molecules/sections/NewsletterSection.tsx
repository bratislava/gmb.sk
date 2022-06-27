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
  const [emailError, setEmailError] = React.useState<string | null>(null)
  const [agreeError, setAgreeError] = React.useState<string | null>(null)

  const clear = () => {
    setEmail('')
    setAgree(false)
    setEmailError(null)
    setAgreeError(null)
  }

  const isFormValid = (): boolean => {
    let emailError: string | null
    let agreeError: string | null

    if (email.length <= 0) {
      emailError = t('errors.emailMandatory')
    } else if (
      !/^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z\-]+\.)+[A-Za-z]{2,}))$/.test(
        String(email).toLowerCase()
      )
    ) {
      emailError = t('errors.emailIncorrectFormat')
    } else {
      emailError = null
    }

    agreeError = !agree ? t('errors.fieldMandatory') : null;

    setEmailError(emailError)
    setAgreeError(agreeError)

    return !emailError && !agreeError
  }

  return (
    <Section
      anchor={anchor}
      color="dark"
      className="flex w-full flex-col-reverse justify-between px-xStandard py-yHigh lg:flex-row"
    >
      <div className="lg:w-4/6 xl:w-3/6">
        <hgroup>
          <h2 className="text-xxl">
            {t('newsletter.beInThePicture')}
            <br />
            <span className="font-regular">{t('newsletter.newsletter')}</span>
          </h2>
        </hgroup>

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
              // <div className="mt-[43px] lg:mt-[68px]">
              <div>
                <p className="pt-10 text-[18px] lg:text-[27px]">{t('newsletter.beInformedEvents')}</p>
                <div className="flex pt-10 pb-2">
                  <input
                    className="w-full border-2 border-white bg-transparent p-2 text-md lg:mr-10"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    aria-label="Email"
                  />
                  <Button
                    size="medium"
                    color="light"
                    onClick={handleSubmit}
                    className="hidden whitespace-nowrap lg:block"
                  >
                    {t('common.login')}
                  </Button>
                </div>
                {emailError ? <p className="text-red-500 ">{emailError}</p> : null}
                <div className="mt-3 mb-6 flex w-full items-center">
                  <input
                    id="gdprCheckbox"
                    type="checkbox"
                    className="mr-[10px] -mt-[1px] box-border inline-block h-4 w-4 flex-none cursor-pointer appearance-none border-2 border-white bg-transparent after:relative after:-top-[5px] after:inline-block after:font-heavy after:text-[#000] after:content-[''] checked:bg-white checked:after:content-['✔']"
                    checked={agree}
                    onChange={() => setAgree((prev) => !prev)}
                  />
                  <label htmlFor="gdprCheckbox" className="cursor-pointer select-none text-btn">
                    {t('common.gdprAccept')}
                  </label>
                </div>
                {agreeError ? <p className="-mt-3 pb-5 text-red-500">{agreeError}</p> : null}
                <Button size="medium" color="light" onClick={handleSubmit} className="block w-full lg:hidden">
                  {t('common.login')}
                </Button>
              </div>
            )
          }}
        />
      </div>
      <div className="mb-10 flex justify-center lg:mb-0 lg:w-2/6 ">
        <div className="flex w-full justify-center lg:block">
          <Image src={NewsletterImg} alt="newsletter" unoptimized />
        </div>
      </div>
    </Section>
  )
}

export default NewsletterSection
