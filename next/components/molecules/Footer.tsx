import {
  ContactAndFooterFragment,
  ContentPageFragment,
} from '@bratislava/strapi-sdk-city-gallery';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { ReactComponent as BABrand } from '../../assets/icons/BABrand.svg';
import { ReactComponent as EULogo } from '../../assets/icons/EULogo.svg';
import { ReactComponent as FBLogo } from '../../assets/icons/FB.svg';
import { ReactComponent as IGLogo } from '../../assets/icons/IG.svg';
import { ReactComponent as YTLogo } from '../../assets/icons/YT.svg';
import { isDefined } from '../../utils/isDefined';
import { getRouteForLocale } from '../../utils/localeRoutes';
import AppLangSwitchers from '../atoms/AppLangSwitchers';
import { Link } from '../atoms/Link';

interface FooterProps {
  contactInfo: ContactAndFooterFragment;
  contentPage?: ContentPageFragment;
}

const Footer = ({ contactInfo, contentPage }: FooterProps) => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="relative bg-gray-100 px-xStandard pt-14">
      <div className="border-t border-gray-300">
        <div className="flex flex-col items-center justify-between gap-10 pt-20 mb-20 md:flex-row">
          <div>
            <BABrand />
          </div>
          <div className="flex items-center">
            <div className="flex gap-6 mr-14">
              <Link href="/">
                <FBLogo />
              </Link>
              <Link href="/">
                <YTLogo />
              </Link>
              <Link href="/">
                <IGLogo />
              </Link>
            </div>
            <div>
              <EULogo />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col justify-between gap-20 pb-20 text-left lg:gap-0 lg:flex-row">
          <div>
            <div className="flex flex-col gap-y-3 mb-18">
              <p>{contactInfo?.mirbach?.title}</p>
              <p>{contactInfo?.mirbach?.address}</p>
              <p>{contactInfo?.mirbach?.zip}</p>
              <p>{contactInfo?.mirbach?.city}</p>
            </div>
            <div className="flex flex-col gap-y-3 mb-18">
              <p>{contactInfo?.palffy?.title}</p>
              <p>{contactInfo?.palffy?.address}</p>
              <p>{contactInfo?.palffy?.zip}</p>
              <p>{contactInfo?.palffy?.city}</p>
            </div>
            <div className="flex flex-col gap-y-3">
              {contactInfo?.email && (
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="underline normal-case"
                >
                  {contactInfo?.email}
                </Link>
              )}
              <p>{contactInfo?.mirbach?.phone}</p>
              <p>{contactInfo?.palffy?.phone}</p>
            </div>
          </div>

          <div>
            <p>{t('footer.siteMap')}</p>
            <div className="flex flex-col gap-4 mt-11">
              <Link href="/navstivte" preserveStyle>
                {t('navigation.visitUs')}
              </Link>
              <Link href="/vystavy" preserveStyle>
                {t('navigation.exhibitionsEvents')}
              </Link>
              <Link href="/objavujte" preserveStyle>
                {t('navigation.explore')}
              </Link>
              <Link href="/o-galerii" preserveStyle>
                {t('navigation.aboutGallery')}
              </Link>
              <Link href="/zapoj-sa" preserveStyle>
                {t('navigation.getInvolved')}
              </Link>
              <Link href="/zbierky" preserveStyle>
                {t('navigation.collections')}
              </Link>
            </div>
          </div>

          <div>
            <p>{t('footer.quickLinks')}</p>
            <div>
              <Link
                href={getRouteForLocale(
                  '/zverejnovanie-informacii',
                  i18n.language
                )}
                preserveStyle
              >
                {t('footer.disclosureOfInformation')}
              </Link>
              {contactInfo?.quickLinks?.filter(isDefined).map((link) => (
                <Link href={link.url ?? '#'} key={link.url}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* content end */}
        <div className="py-20 border-t">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <p>{t('footer.declarationOfAccessibility')}</p>
            <p>&copy; 2020 {t('common.capitalCityOfBratislava')}</p>
            <AppLangSwitchers contentPage={contentPage} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
