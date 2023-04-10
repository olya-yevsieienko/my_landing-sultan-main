import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import { BrowserRouter } from 'react-router-dom';
import { CatalogList } from './CatalogList';
import goodsFromServer from '../../../api/data/goodsFromServer.json';

describe('Testing Catalog List', () => {
  test('The list must be in the document', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CatalogList goods={goodsFromServer} />
        </BrowserRouter>
      </Provider>
    );
    const list = screen.getByTestId('catalog-list');
    expect(list).toBeInTheDocument();
  });
});
