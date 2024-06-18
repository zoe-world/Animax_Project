// Animax 메인 컴포넌트

import { ThumList } from "./ThumList";
import { Promotion } from "./Promotion";
import { Today } from "./Today";
import { TopBanner } from "./TopBanner";
import { Vod } from "../modules/Vod";
import { Best } from "./Best";
import { useState } from "react";
import { BestTag } from "./BestTag";
import useModals from "../modules/useModals";
import { modals } from "../modules/Modals";
import { GoodVod } from "./GoodVod";

// Animax 추천TV프로그램 컴포넌트
import { VideoListData } from "../data/video_list";
import { infoVodData } from "../data/infoVod_list";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export function Main(props) {
  // video 전체 데이터
  let VodListData = VideoListData;
  VodListData = [...VodListData];

  // video 등장인물, 이미지 데이터
  let ifVodData = infoVodData;
  ifVodData = [...infoVodData];

  const { openModal } = useModals();
  const onClickVodHandler = (e) => {
    e.preventDefault();
    openModal(modals.infoModal, {});
  };
  const onClickVideoHandler = (e) => {
    e.preventDefault();
    openModal(modals.videoModal, {});
  };
  return (
    <>
      {/* 2-1. TOP배너 박스 */}
      <TopBanner cat={"main"} />
      {/* 2-2. LIST배너 박스 */}
      <ThumList cat="list" />
      {/* 2-3. 컨텐츠영역 */}
      <section className="content_wrap">
        <h2 className="sr-only">컨텐츠 영역</h2>
        {/* 2.3.1 프로모션배너 박스 */}
        <Promotion cat="sub" />
        {/* 2.3.2 오늘의 업데이트 리스트 */}
        <Today cat="today" />
        {/* 2.3.2 인기 작품 리스트 */}
        <Best cat="best" VodListData={VodListData} />
        {/* 2.3.3 추천 vod */}
        <GoodVod
          VodListData={VodListData}
          ifVodData={ifVodData}
          onClickVodHandler={onClickVodHandler}
          onClickVideoHandler={onClickVideoHandler}
        />
        {/* 2.3.4 인기 태그 작품 */}
        <BestTag cat="tag" VodListData={VodListData} />
      </section>
      {/* 3. VOD 정보박스 */}
      <Vod
        onClickVodHandler={onClickVodHandler}
        onClickVideoHandler={onClickVideoHandler}
      />
    </>
  );
}
