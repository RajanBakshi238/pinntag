import React, { useEffect, useState } from "react";
import Text from "../../common/Text";
import BusinessDetailTable from "../../component/businessDetailsScreen/BusinessDetailTable";
import { getDataTemp } from "../../utils/api";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import { Add } from "@mui/icons-material";
import CreateBusinessModal from "../../component/businessDetailsScreen/CreateBusinessModal";

const BuisnessDetails = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const fetchAllBusinessProfiles = async () => {
    setLoading(true);
    const res = await getDataTemp("business-profile/all");
    if (res.data) {
      setData(res.data?.businessProfiles);
    } else {
      console.log(res, "Error while fetching business profiles");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllBusinessProfiles();
  }, []);

  const handleOpenBusinessModal = () => {
    setOpenModal(true);
  };

  const handleCloseBusinessModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="">
        <div className="mx-12 my-4">
          {/* @todo make below code into seprater component */}
          <Text className="text-[24px] mob:text-[16px] font-bold mb-2">
            Simple, Transparent Plans
          </Text>

          <div className="flex gap-5 h-fit">
            <div className="text-black w-[180px] py-2 px-4 rounded-xl text-center border-2 border-black bg-primary">
              <h1 className="text-lg font-bold ">Yearly</h1>
              <p className="text-base">Recommended</p>

              <h1 className="mt-4 font-bold text-xl text-[#666]">$ 360</h1>
              <p className="text-[#666] font-semibold text-base leading-4 ">
                Per business location
              </p>
            </div>
            <div className="text-black flex flex-col items-center justify-center w-[180px] py-2 px-4 rounded-xl text-center border-2 border-black bg-[#c1c0c0] h-auto">
              <h1 className="text-lg font-bold ">Monthly</h1>
              <p className="text-base"></p>
              <div className="mt-auto">
                <h1 className="mt-4 font-bold text-xl text-[#666]">$ 39.99</h1>
                <p className="text-[#666] font-semibold text-base leading-4">
                  Per business location
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-12 my-4 flex justify-between">
          <Text className="mt-3 text-[24px] mob:text-[16px] font-bold">
            My Businesses
          </Text>

          <PrimaryButton onClick={handleOpenBusinessModal}>
            <Add className="!text-white" />
            <span>Add</span>
          </PrimaryButton>
        </div>
        <BusinessDetailTable data={data} loader={loading} />
      </div>
      <CreateBusinessModal
        fetchAllBusinessProfiles={fetchAllBusinessProfiles}
        open={openModal}
        handleClose={handleCloseBusinessModal}
      />
    </>
  );
};

export default BuisnessDetails;
