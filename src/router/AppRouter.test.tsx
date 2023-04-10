import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

describe('Test Application', () => {
  test('Error page test', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/asfasfafasf']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
  });
});
