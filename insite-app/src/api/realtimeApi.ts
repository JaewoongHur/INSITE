import { realTimeAPI } from "./Api";

const getUserCount = async () => {
  try {
    const response = await realTimeAPI.post("/realtime-data/user-counts", {
      token: "295c293c-f903-49c8-986d-92d2efe6ccdb",
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error); // 에러 처리
  }

  return null;
};

const getAbnormality = async () => {
  try {
    const response = await realTimeAPI.post("/realtime-data/abnormality", {
      token: "295c293c-f903-49c8-986d-92d2efe6ccdb",
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error); // 에러 처리
  }

  return null;
};

const getRefData = async () => {
  try {
    const response = await realTimeAPI.post("/realtime-data/referrer", {
      token: "295c293c-f903-49c8-986d-92d2efe6ccdb",
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error); // 에러 처리
  }

  return null;
};

const getButtonCount = async () => {
  try {
    const response = await realTimeAPI.post(
      "/realtime-buttons/click-counts-per-user",
      {
        token: "295c293c-f903-49c8-986d-92d2efe6ccdb",
      },
    );
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error); // 에러 처리
  }

  return null;
};

export { getAbnormality, getRefData, getButtonCount, getUserCount };
