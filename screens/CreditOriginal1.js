import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent1 from "../components/GroupComponent1";
import PositionSupply from "../components/PositionSupply";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreditOriginal11 = () => {
  return (
    <View style={styles.creditOriginal}>
      <View style={styles.eaInputBox} />
      <View style={[styles.creditOriginalChild, styles.navbarLayout1]} />
      <Text style={styles.availableToEarn}>Available to earn interest</Text>
      <View style={styles.eaInputBoxParent}>
        <View style={styles.eaInputBox1} />
        <Text style={[styles.supply, styles.supplyLayout]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconPosition]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <FrameComponent4
        showFrameView
        propLeft="58.97%"
        propWidth="34.87%"
        propRight="6.15%"
      />
      <View style={[styles.navbar, styles.navbarLayout]}>
        <Image
          style={[styles.yxldhnzg400x400RemovebgPrevIcon, styles.navbarLayout]}
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
        <View style={styles.navbarChild} />
        <View style={styles.navbarItem} />
      </View>
      <Text style={[styles.positions, styles.creditClr]}>Positions</Text>
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-3901.png")}
        />
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.exchange, styles.farmsTypo]}>Exchange</Text>
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
            source={require("../assets/group-fill.png")}
          />
          <Text style={[styles.business, styles.supplyTypo]}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.exchange, styles.farmsTypo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <GroupComponent1
        prop="$23,000.06"
        vector11={require("../assets/vector-114.png")}
        creditBalance="Credit Balance"
        propTop={106}
        propLeft={25}
      />
      <View style={[styles.eaInputBoxGroup, styles.inputShadowBox]}>
        <View style={styles.eaInputBox1} />
        <Text style={[styles.deposit, styles.supplyLayout]}>Deposit</Text>
        <Image
          style={[styles.downloadIcon1, styles.downloadIconPosition]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
      </View>
      <View style={[styles.eaInputBoxContainer, styles.inputShadowBox]}>
        <View style={styles.eaInputBox1} />
        <Text style={[styles.transfer, styles.homePosition]}>Transfer</Text>
        <Image
          style={styles.twoWayArrowIcon}
          contentFit="cover"
          source={require("../assets/twoway-arrow.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.listboxbgParent, styles.parentLayout]}>
          <View style={styles.listboxbgPosition} />
          <View style={styles.placeholderText}>
            <Text style={[styles.selectAsset, styles.textTypo]}>
              Select Asset
            </Text>
          </View>
          <Image
            style={styles.chevronIcon}
            contentFit="cover"
            source={require("../assets/chevron11.png")}
          />
        </View>
        <View style={styles.listboxMain}>
          <View style={styles.listboxbgPosition} />
          <Text style={[styles.text, styles.textTypo]}>$ 0.00</Text>
        </View>
      </View>
      <View style={styles.creditParent}>
        <Text style={[styles.credit, styles.creditClr]}>Credit</Text>
        <Text style={[styles.seeTransactions, styles.creditClr]}>
          See Transactions
        </Text>
      </View>
      <PositionSupply
        eTH="ETH"
        prop="4.20%"
        prop1="$ 6900.69"
        supplied="Supplied"
        propTop="61.97%"
        propBottom="29.62%"
      />
      <PositionSupply
        eTH="USDC"
        prop="-6.90%"
        prop1="$ 1900.42"
        supplied="Borrowed"
        propTop="73.93%"
        propBottom="17.65%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarLayout1: {
    width: 390,
    left: 0,
  },
  supplyLayout: {
    height: 17,
    width: 53,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
  },
  downloadIconPosition: {
    height: 22,
    top: 7,
    width: 25,
    left: "50%",
    position: "absolute",
  },
  navbarLayout: {
    height: 62,
    position: "absolute",
  },
  iconPosition: {
    height: 44,
    top: 9,
    position: "absolute",
  },
  creditClr: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 33,
    position: "absolute",
  },
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homePosition: {
    top: 35,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
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
    borderColor: Color.colorDarkslateblue_100,
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
    borderColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  farmsTypo: {
    top: 33,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  supplyTypo: {
    textAlign: "center",
    top: 34,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  inputShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 208,
    height: 58,
    position: "absolute",
  },
  parentLayout: {
    height: 60,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  eaInputBox: {
    top: 431,
    left: 63,
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    width: 161,
    height: 93,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  creditOriginalChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
    width: 390,
    position: "absolute",
    height: 844,
  },
  availableToEarn: {
    top: 167,
    color: Color.colorDimgray_400,
    width: 201,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 25,
    position: "absolute",
  },
  eaInputBox1: {
    backgroundColor: Color.colorGhostwhite,
    right: "0%",
    left: "0%",
    height: 58,
    top: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  supply: {
    marginLeft: -28.5,
    textAlign: "center",
    top: 34,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  downloadIcon: {
    marginLeft: -14.5,
  },
  eaInputBoxParent: {
    width: "51.54%",
    top: 406,
    right: "42.82%",
    height: 58,
    left: "5.64%",
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
  navbarChild: {
    width: 36,
    height: 47,
  },
  navbarItem: {
    width: 38,
    height: 43,
  },
  navbar: {
    top: 31,
    width: 390,
    left: 0,
  },
  positions: {
    top: 490,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 25,
  },
  image3Icon: {
    top: 130,
    left: 22,
    width: 32,
  },
  homeRowChild: {
    top: 0,
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
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
  },
  groupFillParent: {
    top: 20,
    left: 246,
    width: 50,
    height: 49,
    position: "absolute",
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
  deposit: {
    marginLeft: -26,
    textAlign: "center",
    top: 34,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  downloadIcon1: {
    marginLeft: -12,
  },
  eaInputBoxGroup: {
    width: "42.05%",
    right: "51.54%",
    left: "6.41%",
  },
  transfer: {
    marginLeft: -26.5,
    height: 17,
    width: 53,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
  },
  twoWayArrowIcon: {
    marginLeft: -10.5,
    top: 11,
    height: 18,
    width: 25,
    left: "50%",
    position: "absolute",
  },
  eaInputBoxContainer: {
    width: "42.82%",
    left: "51.03%",
    right: "6.15%",
  },
  listboxbgPosition: {
    borderRadius: Border.br_5xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  selectAsset: {
    top: "0%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: "0%",
    textAlign: "left",
  },
  placeholderText: {
    height: "33.33%",
    width: "65.72%",
    right: "28.56%",
    bottom: "33.33%",
    left: "5.72%",
    top: "33.33%",
    position: "absolute",
  },
  chevronIcon: {
    height: "8.33%",
    width: "6.92%",
    top: "46.67%",
    right: "10.9%",
    bottom: "45%",
    left: "82.19%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.8,
    position: "absolute",
  },
  listboxbgParent: {
    width: "58.43%",
    right: "41.57%",
    left: "0%",
    top: 0,
  },
  text: {
    width: "83.82%",
    left: "11.03%",
    textAlign: "right",
    top: "33.33%",
  },
  listboxMain: {
    width: "39.53%",
    left: "60.47%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  frameParent: {
    width: "88.21%",
    top: 330,
    right: "6.15%",
    left: "5.64%",
    height: 60,
  },
  credit: {
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "0%",
    top: 0,
  },
  seeTransactions: {
    top: 10,
    left: "64.46%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  creditParent: {
    width: "85.13%",
    top: 291,
    right: "8.72%",
    left: "6.15%",
    height: 27,
    position: "absolute",
  },
  creditOriginal: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default CreditOriginal11;
