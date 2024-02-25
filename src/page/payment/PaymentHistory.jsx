import React from "react";
import PaymentHistoryTable from "../../component/paymentHistoryScreen/PaymentHistoryTable";
import Text from "../../common/Text";

const PaymentHistory = () => {
  return (
    <div className="">
      <div className="mx-12 my-4">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          Payment History
        </Text>
        <PaymentHistoryTable />
      </div>
    </div>
  );
};

export default PaymentHistory;
