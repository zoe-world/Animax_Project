import React, { Component } from "react";
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from "./ModalsContext";
import { useState } from "react";
import { useMemo } from "react";
import Modals from "./Modals";

const disableScroll = () => {
  document.body.style.cssText = `
  position: fixed; 
  top: -${window.scrollY}px;
  width: 100%;`;
};

const ableScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.cssText = "";
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    disableScroll();
    setOpenedModals((modals) => {
      const modalIndex = modals.findIndex(
        (modal) => modal.Component === Component
      );
      if (modalIndex !== -1) {
        // 모달이 이미 배열에 있는 경우, 해당 모달의 isOpen 값을 true로 변경
        modals[modalIndex].isOpen = true;
        modals[modalIndex].props = props;
        return [...modals];
      }
      return [...modals, { Component, props, isOpen: true }];
    });
  };
  const close = (Component) => {
    ableScroll();
    setOpenedModals((modals) =>
      modals.map((modal) =>
        modal.Component === Component ? { ...modal, isOpen: false } : modal
      )
    );
  };
  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
          {children}
          <Modals />  
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
