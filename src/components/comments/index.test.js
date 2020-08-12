import React from 'react';
import renderer from 'react-test-renderer';
import Comments from '.';
jest.mock('../comment', () => 'Comment');

describe('Comments Component', () => {
    it('should return "No comments yet"', () => {
        const post = {
            comments: []
        }
        const tree = renderer.create(<Comments post={post}/>)
        expect(tree).toMatchSnapshot();
    })

    it('should return one comment', () => {
        const post = {
            comments: [{
                _id:1
            }]
        }
        const tree = renderer.create(<Comments post={post}/>)
        expect(tree).toMatchSnapshot();
    })
})
