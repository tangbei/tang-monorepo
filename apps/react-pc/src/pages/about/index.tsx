import React from 'react';
import { demoTest } from '@tang/utils';

const About: React.FC = () => {
  return (
    <div>
      <div>About {demoTest('123')}</div>
    </div>
  );
};

export default About;