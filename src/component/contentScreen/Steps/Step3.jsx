import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Step3 = () => {
  return (
    <div className="">
      <div className="m-auto p-5 bg-[#DDDDD7] rounded-lg">
        <MapContainer
          style={{
            height: "300px ",
            width: "100%",
            margin: "auto"
          }}
          center={[28.704060, 77.102493]}
          zoom={15}
        >
          {/* add google map tile url  */}
          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
        </MapContainer>

        
      </div>
    </div>
  );
};

export default Step3;
