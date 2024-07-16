import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AccountsHome = () => {
  return (
    <View style={styles.accountsHome}>
      <View style={[styles.eaInputBox, styles.groupItemBorder]} />
      <View
        style={[styles.accountsHomeChild, styles.accountsHomeChildLayout]}
      />
      <Text style={[styles.availableToEarn, styles.totalEarnedTypo]}>
        Available to earn interest
      </Text>
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
      <Text style={[styles.credit, styles.farmClr]}>Credit</Text>
      <Image
        style={[styles.accountsHomeItem, styles.accountsLayout]}
        contentFit="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.farm, styles.farmClr]}>Farm</Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-3901.png")}
        />
        <View style={[styles.homeParent, styles.homeParentLayout]}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill2.png")}
          />
        </View>
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.exchange, styles.accountTypo]}>Exchange</Text>
          <Image
            style={[styles.refresh2Icon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.groupFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/group-fill7.png")}
          />
          <Text style={[styles.business, styles.homeTypo]}>Business</Text>
        </View>
      </View>
      <View style={[styles.eaInputBoxParent, styles.inputLayout1]}>
        <View style={[styles.eaInputBox1, styles.inputPosition]} />
        <Text style={[styles.deposit, styles.depositLayout]}>Deposit</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
        <View style={[styles.eaInputBox2, styles.inputLayout]} />
        <Image
          style={[styles.downloadIcon1, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
        <Text style={[styles.withdraw, styles.depositLayout]}>Withdraw</Text>
      </View>
      <Text style={[styles.seeTransactions, styles.farmClr]}>
        See Transactions
      </Text>
      <View style={styles.eyeParent}>
        <Image
          style={[styles.eyeIcon, styles.eyeIconLayout]}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>$33,524.12</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Text style={[styles.portfolioValue, styles.farmClr]}>
          Portfolio Value
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo]}>5.63%</Text>
          <Text style={[styles.h, styles.textTypo1]}>24H</Text>
          <Image
            style={styles.arrowDropUpIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-up2.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={styles.listboxbgParent}>
          <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
          <View style={styles.usdcParent}>
            <Text style={[styles.usdc, styles.usdcTypo]}>USDC</Text>
            <Text style={[styles.text2, styles.textTypo2]}>4.20%</Text>
            <Text style={[styles.text3, styles.textTypo2]}>03/04/2024</Text>
            <Text style={[styles.text4, styles.textTypo2]}>$ 6900.69</Text>
          </View>
        </View>
        <Text style={[styles.supplied, styles.farmClr]}>Supplied</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={styles.listboxbgParent}>
          <View style={[styles.listboxbg1, styles.listboxbgShadowBox]} />
          <View style={styles.usdcParent}>
            <Text style={[styles.usdc, styles.usdcTypo]}>USDC</Text>
            <Text style={[styles.text5, styles.usdcTypo]}>-6.90%</Text>
            <Text style={[styles.text3, styles.textTypo2]}>03/04/2024</Text>
            <Text style={[styles.text4, styles.textTypo2]}>$ 1900.42</Text>
          </View>
        </View>
        <Text style={[styles.supplied, styles.farmClr]}>Borrowed</Text>
      </View>
      <View style={[styles.farmingCard, styles.groupPosition]}>
        <View style={[styles.listboxbg2, styles.listboxbgShadowBox]} />
        <Text style={[styles.positions, styles.text9Typo]}>3 Positions</Text>
        <Text style={[styles.text8, styles.text8Typo]}>~4.20%</Text>
        <Text style={[styles.pendle, styles.text8Typo]}>Pendle</Text>
        <Text style={[styles.text9, styles.text9Typo]}>$ 3000.00</Text>
        <Text style={[styles.positions1, styles.textTypo1]}>Positions</Text>
      </View>
      <View style={styles.lendingUtliization}>
        <View style={[styles.rectangleParent, styles.eyeIconLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={styles.lineView} />
        </View>
        <View style={[styles.capitalUtilizationParent, styles.depositLayout]}>
          <Text style={[styles.capitalUtilization, styles.ltvTypo]}>
            Capital Utilization
          </Text>
          <Text style={[styles.text10, styles.textTypo1]}>75%</Text>
        </View>
        <Text style={[styles.ltv, styles.ltvTypo]}>LTV</Text>
      </View>
      <Text style={[styles.text11, styles.text11Position]}>$500</Text>
      <Text style={[styles.totalEarned, styles.text11Position]}>
        Total Earned
      </Text>
      <Image
        style={[styles.accountsHomeInner, styles.accountsLayout]}
        contentFit="cover"
        source={require("../assets/vector-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  accountsHomeChildLayout: {
    width: 390,
    left: 0,
  },
  totalEarnedTypo: {
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
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
  farmClr: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    position: "absolute",
  },
  accountsLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "1.54%",
    height: "1.9%",
    position: "absolute",
  },
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homeParentLayout: {
    width: 35,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  fillIconLayout: {
    height: 35,
    width: 35,
    top: 0,
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
  accountTypo: {
    top: 33,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 48,
    top: 21,
    position: "absolute",
  },
  inputLayout1: {
    height: 58,
    width: 164,
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  depositLayout: {
    height: 17,
    position: "absolute",
  },
  downloadIconLayout: {
    height: 22,
    width: 25,
    position: "absolute",
  },
  inputLayout: {
    width: 167,
    height: 58,
    position: "absolute",
  },
  eyeIconLayout: {
    height: 13,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  textTypo: {
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupPosition: {
    left: "7.95%",
    right: "6.41%",
    width: "85.64%",
    height: "8.41%",
    position: "absolute",
  },
  listboxbgShadowBox: {
    borderRadius: Border.br_5xs,
    elevation: 15,
    shadowRadius: 15,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
  },
  usdcTypo: {
    width: 61,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "right",
    color: Color.colorDimgray_600,
    position: "absolute",
  },
  text9Typo: {
    color: Color.colorGhostwhite_100,
    top: 29,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  text8Typo: {
    top: 49,
    color: Color.colorGhostwhite_100,
    textAlign: "right",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  ltvTypo: {
    color: Color.colorDimgray_500,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  text11Position: {
    top: 630,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  eaInputBox: {
    top: 431,
    left: 63,
    borderColor: Color.colorDarkgray_600,
    width: 161,
    height: 93,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
  },
  accountsHomeChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    height: 844,
  },
  availableToEarn: {
    top: 178,
    width: 201,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 25,
    position: "absolute",
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
    top: 31,
    width: 390,
    left: 0,
  },
  credit: {
    top: 291,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_300,
    left: 24,
  },
  accountsHomeItem: {
    top: "34.95%",
    right: "74.36%",
    bottom: "63.15%",
    left: "24.1%",
  },
  farm: {
    top: 514,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_300,
    left: 25,
  },
  image3Icon: {
    top: 141,
    left: 22,
    width: 32,
    height: 33,
    position: "absolute",
  },
  homeRowChild: {
    top: 0,
  },
  home: {
    top: 35,
  },
  homeFillIcon: {
    left: 0,
  },
  homeParent: {
    top: 19,
    height: 50,
    left: 24,
  },
  exchange: {
    color: Color.colorDimgray_600,
  },
  refresh2Icon: {
    left: 10,
  },
  exchangeParent: {
    left: 168,
    width: 55,
  },
  groupFillIcon: {
    left: 8,
  },
  business: {
    top: 34,
  },
  groupFillParent: {
    left: 246,
    width: 50,
    height: 49,
    top: 20,
    position: "absolute",
  },
  homeRow: {
    top: 757,
  },
  eaInputBox1: {
    height: 58,
    width: 164,
    position: "absolute",
  },
  deposit: {
    left: 56,
    color: Color.colorRoyalblue_100,
    height: 17,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 34,
    width: 53,
  },
  downloadIcon: {
    left: 70,
    top: 7,
  },
  eaInputBoxParent: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 208,
    left: 25,
  },
  eaInputBox2: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  downloadIcon1: {
    marginLeft: -12.5,
    top: 8,
    left: "50%",
  },
  withdraw: {
    left: 49,
    width: 70,
    color: Color.colorRoyalblue_100,
    height: 17,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 35,
  },
  eaInputBoxGroup: {
    left: 199,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 208,
  },
  seeTransactions: {
    top: 301,
    left: 238,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_sm,
  },
  eyeIcon: {
    left: 91,
    width: 13,
    top: 2,
  },
  text: {
    top: 18,
    fontSize: FontSize.size_9xl,
    color: Color.colorGray_400,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  groupChild: {
    height: "19.05%",
    width: "3.49%",
    top: "32.14%",
    bottom: "48.81%",
    left: "96.51%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  portfolioValue: {
    left: 1,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  text1: {
    left: 21,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  h: {
    left: 64,
    color: Color.colorDimgray_600,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  arrowDropUpIcon: {
    width: 24,
    height: 24,
    top: 2,
    left: 0,
    position: "absolute",
  },
  parent: {
    top: 58,
    left: 17,
    width: 88,
    height: 26,
    position: "absolute",
  },
  eyeParent: {
    top: 90,
    left: 27,
    width: 172,
    height: 84,
    position: "absolute",
  },
  listboxbg: {
    backgroundColor: Color.colorPaleturquoise,
  },
  usdc: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  text2: {
    left: 267,
    width: 45,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    top: 20,
    color: Color.colorDimgray_600,
  },
  text3: {
    left: 136,
    width: 83,
    textAlign: "right",
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    top: 0,
  },
  text4: {
    left: 219,
    width: 81,
    textAlign: "right",
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    top: 0,
  },
  usdcParent: {
    width: 312,
    height: 32,
    left: 13,
    top: 31,
    position: "absolute",
  },
  listboxbgParent: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  supplied: {
    left: 13,
    fontSize: FontSize.size_sm,
    top: 7,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupParent: {
    top: "39.1%",
    bottom: "52.49%",
  },
  listboxbg1: {
    backgroundColor: Color.colorPink,
  },
  text5: {
    left: 251,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    top: 20,
  },
  groupContainer: {
    top: "49.53%",
    bottom: "42.06%",
  },
  listboxbg2: {
    backgroundColor: Color.colorDarkslateblue_100,
  },
  positions: {
    width: 92,
    left: 13,
    textAlign: "left",
  },
  text8: {
    left: 258,
    width: 66,
    fontSize: FontSize.size_3xs,
  },
  pendle: {
    left: 55,
    fontSize: FontSize.size_5xs,
    width: 30,
  },
  text9: {
    left: 243,
    textAlign: "right",
    width: 70,
  },
  positions1: {
    color: Color.colorGhostwhite,
    left: 13,
    fontSize: FontSize.size_sm,
    top: 7,
    textAlign: "left",
    position: "absolute",
  },
  farmingCard: {
    top: "65.4%",
    bottom: "26.18%",
  },
  groupItem: {
    top: -1,
    left: -1,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    width: 330,
    height: 15,
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupInner: {
    top: 1,
    width: 255,
    height: 11,
    backgroundColor: Color.colorDarkslateblue_100,
    left: 1,
  },
  lineView: {
    left: 266,
    borderColor: Color.colorDarkgray_100,
    borderRightWidth: 1,
    width: 1,
    height: 14,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleParent: {
    top: 25,
    width: 328,
    left: 0,
  },
  capitalUtilization: {
    left: 0,
    top: 0,
  },
  text10: {
    left: 140,
    color: Color.colorDarkslateblue_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  capitalUtilizationParent: {
    width: 169,
    left: 0,
    top: 0,
  },
  ltv: {
    top: 44,
    left: 256,
  },
  lendingUtliization: {
    top: 669,
    left: 31,
    width: 329,
    height: 61,
    position: "absolute",
  },
  text11: {
    left: 313,
    textAlign: "right",
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  totalEarned: {
    left: 235,
    textAlign: "left",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  accountsHomeInner: {
    top: "61.37%",
    right: "75.9%",
    bottom: "36.73%",
    left: "22.56%",
  },
  accountsHome: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default AccountsHome;
