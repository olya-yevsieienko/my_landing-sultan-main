import React, { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleToggle,
  };
};
