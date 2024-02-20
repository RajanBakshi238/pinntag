import React from "react";
import Text from "../../common/Text";
import PaymentMethodsTable from "../../component/paymentMethodScreen/PaymentMethod";

const PaymentMethod = () => {
  return (
    <div className="">
      <div className="mx-12 my-4">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          Payment Methods
        </Text>
        <PaymentMethodsTable />
      </div>
    </div>
  );
};

export default PaymentMethod;
