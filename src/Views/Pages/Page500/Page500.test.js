import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Page500 from './Page500.tsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page500 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
