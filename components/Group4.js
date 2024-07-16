import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group4 = ({ style }) => {
  return (
    <View style={[styles.groupFillParent, style]}>
      <Image
        style={styles.groupFillIcon}
        contentFit="cover"
        source={require("../assets/group-fill2.png")}
      />
      <Text style={styles.business}>Business</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupFillIcon: {
    top: 0,
    left: 8,
    width: 35,
    height: 35,
    position: "absolute",
  },
  business: {
    top: 34,
    left: 0,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDarkslateblue_200,
    textAlign: "center",
    position: "absolute",
  },
  groupFillParent: {
    width: 50,
    height: 49,
  },
});

export default Group4;
