import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Leader } from "../../../../types/leader";
import StarRating from "../../../common/StarRating";

type Props = {};

const LeaderListItem = ({
  id,
  level,
  name,
  nickname,
  score,
  status,
  imageUrl,
}: Leader) => {
  return (
    <Link href={`/leader/${id}`}>
      <Container>
        <PlayerImage src={imageUrl} alt={name} />
        <div
          css={css`
            font-weight: 700;
          `}
        >
          {name}
        </div>
        <div
          css={css`
            font-size: 12px;
            color: rgb(128, 125, 218);
          `}
        >
          {nickname}
        </div>
        <StarScore>
          <StarRating rating={score} />
          <p>{score}</p>
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
