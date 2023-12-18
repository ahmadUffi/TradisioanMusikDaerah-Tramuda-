import Modal from "../Utility/modal/Modal";
import "./iframe.css";
function Iframe({ iframe, onclick }) {
  const embeddedString = iframe;
  return (
    <Modal>
      <div className="iframeWrap">
        <div className="iframe">
          <div dangerouslySetInnerHTML={{ __html: embeddedString }} />
        </div>
        <div />
        <div className="exit" onClick={onclick}>
          X
        </div>
      </div>
    </Modal>
  );
}

export default Iframe;
