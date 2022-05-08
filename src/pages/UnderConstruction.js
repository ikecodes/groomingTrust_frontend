import React from "react";
import { MdConstruction } from "react-icons/md";
import colors from "../constants/colors";

const UnderConstruction = () => {
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <MdConstruction size={500} color={colors.primary} />
          <h1 className='text-capitalize text-secondary'>
            website under construction
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
