import React from "react";
import ReviewListItem from "./ReviewListItem";

type Props = {};

const ReviewList = (props: Props) => {
  return (
    <div>
      {DEMO_DATA_LIST.map((review) => {
        return <ReviewListItem key={review.id} {...review} />;
      })}
    </div>
  );
};

const DEMO_DATA_LIST = [
  {
    id: 0,
    nickname: "chanmin",
    title: "1:1 맞춤형 강의 강추",
    description:
      "전반적으로 리그오브레전드 게임의 기초지식을 바탕으로 일시적 좋은 결과를 만들어내는 것이 아닌, 향후 코칭을 토대로 혼자 자리잡을 수 있는 기초부터 심화까지 엄청 감사했습니다.",
  },
];

export default ReviewList;
