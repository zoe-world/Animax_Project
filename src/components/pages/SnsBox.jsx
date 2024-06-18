// sns 로그인 컴포넌트

export function SnsBox() {
  return (
    <div className="sns-box">
      <h2>또는 다른 서비스 계정으로 로그인</h2>
      <div className="login-sns-box">
        <ul className="login-sns">
          <li>
            <a href="#" className="icon-sns icon-kakao">
              <span className="sr-only">카카오로 로그인</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon-sns icon-naver">
              <span className="sr-only">네이버로 로그인</span>
            </a>
          </li>
        </ul>
      </div>
      <p className="sns-exclamation">
        <span>
          SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.
        </span>
        <span>Animax 계정과는 연동되지 않으니 이용에 참고하세요.</span>
      </p>
    </div>
  );
}
