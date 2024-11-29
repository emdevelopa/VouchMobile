import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import IndexStyle from "../styles/index";
import OnboardingStyle from "../styles/onboarding";
import screen from "../resources/screen.png";
import { Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const { width } = Dimensions.get("window");
const SignIn_Screen = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [isAppReady, setIsAppReady] = useState(false);

  // Animated values for horizontal movement
  const logoTranslateX = useRef(new Animated.Value(0)).current; // Initial logo
  const logoWithNameTranslateX = useRef(new Animated.Value(width)).current; // Logo with name starts off-screen

  useEffect(() => {
    // Run the animation
    Animated.parallel([
      // Slide the initial logo slightly to the left
      Animated.timing(logoTranslateX, {
        toValue: -50, // Move 50 pixels to the left
        duration: 1000,
        useNativeDriver: true,
      }),
      // Slide the logo with name in from the right
      Animated.timing(logoWithNameTranslateX, {
        toValue: 0, // Move to its final position
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Once animation is done, navigate to the main app
      setTimeout(() => {
        setIsAppReady(true);
      }, 1000);
    });
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (isAppReady) {
    return (
      <>
        <StatusBar backgroundColor="#fff" />
        <SafeAreaView style={IndexStyle.V_SafeArea}>
          <View style={OnboardingStyle.container}>
            <View style={OnboardingStyle.headerContainer}>
              <Text style={OnboardingStyle.headerText}>Welcome to Vouch</Text>
              <Text style={OnboardingStyle.subText}>
                Empowering Your Financial Journey with Vouch – Seamlessly Manage
                Transactions, Services, and More.
              </Text>
            </View>
            <View style={OnboardingStyle.screenContainer}>
              <Image source={screen} style={OnboardingStyle.screen} />
            </View>
            <View style={OnboardingStyle.btnCont}>
              <TouchableOpacity
                style={[OnboardingStyle.btn, { backgroundColor: "#011F14" }]}
              >
                <Text style={OnboardingStyle.btnText}>I'm new to the app</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  OnboardingStyle.btn,
                  {
                    backgroundColor: "white",
                    borderColor: "#011F14",
                    borderWidth: 1,
                  },
                ]}
              >
                <Text style={[OnboardingStyle.btnText, { color: "#011F14" }]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Initial Code UI for Register */}
          <View style={IndexStyle.V_Cover}>
            {/* <View style={IndexStyle.V_CenView}>
            </View>
            <View style={IndexStyle.V_ScrollView}>
              <View style={IndexStyle.V_RowView}>
                <Text style={IndexStyle.V_CapText}>Get Started With Vouch</Text>
              </View>
              <View style={IndexStyle.V_RowView}>
                <Text style={IndexStyle.V_ScapText}>
                  Create an Account today account
                </Text>
              </View>

              <KeyboardAvoidingView style={IndexStyle.V_Kav}>
                <View style={IndexStyle.V_InpGap}></View>
                <View style={IndexStyle.V_InpView}>
                  <Text style={IndexStyle.V_InpText}>Full Name*</Text>
                  <TextInput
                    style={IndexStyle.V_InpFull}
                    placeholder="John Doe"
                    placeholderTextColor="#7b7b7b"
                  />
                </View>
                <View style={IndexStyle.V_InpView}>
                  <Text style={IndexStyle.V_InpText}>Email*</Text>
                  <TextInput
                    style={IndexStyle.V_InpFull}
                    placeholder="user@examplemail.com"
                    placeholderTextColor="#7b7b7b"
                  />
                </View>
                <View style={IndexStyle.V_InpView}>
                  <Text style={IndexStyle.V_InpText}>BVN*</Text>
                  <TextInput
                    style={IndexStyle.V_InpFull}
                    placeholder="01223456789"
                    placeholderTextColor="#7b7b7b"
                  />
                </View>
                <View style={IndexStyle.V_InpView}>
                  <Text style={IndexStyle.V_InpText}>Phone Number*</Text>
                  <TextInput
                    style={IndexStyle.V_InpFull}
                    placeholder="0819 999 9999"
                    placeholderTextColor="#7b7b7b"
                  />
                </View>

                <View style={IndexStyle.V_InpView}>
                  <Link href={"/verifyemail"} style={IndexStyle.V_Btn}>
                    <Text style={IndexStyle.V_BtnTxt}>Register</Text>
                  </Link>

                  <Link href={"/login"} style={IndexStyle.V_RBtn}>
                    <Text style={IndexStyle.V_RBtnTxt}>
                      Already have an account sign in here
                    </Text>
                  </Link>
                </View>
              </KeyboardAvoidingView>
            </View> */}
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <View style={styles.splashContainer}>
      {/* Initial logo */}
      <Animated.Image
        source={require("../resources/logo.png")}
        style={[styles.logo, { transform: [{ translateX: logoTranslateX }] }]}
      />
      {/* Logo with name */}
      <Animated.Image
        source={require("../resources/logo2.png")}
        style={[
          styles.logoWithName,
          { transform: [{ translateX: logoWithNameTranslateX }] },
        ]}
      />
    </View>
  );
};

export default React.memo(SignIn_Screen);

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#011F14", // Adjust as needed
    flexDirection: "row", // Align images horizontally
  },
  logo: {
    // backgroundColor: "blue",
    marginRight: -60, // Space between the two images
  },
  logoWithName: {
    // backgroundColor: "red",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
