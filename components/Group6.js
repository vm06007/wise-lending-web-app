import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group6 = ({ style }) => {
  return (
    <View style={[styles.homeParent, style]}>
      <Text style={[styles.home, styles.homePosition]}>Home</Text>
      <Image
        style={[styles.homeFillIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/home-fill2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: 0,
    position: "absolute",
  },
  home: {
    top: 35,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_600,
    textAlign: "center",
  },
  homeFillIcon: {
    top: 0,
    height: 35,
    width: 35,
  },
  homeParent: {
    height: 50,
    width: 35,
  },
});

export default Group6;
