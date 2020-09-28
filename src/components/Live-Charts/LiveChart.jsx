import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import AppButton from "../../common/components/AppButton";
import { mapToChartData } from "../../common/utils/mapData";
import Chart from "../../common/components/Chart";
import appConstants from "../../common/constants/appConstants";
import Loader from "../../common/components/Loader";
import PropTypes from "prop-types";

let socket;
const LiveChart = ({ theme }) => {
  const [value, setValue] = useState([]);
  const [data, setData] = useState([]);
  const [type, setType] = useState("ohlc");

  const ENDPOINT = `${appConstants.BASE_URL}/watch`;

  useEffect(() => {
    //Checking Internet Connection
    let online = window.navigator.onLine;
    if (online) {
      socket = io(ENDPOINT, {
        extraHeaders: {
          "Accept-­Encoding": "gzip",
        },
      });

      socket.emit("sub", { state: true });

      socket.on("data", (data, callback) => {
        value.push(data);
        setValue(value);
        let liveData = [];
        if (value.length > 2) {
          liveData = mapToChartData(value);
        }

        localStorage.setItem("liveData", JSON.stringify(liveData));
        setData(liveData);
        callback(1);
      });

      return () => {
        socket.emit("unsub", { state: false });
        socket.off();
      };
    } else {
      if (localStorage.getItem("liveData")) {
        const liveData = JSON.parse(localStorage.getItem("liveData"));
        setData(liveData);
      }
    }
  }, []);

  return (
    <div className="live-chart-container">
      {value.length > 3 ? (
        <>
          <AppButton type={type} setType={setType} />

          <Chart
            chartData={data}
            type={type}
            title={"Live Charts"}
            theme={theme ? "dark2" : "light2"}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
LiveChart.defaultProps = {
  theme: false,
};
//Proptypes for Home
LiveChart.propTypes = {
  theme: PropTypes.bool.isRequired,
};
export default LiveChart;
