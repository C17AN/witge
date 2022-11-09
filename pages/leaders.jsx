import React from "react";
import SearchField from "../components/pages/leaders/SearchField";
import TextButton from "../components/common/TextButton";
import ControlledTabs from "../components/pages/leaders/Tab";
import StarRating from "../components/common/StarRating";
import SmallButton from "../components/common/SmallButton";
import RecommendedLeader from "components/pages/leaders/RecommendedLeader";
import Breadcrumb from "components/common/Breadcrumb";

const leaders = () => {
  return (
    <div>
      <SearchField />
      <Breadcrumb
        currentPagePath="/"
        currentPageTitle="리더 찾기"
        pageDescription="리더에 대한 정보와 후기를 확인할 수 있으며, 채팅을 통한 자세한 문의도 가능합니다."
      />
      <RecommendedLeader />
      <ControlledTabs />
      <StarRating rating={4.5} />
      <TextButton />
      <SmallButton icon="BsFillChatFill" value="문의하기" />
      <SmallButton icon="BsBookmarkStarFill" value="스크랩하기" />
      <SmallButton icon="BsShareFill" value="공유하기" />
    </div>
  );
};

export default leaders;
