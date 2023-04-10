import React, { useCallback } from 'react';

import './Modal.scss';
import { clearCart } from '../../store/reducers/cartSlice';
import { useAppDispatch } from '../../hooks/redux';

type Props = {
  isOpen: boolean;
  handleToggle: () => void;
};

export const Modal: React.FC<Props> = ({ isOpen, handleToggle }) => {
  const dispatch = useAppDispatch();

  const handleCloseModal = useCallback(() => {
    handleToggle();
    dispatch(clearCart());
  }, [dispatch, handleToggle]);

  return (
    <>
      {isOpen && (
        <div className="modal" data-testid="modal">
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <span
              className="modal__cross"
              onClick={handleCloseModal}
              data-testid="modal-cross"
            ></span>

            <span className="modal__done"></span>
            <p className="modal__title">Спасибо за заказ</p>
            <span className="modal__text">
              Наш менеджер свяжется с вами ближайшее время
            </span>
          </div>
        </div>
      )}
    </>
  );
};
