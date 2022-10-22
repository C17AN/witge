import React, { useEffect } from "react";
import PartyItem from "./PartyItem";
import styled from "@emotion/styled";
import { Party } from "../../../types/party";

const PartyList = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      {DEMO_LIST.map((item) => {
        return <PartyItem key={item.id} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(234, 239, 246);
  height: 100%;
`;

const DEMO_LIST: Party[] = [
  {
    id: 1,
    thumbnailUrl:
      "https://cdn.gametoc.co.kr/news/photo/202207/67045_209477_1124.jpg",
    slots: [
      {
        id: 1,
        thumbnailUrl:
          "https://cdn.gametoc.co.kr/news/photo/202207/67045_209477_1124.jpg",
        author: "프로게이머 김성철",
        author_id: "amimero768",
        description: "TOP 300 NA, 너희 모두가 용맹을 향상하도록 돕고 싶어",
        region: "KOREA",
        kd: 1.05,
        win: 4954,
      },
    ],
  },
  {
    id: 2,
    thumbnailUrl:
      "https://cdn.gametoc.co.kr/news/photo/202207/67045_209477_1124.jpg",
    slots: [
      {
        id: 2,
        thumbnailUrl:
          "https://cdn.gametoc.co.kr/news/photo/202207/67045_209477_1124.jpg",
        author: "프로게이머 김성철",
        author_id: "amimero768",
        description: "TOP 300 NA, 너희 모두가 용맹을 향상하도록 돕고 싶어",
        region: "KOREA",
        kd: 1.05,
        win: 4954,
      },
    ],
  },
];

export default PartyList;
