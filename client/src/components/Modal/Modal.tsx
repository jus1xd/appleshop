import React from "react";

import s from "./Modal.module.css";

interface IModal {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IModal> = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? `${s.modal} ${s.active}` : s.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `${s.modal_content} ${s.active}` : s.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
