/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders header', () => {
  act(() => { ReactDOM.render(<Router><App /></Router>, container); });
  const div = container.getElementsByClassName('MuiPaper-rounded')[0];
  expect(div.textContent).toBe('Todo List');
});
 