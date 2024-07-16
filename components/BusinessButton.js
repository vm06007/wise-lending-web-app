import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BusinessButton = ({ style }) => {
  return (
    <View style={[styles.businessbutton, style]}>
      <Image
        style={styles.groupFillIcon}
        contentFit="cover"
        source={require("../assets/group-fill6.png")}
      />
      <Text style={styles.business}>Business</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupFillIcon: {
    width: 35,
    height: 35,
  },
  business: {
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

export default BusinessButton;
