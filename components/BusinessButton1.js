import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BusinessButton1 = ({ style }) => {
  return (
    <View style={[styles.businessbutton, style]}>
      <Image
        style={styles.userFillIcon}
        contentFit="cover"
        source={require("../assets/user-fill1.png")}
      />
      <Text style={styles.account}>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userFillIcon: {
    width: 35,
    height: 33,
  },
  account: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_600,
    textAlign: "center",
  },
  businessbutton: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BusinessButton1;
