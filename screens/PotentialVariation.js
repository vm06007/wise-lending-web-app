import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import HOMEROW2 from "../components/HOMEROW2";
import GroupComponent from "../components/GroupComponent";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PotentialVariation = () => {
  return (
    <View style={styles.potentialVariation}>
      <View
        style={[
          styles.potentialVariationChild,
          styles.potentialVariationChildLayout,
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
        groupFill={require("../assets/group-fill2.png")}
      />
      <GroupComponent
        prop="$21,524.12"
        portfolioBalance="Wallet Balance"
        arrowDropUp={require("../assets/arrow-drop-up2.png")}
        propTop={110}
        propLeft={20}
      />
      <View style={styles.groupParent}>
        <View style={styles.viewAllUpcomingPayoutsParent}>
          <Text
            style={[styles.viewAllUpcoming, styles.viewAllUpcomingLayout]}
          >{`View all upcoming payouts `}</Text>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
        <View style={styles.payoutTileParent}>
          <View style={styles.payoutTile}>
            <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
            <View style={[styles.groupContainer, styles.frameViewPosition]}>
              <View style={styles.groupChildLayout}>
                <Image
                  style={[styles.groupChild, styles.groupPosition]}
                  contentFit="cover"
                  source={require("../assets/rectangle-302.png")}
                />
                <Text style={[styles.loanAmount, styles.loanAmountTypo]}>
                  Loan Amount
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>$21,524.12</Text>
            </View>
          </View>
          <View style={styles.listboxbgParent}>
            <View style={[styles.listboxbg1, styles.listboxbgShadowBox]} />
            <View style={[styles.frameView, styles.frameViewPosition]}>
              <View style={styles.groupLayout}>
                <Image
                  style={[styles.groupItem, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-304.png")}
                />
                <Text style={[styles.totalToRepay, styles.loanAmountTypo]}>
                  Total to Repay
                </Text>
              </View>
              <Text style={[styles.text1, styles.textTypo]}>$40,524.12</Text>
            </View>
          </View>
        </View>
        <Text style={styles.wiseLending}>Wise Lending</Text>
      </View>
      <View
        style={[styles.applyForNewFinancingParent, styles.nextPaymentPosition]}
      >
        <Text style={styles.applyForNew}>Apply for new financing</Text>
        <Image
          style={[styles.arrowIcon1, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow2.png")}
        />
      </View>
      <View style={[styles.groupParent1, styles.frameChildLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/group-8669.png")}
        />
        <View
          style={[styles.withdrawn2152412Parent, styles.viewAllUpcomingLayout]}
        >
          <Text style={[styles.withdrawn2152412, styles.viewAllUpcomingLayout]}>
            Withdrawn: $21,524.12
          </Text>
          <Text style={[styles.text2, styles.text2Typo]}>$40,524.12</Text>
          <View style={[styles.vectorContainer, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-305.png")}
            />
            <Text style={[styles.totalToRepay, styles.loanAmountTypo]}>
              Available Amount
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.nextPayment, styles.nextPaymentPosition]}>
        Next Payment
      </Text>
      <View style={[styles.groupView, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-305.png")}
        />
        <Text style={[styles.totalToRepay, styles.loanAmountTypo]}>
          May 31, 2024
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  potentialVariationChildLayout: {
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
  viewAllUpcomingLayout: {
    width: 188,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 10,
    width: 12,
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
  frameViewPosition: {
    left: "50%",
    top: 9,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  loanAmountTypo: {
    left: 2,
    top: 4,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  textTypo: {
    marginTop: 10,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  groupLayout: {
    width: 113,
    height: 23,
  },
  nextPaymentPosition: {
    left: 26,
    position: "absolute",
  },
  frameChildLayout: {
    height: 236,
    width: 236,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  potentialVariationChild: {
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
  viewAllUpcoming: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    width: 188,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 21,
    left: 0,
    top: 0,
  },
  arrowIcon: {
    top: 6,
    left: 188,
  },
  viewAllUpcomingPayoutsParent: {
    top: 172,
    left: 70,
    width: 200,
    height: 21,
    position: "absolute",
  },
  listboxbg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
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
  groupChild: {
    height: 23,
    width: 102,
  },
  loanAmount: {
    color: Color.colorRed,
    fontSize: FontSize.size_xs,
    width: 99,
  },
  groupChildLayout: {
    height: 23,
    width: 102,
  },
  text: {
    color: Color.colorRed,
  },
  groupContainer: {
    marginLeft: -50.5,
  },
  payoutTile: {
    width: 149,
    height: 100,
  },
  listboxbg1: {
    width: 150,
    height: 100,
    left: 0,
    top: 0,
  },
  groupItem: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  totalToRepay: {
    width: 110,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_xs,
  },
  text1: {
    color: Color.colorSeagreen,
  },
  frameView: {
    marginLeft: -56,
  },
  listboxbgParent: {
    marginLeft: 25,
    width: 150,
    height: 100,
  },
  payoutTileParent: {
    top: 46,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  wiseLending: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    width: 219,
    height: 28,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: 220,
    left: 24,
    width: 324,
    height: 193,
    position: "absolute",
  },
  applyForNew: {
    width: 138,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 21,
    left: 0,
    top: 0,
    position: "absolute",
  },
  arrowIcon1: {
    top: 3,
    left: 138,
  },
  applyForNewFinancingParent: {
    top: 730,
    width: 150,
    height: 21,
  },
  frameChild: {
    left: 0,
    top: 0,
  },
  withdrawn2152412: {
    top: 57,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    width: 188,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    height: 21,
    left: 0,
  },
  text2: {
    top: 23,
    left: 19,
    fontSize: FontSize.size_9xl,
    color: Color.colorSeagreen,
    textAlign: "left",
    position: "absolute",
  },
  vectorContainer: {
    left: 40,
    top: 0,
    position: "absolute",
  },
  withdrawn2152412Parent: {
    top: 79,
    left: 21,
    height: 78,
  },
  groupParent1: {
    top: 442,
    left: 75,
  },
  nextPayment: {
    top: 708,
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  groupView: {
    top: 700,
    left: 253,
    position: "absolute",
  },
  potentialVariation: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default PotentialVariation;
