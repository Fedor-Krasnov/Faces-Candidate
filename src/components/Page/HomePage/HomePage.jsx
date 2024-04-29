import React from 'react';
import { Helmet } from 'react-helmet';
import { Advantages, Agitation, DirectionOfWork, Candidates, SubscribeToTheDatabase } from '../../sections';

const HomePage = () => (
  <>
    <Helmet>
      <title>Faces-Candidate</title>
    </Helmet>
    <Agitation />
    <DirectionOfWork />
    <Advantages />
    <Candidates />
    <SubscribeToTheDatabase />
  </>
);

export { HomePage };
