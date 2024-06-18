// Animax 오늘의 업데이트 리스트 컴포넌트

import { useEffect, useState } from "react";
import { SwiperVodList } from "../plugin/SwiperVodList";
import { BestTagBtn } from "./BestTagBtn";

// 배너데이터
export function BestTag({ cat, item, VodListData }) {
  // cat = 카테고리명
  // tagItem = 베스트태그 아이템 상태변수

  // bestTag 데이터
  const newVodListData = [...VodListData];

  // 해시태그 버튼 텍스트 추출용
  const [tagBtn, setTagBtn] = useState(VodListData);

  // 해시태크 배열데이터값에서 추출
  const tag = tagBtn.map((v) => v.hashtag?.[0]);
  const tag2 = tagBtn.map((v) => v.hashtag?.[1]);

  // 배열데이터에서 추출한 해시태그 중 중복되는 값만 뽑아서 배열로 변환 후 버튼에 넣기
  let tagTotalItem = ["전체"];
  tagTotalItem.push(...tag);
  tagTotalItem.push(...tag2);
  tagTotalItem = [...new Set(tagTotalItem)];

  // 해시태그 클릭시 바뀌는 데이터
  const [tagItem, setTagItem] = useState(newVodListData);

  const filterItem = (filter) => {
    const newItem = newVodListData.filter((v) => v.hashtag[0] === filter);
    const newItem2 = newVodListData.filter((v) => v.hashtag[1] === filter);
    const newTotal = [];
    newTotal.push(...newItem);
    newTotal.push(...newItem2);
    newTotal.sort((a, b) => a.idx - b.idx);
    setTagItem(newTotal);
    if (filter == "전체") {
      setTagItem(VodListData);
    }
  };

  useEffect(() => {
    filterItem("전체");
  }, [setTagItem]);

  // 마우스오버 함수
  const getItem = (x) => {
    item(x);
  };

  return (
    <>
      <article className="list_v2_wrap tag">
        <h3>인기 태그 작품</h3>
        <span className="tab_btn">
          <BestTagBtn tagTotalItem={tagTotalItem} filterItem={filterItem} />
        </span>
        <SwiperVodList cat={cat} item={getItem} tagItem={tagItem} />
      </article>
    </>
  );
}
