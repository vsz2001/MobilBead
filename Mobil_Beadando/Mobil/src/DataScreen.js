import React, { Component } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, ImageBackground, Button, } from "react-native";
import { globalStyles } from '../styles/Global';

export default class DataScreen extends Component {
  static navigationOptions = {
    title: 'Data',
  };

  state = {
    titleText: "Bandatagok",
    bodyText: "Ezzen az oldalon a bandatagokról lesz némi információ.",

    nev1: "Brendon Urie",
    leir1: "Teljes nevén Brendon Boyd Urie, az egyedüli az alapítótagok közül és mára hivatalosan egyedül maradt a bandában. Ebből adódóan megtanult a legtöbb hangszeren játszani és mindezzek melett énekelni is.",
    eletkor1: "33 éves",

    nev2: "Daniel Pawlovich",
    leir2: "Teljes nevén Daniel John Pawlovich, 2015 óta turnézik a bandával. A turnékon a dobot szólaltatja meg. A legutolsó turnén egy fenomenális dob duetet hoztak létre Brendon-nal a Miss Jackson című szám közepén",
    eletkor2: "39 éves",

    nev3: "Nicole Row",
    leir3: "Teljes nevén Nicole Sue Row, 2017 óta turnézik a bandával. Turnékon a basszusgitár és a háttérénekes szerepét tölti be. Jelen pillanatban ő az egyetlen nő aki bekerült a bandába.",
    eletkor3: "29 éves",

    nev4: "Mike Naran",
    leir4: "Teljes nevén Micheal Naran, 2018 óta turnézik a bandával. Turnékon az elektromosgitárt pengeti és még háttérénekesként van jelen. Ő a legújabb bandatag a turnékon.",
    eletkor4: "32 éves",

  };

  render() {
    const { navigate } = this.props.navigation;
    const Separator = () => <View style={globalStyles.separator} />;
    const band = { uri: "https://1159025897.rsc.cdn77.org/data/images/full/79082/panic-at-the-disco.png"};
    const brendon = { uri: "https://media.gq.com/photos/5b2a93a8a251bf0cb3c246ed/master/pass/Brendon-Urie-Finds-Peace!-At-the-Disco-gq-interview.jpg"};
    const dan = { uri: "https://www2.pictures.zimbio.com/gi/Daniel+Pawlovich+Y6dR2kjVIARm.jpg"};
    const nicole = { uri: "https://a.wattpad.com/cover/162062407-288-k225000.jpg"};
    const mike = { uri: "https://i.pinimg.com/originals/9d/59/38/9d593837336f71b75426070978953261.jpg"};

    return (
      <SafeAreaView style={globalStyles.container}>
        <ScrollView>
          <View>
              <Text style={globalStyles.titleText}>
                {this.state.titleText}
              </Text>

            <Button title="Vissza a Főoldalra" onPress={() => navigate('Home', {})} />

            <ImageBackground source={band} style={globalStyles.headerImageStyle}>
              <Text style={globalStyles.PaddingText}>
                {this.state.bodyText}
              </Text>
            </ImageBackground>

              <Text style={globalStyles.exTitle}>
                {this.state.nev1}
              </Text>
              <Text style={globalStyles.LeirText}>
                {this.state.leir1}
              </Text>
              <Text style={globalStyles.korAdat}>Életkor: <Text style={globalStyles.LeirText}>{this.state.eletkor1}</Text></Text>
            <Image source={brendon} style={globalStyles.bodyImageStyle}>
            </Image>
            
            <Separator/>

              <Text style={globalStyles.exTitle}>
                {this.state.nev2}
              </Text>
              <Text style={globalStyles.LeirText}>
                {this.state.leir2}
              </Text>
              <Text style={globalStyles.korAdat}>Életkor: <Text style={globalStyles.LeirText}>{this.state.eletkor2}</Text></Text>
            <Image source={dan} style={globalStyles.bodyImageStyle}>
            </Image>
                        
            <Separator/>

              <Text style={globalStyles.exTitle}>
                {this.state.nev3}
              </Text>
              <Text style={globalStyles.LeirText}>
                {this.state.leir3}
              </Text>
              <Text style={globalStyles.korAdat}>Életkor: <Text style={globalStyles.LeirText}>{this.state.eletkor3}</Text></Text>
            <Image source={nicole} style={globalStyles.bodyImageStyle}>
            </Image>
            
            <Separator/>

              <Text style={globalStyles.exTitle}>
                {this.state.nev4}
              </Text>
              <Text style={globalStyles.LeirText}>
                {this.state.leir4}
              </Text>
              <Text style={globalStyles.korAdat}>Életkor: <Text style={globalStyles.LeirText}>{this.state.eletkor4}</Text></Text>
            <Image source={mike} style={globalStyles.bodyImageStyle}>
            </Image>
            

            <Button title="Vissza a Főoldalra" onPress={() => navigate('Home', {})} />
          </View>
          <TouchableOpacity onPress={() => navigate('Game', {})}>
            <Text style={globalStyles.textStyles}>Tovább</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}