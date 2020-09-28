/**
 * Map the API data to chart data
 * @param  {array}  the api data in array form i.e ['1,2,3,4,5', '6,7,8,9,10']
 * @return {array of objects}  data returned in form of chart data i.e [{x:new Date(1), y:[2,3,4,5]},{x:new Date(6),y:[7,8,9,10]}]
 */
export const mapToChartData = (data) => {
  return data.map((val) => {
    let splittedArr = val.split(",");
    const [timestamp, open, high, low, close] = splittedArr;

    return {
      x: new Date(parseFloat(timestamp)),
      y: [
        parseFloat(open),
        parseFloat(high),
        parseFloat(low),
        parseFloat(close),
      ],
    };
  });
};
