import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent from "../components/FrameComponent";
import HOMEROW from "../components/HOMEROW";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import GroupComponent1 from "../components/GroupComponent1";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Frame81 = () => {
  return (
    <View style={styles.savingHub}>
      <View style={[styles.savingHubChild, styles.savingHubChildLayout]} />
      <FrameComponent
        iMG4427={require("../assets/img-4427.png")}
        yXLdhnZg400x400RemovebgPr={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
        propTop={506}
        propLeft={19}
      />
      <Image
        style={styles.image17Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
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
          style={[styles.image1Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
      </View>
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill11.png")}
      />
      <View style={styles.mainComponentLendingHubSav}>
        <FrameComponent
          iMG4427={require("../assets/img-4427.png")}
          yXLdhnZg400x400RemovebgPr={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
          propTop={401}
          propLeft={0}
        />
        <FrameComponent7 />
        <FrameComponent6 />
        <Text style={styles.save}>Save</Text>
        <View style={[styles.eaInputBoxParent, styles.inputPosition]}>
          <View style={styles.eaInputBox} />
          <Text style={[styles.topUp, styles.topUpTypo]}>Top Up</Text>
          <Image
            style={[styles.downloadIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/download2.png")}
          />
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputPosition]}>
          <View style={styles.eaInputBox} />
          <Text style={[styles.borrow, styles.topUpTypo]}>Borrow</Text>
          <Image
            style={[styles.lightningRingLightIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/lightning-ring-light.png")}
          />
        </View>
        <View style={[styles.frameParent, styles.parentLayout]}>
          <View style={[styles.listboxbgParent, styles.parentLayout]}>
            <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
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
          <View style={[styles.listboxMain, styles.listboxbg1Position]}>
            <View style={[styles.listboxbg1, styles.listboxbg1Position]} />
            <Text style={[styles.text, styles.textTypo]}>$ 0.00</Text>
          </View>
        </View>
        <View style={styles.interestEarnedParent}>
          <Text style={styles.interestEarned}>Interest Earned</Text>
          <GroupComponent1
            prop="$11,524.06"
            vector11={require("../assets/vector-111.png")}
            creditBalance="Savings Hub"
            propTop={0}
            propLeft={0}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  savingHubChildLayout: {
    width: 390,
    left: 0,
  },
  yxldhnzg400x400Layout: {
    height: 62,
    position: "absolute",
  },
  iconPosition1: {
    height: 44,
    top: 9,
    position: "absolute",
  },
  inputPosition: {
    height: 58,
    top: 103,
    position: "absolute",
  },
  topUpTypo: {
    height: 17,
    width: 53,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.size_xs,
    left: "50%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 60,
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
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    width: "100%",
  },
  textTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  listboxbg1Position: {
    bottom: 0,
    right: "0%",
    top: 0,
    position: "absolute",
  },
  savingHubChild: {
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 844,
  },
  image17Icon: {
    top: 131,
    left: 24,
    width: 29,
    height: 30,
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
  save: {
    top: 186,
    left: 5,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  eaInputBox: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    right: "0%",
    height: 58,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  topUp: {
    marginLeft: -26,
    top: 34,
  },
  downloadIcon: {
    marginLeft: -12,
    top: 7,
    width: 25,
    height: 22,
  },
  eaInputBoxParent: {
    width: "46.46%",
    right: "51.84%",
    left: "1.7%",
  },
  borrow: {
    marginLeft: -26.5,
    top: 35,
  },
  lightningRingLightIcon: {
    marginLeft: -15.5,
    top: 5,
    width: 30,
    height: 30,
  },
  eaInputBoxGroup: {
    width: "47.31%",
    left: "50.99%",
    right: "1.7%",
  },
  listboxbg: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  selectAsset: {
    top: "0%",
    left: "0%",
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
    backgroundColor: Color.colorGhostwhite,
    left: "0%",
    width: "100%",
  },
  text: {
    width: "83.82%",
    top: 20,
    left: "11.03%",
    textAlign: "right",
  },
  listboxMain: {
    width: "39.53%",
    left: "60.47%",
  },
  frameParent: {
    width: "97.45%",
    top: 225,
    left: "0.85%",
    right: "1.7%",
  },
  interestEarned: {
    top: 61,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  interestEarnedParent: {
    left: 7,
    width: 201,
    height: 76,
    top: 0,
    position: "absolute",
  },
  mainComponentLendingHubSav: {
    top: 105,
    left: 19,
    width: 353,
    height: 671,
    position: "absolute",
  },
  savingHub: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame81;
