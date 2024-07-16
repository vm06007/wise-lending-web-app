import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import HOMEROW from "../components/HOMEROW";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const CreditTransactionVariation11 = () => {
  return (
    <View style={styles.creditTransactionVariation2}>
      <View
        style={[
          styles.creditTransactionVariation2Child,
          styles.creditTransactionVariation2ChildLayout,
        ]}
      />
      <Text style={styles.availableToEarn}>Available to earn interest</Text>
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
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-32.png")}
      />
      <GroupComponent1
        prop="$23,000.06"
        vector11={require("../assets/vector-113.png")}
        creditBalance="Credit Balance"
        propTop={106}
        propLeft={25}
      />
      <FrameComponent2
        deposit="Deposit"
        download={require("../assets/download3.png")}
      />
      <FrameComponent1 twoWayArrow={require("../assets/twoway-arrow1.png")} />
      <View style={styles.transactionParent}>
        <View style={[styles.transaction, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo1.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Money transfer
              </Text>
              <Text style={styles.usdc}>3.01 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                1221213****123123123
              </Text>
              <Text style={[styles.usd, styles.usdTypo]}>+3.99 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo1.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Money transfer
              </Text>
              <Text style={styles.usdc}>39.99 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                1221213****123456123
              </Text>
              <Text style={[styles.usd1, styles.usdTypo]}>-40.59 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo1.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Wallet transfer
              </Text>
              <Text style={styles.usdc}>4001.00 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                233132****123123123
              </Text>
              <Text style={[styles.usd1, styles.usdTypo]}>-4,000.59 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo1.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Employee payout
              </Text>
              <Text style={styles.usdc}>2.01 ETH</Text>
              <Text style={[styles.text, styles.textTypo]}>
                4221213****123456123
              </Text>
              <Text style={[styles.usd1, styles.usdTypo]}>-6400.00 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo2.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Money transfer
              </Text>
              <Text style={styles.usdc}>0.67 BTC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                233132****123123123
              </Text>
              <Text style={[styles.usd, styles.usdTypo]}>+40,560.59 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo2.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Automated top-up
              </Text>
              <Text style={styles.usdc}>39.99 USDC</Text>
              <Text style={[styles.usd, styles.usdTypo]}>+40.59 USD →</Text>
              <Text style={[styles.text, styles.textTypo]}>
                233132****123123123
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo2.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Automated top up
              </Text>
              <Text style={styles.usdc}>39.99 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                1221213****123123123
              </Text>
              <Text style={[styles.usd, styles.usdTypo]}>+40.59 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo2.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Crypto transfer-out
              </Text>
              <Text style={styles.usdc}>39.99 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                1221213****123123123
              </Text>
              <Text style={[styles.usd, styles.usdTypo]}>+40.59 USD →</Text>
            </View>
          </View>
        </View>
      </View>
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill2.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill11.png")}
      />
      <Text style={[styles.transactions, styles.textTypo]}>Transactions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  creditTransactionVariation2ChildLayout: {
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
  transactionLayout: {
    width: 341,
    height: 36,
  },
  textLayout: {
    width: 145,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  textTypo: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  usdTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 141,
    textAlign: "right",
    left: 147,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  creditTransactionVariation2Child: {
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
    height: 844,
  },
  availableToEarn: {
    top: 167,
    left: 25,
    width: 201,
    textAlign: "left",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
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
  image3Icon: {
    top: 130,
    left: 22,
    width: 32,
    height: 33,
    position: "absolute",
  },
  ethLogoIcon: {
    width: 36,
    overflow: "hidden",
    height: 36,
  },
  moneyTransfer: {
    top: 21,
    width: 145,
    textAlign: "left",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  usdc: {
    width: 141,
    textAlign: "right",
    left: 147,
    top: 21,
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text: {
    width: 145,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  usd: {
    color: Color.colorSeagreen,
  },
  moneyTransferParent: {
    width: 288,
    marginLeft: 17,
    height: 36,
  },
  ethLogoParent: {
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  transaction: {
    height: 36,
  },
  usd1: {
    color: Color.colorRed,
  },
  transaction1: {
    marginTop: 20,
    height: 36,
  },
  transactionParent: {
    top: 340,
    left: 24,
    position: "absolute",
  },
  transactions: {
    top: 291,
    fontSize: FontSize.size_xl,
    left: 24,
  },
  creditTransactionVariation2: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default CreditTransactionVariation11;
