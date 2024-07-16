import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame4 = ({ style }) => {
  return (
    <View style={[styles.ethLogoParent, style]}>
      <Image
        style={styles.ethLogoIcon}
        contentFit="cover"
        source={require("../assets/eth-logo2.png")}
      />
      <View style={styles.moneyTransferParent}>
        <Text style={[styles.moneyTransfer, styles.textLayout]}>
          Money transfer
        </Text>
        <Text style={[styles.btc, styles.btcLayout]}>0.67 BTC</Text>
        <Text style={[styles.text, styles.usdTypo]}>233132****123123123</Text>
        <Text style={[styles.usd, styles.usdTypo]}>+40,560.59 USD →</Text>
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
  btcLayout: {
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
  moneyTransfer: {
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    top: 21,
    position: "absolute",
  },
  btc: {
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
    color: Color.colorSeagreen,
    width: 141,
    textAlign: "right",
    left: 147,
  },
  moneyTransferParent: {
    width: 288,
    marginLeft: 17,
    height: 36,
  },
  ethLogoParent: {
    flexDirection: "row",
  },
});

export default Frame4;
