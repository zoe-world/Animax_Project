// // Animax 퀵메뉴 영역 컴포넌트

import { memo, useState } from "react";
import { quickData } from "../data/quick";

export const Quick = memo(({chgPageFn,cat}) => {

  // 퀵메뉴 열림확인
  const [isOpen, setIsOpen] = useState(true);
  const openMenu = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <>
      <aside
        id="quick_area"
        className={isOpen ? "quick_area " + "on" : "quick_area"}
      >
        <button className="ham_btn" onClick={openMenu}>
          <span className="sr-only">닫기</span>
        </button>
        <h3 className="tit">
          <span>
            Quick <br /> Menu
          </span>
        </h3>
        <ul className="quick_list">
          {
            quickData[cat].map((v,i)=>
            <li key={i}>
              <button onClick={() => chgPageFn(v.link,)}>
                <img src={v.src} />
                <span className="txt">{v.txt}</span>
              </button>
            </li>
                
            )
            
          }
        </ul>
        <button className="top_btn">
          <span className="sr-only">탑버튼</span>
        </button>
      </aside>
    </>
  );
}); //////// Quick 컴포넌트 /////
