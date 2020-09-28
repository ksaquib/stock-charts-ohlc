import { Button } from "@material-ui/core";
import React from "react";
import appConstants from "../constants/appConstants";

//Code to switch between OHLC and candlestick based on type passed as a prop
const AppButton = ({ type, setType }) => {
  const {
    CHART_TYPE: { OHLC, CANDLESTICK },
  } = appConstants;
  return (
    <div className="app-button">
      {type === OHLC ? (
        <Button variant="contained" onClick={() => setType(CANDLESTICK)}>
          Switch To CandleStick
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setType(OHLC)}
        >
          Switch To OHLC
        </Button>
      )}
    </div>
  );
};

export default AppButton;
