type RoomType = {
  masterName: string;
  roomTitle: string;
  isOpen: boolean;
  memberCount: number;
  id: number;
};

type UserType = {
  id: number;
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
