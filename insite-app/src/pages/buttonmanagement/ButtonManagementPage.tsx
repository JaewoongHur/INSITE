import theme from "@assets/styles/colors";
import ClickCount from "@components/button";
import { DefaultBox } from "@components/common";
import TextBox from "@components/common/TextBox";
import TitleBox from "@components/common/TitleBox";
import { TextButton } from "@components/common/button";
import styled from "styled-components";

const FirstCol = styled.div`
  display: flex;
  width: 100%;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.b2};
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const SecondCol = styled.div`
  display: flex;
  width: 100%;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.b2};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

function ButtonManagementPage() {
  const buttonClick = () => {
    console.log("버튼 선택 클릭");
    return null;
  };

  return (
    <>
      <FirstCol>
        <DefaultBox width="30rem" height="25rem">
          <Title>
            <TextButton
              width="4rem"
              height="2rem"
              onClick={() => buttonClick()}
              color={theme.colors.a2}
            >
              버튼 선택
            </TextButton>
            <TitleBox width="" height="10%" fontSize="30px">
              버튼 누른 횟수
            </TitleBox>
          </Title>
          <ContentDiv>
            <ClickCount />
          </ContentDiv>
        </DefaultBox>
        <DefaultBox width="62rem" height="25rem">
          <TitleBox width="" height="10%" fontSize="30px">
            버튼 클릭 로그
          </TitleBox>
          <TextBox width="90%" height="80%">
            표
          </TextBox>
        </DefaultBox>
      </FirstCol>
      <SecondCol>
        <DefaultBox width="102rem" height="25rem">
          <TitleBox width="" height="10%" fontSize="30px">
            버튼 통계
          </TitleBox>
          <ContentDiv>표</ContentDiv>
        </DefaultBox>
      </SecondCol>
    </>
  );
}

export default ButtonManagementPage;
