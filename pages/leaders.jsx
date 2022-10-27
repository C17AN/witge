import React from "react";
import SearchField from "../components/pages/leaders/SearchField";
import TextButton from "../components/common/TextButton";
import ControlledTabs from "../components/pages/leaders/Tab"

const leaders = () => {
  return (
    <div>
      <SearchField />
      <TextButton />
      <ControlledTabs />
    </div>
  );
};

export default leaders;
