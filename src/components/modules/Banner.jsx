// Animax 배너 컴포넌트

// 배너데이터
import { memo } from "react";
import { banData } from "../data/banner";

export const Banner = memo(({ cat }) => {
  // cat = 카테고리명
  if(cat==='main') cat = cat +  + Math.ceil(Math.random() * 5);
  else if (cat==='sub') cat = cat +  + Math.ceil(Math.random() * 4);

  // 선택데이터
  const selData = banData[cat];
  // 이미지 src
  const imgSrc = selData[0]["src"];
  // 이미지 src 확장자명 잘라내기
  const fileName = imgSrc.substring(imgSrc.length - 3);
  // 내용 텍스트
  const conts = selData[0]["cont"];
  
  return (
    <>
      {cat.indexOf("main") != -1 && (
        <div className="txt_bx">
          {selData.map((v, i) => (
            <h3 key={i}>
              <img src={v.lsrc} alt={v.tit} />
              <span>{v.tit1}</span>
              {conts.split("^").length == 1 && <p>{conts.split("^")[0]}</p>}
              {conts.split("^").length == 2 && (
                <p>
                  {conts.split("^")[0]}
                  <br />
                  {conts.split("^")[1]}
                </p>
              )}
              {conts.split("^").length == 3 && (
                <p>
                  {conts.split("^")[0]}
                  <br />
                  {conts.split("^")[1]}
                  <br />
                  {conts.split("^")[2]}
                </p>
              )}
            </h3>
          ))}
          <button className="view_btn">자세히보기</button>
        </div>
      )}
      <div className="img_bg"></div>
      <div className="img_bx">
        {fileName != "png" &&
          selData.map((v, i) => (
            <video key={i} src={v.src} autoPlay muted loop />
          ))}
        {fileName == "png" &&
          selData.map((v, i) => <img key={i} src={v.src} alt={v.tit} />)}
      </div>
    </>
  );
}); 
