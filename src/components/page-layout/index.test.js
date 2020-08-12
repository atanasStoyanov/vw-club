import React from 'react';
import renderer from 'react-test-renderer';
import PageLayout from '.';
jest.mock('../header', () => 'Header');

describe('PageLayout Component', () => {
    it('should render page page layout', () => {
        const tree = renderer.create(<PageLayout />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})