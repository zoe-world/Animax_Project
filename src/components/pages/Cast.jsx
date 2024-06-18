import { Fragment } from "react";

export function Cast({ castLength, tabItem }) {
  const makeList = () => {
    return hCode;
  };

  let hCode = [];
  for (let i = 0; i < castLength; i++) {
    hCode.push(
      <dl className="cast_list" key={i}>
        <dt className="thum" key={i}>
          <img src={tabItem.cast[i].thum} alt="" />
        </dt>
        <dd className="info">
          <h3 className="name">{tabItem.cast[i].name}</h3>
          <em className="voice">성우 : {tabItem.cast[i].voice}</em>
          <p className="desc">
            {tabItem.cast[i].info.split("^").map((v, i) => {
              return (
                <Fragment key={i}>
                  {v}
                  <br />
                </Fragment>
              );
            })}
          </p>
        </dd>
      </dl>
    );
  }
  return (
    <>
      <h2 className="tit">
        등장인물 <span>총 {tabItem.cast.length}명</span>
      </h2>
      {makeList()}
    </>
  );
}
