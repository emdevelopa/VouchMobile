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
import { Link } from "expo-router";

const SignIn_Screen = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaView style={IndexStyle.V_SafeArea}>
        <View style={IndexStyle.V_Cover}>
          <View style={IndexStyle.V_CenView}>
            <Image source={Logo} style={IndexStyle.V_Logo} />
          </View>
          <View style={IndexStyle.V_ScrollView}>
            <View style={IndexStyle.V_RowView}>
              <Text style={IndexStyle.V_CapText}>Welcome Back!</Text>
            </View>
            <View style={IndexStyle.V_RowView}>
              <Text style={IndexStyle.V_ScapText}>Sign in to your account</Text>
            </View>

            <KeyboardAvoidingView style={IndexStyle.V_Kav}>
              <View style={IndexStyle.V_InpGap}></View>

              <View style={IndexStyle.V_InpView}>
                <Text style={IndexStyle.V_InpText}>Phone number*</Text>
                <TextInput
                  style={IndexStyle.V_InpFull}
                  placeholder="Enter Phone number"
                  placeholderTextColor="#7b7b7b"
                />
              </View>

              <View style={IndexStyle.V_InpView}>
                <Text style={IndexStyle.V_InpText}>Pin*</Text>
                <TextInput
                  style={IndexStyle.V_InpFull}
                  placeholder="XXXXXX"
                  placeholderTextColor="#7b7b7b"
                />
              </View>

              <View style={IndexStyle.V_InpView}>
                <Link href={"/home"} style={IndexStyle.V_Btn}>
                  <Text style={IndexStyle.V_BtnTxt}>Sign In</Text>
                </Link>

                <Link href={"/"} style={IndexStyle.V_RBtn}>
                  <Text style={IndexStyle.V_RBtnTxt}>Create an account</Text>
                </Link>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default React.memo(SignIn_Screen);
