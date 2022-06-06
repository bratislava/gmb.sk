import cx from 'classnames';
import Link from 'next/link';
import React from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: 'small' | 'medium' | 'link';
  href?: string;
  className?: string;
  color?: 'dark' | 'light';
};

const Button = ({
  className,
  children,
  size = 'medium',
  onClick,
  href,
  color = 'dark',
  ...rest
}: ButtonProps) => {
  const styles = {
    className: cx(
      className,
      'flex text-center justify-center border-solid border-2 uppercase text-btn font-medium',
      {
        'px-[24px] py-[10px] lg:px-[28px] lg:py-[11px] 3xl:px-[32px] 3xl:py-[12px]':
          size === 'small',
        'px-[38px] py-[12px] lg:px-[50px] lg:py-[13px] 3xl:px-[64px] 3xl:py-[14px]':
          size === 'medium',
        'text-nav uppercase hover:underline underline-offset-2':
          size === 'link',
        'text-gmbDark border-gmbDark hover:bg-gmbDark hover:text-white':
          color === 'dark' && size !== 'link',
        'text-white border-white hover:bg-white hover:text-gmbDark':
          color === 'light' && size !== 'link',
        'text-gmbDark border-none': color === 'dark' && size === 'link',
        'text-white border-none': color === 'light' && size === 'link',
      }
    ),
  };

  if (href && href.length) {
    return (
      <Link href={href} passHref>
        <a href={href} role="button" {...styles}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} {...rest} {...styles}>
      {children}
    </button>
  );
};

export default Button;
