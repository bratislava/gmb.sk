// @ts-strict-ignore
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterImg from '../../../assets/images/newsletterimg.png';
import Button from '../../atoms/Button';
import Section from './Section';

export interface NewsletterSectionProps {
  anchor?: string;
}

const NewsletterSection = ({ anchor }: NewsletterSectionProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState('');
  const [agree, setAgree] = React.useState(false);
  const [emailError, setEmailError] = React.useState(null);
  const [agreeError, setAgreeError] = React.useState(null);

  const clear = () => {
    setEmail('');
    setAgree(false);
    setEmailError(null);
    setAgreeError(null);
  };

  const isFormValid = (): boolean => {
    let emailError: string | null;
    let agreeError: string | null;

    if (email.length <= 0) {
      emailError = t('errors.emailMandatory');
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email).toLowerCase()
      )
    ) {
      emailError = t('errors.emailIncorrectFormat');
    } else {
      emailError = null;
    }

    if (!agree) {
      agreeError = t('errors.fieldMandatory');
    } else {
      agreeError = null;
    }

    setEmailError(emailError);
    setAgreeError(agreeError);

    return !emailError && !agreeError;
  };

  return (
    <Section
      anchor={anchor}
      color="dark"
      className="flex flex-col-reverse justify-between w-full px-xStandard py-yHigh lg:flex-row"
    >
      <div className="lg:w-4/6 xl:w-3/6">
        <hgroup>
          <h3 className="text-xxl">{t('newsletter.beInThePicture')}</h3>
          <h4 className="font-regular text-xxl">
            {t('newsletter.newsletter')}
          </h4>
        </hgroup>

        <MailchimpSubscribe
          url="https://gmb.us3.list-manage.com/subscribe/post?u=26c2efb55660fd966cd447999&id=e18d8cb372"
          render={({ subscribe }) => {
            const handleSubmit = () => {
              if (isFormValid()) {
                subscribe({
                  EMAIL: email,
                });
                clear();
              }
            };
            return (
              // <div className="mt-[43px] lg:mt-[68px]">
              <div>
                <p className="pt-10 text-[18px] lg:text-[27px]">
                  {t('newsletter.beInformedEvents')}
                </p>
                <div className="flex pt-10 pb-2">
                  <input
                    className="w-full p-2 bg-transparent border-2 border-white lg:mr-10 text-md"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                {emailError ? (
                  <p className="text-red-500 ">{emailError}</p>
                ) : null}
                <div className="flex items-center w-full mt-3 mb-6">
                  <input
                    id="gdprCheckbox"
                    type="checkbox"
                    className="flex-none box-border appearance-none mr-[10px] bg-transparent border-2 border-white w-4 h-4 inline-block checked:bg-white checked:after:content-['✔'] after:content-[''] after:-top-[5px] after:inline-block after:relative after:text-[#000] after:font-heavy -mt-[1px] cursor-pointer"
                    checked={agree}
                    onChange={() => setAgree((prev) => !prev)}
                  />
                  <label
                    htmlFor="gdprCheckbox"
                    className="cursor-pointer select-none text-btn"
                  >
                    {t('common.gdprAccept')}
                  </label>
                </div>
                {agreeError ? (
                  <p className="pb-5 -mt-3 text-red-500">{agreeError}</p>
                ) : null}
                <Button
                  size="medium"
                  color="light"
                  onClick={handleSubmit}
                  className="block w-full lg:hidden"
                >
                  {t('common.login')}
                </Button>
              </div>
            );
          }}
        />
      </div>
      <div className="flex justify-center mb-10 lg:mb-0 lg:w-2/6 ">
        <div className="flex justify-center w-full lg:block">
          <Image src={NewsletterImg} alt="newsletter" unoptimized />
        </div>
      </div>
    </Section>
  );
};

export default NewsletterSection;
