import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearProgress } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HOME1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeMain}>
      <View style={styles.homeMainChild} />
      <View style={styles.navbar}>
        <Image
          style={styles.yxldhnzg400x400RemovebgPrevIcon}
          contentFit="cover"
          source={require("../assets/yxldhnzg-400x400removebgpreview-91.png")}
        />
        <Image
          style={[styles.image1Icon, styles.image1IconLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.notificationsbuttonIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notificationsbutton.png")}
        />
        <Image
          style={[styles.image3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-33.png")}
        />
      </View>
      <View style={styles.homeMainItem} />
      <View style={styles.mainHomeComponent}>
        <View style={styles.lendingUtliizationParent}>
          <View style={[styles.lendingUtliization, styles.lendingPosition]}>
            <LinearProgress
              style={[styles.lendingUtliizationChild, styles.childPosition]}
              animation={true}
              value={0.25}
              variant="determinate"
              color="#2e91fb"
            />
            <View
              style={[
                styles.savingsCapitalizationParent,
                styles.portfolioParentPosition,
              ]}
            >
              <Text
                style={[styles.savingsCapitalization, styles.lendingHubTypo]}
              >{`Savings Capitalization `}</Text>
              <Text style={[styles.text, styles.textTypo1]}>25%</Text>
            </View>
          </View>
          <View style={[styles.lendingUtliization1, styles.lendingPosition]}>
            <LinearProgress
              style={[styles.lendingUtliizationItem, styles.childPosition]}
              animation={true}
              value={0.75}
              variant="determinate"
              color="#2e91fb"
            />
            <View
              style={[
                styles.lendingUtilizationParent,
                styles.portfolioParentPosition,
              ]}
            >
              <Text
                style={[styles.savingsCapitalization, styles.lendingHubTypo]}
              >
                Lending Utilization
              </Text>
              <Text style={[styles.text1, styles.textTypo1]}>75%</Text>
            </View>
          </View>
          <View style={[styles.farmingPortfolio, styles.portfolioLayout]}>
            <LinearProgress
              style={[styles.farmingPortfolioChild, styles.childPosition]}
              animation={true}
              value={0.75}
              variant="determinate"
              color="#2e91fb"
            />
            <View
              style={[
                styles.farmingPortfolioInner,
                styles.portfolioParentPosition,
              ]}
            >
              <View
                style={[
                  styles.farmingPortfolioParent,
                  styles.portfolioParentPosition,
                ]}
              >
                <Text
                  style={[styles.savingsCapitalization, styles.lendingHubTypo]}
                >
                  Farming Portfolio
                </Text>
                <Text style={[styles.text2, styles.textTypo1]}>$42.56</Text>
              </View>
            </View>
            <Text style={[styles.text3, styles.hTypo]}>4.11%</Text>
            <Text style={[styles.h, styles.hTypo]}>24H</Text>
            <Image
              style={styles.arrowDropUpIcon}
              contentFit="cover"
              source={require("../assets/arrow-drop-up3.png")}
            />
          </View>
          <View style={[styles.portfolioGains, styles.portfolioLayout]}>
            <LinearProgress
              style={[styles.farmingPortfolioChild, styles.childPosition]}
              animation={true}
              value={0.4}
              variant="determinate"
              color="#2e91fb"
            />
            <View
              style={[styles.portfolioParent, styles.portfolioParentPosition]}
            >
              <Text
                style={[styles.savingsCapitalization, styles.lendingHubTypo]}
              >
                Portfolio
              </Text>
              <Text style={[styles.text4, styles.textTypo1]}>$24.56</Text>
            </View>
            <Text style={[styles.net5Apy, styles.textTypo1]}>Net 5% APY</Text>
          </View>
        </View>
        <View style={[styles.buttonBar, styles.buttonBarLayout]}>
          <View style={[styles.eaInputBoxParent, styles.inputLayout1]}>
            <View style={[styles.eaInputBox, styles.inputLayout]} />
            <Image
              style={[styles.addRoundDuotoneLineIcon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/add-round-duotone-line1.png")}
            />
            <Text style={[styles.buy, styles.buyTypo]}>Buy</Text>
          </View>
          <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
            <View style={[styles.eaInputBox, styles.inputLayout]} />
            <Text style={[styles.buy, styles.buyTypo]}>Top Up</Text>
            <Image
              style={[styles.downloadIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/download2.png")}
            />
          </View>
          <View style={[styles.eaInputBoxContainer, styles.inputLayout1]}>
            <View style={[styles.eaInputBox, styles.inputLayout]} />
            <Text style={[styles.buy, styles.buyTypo]}>Borrow</Text>
            <Image
              style={[styles.lightningRingLightIcon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/lightning-ring-light1.png")}
            />
          </View>
          <Pressable
            style={[styles.framePressable, styles.inputLayout1]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "ExchangeHome" })
            }
          >
            <View style={[styles.eaInputBox, styles.inputLayout]} />
            <Image
              style={[styles.refresh2Icon1, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/refresh-231.png")}
            />
            <Text style={[styles.exchange1, styles.buyTypo]}>Exchange</Text>
          </Pressable>
        </View>
        <View style={styles.hubs}>
          <Pressable
            style={[styles.eaInputBoxParent1, styles.inputParentLayout]}
            onPress={() => navigation.navigate("Frame41")}
          >
            <View style={[styles.eaInputBox4, styles.inputLayout]} />
            <Text style={styles.availableToLend}>Available to lend</Text>
            <Image
              style={[styles.image2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
            <Text style={[styles.lendingHub, styles.lendingHubTypo]}>
              Lending Hub
            </Text>
            <Text style={[styles.text5, styles.textTypo]}>$23,000.06</Text>
            <Image
              style={[styles.frameChild, styles.image1IconLayout]}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.eaInputBoxParent2, styles.inputParentLayout]}
            onPress={() => navigation.navigate("Frame81")}
          >
            <View style={[styles.eaInputBox4, styles.inputLayout]} />
            <Text style={styles.availableToLend}>Interest Earned</Text>
            <Text style={[styles.lendingHub, styles.lendingHubTypo]}>
              Savings Hub
            </Text>
            <Text style={[styles.text6, styles.textTypo]}>$11,524.06</Text>
            <Image
              style={[styles.image2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/image-3.png")}
            />
            <Image
              style={[styles.frameChild, styles.image1IconLayout]}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </Pressable>
        </View>
        <GroupComponent
          prop="$33,524.12"
          portfolioBalance="Wallet Balance"
          arrowDropUp={require("../assets/arrow-drop-up2.png")}
          propTop={0}
          propLeft={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout: {
    width: "11.31%",
    maxHeight: "100%",
    bottom: "14.52%",
    top: "14.52%",
    height: "70.97%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homebuttonFlexBox: {
    justifyContent: "center",
    height: "57.47%",
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  farmsbuttonPosition: {
    bottom: "18.39%",
    top: "24.14%",
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
  businessbuttonLayout: {
    width: 50,
    justifyContent: "center",
    left: "50%",
    height: "57.47%",
    alignItems: "center",
    position: "absolute",
  },
  lendingPosition: {
    right: "0.12%",
    width: "99.27%",
    height: "15.3%",
    left: "0.6%",
    position: "absolute",
  },
  childPosition: {
    height: 13,
    top: 25,
    position: "absolute",
  },
  portfolioParentPosition: {
    height: 17,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lendingHubTypo: {
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  portfolioLayout: {
    width: "99.4%",
    position: "absolute",
  },
  hTypo: {
    top: 43,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  buttonBarLayout: {
    height: 58,
    right: "0%",
  },
  inputLayout1: {
    width: "22.41%",
    height: 58,
    top: 0,
    position: "absolute",
  },
  inputLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconPosition1: {
    marginLeft: -12,
    left: "50%",
  },
  buyTypo: {
    color: Color.colorRoyalblue_100,
    top: 34,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 17,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    width: 25,
    top: 7,
    position: "absolute",
  },
  iconPosition2: {
    left: "50%",
    position: "absolute",
  },
  inputParentLayout: {
    width: "46.49%",
    height: 91,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    top: 36,
    left: 8,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  homeMainChild: {
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    width: "14.91%",
    right: "42.67%",
    left: "42.42%",
    overflow: "hidden",
    maxWidth: "100%",
    height: 62,
    top: 0,
    position: "absolute",
  },
  image1Icon: {
    width: "12.34%",
    right: "87.66%",
    left: "0%",
    bottom: "14.52%",
    top: "14.52%",
    height: "70.97%",
    maxHeight: "100%",
  },
  notificationsbuttonIcon: {
    left: "88.69%",
    right: "0%",
  },
  image3Icon: {
    right: "13.88%",
    left: "74.81%",
  },
  navbar: {
    width: 389,
    height: 62,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeMainItem: {
    top: 153,
    left: 38,
    width: 60,
    height: 15,
    position: "absolute",
  },
  lendingUtliizationChild: {
    width: 328,
    left: 0,
  },
  savingsCapitalization: {
    textAlign: "left",
    left: 0,
    top: 0,
  },
  text: {
    left: 163,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  savingsCapitalizationParent: {
    width: 192,
  },
  lendingUtliization: {
    top: "77.58%",
    bottom: "7.12%",
    left: "0.6%",
  },
  lendingUtliizationItem: {
    width: "99.82%",
    right: "0.18%",
    left: "0%",
  },
  text1: {
    left: 140,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  lendingUtilizationParent: {
    width: 169,
  },
  lendingUtliization1: {
    top: "55.52%",
    bottom: "29.18%",
    left: "0.6%",
  },
  farmingPortfolioChild: {
    width: "99.7%",
    right: "0.3%",
    left: "0%",
  },
  text2: {
    left: 124,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  farmingPortfolioParent: {
    width: 173,
  },
  farmingPortfolioInner: {
    width: 329,
  },
  text3: {
    left: 17,
    textAlign: "right",
    color: Color.colorSeagreen,
  },
  h: {
    left: 51,
    textAlign: "left",
    color: Color.colorDimgray_600,
  },
  arrowDropUpIcon: {
    top: 47,
    left: -1,
    width: 18,
    height: 18,
    position: "absolute",
  },
  farmingPortfolio: {
    height: "23.13%",
    top: "28.11%",
    bottom: "48.75%",
    left: "0.6%",
    right: "0%",
  },
  text4: {
    left: 65,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  portfolioParent: {
    width: 113,
  },
  net5Apy: {
    top: 42,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 0,
  },
  portfolioGains: {
    height: "21.35%",
    top: "0%",
    right: "0.6%",
    bottom: "78.65%",
    left: "0%",
  },
  lendingUtliizationParent: {
    width: "93.24%",
    top: 326,
    right: "2.54%",
    left: "4.23%",
    height: 281,
    position: "absolute",
  },
  eaInputBox: {
    backgroundColor: Color.colorGhostwhite,
    height: 58,
    right: "0%",
    left: "0%",
    top: 0,
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  addRoundDuotoneLineIcon: {
    top: 6,
    width: 24,
    height: 24,
    position: "absolute",
  },
  buy: {
    marginLeft: -26,
    width: 53,
  },
  eaInputBoxParent: {
    right: "77.59%",
    left: "0%",
  },
  downloadIcon: {
    height: 22,
    marginLeft: -12,
    left: "50%",
  },
  eaInputBoxGroup: {
    right: "52.3%",
    left: "25.29%",
  },
  lightningRingLightIcon: {
    marginLeft: -15,
    top: 4,
    width: 30,
    height: 30,
  },
  eaInputBoxContainer: {
    right: "27.01%",
    left: "50.57%",
  },
  refresh2Icon1: {
    marginLeft: -10,
    top: 8,
    width: 21,
    height: 21,
  },
  exchange1: {
    marginLeft: -31,
    width: 63,
  },
  framePressable: {
    right: "1.72%",
    left: "75.86%",
  },
  buttonBar: {
    width: "98.03%",
    top: 106,
    left: "1.97%",
    height: 58,
    position: "absolute",
  },
  eaInputBox4: {
    width: "101.26%",
    top: -1,
    right: "-0.63%",
    left: "-0.63%",
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    height: 93,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  availableToLend: {
    top: 66,
    color: Color.colorDimgray_400,
    left: 8,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  image2Icon: {
    left: 7,
    height: 26,
  },
  lendingHub: {
    top: 11,
    left: 32,
    textAlign: "left",
  },
  text5: {
    color: Color.colorDodgerblue_100,
  },
  frameChild: {
    height: "10.99%",
    width: "2.52%",
    top: "16.48%",
    right: "10.69%",
    bottom: "72.53%",
    left: "86.79%",
  },
  eaInputBoxParent1: {
    right: "53.51%",
    left: "0%",
  },
  text6: {
    color: Color.colorSeagreen,
  },
  eaInputBoxParent2: {
    left: "53.51%",
    right: "0%",
  },
  hubs: {
    width: "96.34%",
    top: 202,
    right: "1.69%",
    height: 91,
    left: "1.97%",
    position: "absolute",
  },
  mainHomeComponent: {
    width: "91.03%",
    top: 118,
    right: "4.62%",
    left: "4.36%",
    height: 607,
    position: "absolute",
  },
  homeMain: {
    backgroundColor: "#1e1e1e",
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default HOME1;
