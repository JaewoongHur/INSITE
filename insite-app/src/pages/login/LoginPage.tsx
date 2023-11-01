import { kakaoLoginButton } from "@assets/images";
import BackgroudDiv from "@components/common/BackgroudDiv";
import DefaultBox from "@components/common/DefaultBox";
import ImageButton from "@components/common/button/ImageButton";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const { VITE_KAKAO_REDIRECT_URI, VITE_LOGIN_API_URI, VITE_KAKAO_CLIENT_ID } =
    import.meta.env;
  const location = useLocation();
  const navi = useNavigate();

  const authenticateUser = (code: string) => {
    axios
      .post(`${VITE_LOGIN_API_URI}/api/v1/members/login`, { code })
      .then((response) => {
        const authToken = response.headers.authorization;
        const refreshToken = response.headers.refreshtoken;

        if (authToken) {
          sessionStorage.setItem("Authorization", authToken);
          sessionStorage.setItem("RefreshToken", refreshToken);
        }
        navi("/");
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
    <BackgroudDiv>
      <DefaultBox width="500px" height="500px">
        <ImageButton
          width="80%"
          height="15%"
          onClick={handleLoginClick}
          borderRadius="10px"
          src={kakaoLoginButton}
          alt="kakao Login Btn"
        />
      </DefaultBox>
    </BackgroudDiv>
  );
}

export default LoginPage;
