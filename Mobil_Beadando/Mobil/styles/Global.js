import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  // SafeAreaView
  container:{
    flex: 1,
    flexDirection: 'column',
    paddingTop: 25,
  },

  // Separator
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  // HomeScceen
  mainTitleText:{
    fontSize: 40,
    textAlign: 'center',
    color: 'red',
  },
  secondTitleStyle:{
    fontSize: 40,
    textAlign: 'center',
    color: 'red',
  },
  textStyles:{
    fontSize: 35,
    color: 'red',
    paddingBottom: 20,
  },
  headerImageStyle: {
    flex: 1,
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoImage:{
    alignSelf: 'center',
    borderRadius: 50,
  },
  bodyImageStyle: {
    flex: 1,
    height: 800,
    resizeMode: 'cover',
  },

  // DataScreen
  titleText: {
    fontSize: 60,
    textAlign: 'center',
  },
  exTitle: {
    fontSize: 35,
    textAlign: 'left',
    textDecorationLine: "underline",
    paddingLeft: 15,
  },
  LeirText: {
    fontSize: 25,
    textAlign: 'justify',
    paddingLeft: 15,
    paddingRight: 15,
  },
  PaddingText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'red',
  },
  korAdat: {
    fontSize: 25,
    paddingLeft: 15,
  },
  mainTitleImageStyle: {
    flex: 1,
    height: 70,
    resizeMode: 'cover',
  },

  // GameScreen
  gameTitleStyle: {
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 20,
    color: 'white',
  },
  gameBodyImageStyle: {
    flex: 1,
    height: 400,
    resizeMode: 'cover',
    paddingTop: 25,
  },
  gameStyle: {
    fontSize: 20,
    textAlign: 'justify',
    paddingLeft: 15,
    paddingRight: 15,
    color: 'red',
  },
  gameQImageStyle: {
    flex: 1,
    height: 1770,
    resizeMode: 'cover',
    paddingTop: 25,
  },
  // Pressable
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },

  // AboutScreen
  aboutTitleStyle: {
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 25,
    color: 'white',
  },
  aboutTitleImageStyle: {
    flex: 1,
    height: 300,
    resizeMode: 'cover',
  },
  vidPadding: {
    paddingTop: 30,
  },
  vidImage: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
});