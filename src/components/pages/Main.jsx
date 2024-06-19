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

export function Main(props) {
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
        <Best cat="best" />
        {/* 2.3.3 추천 vod */}
        <GoodVod />
        {/* 2.3.4 인기 태그 작품 */}
        <BestTag cat="tag" />
      </section>
      <Vod />
    </>
  );
}
