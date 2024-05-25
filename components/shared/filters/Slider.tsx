"use client";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Dispatch, SetStateAction } from "react";

interface SliderTooltipProps {
  children?: React.ReactNode;
  theme: any;
}

const SliderTooltip: React.FC<SliderTooltipProps> = ({
  children,
  theme = {},
}) => {
  const themeTooltip = {
    ...theme,
    color: theme.color || "red",
    fontSize: theme.fontSize || "14px",
    fontFamily: theme.fontFamily || "Source Sans Pro, mono",
    whiteSpace: theme.whiteSpace || "nowrap",
    position: "relative",
    bottom: "100%",
    paddingTop: "50px",
    transform: "translate(-50%, -10px)",
  };
  return <div style={themeTooltip}>{children}</div>;
};

const SliderComponent = ({
  priceRange,
  setPriceRange,
}: {
  priceRange: number[];
  setPriceRange: Dispatch<SetStateAction<number[]>>;
}) => {
  return (
    <div>
      <Slider
        value={priceRange}
        min={1000}
        max={50000}
        range
        onChange={(e: any) => setPriceRange(e)}
        handleRender={(renderProps) => {
          return (
            <div {...renderProps.props}>
              <SliderTooltip
                theme={{
                  color: "#ffffff",
                  fontWeight: "medium",
                }}
              ></SliderTooltip>
            </div>
          );
        }}
      />
      <div className="flex items-center justify-between mt-6 text-deepBlue font-medium text-[14px]">
        <p>&#2547;{priceRange && priceRange[0]}</p>
        <p>&#2547;{priceRange && priceRange[1]}</p>
      </div>
    </div>
  );
};

export default SliderComponent;
