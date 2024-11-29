import React, { useState, useRef } from "react";
import {
  View,
  Image,
  SafeAreaView,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import IndexStyle from "../styles/index";
import Logo from "../resources/vouch.png";
import { router } from "expo-router";

const VerifyEmailScreen = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [smsPin, setSmsPin] = useState(["", "", "", ""]);
  const [isEmailVerified, setIsEmailVerified] = useState(false); // Tracks the stage
  const inputRefs = useRef([]);

  const handleInputChange = (text, index, type) => {
    if (text.length > 1) {
      text = text.charAt(0); // Limit input to 1 character
    }

    const newCode = type === "email" ? [...code] : [...smsPin];
    newCode[index] = text;
    type === "email" ? setCode(newCode) : setSmsPin(newCode);

    if (text !== "" && index < 3) {
      inputRefs.current[index + 1]?.focus(); // Move to the next input
    }
  };

  const handleBackspace = (text, index) => {
    if (text === "" && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move to the previous input
    }
  };

  const handleSubmitEmailCode = () => {
    const enteredCode = code.join("");
    if (enteredCode.length < 4) {
      Alert.alert(
        "Error",
        "Please enter the complete email verification code."
      );
      return;
    }
    // Simulate email verification success
    setIsEmailVerified(true);
    Alert.alert("Success", `Email verified successfully.`);
  };

  const handleSubmitSmsPin = () => {
    const enteredPin = smsPin.join("");
    if (enteredPin.length < 4) {
      Alert.alert("Error", "Please enter the complete SMS PIN.");
      return;
    }
    // Simulate successful verification
      Alert.alert("Success", `Verification complete.`);
      router.push("/home")
  };

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
              <Text style={IndexStyle.V_CapText}>
                {isEmailVerified ? "Verify Your BVN" : "Verify Your Email"}
              </Text>
            </View>
            <View style={IndexStyle.V_RowView}>
              <Text style={IndexStyle.V_ScapText}>
                {isEmailVerified
                  ? "Enter the PIN sent to your phone."
                  : "We have sent a verification code to the email you submitted."}
              </Text>
            </View>
            <View style={styles.container}>
              <View>
                <Text style={styles.title}>
                  {isEmailVerified
                    ? "Enter SMS PIN"
                    : "Enter Verification Code"}
                </Text>
                <View style={styles.inputContainer}>
                  {(isEmailVerified ? smsPin : code).map((_, index) => (
                    <TextInput
                      key={index}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      style={styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={isEmailVerified ? smsPin[index] : code[index]}
                      onChangeText={(text) =>
                        handleInputChange(
                          text,
                          index,
                          isEmailVerified ? "sms" : "email"
                        )
                      }
                      onKeyPress={({ nativeEvent }) =>
                        nativeEvent.key === "Backspace"
                          ? handleBackspace("", index)
                          : null
                      }
                    />
                  ))}
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={
                  isEmailVerified ? handleSubmitSmsPin : handleSubmitEmailCode
                }
              >
                <Text style={styles.buttonText}>
                  {isEmailVerified ? "Verify SMS PIN" : "Verify Email Code"}
                </Text>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={IndexStyle.V_Kav}>
              <View style={IndexStyle.V_InpGap}></View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default React.memo(VerifyEmailScreen);
