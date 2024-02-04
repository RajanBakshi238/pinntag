import React from "react";
import Text from "../../common/Text";
import { useParams } from "react-router";

const ViewEvent = () => {
  const { id } = useParams();

  return (
    <div className="">
      <div className="mx-12 my-4">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          View Event
        </Text>
      </div>
      <div>

      </div>
    </div>
  );
};

export default ViewEvent;
