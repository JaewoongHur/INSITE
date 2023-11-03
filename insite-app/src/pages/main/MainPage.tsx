import healthcheckApi from "@api/healthcheckApi";
import Header from "@components/common/header/Header";

function MainPage() {
  const data = healthcheckApi();

  return <div>{data && <Header />}</div>;
}

export default MainPage;
