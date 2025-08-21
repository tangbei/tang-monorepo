import React, { useState } from 'react';
import { Button } from 'antd';
import NormalSSE from './normal-sse';
import FetchSSE from './fetch-sse';

const SSE = () => {
  const [activeTab, setActiveTab] = useState('normal');
  return (
    <div>
      <Button onClick={() => setActiveTab('normal')}>Normal SSE</Button>
      <Button onClick={() => setActiveTab('fetch')}>Fetch SSE</Button>
      {
        activeTab === 'normal' ? <NormalSSE /> : <FetchSSE />
      }
    </div>
  )
}

export default SSE;