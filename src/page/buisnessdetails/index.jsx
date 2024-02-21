import React, { useEffect, useState } from "react";
import Text from "../../common/Text";
import BusinessDetailTable from "../../component/businessDetailsScreen/BusinessDetailTable";
import { getDataTemp } from "../../utils/api";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import { Add } from "@mui/icons-material";
import CreateBusinessModal from "../../component/businessDetailsScreen/CreateBusinessModal";
import classNames from "classnames";

const BuisnessDetails = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState();
  const [selectSub, setSelectSub] = useState(0);

  console.log(subscriptionData, ">>>>> subscriptionData");

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

  const fetchAllSubscriptionProduct = async () => {
    setLoading(true);
    const res = await getDataTemp("subscription/products");
    if (res.data) {
      setSubscriptionData(res.data);
    } else {
      console.log(res, "Error while fetching business profiles");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllBusinessProfiles();
    fetchAllSubscriptionProduct();
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
        {subscriptionData && (
          <div className="mx-12 my-4">
            {/* @todo make below code into seprater component */}
            <Text className="text-[24px] mob:text-[16px] font-bold mb-2">
              Simple, Transparent Plans
            </Text>

            <div className="flex gap-5 h-fit">
              {subscriptionData?.data?.map((data, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setSelectSub(index)}
                    className={classNames([
                      "text-black cursor-pointer flex flex-col items-center justify-center w-[180px] py-2 px-4 rounded-xl text-center border-2 border-black h-auto",
                      {
                        "bg-[#c1c0c0]": index !== selectSub,
                        "bg-primary": index === selectSub,
                      },
                    ])}
                  >
                    <h1 className="text-lg font-bold capitalize ">
                      {data?.durationType}
                    </h1>
                    <p className="text-base"></p>
                    <div className="mt-auto flex items-center flex-1 flex-col gap-1">
                      <h1 className="mt-4 font-bold text-xl text-[#666]">
                        $ {data?.price}
                      </h1>
                      <p className="text-[#666] font-semibold text-base leading-4">
                        {data?.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

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
        subscriptionData={subscriptionData?.data?.[selectSub]}
        fetchAllBusinessProfiles={fetchAllBusinessProfiles}
        open={openModal}
        handleClose={handleCloseBusinessModal}
      />
    </>
  );
};

export default BuisnessDetails;
