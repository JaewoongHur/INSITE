import { useState } from "react";
import { myprofile } from "@assets/icons";
import styled from "styled-components";
import { ItemTypes } from "@customtypes/dataTypes";
import Modal from "../modal/Modal";
import DropDown from "../dropdown/DropDown";

const HeaderContainer = styled.div`
  position: fixed;
  width: 82%;
  height: 10%;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.b2};
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-weight: 900;
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative; // ProfileWrapper에 relative 포지션을 설정합니다.
`;
const ProfileImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-top: 10px;
  margin-right: 35px;
  margin-left: 15px;
  cursor: pointer;
`;

function Header() {
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const sites: ItemTypes[] = [
    { id: 1, name: "moduo.kr" },
    { id: 2, name: "ssafybank.kr" },
  ];
  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenProfile(!openProfile);
  };
  const reduxStateValue: string | null = "moduo.kr";

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <DropDown
          items={sites}
          width="15rem"
          height="1rem"
          placeholder="사이트를 설정해주세요."
          initialValue={reduxStateValue}
        />
        <ProfileWrapper>
          <ProfileImg
            src={myprofile}
            alt="my profile"
            onClick={handleProfileClick}
          />
          {openProfile && (
            <Modal
              width="15rem"
              height="6rem"
              posX="-50%"
              posY="80%"
              close={() => setOpenProfile(false)}
              position="absolute" // absolute 포지션을 설정합니다.
            >
              asdf
            </Modal>
          )}
        </ProfileWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
