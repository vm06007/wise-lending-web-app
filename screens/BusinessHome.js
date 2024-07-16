import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import HOMEROW2 from "../components/HOMEROW2";
import GroupComponent from "../components/GroupComponent";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const BusinessHome = () => {
  return (
    <View style={styles.businessHome}>
      <View
        style={[styles.businessHomeChild, styles.businessHomeChildLayout]}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
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
      <HOMEROW2
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFill={require("../assets/home-fill.png")}
        groupFill={require("../assets/group-fill5.png")}
      />
      <View style={[styles.listboxbgParent, styles.listboxbgParentPosition]}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={[styles.transactionHistory, styles.payoutsTypo]}>
          Transaction History
        </Text>
        <View
          style={[styles.mexcTransactionFeesParent, styles.feesParentLayout]}
        >
          <Text style={[styles.mexcTransaction, styles.viewTypo]}>
            MEXC - Transaction Fees
          </Text>
          <Text style={[styles.text, styles.textTypo]}>$ 23,000.00</Text>
        </View>
        <View style={[styles.wiseLendingFeesParent, styles.feesParentLayout]}>
          <Text style={[styles.mexcTransaction, styles.viewTypo]}>
            WISE - Lending Fees
          </Text>
          <Text style={[styles.text, styles.textTypo]}>$ 46,000.00</Text>
        </View>
      </View>
      <View style={[styles.businessHomeInner, styles.listboxbgParentPosition]}>
        <View style={styles.listboxbgGroup}>
          <View style={styles.listboxbgShadowBox} />
          <Text style={[styles.payouts, styles.payoutsTypo]}>Payouts</Text>
          <View
            style={[styles.mikeWazowskiParent, styles.frameWrapperPosition]}
          >
            <Text style={[styles.mikeWazowski, styles.viewTypo]}>
              Mike Wazowski
            </Text>
            <Text style={[styles.text2, styles.textTypo]}>03/04/2024</Text>
            <Text style={[styles.text3, styles.textTypo]}>$ 6900.69</Text>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <View style={styles.donaldDuckParent}>
              <Text style={[styles.mikeWazowski, styles.viewTypo]}>
                Donald Duck
              </Text>
              <Text style={[styles.text2, styles.textTypo]}>02/03/2024</Text>
              <Text style={[styles.text3, styles.textTypo]}>$ 2324.21</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mikeOxmaulParent}>
        <Text style={[styles.mikeWazowski, styles.viewTypo]}>Mike Oxmaul</Text>
        <Text style={[styles.text2, styles.textTypo]}>03/03/2024</Text>
        <Text style={[styles.text3, styles.textTypo]}>$ 1700.00</Text>
      </View>
      <GroupComponent
        prop="$21,524.12"
        portfolioBalance="Business Balance"
        arrowDropUp={require("../assets/arrow-drop-up2.png")}
        propTop={110}
        propLeft={20}
      />
      <View style={[styles.businessHomeItem, styles.viewParentLayout]} />
      <View
        style={[
          styles.viewFullTransactionHistoryParent,
          styles.viewParentLayout,
        ]}
      >
        <Text
          style={[styles.viewFullTransaction, styles.viewParentLayout]}
        >{`View Full Transaction History `}</Text>
        <Image
          style={[styles.arrowIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </View>
      <View
        style={[styles.viewPastUpcomingPayoutsParent, styles.viewParentLayout]}
      >
        <Text
          style={[styles.viewPast, styles.viewParentLayout]}
        >{`View Past & Upcoming Payouts `}</Text>
        <Image
          style={[styles.arrowIcon1, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  businessHomeChildLayout: {
    width: 390,
    left: 0,
  },
  frameLayout: {
    borderRadius: Border.br_81xl,
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
    height: 44,
    top: 9,
    position: "absolute",
  },
  listboxbgParentPosition: {
    left: "7.18%",
    right: "7.18%",
    width: "85.64%",
    position: "absolute",
  },
  payoutsTypo: {
    color: Color.colorDimgray_300,
    left: 14,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  feesParentLayout: {
    height: 17,
    left: 14,
    width: 300,
    position: "absolute",
  },
  viewTypo: {
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  frameWrapperPosition: {
    left: 13,
    flexDirection: "row",
    position: "absolute",
  },
  viewParentLayout: {
    height: 18,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 9,
    width: 14,
    top: 5,
    position: "absolute",
  },
  businessHomeChild: {
    backgroundColor: Color.colorWhite,
    width: 390,
    top: 0,
    position: "absolute",
    height: 844,
  },
  frameChild: {
    top: -1,
    left: -1,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_500,
    borderWidth: 1,
    width: 302,
    height: 33,
  },
  frameItem: {
    top: 1,
    left: 149,
    width: 150,
    height: 29,
  },
  forPayees: {
    left: 187,
    color: Color.colorWhite,
    textAlign: "center",
  },
  forPayers: {
    left: 40,
    color: Color.colorDarkgray_400,
    textAlign: "center",
  },
  rectangleParent: {
    top: 225,
    left: 48,
    height: 31,
    width: 300,
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
    top: 33,
    width: 390,
    left: 0,
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
  transactionHistory: {
    top: 13,
    textAlign: "left",
  },
  mexcTransaction: {
    width: 181,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 192,
    width: 108,
    top: 0,
    position: "absolute",
  },
  mexcTransactionFeesParent: {
    top: 45,
  },
  wiseLendingFeesParent: {
    top: 82,
  },
  listboxbgParent: {
    height: "14.81%",
    top: "63.98%",
    bottom: "21.21%",
  },
  payouts: {
    top: 14,
    textAlign: "left",
  },
  mikeWazowski: {
    width: 136,
    textAlign: "left",
  },
  text2: {
    width: 83,
  },
  text3: {
    width: 81,
  },
  mikeWazowskiParent: {
    top: 46,
    flexDirection: "row",
  },
  donaldDuckParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    top: 119,
    flexDirection: "row",
  },
  listboxbgGroup: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  businessHomeInner: {
    height: "19.43%",
    top: "35.9%",
    bottom: "44.67%",
  },
  mikeOxmaulParent: {
    top: 385,
    left: 41,
    flexDirection: "row",
    position: "absolute",
  },
  businessHomeItem: {
    top: 706,
    left: 144,
    width: 108,
  },
  viewFullTransaction: {
    width: 195,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: 0,
    top: 0,
  },
  arrowIcon: {
    left: 200,
  },
  viewFullTransactionHistoryParent: {
    top: 688,
    left: 88,
    width: 214,
  },
  viewPast: {
    width: 212,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: 0,
    top: 0,
  },
  arrowIcon1: {
    left: 212,
  },
  viewPastUpcomingPayoutsParent: {
    top: 492,
    left: 76,
    width: 226,
  },
  businessHome: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default BusinessHome;
