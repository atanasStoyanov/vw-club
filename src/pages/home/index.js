import React, { useContext } from 'react';
import PageLayout from '../../components/page-layout';
import InfoSection from '../../components/info-section';
import UserContext from '../../Context';

const HomePage = () => {
  const context = useContext(UserContext);
  const { loggedIn } = context;

  if (loggedIn) {
    return (
      <PageLayout>
        <InfoSection
          title='Welcome to the VW Passat Club web page'
          message='This is a fan club for owners and supporters of Volkswagen Passat B6, B7 and CC models.'
          info='The main goals of the club are to create place where the Passat fans can share stories and experience with their cars, organize events and just to have some fun time!'
        />
      </PageLayout>
    );

  } else {
    return (
      <PageLayout>

      </PageLayout>
    )
  }
}

export default HomePage;
