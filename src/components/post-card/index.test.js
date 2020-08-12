import React from 'react';
import renderer from 'react-test-renderer';
import PostCard from '.';
import TestingEnvironmet from '../../test-utils/router';
jest.mock('../post-values', () => 'PostValues');
jest.mock('../button/link-button', () => 'LinkButton')

describe('PostCard Component', () => {
    it('should render post card with title=Test', () => {

        const tree = renderer.create(
            <TestingEnvironmet value={{
                loggedIn: true,
                user: {
                    id: '123'
                }
            }}>
                <PostCard
                    title='Test'
                    carModel='Test car'
                    _id='123' />
            </TestingEnvironmet>).toJSON();

        expect(tree).toMatchSnapshot();
    })
})