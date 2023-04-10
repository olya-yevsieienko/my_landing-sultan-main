import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import Header from './Header';

describe('Header testing', () => {
  test('Header rendering was successful', () => {
    expect(<Header />).toMatchSnapshot();
  });
  test('Header displays the correct total amount of the empty cart', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('header-amount')).toHaveTextContent('0');
  });
});
