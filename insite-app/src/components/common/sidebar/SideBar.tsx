import styled from "styled-components";
import { useEffect } from "react";
import { IconFacebook, IconGithub, IconMail } from "@assets/icons";
// import { homeLogo } from "@assets/images";
import { useNavigate } from "react-router-dom";
import { SideBarMenuType } from "@customtypes/dataTypes";
import { setSelectedMenuId } from "@reducer/SelectedSidebarMenuInfo";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@reducer";
import InSiteLogo from "@assets/images/슬로건_배경제거.jpg";
import { SideBarMenu, icons } from "./SideBarMenu";
import ImageButton from "../button/ImageButton";

const SideBarContainer = styled.div`
  width: 100%;
  height: 96%;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const LogoImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 66%;
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
  height: 90%;
`;
const MenuWrapper = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => (props.isActive ? "#252531" : "black")};
  color: white;
  width: 100%;
  height: 100%;
  max-width: 100%;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s transform 0.3s;

  &:hover {
    background-color: #252531;
    color: white;
    font-weight: 600;
    /* filter: invert(100%); */
  }

  ${({ isActive }) => isActive && `font-weight:600;`}
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
`;

const MenuItem2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  width: 70%;
  height: 100%;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
  height: 13%;
`;

const ContactTextWrapper = styled.div`
  font-size: 15px;
`;
const ContactImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: #252531; */
  border-radius: 5px;
  width: 70%;
  height: 40%;
`;

function SideBar() {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const selectedMenuId = useSelector(
    (state: RootState) => state.SelectedSidebarMenuInfo.selectedMenuId,
  );

  const myApp =
    sessionStorage.getItem("myApp") ||
    `{"applicationId":0,"name":"사이트를 선택해주세요.","applicationUrl":"사이트를 선택해주세요", "applicationToken":"사이트를 선택해주세요", "createTime" : "사이트를 선택해주세요"}`;
  const target = JSON.parse(myApp).applicationUrl;

  useEffect(() => {
    return () => {
      dispatch(setSelectedMenuId(1));
    };
  });

  return (
    <SideBarContainer>
      <LogoContainer>
        <LogoImgWrapper>
          <ImageButton
            width="50%"
            height="100%"
            src={InSiteLogo}
            alt="insite Home Logo"
            onClick={() => navi("/")}
          />
        </LogoImgWrapper>
      </LogoContainer>
      <SideBarWrapper>
        {SideBarMenu.map((item: SideBarMenuType) => (
          <MenuContainer key={item.id}>
            <MenuWrapper
              onClick={() => {
                if (item.id === 7) {
                  window.open(target, "_blank");
                  return;
                }
                dispatch(setSelectedMenuId(item.id));
                navi(item.route);
              }}
              isActive={item.id === selectedMenuId}
            >
              <MenuItem>
                <img src={icons[item.image]} alt={item.menu} />
              </MenuItem>
              <MenuItem2>
                <div>{item.menu}</div>
              </MenuItem2>
            </MenuWrapper>
          </MenuContainer>
        ))}
      </SideBarWrapper>
      <ContactContainer>
        <ContactTextWrapper>© 2023 takeinsite.com</ContactTextWrapper>
        <ContactImgWrapper>
          <ImageButton
            src={IconGithub}
            alt="Github"
            width="100%"
            height="70%"
            onClick={() => console.log("github")}
          />
          <ImageButton
            src={IconMail}
            alt="Mail"
            width="100%"
            height="70%"
            onClick={() => console.log("mail")}
          />
          <ImageButton
            src={IconFacebook}
            alt="Facebook"
            width="100%"
            height="70%"
            onClick={() => console.log("facebook")}
          />
        </ContactImgWrapper>
      </ContactContainer>
    </SideBarContainer>
  );
}

export default SideBar;
