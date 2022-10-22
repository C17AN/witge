import styled from "@emotion/styled";
import React from "react";
import { Slot } from "../../../types/slot";
import PartySlotItem from "./PartySlotItem";

type Props = {
  slots: Slot[];
};

const PartySlotList = ({ slots }: Props) => {
  return (
    <Container>
      {slots.map((item) => {
        return <PartySlotItem key={item.id} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default PartySlotList;
