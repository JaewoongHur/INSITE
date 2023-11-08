import { accumulAPI } from "./Api";

const getRefData = async () => {
  try {
    const response = await accumulAPI.post("/flow/referrer", {
      applicationToken: "a951dd18-d5b5-4c15-a3ba-062198c45807",
      currentUrl: "login페이지",
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error); // 에러 처리
  }

  return null;
};

const getExitData = async () => {
  try {
    const response = await accumulAPI.post("/flow/exits", {
      token: "a951dd18-d5b5-4c15-a3ba-062198c45807",
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error); // 에러 처리
  }

  return null;
};

const getButtonCountData = async () => {
  try {
    const response = await accumulAPI.post("/flow/exits", {
      token: "a951dd18-d5b5-4c15-a3ba-062198c45807",
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error); // 에러 처리
  }

  return null;
};

export { getRefData, getExitData, getButtonCountData };
