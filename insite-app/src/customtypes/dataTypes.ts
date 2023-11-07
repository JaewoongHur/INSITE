type SideBarMenuType = {
  id: number;
  image: string;
  menu: string;
  route: string;
};

type IconsType = {
  [key: string]: string;
};

type LogosType = {
  [key: string]: string;
};

type ItemType = {
  id: number;
  name: string;
};

type DateSelectionType = {
  start: string;
  end: string;
};

type UserCountDtoType = {
  count: number;
  percentage: number;
  currentPage: string;
};

type StyleType = {
  fontSize: string;
};

type ChartDtoType = {
  name: string;
  y: number;
  dataLables: {
    enabled: boolean;
    format: string;
    style?: StyleType;
    textOutline?: string;
  };
};

type UserRefDtoType = {
  beforeUrl: string;
  rank: number;
  count: number;
  percentage: number;
};

type ButtonCountDtoType = {
  name: string;
  count: number;
  countPerUser: number;
};

export type {
  SideBarMenuType,
  IconsType,
  LogosType,
  ItemType,
  DateSelectionType,
  UserCountDtoType,
  ChartDtoType,
  StyleType,
  UserRefDtoType,
  ButtonCountDtoType,
};
