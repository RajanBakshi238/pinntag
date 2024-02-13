import React, { useEffect, useState } from "react";
import Text from "../../common/Text";
import BusinessDetailTable from "../../component/businessDetailsScreen/BusinessDetailTable";
import { getDataTemp } from "../../utils/api";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import { Add } from "@mui/icons-material";

const BuisnessDetails = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="">
      <div className="mx-12 my-4 flex justify-between">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          My Businesses
        </Text>

        <PrimaryButton>
          <Add className="!text-white" />
          <span>Add</span>
        </PrimaryButton>
      </div>
      <BusinessDetailTable data={data} loader={loading} />
    </div>
  );
};

export default BuisnessDetails;
