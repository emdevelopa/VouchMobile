const { StyleSheet } = require("react-native");

const OnboardingStyle = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  headerContainer: {
    gap: 14,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 900,
    color: "#202020",
    fontFamily: "PTSans_400Regular",
  },

  subText: {
    fontSize: 20,
    color: "grey",
    width: 400,
  },
  screenContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  screen: { width: 270, height: 530, resizeMode: "contain" },
  btn: {
    borderRadius: 30,
    paddingVertical: 20,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
    btnCont: {
      marginTop:18,
      gap:10
  },
});

export default OnboardingStyle;
