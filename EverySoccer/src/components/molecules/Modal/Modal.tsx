import ReactModal from "react-modal";
import { Cta } from "@/components/atoms";

interface ModalProps {
  title: string;
  subTitle?: string;
  onConfirm?: () => void;
  onCancle?: () => void;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal = ({ title, subTitle, onConfirm, onCancle, isOpen, setIsOpen }: ModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "16px",
    },
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100vw",
      height: "100vh",
      zIndex: 10,
      position: "fixed" as const,
      top: 0,
      left: 0,
    },
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={setIsOpen} ariaHideApp={false} style={customStyles}>
      <div className="flex flex-col justify-between items-center gap-5 min-w-[260px]">
        <div />
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg font-semibold">{title}</span>
          <span className="text-sm text-gray-500">{subTitle}</span>
        </div>
        <div className="w-full flexCenter">
          {onConfirm && <Cta title="확인" styleType="confirm" onClickAction={onConfirm} />}
          {onCancle && <Cta title="닫기" styleType="close" onClickAction={onCancle} />}
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
