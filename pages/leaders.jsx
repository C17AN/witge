import React from "react";
import SearchField from "../components/pages/leaders/SearchField";
import TextButton from "../components/common/TextButton";
import ControlledTabs from "../components/pages/leaders/Tab";
import StarRating from "../components/common/StarRating";

const leaders = () => {
  return (
    <div>
      <SearchField />
      <TextButton />
      <ControlledTabs />
      <StarRating rating={4.5} />
    </div>
  );
};

export default leaders;
