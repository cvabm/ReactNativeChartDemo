/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ChartsListScreen from "./app/ChartsListScreen";


import AxisLineChartScreen from "./app/AxisLineChartScreen";
import MultipleChartScreen from "./app/MultipleChartScreen";
import MovingWindowChartScreen from "./app/MovingWindowChartScreen";
import BarChartScreen from "./app/BarChartScreen";
import HorizontalBarChartScreen from "./app/HorizontalBarChartScreen";
import BubbleChartScreen from "./app/BubbleChartScreen";
import CandleStickChartScreen from "./app/CandleStickChartScreen";
import CombinedChartScreen from "./app/CombinedChartScreen";
import LineChartScreen from "./app/LineChartScreen";
import LineChartGradientScreen from "./app/LineChartGradientScreen";
import TimeSeriesLineChartScreen from "./app/TimeSeriesLineChartScreen";
import PieChartScreen from "./app/PieChartScreen";
import RadarChartScreen from "./app/RadarChartScreen";
import ScatterChartScreen from "./app/ScatterChartScreen";
import StackedBarChartScreen from "./app/StackedBarChartScreen";
import ZeroLineChartScreen from "./app/ZeroLineChartScreen";
import LiveUpdateChartScreen from "./app/LiveUpdateChartScreen";
import GroupBarChartScreen from "./app/GroupBarChartScreen";
import InfiniteScrollLineChartScreen from "./app/InfiniteScrollLineChartScreen";
import LinkageChartScreen from "./app/LinkageChartScreen";
import StockChartScreen from "./app/StockChartScreen";

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const components = {
  AxisLineChart: AxisLineChartScreen,
  MultipleChart: MultipleChartScreen,
  MovingWindowChart: MovingWindowChartScreen,
  BarChart: BarChartScreen,
  HorizontalBarChart: HorizontalBarChartScreen,
  BubbleChart: BubbleChartScreen,
  CandleStickChart: CandleStickChartScreen,
  CombinedChart: CombinedChartScreen,
  LineChart: LineChartScreen,
  LineChartGradient: LineChartGradientScreen,
  TimeSeriesLineChart: TimeSeriesLineChartScreen,
  PieChart: PieChartScreen,
  RadarChart: RadarChartScreen,
  ScatterChart: ScatterChartScreen,
  StackedBarChart: StackedBarChartScreen,
  ZeroLineChart: ZeroLineChartScreen,
  LiveUpdateChart: LiveUpdateChartScreen,
  GroupBarChart: GroupBarChartScreen,
  InfiniteScrollLineChart: InfiniteScrollLineChartScreen,
  LinkageChart: LinkageChartScreen,
  StockChart: StockChartScreen,
};
const App = () => {
  const [currentComponent, setCurrentComponent] = useState<keyof typeof components>('AxisLineChart');

  const CurrentComponent = components[currentComponent];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chart Components</Text>
      <CurrentComponent />
      <ScrollView style={styles.buttonContainer}>
        {Object.keys(components).map((key) => (
          <View style={styles.button} key={key}>
            <Button
              title={key}
              onPress={() => setCurrentComponent(key as keyof typeof components)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 20,
    flex:1,
  },
  button: {
    marginBottom: 10, // Add some spacing between buttons
    flex:1,
  },
});

export default App;