// 회원가입을 위한 로컬스토리지 생성 JS

// [ 로컬쓰 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬쓰 클리어!");
}; /////////// clearData //////////////

// [ 로컬쓰 초기체크셋팅! ] ////////////
const initData = () => {
  // 만약 로컬스 "userInfo"가 null이면 만들어준다!
  if (localStorage.getItem("userInfo") === null) {
    localStorage.setItem(
      "userInfo",
      `
        [
            {
                "idx": "1",
                "eml":"admin@dc.com",
                "pwd":"1111"
            },
            {
                "idx": "2",
                "eml":"tom@gmail.com",
                "pwd":"1111"
            }
        ]
    `
    );
  }
}; ///////////// initData /////////////////

export { clearData, initData };
