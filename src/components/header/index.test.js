import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';
import TestingEnvironmet from '../../test-utils/router';

describe('Header Component', () => {
    it('should render authenticated routes', () => {
        const tree = renderer.create(
            <TestingEnvironmet value={{
                loggedIn: true,
                user: {
                    id: '123'
                }
            }} >

                <Header />
            </TestingEnvironmet>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    });

    it('should render non-authenticated routes', () => {
        const tree = renderer.create(
            <TestingEnvironmet value={{
                loggedIn: false,
            }} >

                <Header />
            </TestingEnvironmet>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})

function test() {

}