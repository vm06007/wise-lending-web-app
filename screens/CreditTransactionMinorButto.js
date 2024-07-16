import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent from "../components/FrameComponent";
import FrameComponent4 from "../components/FrameComponent4";
import HOMEROW from "../components/HOMEROW";
import FrameComponent3 from "../components/FrameComponent3";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const CreditTransactionMinorButto = () => {
  return (
    <View style={styles.creditTransactionMinorButto}>
      <View
        style={[
          styles.creditTransactionMinorButtoChild,
          styles.creditTransactionMinorButtoChildLayout,
        ]}
      />
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
      <View style={styles.eaInputBoxParent}>
        <View style={styles.eaInputBox} />
        <Text style={[styles.supply, styles.saveTypo]}>Supply</Text>
        <Image
          style={styles.downloadIcon}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <FrameComponent4
        showFrameView
        propLeft={230}
        propWidth={136}
        propRight="unset"
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
      <Text style={[styles.save, styles.saveFlexBox]}>Save</Text>
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill2.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill11.png")}
      />
      <FrameComponent3 />
      <View style={styles.listboxMain}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={styles.text}>$ 0.00</Text>
      </View>
      <View style={styles.eaInputBoxParent}>
        <View style={styles.eaInputBox} />
        <Text style={[styles.supply, styles.saveTypo]}>Supply</Text>
        <Image
          style={styles.downloadIcon}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <FrameComponent4
        showFrameView
        propLeft={230}
        propWidth={136}
        propRight="unset"
      />
      <View style={styles.listboxMain}>
        <View style={styles.listboxbgShadowBox} />
        <Text style={styles.text}>$ 0.00</Text>
      </View>
      <Text style={[styles.availableToWithdraw, styles.saveFlexBox]}>
        Available to withdraw
      </Text>
      <GroupComponent1
        prop="$11,524.06"
        vector11={require("../assets/vector-111.png")}
        creditBalance="Savings Balance"
        propTop={105}
        propLeft={26}
      />
      <FrameComponent2
        deposit="Deposit"
        download={require("../assets/download2.png")}
      />
      <FrameComponent1 twoWayArrow={require("../assets/twoway-arrow.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  creditTransactionMinorButtoChildLayout: {
    width: 390,
    left: 0,
  },
  saveTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  saveFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  creditTransactionMinorButtoChild: {
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 844,
  },
  image17Icon: {
    top: 131,
    width: 29,
    height: 30,
    left: 24,
    position: "absolute",
  },
  eaInputBox: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite,
    height: 58,
    width: 201,
    left: 0,
    top: 0,
    position: "absolute",
  },
  supply: {
    top: 34,
    left: 72,
    color: Color.colorRoyalblue_100,
    textAlign: "center",
    width: 53,
    height: 17,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  downloadIcon: {
    top: 7,
    left: 86,
    width: 25,
    height: 22,
    position: "absolute",
  },
  eaInputBoxParent: {
    top: 406,
    left: 22,
    height: 58,
    width: 201,
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
    top: 291,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 24,
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
    backgroundColor: Color.colorGhostwhite,
    position: "absolute",
    width: "100%",
  },
  text: {
    width: "83.82%",
    top: "33.33%",
    left: "11.03%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    textAlign: "right",
    position: "absolute",
  },
  listboxMain: {
    height: "7.11%",
    width: "34.87%",
    top: "39.1%",
    right: "6.15%",
    bottom: "53.79%",
    left: "58.97%",
    position: "absolute",
  },
  availableToWithdraw: {
    top: 166,
    left: 26,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_400,
    fontSize: FontSize.size_xs,
  },
  creditTransactionMinorButto: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default CreditTransactionMinorButto;
