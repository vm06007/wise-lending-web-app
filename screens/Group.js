import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.accountParent}>
      <Text style={styles.account}>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_600,
    textAlign: "center",
  },
  accountParent: {
    flex: 1,
    width: "100%",
    height: 15,
  },
});

export default Group;
