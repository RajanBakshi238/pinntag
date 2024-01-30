import React, { useEffect, useState } from "react";
import Text from "../../common/Text";
import BusinessDetailTable from "../../component/businessDetailsScreen/BusinessDetailTable";
import { getDataTemp } from "../../utils/api";

const BuisnessDetails = () => {
  const [data, setData] = useState();

  const fetchAllBusinessProfiles = async () => {
    const res = await getDataTemp("business-profile/all");
    if(res.data){
      setData(res.data?.businessProfiles)
      
    }else{
      console.log(res, "Error while fetching business profiles");
    }

  };

  useEffect(() => {
    fetchAllBusinessProfiles();
  }, []);

  return (
    <div className="">
      <div className="mx-12 my-4">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          My Businesses
        </Text>
      </div>
      <BusinessDetailTable data={data} />
    </div>
  );
};

export default BuisnessDetails;
