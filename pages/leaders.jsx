import React from "react";
import SearchField from "../components/pages/leaders/SearchField";
import TextButton from "../components/common/TextButton";
import ControlledTabs from "../components/pages/leaders/Tab";
import StarRating from "../components/common/StarRating";
import SmallButton from "../components/common/SmallButton";
import RecommendedLeader from "components/pages/leaders/RecommendedLeader";
import Breadcrumb from "components/common/Breadcrumb";
import LeaderList from "components/pages/leaders/RecommendedLeader/LeaderList";
import { css } from "@emotion/react";

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
      <div
        css={css`
          text-align: center;
          font-size: 20px;
          font-weight: 300;
          margin-top: 40px;
        `}
      >
        지금 바로 맞춤 코칭이 가능한 리더
      </div>
      <LeaderList />
      <div
        css={css`
          text-align: center;
          font-size: 20px;
          font-weight: 300;
          margin-top: 40px;
        `}
      >
        파티 또는 강의중인 리더
      </div>
      <LeaderList />
      <div
        css={css`
          text-align: center;
          font-size: 20px;
          font-weight: 300;
          margin-top: 40px;
        `}
      >
        예약 가능한 리더
      </div>
      <LeaderList />
    </div>
  );
};

export default leaders;
