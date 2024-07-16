import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const WalletOptions = ({
  wallet,
  wallet1,
  walletNumberOfLines,
  showRecent,
}) => {
  return (
    <Pressable style={styles.wallet}>
      <View style={[styles.walletShadow, styles.walletLayout]} />
      <Image
        style={[styles.walletIcon, styles.walletLayout]}
        contentFit="cover"
        source={wallet}
      />
      <View style={styles.text}>
        <Text style={[styles.wallet1, styles.recentTypo]}>{wallet1}</Text>
        {showRecent && (
          <Text style={[styles.recent, styles.recentTypo]} numberOfLines={1} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  walletLayout: {
    height: 60,
    width: 60,
    borderRadius: Border.br_xs,
  },
  recentTypo: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    alignItems: "center",
  },
  walletShadow: {
    position: "absolute",
    marginLeft: -30,
    top: 0,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    zIndex: 0,
  },
  walletIcon: {
    zIndex: 1,
    marginTop: 8,
  },
  wallet1: {
    color: Color.lightModalText,
    width: 84,
  },
  recent: {
    alignSelf: "stretch",
    color: Color.lightAccentBlue,
    overflow: "hidden",
    height: 18,
  },
  text: {
    zIndex: 2,
    marginTop: 8,
  },
  wallet: {
    alignItems: "center",
  },
});

export default WalletOptions;
