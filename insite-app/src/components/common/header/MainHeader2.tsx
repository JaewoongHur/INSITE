/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "@reducer";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProfile } from "@reducer/HeaderModalStateInfo";
import { myprofile } from "@assets/icons";
import styled from "styled-components";
import Modal from "../modal/Modal";
import DropDown from "../dropdown/DropDown";
import SiteList from "../dropdown/SiteList";
import ImageButton from "../button/ImageButton";
import { homeLogo } from "@assets/images";
import { animated, useSpring, SpringValue } from "@react-spring/web";
import InSiteLogo from "@assets/images/InSiteLogo3.svg"

interface MainHeaderProps {
  scrollY: SpringValue<number>;
}

const AnimatedHeaderContainer = styled(animated.div)`
  width: 100%;
  height: 120px;
  top: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.7); */
  position: fixed; // ensure the header is fixed at the top
  z-index: 10; // make sure it's above other content
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  position: fixed;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ProfileImg = styled.img`
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin-top: 10px;
  margin-right: 35px;
  margin-left: 15px;
  cursor: pointer;
  padding-right: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LogoImgWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

function MainHeader({ scrollY }: MainHeaderProps) {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const openDropdown = useSelector(
    (state: RootState) => state.HeaderModalStateInfo.openDropdown,
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

  // Use the scrollY value to interpolate the scale and opacity
  const style = useSpring({
    transform: scrollY.interpolate((y) => `scale(${1 + y / 5000})`), // Adjust scale rate as needed
    opacity: scrollY.interpolate((y) => 1 - y / 600), // Adjust fade out rate as needed
  });

  return (
    <AnimatedHeaderContainer style={style}>
      <HeaderWrapper>
        <LogoContainer>
          <LogoImgWrapper>
            <ImageButton
              width="25%"
              height="100%"
              src={InSiteLogo}
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
              position="absolute"
            ></Modal>
          )}
        </ProfileWrapper>
      </HeaderWrapper>
    </AnimatedHeaderContainer>
  );
}
export default MainHeader;
