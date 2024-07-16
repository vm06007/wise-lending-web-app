import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group5 = ({ style }) => {
  return (
    <View style={[styles.accountParent, style]}>
      <Text style={styles.account}>Account</Text>
      <Image
        style={styles.userFillIcon}
        contentFit="cover"
        source={require("../assets/user-fill2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    top: 33,
    left: 0,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
    position: "absolute",
  },
  userFillIcon: {
    top: 0,
    left: 6,
    width: 35,
    height: 33,
    position: "absolute",
  },
  accountParent: {
    width: 47,
    height: 48,
  },
});

export default Group5;
