// Animax VOD 정보 컴포넌트
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useModals from "./useModals";
import { modals } from "./Modals";

export function Vod() {
  const items = useSelector((state) => state.item.value);
  const vodBox = useRef();
  const { isSelected, eleW, ele, top, left, itemInfo } =
    Object.values(items)[0];
  const itemsThumnail = itemInfo.thumSrc;

  const itemsTit = itemInfo.tit;
  const itemsEpiTit = itemInfo.epiTit;
  const [isAct, setIsAct] = useState(isSelected);

  const handleMouseOut = () => {
    setIsAct(false);
  };

  useEffect(() => {
    if (!ele) return;
    setIsAct(isSelected);

    if (vodBox.current) {
      vodBox.current.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (vodBox.current) {
        vodBox.current.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [items, vodBox]);

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
      {/* 1. vod 정보창 */}
      <section
        id="vod_area"
        className={`vod_area ${isAct ? "on" : ""}`}
        ref={vodBox}
        style={{
          opacity: isAct ? 1 : 0,
          top: isAct ? top + 25 + "px" : "0",
          left: isAct ? left + "px" : "0",
          width: isAct ? eleW + "px" : "0",
          transform: isAct ? "scale(1.2)" : "scale(1)",
          transition: " opacity 0.3s cubic-bezier(0.4, 0, 1, 1) 0.2s",
        }}
      >
        <div className="info_bx">
          <div className="img_bx">
            <a href="#" onClick={onClickVodHandler}>
              <div className="img_group">
                <img src={itemsThumnail} alt="" />
                <div className="bg"></div>
              </div>
            </a>
            <div className="util_bx">
              <a
                href="#"
                title="동영상 재생"
                className="link_play link_ico"
                onClick={onClickVideoHandler}
              >
                <span className="tootip">재생하기</span>
              </a>
              <h4>
                <span className="tit">{itemsTit}</span>
                <span className="txt">{itemsEpiTit}</span>
              </h4>
            </div>
          </div>

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
        </div>
      </section>
    </>
  );
}
