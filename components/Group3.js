import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group3 = ({ style }) => {
  return (
    <View style={[styles.exchangeParent, style]}>
      <Text style={styles.exchange}>Exchange</Text>
      <Image
        style={styles.refresh2Icon}
        contentFit="cover"
        source={require("../assets/refresh-24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  exchange: {
    top: 33,
    left: 0,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
    position: "absolute",
  },
  refresh2Icon: {
    top: 0,
    left: 10,
    width: 35,
    height: 35,
    position: "absolute",
  },
  exchangeParent: {
    width: 55,
    height: 48,
  },
});

export default Group3;
