// Animax 서브페이지 로그인 컴포넌트
import '../../css/login.css';
import { NavLink } from 'react-router-dom';
import { SnsBox } from './SnsBox';

export function Login({ cat }) {
  const snsLink = {
    kakao: {
      name: '카카오',
      link: 'https://www.kakaocorp.com/page/',
      img: './images/sns/etc_01.png',
    },
    naver: {
      name: '네이버',
      link: 'https://www.naver.com/',
      img: './images/sns/etc_02.png',
    },
  };

  return (
    <>
      <div className='login_form'>  
        <h1>로그인</h1>
        <div className='join-sns-box'>
          <h2>Animax 계정으로 로그인</h2>
          <form>
            <fieldset>
              <legend className='sr-only'>로그인 양식</legend>
              <ul className='input_wrap01'>
                <li>
                  <label>
                    <input
                      type='text'
                      placeholder='이메일 주소 또는 아이디'
                      title='아이디'
                      className='input_style01'
                      autoComplete='off'
                    />
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type='password'
                      placeholder='비밀번호'
                      title='비밀번호'
                      className='input_style01'
                      autoComplete='off'
                    />
                  </label>
                </li>
              </ul>
              <ul className='checkbox_wrap01'>
                <li className='check_style'>
                  <input type='checkbox' id='id-save' className='check-blue' />
                  <label htmlFor='id-save'>아이디 저장</label>
                </li>
                <li className='check_style'>
                  <input
                    type='checkbox'
                    id='login-auto'
                    className='check-blue'
                  />
                  <label htmlFor='login-auto'>자동 로그인</label>
                </li>
              </ul>
              <div className='btn-blue'>
                <a href='#' title='로그인'>
                  로그인
                </a>
              </div>
            </fieldset>
          </form>
          <ul className='join-find'>
            <li>
              <a href='#'>아이디 찾기</a>
            </li>
            <li>
              <a href='#'>비밀번호 재설정</a>
            </li>
            <li>
              <NavLink to={'/signup'}>회원가입</NavLink>
            </li>
          </ul>
        </div>
        <SnsBox />
      </div>
    </>
  );
}
