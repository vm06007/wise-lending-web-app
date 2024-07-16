import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ExchangeButton = ({ style }) => {
  return (
    <View style={[styles.exchangebutton, style]}>
      <Image
        style={styles.refresh2Icon}
        contentFit="cover"
        source={require("../assets/refresh-21.png")}
      />
      <Text style={styles.exchange}>Exchange</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  refresh2Icon: {
    width: 35,
    height: 35,
  },
  exchange: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_600,
    textAlign: "center",
  },
  exchangebutton: {
    position: "absolute",
    width: 55,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExchangeButton;
