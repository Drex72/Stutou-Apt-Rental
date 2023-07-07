import { useEffect, useState } from "react";
import "./modal.scss";

function PopModal({
  children,
  onClose,
  compulsoryClose,
  fullOverlay
}: {
  children: JSX.Element;
  onClose: () => void;
  compulsoryClose?: boolean;
  fullOverlay?: boolean
}) {
  const [showModalCard, setShowModalCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModalCard(true);
    }, 10);
  }, []);

  return (
    <div className={`modal ${fullOverlay ? 'modal-fullOverlay' : ''} pop-modal`}>
      <div
        className="modal-background"
        onClick={() => {
          if (!compulsoryClose) {
            setShowModalCard(false);
          }
          setTimeout(() => {
            onClose();
          }, 100);
        }}
      />
      <div className={`modal-card ${showModalCard ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default PopModal;
