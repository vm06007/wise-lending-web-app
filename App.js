const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HOME from "./screens/HOME";
import Payouts1 from "./screens/Payouts1";
import CreditTransactionVariation from "./screens/CreditTransactionVariation";
import BusinessHomePayers from "./screens/BusinessHomePayers";
import BusinessHomePayersUpdate from "./screens/BusinessHomePayersUpdate";
import Group from "./screens/Group";
import Frame from "./components/Frame";
import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame5 from "./components/Frame5";
import Frame6 from "./components/Frame6";
import Frame7 from "./components/Frame7";
import Frame8 from "./screens/Frame";
import Frame11 from "./screens/Frame1";
import Frame21 from "./screens/Frame2";
import BusinessHome from "./screens/BusinessHome";
import Frame61 from "./screens/Frame6";
import Frame71 from "./screens/Frame7";
import CreditTransactionVariation1 from "./screens/CreditTransactionVariation";
import CreditTransactionVariation11 from "./screens/CreditTransactionVariation1";
import CreditTransactionMinorButto from "./screens/CreditTransactionMinorButto";
import PotentialVariation from "./screens/PotentialVariation";
import BusinessHomeVariation1 from "./screens/BusinessHomeVariation1";
import Frame31 from "./screens/Frame3";
import Payouts from "./screens/Payouts";
import CreditOriginal from "./screens/CreditOriginal";
import Frame51 from "./screens/Frame5";
import BusinessHomeVariation from "./screens/BusinessHomeVariation";
import CreditOriginal1 from "./screens/CreditOriginal1";
import HOME1 from "./screens/HOME1";
import ExchangeHome from "./screens/ExchangeHome";
import Frame81 from "./screens/Frame8";
import Frame41 from "./screens/Frame4";
import Group2 from "./components/Group2";
import Group3 from "./components/Group3";
import Group4 from "./components/Group4";
import Group5 from "./components/Group5";
import HomeButton from "./components/HomeButton";
import CreditOriginal11 from "./screens/CreditOriginal1";
import ExchangeButton from "./components/ExchangeButton";
import BusinessHomePayers1 from "./screens/BusinessHomePayers1";
import AccountsHome from "./screens/AccountsHome";
import Group6 from "./components/Group6";
import FarmsButton from "./components/FarmsButton";
import BusinessButton from "./components/BusinessButton";
import BusinessButton1 from "./components/BusinessButton1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Group6 />,
    <FarmsButton />,
    <ExchangeButton />,
    <BusinessButton />,
    <BusinessButton1 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <HomeButton />,
    <Group2 />,
    <Group3 />,
    <Group4 />,
    <Group5 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              height: 87,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="HOME1"
        component={HOME1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CreditOriginal11"
        component={CreditOriginal11}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ExchangeHome"
        component={ExchangeHome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="BusinessHomePayers1"
        component={BusinessHomePayers1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AccountsHome"
        component={AccountsHome}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Payouts1"
              component={Payouts1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditTransactionVariation"
              component={CreditTransactionVariation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessHomePayers"
              component={BusinessHomePayers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessHomePayersUpdate"
              component={BusinessHomePayersUpdate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={Frame8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame11"
              component={Frame11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame21"
              component={Frame21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessHome"
              component={BusinessHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame61"
              component={Frame61}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame71"
              component={Frame71}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditTransactionVariation1"
              component={CreditTransactionVariation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditTransactionVariation11"
              component={CreditTransactionVariation11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditTransactionMinorButto"
              component={CreditTransactionMinorButto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PotentialVariation"
              component={PotentialVariation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessHomeVariation1"
              component={BusinessHomeVariation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame31"
              component={Frame31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payouts"
              component={Payouts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditOriginal"
              component={CreditOriginal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame51"
              component={Frame51}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessHomeVariation"
              component={BusinessHomeVariation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditOriginal1"
              component={CreditOriginal1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame81"
              component={Frame81}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame41"
              component={Frame41}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
