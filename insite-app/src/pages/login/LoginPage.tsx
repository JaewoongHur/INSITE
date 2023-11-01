import kakaoLoginButton from "@assets/images";
import BackgroundDiv from "@components/common/BackgroundDiv";
import DefaultBox from "@components/common/DefaultBox";
import axios from "axios";
import { useEffect } from "react";

function LoginPage() {
  const { VITE_KAKAO_CLIENT_ID } = import.meta.env;
  const { VITE_KAKAO_REDIRECT_URI } = import.meta.env;
  const { VITE_API_URL } = import.meta.env;

  const authenticateUser = (code) => {
    axios
      .post(`${VITE_API_URL}/api/v1/members/login`, { code })
      .then((response) => {
        const authToken = response.headers.authorization;
        const refreshToken = response.headers.refreshtoken;

        if (authToken) {
          sessionStorage.setItem("Authorization", authToken);
          sessionStorage.setItem("RefreshToken", refreshToken);
        }
      });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      authenticateUser(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleLoginClick = () => {
    const KAKAO_BASE_URL = "https://kauth.kakao.com/oauth/authorize";
    window.location.href = `${KAKAO_BASE_URL}?client_id=${VITE_KAKAO_CLIENT_ID}&redirect_uri=${VITE_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  return (
    <BackgroundDiv>
      <DefaultBox width="500px" height="400px">
        <button
          type="button"
          style={{ width: "200px", height: "50px" }}
          onClick={handleLoginClick}
        >
          <img
            src={kakaoLoginButton}
            style={{ width: "100%", height: "100%" }}
            alt="kakao Login Btn"
          />
        </button>
      </DefaultBox>
    </BackgroundDiv>
  );
}

export default LoginPage;
