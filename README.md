## Stock OHLC Charts

A React Application to display Historical and Live data on OHLC and CandleStick Charts.

With this application you can see the historical data as well as check the stocks open high low close of each day and other feature include pan and zoom of charts also if we go to live chart tab we can see the live data coming from the server and the last but not least you can also export chart as pdf and png.

This application uses React and React Hooks as well as some other dependencies.

## Glimpse of UI

**Home**
![Screenshot](../master/screenshots/Historical.png)

**Live Chart:**
![Screenshot](../master/screenshots/Live-Chart.png)

**Live Chart:**
![Screenshot](../master/screenshots/Live-Charts-2.png)

**Live Chart OHLC:**
![Screenshot](../master/screenshots/Live-Charts-OHLC.png)

**Dark Mode:**
![Screenshot](../master/screenshots/Dark-Mode.png)

## Installation

Use npm to install the project.

**Installing dependencies:**

    npm install

**Running the app:**

    npm run start

**Running the app:**

    npm run test

## Folder Structure

```
    |-- Stock-charts-ohlc (React App)
        |-- public
        |-- src
            |-- package.json
            |-- common
                |-- components (Used by all features)
                |-- constants (apiRoutes, appConstants)
                |-- utils (Api to chart data mapping)
            |-- components
                |-- Home (for Historical Data)
                |-- LiveChart (for Live Data)
                |-- Dashboard
                |-- AppTab (tabs to switch the view)
            |-- assets
                |-- canvasjs.min.js (third party charts)
                |-- canvasjs.react.js (third party react charts)
```

## Design Decisions

```bash

AppTab: Switch Between Views (i.e Home and LiveCharts)

Home :

- Home is where our historical data is plotted.

- Users can zoom in the chart by holding and sliding to right

- User can also switch between OHLC and candlestick

Live Charts:

- Live Charts is where live data is plotted.

- Users can zoom in the chart by holding and sliding to right.

- User can also switch between OHLC and candlestick.

Theme Switch:

- Theme switch is applied to charts and the user can switch between dark and light mode

```
