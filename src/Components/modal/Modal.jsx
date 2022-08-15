import React from "react";

const Modal = ({ children, open, close }) => {
  return (
    open && (
      <div
        className="modal"
        onClick={(e) => {
          e.target.className === "modal" && close();
        }}
      >
        {children}
      </div>
    )
  );
};

export default Modal;
