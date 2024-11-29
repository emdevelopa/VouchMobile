import React from "react";
import {
  View,
  Image,
  SafeAreaView,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import IndexStyle from "../styles/index";
import Logo from "../resources/vouch.png";
import Verify from "../resources/verify.gif";
import { Link } from "expo-router";

const Confirmed_Screen = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaView style={IndexStyle.V_SafeArea}>
        <View style={IndexStyle.V_Cover}>
          <View style={IndexStyle.V_CenView}>
            <Image source={Logo} style={IndexStyle.V_Logo} />
          </View>
          <View style={IndexStyle.V_ScrollView}>
            <View style={IndexStyle.V_CentView}>
              <Text style={IndexStyle.V_CapText}>Merchant Paid</Text>
            </View>
            <View style={IndexStyle.V_CentView}>
              <Text style={IndexStyle.V_ScapText}>
                The merchant has been paid #2000
              </Text>
            </View>
            <KeyboardAvoidingView style={IndexStyle.V_Kav}>
              <View style={IndexStyle.V_VerView}>
                <Image source={Verify} style={IndexStyle.V_VerLogo} />
              </View>
              <View style={IndexStyle.V_InpView}>
                <Link href={"/repayment"} style={IndexStyle.V_Btn}>
                  <Text style={IndexStyle.V_BtnTxt}>Done</Text>
                </Link>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default React.memo(Confirmed_Screen);
