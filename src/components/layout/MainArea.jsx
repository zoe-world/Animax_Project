// Animax 메인영역 컴포넌트

import { Outlet } from "react-router-dom";
import { Main } from "../pages/Main";

export function MainArea(props) {
  return (
      <div id="main_area">
        <main className="main_area">
          <Outlet />
        </main>
      </div>
  );
} ////// MainArea 컴포넌트 //////
