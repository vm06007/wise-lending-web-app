import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame3 = ({ style }) => {
  return (
    <View style={[styles.ethLogoParent, style]}>
      <Image
        style={styles.ethLogoIcon}
        contentFit="cover"
        source={require("../assets/eth-logo1.png")}
      />
      <View style={styles.employeePayoutParent}>
        <Text style={[styles.employeePayout, styles.textLayout]}>
          Employee payout
        </Text>
        <Text style={[styles.eth, styles.ethLayout]}>2.01 ETH</Text>
        <Text style={[styles.text, styles.usdTypo]}>4221213****123456123</Text>
        <Text style={[styles.usd, styles.usdTypo]}>-6400.00 USD →</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 145,
    textAlign: "left",
    left: 0,
  },
  ethLayout: {
    width: 141,
    textAlign: "right",
    left: 147,
  },
  usdTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  ethLogoIcon: {
    width: 36,
    overflow: "hidden",
    height: 36,
  },
  employeePayout: {
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    top: 21,
    position: "absolute",
  },
  eth: {
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    top: 21,
    position: "absolute",
  },
  text: {
    color: Color.colorDimgray_300,
    width: 145,
    textAlign: "left",
    left: 0,
  },
  usd: {
    color: Color.colorRed,
    width: 141,
    textAlign: "right",
    left: 147,
  },
  employeePayoutParent: {
    width: 288,
    marginLeft: 17,
    height: 36,
  },
  ethLogoParent: {
    flexDirection: "row",
  },
});

export default Frame3;
