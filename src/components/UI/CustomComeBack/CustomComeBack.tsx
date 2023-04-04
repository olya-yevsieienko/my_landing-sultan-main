import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CustomComeBack.scss';

type Props = {
  path: string;
};

export const CustomComeBack: React.FC<Props> = ({ path }) => {
  const navigate = useNavigate();

  const handleRouteChange = () => {
    const newPath = path;
    navigate(newPath);
  };

  return (
    <div className="back-button" onClick={handleRouteChange}>
      <span className="back-button__arrow"></span>
      <span className="back-button__name">назад</span>
    </div>
  );
};
