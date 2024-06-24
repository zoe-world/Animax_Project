// Animax 추천 TV프로그램 컴포넌트

import { modals } from "components/modules/Modals";
import useModals from "components/modules/useModals";
import { VideoListData } from "../data/video_list";
import { infoVodData } from "../data/infoVod_list";
import { Fragment, useMemo, useRef, useState } from "react";

export function GoodVod() {
  let goodItemData = [...VideoListData];
  let goodItemInfoData = [...infoVodData];
  goodItemData.sort((x, y) => {
    let a = Number(x.idx);
    let b = Number(y.idx);
    return a === b ? 0 : a > b ? 1 : -1;
  });

  // 에피소드 회차수 미공개 제외 && 1화 이상인 아이템
  const epi = goodItemData.filter((v) =>
    v.epiNum !== "미공개" && v.epiNum > 1 ? v : null
  );

  // 위에 필터링된 아이템 제목
  const epiTxt = epi.map((v) => v.tit);
  // 등장인물 데이터 중 제목
  const infoTit = goodItemInfoData.map((v) => v.tit);
  //터링된 아이템 제목과 등장인물 데이터 중 제목를 비교 후 교집합 추출
  let interaction = epiTxt.filter((v) => infoTit.includes(v));
  // epi 배열수 기준으로 랜덤수 만들기
  const random = useMemo(() => Math.ceil(Math.random() * epi.length - 1), []);
  // 회차가 미공개 제외, 1화 이상인 아이템 중 랜덤으로 나오는 객체 중 연령제한나이
  const age = epi[random]?.["age"];

  // 연령체크
  const ageChk = {
    all: <em className="age_badge bd-all">all</em>,
    7: <em className="age_badge bd-7">7</em>,
    12: <em className="age_badge bd-12">12</em>,
    15: <em className="age_badge bd-15">15</em>,
    19: <em className="age_badge bd-19">19</em>,
  };

  // console.log(`에피소드가 1이상이고 미공개가 아닌 경우 에피소드` ,epi,
  // '\n 에피소드 배열수를 기준으로 만든 랜덤수', random,
  // '\n 회차가 미공개 제외, 1화 이상인 아이템 중 랜덤으로 나오는 객체 중 연령제한나이', age,
  // '\n 연령체크 후 나오는 객체', ageChk[age])

  // 랜덤으로 나오는 에피소드 제목
  const epiTit = interaction[random];
  // 랜덤으로 나오는 에피소드 제목과 등장인물 데이터 제목이 같다면, 데이터 추출
  const castItem = goodItemInfoData.find((v) => v.tit === epiTit && v);

  /***************************** 
    줄거리 더보기
  *****************************/
  // 더보기 열고닫는 스위치
  const [isShowMore, setIsShowMore] = useState(false);

  // 공백제거
  let trimTxt = epi[random]?.desc.split("^").map((v, i) => {
    return (
      <Fragment key={i}>
        {v}
        <br />
      </Fragment>
    );
  });

  // 글자수 제한 선언
  const textLimit = useRef(6);
  // 조건에 따라 줄거리를 보여주는 함수
  const commenter = () => {
    // 원본에서 글자수 만큼 자른 짧은 버전
    let shortReview = (trimTxt || "").slice(0, textLimit.current);
    if ((trimTxt || "").length > textLimit.current) {
      return shortReview;
    }
    return trimTxt;
    // 공백 넣기
  };

  // 랜덤으로 뜨는 에피소드 지금 감상하기 버튼
  const epiRandom = useRef(epi[random]);
  console.log(epiRandom);
  const { openModal } = useModals();
  const onClickVodHandler = (e) => {
    e.preventDefault();
    openModal(modals.infoModal, {});
  };

  return (
    <article className="good_wrap">
      <h3>추천! TV 프로그램</h3>
      <div className="good_bx_wrap">
        <dl className="good_bx">
          <dt className="good_img_bx">
            <img src={castItem?.still[0]} alt="" />
          </dt>
          <dd className="good_cont">
            <div className="text-group">
              <h4 className="tit">
                {epi[random]?.tit}
                {ageChk[age]}
              </h4>
              <ul className="detail_list">
                <li>{epi[random]?.genre}</li>
                <li>총 {epi[random]?.epiNum} 화</li>
              </ul>
              <p className="txt">{commenter()}</p>
              <span className="btn_wrap">
                <a
                  href="#"
                  className="btn play_btn"
                  onClick={onClickVodHandler}
                >
                  <span className="txt">지금 감상하기</span>
                </a>
                <a href="#" className="btn info_btn">
                  <span className="txt">작품 상세보기</span>
                </a>
              </span>
            </div>
          </dd>
        </dl>
      </div>
    </article>
  );
}
