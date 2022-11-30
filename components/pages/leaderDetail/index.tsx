import React, { useEffect, useState } from "react";
import SmallButton from "../../common/SmallButton";
import StarRating from "../../common/StarRating";
import Textbutton from "../../common/TextButton";
import Breadcrumb from "../../common/Breadcrumb";
import { DEMO_LEADER_LIST } from "../leaders/RecommendedLeader/LeaderList";
import ControlledTabs from "../leaders/Tab";
import LeaderProfile from "./LeaderProfile";
import SearchField from "../leaders/SearchField";
import { useRouter } from "next/router";
import axiosInstance from "../../../axios";
import axios from "axios";

type Props = {};

const LeaderDetail = (props: Props) => {
  const [leaderInfo, SetLeaderInfoResopnseData] =
    useState<LeaderResopnseData | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const id = router.query.id;

    (async () => {
      try {
        const { data } = await axiosInstance.get(`/api/leader/${id}`);
        SetLeaderInfoResopnseData(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message);
        }
      }
    })();
  }, [router.isReady, router.query.id]);

  // const leaderInfo = DEMO_LEADER_LIST[0];

  return (
    <div>
      <SearchField />
      <Breadcrumb
        currentPagePath="/"
        currentPageTitle="리더 찾기"
        pageDescription="리더에 대한 정보와 후기를 확인할 수 있으며, 채팅을 통한 자세한 문의도 가능합니다."
      />
      {leaderInfo === null ? (
        <div>로딩중</div>
      ) : (
        <LeaderProfile {...leaderInfo} />
      )}
      <ControlledTabs />
    </div>
  );
};

export default LeaderDetail;
