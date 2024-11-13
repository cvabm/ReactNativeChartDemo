import React, {createContext} from "react";
import {ScrollView, TouchableOpacity, StyleSheet, View, Text} from "react-native";
// import {createStackNavigator} from "@react-navigation/stack";
import AxisLineChartScreen from "./AxisLineChartScreen";
import MultipleChartScreen from "./MultipleChartScreen";
import MovingWindowChartScreen from "./MovingWindowChartScreen";
import BarChartScreen from "./BarChartScreen";
import HorizontalBarChartScreen from "./HorizontalBarChartScreen";
import BubbleChartScreen from "./BubbleChartScreen";
import CandleStickChartScreen from "./CandleStickChartScreen";
import CombinedChartScreen from "./CombinedChartScreen";
import LineChartScreen from "./LineChartScreen";
import LineChartGradientScreen from "./LineChartGradientScreen";
import TimeSeriesLineChartScreen from "./TimeSeriesLineChartScreen";
import PieChartScreen from "./PieChartScreen";
import RadarChartScreen from "./RadarChartScreen";
import ScatterChartScreen from "./ScatterChartScreen";
import StackedBarChartScreen from "./StackedBarChartScreen";
import ZeroLineChartScreen from "./ZeroLineChartScreen";
import LiveUpdateChartScreen from "./LiveUpdateChartScreen";
import GroupBarChartScreen from "./GroupBarChartScreen";
import InfiniteScrollLineChartScreen from "./InfiniteScrollLineChartScreen";
import LinkageChartScreen from "./LinkageChartScreen";
import StockChartScreen from "./StockChartScreen";

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});


const Context = createContext();

const ChartsExplorer = () => (
  <Context.Provider value={{}}>
    <AxisLineChartScreen/>

  </Context.Provider>
);

export default ChartsExplorer;
