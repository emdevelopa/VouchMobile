import React from "react";
import { View,Image,SafeAreaView,TextInput,Text,KeyboardAvoidingView,TouchableOpacity} from "react-native";
import { StatusBar } from "expo-status-bar";
import IndexStyle from "../styles/index";
import Logo from "../resources/vouch.png";
import { Link } from "expo-router";

const Repayment_Screen = () => {
    return(
        <>
            <StatusBar backgroundColor="#fff"/>
            <SafeAreaView style={IndexStyle.V_SafeArea}>
                <View style={IndexStyle.V_Cover}>
                    <View style={IndexStyle.V_CenView}>
                        <Image source={Logo} style={IndexStyle.V_Logo}/>
                    </View>
                    <View style={IndexStyle.V_ScrollView}>
                        <View style={IndexStyle.V_RowView}>
                            <Text style={IndexStyle.V_CapText}>History</Text>
                        </View>
                        <View style={IndexStyle.V_RowView}>
                            <Text style={IndexStyle.V_ScapText}>Track the payments you've made</Text>
                        </View>

                        <KeyboardAvoidingView style={IndexStyle.V_Kav}>
                            <View style={IndexStyle.V_InpGap}></View>

                            <View style={IndexStyle.V_InpView}>
                                <Text style={IndexStyle.V_InpText_Disabled}>Amount Due</Text>
                                <TextInput style={IndexStyle.V_InpFull_Disabled} placeholder="$575" placeholderTextColor='#7b7b7b' value="$575"/>
                            </View>

                            <View style={IndexStyle.V_InpView}>
                                <Text style={IndexStyle.V_InpText_Disabled}>Due Date</Text>
                                <TextInput style={IndexStyle.V_InpFull_Disabled} placeholder="1st of Next Month" placeholderTextColor='#7b7b7b' value="1st, September 2024"/>
                            </View>

                            <View style={IndexStyle.V_InpView}>
                                <Link href={'/'} style={IndexStyle.V_Btn}>
                                    <Text style={IndexStyle.V_BtnTxt}>Track Payment</Text>
                                </Link>
                            </View>
                        </KeyboardAvoidingView>

                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}
export default React.memo(Repayment_Screen);