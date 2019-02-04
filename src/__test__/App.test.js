import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

test('App changes the header', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.pathname = "/editor";
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.pathname = "/";
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});