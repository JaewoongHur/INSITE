import ClickCount from "@components/button";
import { DefaultBox } from "@components/common";
import TextBox from "@components/common/TextBox";
import TitleBox from "@components/common/TitleBox";
import { ButtonType } from "@customtypes/dataTypes";
import styled from "styled-components";
import { useState, useEffect } from "react";
import getButtonList from "@api/memberApi";
import DropDown from "@components/common/dropdown/DropDown";
import { useSelector } from "react-redux";
import { RootState } from "@reducer";

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

function ButtonManagementPage() {
  const [buttonList, setButtonList] = useState<ButtonType[]>([]);
  const selectedButton = useSelector((state: RootState) => {
    state.SelectedItemInfo.selectedButton;
  });
  console.log(selectedButton);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getButtonList();
        setButtonList(response.buttonDtoList);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error); // 에러 처리
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <FirstCol>
        <DefaultBox width="30rem" height="25rem">
          <TitleBox width="" height="10%" fontSize="30px">
            버튼 누른 횟수
          </TitleBox>
          <DropDown
            items={buttonList}
            width="15rem"
            height="2rem"
            placeholder="버튼선택"
            initialValue={selectedButton}
          />
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
