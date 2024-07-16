import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent5 = ({ propWidth, propRight, propLeft }) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propWidth, propRight, propLeft]);

  return (
    <View
      style={[styles.eaInputBoxParent, styles.inputLayout, frameView3Style]}
    >
      <View style={[styles.eaInputBox, styles.inputLayout]} />
      <Image
        style={[styles.downloadIcon, styles.borrowPosition]}
        contentFit="cover"
        source={require("../assets/download2.png")}
      />
      <Text style={[styles.borrow, styles.borrowPosition]}>Borrow</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 58,
    position: "absolute",
  },
  borrowPosition: {
    left: "50%",
    position: "absolute",
  },
  eaInputBox: {
    width: "101.49%",
    top: 0,
    right: "-1.49%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
  },
  downloadIcon: {
    marginLeft: -12,
    top: 7,
    width: 25,
    height: 22,
  },
  borrow: {
    marginLeft: -25,
    top: 35,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorRoyalblue_100,
    textAlign: "center",
    width: 53,
    height: 17,
  },
  eaInputBoxParent: {
    width: "34.36%",
    top: 398,
    right: "6.67%",
    left: "58.97%",
  },
});

export default FrameComponent5;
