import React, { useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import PartyList from "../components/pages/parties/PartyList";

const parties = () => {
  return (
    <>
      <Breadcrumb currentPagePath="/parties" currentPageTitle="파티참여" />
      <PartyList />
    </>
  );
};

export default parties;
