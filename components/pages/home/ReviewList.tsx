import React from "react";
import ReviewListItem from "./ReviewListItem";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type Props = {};

const ReviewList = (props: Props) => {
  return (
    <Container>
      {DEMO_DATA_LIST.map((review) => {
        return <ReviewListItem key={review.id} {...review} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const DEMO_DATA_LIST = [
  {
    id: 0,
    nickname: "이정인",
    leader: "Janel",
    rating: 5,
    title: "롤하면서 쓴 수천일의 시간 중에 최고로 유익하게 잘 쓴 것 같아요!",
    description:
      "전반적으로 리그오브레전드 게임의 기초지식을 바탕으로 일시적 좋은 결온라인으로 롤을 배우는 것이 어떨지 반신반의한 상태로 강의를 신청했는데 미드라인에 아예 기초지식도 없던 저에게 라인전부터 챔프이용까지...",
  },
  {
    id: 1,
    nickname: "이정인",
    leader: "Janel",
    rating: 5,
    title: "롤하면서 쓴 수천일의 시간 중에 최고로 유익하게 잘 쓴 것 같아요!",
    description:
      "전반적으로 리그오브레전드 게임의 기초지식을 바탕으로 일시적 좋은 결온라인으로 롤을 배우는 것이 어떨지 반신반의한 상태로 강의를 신청했는데 미드라인에 아예 기초지식도 없던 저에게 라인전부터 챔프이용까지...",
  },
  {
    id: 2,
    nickname: "이정인",
    leader: "Janel",
    rating: 5,
    title: "롤하면서 쓴 수천일의 시간 중에 최고로 유익하게 잘 쓴 것 같아요!",
    description:
      "전반적으로 리그오브레전드 게임의 기초지식을 바탕으로 일시적 좋은 결온라인으로 롤을 배우는 것이 어떨지 반신반의한 상태로 강의를 신청했는데 미드라인에 아예 기초지식도 없던 저에게 라인전부터 챔프이용까지...",
  },
  {
    id: 3,
    nickname: "이정인",
    leader: "Janel",
    rating: 5,
    title: "롤하면서 쓴 수천일의 시간 중에 최고로 유익하게 잘 쓴 것 같아요!",
    description:
      "전반적으로 리그오브레전드 게임의 기초지식을 바탕으로 일시적 좋은 결온라인으로 롤을 배우는 것이 어떨지 반신반의한 상태로 강의를 신청했는데 미드라인에 아예 기초지식도 없던 저에게 라인전부터 챔프이용까지...",
  },
];

export default ReviewList;
