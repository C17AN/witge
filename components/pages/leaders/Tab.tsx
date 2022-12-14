import { css } from "@emotion/react";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Introduction from "./Introduction";

const ControlledTabs = () => {
  const [key, setKey] = useState("intro");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k as string)}
      className="mb-3"
      css={css`
        justify-content: center;
        background-color: rgb(234, 239, 246);
        .nav-item {
          margin-top: auto;
        }
        .nav-link {
          border-radius: 20px 20px 0 0 !important;
          border: none;
          font-size: 18px;
          height: 50px;
          width: 230px;
          background-color: #c8cfd8;
          color: #6c747f;
          margin: 0 5px;
          &.active {
            color: #3e3ed4;
            font-weight: 700;
            height: 60px;
          }
        }
        border-bottom: none;
      `}
    >
      <Tab eventKey="intro" title="자기소개 및 후기">
        <Introduction />
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
};

export default ControlledTabs;
