type RoomType = {
  roomId: number;
  roomName: string;
  owner: string;
  isOpen: boolean;
};

type UserType = {
  userId: number;
  nickName: string;
};

export type { RoomType, UserType };
