import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Modal } from './Modal';

describe('Modal Testing', () => {
  test('A cross button is in the document', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal isOpen={true} />
        </BrowserRouter>
      </Provider>
    );
    const cross = screen.getByTestId('modal-cross');
    expect(cross).toBeInTheDocument();
  });
});
