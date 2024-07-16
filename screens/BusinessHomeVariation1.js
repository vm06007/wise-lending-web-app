import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import HOMEROW2 from "../components/HOMEROW2";
import GroupComponent from "../components/GroupComponent";
import PayoutTile from "../components/PayoutTile";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const BusinessHomeVariation1 = () => {
  return (
    <View style={styles.businessHomeVariation}>
      <View
        style={[
          styles.businessHomeVariationChild,
          styles.businessHomeVariationChildLayout,
        ]}
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
      <HOMEROW2
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFill={require("../assets/home-fill2.png")}
        groupFill={require("../assets/group-fill5.png")}
      />
      <View style={styles.listboxbgParent}>
        <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
        <Text style={styles.transactionHistory}>Transaction History</Text>
        <View
          style={[styles.mexcTransactionFeesParent, styles.feesParentPosition]}
        >
          <Text style={[styles.mexcTransaction, styles.textTypo]}>
            MEXC - Transaction Fees
          </Text>
          <Text style={[styles.text, styles.textTypo]}>$ 23,000.00</Text>
        </View>
        <View style={[styles.wiseLendingFeesParent, styles.feesParentPosition]}>
          <Text style={[styles.mexcTransaction, styles.textTypo]}>
            WISE - Lending Fees
          </Text>
          <Text style={[styles.text, styles.textTypo]}>$ 46,000.00</Text>
        </View>
      </View>
      <GroupComponent
        prop="$21,524.12"
        portfolioBalance="Business Balance"
        arrowDropUp={require("../assets/arrow-drop-up2.png")}
        propTop={110}
        propLeft={20}
      />
      <View style={styles.businessHomeVariationItem} />
      <View style={styles.viewFullTransactionHistoryParent}>
        <Text style={[styles.viewFullTransaction, styles.viewTypo]}>
          View full transaction history
        </Text>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-8630.png")}
        />
        <View style={[styles.mParent, styles.parentFlexBox]}>
          <Text style={[styles.m, styles.mFlexBox]}>1M</Text>
          <Text style={[styles.m1, styles.mFlexBox]}>3M</Text>
          <Text style={[styles.m1, styles.mFlexBox]}>6M</Text>
          <Text style={[styles.m1, styles.mFlexBox]}>1Y</Text>
          <Text style={[styles.m1, styles.mFlexBox]}>ALL</Text>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.viewAllUpcomingPayoutsParent, styles.viewLayout]}>
          <Text
            style={[styles.viewAllUpcoming, styles.viewLayout]}
          >{`View all upcoming payouts `}</Text>
          <Image
            style={styles.arrowIcon1}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
        <View style={[styles.payoutTileParent, styles.parentFlexBox]}>
          <PayoutTile rectangle30={require("../assets/rectangle-303.png")} />
          <View style={[styles.payoutTile, styles.listboxbgLayout]}>
            <View style={[styles.listboxbg1, styles.listboxbgLayout]} />
            <View style={styles.automatedDepositParent}>
              <Text style={styles.automatedDeposit}>Automated Deposit</Text>
              <Text style={styles.text2}>$40,524.12</Text>
              <View style={[styles.vectorParent, styles.groupItemLayout]}>
                <Image
                  style={[styles.groupItem, styles.groupItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-3021.png")}
                />
                <Text style={[styles.days, styles.daysTypo]}>• 6 Days</Text>
              </View>
            </View>
          </View>
          <View style={[styles.payoutTile, styles.listboxbgLayout]}>
            <View style={[styles.listboxbg2, styles.listboxbgLayout]} />
            <View style={styles.automatedDepositParent}>
              <Text style={styles.automatedDeposit}>Automated Deposit</Text>
              <Text style={styles.text2}>$40,524.12</Text>
              <View style={styles.vectorGroup}>
                <Image
                  style={[styles.groupItem, styles.groupItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-3021.png")}
                />
                <Text style={[styles.days1, styles.daysTypo]}>• 32 Days</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.paymentSchedule}>Payment Schedule</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  businessHomeVariationChildLayout: {
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
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  feesParentPosition: {
    right: "5.99%",
    width: "89.82%",
    height: "13.6%",
    left: "4.19%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    top: "0%",
    position: "absolute",
  },
  viewTypo: {
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  groupPosition: {
    width: 461,
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  mFlexBox: {
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  viewLayout: {
    height: 21,
    position: "absolute",
  },
  listboxbgLayout: {
    height: 100,
    width: 131,
  },
  groupItemLayout: {
    width: 66,
    height: 23,
  },
  daysTypo: {
    width: 64,
    top: 4,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  businessHomeVariationChild: {
    backgroundColor: Color.colorWhite,
    width: 390,
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
  listboxbg: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  transactionHistory: {
    top: 13,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: "4.19%",
    position: "absolute",
  },
  mexcTransaction: {
    width: "60.33%",
    textAlign: "left",
    left: "0%",
  },
  text: {
    width: "36%",
    left: "64%",
    textAlign: "right",
  },
  mexcTransactionFeesParent: {
    top: "36%",
    bottom: "50.4%",
  },
  wiseLendingFeesParent: {
    top: "65.6%",
    bottom: "20.8%",
  },
  listboxbgParent: {
    height: "14.81%",
    width: "85.64%",
    top: "67.65%",
    right: "7.18%",
    bottom: "17.54%",
    left: "7.18%",
    position: "absolute",
  },
  businessHomeVariationItem: {
    top: 706,
    left: 144,
    width: 108,
    height: 18,
    position: "absolute",
  },
  viewFullTransaction: {
    width: "91.12%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  arrowIcon: {
    height: "50%",
    width: "6.54%",
    top: "27.78%",
    bottom: "22.22%",
    left: "93.46%",
    maxWidth: "100%",
    maxHeight: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  viewFullTransactionHistoryParent: {
    height: "2.13%",
    width: "54.87%",
    top: "85.19%",
    right: "22.56%",
    bottom: "12.68%",
    left: "22.56%",
    position: "absolute",
  },
  groupChild: {
    height: 83,
    top: 0,
  },
  m: {
    width: 19,
  },
  m1: {
    width: 32,
    marginLeft: 20,
  },
  mParent: {
    top: 92,
    left: 81,
  },
  groupParent: {
    top: 438,
    height: 123,
  },
  viewAllUpcoming: {
    width: 188,
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  arrowIcon1: {
    top: 6,
    left: 188,
    width: 12,
    height: 10,
    position: "absolute",
  },
  viewAllUpcomingPayoutsParent: {
    top: 172,
    left: 70,
    width: 200,
  },
  listboxbg1: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    left: 0,
    top: 0,
  },
  automatedDeposit: {
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text2: {
    marginTop: 10,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupItem: {
    borderRadius: Border.br_81xl,
    height: 23,
    left: 0,
    top: 0,
    position: "absolute",
  },
  days: {
    left: 1,
  },
  vectorParent: {
    height: 23,
    marginTop: 10,
  },
  automatedDepositParent: {
    left: 10,
    top: 9,
    position: "absolute",
  },
  payoutTile: {
    marginLeft: 20,
  },
  listboxbg2: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    left: 0,
    top: 0,
  },
  days1: {
    left: 5,
  },
  vectorGroup: {
    width: 69,
    height: 23,
    marginTop: 10,
  },
  payoutTileParent: {
    top: 46,
    height: 116,
    left: 0,
  },
  paymentSchedule: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 220,
    height: 28,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    top: 220,
    left: 24,
    width: 431,
    height: 193,
    position: "absolute",
  },
  businessHomeVariation: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default BusinessHomeVariation1;
