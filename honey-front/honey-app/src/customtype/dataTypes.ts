type RoomType = {
  roomId: number;
  roomTitle: string;
  showTime: string;
  memberId: number;
  password: number | null;
};

type UserType = {
  userId: number;
  name: string;
};

type PotType = {
  potId: number;
  content: string;
  honeyCaseType: string;
  nickname: string;
  isCheck: boolean;
};

export type { RoomType, UserType, PotType };
