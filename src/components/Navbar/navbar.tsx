import React, { Component } from "react";
import { isTemplateExpression } from "typescript";
// import { MenuItems } from "./MenuItems";
// Icon kütüphanesinden navbar için ikonlar
import { PokerChip, Bell, CaretDown } from "phosphor-react";

const MenuItems = [
  {
    title: "TEST CYCLES",
    url: "https://www.google.com",
    cName: "text-gray-400 hover:text-black e px-3 py-2 text-sm font-bold",
  },

  {
    title: "JOB BOARD",
    url: "#",
    cName: "text-gray-400 hover:text-black e px-3 py-2 text-sm font-bold",
  },

  {
    title: "ACADEMY",
    url: "#",
    cName: "text-gray-400 hover:text-black e px-3 py-2 text-sm font-bold",
  },
];

const UserTable = [
  {
    name: "M.Arda Eren",
    vid: 348945,
    picture:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=Gray01&graphicType=Selena&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Light",
  },
];
class Navbar extends Component {
  render() {
    return (
      // Navbar wrapper
      <nav className="bg-white shadow-lg px-5">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-16">
            {/* // Logo section */}
            <div className="user-container flex flex-row space-x-4">
              <div
                id="navbar-logo"
                className="flex justify-center items-center h-8  w-25 pr-4"
              >
                <img
                  src="https://svgshare.com/i/T3P.svg"
                  alt="user-image"
                  className="h-full"
                />
              </div>
            </div>

            {/* Navbar list */}
            <div className="flex justify-between mx-auto">
              <div className="flex space-x-4">
                {MenuItems.map((item, index) => {
                  return (
                    <a className={item.cName} ref={item.url}>
                      {item.title}
                    </a>
                  );
                })}
              </div>
            </div>
            <div
              id="navbar-icon-wrapper"
              className="flex flex-row items-center space-x-4 px-4"
            >
              <PokerChip
                size={24}
                weight={"regular"}
                color={"rgb(95, 36, 245)"}
              />
              <Bell size={24} weight={"regular"} color={"rgb(95, 36, 245)"} />
            </div>
            <div className="user-container flex flex-row space-x-4">
              <div
                id="user-image"
                className="flex justify-center items-center h-10 w-10 bg-red-600 rounded-full"
              >
                <img
                  src={UserTable[0].picture}
                  alt="user-image"
                  className="rounded-full h-full"
                />
              </div>
              <div id="user-name" className="flex flex-col">
                <h1 className="flex font-bold">{UserTable[0].name}</h1>
                <p className="flex">{UserTable[0].vid}</p>
              </div>
              <div id="navbar-user-details" className="flex items-end">
                <CaretDown
                  size={24}
                  weight={"regular"}
                  color={"rgb(95, 36, 245)"}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
