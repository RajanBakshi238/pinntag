import React from "react";
import Text from "../../common/Text";
import BusinessDetailTable from "../../component/businessDetailsScreen/BusinessDetailTable";

const BuisnessDetails = () => {
  return (
    <div className="">
      <div className="mx-12 my-4">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          My Businesses
        </Text>
      </div>
      <BusinessDetailTable />
    </div>
  );
};

export default BuisnessDetails;
