import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ControlledTabs = () => {
  const [key, setKey] = useState('intro');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k as string)}
      className="mb-3"
    >
      <Tab eventKey="intro" title="자기소개 및 후기">
        자기소개 및 후기 탭
      </Tab>
      <Tab eventKey="party" title="파티 참여">
        파티 참여 탭
      </Tab>
      <Tab eventKey="normal" title="일반 강의">
        일반 강의 탭 
      </Tab>
      <Tab eventKey="custom" title="맞춤 강의">
        맞춤 강의 탭
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;