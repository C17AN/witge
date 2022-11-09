import React from "react";
import SearchField from "../components/pages/leaders/SearchField";
import TextButton from "../components/common/TextButton";
import ControlledTabs from "../components/pages/leaders/Tab";
import StarRating from "../components/common/StarRating";
import SmallButton from "../components/common/SmallButton";
import { useState } from "react";

const leaders = () => {
  const [selectedTab, setSelectedTab] = useState();
  return (
    <div>
      <SearchField />
      <TextButton />
      <ControlledTabs />
      <StarRating rating={4.5} />
      <SmallButton icon="BsFillChatFill" value="문의하기" theme="gradation" />
      <SmallButton icon="BsBookmarkStarFill" value="스크랩하기" theme="light" />
      <SmallButton icon="BsShareFill" value="공유하기" theme="light" />
    </div>
  );
};

export default leaders;
