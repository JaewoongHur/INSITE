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

type ItemTypes = {
  id: number;
  name: string;
};

type DateSelectionType = {
  start: string;
  end: string;
};

export type {
  SideBarMenuType,
  IconsType,
  LogosType,
  ItemTypes,
  DateSelectionType,
};
