import React, { useCallback, useEffect, useState } from "react";
import Text from "../../common/Text";
import {
  Add,
  CalendarMonth,
  FilterAlt,
  MenuOutlined,
} from "@mui/icons-material";
import CardView from "../../component/contentScreen/CardView";
import CreateContent from "../../component/contentScreen/CreateContent";
import ContentHeader from "../../component/contentScreen/ContentHeader";
import ListView from "../../component/contentScreen/ListView";
import { getData, getDataTemp } from "../../utils/api";

const Content = () => {
  const [open, setOpen] = useState(false);
  const [cardView, SetCardView] = useState(true);

  const [data, setData] = useState();

  const fetchAllEvents = async () => {
    const res = await getData("event/created");
    if (res.data) {
      setData(res.data?.events);
    } else {
      console.log(res, "Error while fetching business profiles");
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const toggleCardView = useCallback(() => {
    SetCardView((cardView) => !cardView);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <ContentHeader
        handleOpen={handleOpen}
        toggleCardView={toggleCardView}
        cardView={cardView}
      />
      {cardView ? <CardView data={data }/> : <ListView />}

      <CreateContent open={open} handleClose={handleClose} fetchAllEvents= {fetchAllEvents} />
    </>
  );
};

export default Content;
