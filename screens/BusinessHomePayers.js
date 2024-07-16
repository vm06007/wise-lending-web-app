import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import GroupComponent from "../components/GroupComponent";
import HOMEROW from "../components/HOMEROW";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BusinessHomePayers = () => {
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
      <View style={styles.eaInputBox} />
      <Text style={styles.monthly}>Monthly</Text>
      <Image
        style={styles.chevronIcon}
        contentFit="cover"
        source={require("../assets/chevron.png")}
      />
      <Image
        style={[styles.image13Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={[styles.image14Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <View style={[styles.eaInputBoxParent, styles.inputLayout]}>
        <Image
          style={[styles.eaInputBox1, styles.inputLayout]}
          contentFit="cover"
          source={require("../assets/ea-input-box.png")}
        />
        <Text style={styles.createContract}>Create Contract</Text>
      </View>
      <View style={styles.eaInputBoxGroup}>
        <View style={[styles.eaInputBox2, styles.inputBorder1]} />
        <Text style={styles.inputPayeeInformation}>
          Input Payee Information
        </Text>
        <Text style={[styles.enterEmployeeName, styles.enterTypo]}>
          Enter Employee Name
        </Text>
        <View style={[styles.eaInputBox3, styles.inputBorder1]} />
        <Text style={[styles.enterCompanyName, styles.enterTypo]}>
          Enter Company Name
        </Text>
        <View style={[styles.eaInputBox4, styles.inputBorder1]} />
        <Text style={[styles.enterEmployeeWallet, styles.enterTypo]}>
          Enter Employee Wallet Address
        </Text>
      </View>
      <View style={[styles.eaInputBoxContainer, styles.groupViewPosition]}>
        <View style={[styles.eaInputBox5, styles.inputBorder]} />
        <Text
          style={styles.inputPayeeInformation}
        >{`Enter an amount & frequency`}</Text>
        <Text style={[styles.enterAmount, styles.usdcTypo]}>Enter amount</Text>
        <Text style={[styles.usdc, styles.usdcTypo]}>USDC</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.eaInputBox6, styles.inputBorder]} />
        <Text style={styles.inputPayeeInformation}>Start Streaming!</Text>
        <Text style={[styles.enterAmount, styles.usdcTypo]}>2000 / 4000</Text>
        <Text style={[styles.usdc1, styles.usdcTypo]}>USDC</Text>
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
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
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
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  businessHomePayersChildLayout: {
    width: 390,
    left: 0,
  },
  iconLayout: {
    height: 23,
    width: 23,
    position: "absolute",
  },
  inputLayout: {
    height: 44,
    width: 335,
    position: "absolute",
  },
  inputBorder1: {
    left: 1,
    height: 40,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  enterTypo: {
    left: 14,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupViewPosition: {
    height: 72,
    left: 29,
    position: "absolute",
  },
  inputBorder: {
    top: 32,
    height: 40,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  usdcTypo: {
    top: 44,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
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
  frameLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  forTypo: {
    top: 7,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
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
    top: 521,
    left: 270,
    width: 96,
    height: 40,
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_10xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  monthly: {
    top: 533,
    left: 277,
    textAlign: "left",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  chevronIcon: {
    height: "0.47%",
    width: "2.82%",
    top: "63.98%",
    right: "8.97%",
    bottom: "35.55%",
    left: "88.21%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.8,
    position: "absolute",
  },
  image13Icon: {
    top: 530,
    left: 191,
  },
  image14Icon: {
    top: 617,
    left: 289,
  },
  eaInputBox1: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  createContract: {
    marginLeft: -60.5,
    top: 13,
    left: "50%",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 122,
    height: 18,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  eaInputBoxParent: {
    top: 679,
    left: 27,
  },
  eaInputBox2: {
    top: 34,
    width: 335,
    left: 1,
  },
  inputPayeeInformation: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  enterEmployeeName: {
    top: 46,
  },
  eaInputBox3: {
    top: 92,
    width: 335,
    left: 1,
  },
  enterCompanyName: {
    top: 104,
  },
  eaInputBox4: {
    top: 149,
    width: 337,
  },
  enterEmployeeWallet: {
    top: 161,
  },
  eaInputBoxGroup: {
    top: 279,
    width: 338,
    height: 189,
    left: 29,
    position: "absolute",
  },
  eaInputBox5: {
    width: 149,
  },
  enterAmount: {
    left: 13,
  },
  usdc: {
    left: 190,
  },
  eaInputBoxContainer: {
    top: 489,
    width: 230,
  },
  eaInputBox6: {
    width: 238,
  },
  usdc1: {
    left: 288,
  },
  groupView: {
    top: 576,
    width: 328,
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
  },
  frameItem: {
    top: 1,
    left: 2,
    width: 150,
    height: 29,
  },
  forPayers: {
    left: 41,
    color: Color.colorWhite,
    top: 7,
  },
  forPayees: {
    left: 187,
    color: Color.colorDarkgray_400,
  },
  rectangleParent: {
    top: 226,
    left: 30,
    width: 300,
    height: 31,
    position: "absolute",
  },
  businessHomePayers: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default BusinessHomePayers;
