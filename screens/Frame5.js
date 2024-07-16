import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent2 from "../components/FrameComponent2";
import Hubs from "../components/Hubs";
import HOMEROW from "../components/HOMEROW";
import FrameComponent from "../components/FrameComponent";
import GroupComponent1 from "../components/GroupComponent1";
import ListBoxMain from "../components/ListBoxMain";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Frame51 = () => {
  return (
    <View style={styles.lendingHubDropdown}>
      <View
        style={[
          styles.lendingHubDropdownChild,
          styles.lendingHubDropdownChildLayout,
        ]}
      />
      <View
        style={[
          styles.lendingHubDropdownChild,
          styles.lendingHubDropdownChildLayout,
        ]}
      />
      <View style={[styles.eaInputBoxParent, styles.inputLayout1]}>
        <View style={[styles.eaInputBox, styles.inputPosition]} />
        <Text style={[styles.supply, styles.supplyTypo]}>Supply</Text>
        <Image
          style={styles.downloadIcon}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <FrameComponent5 />
      <Text style={styles.availableToLend}>Available to lend</Text>
      <FrameComponent2
        deposit="Top Up"
        download={require("../assets/download2.png")}
      />
      <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
        <View style={[styles.eaInputBox1, styles.inputLayout]} />
        <Text style={[styles.borrow, styles.supplyTypo]}>Borrow</Text>
        <Image
          style={styles.lightningRingLightIcon}
          contentFit="cover"
          source={require("../assets/lightning-ring-light.png")}
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
      <Text style={styles.lend}>Lend</Text>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <Hubs propTop={603} propLeft={24} />
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill.png")}
      />
      <FrameComponent
        iMG4427={require("../assets/img-4427.png")}
        yXLdhnZg400x400RemovebgPr={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
        propTop={506}
        propLeft={19}
      />
      <GroupComponent1
        prop="$23,000.06"
        vector11={require("../assets/vector-1111.png")}
        creditBalance="Lending Hub"
        propTop={106}
        propLeft={25}
      />
      <ListBoxMain />
      <View style={styles.listboxMain}>
        <View style={styles.listboxbg} />
        <Text style={styles.text}>$ 0.00</Text>
      </View>
      <View style={styles.dropdownList}>
        <View style={styles.item1}>
          <Text style={styles.text1}>POOL</Text>
          <Text style={[styles.text2, styles.textTypo7]}>SUPPLY</Text>
          <Text style={[styles.text3, styles.textTypo7]}>APY</Text>
        </View>
        <View style={styles.itemFlexBox}>
          <Text style={styles.text4}>ETH</Text>
          <Text style={[styles.text5, styles.textTypo6]}>229.1M</Text>
          <Text style={[styles.text6, styles.textTypo6]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemFlexBox]}>
          <Text style={styles.text4}>USDC</Text>
          <Text style={[styles.text8, styles.textTypo5]}>229.1M</Text>
          <Text style={[styles.text9, styles.textTypo5]}>127.34%</Text>
        </View>
        <View style={styles.itemFlexBox}>
          <Text style={styles.text4}>USDT</Text>
          <Text style={[styles.text11, styles.textTypo4]}>229.1M</Text>
          <Text style={[styles.text12, styles.textTypo4]}>127.34%</Text>
        </View>
        <View style={styles.itemFlexBox}>
          <Text style={styles.text4}>DAI</Text>
          <Text style={[styles.text14, styles.textTypo3]}>229.1M</Text>
          <Text style={[styles.text15, styles.textTypo3]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemFlexBox]}>
          <Text style={styles.text4}>SDAI</Text>
          <Text style={[styles.text17, styles.textTypo2]}>229.1M</Text>
          <Text style={[styles.text18, styles.textTypo2]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemFlexBox]}>
          <Text style={styles.text4}>WBTC</Text>
          <Text style={[styles.text20, styles.textTypo1]}>229.1M</Text>
          <Text style={[styles.text21, styles.textTypo1]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemFlexBox]}>
          <Text style={styles.text4}>wstETH</Text>
          <Text style={[styles.text23, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text24, styles.textTypo]}>127.34%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lendingHubDropdownChildLayout: {
    width: 390,
    left: 0,
  },
  inputLayout1: {
    height: 58,
    width: 199,
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  supplyTypo: {
    height: 17,
    width: 53,
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  inputLayout: {
    width: 167,
    height: 58,
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
  textTypo7: {
    marginLeft: 22,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  textTypo6: {
    marginLeft: 24,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  itemFlexBox: {
    marginTop: 1,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo5: {
    marginLeft: 17,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  textTypo4: {
    marginLeft: 18,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  textTypo3: {
    marginLeft: 25,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  textTypo2: {
    marginLeft: 20,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  textTypo1: {
    marginLeft: 16,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    marginLeft: 11,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  lendingHubDropdownChild: {
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 844,
  },
  eaInputBox: {
    height: 58,
    width: 199,
    position: "absolute",
  },
  supply: {
    top: 34,
    left: 72,
  },
  downloadIcon: {
    top: 7,
    left: 86,
    width: 25,
    height: 22,
    position: "absolute",
  },
  eaInputBoxParent: {
    top: 405,
    left: 22,
  },
  availableToLend: {
    top: 167,
    left: 25,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  eaInputBox1: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  borrow: {
    top: 35,
    left: 57,
  },
  lightningRingLightIcon: {
    top: 5,
    left: 68,
    width: 30,
    height: 30,
    position: "absolute",
  },
  eaInputBoxGroup: {
    top: 208,
    left: 199,
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
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  image4Icon: {
    top: 130,
    width: 32,
    height: 33,
    left: 22,
    position: "absolute",
  },
  listboxbg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
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
  text1: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text2: {
    textAlign: "left",
  },
  text3: {
    textAlign: "right",
  },
  item1: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text4: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text5: {
    textAlign: "left",
  },
  text6: {
    textAlign: "right",
  },
  text8: {
    textAlign: "left",
  },
  text9: {
    textAlign: "right",
  },
  item8: {
    backgroundColor: Color.colorWhite,
  },
  text11: {
    textAlign: "left",
  },
  text12: {
    textAlign: "right",
  },
  text14: {
    textAlign: "left",
  },
  text15: {
    textAlign: "right",
  },
  text17: {
    textAlign: "left",
  },
  text18: {
    textAlign: "right",
  },
  text20: {
    textAlign: "left",
  },
  text21: {
    textAlign: "right",
  },
  text23: {
    textAlign: "left",
  },
  text24: {
    textAlign: "right",
  },
  dropdownList: {
    width: "51.03%",
    top: 398,
    right: "43.33%",
    left: "5.64%",
    height: 331,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
  lendingHubDropdown: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame51;
