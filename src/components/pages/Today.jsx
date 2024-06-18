// Animax 오늘의 업데이트 리스트 컴포넌트

import { SwiperVodList } from "../plugin/SwiperVodList";

// 배너데이터
export function Today({ cat, item, }) {
  // cat = 카테고리명
  // 최신 한달 날짜 필터링 하기
  // 날짜 변환 함수 ex) yyyy-mm-dd
  const fm = (x) => `
    ${x.getFullYear()}-${
    x.getMonth() + 1 < 10 ? "0" + (x.getMonth() + 1) : x.getMonth() + 1
  }-${x.getDate() < 10 ? "0" + x.getDate() : x.getDate()}`;

  // 날짜 비교 함수
  const getMonthDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffDate = date1.getTime() - date2.getTime();

    return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));
  };

  const getItem = (x) => {
    item(x);
  };
  return (
    <>
      <article className="list_wrap today">
        <h3>오늘의 업데이트</h3>
        {/* 1. 스와이퍼 컴포넌트 */}
        <SwiperVodList
          cat={cat}
          getMonthDiff={getMonthDiff}
          fm={fm}
          item={getItem}
        />
      </article>
    </>
  );
}
