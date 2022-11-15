import React from "react";
import Breadcrumb from "components/common/Breadcrumb";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const coachings = () => {
  return (
    <div>
      <TopBanner>
        <div
          css={css`
            margin-right: 32px;
            color: #ffffff;
          `}
        >
          <span
            css={css`
              font-weight: 600;
              font-size: 42px;
            `}
          >
            <span
              css={css`
                margin-right: 12px;
              `}
            >
              PERSONALIZED COACHING
            </span>
            <span
              css={css`
                color: #4affab;
              `}
            >
              FOR ME!
            </span>
          </span>
          <p
            css={css`
              margin-top: -0.5rem;
              margin-bottom: 0;
              font-weight: 300;
              font-size: 18px;
            `}
          >
            나와의 매칭력 99%! 내게 꼭 맞는 맞춤 코치를 만나 보세요.
          </p>
        </div>
      </TopBanner>
      <Breadcrumb
        currentPagePath="/"
        currentPageTitle="맞춤 코칭"
        pageDescription="코칭을 원하는 수강생의 목표와 스타일을 입력하여 자신에게 어울리는 리더를 추천받을 수 있습니다."
      />
      <Container>
        <Content>
          <h2
            css={css`
              font-size: 28px;
              margin-bottom: 42px;
            `}
          >
            <span
              css={css`
                color: rgb(72, 72, 212);
              `}
            >
              STEP 1.
            </span>{" "}
            목표를 설정해 봅시다.
          </h2>
          <div
            css={css`
              display: flex;
              justify-content: space-evenly;
              margin-bottom: 64px;
            `}
          >
            <div>
              <div
                css={css`
                  font-weight: 600;
                  font-size: 20px;
                `}
              >
                나의 현재 등급은?
              </div>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Iron</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Bronze</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Silver</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Gold</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Platinum</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Diamond</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>모름</div>
              </InputWrapper>
            </div>
            <div>
              <div
                css={css`
                  font-weight: 600;
                  font-size: 20px;
                `}
              >
                나의 현재 등급은?
              </div>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Iron</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Bronze</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Silver</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Gold</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Platinum</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Diamond</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>모름</div>
              </InputWrapper>
            </div>
            <div>
              <div
                css={css`
                  font-weight: 600;
                  font-size: 20px;
                `}
              >
                나의 현재 등급은?
              </div>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Iron</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Bronze</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Silver</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Gold</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Platinum</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>Diamond</div>
              </InputWrapper>
              <InputWrapper>
                <RadioButton type="radio" />
                <div>모름</div>
              </InputWrapper>
            </div>
          </div>
          <NextStepButton>{"다음 단계로 >>"}</NextStepButton>
        </Content>
      </Container>
    </div>
  );
};

const TopBanner = styled.div`
  height: 160px;
  background-image: url(/title.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start !important;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 15vw;
  background-color: rgb(30, 84, 240);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(234, 239, 246);
`;

const Content = styled.div`
  padding: 40px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 48px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 960px;

  &:last-of-type {
    margin-bottom: 48px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin: 12px 8px 12px 0;
`;

const NextStepButton = styled.button`
  border-radius: 24px;
  padding: 12px 0;
  outline: none;
  border: none;
  color: white;
  background: rgb(76, 72, 227);
  width: 60%;
  margin: 0 auto;
  min-width: 480px;
  font-weight: 700;
  background: linear-gradient(
    90deg,
    rgba(76, 72, 227, 1) 0%,
    rgba(27, 224, 81, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export default coachings;
