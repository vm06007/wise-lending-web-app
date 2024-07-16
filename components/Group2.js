import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Group2 = ({ style }) => {
  return (
    <View style={[styles.darhboardParent, style]}>
      <View style={[styles.darhboard, styles.farmsPosition]}>
        <View style={[styles.darhboardChild, styles.darhboardLayout]} />
        <View style={[styles.darhboardItem, styles.darhboardPosition]} />
        <View style={[styles.darhboardInner, styles.rectangleViewLayout]} />
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      </View>
      <Text style={[styles.farms, styles.farmsPosition]}>Farms</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  farmsPosition: {
    left: 0,
    position: "absolute",
  },
  darhboardLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkslateblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    position: "absolute",
  },
  darhboardPosition: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleViewLayout: {
    left: "55.43%",
    right: "13.71%",
    borderWidth: 2,
    borderColor: Color.colorDarkslateblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    position: "absolute",
  },
  darhboardChild: {
    bottom: "55.43%",
    top: "13.71%",
  },
  darhboardItem: {
    borderWidth: 2,
    borderColor: Color.colorDarkslateblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    position: "absolute",
  },
  darhboardInner: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleView: {
    bottom: "55.43%",
    top: "13.71%",
  },
  darhboard: {
    top: 0,
    height: 35,
    width: 35,
  },
  farms: {
    top: 33,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
  },
  darhboardParent: {
    height: 48,
    width: 35,
  },
});

export default Group2;
