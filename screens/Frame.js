import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Frame8 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.image1Parent, styles.frameLayout11]}>
        <Image
          style={[styles.image1Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.frame, styles.frameLayout11]}>
          <Image
            style={[styles.image2Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/image-21.png")}
          />
          <Image
            style={[
              styles.yxldhnzg400x400RemovebgPrevIcon,
              styles.frameLayout11,
            ]}
            contentFit="cover"
            source={require("../assets/yxldhnzg-400x400removebgpreview-91.png")}
          />
        </View>
      </View>
      <View style={[styles.frame1, styles.frameLayout10]}>
        <View style={[styles.frameGroup, styles.frameLayout10]}>
          <View style={[styles.frame2, styles.frameLayout9]}>
            <View style={[styles.frame3, styles.frameLayout9]}>
              <Text style={[styles.businessBalance, styles.textFlexBox]}>
                Business Balance
              </Text>
            </View>
          </View>
          <Image
            style={[styles.eyeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/eye.png")}
          />
          <View style={[styles.frame4, styles.frameLayout8]}>
            <View style={[styles.hParent, styles.frame5Position]}>
              <Text style={[styles.h, styles.textFlexBox]}>24H</Text>
              <View style={[styles.frame5, styles.frame5Position]}>
                <Image
                  style={[styles.arrowDropUpIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/arrow-drop-up2.png")}
                />
                <Text style={[styles.text, styles.textFlexBox]}>5.63%</Text>
              </View>
            </View>
            <View style={[styles.frame6, styles.frameLayout7]}>
              <View style={[styles.frame7, styles.frame7Position]}>
                <Text style={[styles.text1, styles.textFlexBox]}>
                  $21,524.12
                </Text>
                <Image
                  style={[styles.frameChild, styles.frameChildLayout]}
                  contentFit="cover"
                  source={require("../assets/vector-11.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame8}>
        <View style={styles.frame9}>
          <View style={styles.frame10}>
            <View style={[styles.forPayeesParent, styles.userFillIconLayout]}>
              <Text style={[styles.forPayees, styles.textTypo]}>
                For Payees
              </Text>
              <View style={[styles.frame11, styles.frameLayout6]}>
                <Image
                  style={[styles.frameItem, styles.frameLayout6]}
                  contentFit="cover"
                  source={require("../assets/rectangle-301.png")}
                />
                <Text style={[styles.forPayers, styles.forPayersTypo]}>
                  For Payers
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frame12}>
            <View style={[styles.frame13, styles.frameLayout4]}>
              <View style={[styles.frame14, styles.framePosition4]}>
                <View style={[styles.frame15, styles.frameBorder]}>
                  <Text style={[styles.monthly, styles.usdcTypo]}>Monthly</Text>
                  <Image
                    style={[styles.chevronIcon, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/chevron.png")}
                  />
                </View>
                <View style={[styles.frame16, styles.framePosition3]}>
                  <View style={[styles.frame17, styles.frameLayout3]}>
                    <Image
                      style={[styles.image13Icon, styles.frameLayout3]}
                      contentFit="cover"
                      source={require("../assets/image-13.png")}
                    />
                  </View>
                  <View style={styles.framePosition3}>
                    <View style={[styles.frame18, styles.framePosition2]}>
                      <Text
                        style={[styles.enterAnAmount, styles.textFlexBox]}
                      >{`Enter an amount & frequency`}</Text>
                    </View>
                    <View style={[styles.frame19, styles.frameBorder]}>
                      <TextInput
                        style={[styles.enterAmount, styles.usdcTypo]}
                        placeholder="Enter amount"
                        placeholderTextColor="rgba(82, 88, 95, 0.8)"
                      />
                      <Text style={[styles.usdc, styles.usdcTypo]}>USDC</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frame20, styles.framePosition1]}>
              <View style={[styles.frameView, styles.framePosition1]}>
                <View style={[styles.frame21, styles.framePosition2]}>
                  <Text style={[styles.enterAnAmount, styles.textFlexBox]}>
                    Input Payee Information
                  </Text>
                </View>
                <View style={styles.frame22}>
                  <View style={[styles.frame23, styles.frameBorder]}>
                    <TextInput
                      style={[styles.enterJobTitle, styles.usdcTypo]}
                      placeholder="Enter job title"
                      placeholderTextColor="rgba(82, 88, 95, 0.8)"
                    />
                  </View>
                  <TextInput
                    style={[styles.frame24, styles.usdcTypo]}
                    placeholder="Enter employee name"
                    placeholderTextColor="rgba(82, 88, 95, 0.8)"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frame25, styles.frame25Layout]}>
          <View style={[styles.homeRow, styles.frameLayout2]}>
            <View style={[styles.frame26, styles.frameLayout2]}>
              <Image
                style={[styles.frameInner, styles.frameLayout2]}
                contentFit="cover"
                source={require("../assets/rectangle-3901.png")}
              />
              <View style={styles.frameParent1}>
                <View style={[styles.frame27, styles.farmsPosition]}>
                  <Text style={[styles.home, styles.usdcTypo]}>Home</Text>
                </View>
                <Image
                  style={[styles.homeFillIcon, styles.fillIconLayout]}
                  contentFit="cover"
                  source={require("../assets/home-fill.png")}
                />
              </View>
            </View>
            <View style={[styles.frame28, styles.frame28Layout]}>
              <View style={[styles.darhboardParent, styles.parentPosition]}>
                <View style={[styles.homeFillIcon, styles.fillIconLayout]}>
                  <View
                    style={[styles.darhboardChild, styles.darhboardLayout]}
                  />
                  <View
                    style={[styles.darhboardItem, styles.darhboardPosition]}
                  />
                  <View
                    style={[styles.darhboardInner, styles.rectangleViewLayout]}
                  />
                  <View
                    style={[styles.rectangleView, styles.rectangleViewLayout]}
                  />
                </View>
                <Text style={[styles.farms, styles.farmsPosition]}>Farms</Text>
              </View>
              <View style={[styles.exchangeParent, styles.parentPosition]}>
                <Text style={[styles.farms, styles.farmsPosition]}>
                  Exchange
                </Text>
                <Image
                  style={[styles.refresh2Icon, styles.viewPosition]}
                  contentFit="cover"
                  source={require("../assets/refresh-21.png")}
                />
              </View>
              <View style={[styles.frameParent2, styles.frameLayout1]}>
                <View style={[styles.frame29, styles.frameLayout1]} />
                <Text style={[styles.account, styles.usdcTypo]}>Account</Text>
                <Image
                  style={[styles.userFillIcon, styles.userFillIconLayout]}
                  contentFit="cover"
                  source={require("../assets/user-fill.png")}
                />
              </View>
              <View style={[styles.groupFillParent, styles.frame28Layout]}>
                <Image
                  style={[styles.groupFillIcon, styles.fillIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group-fill11.png")}
                />
                <Text style={[styles.business, styles.farmsPosition]}>
                  Business
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame30, styles.framePosition]}>
            <View style={[styles.frame31, styles.frameLayout4]}>
              <View style={[styles.frame32, styles.frameLayout]}>
                <View style={[styles.frame33, styles.frameLayout3]}>
                  <Image
                    style={[styles.image13Icon, styles.frameLayout3]}
                    contentFit="cover"
                    source={require("../assets/image-13.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameLayout]}>
                  <View style={[styles.frame34, styles.framePosition2]}>
                    <Text style={[styles.enterAnAmount, styles.textFlexBox]}>
                      Start Streaming!
                    </Text>
                  </View>
                  <View style={[styles.frame35, styles.frameBorder]}>
                    <View
                      style={[styles.view, styles.viewPosition]}
                      placeholder="2000 / 4000"
                    />
                    <Text style={[styles.usdc1, styles.usdcTypo]}>USDC</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frame36, styles.framePosition]}>
              <View style={[styles.eaInputBoxParent, styles.inputLayout]}>
                <Image
                  style={[styles.eaInputBox, styles.inputLayout]}
                  contentFit="cover"
                  source={require("../assets/ea-input-box3.png")}
                />
                <Text style={[styles.startHere, styles.forPayersTypo]}>
                  Start Here!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout11: {
    height: 62,
    position: "absolute",
  },
  iconPosition1: {
    top: 9,
    height: 44,
    position: "absolute",
  },
  frameLayout10: {
    height: 88,
    position: "absolute",
  },
  frameLayout9: {
    height: 15,
    overflow: "hidden",
    left: 0,
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    top: 2,
    position: "absolute",
  },
  frameLayout8: {
    height: 64,
    overflow: "hidden",
  },
  frame5Position: {
    height: 26,
    left: 0,
    position: "absolute",
  },
  frameLayout7: {
    height: 34,
    overflow: "hidden",
    position: "absolute",
  },
  frame7Position: {
    left: 6,
    top: 0,
  },
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  userFillIconLayout: {
    height: 33,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameLayout6: {
    height: 29,
    width: 150,
    position: "absolute",
  },
  forPayersTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameLayout4: {
    height: 72,
    overflow: "hidden",
    position: "absolute",
  },
  framePosition4: {
    left: "7.92%",
    width: "92.08%",
    right: "0%",
  },
  frameBorder: {
    height: 40,
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_10xs,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  usdcTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  framePosition3: {
    width: 230,
    height: 72,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameLayout3: {
    width: 23,
    position: "absolute",
  },
  framePosition2: {
    height: 17,
    overflow: "hidden",
    top: 0,
    left: 0,
    position: "absolute",
  },
  framePosition1: {
    height: 125,
    top: 0,
    position: "absolute",
  },
  frame25Layout: {
    width: 390,
    left: 0,
  },
  frameLayout2: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  farmsPosition: {
    top: 35,
    position: "absolute",
  },
  fillIconLayout: {
    height: 35,
    width: 35,
    top: 0,
  },
  frame28Layout: {
    height: 49,
    position: "absolute",
  },
  parentPosition: {
    height: 48,
    top: 1,
    position: "absolute",
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
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  viewPosition: {
    left: 10,
    position: "absolute",
  },
  frameLayout1: {
    width: 47,
    height: 48,
    position: "absolute",
  },
  framePosition: {
    width: 362,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 328,
    height: 72,
    top: 0,
    position: "absolute",
  },
  inputLayout: {
    width: 335,
    top: 0,
    height: 44,
    position: "absolute",
  },
  image1Icon: {
    width: 48,
    height: 44,
    left: 0,
  },
  image2Icon: {
    left: 126,
    width: 99,
    height: 44,
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    width: 58,
    top: 0,
    left: 0,
  },
  frame: {
    left: 165,
    width: 225,
    overflow: "hidden",
    top: 0,
  },
  image1Parent: {
    width: 390,
    left: 0,
    top: 33,
  },
  businessBalance: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  frame3: {
    width: 101,
    top: 0,
    position: "absolute",
  },
  frame2: {
    width: 128,
    top: 0,
    position: "absolute",
  },
  eyeIcon: {
    left: 136,
    width: 13,
    height: 13,
  },
  h: {
    left: 69,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  arrowDropUpIcon: {
    width: 24,
    height: 24,
    left: 0,
  },
  text: {
    left: 21,
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  frame5: {
    width: 57,
    overflow: "hidden",
    top: 0,
  },
  hParent: {
    top: 38,
    width: 81,
  },
  text1: {
    fontSize: FontSize.size_9xl,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    left: 0,
  },
  frameChild: {
    height: "47.06%",
    width: "3.49%",
    top: "26.47%",
    bottom: "26.47%",
    left: "96.51%",
    right: "0%",
  },
  frame7: {
    width: 172,
    height: 34,
    overflow: "hidden",
    position: "absolute",
  },
  frame6: {
    width: 178,
    top: 0,
    left: 0,
  },
  frame4: {
    top: 24,
    left: -9,
    width: 178,
    position: "absolute",
  },
  frameGroup: {
    left: 20,
    width: 178,
    top: 0,
  },
  frame1: {
    width: "50.77%",
    right: "49.23%",
    left: "0%",
    top: 110,
    overflow: "hidden",
  },
  forPayees: {
    top: 7,
    left: 187,
    color: Color.colorDarkgray_400,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_81xl,
    height: 29,
    width: 150,
    top: 0,
    left: 0,
  },
  forPayers: {
    left: 40,
    top: 6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frame11: {
    left: 2,
    top: 1,
    overflow: "hidden",
  },
  forPayeesParent: {
    top: -1,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    width: 302,
    borderWidth: 1,
    borderStyle: "solid",
    height: 33,
    borderRadius: Border.br_81xl,
    left: 29,
  },
  frame10: {
    width: 330,
    height: 31,
    overflow: "hidden",
    top: 0,
    left: 0,
    position: "absolute",
  },
  monthly: {
    left: 7,
    top: 12,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    textAlign: "left",
    position: "absolute",
  },
  chevronIcon: {
    height: "10%",
    width: "11.46%",
    top: "47.5%",
    right: "11.46%",
    bottom: "42.5%",
    left: "77.08%",
    opacity: 0.8,
  },
  frame15: {
    width: "28.49%",
    left: "71.51%",
    top: 32,
    right: "0%",
  },
  image13Icon: {
    top: 41,
    height: 23,
    left: 0,
  },
  frame17: {
    left: 162,
    height: 64,
    overflow: "hidden",
    top: 0,
  },
  enterAnAmount: {
    fontSize: FontSize.size_sm,
    left: 29,
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  frame18: {
    width: 224,
  },
  enterAmount: {
    left: 3,
    top: 12,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  usdc: {
    left: 105,
    top: 12,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    textAlign: "left",
    position: "absolute",
  },
  frame19: {
    width: "64.78%",
    right: "35.22%",
    top: 32,
    left: "0%",
  },
  frame16: {
    overflow: "hidden",
  },
  frame14: {
    height: 72,
    overflow: "hidden",
    position: "absolute",
    top: 0,
  },
  frame13: {
    top: 161,
    width: 366,
    left: 0,
  },
  frame21: {
    width: 189,
  },
  enterJobTitle: {
    left: 15,
    top: 6,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frame23: {
    top: 53,
    right: "0%",
    left: "0%",
    width: "100%",
  },
  frame24: {
    width: "99.41%",
    right: "0.59%",
    height: 40,
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_10xs,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    fontSize: FontSize.size_sm,
    left: "0%",
    top: 0,
  },
  frame22: {
    width: 337,
    height: 93,
    top: 32,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  frameView: {
    left: "7.92%",
    width: "92.08%",
    right: "0%",
  },
  frame20: {
    width: 366,
    left: 0,
    overflow: "hidden",
  },
  frame12: {
    top: 71,
    height: 233,
    right: "0%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  frame9: {
    width: "93.85%",
    right: "6.15%",
    height: 304,
    left: "0%",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  frameInner: {
    top: 0,
  },
  home: {
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame27: {
    height: 15,
    overflow: "hidden",
    left: 0,
    width: 58,
  },
  homeFillIcon: {
    left: 0,
    position: "absolute",
  },
  frameParent1: {
    top: 19,
    left: 24,
    height: 50,
    width: 35,
    position: "absolute",
  },
  frame26: {
    overflow: "hidden",
    top: 0,
  },
  darhboardChild: {
    bottom: "55.43%",
    top: "13.71%",
  },
  darhboardItem: {
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
  darhboardInner: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleView: {
    bottom: "55.43%",
    top: "13.71%",
  },
  farms: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  darhboardParent: {
    width: 35,
    left: 0,
  },
  refresh2Icon: {
    height: 35,
    width: 35,
    top: 0,
  },
  exchangeParent: {
    left: 72,
    width: 55,
  },
  frame29: {
    left: 319,
    overflow: "hidden",
    top: 0,
  },
  account: {
    left: -1,
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    top: 33,
    position: "absolute",
  },
  userFillIcon: {
    width: 35,
    left: 6,
    top: 0,
  },
  frameParent2: {
    left: 223,
    top: 1,
  },
  groupFillIcon: {
    left: 8,
    position: "absolute",
  },
  business: {
    left: 1,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
  },
  groupFillParent: {
    left: 150,
    width: 50,
    top: 0,
  },
  frame28: {
    top: 20,
    left: 96,
    width: 270,
    overflow: "hidden",
  },
  homeRow: {
    top: 208,
  },
  frame33: {
    left: 260,
    height: 64,
    overflow: "hidden",
    top: 0,
  },
  frame34: {
    width: 139,
  },
  view: {
    top: 12,
  },
  usdc1: {
    left: 119,
    top: 12,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_600,
    textAlign: "left",
    position: "absolute",
  },
  frame35: {
    width: "72.56%",
    right: "27.44%",
    top: 32,
    left: "0%",
  },
  frameParent3: {
    left: 0,
  },
  frame32: {
    left: 29,
    overflow: "hidden",
  },
  frame31: {
    width: 357,
    top: 0,
    left: 0,
  },
  eaInputBox: {
    borderRadius: Border.br_8xs,
    left: 0,
  },
  startHere: {
    top: 13,
    left: 147,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 89,
    height: 18,
  },
  eaInputBoxParent: {
    left: 27,
  },
  frame36: {
    top: 110,
    height: 44,
  },
  frame30: {
    height: 154,
    top: 0,
  },
  frame25: {
    top: 323,
    height: 295,
    overflow: "hidden",
    position: "absolute",
  },
  frame8: {
    top: 226,
    height: 618,
    right: "0%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  frameParent: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame8;
