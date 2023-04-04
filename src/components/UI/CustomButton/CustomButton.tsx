import React from 'react';

import './CustomButton.scss';

type Props = {
  title: string;
  addedClass: string;
  imageSrc: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const CustomButton: React.FC<Props> = ({
  title,
  addedClass,
  imageSrc,
  onClick,
  disabled,
}) => {
  return (
    <div
      className={`button ${disabled ? 'button--disabled' : ''}`}
      onClick={onClick}
    >
      <span className={`button__name ${addedClass}`}>{title}</span>
      <img className="button__img" src={imageSrc} alt="" />
    </div>
  );
};
