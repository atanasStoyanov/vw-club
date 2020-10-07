import React from 'react';
import PageLayout from '../../components/page-layout';
import AuthInfoSection from '../../components/auth-info-section';

const HomePage = () => {

  return (
    <PageLayout>
      <AuthInfoSection
        title='VW Passat Club web page!'
        message='Welcome to the fan club for owners and supporters of Volkswagen Passat B6, B7, B8 and CC models.'
        info='The main goal of the club is to create a place where the Passat fans can share stories and experience with their cars, organize events and just to have some fun time!'
      />
    </PageLayout>
  )
}

export default HomePage;
