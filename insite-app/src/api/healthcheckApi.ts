import useAxios from "./useAxios";

function healthcheckApi() {
  const response = useAxios({
    method: "get",
    url: "health/check",
  });

  return response;
}

export default healthcheckApi;
