import styled from "@emotion/styled";
import React from "react";
import ReviewList from "./ReviewList";
import ReviewSummary from "./ReviewSummary";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>자기소개</Title>
        <Description>
          저는 24세의 프로게이머 경력 7년차의 김성철입니다. EX-PRO Valorant
          선수로 $50,000가 넘는 Team Winnings를 보유하고 있습니다. 저는 베타
          이후로 최고 레벨에서 플레이하고 있고 현재 2년 이상 코치하고 있습니다.
          저는 1년 이상 지속적으로 상위 100위 안에 들었지만 현재는 학생들에게
          얻을 수 있는 최고의 정보를 제공할 수 있도록 코칭에 전념하고 있습니다.
          1000시간 이상의 코칭 경험이 있습니다.
        </Description>
      </ContentWrapper>
      <ContentWrapper>
        <Title>경력 사항</Title>
        <Description>
          저는 24세의 프로게이머 경력 7년차의 김성철입니다. EX-PRO Valorant
          선수로 $50,000가 넘는 Team Winnings를 보유하고 있습니다. 저는 베타
          이후로 최고 레벨에서 플레이하고 있고 현재 2년 이상 코치하고 있습니다.
          저는 1년 이상 지속적으로 상위 100위 안에 들었지만 현재는 학생들에게
          얻을 수 있는 최고의 정보를 제공할 수 있도록 코칭에 전념하고 있습니다.
          1000시간 이상의 코칭 경험이 있습니다.
        </Description>
      </ContentWrapper>
      <ContentWrapper>
        <Title>참여 후기</Title>
        <ReviewSummary />
      </ContentWrapper>
      <ReviewList />
    </Container>
  );
};

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  color: #333333;
  padding: 5vh 3vw;
`;

const Description = styled.div`
  line-height: 2;
`;

const ContentWrapper = styled.div`
  margin-bottom: 32px;
`;

export default Introduction;
