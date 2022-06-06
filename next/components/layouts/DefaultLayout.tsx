// TODO - presently not used, but we'll likely want to follow the approach where layouts / wrappers are not applied in _app, but added to each route
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Navigation from '../molecules/Navigation';

interface IProps {
  children?: React.ReactNode;
}

const DefaultPageLayout = ({ children }: IProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('common.welcome')}</title>
      </Head>
      <div className="app">
        <header className="flex">
          <Navigation />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default DefaultPageLayout;
