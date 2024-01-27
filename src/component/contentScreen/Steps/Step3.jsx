import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import FullButton from "../../../common/FormElements/Button/FullButton";
import { Add } from "@mui/icons-material";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Step3 = () => {
  const [position, setPosition] = useState([28.70406, 77.102493]);
  const [address, setAddress] = useState("");

  useEffect(() => {
    reverseGeoCoding(position[0], position[1]);
  }, []);

  const reverseGeoCoding = async (lat, lng) => {
    const provider = new OpenStreetMapProvider();
    const results = await provider.search({ query: `${lat}, ${lng}` });
    const fullAddress =
      results.length > 0 ? results[0].label : "Unknown Address";
    setAddress(fullAddress);
    console.log("Full Address:", fullAddress);
  };

  const handleDragEnd = async (e) => {
    const { lat, lng } = e.target.getLatLng();
    setPosition([lat, lng]);
    reverseGeoCoding(lat, lng);
  };

  const MapComponent = () => {
    return (
      <Marker
        position={position}
        draggable={true}
        eventHandlers={{ dragend: handleDragEnd }}
      >
        <Popup>
          <span>(postion[0], position[1])</span>
        </Popup>
      </Marker>
    );
  };

  return (
    <div className="">
      <div className="m-auto mt-3 p-5 bg-[#DDDDD7] rounded-lg">
        <MapContainer
          style={{
            height: "300px ",
            width: "100%",
            margin: "auto",
          }}
          center={position}
          zoom={15}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // attribution="Google Maps"
            // url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />

          <MapComponent />
        </MapContainer>

        <h1 className="text-xs font-semibold mt-3 px-4 text-center">
          {address}
        </h1>
      </div>
      <FullButton inputClass={"!text-[#45818E] bg-[#56b6cb61]"}>
        <Add className="!text-[#45818E] mr-3" />
        Add Interval
      </FullButton>
    </div>
  );
};

export default Step3;
