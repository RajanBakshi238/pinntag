import React from "react";
import CheckBox from "../../common/FormElements/CheckBox/CheckBox";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SecondaryButton from "../../common/FormElements/Button/SecondaryButton";
import PrimaryModal from "../../common/Modal/PrimaryModal";

const AddBusiness = ({ open, handleClose }) => {
  return (
    <PrimaryModal open={open} handleClose={handleClose}>
      <div className="pb-4">
        <h1 className="text-center font-medium text-xl">Add User</h1>
      </div>
      <div>
        <div className="flex flex-col border-2  rounded-2xl border-black mb-3">
          <input
            className="placeholder:text-[black] py-2 px-4 text-lg border-0 outline-none rounded-2xl"
            placeholder="First Name"
          />
          <hr className=" border-black border" />
          <input
            className="placeholder:text-[black] py-2 px-4 text-lg border-0 outline-none rounded-2xl"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="mb-3">
        <input type="text" className="model-input" placeholder="Mobile Phone" />
      </div>
      <div className="mb-6">
        <input type="text" className="model-input" placeholder="Email" />
      </div>
      <div>
        <h1 className="text-lg font-bold mb-3">User Privileges</h1>
        <div className="mb-3">
          <CheckBox label="Edit business details" />
        </div>
        <div className="mb-3">
          <CheckBox checked={true} label="Create content" />
        </div>
        <div className="mb-3">
          <CheckBox checked={true} label="Publish content" />
        </div>
        <div className="mb-3">
          <CheckBox checked={true} label="Publish to social Media" />
        </div>
        <div className="mb-3">
          <CheckBox label="Edit image gallery" />
        </div>
        <div className="mb-3">
          <CheckBox label="Edit locations" />
        </div>
        <div className="mb-3">
          <CheckBox label="Manage business users" />
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="flex gap-2">
          <SecondaryButton onClick={() => handleClose()}>
            <>Cancel</>
          </SecondaryButton>
          <SecondaryButton>
            <>Deactivate</>
          </SecondaryButton>
        </div>
        <div>
          <PrimaryButton>
            <span>Next</span>
            <ChevronRightIcon className="!text-white" />
          </PrimaryButton>
        </div>
      </div>
    </PrimaryModal>
  );
};

export default AddBusiness;
