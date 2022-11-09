import React from "react";

type Props = {
  title: string;
};

const ReviewListItem = ({ title }: Props) => {
  return <div>{title}</div>;
};

export default ReviewListItem;
