import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import HOMEROW from "../components/HOMEROW";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigation } from "@react-navigation/native";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent from "../components/FrameComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame41 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lendingHub}>
      <View style={[styles.eaInputBox, styles.eaInputBoxBg]} />
      <View style={[styles.lendingHubChild, styles.lendingHubChildLayout]} />
      <View style={styles.eaInputBoxParent}>
        <View style={styles.eaInputBox1} />
        <Text style={[styles.supply, styles.topUpTypo]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.downloadIconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
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
      <Text style={[styles.lend, styles.lendTypo]}>Lend</Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill.png")}
      />
      <Image
        style={[styles.lendingHubItem, styles.chevronIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-1111.png")}
      />
      <View style={styles.mainLendingHubComponent}>
        <Text style={[styles.availableToLend, styles.parentPosition]}>
          Available to lend
        </Text>
        <FrameComponent6 propTop={300} />
        <View style={[styles.eyeParent, styles.parentPosition]}>
          <Image
            style={styles.eyeIcon}
            contentFit="cover"
            source={require("../assets/eye.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>$23,000.06</Text>
          <Text style={[styles.lendingHub1, styles.textTypo]}>Lending Hub</Text>
        </View>
        <Pressable
          style={[styles.listboxbgParent, styles.listboxMainPosition]}
          onPress={() => navigation.toggleDrawer()}
        >
          <View style={styles.listboxbgShadowBox} />
          <View style={styles.placeholderText}>
            <Text style={[styles.selectAsset, styles.text1Typo]}>
              Select Asset
            </Text>
          </View>
          <Image
            style={[styles.chevronIcon, styles.chevronIconLayout]}
            contentFit="cover"
            source={require("../assets/chevron11.png")}
          />
        </Pressable>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={[styles.downloadParent, styles.parentShadowBox]}>
            <Image
              style={styles.downloadIconLayout}
              contentFit="cover"
              source={require("../assets/download2.png")}
            />
            <Text style={[styles.topUp, styles.topUpTypo]}>Top Up</Text>
          </View>
          <View
            style={[styles.lightningRingLightParent, styles.parentShadowBox]}
          >
            <Image
              style={styles.lightningRingLightIcon}
              contentFit="cover"
              source={require("../assets/lightning-ring-light2.png")}
            />
            <Text style={styles.topUpTypo}>Borrow</Text>
          </View>
        </View>
        <View style={[styles.listboxMain, styles.listboxMainPosition]}>
          <View style={styles.listboxbgShadowBox} />
          <Text style={[styles.text1, styles.text1Typo]}>$ 0.00</Text>
        </View>
        <FrameComponent7 propTop={300} />
        <Text style={[styles.lend1, styles.lendTypo]}>Lend</Text>
        <FrameComponent
          iMG4427={require("../assets/img-4427.png")}
          yXLdhnZg400x400RemovebgPr={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
          propTop={400}
          propLeft={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eaInputBoxBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  lendingHubChildLayout: {
    width: 390,
    left: 0,
  },
  topUpTypo: {
    height: 17,
    width: 53,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  downloadIconLayout: {
    height: 22,
    width: 25,
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
  lendTypo: {
    color: Color.colorDimgray_500,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  chevronIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  parentPosition: {
    left: 6,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  listboxMainPosition: {
    height: 60,
    top: 224,
    position: "absolute",
  },
  text1Typo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  parentShadowBox: {
    alignItems: "center",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
  },
  eaInputBox: {
    top: 431,
    left: 63,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    width: 161,
    height: 93,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  lendingHubChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    height: 844,
  },
  eaInputBox1: {
    backgroundColor: Color.colorGhostwhite,
    height: 58,
    width: 201,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  supply: {
    top: 34,
    left: 72,
    position: "absolute",
  },
  downloadIcon: {
    top: 7,
    left: 86,
    position: "absolute",
  },
  eaInputBoxParent: {
    top: 406,
    height: 58,
    width: 201,
    left: 22,
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
    height: 44,
    top: 9,
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
  lend: {
    top: 291,
    left: 24,
    textAlign: "left",
  },
  image3Icon: {
    top: 130,
    width: 32,
    height: 33,
    left: 22,
    position: "absolute",
  },
  lendingHubItem: {
    height: "1.9%",
    width: "1.54%",
    top: "16.47%",
    right: "35.64%",
    bottom: "81.64%",
    left: "62.82%",
  },
  availableToLend: {
    top: 61,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  eyeIcon: {
    top: 1,
    left: 119,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text: {
    top: 24,
    left: 54,
    fontSize: FontSize.size_9xl,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
  },
  lendingHub1: {
    left: 29,
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  eyeParent: {
    width: 234,
    height: 58,
    top: 0,
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
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    backgroundColor: Color.colorGhostwhite,
    position: "absolute",
    width: "100%",
  },
  selectAsset: {
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  placeholderText: {
    height: "33.33%",
    width: "65.72%",
    top: "33.33%",
    right: "28.56%",
    bottom: "33.33%",
    left: "5.72%",
    position: "absolute",
  },
  chevronIcon: {
    height: "8.33%",
    width: "6.92%",
    top: "46.67%",
    right: "10.9%",
    bottom: "45%",
    left: "82.19%",
    opacity: 0.8,
  },
  listboxbgParent: {
    width: "56.94%",
    right: "42.21%",
    left: "0.85%",
  },
  topUp: {
    marginTop: 5,
  },
  downloadParent: {
    paddingHorizontal: 55,
    paddingVertical: 7,
  },
  lightningRingLightIcon: {
    width: 30,
    height: 30,
  },
  lightningRingLightParent: {
    paddingHorizontal: 57,
    paddingVertical: 5,
    marginLeft: 10,
  },
  frameParent: {
    top: 102,
    flexDirection: "row",
  },
  text1: {
    width: "83.82%",
    top: "35%",
    left: "-12.5%",
    textAlign: "right",
  },
  listboxMain: {
    width: "38.53%",
    right: "1.7%",
    left: "59.77%",
  },
  lend1: {
    top: 185,
    left: 5,
    textAlign: "left",
  },
  mainLendingHubComponent: {
    top: 106,
    left: 19,
    width: 353,
    height: 670,
    position: "absolute",
  },
  lendingHub: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame41;
