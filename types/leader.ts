export type Leader = {
  id: number;
  level: number;
  status: "파티중" | "즉시가능" | "예약" | "강의중";
  imageUrl: string;
  name: string;
  nickname: string;
  score: number;
  reviewCount: number;
  partyMember: number;
  student: number;
  summary: {
    country: string;
    kd: number;
    win: number;
  };
};
