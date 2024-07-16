import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import GroupComponent from "../components/GroupComponent";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame61 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={[styles.forPayees, styles.forTypo]}>For Payees</Text>
        <Text style={[styles.forPayers, styles.forTypo]}>For Payers</Text>
      </View>
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
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-3901.png")}
        />
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.groupFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/group-fill5.png")}
          />
          <Text style={[styles.business, styles.homeTypo1]}>Business</Text>
        </View>
        <View style={styles.homeParent}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill.png")}
          />
        </View>
        <View style={[styles.darhboardParent, styles.parentPosition]}>
          <View style={[styles.homeFillIcon, styles.fillIconLayout]}>
            <View style={[styles.darhboardChild, styles.darhboardLayout]} />
            <View style={[styles.darhboardItem, styles.darhboardPosition]} />
            <View style={[styles.darhboardInner, styles.rectangleViewLayout]} />
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          </View>
          <Text style={[styles.farms, styles.homeTypo]}>Farms</Text>
        </View>
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Exchange</Text>
          <Image
            style={[styles.groupFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.frameItemLayout]}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={[styles.listboxbgParent, styles.rectangleGroupPosition]}>
        <View style={[styles.listboxbg, styles.listboxbgBg]} />
        <View style={styles.frameParent}>
          <View style={styles.eaInputBoxParent}>
            <TextInput style={[styles.eaInputBox, styles.frameItemBorder]} />
            <Text style={[styles.enterBusinessName, styles.enterPosition]}>
              Enter business name
            </Text>
          </View>
          <View style={[styles.eaInputBoxGroup, styles.inputSpaceBlock]}>
            <View style={[styles.eaInputBox, styles.frameItemBorder]} />
            <TextInput
              style={styles.enterPosition}
              placeholder="Enter a claim amount"
              placeholderTextColor="rgba(82, 88, 95, 0.8)"
            />
          </View>
          <View style={[styles.eaInputBoxContainer, styles.inputSpaceBlock]}>
            <Image
              style={styles.eaInputBox2}
              contentFit="cover"
              source={require("../assets/ea-input-box2.png")}
            />
            <Text style={[styles.claim, styles.claimLayout]}>Claim</Text>
          </View>
        </View>
      </View>
      <GroupComponent
        prop="$21,524.12"
        portfolioBalance="Business Balance"
        arrowDropUp={require("../assets/arrow-drop-up2.png")}
        propTop={110}
        propLeft={20}
      />
      <View style={styles.groupView}>
        <Image
          style={styles.eaInputBox2}
          contentFit="cover"
          source={require("../assets/ea-input-box31.png")}
        />
        <Text style={[styles.goBack, styles.claimLayout]}>Go Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    width: 390,
    left: 0,
  },
  rectangleGroupPosition: {
    width: 300,
    left: 48,
    position: "absolute",
  },
  frameItemLayout: {
    height: 33,
    position: "absolute",
  },
  forTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 7,
    textAlign: "center",
    position: "absolute",
  },
  yxldhnzg400x400Layout: {
    height: 62,
    position: "absolute",
  },
  iconPosition: {
    top: 9,
    height: 44,
    position: "absolute",
  },
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  fillIconLayout: {
    height: 35,
    width: 35,
    top: 0,
    position: "absolute",
  },
  homeTypo1: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
  },
  parentPosition: {
    height: 48,
    top: 21,
    position: "absolute",
  },
  darhboardLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  darhboardPosition: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleViewLayout: {
    left: "55.43%",
    right: "13.71%",
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  listboxbgBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  frameItemBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  enterPosition: {
    left: 49,
    top: 12,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  inputSpaceBlock: {
    marginTop: 31,
    width: 257,
  },
  claimLayout: {
    height: 18,
    width: 89,
    top: 13,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
    top: 0,
    height: 844,
  },
  frameItem: {
    top: -1,
    left: -1,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    width: 302,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
  },
  frameInner: {
    top: 1,
    left: 149,
    width: 150,
    height: 29,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  forPayees: {
    left: 187,
    textAlign: "center",
    color: Color.colorWhite,
  },
  forPayers: {
    left: 40,
    color: Color.colorDarkgray_400,
    textAlign: "center",
  },
  rectangleGroup: {
    top: 225,
    height: 31,
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    left: 165,
    width: 58,
    top: 0,
  },
  image1Icon: {
    width: 48,
    height: 44,
    left: 0,
  },
  image2Icon: {
    left: 291,
    width: 99,
    height: 44,
  },
  yxldhnzg400x400RemovebgPrevParent: {
    top: 33,
    width: 390,
    left: 0,
  },
  homeRowChild: {
    top: 0,
  },
  groupFillIcon: {
    left: 10,
  },
  business: {
    top: 34,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_200,
  },
  groupFillParent: {
    top: 20,
    left: 244,
    width: 54,
    height: 49,
    position: "absolute",
  },
  home: {
    top: 35,
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  homeFillIcon: {
    left: 0,
  },
  homeParent: {
    top: 19,
    left: 24,
    height: 50,
    width: 35,
    position: "absolute",
  },
  darhboardChild: {
    bottom: "55.43%",
    top: "13.71%",
  },
  darhboardItem: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  darhboardInner: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleView: {
    bottom: "55.43%",
    top: "13.71%",
  },
  farms: {
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 0,
    position: "absolute",
    top: 33,
  },
  darhboardParent: {
    left: 96,
    width: 35,
  },
  exchangeParent: {
    left: 168,
    width: 55,
  },
  userFillIcon: {
    left: 6,
    width: 35,
    top: 0,
  },
  accountParent: {
    left: 319,
    width: 47,
  },
  homeRow: {
    top: 757,
  },
  listboxbg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  eaInputBox: {
    borderRadius: Border.br_10xs,
    borderColor: Color.colorDarkgray_100,
    height: 40,
    width: 257,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    left: 0,
    top: 0,
  },
  enterBusinessName: {
    width: 158,
    color: Color.colorDimgray_600,
    textAlign: "center",
  },
  eaInputBoxParent: {
    height: 40,
    width: 257,
  },
  eaInputBoxGroup: {
    height: 40,
  },
  eaInputBox2: {
    borderRadius: Border.br_8xs,
    width: 257,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  claim: {
    left: 84,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  eaInputBoxContainer: {
    height: 44,
  },
  frameParent: {
    top: 30,
    left: 19,
    position: "absolute",
  },
  listboxbgParent: {
    top: 320,
    height: 246,
  },
  goBack: {
    left: 83,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  groupView: {
    top: 608,
    left: 67,
    width: 257,
    height: 44,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame61;
