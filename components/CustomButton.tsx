"use client";
import { CustomButtonprops } from "@/types";
import React from "react";

const CustomButton = ({title, containerStyles, handleClick, btnType}: CustomButtonprops) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  );
};

export default CustomButton;