import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomeButton = ({ style }) => {
  return (
    <View style={[styles.homebutton, style]}>
      <Image
        style={styles.homeFillIcon}
        contentFit="cover"
        source={require("../assets/home-fill4.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeFillIcon: {
    height: 35,
    width: 35,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
  },
  homebutton: {
    position: "absolute",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
});

export default HomeButton;
