import React from 'react';
import renderer from 'react-test-renderer';
import PostDetailsInfo from '.';
import TestingEnvironmet from '../../test-utils/router';

jest.mock('../post-values', () => 'PostValues');

describe('PostDetailsInfo Component', () => {
    it('should render post details info with carModel="Test car" and description="Test desc"', () => {
        const post = {
            carModel: 'Test car',
            description: 'Test desc'
        }

        const tree = renderer.create(
            <TestingEnvironmet value={{
                loggedIn: true,
                user: {
                    id: '123'
                }
            }}>
                <PostDetailsInfo post={post} />
            </TestingEnvironmet>).toJSON();

        expect(tree).toMatchSnapshot();
    })
})