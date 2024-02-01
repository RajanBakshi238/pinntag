import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import FullButton from "../../../common/FormElements/Button/FullButton";
import { Add } from "@mui/icons-material";
import "leaflet/dist/leaflet.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { getData, postData } from "../../../utils/api";
import CheckBox from "../../../common/FormElements/CheckBox/CheckBox";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import { DEC, INC } from "../CreateContent";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../../utils/formatErrorMessage";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Step3 = ({ handleStep, handleClose, id, currentStep, fetchAllEvents }) => {
  const [locations, setLocations] = useState();
  const [address, setAddress] = useState([]);
  const [locationIds, setLocationsId] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLocations = async () => {
    const res = await getData("/business-profile/locations");
    if (res.data) {
      console.log(res.data);
      setLocations(res.data.locations);
      const locIds = [true];
      const promise = res.data.locations.map((loc) => {
        locIds.push(false);
        return reverseGeoCoding(loc.latitude, loc.longitude);
      });
      setLocationsId(locIds);

      const address = await Promise.all(promise);
      setAddress(address);
      
    } else {
      console.error("Something went error", res);
    }
  };

  useEffect(() => {
    // reverseGeoCoding(position[0], position[1]);
    getLocations();
  }, []);

  const reverseGeoCoding = async (lat, lng) => {
    try {
      const provider = new OpenStreetMapProvider();
      const results = await provider.search({ query: `${lat}, ${lng}` });
      const fullAddress =
        results.length > 0 ? results[0].label : "Unknown Address";
      // setAddress(fullAddress);
      console.log("Full Address:", fullAddress);
      return fullAddress;
    } catch (err) {
      console.log(err, "error");
    }
  };

  const handleDragEnd = async (e, index) => {
    const { lat, lng } = e.target.getLatLng();
    // setPosition([lat, lng]);
    const newAddress = await reverseGeoCoding(lat, lng);
    const allAddress = [...address];
    allAddress[index] = newAddress;
    setAddress(allAddress);
  };

  const MapComponent = ({ position, index }) => {
    return (
      <Marker
        position={position}
        draggable={true}
        eventHandlers={{ dragend: (e) => handleDragEnd(e, index) }}
      >
        <Popup>
          <span>(postion[0], position[1])</span>
        </Popup>
      </Marker>
    );
  };

  const handleSelect = (e, index) => {
    const locations = [...locationIds];
    locations[index] = e.target.checked;

    setLocationsId(locations);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const data = [];
    locationIds.forEach((locBool, index) => {
      if (locBool) {
        data.push(locations[index]?._id);
      }
    });

    const res = await postData(`event/update/${id}`, { locations: data });

    if (res.data) {
      enqueueSnackbar(res.data.message ?? "", {
        variant: "success",
      });
      fetchAllEvents()
      handleStep(INC);
    } else {
      console.log(res, ">>>>>>");
      enqueueSnackbar(
        res.error?.message
          ? formatErrorMessage(res.error?.message)
          : "Something went wrong",
        {
          variant: "error",
        }
      );
    }

    setLoading(false);
  };

  console.log(locationIds, "orignal");

  return (
    <>
      <div className="">
        {locations?.map((locObj, index) => {
          return (
            <div
              className="m-auto mt-3 p-5 bg-[#DDDDD7] rounded-lg"
              key={index}
            >
              <div className="mb-3">
                <CheckBox
                  label="Select Locations"
                  name={locObj._id}
                  checked={locationIds[index]}
                  onChange={(e) => handleSelect(e, index)}
                />
              </div>
              <MapContainer
                style={{
                  height: "300px ",
                  width: "100%",
                  margin: "auto",
                }}
                center={[locObj.latitude, locObj.longitude]}
                zoom={15}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <MapComponent
                  position={[locObj.latitude, locObj.longitude]}
                  index={index}
                />
              </MapContainer>

              <h1 className="text-xs font-semibold mt-3 px-4 text-center">
                {address[index]}
              </h1>
            </div>
          );
        })}

        {/* <FullButton inputClass={"!text-[#45818E] bg-[#56b6cb61]"}>
        <Add className="!text-[#45818E] mr-3" />
        Add Interval
      </FullButton> */}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <div>
          {currentStep === 1 ? (
            <SecondaryButton onClick={() => handleClose()}>
              <>Cancel</>
            </SecondaryButton>
          ) : (
            <SecondaryButton onClick={() => handleStep(DEC)}>
              <>Back</>
            </SecondaryButton>
          )}
        </div>
        <div>
          {/* handleStep(INC) */}
          <PrimaryButton
            loading={loading}
            inputClass={"min-w-[100px]"}
            onClick={() => {
              handleSubmit();
            }}
          >
            <span>Next</span>
            <ChevronRightIcon className="!text-white" />
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default Step3;
