interface ReviewListResopnseData {
  leaderName: string;
  userName: string;
  ratio: number;
  title: string;
  content: string;
}

interface RecommendedLeaderResopnseData {
  id: number;
  userName: string;
  realName: string;
  reviewRatio: number;
  reviewCnt: number;
  usuallyActiveDay: string;
  usuallyActiveStartTime: string;
  usuallyActiveEndTime: string;
}

interface LeaderResopnseData {
  id: number;
  userName: string;
  realName: string;
  phone: string;
  email: string;
  birthDate: string;
  gender: string;
  nickname: string;
  brand: null;
  branch: null;
  room: null;
  seatNumber: null;
  profileImgUrl: null;
  location: null;
  status: string;
  lastLoginAt: string;
  school: null;
  rank: null;
  groupList: null;
  darkMode: boolean;
}
