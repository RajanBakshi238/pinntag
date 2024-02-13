import React from "react";
import PrimaryModal from "../../../common/Modal/PrimaryModal";

const CreateBusinessModal = ({ open, handleClose }) => {
  const handleCloseModal = () => {
    handleClose();
  };
  return (
    <PrimaryModal
      open={open}
      handleClose={handleCloseModal}
      modalClass="w-[380px] sm:w-[500px] md:w-1/2 lg:w-2/5 xl:w-1/3"
    >
      <div className="flex flex-col h-full">
        
      </div>
    </PrimaryModal>
  );
};

export default CreateBusinessModal;
