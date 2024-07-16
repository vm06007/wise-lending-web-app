import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TransferContainer = () => {
  return (
    <View style={[styles.eaInputBoxParent, styles.inputLayout]}>
      <View style={[styles.eaInputBox, styles.inputLayout]} />
      <Text style={styles.transfer}>Transfer</Text>
      <Image
        style={styles.twoWayArrowIcon}
        contentFit="cover"
        source={require("../assets/twoway-arrow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 58,
    width: 167,
    position: "absolute",
  },
  eaInputBox: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
  },
  transfer: {
    top: 35,
    left: 57,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorRoyalblue_100,
    textAlign: "center",
    width: 53,
    height: 17,
    position: "absolute",
  },
  twoWayArrowIcon: {
    top: 11,
    left: 73,
    width: 25,
    height: 18,
    position: "absolute",
  },
  eaInputBoxParent: {
    top: 208,
    left: 199,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
});

export default TransferContainer;
