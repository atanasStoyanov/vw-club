import React from 'react';
import renderer from 'react-test-renderer';
import Input from '.';

describe('Input Component', () => {
    it('should render input field with label=Test', () => {
        const tree = renderer.create(<Input 
            label='Test'
            id='Test'
            value='Test'
            onChange='Test'
            type='text'
            placeholder='Test'
        />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})