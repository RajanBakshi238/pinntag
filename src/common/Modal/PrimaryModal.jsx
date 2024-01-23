import { Modal } from "@mui/material";
import classNames from "classnames";
import React from "react";

const PrimaryModal = ({ open, handleClose, children, modalClass }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classNames(["w-1/2 py-2 px-5 outline-none bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none rounded-lg", modalClass])}>
        {children}
      </div>
    </Modal>
  );
};

export default PrimaryModal;
