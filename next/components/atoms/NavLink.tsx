import cx from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import { Link } from './Link';

export interface INavLinkProps {
  url: string;
  children: React.ReactNode;
}

const NavLink = ({ url, children }: INavLinkProps) => {
  const router = useRouter();
  const isActive = router.asPath === url;

  return (
    <Link
      href={url}
      className={cx('whitespace-nowrap', {
        'underline underline-offset-2': isActive,
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
