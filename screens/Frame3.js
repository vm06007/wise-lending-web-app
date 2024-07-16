import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import WalletOptions from "../components/WalletOptions";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";

const Frame31 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginscreen}>
      <View style={styles.loginscreenChild} />
      <Text
        style={[styles.thousandsOfPeopleContainer, styles.containerFlexBox]}
      >
        <Text
          style={styles.thousandsOfPeople}
        >{`Thousands of people trust `}</Text>
        <Text style={styles.wiseTypo}>Wise</Text>
        <Text style={styles.thousandsOfPeople}>{` to buy crypto, grow 
their passive income, borrow funds and spend with rewards on every purchase.`}</Text>
      </Text>
      <Text style={[styles.theWiseChoiceContainer, styles.containerFlexBox]}>
        <Text style={styles.wiseTypo}>{`The `}</Text>
        <Text style={styles.wise1Typo}>Wise</Text>
        <Text style={styles.wiseTypo}>{` choice for your digital assets
`}</Text>
      </Text>
      <View style={[styles.newaccountbuttonParent, styles.parentSpaceBlock]}>
        <Pressable style={styles.newaccountbutton}>
          <Text style={[styles.newAccount, styles.loginTypo]}>
            New Account?
          </Text>
        </Pressable>
        <Pressable style={styles.forgotpassword}>
          <Text style={[styles.newAccount, styles.loginTypo]}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>
      <View style={[styles.loginscreenInner, styles.loginscreenInnerPosition]}>
        <View style={[styles.walletParent, styles.parentSpaceBlock]}>
          <WalletOptions
            wallet={require("../assets/wallet.png")}
            wallet1="Rainbow"
            showRecent
          />
          <WalletOptions
            wallet={require("../assets/wallet1.png")}
            wallet1="Meta mask"
            showRecent
          />
          <WalletOptions
            wallet={require("../assets/wallet2.png")}
            wallet1="Coinbase"
            showRecent={false}
          />
          <WalletOptions
            wallet={require("../assets/wallet3.png")}
            wallet1="WalletConnect"
            showRecent={false}
          />
        </View>
      </View>
      <View style={[styles.emailgroup, styles.emailgroupPosition]}>
        <View style={[styles.emailplaceholder, styles.passwordFieldLayout]}>
          <View style={[styles.eaInputBox, styles.inputBorder]} />
          <TextInput
            style={[styles.enterAnEmail, styles.enterTypo]}
            placeholder="Enter an email"
            placeholderTextColor="rgba(82, 88, 95, 0.8)"
          />
        </View>
        <Text style={[styles.emailAddress, styles.loginTypo]}>
          Email Address
        </Text>
      </View>
      <View style={[styles.passwordgroup, styles.eaInputBox1Layout]}>
        <View style={[styles.passwordField, styles.eaInputBox1Layout]}>
          <View style={[styles.eaInputBox1, styles.eaInputBox1Layout]} />
          <TextInput
            style={[styles.enterAPassword, styles.enterTypo]}
            placeholder="Enter a password"
            placeholderTextColor="rgba(82, 88, 95, 0.8)"
          />
          <Image
            style={styles.eyeIcon}
            contentFit="cover"
            source={require("../assets/eye1.png")}
          />
        </View>
        <Text style={[styles.emailAddress, styles.loginTypo]}>Password</Text>
      </View>
      <TouchableHighlight
        style={[styles.loginbutton, styles.emailgroupPosition]}
        underlayColor="#fff"
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HOME1" })
        }
      >
        <>
          <Image
            style={[styles.eaInputBox2, styles.eaInputBox2Position]}
            contentFit="cover"
            source={require("../assets/ea-input-box11.png")}
          />
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </>
      </TouchableHighlight>
      <Image
        style={styles.logoIcon}
        contentFit="contain"
        source={require("../assets/Logo.png")}
      />
      <View style={[styles.loginscreenItem, styles.eaInputBox2Position]} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    textAlign: "center",
    color: Color.colorDimgray_100,
    width: "88.97%",
    position: "absolute",
  },
  parentSpaceBlock: {
    padding: Padding.p_base,
    flexDirection: "row",
  },
  loginTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  loginscreenInnerPosition: {
    marginLeft: -195,
    left: "50%",
    position: "absolute",
  },
  emailgroupPosition: {
    left: "4.62%",
    right: "5.64%",
    width: "89.74%",
    position: "absolute",
  },
  passwordFieldLayout: {
    height: 40,
    top: 32,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    height: 40,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  enterTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 12,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  eaInputBox1Layout: {
    width: 350,
    position: "absolute",
  },
  eaInputBox2Position: {
    overflow: "hidden",
    position: "absolute",
  },
  loginscreenChild: {
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  thousandsOfPeople: {
    fontFamily: FontFamily.interRegular,
  },
  wiseTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  thousandsOfPeopleContainer: {
    top: 301,
    left: "5.9%",
    height: 58,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_100,
    width: "88.97%",
  },
  wise1Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  theWiseChoiceContainer: {
    top: 254,
    left: "5.64%",
    fontSize: FontSize.size_lg,
    height: 22,
    color: Color.colorDimgray_100,
    width: "88.97%",
  },
  newAccount: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    left: 0,
    top: 0,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  newaccountbutton: {
    width: 99,
    height: 17,
  },
  forgotpassword: {
    width: 122,
    marginLeft: 40,
    height: 17,
  },
  newaccountbuttonParent: {
    top: 649,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    width: 386,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  walletParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  loginscreenInner: {
    top: 685,
    height: 149,
    paddingTop: 30,
    left: "50%",
    width: 390,
  },
  eaInputBox: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  enterAnEmail: {
    left: "3.71%",
  },
  emailplaceholder: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  emailAddress: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    left: 0,
    top: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  emailgroup: {
    top: 385,
    height: 72,
  },
  eaInputBox1: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    height: 40,
    backgroundColor: Color.colorWhite,
    top: 0,
    left: 0,
    width: 350,
  },
  enterAPassword: {
    left: 13,
  },
  eyeIcon: {
    left: 325,
    width: 17,
    top: 12,
    height: 17,
    position: "absolute",
  },
  passwordField: {
    height: 40,
    top: 32,
    left: 0,
    width: 350,
  },
  passwordgroup: {
    top: 479,
    left: 18,
    height: 72,
  },
  eaInputBox2: {
    borderRadius: Border.br_8xs,
    maxWidth: "100%",
    height: 44,
    left: "0%",
    right: "0%",
    width: "100%",
    top: 0,
    overflow: "hidden",
  },
  login: {
    marginLeft: -17,
    top: 13,
    color: Color.colorWhite,
    width: 38,
    height: 19,
    left: "50%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  loginbutton: {
    top: 587,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 44,
  },
  logoIcon: {
    marginLeft: -75,
    top: 65,
    width: 150,
    height: 150,
    left: "50%",
    position: "absolute",
  },
  loginscreenItem: {
    top: -21,
    left: -7,
    width: 100,
    height: 100,
  },
  loginscreen: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame31;
