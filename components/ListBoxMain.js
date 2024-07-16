import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ListBoxMain = () => {
  return (
    <View style={styles.listboxMain}>
      <View style={[styles.listboxbg, styles.listboxbgPosition]} />
      <View style={styles.placeholderText}>
        <Text style={[styles.selectAsset, styles.listboxbgPosition]}>
          Select Asset
        </Text>
      </View>
      <Image
        style={styles.chevronIcon}
        contentFit="cover"
        source={require("../assets/chevron21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listboxbgPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  listboxbg: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  selectAsset: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    textAlign: "left",
  },
  placeholderText: {
    height: "33.33%",
    width: "65.71%",
    top: "33.33%",
    right: "28.59%",
    bottom: "33.33%",
    left: "5.71%",
    position: "absolute",
  },
  chevronIcon: {
    height: "8.33%",
    width: "6.92%",
    top: "46.67%",
    right: "10.86%",
    bottom: "45%",
    left: "82.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.8,
    position: "absolute",
  },
  listboxMain: {
    height: "7.11%",
    width: "50.77%",
    top: "39.1%",
    right: "43.59%",
    bottom: "53.79%",
    left: "5.64%",
    position: "absolute",
  },
});

export default ListBoxMain;
