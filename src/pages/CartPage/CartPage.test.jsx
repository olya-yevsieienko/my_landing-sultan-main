import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { CartPage } from '../../pages/CartPage';

describe('Modal Testing', () => {
  test('Open modal window on click when cart is empty', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartPage />
        </BrowserRouter>
      </Provider>
    );
    const cartOrder = screen.getByTestId('cart-order');
    fireEvent.click(cartOrder);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
