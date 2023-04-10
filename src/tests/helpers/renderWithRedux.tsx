import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactElement;
};

export const renderWithRedux: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
