import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PositionSupply = ({
  eTH,
  prop,
  prop1,
  supplied,
  propTop,
  propBottom,
}) => {
  const positionSupplyStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop, propBottom]);

  return (
    <View style={[styles.positionSupply, positionSupplyStyle]}>
      <View style={styles.listboxbgPosition}>
        <View style={[styles.listboxbg, styles.listboxbgPosition]} />
        <View style={styles.ethParent}>
          <Text style={[styles.eth, styles.ethTypo]}>{eTH}</Text>
          <Text style={[styles.text, styles.ethTypo]}>{prop}</Text>
          <Text style={[styles.text1, styles.textTypo]}>03/04/2024</Text>
          <Text style={[styles.text2, styles.textTypo]}>{prop1}</Text>
        </View>
      </View>
      <Text style={styles.supplied}>{supplied}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listboxbgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  ethTypo: {
    width: 61,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  listboxbg: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPaleturquoise,
  },
  eth: {
    left: 0,
    fontSize: FontSize.size_sm,
    top: 0,
    width: 61,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text: {
    top: 4,
    left: 51,
    fontSize: FontSize.size_3xs,
  },
  text1: {
    left: 136,
    width: 83,
  },
  text2: {
    left: 219,
    width: 81,
  },
  ethParent: {
    top: 36,
    width: 300,
    height: 17,
    left: 13,
    position: "absolute",
  },
  supplied: {
    top: 7,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 13,
    position: "absolute",
  },
  positionSupply: {
    height: "8.41%",
    width: "85.64%",
    top: "61.97%",
    right: "7.18%",
    bottom: "29.62%",
    left: "7.18%",
    position: "absolute",
  },
});

export default PositionSupply;
