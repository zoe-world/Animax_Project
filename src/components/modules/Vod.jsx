// Animax VOD 정보 컴포넌트
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export function Vod({ onClickVodHandler, onClickVideoHandler }) {
  const items = useSelector((state) => state.item.value);
  const vodBox = useRef();
  const { isSelected, eleW, ele, top, left, itemInfo } =
    Object.values(items)[0];
  const itemsThumnail = itemInfo.thumSrc;
  const itemsVideo = itemInfo.videoSrc;
  const itemsTit = itemInfo.tit;
  const itemsEpiTit = itemInfo.epiTit;
  const [isAct, setIsAct] = useState(false);

  const handleMouseEnter = (e) => {
    console.log(e.currentTarget);
    setIsAct(isSelected);
  };

  const handleMouseLeave = () => {
    setIsAct(isSelected);
  };

  useEffect(() => {
    if (ele) {
      ele.addEventListener("mouseenter", handleMouseEnter);
      vodBox.current.removeEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (ele) {
        vodBox.current.removeEventListener("mouseenter", handleMouseLeave);
      }
    };
  }, [items, ele]);

  return (
    <>
      {/* 1. vod 정보창 */}
      <section
        id="vod_area"
        className={`vod_area ${isAct ? "on" : ""}`}
        ref={vodBox}
        style={{
          opacity: isAct ? 1 : 0,
          top: isAct ? top + 25 + "px" : "auto",
          left: isAct ? left + "px" : "auto",
          width: isAct ? eleW + "px" : "auto",
          transition: "opacity .3s linear .2s",
        }}
      >
        <div className="info_bx">
          <a
            href="#"
            title="동영상 재생"
            className="link_play link_ico"
            onClick={onClickVideoHandler}
          >
            <span className="tootip">재생하기</span>
          </a>
          <a
            href="#"
            title="정보 더보기"
            className="link_info link_ico"
            onClick={onClickVodHandler}
          >
            <span className="tootip">상세보기</span>
          </a>
          <a href="#" title="찜하기" className="link_zzim link_ico">
            <span className="tootip">찜하기</span>
          </a>
          <a href="#" className="img_bx" onClick={onClickVodHandler}>
            {}
            <div className="img_group">
              <div className="bg"></div>
              <img src={itemsThumnail} alt="" />
            </div>
            <h4>
              <span className="tit">{itemsTit}</span>
              <span className="txt">{itemsEpiTit}</span>
            </h4>
          </a>
        </div>
      </section>
    </>
  );
}
