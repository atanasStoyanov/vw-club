import React from 'react';
import renderer from 'react-test-renderer';
import PostValues from '.';

describe('PostValues Component', () => {
    it('should render post values with comment=1, likes=2, author="Pesho:', () => {
        const comments = ['test'];
        const likes = ['test', 'test'];
        const author = {
            username: 'Pesho'
        };

        const tree = renderer.create(
            <PostValues comments={comments} likes={likes} author={author} />)
        expect(tree).toMatchSnapshot();
    })
})