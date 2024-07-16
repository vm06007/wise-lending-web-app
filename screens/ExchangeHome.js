import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import GroupComponent from "../components/GroupComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ExchangeHome = () => {
  return (
    <View style={styles.exchangeHome}>
      <View
        style={[styles.exchangeHomeChild, styles.exchangeHomeChildLayout]}
      />
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
        <View style={styles.homeParent}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/home-fill2.png")}
          />
        </View>
        <View style={[styles.darhboardParent, styles.parentPosition]}>
          <View style={[styles.homeFillIcon, styles.iconLayout1]}>
            <View style={[styles.darhboardChild, styles.darhboardLayout]} />
            <View style={[styles.darhboardItem, styles.darhboardPosition]} />
            <View style={[styles.darhboardInner, styles.rectangleViewLayout]} />
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          </View>
          <Text style={[styles.farms, styles.homeTypo]}>Farms</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Account</Text>
          <Image
            style={styles.userFillIcon}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.refresh2Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/group-fill7.png")}
          />
          <Text style={styles.business}>Business</Text>
        </View>
      </View>
      <View style={[styles.eaInputBoxParent, styles.inputLayout2]}>
        <Image
          style={[styles.eaInputBox, styles.inputLayout2]}
          contentFit="cover"
          source={require("../assets/ea-input-box4.png")}
        />
        <Text style={[styles.submit, styles.usdcTypo]}>Submit</Text>
      </View>
      <GroupComponent
        prop="$21,524.12"
        portfolioBalance="Portfolio Balance"
        arrowDropUp={require("../assets/arrow-drop-up2.png")}
        propTop={110}
        propLeft={20}
      />
      <View style={styles.swapModal}>
        <LinearGradient
          style={styles.listboxbg}
          locations={[0, 1]}
          colors={["#fff", "#f6f8fc"]}
        />
        <Text style={[styles.available00, styles.availableTypo]}>
          Available: 0.0
        </Text>
        <View style={[styles.swapModalChild, styles.swapShadowBox]} />
        <Text style={styles.swap}>Swap</Text>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/vector-13.png")}
          />
          <Text style={[styles.usdc, styles.usdcFlexBox]}>USDC</Text>
        </View>
        <View style={[styles.ethParent, styles.ethLayout]}>
          <Text style={[styles.eth, styles.ethLayout]}>ETH</Text>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/vector-13.png")}
          />
        </View>
        <View style={styles.swapModalItem} />
        <View style={[styles.swapModalInner, styles.swapShadowBox]} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-106.png")}
        />
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>0.00</Text>
        <Text style={[styles.text1, styles.textTypo]}>0.00</Text>
        <Text style={[styles.available10000, styles.availableTypo]}>
          Available: 10000
        </Text>
        <Image
          style={[styles.refresh1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/refresh-1.png")}
        />
        <Image
          style={[styles.gearIconSvg1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/gear-icon-svg-1.png")}
        />
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.usdc00003, styles.usdc00003Typo]}>
            1 USDC = 0.0003 ETH
          </Text>
        </View>
        <Text style={[styles.poweredByUnizen, styles.usdc00003Typo]}>
          Powered by Unizen
        </Text>
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
        <View style={[styles.eaInputBox1, styles.inputPosition]} />
        <Text style={[styles.deposit, styles.depositTypo]}>Deposit</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
      </View>
      <View style={[styles.eaInputBoxContainer, styles.inputLayout]}>
        <View style={[styles.eaInputBox2, styles.inputLayout]} />
        <Image
          style={[styles.downloadIcon1, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
        <Text style={[styles.withdraw, styles.depositTypo]}>Withdraw</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exchangeHomeChildLayout: {
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
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorDimgray_600,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
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
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    position: "absolute",
  },
  inputLayout2: {
    width: 257,
    height: 44,
    position: "absolute",
  },
  usdcTypo: {
    height: 18,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  availableTypo: {
    width: 77,
    textAlign: "right",
    color: Color.colorBlack,
    fontSize: FontSize.size_5xs,
    left: 201,
    height: 11,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  swapShadowBox: {
    height: 32,
    width: 229,
    elevation: 25,
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_21xl,
    left: 56,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    position: "absolute",
  },
  groupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  usdcFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  ethLayout: {
    height: 17,
    width: 56,
    position: "absolute",
  },
  textTypo: {
    height: 21,
    width: 70,
    textAlign: "right",
    color: Color.colorBlack,
    left: 201,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
    top: 13,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 22,
    width: 160,
    position: "absolute",
  },
  usdc00003Typo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  inputLayout1: {
    height: 58,
    width: 164,
    position: "absolute",
  },
  inputPosition: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
  },
  depositTypo: {
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 17,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  downloadIconLayout: {
    width: 25,
    height: 22,
    position: "absolute",
  },
  inputLayout: {
    width: 167,
    height: 58,
    position: "absolute",
  },
  exchangeHomeChild: {
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
  homeRowChild: {
    top: 0,
  },
  home: {
    textAlign: "center",
    top: 35,
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
    textAlign: "center",
    top: 33,
  },
  darhboardParent: {
    left: 96,
    width: 35,
  },
  userFillIcon: {
    left: 6,
    height: 33,
    width: 35,
    top: 0,
    position: "absolute",
  },
  accountParent: {
    left: 319,
    width: 47,
  },
  refresh2Icon: {
    left: 10,
  },
  business: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkgray_700,
    top: 34,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  groupFillParent: {
    top: 20,
    left: 244,
    height: 49,
    width: 54,
    position: "absolute",
  },
  homeRow: {
    top: 757,
  },
  eaInputBox: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  submit: {
    left: 84,
    color: Color.colorWhite,
    width: 89,
    top: 13,
    height: 18,
    textAlign: "center",
  },
  eaInputBoxParent: {
    marginLeft: -128,
    top: 685,
    left: "50%",
  },
  listboxbg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.17)",
    shadowRadius: 14,
    elevation: 14,
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    position: "absolute",
    width: "100%",
  },
  available00: {
    top: 306,
    height: 11,
  },
  swapModalChild: {
    top: 268,
  },
  swap: {
    top: 12,
    left: 15,
    fontSize: FontSize.size_xl,
    height: 19,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: 54,
    position: "absolute",
  },
  groupChild: {
    height: "33.33%",
    width: "22.86%",
    top: "33.33%",
    right: "8.57%",
    bottom: "33.33%",
    left: "68.57%",
  },
  usdc: {
    width: 70,
    height: 18,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: 0,
    top: 0,
  },
  vectorParent: {
    height: "4.65%",
    width: "20.96%",
    top: "15.76%",
    right: "72.16%",
    bottom: "79.59%",
    left: "6.89%",
    position: "absolute",
  },
  eth: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    width: 56,
    left: 0,
    top: 0,
  },
  groupItem: {
    height: "35.29%",
    width: "28.57%",
    top: "29.41%",
    right: "12.5%",
    bottom: "35.29%",
    left: "58.93%",
  },
  ethParent: {
    top: 233,
    left: 31,
  },
  swapModalItem: {
    top: 194,
    left: 28,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 281,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  swapModalInner: {
    top: 105,
  },
  ellipseIcon: {
    top: 179,
    left: 153,
    width: 30,
    height: 30,
    position: "absolute",
  },
  arrowIcon: {
    top: 184,
    overflow: "hidden",
    maxWidth: "100%",
    height: 19,
    left: 168,
    position: "absolute",
  },
  text: {
    top: 110,
  },
  text1: {
    top: 273,
  },
  available10000: {
    top: 143,
    height: 11,
  },
  refresh1Icon: {
    left: 243,
  },
  gearIconSvg1: {
    left: 278,
  },
  groupInner: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_21xl,
    width: 160,
    left: 0,
    top: 0,
  },
  usdc00003: {
    top: 5,
    left: 30,
    width: 100,
    height: 12,
    textAlign: "left",
    color: Color.colorBlack,
  },
  rectangleParent: {
    top: 330,
    left: 7,
  },
  poweredByUnizen: {
    marginLeft: -78,
    top: 365,
    color: Color.colorDarkgray_200,
    width: 157,
    height: 11,
    left: "50%",
    textAlign: "center",
  },
  swapModal: {
    height: "45.85%",
    width: "85.64%",
    top: "32.82%",
    right: "7.18%",
    bottom: "21.33%",
    left: "7.18%",
    position: "absolute",
  },
  eaInputBox1: {
    height: 58,
    width: 164,
    position: "absolute",
  },
  deposit: {
    width: 53,
    left: 56,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 34,
  },
  downloadIcon: {
    top: 7,
    left: 70,
  },
  eaInputBoxGroup: {
    left: 25,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 198,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  eaInputBox2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
  },
  downloadIcon1: {
    marginLeft: -12.5,
    top: 8,
    left: "50%",
  },
  withdraw: {
    left: 49,
    width: 70,
    top: 35,
  },
  eaInputBoxContainer: {
    left: 199,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 198,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  exchangeHome: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default ExchangeHome;
