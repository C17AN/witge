import React from "react";
import styled from "@emotion/styled";
import PartySlotList from "./PartySlotList";
import { Slot } from "../../../types/slot";

type Props = {
  thumbnailUrl: string;
  slots: Slot[];
};

const PartyItem = ({ thumbnailUrl, slots }: Props) => {
  return (
    <Container>
      <Thumbnail src={thumbnailUrl} alt={""} />
      <PartySlotList slots={slots} />
      <JoinButton>
        <span>파티 참여하기</span> (게임당 100C)
      </JoinButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 32px;
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

const Thumbnail = styled.img``;

const JoinButton = styled.button`
  border-radius: 24px;
  padding: 12px 0;
  outline: none;
  border: none;
  color: white;
  background: rgb(76, 72, 227);
  width: 60%;
  margin: 0 auto;
  min-width: 480px;
  background: linear-gradient(
    90deg,
    rgba(76, 72, 227, 1) 0%,
    rgba(27, 224, 81, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export default PartyItem;
