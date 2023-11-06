import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "@reducer";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProfile } from "@reducer/HeaderModalStateInfo";
import { myprofile } from "@assets/icons";
import { CalendarButton } from "@components/common/calendar";
import styled from "styled-components";
import Modal from "../modal/Modal";
import DropDown from "../dropdown/DropDown";
import SiteList from "../dropdown/SiteList";

const HeaderContainer = styled.div`
  width: 100%;
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
  position: relative;
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
const Option = styled.button`
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.b3};
  font-size: 1rem;
  height: 2.5rem;
  margin-top: 0.5rem;
  &:hover {
    border-radius: 0.6rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

const CalendarContainer = styled.div`
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
const CalendarWrapper = styled.div`
  width: 30%;
  height: 10%;
  margin-right: 20px;
  cursor: pointer;
`;

function Header() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const openDropdown = useSelector(
    (state: RootState) => state.HeaderModalStateInfo.openDropdown,
  );

  const startDate = useSelector(
    (state: RootState) => state.DateSelectionInfo.start,
  );

  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [currentPathname, setCurrentPathname] = useState<string>("");
  useEffect(() => {
    if (openDropdown) {
      setIsProfile(false);
      dispatch(setOpenProfile(false));
    }
  }, [openDropdown, dispatch, setIsProfile]);

  useEffect(() => {
    setCurrentPathname(location.pathname);
  }, [location]);

  const handleOpenProfile = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIsProfile = !isProfile;
    setIsProfile(newIsProfile);
    dispatch(setOpenProfile(newIsProfile));
  };

  const formatDateString = (dateString: string): string => {
    const parts = dateString.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    return `${year}년 ${month}월 ${day}일`;
  };

  const formattedDate = formatDateString(startDate);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <CalendarContainer>
          <CalendarWrapper>
            <CalendarButton
              width="100%"
              height="100%"
              startDate={formattedDate}
              endDate={formattedDate}
            />
          </CalendarWrapper>
        </CalendarContainer>
        <DropDown
          items={SiteList}
          width="15rem"
          height="1rem"
          placeholder="사이트를 설정해주세요."
        />
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
              position="absolute"
            >
              <Option
                onClick={() => {
                  navi("/login");
                  setIsProfile(false);
                }}
              >
                로그인 / 로그아웃
              </Option>
              <Option
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
              </Option>
            </Modal>
          )}
        </ProfileWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
