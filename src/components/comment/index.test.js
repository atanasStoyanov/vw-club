import React from 'react';
import renderer from 'react-test-renderer';
import Comment from '.';

describe('Comment Component', () => {
    it('should render comment with text "Test" and author "Pesho"', () => {
        const author = {
            username: 'Pesho',
        }
        const tree = renderer.create(<Comment comment='Test' author={author}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})