# 📺 Animax

🚀 배포 링크: <a href="https://zoe-world.github.io/Animax_Project/" target="_blank" title="새창열림">Animax 바로가기</a>

> React를 공부 후 실제 서비스를 하고 있는 사이트를 리뉴얼 해보는 개인 포폴용 프로젝트 입니다.

- 인원 : FE 및 디자인: 이조은 인원 1명
- 기간 : 약 1개월 (23/12 ~ 24/1)

- 사용자가 간편하게 로그인하고, 회원가입하여 다양한 콘텐츠를 즐길 수 있도록 설계된 플랫폼입니다.
- 최신 업데이트, 인기 콘텐츠, 추천 VOD 등 다양한 섹션을 통해 사용자에게 맞춤형 콘텐츠를 제공합니다.
- React를 기반으로 구축되어 있으며, 회원가입 실시간 검증 등을 통해 사용 편의성을 높였습니다.
<table>
  <tbody>
    <tr>
      <th style="text-align: center">메인배너 랜덤추천</th>
      <th style="text-align: center">메인 슬라이더</th>
    </tr> 
    <tr>
      <td>
      <img src="https://github.com/zoe-world/Animax_Project/assets/114548167/e59c9e63-2cde-4046-bd28-0ea56581f54d" alt=""/>
      </td>
      <td>
        <img src="https://github.com/zoe-world/Animax_Project/assets/114548167/15a5973e-a200-46a1-8e27-652e79f59cdb"alt=""/>
      </td>
    </tr>
    <tr>
      <th style="text-align: center">보고싶은 VOD에 mouseover</th>
      <th style="text-align: center">VOD 클릭 시 modal popup </th>
    </tr> 
    <tr>
      <td>
        <img src="https://github.com/zoe-world/Animax_Project/assets/114548167/cbf686ef-0079-43b0-90b6-03c9d24abfc6" alt=""/>
      </td>
      <td>
        <img src="https://github.com/zoe-world/Animax_Project/assets/114548167/94c9fa7c-e178-4e26-866c-76cfd3da827b" alt=""/>
      </td>
    </tr>
    <tr>
      <th style="text-align: center">해시태그 버튼</th>
      <th style="text-align: center">회원가입</th>
    </tr> 
    <tr>
      <td style="vertical-align:center">
        <img src="https://github.com/zoe-world/Animax_Project/assets/114548167/05453553-dd8e-4cf8-accb-086a4239fd27" alt=""/>
      </td>
      <td style="vertical-align:center">
        <img src="https://github.com/zoe-world/Animax_Project/assets/114548167/05182198-d727-4b91-9fcb-7dd721141ac4" alt=""/>
      </td>
    </tr>
  </tbody>
</table>

## 📌 프로젝트의 주요 목표

- React를 사용하여 함수형 컴포넌트와 훅을 능숙하게 사용하기
- Redux-toolkit를 활용한 전역적으로 상태관리하기
- react-router-dom를 활용한 페이지 이동의 유연함
- react-modal 라이브러리의 사용
- 커스텀 훅을 만들어, 재사용가능한 코드를 사용하기
- 검색 기능과 필터링 기능을 활용하기
- 회원가입을 위한 유효성 검사를 진행하기

## 🔧 기술스택

<div align="center">
     <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
     <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>
<div align="center">
     <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
     <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
</div>
<div align="center">
    <img src="https://img.shields.io/badge/Redux-5A29E4?style=for-the-badge&logo=Redux&logoColor=white">
    <img src="https://img.shields.io/badge/Redux_Toolkit-5A29E4?style=for-the-badge&logo=Redux&logoColor=white">
    <img src="https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
</div>
<div align="center">
    <img src="https://img.shields.io/badge/fontawesome-538DD7?style=for-the-badge&logo=fontawesome&logoColor=white">
</div>

## 사용기술

- 라이브러리 : react(router)
- 프로그래밍 언어 : javscript
- 상태관리 : Redux-toolkit
- style : css, fontawesome

## 주요기능에 대한 간단한 설명

- Swiper 슬라이드로 나열된 프로그램에 사용자가 마우스를 올리면 해당 프로그램의 상세 정보 창이 나타난다.
- 정보 창은 animation 효과를 주어 함께 부드럽게 표시되며, 마우스가 아이템에서 벗어나면 사라진다.
- 정보 창 클릭 시, Modal 컴포넌트가 나타나며 해당 프로그램의 상세 정보 및 등장인물, 스틸컷이 표시됨.
- Redux Toolkit을 사용하여 `item`이라는 이름의 Redux 슬라이스를 생성하고, 마우스 이벤트에 따라 상태를 업데이트하는 기능을 구현.
- `itemOver`와 `itemOut` 액션을 통해 각각 아이템에 마우스 오버 및 아웃 이벤트를 처리하며, 초기 상태는 `initialStateValue`로 설정함.
- Swiper 슬라이드를 자주 사용하는 부분을 공통 컴포넌트로 분리함으로써, 컴포넌트의 재활용성을 증가시킴
- 인기 작품은 랭킹에 따라 정렬되어 상위 10개의 작품을 스와이퍼 형식으로 표시됨.
- 추천 TV 프로그램에서는 에피소드 회차수가 미공개이거나 1화인 프로그램을 제외한 필터링 데이터 중에서 랜덤으로 선택된 프로그램이 표시됨.
- 인기 태그 작품 영역은 사용자가 태그 버튼을 클릭하면 해당 태그에 맞는 프로그램 목록으로 필터링되어 표시됨
- useModal 커스텀 훅을 생성하여 모달 관련 로직을 한 곳에 모아 코드의 일관성과 가독성을 높였고, 유지보수의 용이하게 처리
- 회원가입 폼 렌더링, 이메일 형식 및 비밀번호 유효성 검사, 에러 메시지 표시, 비밀번호 가시성 토글, 폼 제출 처리, 로컬 스토리지 업데이트, 이메일 검증 성능 향상을 위한 디바운싱 등의 기능을 구현
- 회원가입 유효성 검사 진행 시, 특정 작업이 여러 번 호출되는 것을 방지 debounce 함수를 사용하여 불필요한 호출을 방지

### 리팩토링

**ver 2.1**

- 회원가입 기능 추가
- 유효성 검사 및 localStorage에 이미 등록되어 있는 아이디 인지, 필러팅 후 없다면 회원가입 처리되게 진행

**ver 2.0**

- ContextAPI로 사용하여 전역 상태 관리 시, 불필요한 리렌더링 발생으로 Redux-toolkit 로 변경

**ver 1.0**

- 화면 UI/UX 반응형 웹 구현
- 마우스 오버 시, 해당 프로그램 정보를 ContextApi 을 활용하여 전역적으로 상태관리
