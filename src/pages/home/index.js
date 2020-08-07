import React, { useContext } from 'react';
import PageLayout from '../../components/page-layout';
import AuthInfoSection from '../../components/auth-info-section';
import UserContext from '../../Context';
import GuestInfoSection from '../../components/guest-info-section';

const HomePage = () => {
  const context = useContext(UserContext);
  const { loggedIn } = context;

  if (loggedIn) {
    return (
      <PageLayout>
        <AuthInfoSection
          title='VW Passat Club web page!'
          message='Welcome to the fan club for owners and supporters of Volkswagen Passat B6, B7 and CC models.'
          info='The main goal of the club is to create a place where the Passat fans can share stories and experience with their cars, organize events and just to have some fun time!'
        />
      </PageLayout>
    );

  } else {
    return (
      <PageLayout>
        <GuestInfoSection
          title='VW Passat Club web page!'
          message='Welcome to the fan club for owners and supporters of Volkswagen Passat B6, B7 and CC models!'
          info='Join now our family and have a great time with your favourite car model!'
        />
      </PageLayout>
    )
  }
}

export default HomePage;
