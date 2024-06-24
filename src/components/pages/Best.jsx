// Animax 오늘의 업데이트 리스트 컴포넌트

import { SwiperVodList } from "../plugin/SwiperVodList";
import { VideoListData } from "../data/video_list";

// 배너데이터
export function Best({ cat, item }) {
  // cat = 카테고리명

  const VodListData = [...VideoListData];
  // const rankData = VodListData;
  // 랭킹 정렬 함수
  let rank = VodListData.sort(function (a, b) {
    return a.rank - b.rank;
  });
  rank = rank.slice(0, 10);

  return (
    <>
      <article className="list_v2_wrap rank">
        <h3>인기 작품</h3>
        {/* 1. 스와이퍼 컴포넌트 */}
        <SwiperVodList cat={cat} rank={rank} />
      </article>
    </>
  );
}
