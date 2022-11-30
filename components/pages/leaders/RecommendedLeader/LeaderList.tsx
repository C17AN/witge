import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../axios";
import { Leader } from "../../../../types/leader";
import LeaderListItem from "./LeaderListItem";

type Props = {};

const LeaderList = (props: Props) => {
  const [leaderList, setLeaderList] = useState<
    RecommendedLeaderResopnseData[] | null
  >(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get(`/api/leader/best_leader`);
        setLeaderList(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message);
        }
      }
    })();
  }, []);

  return (
    <Container>
      {leaderList?.map((leader) => (
        <LeaderListItem {...leader} key={leader.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 40px 0;
`;

export const DEMO_LEADER_LIST: Leader[] = [
  {
    id: 0,
    level: 3,
    name: "프로게이머 김성철",
    nickname: "amimero768",
    score: 4.5,
    imageUrl:
      "http://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_330983_16498273855008255.jpg",
    reviewCount: 54,
    status: "파티중",
    partyMember: 19,
    student: 20,
    summary: {
      country: "KOREA",
      kd: 1.05,
      win: 4954,
    },
  },
  {
    id: 1,
    level: 3,
    name: "프로게이머 김성철",
    nickname: "amimero768",
    score: 4.5,
    imageUrl:
      "http://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_330983_16498273855008255.jpg",
    reviewCount: 54,
    status: "파티중",
    partyMember: 19,
    student: 20,
    summary: {
      country: "KOREA",
      kd: 1.05,
      win: 4954,
    },
  },
  {
    id: 2,
    level: 3,
    name: "프로게이머 김성철",
    nickname: "amimero768",
    score: 4.5,
    imageUrl:
      "http://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_330983_16498273855008255.jpg",
    reviewCount: 54,
    status: "파티중",
    partyMember: 19,
    student: 20,
    summary: {
      country: "KOREA",
      kd: 1.05,
      win: 4954,
    },
  },
  {
    id: 3,
    level: 3,
    name: "프로게이머 김성철",
    nickname: "amimero768",
    score: 4.5,
    imageUrl:
      "http://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_330983_16498273855008255.jpg",
    reviewCount: 54,
    status: "파티중",
    partyMember: 19,
    student: 20,
    summary: {
      country: "KOREA",
      kd: 1.05,
      win: 4954,
    },
  },
];

export default LeaderList;
