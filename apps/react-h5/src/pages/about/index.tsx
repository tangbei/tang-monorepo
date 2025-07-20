import React from 'react';
import { Header } from '@tang/components';
import { demoTest } from '@tang/utils';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <div>About {demoTest('123')}</div>
    </div>
  );
};

export default About;