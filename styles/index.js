import { StyleSheet } from "react-native";
const IndexStyle = StyleSheet.create({
    V_SafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    V_Cover: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 30
    },
    V_CenView: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    V_Logo:{
        width: 150,
        height: 100,
        resizeMode: 'contain'
    },
    V_ScrollView: {
        width: '100%',
        height: '100%',
    },
    V_CentMargin: {
        width: '100%',
        height: '10%',
        marginTop: '100%'
    },
    V_RowView: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    V_CentView: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    V_CapText: {
        fontFamily: 'Lucida Sans',
        fontSize: 35,
        fontWeight: 900,
        color: '#202020'
    },
    V_ScapText: {
        fontFamily: 'Lucida Sans',
        fontSize: 20,
        fontWeight: 500,
        color: '#202020'
    },
    V_Kav:{
        width: '100%',
        height: 'auto'
    },
    V_InpGap: {
        width: '100%',
        height: 30,
    },
    V_VerView:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%',
        marginBottom: '70%'
    },
    V_VerLogo:{
        width: 200,
        height: 100,
        resizeMode: 'contain'
    },
    V_InpView:{
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 10,
        marginBottom: 5
        // backgroundColor: 'red'
    },
    V_InpText: {
        fontFamily: 'Lucida Sans',
        fontSize: 12,
        fontWeight: 500,
        color: '#005c4b',
        marginLeft: 5
    },
    V_InpFull: {
        fontFamily: 'Lucida Sans',
        borderColor: '#aebac1',
        borderWidth: 2,
        borderRadius: 5,
        width: '100%',
        height: 55,
        fontSize: 15,
        fontWeight: 500,
        paddingHorizontal: 20
    },


    V_InpText_Disabled: {
        fontFamily: 'Lucida Sans',
        fontSize: 12,
        fontWeight: 500,
        color: '#494949',
        marginLeft: 5
    },
    V_InpFull_Disabled: {
        fontFamily: 'Lucida Sans',
        borderColor: 'lightgrey',
        borderWidth: 2,
        borderRadius: 5,
        width: '100%',
        height: 55,
        fontSize: 15,
        fontWeight: 500,
        paddingHorizontal: 20,
        backgroundColor: 'lightgrey',
        color: '#494949'
    },
    V_Btn: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#008069',
        fontWeight: 800,
        fontSize: 15,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 20,
    },
    V_BtnTxt: {
        fontFamily: 'Lucida Sans',
        fontSize: 16,
        fontWeight: 600,
        color: '#FFF',
    },
    V_RBtn: {
        width: '100%',
        height: 'auto',
        borderWidth: 2,
        borderColor: '#008069',
        backgroundColor: '#FFF',
        fontWeight: 800,
        fontSize: 15,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 20
    },
    V_RBtnTxt: {
        fontFamily: 'Lucida Sans',
        fontSize: 16,
        fontWeight: 600,
        color: '#008069',
    }
});
export default IndexStyle;