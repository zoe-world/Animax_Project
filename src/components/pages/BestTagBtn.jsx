import React, { useState } from "react";

export function BestTagBtn({ filterItem, tagTotalItem }) {
  // 버튼 active
  const [tagBtnAct, setTagBtnAct] = useState("전체");
  const handleClick = (text) => {
    filterItem(text);
    setTagBtnAct(text);
  };
  return (
    <>
      {tagTotalItem.map((v, i) => {
        return (
          <button
            key={i}
            onClick={() => handleClick(i === 0 ? "전체" : v)}
            className={tagBtnAct === (i === 0 ? "전체" : v) ? "on" : ""}
          >
            {i === 0 ? "전체" : v}
          </button>
        );
      })}
    </>
  );
}
