// Animax 상단영역 공통 컴포넌트
import logo from "../../images/logo.png";
import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { Menu } from "../modules/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { VideoListData } from "components/data/video_list";

export const TopArea = memo(({ chgPageFn }) => {
  const data = [...VideoListData];
  const [isScrollTop, setIsScrollTop] = useState(0);
  const [search, setSearch] = useState("");
  const checkTop = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setIsScrollTop(1);
    } else {
      setIsScrollTop(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkTop);
    return () => {
      window.removeEventListener("scroll", checkTop);
    };
  });

  const handleSearch = (e) => {
    const target = e.target;
    target.parentNode.classList.add("on");
  };
  const handleClose = (e) => {
    const target = e.currentTarget;
    const searchLi = target.closest(".search").classList;
    searchLi.remove("on");
    setSearch("");
  };
  const handleSearchChg = (e) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const searchTit = data.filter((v) => v.tit.includes(search));
      return searchTit;
    }
  };

  return (
    <>
      {/* 1. 상단영역 */}
      <header className={"top_area" + (isScrollTop ? " fixed" : "")}>
        {/* 1-1.로고박스 */}
        <h1 className="logo">
          <Link to="/">
            <img src={logo} alt="Animax" />
          </Link>
        </h1>
        {/* 1-2.GNB박스 */}
        <nav className="gnb_box">
          <ul>
            <Menu cat="gnb" />
          </ul>
        </nav>
        {/* 1-3.UTIL박스 */}
        <div className="util_box">
          <ul>
            <li className="search" onClick={(e) => handleSearch(e)}>
              <button type="button" className="search_button">
                <span className="sr-only">검색</span>
              </button>
              <div className="top_search">
                <div className="search_input">
                  <input
                    type="text"
                    placeholder="[초성검색] 작품, 감독, 제작사명을 입력해 주세요"
                    value={search}
                    onChange={handleSearchChg}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    type="button"
                    className="close_button"
                    onClick={handleClose}
                  >
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                  </button>
                </div>
              </div>
            </li>
            <Menu cat="util" />
          </ul>
        </div>
      </header>
    </>
  );
}); ////// TopArea 컴포넌트 ////
