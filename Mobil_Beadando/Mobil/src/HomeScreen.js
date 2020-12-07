import React, { Component } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, } from "react-native";
import { globalStyles } from '../styles/Global';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Üdvözöllek',
  };

  state = {
    titleText: "Panic! At The Disco Kisokos",
    secondTitle: "Röviden a programról",
    bodyText: "A program egy amerikai bandáról név szerint a Panic! At The Discoról fog szólni. Maga a banda 15 éve lett alapítva és 6 nagylemezt adtak ki. A program röviden bemutatja a banda tagjait és a két utolsó nagylemezét majd egy játékkal lehet letesztelni a dalszövegekről szerzett tudásunkat.",
  };

  render() {
    const { navigate } = this.props.navigation;
    const headerImage = { uri: 'https://images-na.ssl-images-amazon.com/images/I/816OJ373GnL._AC_SL1500_.jpg'};
    const bodyImage = { uri: 'https://i.pinimg.com/originals/6c/89/ab/6c89ab93afaff9c70f664284a5a76538.jpg'};

    return (
      <SafeAreaView style={globalStyles.container}>
        <ScrollView>
          <View>
            <ImageBackground source={headerImage} style={globalStyles.headerImageStyle}>
              <Text style={globalStyles.mainTitleText}>
                {this.state.titleText}
              </Text>
            </ImageBackground>

            <ImageBackground source={bodyImage} style={globalStyles.bodyImageStyle}>
              <Text style={globalStyles.secondTitleStyle}>
                {this.state.secondTitle}
              </Text>
              <Text style={globalStyles.textStyles}>
                {this.state.bodyText}
              </Text>
              <TouchableOpacity onPress={() => navigate('Data', {})}>
                <Text style={globalStyles.textStyles}>Tovább</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
