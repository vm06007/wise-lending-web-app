import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent6 = ({ propTop }) => {
  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[styles.eaInputBoxParent, styles.inputLayout, frameView5Style]}
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
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
  },
  downloadIcon: {
    marginLeft: -13,
    top: 7,
    width: 25,
    height: 22,
  },
  borrow: {
    marginLeft: -26,
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
    width: "38.53%",
    top: 301,
    right: "1.7%",
    left: "59.77%",
  },
});

export default FrameComponent6;
