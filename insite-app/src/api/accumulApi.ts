import { ApplicationDtoType } from "@customtypes/dataTypes";
import { accumulAPI } from "./Api";

const myApp =
  sessionStorage.getItem("myApp") ||
  `{"applicationId":0,"name":"사이트를 선택해주세요.","applicationUrl":"사이트를 선택해주세요", "applicationToken":"사이트를 선택해주세요"}`;

const data: ApplicationDtoType = JSON.parse(myApp);
const { applicationToken } = data;

const getRefData = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/flow/referrer", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getRefData err", error); // 에러 처리
  }

  return [];
};

const getExitData = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/flow/exit", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getExitData err", error); // 에러 처리
  }

  return [];
};

const getButtonDetailData = async (
  name: string,
  startDateTime: Date,
  endDateTime: Date,
) => {
  try {
    const response = await accumulAPI.post("/buttons/click-counts", {
      applicationToken,
      buttonName: name,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getButtonDetailData err", error); // 에러 처리
  }

  return [];
};

const getBounceCountData = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/flow/bounce", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getBounceCountData err", error); // 에러 처리
  }

  return [];
};

const getEnterCountData = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/flow/entry-enter", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getEnterCountData err", error); // 에러 처리
  }

  return [];
};

const getEntryExitData = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/flow/entry-exit", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getEntryExitData err", error); // 에러 처리
  }

  return [];
};

const getUrlFlowData = async (
  startDateTime: Date,
  endDateTime: Date,
  currentUrl: string,
) => {
  try {
    const response = await accumulAPI.post("/flow/urlflow", {
      applicationToken,
      startDateTime,
      endDateTime,
      currentUrl,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getUrlFlowData err", error); // 에러 처리
  }

  return [];
};

const getButtonDistData = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/buttons/every-button-rate", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getButtonDistData err", error); // 에러 처리
  }

  return [];
};

const getAllUrl = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/currenturl/list", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getAllUrl err", error); // 에러 처리
  }

  return [];
};

const getButtonLogs = async (
  startDateTime: Date,
  endDateTime: Date,
  buttonName: string,
) => {
  try {
    const response = await accumulAPI.post("/buttons/logs", {
      applicationToken,
      startDateTime,
      endDateTime,
      buttonName,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getButtonLogs err", error); // 에러 처리
  }

  return [];
};

// 사용자 - 페이지 조회 수
const getViewCount = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/users/view-counts", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getViewCount err", error); // 에러 처리
  }

  return [];
};

const getUserCount = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/users/user-counts", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getUserCount err", error); // 에러 처리
  }

  return [];
};

const getAbnormalUserData = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/users/abnormality", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getAbnormalUserData err", error); // 에러 처리
  }

  return [];
};

const getViewCountsPerUser = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/users/view-counts-per-user", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getViewCountsPerUser err", error); // 에러 처리
  }

  return [];
};

const getActiveUser = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post(
      "/active-users/active-users-per-currenturl",
      {
        applicationToken,
        startDateTime,
        endDateTime,
      },
    );
    return response.data;
  } catch (error) {
    console.error("accumulApi - getActiveUser err", error); // 에러 처리
  }

  return [];
};

const getActiveUserCounts = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post(
      "/active-users/active-users-counts",
      {
        applicationToken,
        startDateTime,
        endDateTime,
      },
    );
    return response.data;
  } catch (error) {
    console.error("accumulApi - getActiveUserCounts err", error); // 에러 처리
  }

  return [];
};

// os별 사용자
const getOsActiveUser = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post("/active-users/active-user-per-os", {
      applicationToken,
      startDateTime,
      endDateTime,
    });
    return response.data;
  } catch (error) {
    console.error("accumulApi - getOsActiveUser err", error); // 에러 처리
  }

  return [];
};

// URL별 활동 사용자 평균 체류 시간
const getAverageActiveTime = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post(
      "/active-users/average-active-time-per-active-user",
      {
        applicationToken,
        startDateTime,
        endDateTime,
      },
    );
    return response.data;
  } catch (error) {
    console.error("accumulApi - getAverageActiveTime err", error); // 에러 처리
  }

  return [];
};

//
const getViewCountsPerActiveUser = async (
  startDateTime: Date,
  endDateTime: Date,
) => {
  try {
    const response = await accumulAPI.post(
      "/active-users/view-counts-per-active-user",
      {
        applicationToken,
        startDateTime,
        endDateTime,
      },
    );
    return response.data;
  } catch (error) {
    console.error("accumulApi - getViewCountsPerActiveUser err", error); // 에러 처리
  }

  return [];
};

const getActiveUserPerUser = async (startDateTime: Date, endDateTime: Date) => {
  try {
    const response = await accumulAPI.post(
      "/active-users/active-user-per-user",
      {
        applicationToken,
        startDateTime,
        endDateTime,
      },
    );
    return response.data;
  } catch (error) {
    console.error("accumulApi - getActiveUserPerUser err", error); // 에러 처리
  }

  return [];
};

const getActiveUsersPerTime = async (
  startDateTime: Date,
  endDateTime: Date,
) => {
  try {
    const response = await accumulAPI.post(
      "/active-users/active-users-per-time",
      {
        applicationToken,
        startDateTime,
        endDateTime,
      },
    );
    return response.data;
  } catch (error) {
    console.error("accumulApi - getActiveUsersPerTime err", error); // 에러 처리
  }

  return [];
};

export {
  getRefData,
  getExitData,
  getButtonDetailData,
  getBounceCountData,
  getEnterCountData,
  getEntryExitData,
  getUrlFlowData,
  getButtonDistData,
  getAllUrl,
  getButtonLogs,
  getViewCount,
  getAbnormalUserData,
  getUserCount,
  getViewCountsPerUser,
  getActiveUser,
  getActiveUserCounts,
  getOsActiveUser,
  getAverageActiveTime,
  getViewCountsPerActiveUser,
  getActiveUserPerUser,
  getActiveUsersPerTime,
};
