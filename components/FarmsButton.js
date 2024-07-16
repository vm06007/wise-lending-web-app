import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FarmsButton = ({ style }) => {
  return (
    <View style={[styles.farmsbutton, style]}>
      <View style={styles.darhboard}>
        <View style={[styles.darhboardChild, styles.darhboardLayout]} />
        <View style={[styles.darhboardItem, styles.darhboardPosition]} />
        <View style={[styles.darhboardInner, styles.rectangleViewLayout]} />
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      </View>
      <Text style={styles.farms}>Farms</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  darhboardLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
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
    borderColor: Color.colorDarkgray_200,
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
    borderColor: Color.colorDarkgray_200,
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
    height: 35,
    width: 35,
  },
  farms: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_600,
    textAlign: "center",
  },
  farmsbutton: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    position: "absolute",
  },
});

export default FarmsButton;
