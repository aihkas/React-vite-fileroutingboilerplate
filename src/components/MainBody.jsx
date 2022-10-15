import React from "react";
import SideBar from "./SideBar";

const MainBody = ({children}) => {
  return (
    <main className="max-w-[1100px] mx-auto p-1  shadow-md my-1 md:my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 gap-y-2">
        <div className="col-span-2 bg-white p-2 md:p-16 text-box">
          {children}
        </div>
        <div>
            <SideBar/>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
