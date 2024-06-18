import React, { useState } from "react";
import { Cast } from "./Cast";
import { StillCut } from "./StillCut";
import { StarRate } from "./StarRate";

export function Tabs({ tabItem, castLength, stLength }) {
  // tabItem - 탭 아이템
  const tabData = [
    {
      id: 1,
      name: "등장인물",
      disabled: castLength > 0 ? true : false,
    },
    {
      id: 2,
      name: "스틸컷",
      disabled: true,
    },
    {
      id: 3,
      name: "작품평",
      disabled: true,
    },
  ];

  const [activeTab, setActiveTab] = useState(castLength > 0 ? 1 : 2);
  const tabClickHandler = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  console.log(activeTab);
  return (
    <>
      <ul className="tab_list">
        {tabData.map((tab) => {
          return (
            tab.disabled && (
              <li
                key={tab.id}
                onClick={() => {
                  tabClickHandler(tab.id);
                }}
                className={tab.id === activeTab ? "active" : ""}
              >
                <a href="#" className="tab_item">
                  {tab.name}
                </a>
              </li>
            )
          );
        })}
      </ul>
      <div className="tab_content">
        <section className="tab_cont">
          {activeTab === 1 && castLength > 0 && (
            <Cast castLength={castLength} tabItem={tabItem} />
          )}
          {activeTab === 2 && stLength > 0 && <StillCut tabItem={tabItem}/>}
          {activeTab === 3 && <StarRate />}
        </section>
      </div>
    </>
  );
}
