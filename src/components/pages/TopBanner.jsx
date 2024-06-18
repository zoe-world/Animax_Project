// Animax 메인페이지 배너 컴포넌트

import { Banner } from "../modules/Banner";

// 배너데이터
export function TopBanner({cat}) {
  // cat = 카테고리명
  
  return (
    <>
      <section className="top-banner_box">
        <h2 className="sr-only">탑배너영역</h2>
        <Banner cat={cat}/>
      </section>
    </>
  );
}
