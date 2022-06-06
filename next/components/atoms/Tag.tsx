import cx from 'classnames';
import React from 'react';

interface ITagPRops {
  title: string;
  slug?: string;
  isActive?: boolean;
  onClick?: () => unknown;
}

const Tag = ({ title, isActive = false, onClick }: ITagPRops) => {
  return (
    <div
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
      className={cx(
        'flex justify-center text-center border-2 border-white py-2 px-6 uppercase text-nav',
        {
          'bg-white text-gmbDark': isActive,
        }
      )}
    >
      {title}
    </div>
  );
};

export default Tag;
