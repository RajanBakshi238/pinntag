import React, { useCallback, useState } from "react";
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

const Content = () => {
  const [open, setOpen] = useState(false);
  const [cardView, SetCardView] = useState(true);

  const toggleCardView = useCallback(() => {
    SetCardView((cardView) => !cardView)
  }, [])

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <ContentHeader handleOpen={handleOpen} toggleCardView={toggleCardView} cardView={cardView}/>
      {cardView ? <CardView /> : <ListView />}

      <CreateContent open={open} handleClose={handleClose} />
    </>
  );
};

export default Content;
