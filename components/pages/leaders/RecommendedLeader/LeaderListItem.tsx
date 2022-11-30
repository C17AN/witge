import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Leader } from "../../../../types/leader";
import StarRating from "../../../common/StarRating";

type Props = {};

const LeaderListItem = ({
  id,
  userName,
  realName,
  reviewRatio,
  reviewCnt,
  usuallyActiveDay,
  usuallyActiveStartTime,
  usuallyActiveEndTime,
}: RecommendedLeaderResopnseData) => {
  return (
    <Link href={`/leader/${id}`}>
      <Container>
        <PlayerImage
          src={
            "http://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_330983_16498273855008255.jpg"
          }
          alt={realName}
        />
        <div
          css={css`
            font-weight: 700;
          `}
        >
          {realName}
        </div>
        <div
          css={css`
            font-size: 12px;
            color: rgb(128, 125, 218);
          `}
        >
          {userName}
        </div>
        <StarScore>
          <StarRating rating={4.5} />
          <p>{4.5}</p>
        </StarScore>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.15);
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out all;

  &:hover {
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
  }
`;

const PlayerImage = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 12px;
`;

const StarScore = styled.div`
  display: flex;
  align-items: flex-end;

  p {
    color: #1ce65f;
    margin: 0;
    font-weight: 600;
    margin-left: 4px;
  }
`;

export default LeaderListItem;
