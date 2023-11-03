import useAxios from "./useAxios";

function useHealthcheckApi() {
  const response = useAxios({
    method: "get",
    url: "health/check",
  });

  return response;
}

export default useHealthcheckApi;
