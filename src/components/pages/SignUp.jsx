// Animax 회원가입 컴포넌트

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopArea } from "../layout/TopArea";
import { SnsBox } from "./SnsBox";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import "../../css/signup.css";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { debounce } from "../../hooks/debounce";
import { initData } from "func/userInfo";
import {
  onChangePasswordHandler,
  passwordCheckHandler,
} from "utils/passwordValidation";
export function SignUp() {
  const navigate = useNavigate();

  //이름, 비밀번호, 비밀번호확인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // 각각 에러 메세지
  const [emailMsg, setEmailMsg] = useState(
    "5~50자의 이메일 형식으로 입력해주세요."
  );
  const [passwordError, setPasswordError] = useState(
    "비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중 3가지 이상 혼용하여 입력해 주세요."
  );
  const [confirmError, setConfirmError] = useState("");

  const [isEmailAvailable, setIsEmailAvailable] = useState(false); // 아이디 사용 가능한지
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false); // 아이디 사용 가능한지
  const [isConfirmAvailable, setIsConfirmAvailable] = useState(false); // 아이디 사용 가능한지

  // type 변경 여부를 알리는 state
  const [passwordHint, setPasswordHint] = useState(false);
  const [confirmHint, setConfirmHint] = useState(false);

  const onChangeEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailCheckHandler(emailValue);
  };
  useEffect(() => {
    if (passwordError === "" && confirm === "" && email) {
      emailCheckHandlerDebounced(email);
    }
  }, [password, confirm, email]);
  const emailCheckHandlerDebounced = useCallback(
    debounce((email) => {
      emailCheckHandler(email);
    }, 500)
  );

  // 아이디 유효성 검사
  const emailCheckHandler = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    initData();
    let userInfo = localStorage.getItem("userInfo");

    userInfo = JSON.parse(userInfo);
    let isOk = true;

    //로컬스토리지 체크함수호출
    if (emailRegex.test(email)) {
      userInfo.map((v) => {
        if (v.eml === email) {
          setEmailMsg("사용중인 이메일입니다.");
          setIsEmailAvailable(false);
          isOk = false;
        }
      });
      if (isOk) {
        setEmailMsg("사용 가능한 이메일입니다.");
        setIsEmailAvailable(true);
        return true;
      }
    } else if (email === "") {
      setEmailMsg("5~50자의 이메일 형식으로 입력해주세요.");
      setIsEmailAvailable(false);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailMsg(
        "입력하신 이메일 주소가 형식에 맞지 않습니다. 다시 입력해 주세요."
      );
      setIsEmailAvailable(false);
      return false;
    }
  };
  const passwordChangeUtil = (e) =>
    onChangePasswordHandler(
      e,
      password,
      confirm,
      setPassword,
      setConfirm,
      setPasswordError,
      setConfirmError,
      setIsPasswordAvailable,
      setIsConfirmAvailable
    );

  //회원가입 진행
  const signupHandler = (e) => {
    e.preventDefault();
    const idCheckResult = emailCheckHandler(email);
    if (idCheckResult) {
      setEmailMsg("");
    } else {
      return;
    }
    if (
      !passwordCheckHandler(
        password,
        confirm,
        setConfirmError,
        setPasswordError,
        setIsPasswordAvailable,
        setIsConfirmAvailable
      )
    )
      return;
    initData();

    // 1. 로컬스 변수할당
    let userInfo = localStorage.getItem("userInfo");

    // 2. 로컬스 객체변환
    userInfo = JSON.parse(userInfo);

    // 3. 새로운 데이터 구성하기
    let newData = {
      idx: userInfo.length + 1,
      eml: email,
      pwd: password,
    };

    // 4. 데이터 추가하기 : 배열에 데이터추가 push()
    userInfo.push(newData);

    // 5. 로컬스에 반영하기
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // 회원가입 버튼 active
    const registerBtn = document.querySelector(".btn-animax-join button");
    registerBtn.classList.add("on");
    // 로그인 페이지로 이동하기
    navigate("/login");
  };

  // 비밀번호 보이기 토클
  const toggleShowPassword = (e) => {
    const name = e.currentTarget;
    const btn = name.parentElement;
    const input = btn.childNodes[0].children;

    if (input[0].name === "password") {
      setPasswordHint(!passwordHint);
    } else {
      setConfirmHint(!confirmHint);
    }
  };

  return (
    <>
      <TopArea cat="signup" />
      <div className="signup_form">
        <div className="step_bar">
          <span className="step">
            <span className="sr-only">진행단계</span>
          </span>
        </div>
        <div className="join-sns-box">
          <h2 className="join-hd">
            <span>이메일과 비밀번호</span>만으로 <br />
            <span>Animax를 즐길 수</span> 있어요!
          </h2>
          <form onSubmit={signupHandler}>
            <fieldset>
              <legend className="sr-only">회원가입 입력폼</legend>
              <ul className="join-input-box">
                <li>
                  <label htmlFor="email">
                    <input
                      type="text"
                      id="email"
                      placeholder="animax@example.com"
                      className={`input_style01 input_style02 ${
                        email !== "" && !isEmailAvailable && "error-msg"
                      }`}
                      maxLength="50"
                      autoComplete="off"
                      onChange={onChangeEmailHandler}
                      value={email}
                    />
                  </label>
                  {email !== "" && !isEmailAvailable ? (
                    <span
                      className={`login-error-gray ${
                        email !== "" && !isEmailAvailable && "login-error-pink"
                      }`}
                      id="id-error-alert"
                    >
                      <span className={`alert-icon`}>
                        <FontAwesomeIcon icon={faExclamation} />
                      </span>
                      {emailMsg}
                    </span>
                  ) : (
                    <span className={`login-error-gray`} id="id-error-alert">
                      <span className={`alert-icon`}>
                        <FontAwesomeIcon icon={faExclamation} />
                      </span>
                      {emailMsg}
                    </span>
                  )}
                </li>
                <li>
                  <label htmlFor="password">
                    <input
                      type={passwordHint ? "text" : "password"}
                      id="password"
                      name="password"
                      autoComplete="off"
                      className={`input_style01 input_style02 ${
                        password !== "" && passwordError && "error-msg"
                      }`}
                      maxLength="16"
                      placeholder="비밀번호 입력"
                      value={password}
                      onChange={passwordChangeUtil}
                    />
                  </label>
                  {passwordHint ? (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={(e) => toggleShowPassword(e)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={(e) => toggleShowPassword(e)}
                    >
                      <FontAwesomeIcon icon={faEyeSlash} />
                    </button>
                  )}
                  <span
                    className={`login-error-gray ${
                      password !== "" && passwordError && "login-error-pink"
                    }`}
                    id="id-error-alert"
                  >
                    <span
                      className={`alert-icon ${
                        password && !passwordError && "none"
                      }`}
                    >
                      <FontAwesomeIcon icon={faExclamation} />
                    </span>
                    {passwordError}
                  </span>
                </li>
                <li>
                  <label htmlFor="confirm">
                    <input
                      type={confirmHint ? "text" : "password"}
                      id="confirm"
                      name="confirm"
                      autoComplete="off"
                      className={`input_style01 input_style02 ${
                        password !== "" &&
                        confirm !== "" &&
                        !isConfirmAvailable &&
                        "error-msg"
                      }`}
                      maxLength="16"
                      placeholder="비밀번호 확인"
                      value={confirm}
                      onChange={passwordChangeUtil}
                    />
                  </label>
                  {confirmHint ? (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={(e) => toggleShowPassword(e)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={(e) => toggleShowPassword(e)}
                    >
                      <FontAwesomeIcon icon={faEyeSlash} />
                    </button>
                  )}
                  {password !== "" &&
                    confirm !== "" &&
                    confirm !== password && (
                      <span
                        className={`login-error-gray ${
                          password !== "" &&
                          confirm !== "" &&
                          confirm !== password &&
                          !isConfirmAvailable
                            ? "login-error-pink"
                            : ""
                        }`}
                        id="id-error-alert"
                      >
                        <span className={`alert-icon`}>
                          <FontAwesomeIcon icon={faExclamation} />
                        </span>
                        {confirmError}
                      </span>
                    )}
                </li>
              </ul>
              <ul className="btn-animax-join" id="sub-join-submit">
                <li>
                  <button type="submit">Anibox 회원가입</button>
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
        <SnsBox />
      </div>
    </>
  );
}
