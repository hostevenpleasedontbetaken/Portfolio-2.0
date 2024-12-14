import React from "react";
import { techstacklogos } from "../constants";
import SmallTechList from "./SmallTechList";
import LoopTechStack from "./LoopTechStack";

const SmallTechStack = () => {
  return (
    <div className="flex-col space-y-[-9rem]">
      <LoopTechStack />
      <SmallTechList />
    </div>
  );
};

export default SmallTechStack;
