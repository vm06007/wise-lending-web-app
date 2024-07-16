import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import GroupComponent from "../components/GroupComponent";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const BusinessHomePayers1 = () => {
  return (
    <View style={styles.businessHomePayers}>
      <View
        style={[
          styles.businessHomePayersChild,
          styles.businessHomePayersChildLayout,
        ]}
      />
      <GroupComponent
        prop="$21,524.12"
        portfolioBalance="Business Balance"
        arrowDropUp={require("../assets/arrow-drop-up2.png")}
        propTop={110}
        propLeft={20}
      />
      <View style={[styles.eaInputBoxParent, styles.inputLayout]}>
        <Image
          style={[styles.eaInputBox, styles.inputLayout]}
          contentFit="cover"
          source={require("../assets/ea-input-box.png")}
        />
        <Text style={styles.createAContract}>Create A Contract</Text>
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
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Text style={[styles.forPayers, styles.forTypo]}>For Payers</Text>
        <Text style={[styles.forPayees, styles.forTypo]}>For Payees</Text>
      </View>
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-3901.png")}
        />
        <View style={styles.homeParent}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill3.png")}
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
            style={[styles.refresh2Icon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={[styles.listboxbgParent, styles.listboxbgLayout]}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={[styles.wiseSoftLlc, styles.wiseSoftLlcTypo]}>
          Wise Soft LLC.
        </Text>
        <Text style={[styles.salK, styles.salKTypo]}>Sal K</Text>
        <Text style={[styles.monthly, styles.salKTypo]}>4000 Monthly</Text>
        <Image
          style={styles.image13Icon}
          contentFit="cover"
          source={require("../assets/image-13.png")}
        />
      </View>
      <View style={[styles.listboxbgGroup, styles.listboxbgLayout]}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={[styles.wiseSoftLlc, styles.wiseSoftLlcTypo]}>
          Wise Soft LLC.
        </Text>
        <Text style={[styles.salK, styles.salKTypo]}>Andrew</Text>
        <Text style={[styles.monthly, styles.salKTypo]}>4000 Monthly</Text>
        <Image
          style={styles.image13Icon}
          contentFit="cover"
          source={require("../assets/image-13.png")}
        />
      </View>
      <Text style={[styles.existingContracts, styles.wiseSoftLlcTypo]}>
        Existing Contracts
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  businessHomePayersChildLayout: {
    width: 390,
    left: 0,
  },
  inputLayout: {
    height: 44,
    width: 335,
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
  frameChildLayout: {
    height: 33,
    position: "absolute",
  },
  forTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  fillIconLayout: {
    height: 35,
    width: 35,
    top: 0,
    position: "absolute",
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
  listboxbgLayout: {
    height: 86,
    left: 48,
    width: 300,
    position: "absolute",
  },
  wiseSoftLlcTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  salKTypo: {
    top: 43,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  businessHomePayersChild: {
    backgroundColor: Color.colorWhite,
    width: 390,
    top: 0,
    position: "absolute",
    height: 844,
  },
  eaInputBox: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  createAContract: {
    marginLeft: -67.5,
    top: 13,
    left: "50%",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 135,
    height: 18,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    position: "absolute",
  },
  eaInputBoxParent: {
    top: 672,
    left: 27,
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
  frameChild: {
    top: -1,
    left: -1,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    borderWidth: 1,
    width: 302,
    borderStyle: "solid",
    height: 33,
    borderRadius: Border.br_81xl,
  },
  frameItem: {
    top: 1,
    left: 2,
    width: 150,
    height: 29,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  forPayers: {
    left: 41,
    top: 7,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
    color: Color.colorWhite,
  },
  forPayees: {
    left: 187,
    color: Color.colorDarkgray_400,
    top: 7,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rectangleParent: {
    top: 226,
    height: 31,
    width: 300,
    left: 30,
    position: "absolute",
  },
  homeRowChild: {
    top: 0,
  },
  home: {
    top: 35,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
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
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    textAlign: "center",
    left: 0,
    position: "absolute",
    top: 33,
  },
  darhboardParent: {
    left: 96,
    width: 35,
  },
  refresh2Icon: {
    left: 10,
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
  listboxbgShadowBox: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  wiseSoftLlc: {
    top: 10,
    left: 14,
    width: 142,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  salK: {
    left: 39,
    width: 103,
  },
  monthly: {
    left: 182,
    width: 96,
  },
  image13Icon: {
    top: 40,
    left: 157,
    width: 23,
    height: 23,
    position: "absolute",
  },
  listboxbgParent: {
    top: 332,
  },
  listboxbgGroup: {
    top: 446,
  },
  existingContracts: {
    top: 287,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 30,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  businessHomePayers: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default BusinessHomePayers1;
