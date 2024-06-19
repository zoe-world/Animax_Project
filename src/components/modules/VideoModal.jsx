import ReactModal from "react-modal";
import { VideoListData } from "../data/video_list";
import { shallowEqual, useSelector } from "react-redux";
import "../../css/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { infoVodData } from "../data/infoVod_list";

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.8)",
    zIndex: 9999,
    overflowY: "auto",
    padding: "2vw 10vw",
    display: "flex",
    alignItems: "center",
  },
  content: {
    position: "static",
    overflow: "visible",
    backgroundColor: "transparent",
    border: "none",
    top: 0,
    left: 0,
    width: "100%",
    padding: 0,
  },
};

const VideoModal = ({ index, isOpen, onClose }) => {
  const handleClickCancle = (e) => {
    e.preventDefault();
    onClose();
  };
  const items = useSelector((state) => state.item.value, shallowEqual);
  const { itemInfo } = Object.values(items)[0];
  const { videoSrc } = itemInfo;

  /*  
    tab-menu
  */

  // video 등장인물, 이미지 데이터
  const ifVodData = [...infoVodData];

  // video 전체 데이터
  const VodListData = [...VodListData];

  // 리턴코드
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="modal"
      closeTimeoutMS={150}
      onRequestClose={() => {
        onClose();
      }}
      shouldReturnFocusAfterClose={false}
      style={ModalStyle}
      index={index}
    >
      <div className="previewModal-player video-player">
        <div className="previewModal-video_bx">
          <div className="previewModal-video">
            <video
              src={videoSrc.openSrc}
              style={{ width: "100%" }}
              controls
              autoPlay
            ></video>
          </div>
        </div>
      </div>
      <button className="previewModal-close" onClick={handleClickCancle}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <span className="sr-only">창닫기</span>
    </ReactModal>
  );
};

export default VideoModal;
