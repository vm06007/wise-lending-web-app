import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Frame from "../components/Frame";
import Frame1 from "../components/Frame1";
import Frame2 from "../components/Frame2";
import Frame3 from "../components/Frame3";
import Frame4 from "../components/Frame4";
import Frame5 from "../components/Frame5";
import Frame6 from "../components/Frame6";
import Frame7 from "../components/Frame7";
import { Image } from "expo-image";
import HOMEROW from "../components/HOMEROW";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreditTransactionVariation1 = () => {
  const [transactionFlatListData, setTransactionFlatListData] = useState([
    <Frame />,
  ]);
  const [transactionFlatList1Data, setTransactionFlatList1Data] = useState([
    <Frame1 />,
  ]);
  const [transactionFlatList2Data, setTransactionFlatList2Data] = useState([
    <Frame2 />,
  ]);
  const [transactionFlatList3Data, setTransactionFlatList3Data] = useState([
    <Frame3 />,
  ]);
  const [transactionFlatList4Data, setTransactionFlatList4Data] = useState([
    <Frame4 />,
  ]);
  const [transactionFlatList5Data, setTransactionFlatList5Data] = useState([
    <Frame5 />,
  ]);
  const [transactionFlatList6Data, setTransactionFlatList6Data] = useState([
    <Frame6 />,
  ]);
  const [transactionFlatList7Data, setTransactionFlatList7Data] = useState([
    <Frame7 />,
  ]);

  return (
    <View style={styles.creditTransactionVariation}>
      <View style={[styles.eaInputBox, styles.eaInputBoxBg]} />
      <View
        style={[
          styles.creditTransactionVariationChild,
          styles.creditTransactionVariationChildLayout,
        ]}
      />
      <View style={styles.transactionParent}>
        <FlatList
          style={styles.transactionLayout}
          data={transactionFlatListData}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.transaction1, styles.transactionLayout]}
          data={transactionFlatList1Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.transaction1, styles.transactionLayout]}
          data={transactionFlatList2Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.transaction1, styles.transactionLayout]}
          data={transactionFlatList3Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.transaction1, styles.transactionLayout]}
          data={transactionFlatList4Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.transaction1, styles.transactionLayout]}
          data={transactionFlatList5Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.transaction1, styles.transactionLayout]}
          data={transactionFlatList6Data}
          renderItem={({ item }) => item}
        />
        <FlatList
          style={[styles.transaction1, styles.transactionLayout]}
          data={transactionFlatList7Data}
          renderItem={({ item }) => item}
        />
      </View>
      <Text style={[styles.transactions, styles.transactionsFlexBox]}>
        Transactions
      </Text>
      <Text style={[styles.availableToEarn, styles.transactionsFlexBox]}>
        Available to earn interest
      </Text>
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
        source={require("../assets/image-31.png")}
      />
      <HOMEROW
        rectangle390={require("../assets/rectangle-3901.png")}
        homeFillIconHomeFill={require("../assets/home-fill2.png")}
        farms="Farms"
        refresh2IconRefresh2={require("../assets/refresh-21.png")}
        groupFillIconGroupFill={require("../assets/group-fill11.png")}
      />
      <GroupComponent1
        prop="$23,000.06"
        vector11={require("../assets/vector-1111.png")}
        creditBalance="Credit Balance"
        propTop={106}
        propLeft={25}
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
  eaInputBoxBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  creditTransactionVariationChildLayout: {
    width: 390,
    left: 0,
  },
  transactionLayout: {
    maxWidth: 341,
    width: 341,
    flex: 1,
  },
  transactionsFlexBox: {
    textAlign: "left",
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
  eaInputBox: {
    top: 431,
    left: 63,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    width: 161,
    height: 93,
  },
  creditTransactionVariationChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    height: 844,
  },
  transaction1: {
    marginTop: 20,
  },
  transactionParent: {
    top: 340,
    left: 24,
    position: "absolute",
  },
  transactions: {
    top: 291,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_300,
    left: 24,
  },
  availableToEarn: {
    top: 167,
    left: 25,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_400,
    width: 201,
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
  image3Icon: {
    top: 130,
    left: 22,
    width: 32,
    height: 33,
    position: "absolute",
  },
  creditTransactionVariation: {
    width: "100%",
    height: 844,
    flex: 1,
  },
});

export default CreditTransactionVariation1;
