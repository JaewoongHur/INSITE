import useHealthcheckApi from "@api/healthcheckApi";
import Header from "@components/common/header/Header";

function MainPage() {
  const data = useHealthcheckApi();
  console.log(data);

  return <div>{data && <Header />}</div>;
}

export default MainPage;
