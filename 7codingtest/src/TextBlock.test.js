import { render,screen,cleanup } from "@testing-library/react";
import TextBlock from "./TextBlock";
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

/*very simple tests just to understand how jest works*/

test('should render some text', () => {
    render(<TextBlock text = {'this is test text'} params = {[]}/>);
    const textElement = screen.getByTestId('text1');
    expect(textElement).toHaveTextContent('this is test text');

})

test('break text string correctly', () => {
    render(<TextBlock text = {'012345'} params = {[
        {
          "kind": "emphasized",
          "index": 2,
          "length": 3
        }
      ]}/>);
    const firstpart = screen.getByTestId('start');
    expect(firstpart).toHaveTextContent('01 234');
})