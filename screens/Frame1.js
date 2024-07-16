import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import HOMEROW from "../components/HOMEROW";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Frame11 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
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
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.inputLayout}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.52%</Text>
          </View>
          <View
            style={[
              styles.b51a10F900448eB983702a2bdaParent,
              styles.searchPoolsPosition,
            ]}
          >
            <Image
              style={styles.b51a10F900448eB983702a2bdaIcon}
              contentFit="cover"
              source={require("../assets/00b51a10f900448eb983702a2bda10d6-1.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <View style={styles.oethParent}>
              <Text style={[styles.oeth, styles.oethTypo]}>OETH</Text>
              <Text style={[styles.origin, styles.oethTypo]}>origin</Text>
            </View>
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.061%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.d0d18650Aaaa4deb80e5B0ba70Icon}
                contentFit="cover"
                source={require("../assets/d0d18650aaaa4deb80e5b0ba705cd93a-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>sFRAX</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Frax</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>25.52%</Text>
          </View>
          <View
            style={[
              styles.b51a10F900448eB983702a2bdaParent,
              styles.searchPoolsPosition,
            ]}
          >
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <View style={styles.oethParent}>
              <Text style={[styles.oeth, styles.oethTypo]}>rsETH</Text>
              <Text style={[styles.origin, styles.oethTypo]}>Kelp</Text>
            </View>
            <Image
              style={styles.b51a10F900448eB983702a2bdaIcon}
              contentFit="cover"
              source={require("../assets/ab328b09f46a47a8aa6f086e75161418-1.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={styles.textPosition}>
              <Text style={styles.textTypo}>5.</Text>
              <Text style={styles.text5}>027</Text>
              <Text style={styles.textTypo}>%</Text>
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>stETH</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Lido</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-101.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.74%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.d0d18650Aaaa4deb80e5B0ba70Icon}
                contentFit="cover"
                source={require("../assets/62b0e32688be40bca04df754fd0c3bb2-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>sfrxETH</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Frax</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>25.12%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={[
                  styles.f3f0949196af43579dda99cbc6Icon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/f3f0949196af43579dda99cbc6024bc9-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>ETHx</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Stader</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-102.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.52%</Text>
          </View>
          <View
            style={[
              styles.b51a10F900448eB983702a2bdaParent,
              styles.searchPoolsPosition,
            ]}
          >
            <Image
              style={styles.b51a10F900448eB983702a2bdaIcon}
              contentFit="cover"
              source={require("../assets/00b51a10f900448eb983702a2bda10d6-11.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <View style={styles.oethParent}>
              <Text style={[styles.oeth, styles.oethTypo]}>OETH</Text>
              <Text style={[styles.origin, styles.oethTypo]}>origin</Text>
            </View>
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.061%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.d0d18650Aaaa4deb80e5B0ba70Icon}
                contentFit="cover"
                source={require("../assets/d0d18650aaaa4deb80e5b0ba705cd93a-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>sFRAX</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Frax</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>25.52%</Text>
          </View>
          <View
            style={[
              styles.b51a10F900448eB983702a2bdaParent,
              styles.searchPoolsPosition,
            ]}
          >
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <View style={styles.oethParent}>
              <Text style={[styles.oeth, styles.oethTypo]}>rsETH</Text>
              <Text style={[styles.origin, styles.oethTypo]}>Kelp</Text>
            </View>
            <Image
              style={styles.b51a10F900448eB983702a2bdaIcon}
              contentFit="cover"
              source={require("../assets/ab328b09f46a47a8aa6f086e75161418-1.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={styles.textPosition}>
              <Text style={styles.textTypo}>5.</Text>
              <Text style={styles.text5}>027</Text>
              <Text style={styles.textTypo}>%</Text>
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>stETH</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Lido</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-101.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>5.74%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={styles.d0d18650Aaaa4deb80e5B0ba70Icon}
                contentFit="cover"
                source={require("../assets/62b0e32688be40bca04df754fd0c3bb2-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>sfrxETH</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Frax</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
        </View>
        <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
          <View style={[styles.eaInputBox, styles.eaInputBoxBorder]} />
          <View style={styles.upToPaParent}>
            <Text style={styles.upToPa}>Up to p.a</Text>
            <Text style={[styles.text, styles.textPosition]}>25.12%</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.frameGroupFlexBox}>
              <Image
                style={[
                  styles.f3f0949196af43579dda99cbc6Icon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/f3f0949196af43579dda99cbc6024bc9-1.png")}
              />
              <View style={styles.sfraxParent}>
                <Text style={[styles.sfrax, styles.oethTypo]}>ETHx</Text>
                <Text style={[styles.frax, styles.oethTypo]}>Stader</Text>
              </View>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/vector-102.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.rectangleView, styles.eaInputBoxBorder]} />
        <Text style={[styles.searchPools, styles.searchPoolsPosition]}>
          Search Pools
        </Text>
        <Image
          style={[styles.searchIcon, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
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
  eaInputBoxBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  textPosition: {
    color: Color.colorDodgerblue_100,
    fontSize: FontSize.size_lg,
    marginLeft: -66.5,
    width: 141,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  searchPoolsPosition: {
    top: 7,
    position: "absolute",
  },
  frameItemLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  oethTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  inputLayout: {
    height: 70,
    width: 159,
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 23,
    width: 23,
  },
  frameChild: {
    backgroundColor: Color.colorWhite,
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
  eaInputBox: {
    marginLeft: -80.5,
    bottom: -1,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorDarkgray_600,
    width: 161,
    height: 72,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  upToPa: {
    width: 141,
    textAlign: "center",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    top: 4,
    left: 0,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  upToPaParent: {
    top: 38,
    left: 4,
    width: 149,
    height: 22,
    position: "absolute",
  },
  b51a10F900448eB983702a2bdaIcon: {
    left: 2,
    width: 19,
    height: 19,
    overflow: "hidden",
    top: 4,
    position: "absolute",
  },
  frameItem: {
    height: "38.46%",
    width: "2.96%",
    top: "30.77%",
    right: "0%",
    bottom: "30.77%",
    left: "97.04%",
    maxHeight: "100%",
  },
  oeth: {
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  origin: {
    marginLeft: 5.5,
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  oethParent: {
    left: 25,
    width: 75,
    height: 17,
    top: 4,
    position: "absolute",
  },
  b51a10F900448eB983702a2bdaParent: {
    left: 7,
    width: 135,
    height: 26,
  },
  d0d18650Aaaa4deb80e5B0ba70Icon: {
    width: 22,
    overflow: "hidden",
    height: 22,
  },
  sfrax: {
    color: Color.colorDimgray_500,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frax: {
    marginLeft: 2,
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
  },
  sfraxParent: {
    marginLeft: 4,
    flexDirection: "row",
  },
  frameInner: {
    width: 4,
    height: 10,
    marginLeft: 21,
  },
  frameGroup: {
    top: 11,
    left: 9,
    position: "absolute",
  },
  eaInputBoxGroup: {
    marginLeft: 18,
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text5: {
    fontFamily: FontFamily.interRegular,
  },
  f3f0949196af43579dda99cbc6Icon: {
    overflow: "hidden",
  },
  frameParent: {
    width: "86.15%",
    top: 204,
    right: "7.18%",
    left: "6.67%",
    height: 510,
    flexWrap: "wrap",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleView: {
    width: "100.67%",
    top: -1,
    right: "-0.33%",
    left: "-0.33%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    height: 33,
  },
  searchPools: {
    left: 106,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 7,
  },
  searchIcon: {
    width: "8%",
    right: "3%",
    left: "89%",
    height: 24,
    top: 4,
  },
  rectangleGroup: {
    width: "76.92%",
    top: 129,
    right: "11.54%",
    left: "11.54%",
    height: 31,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Frame11;
