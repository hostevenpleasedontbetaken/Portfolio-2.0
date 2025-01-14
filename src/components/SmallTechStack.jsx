import React from "react";
import { techstacklogos } from "../constants";
import SmallTechList from "./SmallTechList";
import LoopTechStack from "./LoopTechStack";

const SmallTechStack = () => {
  return (
    <div className="flex-col space-y-2 w-[290px] overflow-hidden ">
      <LoopTechStack />

      <SmallTechList />
    </div>
  );
};

export default SmallTechStack;
