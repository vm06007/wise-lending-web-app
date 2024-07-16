import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent from "../components/FrameComponent";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent2 from "../components/FrameComponent2";
import Hubs from "../components/Hubs";
import HOMEROW from "../components/HOMEROW";
import GroupComponent1 from "../components/GroupComponent1";
import ListBoxMain from "../components/ListBoxMain";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame71 = () => {
  return (
    <View style={styles.savingHubDropdown}>
      <View
        style={[
          styles.savingHubDropdownChild,
          styles.savingHubDropdownChildLayout,
        ]}
      />
      <View
        style={[
          styles.savingHubDropdownChild,
          styles.savingHubDropdownChildLayout,
        ]}
      />
      <FrameComponent
        iMG4427={require("../assets/img-4427.png")}
        yXLdhnZg400x400RemovebgPr={require("../assets/yxldhnzg-400x400removebgpreview-7.png")}
        propTop={506}
        propLeft={19}
      />
      <View style={[styles.eaInputBoxParent, styles.inputLayout1]}>
        <View style={[styles.eaInputBox, styles.inputPosition]} />
        <Text style={[styles.supply, styles.supplyTypo]}>Supply</Text>
        <Image
          style={[styles.downloadIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/download1.png")}
        />
      </View>
      <FrameComponent5 propWidth={134} propRight="unset" propLeft={230} />
      <Text style={[styles.interestEarned, styles.saveFlexBox]}>
        Interest Earned
      </Text>
      <FrameComponent2
        deposit="Top Up"
        download={require("../assets/download2.png")}
      />
      <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
        <View style={[styles.eaInputBox1, styles.inputLayout]} />
        <Text style={[styles.exchange, styles.supplyTypo]}>Exchange</Text>
        <Image
          style={[styles.refresh2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/refresh-221.png")}
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
      <Text style={[styles.save, styles.saveFlexBox]}>Save</Text>
      <Hubs propTop={603} propLeft={24} />
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill11.png")}
      />
      <GroupComponent1
        prop="$11,524.06"
        vector11={require("../assets/vector-111.png")}
        creditBalance="Savings Hub"
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
          <Text style={[styles.text1, styles.textTypo1]}>POOL</Text>
          <Text style={[styles.text2, styles.textPosition]}>SUPPLY</Text>
          <Text style={[styles.text3, styles.textTypo1]}>APY</Text>
        </View>
        <View style={styles.itemSpaceBlock}>
          <Text style={[styles.text4, styles.textTypo]}>ETH</Text>
          <Text style={[styles.text5, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text6, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemSpaceBlock]}>
          <Text style={[styles.text4, styles.textTypo]}>USDC</Text>
          <Text style={[styles.text5, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text9, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={styles.itemSpaceBlock}>
          <Text style={[styles.text4, styles.textTypo]}>USDT</Text>
          <Text style={[styles.text5, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text9, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={styles.itemSpaceBlock}>
          <Text style={[styles.text4, styles.textTypo]}>DAI</Text>
          <Text style={[styles.text5, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text9, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemSpaceBlock]}>
          <Text style={[styles.text4, styles.textTypo]}>SDAI</Text>
          <Text style={[styles.text5, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text9, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemSpaceBlock]}>
          <Text style={[styles.text4, styles.textTypo]}>WBTC</Text>
          <Text style={[styles.text5, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text9, styles.textTypo]}>127.34%</Text>
        </View>
        <View style={[styles.item8, styles.itemSpaceBlock]}>
          <Text style={[styles.text4, styles.textTypo]}>wstETH</Text>
          <Text style={[styles.text5, styles.textTypo]}>229.1M</Text>
          <Text style={[styles.text9, styles.textTypo]}>127.34%</Text>
        </View>
      </View>
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  savingHubDropdownChildLayout: {
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
    textAlign: "center",
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout: {
    width: 25,
    position: "absolute",
  },
  saveFlexBox: {
    textAlign: "left",
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
  textTypo1: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: 12,
    position: "absolute",
  },
  textPosition: {
    left: 74,
    textAlign: "left",
  },
  textTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    top: 12,
    position: "absolute",
  },
  itemSpaceBlock: {
    marginTop: 1,
    height: 40,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  savingHubDropdownChild: {
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
    width: 53,
  },
  downloadIcon: {
    top: 7,
    left: 86,
    height: 22,
  },
  eaInputBoxParent: {
    top: 405,
    left: 22,
  },
  interestEarned: {
    top: 167,
    left: 25,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_400,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  eaInputBox1: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  exchange: {
    top: 35,
    left: 51,
    width: 64,
  },
  refresh2Icon: {
    top: 8,
    left: 71,
    height: 25,
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
  save: {
    top: 291,
    left: 24,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
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
    left: 12,
    textAlign: "left",
  },
  text2: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: 12,
    position: "absolute",
  },
  text3: {
    left: 155,
    textAlign: "right",
  },
  item1: {
    height: 40,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text4: {
    left: 12,
    textAlign: "left",
  },
  text5: {
    left: 74,
    textAlign: "left",
  },
  text6: {
    left: 134,
    textAlign: "right",
  },
  text9: {
    left: 133,
    textAlign: "right",
  },
  item8: {
    backgroundColor: Color.colorWhite,
  },
  dropdownList: {
    width: "51.03%",
    top: 398,
    right: "43.33%",
    left: "5.64%",
    height: 331,
    alignItems: "center",
    justifyContent: "center",
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
  image16Icon: {
    top: 130,
    width: 29,
    height: 30,
    left: 22,
    position: "absolute",
  },
  savingHubDropdown: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame71;
