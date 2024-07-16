import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent7 = ({ propTop }) => {
  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[styles.eaInputBoxParent, styles.inputLayout, frameView4Style]}
    >
      <View style={[styles.eaInputBox, styles.inputLayout]} />
      <Text style={[styles.supply, styles.supplyPosition]}>Supply</Text>
      <Image
        style={[styles.downloadIcon, styles.supplyPosition]}
        contentFit="cover"
        source={require("../assets/download1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 58,
    position: "absolute",
  },
  supplyPosition: {
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
  supply: {
    marginLeft: -28.5,
    top: 34,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorRoyalblue_100,
    textAlign: "center",
    width: 53,
    height: 17,
  },
  downloadIcon: {
    marginLeft: -14.5,
    top: 7,
    width: 25,
    height: 22,
  },
  eaInputBoxParent: {
    width: "56.94%",
    top: 301,
    right: "42.21%",
    left: "0.85%",
  },
});

export default FrameComponent7;
