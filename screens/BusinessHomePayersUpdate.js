import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import GroupComponent from "../components/GroupComponent";
import HOMEROW from "../components/HOMEROW";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const BusinessHomePayersUpdate = () => {
  return (
    <View style={styles.businessHomePayersUpdate}>
      <View
        style={[
          styles.businessHomePayersUpdateChild,
          styles.businessHomePayersUpdateChildLayout,
        ]}
      />
      <GroupComponent
        prop="$21,524.12"
        portfolioBalance="Business Balance"
        arrowDropUp={require("../assets/arrow-drop-up2.png")}
        propTop={110}
        propLeft={20}
      />
      <View style={[styles.eaInputBoxParent, styles.inputLayout1]}>
        <Image
          style={[styles.eaInputBox, styles.inputLayout1]}
          contentFit="cover"
          source={require("../assets/ea-input-box1.png")}
        />
        <Text style={styles.updateContract}>Update Contract</Text>
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
        <Image
          style={[styles.eaInputBox, styles.inputLayout1]}
          contentFit="cover"
          source={require("../assets/ea-input-box1.png")}
        />
        <Text style={styles.updateContract}>Cancel Contract</Text>
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
        <View style={styles.frameChild} />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Text style={[styles.forPayers, styles.forTypo]}>For Payers</Text>
        <Text style={[styles.forPayees, styles.forTypo]}>For Payees</Text>
      </View>
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill3.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-23.png")}
        groupFillIconGroupFill={require("../assets/group-fill4.png")}
      />
      <View style={styles.listboxbgParent}>
        <View style={[styles.listboxbg, styles.listboxbgBg]} />
        <Text style={[styles.wiseSoftLlc, styles.monthly1FlexBox]}>
          Wise Soft LLC.
        </Text>
        <Text style={[styles.salK, styles.salKTypo]}>Sal K</Text>
        <Text style={[styles.monthly, styles.monthlyLayout]}>4000 Monthly</Text>
        <Image
          style={[styles.image13Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-13.png")}
        />
        <View style={styles.groupParent}>
          <View style={[styles.eaInputBoxContainer, styles.groupViewLayout]}>
            <View style={[styles.eaInputBox2, styles.inputBorder]} />
            <Text style={[styles.monthly1, styles.monthly1FlexBox]}>
              Monthly
            </Text>
            <Image
              style={[styles.chevronIcon, styles.chevronIconLayout]}
              contentFit="cover"
              source={require("../assets/chevron1.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupViewLayout]}>
            <View style={[styles.eaInputBox2, styles.inputBorder]} />
            <Image
              style={[styles.image14Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/image-13.png")}
            />
            <Text style={[styles.usdc, styles.usdcTypo]}>USDC</Text>
            <Image
              style={[styles.chevronIcon1, styles.chevronIconLayout]}
              contentFit="cover"
              source={require("../assets/chevron2.png")}
            />
          </View>
          <View style={[styles.eaInputBox4, styles.inputBorder]} />
          <Text style={[styles.monthly1, styles.monthly1FlexBox]}>
            Enter amount
          </Text>
        </View>
        <View style={[styles.eaInputBoxParent1, styles.inputLayout]}>
          <View style={[styles.eaInputBox5, styles.inputBorder]} />
          <Text style={[styles.updateCompanyName, styles.usdcTypo]}>
            Update Company Name
          </Text>
          <View style={[styles.eaInputBox6, styles.inputLayout]} />
          <Text style={[styles.updateEmployeeWallet, styles.monthly1FlexBox]}>
            Update Employee Wallet Address
          </Text>
        </View>
      </View>
      <Text style={[styles.existingContracts, styles.monthly1FlexBox]}>
        Existing Contracts
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  businessHomePayersUpdateChildLayout: {
    width: 390,
    left: 0,
  },
  inputLayout1: {
    height: 44,
    width: 150,
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
  forTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  listboxbgBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  monthly1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  salKTypo: {
    top: 43,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  monthlyLayout: {
    width: 96,
    position: "absolute",
  },
  iconLayout: {
    height: 23,
    width: 23,
    position: "absolute",
  },
  groupViewLayout: {
    height: 40,
    width: 96,
    position: "absolute",
  },
  inputBorder: {
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_10xs,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  chevronIconLayout: {
    opacity: 0.8,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "11.88%",
    height: "10%",
    position: "absolute",
  },
  usdcTypo: {
    top: 12,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  inputLayout: {
    width: 337,
    position: "absolute",
  },
  businessHomePayersUpdateChild: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
    top: 0,
    height: 844,
  },
  eaInputBox: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  updateContract: {
    marginLeft: -58,
    left: "50%",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 116,
    height: 18,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: 13,
    position: "absolute",
  },
  eaInputBoxParent: {
    left: 27,
    top: 672,
    width: 150,
  },
  eaInputBoxGroup: {
    left: 210,
    top: 672,
    width: 150,
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
    width: 302,
    height: 33,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  frameItem: {
    left: 2,
    height: 29,
    top: 1,
    borderRadius: Border.br_81xl,
    width: 150,
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
    width: 300,
    height: 31,
    left: 30,
    position: "absolute",
  },
  listboxbg: {
    height: "81.91%",
    top: "0%",
    right: "0%",
    bottom: "18.09%",
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
  wiseSoftLlc: {
    top: 10,
    left: 14,
    width: 142,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  salK: {
    left: 39,
    width: 103,
    position: "absolute",
  },
  monthly: {
    left: 182,
    top: 43,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  image13Icon: {
    top: 40,
    left: 157,
  },
  eaInputBox2: {
    width: 96,
    position: "absolute",
    top: 0,
  },
  monthly1: {
    left: 13,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 13,
  },
  chevronIcon: {
    top: "50%",
    right: "11.98%",
    bottom: "40%",
    left: "76.15%",
  },
  eaInputBoxContainer: {
    left: 258,
    top: 0,
  },
  image14Icon: {
    top: 8,
    left: 6,
  },
  usdc: {
    left: 34,
  },
  chevronIcon1: {
    top: "47.5%",
    right: "5.83%",
    bottom: "42.5%",
    left: "82.29%",
  },
  groupView: {
    left: 156,
    top: 1,
  },
  eaInputBox4: {
    width: 149,
    top: 1,
    position: "absolute",
  },
  groupParent: {
    top: 178,
    left: 7,
    width: 354,
    height: 41,
    position: "absolute",
  },
  eaInputBox5: {
    width: 335,
    top: 0,
    position: "absolute",
  },
  updateCompanyName: {
    left: 13,
  },
  eaInputBox6: {
    top: 50,
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_10xs,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  updateEmployeeWallet: {
    top: 62,
    left: 13,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  eaInputBoxParent1: {
    top: 72,
    left: 16,
    height: 90,
  },
  listboxbgParent: {
    top: 332,
    left: 11,
    width: 366,
    height: 304,
    position: "absolute",
  },
  existingContracts: {
    top: 287,
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 30,
  },
  businessHomePayersUpdate: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default BusinessHomePayersUpdate;
