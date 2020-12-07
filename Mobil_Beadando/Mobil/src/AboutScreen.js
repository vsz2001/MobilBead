import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, Button, TouchableHighlight, Linking } from "react-native";
import { globalStyles } from '../styles/Global';

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About',
  };
  
  
  videoPFTWopen = () => {
    Linking.openURL('https://www.youtube.com/watch?v=aZUopuhqwCM&list=OLAK5uy_nxMCsNCpIcKOv5HGsDc1vGcnaZgh2tXMM&ab_channel=Panic%21AtTheDisco');
  };
  
  videoDOABopen = () => {
    Linking.openURL('https://www.youtube.com/watch?v=AUChk0lxF44&list=OLAK5uy_n4kiDuy362kHzSmkr3Bs8aGSWSsTvdYOc&ab_channel=FueledByRamen');
  };

  state = {
    titleText: "Segítség a játékhozz",
    bodyText: "Ha szeretné felfrissíteni a dalszövegeket az elméjében akkor ezzen a két linken megtudja hallgatni a két utolsó albumot.",
  };

  render() {
    const { navigate } = this.props.navigation;
    const Separator = () => <View style={globalStyles.separator} />;
    const videosTitle = { uri: "https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"};
    const videoBody = { uri: "https://images-na.ssl-images-amazon.com/images/I/816OJ373GnL._AC_SL1500_.jpg"};
    const DOABkep = { uri: "https://www.thehoya.com/wp-content/uploads/2016/01/B7_PanicAtTheDiscoDeathofaBachelor_FueledbyRamen-300x300.png"};
    const PFTWkep = { uri: "https://img.discogs.com/FwxC44L3IhpWfLXQEq6b0AY0vp8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12175520-1541178236-6548.jpeg.jpg"};

    return (
      <SafeAreaView style={globalStyles.container}>
        <ScrollView>
          <View>
            <ImageBackground source={videosTitle} style={globalStyles.mainTitleImageStyle}>
              <Text style={globalStyles.aboutTitleStyle}>
              {this.state.titleText}
              </Text>
            </ImageBackground>

            <Button title="Vissza a Főoldalra" onPress={() => navigate('Home', {})} />
            
            <ImageBackground source={videoBody} style={globalStyles.aboutTitleImageStyle}>
              <Text style={globalStyles.textStyles}>
              {this.state.bodyText}
              </Text>
            </ImageBackground>

            <TouchableHighlight onPress={this.videoDOABopen} style={globalStyles.vidPadding}>
                <Image source={DOABkep} style={globalStyles.vidImage } />
            </TouchableHighlight>

            <TouchableHighlight onPress={this.videoPFTWopen} style={globalStyles.vidPadding}>
                <Image source={PFTWkep} style={globalStyles.vidImage } />
            </TouchableHighlight>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}