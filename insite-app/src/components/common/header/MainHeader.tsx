import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reducer";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProfile } from "@reducer/HeaderModalStateInfo";
import { myprofile } from "@assets/icons";
import styled from "styled-components";
import { homeLogo } from "@assets/images";
import Modal from "../modal/Modal";
import ImageButton from "../button/ImageButton";

const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.b2};
`;

// const HeaderWrapper = styled.div`
//   width: 100%;
//   height: 50%;
//   margin-top: 15px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
//   font-weight: 900;
// `;
const HeaderWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ProfileImg = styled.img`
  display: flex;
  align-items: center;
  //   justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-top: 10px;
  margin-right: 35px;
  margin-left: 15px;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //   justify-content: center;
  width: 100%;
  height: 10%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LogoImgWrapper = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: center;
`;

function MainHeader() {
  const navi = useNavigate();
  const dispatch = useDispatch();

  const openSite = useSelector(
    (state: RootState) => state.HeaderModalStateInfo.openSite,
  );
  const [isProfile, setIsProfile] = useState<boolean>(false);

  useEffect(() => {
    if (openSite) {
      setIsProfile(false);
      dispatch(setOpenProfile(false));
    }
  }, [openSite, dispatch, setIsProfile]);

  const handleOpenProfile = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIsProfile = !isProfile;
    setIsProfile(newIsProfile);
    dispatch(setOpenProfile(newIsProfile));
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>
          <LogoImgWrapper>
            <ImageButton
              width="100%"
              height="100%"
              src={homeLogo}
              alt="insite Home Logo"
              onClick={() => navi("/main")}
            />
          </LogoImgWrapper>
        </LogoContainer>
        <ProfileWrapper>
          <ProfileImg
            src={myprofile}
            alt="my profile"
            onClick={handleOpenProfile}
          />
          {isProfile && (
            <Modal
              width="15rem"
              height="6.5rem"
              $posX="-50%"
              $posY="80%"
              close={() => setIsProfile(false)}
              $position="absolute"
            >
              {/* <Option
                onClick={() => {
                  navi("/login");
                  setIsProfile(false);
                }}
              >
                로그인 / 로그아웃
              </Option> */}
              {/* <Option
                onClick={() => {
                  if (currentPathname !== "/main") {
                    navi("/main");
                  } else {
                    navi("/mysite");
                  }

                  setIsProfile(false);
                }}
              >
                {currentPathname === "/main"
                  ? "사이트 선택하러 가기"
                  : "메인으로 가기"}
              </Option> */}
            </Modal>
          )}
        </ProfileWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
export default MainHeader;
