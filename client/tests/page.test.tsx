import Page from '../app/page';
import React from 'react';

describe('Page Component', () => {
    it('renders without crashing', () => {
      expect(() => {
        Page();
      }).not.toThrow();
    });
  
    it('renders the correct content', () => {
      const result = Page();
      expect(result).toEqual(<React.Fragment><h1>Hello World!</h1></React.Fragment>);
    });
  });
