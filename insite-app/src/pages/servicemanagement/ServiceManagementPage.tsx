import ButtonBox from "@components/common/ButtonBox";
import TextBox from "@components/common/TextBox";
import styled from "styled-components";
import { DefaultBox } from "@components/common";
import {useState,useEffect} from "react"; 
import axios from "axios";
import { ButtonType } from "@customtypes/dataTypes";
import ButtonList from "@components/ButtonList";

const ManagementStyle = styled.div`
  .parent {
    display: flex;
  }
  .child {
    margin: auto auto;
  }
  .infoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 700px; /* Set a fixed width for the infoContainer */
  }
  .infoText {
    margin: 0; /* Remove default margin */
  }
  .halfContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
  }
`;
const AddButton = styled.div`
  flex: 1;
  margin-right: 10px; /* 간격 조절 */
  padding: 20px; /* 버튼 크기 조절 */
  font-size: 18px; /* 폰트 크기 조절 */
  cursor: pointer;
  background-color: #2CE8C7; /* 배경색 */
  color: black;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  text-align:center;
  &:hover {
    background-color: #00E6FF; /* 호버링 시 배경색 변경 */
  }
  width:500px;
  height:auto;
`;

function ServiceManagementPage() {
  const data = {
    applicationToken: 'your_application_token',
    applicationUrl: 'your_application_url',
    name: 'your_name',
    applicationId: 'your_application_id',
    createTime: 'your_create_time',
  };
  // const [buttonList,setButtonList]=useState<ButtonType[]>([]);
  // useEffect(()=>{
  //   const data={
  //     "applicationToken":"token"
  //   }
  //     axios.post("http://localhost:8082/api/v1/buttons",data)
  //     .then(response=>{
  //       console.log('API 호출 성공',response.data);
  //       setButtonList(response.data);
  //     }).catch(error=>{
  //       console.error('API 호출 실패', error);
  //     })
    
  // })
  //임시로 버튼 리스트를 만든 뒤 사용, 추후 서버와 연결할 때 사용할 것

  return (
    <ManagementStyle>
      <div className="parent">
        <div className="child">
          <DefaultBox width="1000px" height="700px">
            <div >
            <br />
            <h1 >내 서비스 관리</h1>
            <br />
            <div className="infoContainer">
              <p className="infoText">서비스 명 </p>
              <TextBox width="500px" height="50px">
                <p>{data.name}</p>
              </TextBox>
            </div>
            <div className="infoContainer">
              <p className="infoText">URL </p>
              <TextBox width="500px" height="50px">
                <p>{data.applicationUrl}</p>
              </TextBox>
            </div>
            <div className="infoContainer">
              <p className="infoText">등록일 </p>
              <TextBox width="500px" height="50px">
                <p>{data.createTime}</p>
              </TextBox>
            </div>
            <div className="infoContainer">
              <p className="infoText">토큰 </p>
              <TextBox width="500px" height="50px">
                <p>{data.applicationToken}</p>
              </TextBox>
            </div>
            </div>
            
            <div style={{marginTop:'5%'}}>
            <div className="infoContainer">
              <p className="infoText">버튼 </p>
              <div style={{flexDirection:"column", overflow:"scroll",height:"200px", textAlign: "center"}} >
              {ButtonList&&ButtonList.length>0 ?(ButtonList.map((button: ButtonType)=>(
                <div  key={button.id}>
                <ButtonBox width="490px" height="50px" color="#00E6FF">
                <p>{button.name}</p>
              </ButtonBox>
              <br></br>
              
              </div>
              ))):(
              <ButtonBox width="490px" height="50px" color="#00E6FF">
              <p>버튼을 추가해 보세요.</p>
            </ButtonBox>)}
            </div>
            </div>
            </div>
              <div>
                <AddButton>버튼 추가하기</AddButton>
              </div>
          </DefaultBox>
        </div>
      </div>
    </ManagementStyle>
  );
}

export default ServiceManagementPage;
