import React from "react";
import { Laptop, DeviceMobile, Plus } from "phosphor-react";
const purple = "rgb(95, 36, 245)";
const DashboardDevices = () => {
  return (
    <div className="bg-white m-5 shadow-lg rounded-xl p-6 w-64">
      <div id="" className="font-sans text-2xl font-bold pb-3 text-gray-800">
        Devices
      </div>
      <div id="devices-container">
        {/* Device 1 */}
        <div
          id="device-container"
          className="flex flex-row align-items-center space-x-4"
        >
          <div id="device-icon" className="content-center">
            <Laptop
              className="self-center"
              size={35}
              weight="duotone"
              color={purple}
            />
          </div>
          <div id="device-specs" className="flex flex-col">
            <div id="device-name" className="text-base font-bold">
              HP Spectre 400 15"
            </div>
            <div id="device-os" className="text-xs">
              Windows 10.1 Pro
            </div>
          </div>
        </div>
        {/* Divider line */}
        <hr className="border-solid border-gray-200 border-t-4 my-4"></hr>
        {/* Device 1 */}
        <div
          id="devicescontainer"
          className="flex flex-row align-items-center space-x-4"
        >
          <div id="device-icon" className="content-center">
            <DeviceMobile
              className="self-center"
              size={35}
              weight="duotone"
              color={purple}
            />
          </div>
          {/* Device 2 */}
          <div id="device-specs" className="flex flex-col">
            <div id="device-name" className="text-base font-bold">
              Apple iPhone 12
            </div>

            <div id="device-os" className="text-xs">
              iOS 14.3
            </div>
          </div>
        </div>
      </div>
      {/* Add device button */}
      <div
        id="add-device-btn"
        className="bg-purple-200 rounded-xl my-5 p-3 flex flex-row items-center space-x-4"
      >
        <div id="add-device-icon">
          <Plus size={24} weight="bold" color={purple} />
        </div>
        <div
          id="add-device-button-name "
          className="text-purple-700 font-bold font-sans"
        >
          Add a new Device
        </div>
      </div>
    </div>
  );
};

export default DashboardDevices;

// <Plus size={48} weight="bold" />
// <Laptop size={48} weight="duotone" />
// <DeviceMobile size={48} weight="duotone" />
