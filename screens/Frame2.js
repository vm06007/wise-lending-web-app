import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import HOMEROW from "../components/HOMEROW";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame21 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View
        style={[
          styles.yxldhnzg400x400RemovebgPrevParent,
          styles.yxldhnzg400x400Layout,
        ]}
      >
        <Image
          style={[
            styles.yxldhnzg400x400RemovebgPrevIcon,
            styles.yxldhnzg400x400Layout,
          ]}
          contentFit="cover"
          source={require("../assets/yxldhnzg-400x400removebgpreview-91.png")}
        />
        <Image
          style={[styles.image1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
      </View>
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill.png")}
      />
      <View style={[styles.eaInputBoxParent, styles.groupParentPosition]}>
        <View style={[styles.eaInputBox, styles.frameItemBorder]} />
        <View style={styles.upToPaParent}>
          <Text style={styles.upToPa}>Up to p.a</Text>
          <Text style={[styles.text, styles.textTypo]}>5.52%</Text>
        </View>
        <Image
          style={styles.b51a10F900448eB983702a2bdaIcon}
          contentFit="cover"
          source={require("../assets/00b51a10f900448eb983702a2bda10d6-12.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
        <View style={[styles.oethParent, styles.oethParentLayout]}>
          <Text style={[styles.oeth, styles.oethTypo]}>OETH</Text>
          <Text style={styles.origin}>origin</Text>
        </View>
      </View>
      <View style={[styles.eaInputBoxGroup, styles.groupParentPosition]}>
        <View style={[styles.eaInputBox, styles.frameItemBorder]} />
        <View style={[styles.upToPaGroup, styles.upToPaGroupLayout]}>
          <Text style={styles.upToPa}>Up to p.a</Text>
          <Text style={[styles.text1, styles.textTypo]}>25.52%</Text>
        </View>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
        <View style={[styles.rsethParent, styles.oethParentLayout]}>
          <Text style={[styles.oeth, styles.oethTypo]}>rsETH</Text>
          <Text style={[styles.kelp, styles.kelpTypo]}>Kelp</Text>
        </View>
        <Image
          style={styles.b51a10F900448eB983702a2bdaIcon}
          contentFit="cover"
          source={require("../assets/ab328b09f46a47a8aa6f086e75161418-11.png")}
        />
      </View>
      <View style={[styles.eaInputBoxContainer, styles.groupParentPosition]}>
        <View style={[styles.eaInputBox, styles.frameItemBorder]} />
        <View style={[styles.upToPaContainer, styles.upToPaGroupLayout]}>
          <Text style={styles.upToPa}>Up to p.a</Text>
          <Text style={[styles.text1, styles.textTypo]}>5.74%</Text>
        </View>
        <Image
          style={styles.b51a10F900448eB983702a2bdaIcon}
          contentFit="cover"
          source={require("../assets/62b0e32688be40bca04df754fd0c3bb2-11.png")}
        />
        <View style={styles.sfrxethParent}>
          <Text style={[styles.sfrxeth, styles.oethTypo]}>sfrxETH</Text>
          <Text style={[styles.frax, styles.kelpTypo]}>Frax</Text>
        </View>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentPosition]}>
        <View style={[styles.eaInputBox, styles.frameItemBorder]} />
        <View style={[styles.upToPaContainer, styles.upToPaGroupLayout]}>
          <Text style={styles.upToPa}>Up to p.a</Text>
          <Text style={[styles.text1, styles.textTypo]}>5.52%</Text>
        </View>
        <Image
          style={styles.b51a10F900448eB983702a2bdaIcon}
          contentFit="cover"
          source={require("../assets/00b51a10f900448eb983702a2bda10d6-13.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
        <View style={[styles.oethGroup, styles.oethParentLayout]}>
          <Text style={[styles.oeth, styles.oethTypo]}>OETH</Text>
          <Text style={[styles.origin1, styles.kelpTypo]}>origin</Text>
        </View>
      </View>
      <View style={[styles.eaInputBoxParent1, styles.groupParentPosition]}>
        <View style={[styles.eaInputBox, styles.frameItemBorder]} />
        <View style={[styles.upToPaContainer, styles.upToPaGroupLayout]}>
          <Text style={styles.upToPa}>Up to p.a</Text>
          <Text style={[styles.text1, styles.textTypo]}>25.52%</Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
        <View style={[styles.oethGroup, styles.oethParentLayout]}>
          <Text style={[styles.oeth, styles.oethTypo]}>rsETH</Text>
          <Text style={[styles.kelp1, styles.kelpTypo]}>Kelp</Text>
        </View>
        <Image
          style={styles.b51a10F900448eB983702a2bdaIcon}
          contentFit="cover"
          source={require("../assets/ab328b09f46a47a8aa6f086e75161418-11.png")}
        />
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupParentPosition]}
        onPress={() => {}}
      >
        <View style={[styles.eaInputBox, styles.frameItemBorder]} />
        <View style={[styles.upToPaContainer, styles.upToPaGroupLayout]}>
          <Text style={styles.upToPa}>Up to p.a</Text>
          <Text style={[styles.text1, styles.textTypo]}>5.74%</Text>
        </View>
        <Image
          style={styles.b51a10F900448eB983702a2bdaIcon}
          contentFit="cover"
          source={require("../assets/62b0e32688be40bca04df754fd0c3bb2-11.png")}
        />
        <View style={styles.sfrxethParent}>
          <Text style={[styles.sfrxeth, styles.oethTypo]}>sfrxETH</Text>
          <Text style={[styles.frax, styles.kelpTypo]}>Frax</Text>
        </View>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
      </Pressable>
      <View style={styles.rectangleGroup}>
        <View style={[styles.frameItem, styles.frameItemBorder]} />
        <TextInput
          style={styles.searchYourPools}
          placeholder="Search your Pools"
          placeholderTextColor="#acacac"
        />
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    width: 390,
    left: 0,
  },
  yxldhnzg400x400Layout: {
    height: 62,
    position: "absolute",
  },
  iconPosition: {
    height: 44,
    top: 9,
    position: "absolute",
  },
  groupParentPosition: {
    height: 70,
    width: 339,
    marginLeft: -169,
    left: "50%",
    position: "absolute",
  },
  frameItemBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDodgerblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    width: 141,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    width: "1.18%",
    height: "14.29%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  oethParentLayout: {
    height: 17,
    width: 75,
    position: "absolute",
  },
  oethTypo: {
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  upToPaGroupLayout: {
    width: 149,
    left: 66,
    height: 19,
    position: "absolute",
  },
  kelpTypo: {
    textAlign: "left",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  frameChild: {
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 844,
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    left: 165,
    width: 58,
    top: 0,
  },
  image1Icon: {
    width: 48,
    left: 0,
  },
  image2Icon: {
    left: 291,
    width: 99,
  },
  yxldhnzg400x400RemovebgPrevParent: {
    top: 33,
    width: 390,
    left: 0,
  },
  eaInputBox: {
    marginLeft: -170.5,
    bottom: -1,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorDarkgray_600,
    width: 341,
    height: 72,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  upToPa: {
    top: 1,
    width: 141,
    textAlign: "center",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  text: {
    marginLeft: -66,
  },
  upToPaParent: {
    top: 38,
    left: 61,
    width: 150,
    height: 19,
    position: "absolute",
  },
  b51a10F900448eB983702a2bdaIcon: {
    left: 9,
    width: 45,
    height: 45,
    overflow: "hidden",
    top: 11,
    position: "absolute",
  },
  groupChild: {
    top: "42.86%",
    right: "5.01%",
    bottom: "42.86%",
    left: "93.81%",
  },
  oeth: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  origin: {
    marginLeft: 9.5,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  oethParent: {
    left: 71,
    width: 75,
    top: 12,
  },
  eaInputBoxParent: {
    bottom: 570,
  },
  text1: {
    marginLeft: -66.5,
  },
  upToPaGroup: {
    top: 42,
  },
  kelp: {
    marginLeft: 13.5,
    textAlign: "left",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  rsethParent: {
    left: 73,
    top: 12,
  },
  eaInputBoxGroup: {
    bottom: 480,
  },
  upToPaContainer: {
    top: 41,
  },
  sfrxeth: {
    textAlign: "left",
  },
  frax: {
    marginLeft: 2,
    textAlign: "left",
  },
  sfrxethParent: {
    top: 14,
    left: 74,
    flexDirection: "row",
    position: "absolute",
  },
  groupInner: {
    top: 30,
    left: 318,
    width: 4,
    height: 10,
    position: "absolute",
  },
  eaInputBoxContainer: {
    bottom: 390,
  },
  vectorIcon: {
    top: "40%",
    right: "5.9%",
    bottom: "45.71%",
    left: "92.92%",
  },
  origin1: {
    marginLeft: 11.5,
    textAlign: "left",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  oethGroup: {
    left: 71,
    width: 75,
    top: 11,
  },
  groupView: {
    bottom: 300,
  },
  kelp1: {
    marginLeft: 12.5,
    textAlign: "left",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  eaInputBoxParent1: {
    bottom: 210,
  },
  groupPressable: {
    bottom: 120,
  },
  frameItem: {
    width: "100.67%",
    top: -1,
    right: "-0.33%",
    left: "-0.33%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    height: 33,
  },
  searchYourPools: {
    top: 7,
    left: 90,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  searchIcon: {
    width: "8%",
    top: 4,
    right: "3%",
    left: "89%",
    height: 24,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleGroup: {
    width: "76.92%",
    top: 129,
    right: "11.54%",
    left: "11.54%",
    height: 31,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Frame21;
