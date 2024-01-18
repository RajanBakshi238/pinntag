import React from "react";
import BusinessHeader from "../../component/businessUserScreen/BusinessHeader";
import BusinessTable from "../../component/businessUserScreen/BusinessTable";
import AddBusiness from "../../component/businessUserScreen/AddBusiness";

const Buisnessuser = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BusinessHeader handleOpen={handleOpen} />
      <BusinessTable handleOpen={handleOpen} />
      <AddBusiness open={open} handleClose={handleClose} />
    </div>
  );
};

export default Buisnessuser;
