import React, { Component } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Button, Pressable } from "react-native";
import { globalStyles } from '../styles/Global';

export default class GameScreen extends Component {
  static navigationOptions = {
    title: 'Game',
  };

  state = {
    titleText: "Most egy kis játék",
    bodyText: "Ehezz a játékhozz ajánlatos ismeri a Panic! slágereket mindenkép ugyanis a dalszövegből kell rájönni, hogy melyik zene címhezz tartoznak a dalszövegek. A dalszövegek az utolsó két albumról lesznek evvel összesen 22 zenére van leszűkítve a kör. A nehézségi sorrend fokozatosan fog növekedni eleinte a refrénekből lesznek a részletek majd késöbb a dal bármelyik részéből lehet részlet. Sok sikert a játékhozz.",

    q1: "1. Tonight we are victorious",
    q2: "2. I get lifted, I get lifted",
    q3: "3. She said, You're just like Mike Love But you wanna be Brian Wilson, Brian Wilson",
    q4: "4. Mama said don't give up, it's a little complicated",
    q5: "5. Show praise with your body Stand up",
    q6: "6. In the garden of evil I'm gonna be the greatest",
    q7: "7. All the memories that we make will never change We'll stay drunk, we'll stay tan, let the love remain",
    q8: "8. Night's young, searching for a feeling Big fun, dancing with the demons",
    q9: "9. I lost a bet to a guy in a Chiffon skirt But I make these high heels work?",
    q10: "10. Maybe I'll smile a bit, maybe the opposite But pray that they don't call me thankless",
  };

  render() {
    const { navigate } = this.props.navigation;
    const Separator = () => <View style={globalStyles.separator} />;
    const gameQbg = { uri: "https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"};
    const gameBody = { uri: "https://images-na.ssl-images-amazon.com/images/I/816OJ373GnL._AC_SL1500_.jpg"};
    const gameTitle = { uri: "https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"};

    return (
      <SafeAreaView style={globalStyles.container}>
        <ScrollView>
          <View>
            <ImageBackground source={gameTitle} style={globalStyles.mainTitleImageStyle}>
                <Text style={globalStyles.gameTitleStyle}>
                {this.state.titleText}
                </Text>
            </ImageBackground>

            <Button title="Vissza a Főoldalra" onPress={() => navigate('Home', {})} />
            
            <ImageBackground source={gameBody} style={globalStyles.gameBodyImageStyle}>
                <Text style={globalStyles.gameStyle}>
                {this.state.bodyText}
                </Text>
            </ImageBackground>
            
            <ImageBackground source={gameQbg} style={globalStyles.gameQImageStyle}>
                <Text style={globalStyles.gameStyle}>
                {this.state.q1}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Death Of A Bachelor'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'Victorius'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Impossible Year'}
                        </Text>
                    )}
                </Pressable>
                
                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q2}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'King Of The Clouds'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Say Amen(Saturday Night)'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Roaring 20s'}
                        </Text>
                    )}
                </Pressable>

                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q3}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'House Of Memories'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'Crazy = Genius'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'LA Devotee'}
                        </Text>
                    )}
                </Pressable>

                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q4}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'The Overpass'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Dying In LA'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'High Hopes'}
                        </Text>
                    )}
                </Pressable>

                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q5}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'Hallelujah'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Victorius'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Emperors New Clothes'}
                        </Text>
                    )}
                </Pressable>

                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q6}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'Hey Look Ma, I Made It'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Old Fashioned'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : '(Fuck A) Silver Lining'}
                        </Text>
                    )}
                </Pressable>

                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q7}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Dont Threaten Me with a Good Time'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'Golden Days'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'The Good, the Bad and the Dirty'}
                        </Text>
                    )}
                </Pressable>

                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q8}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Dancings Not A Crime'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'One of the Drunks'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'High Hopes'}
                        </Text>
                    )}
                </Pressable>

                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q9}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Victorius'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Crazy = Genius'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'Dont Threaten Me with a Good Time'}
                        </Text>
                    )}
                </Pressable>

                <Separator />

                <Text style={globalStyles.gameStyle}>
                {this.state.q10}
                </Text>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'green'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helyes válasz!' : 'Roaring 20s'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'Say Amen(Saturday Night)'}
                        </Text>
                    )}
                </Pressable>
                <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'red'
                        : 'silver'
                    },
                    globalStyles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={globalStyles.text}>
                            {pressed ? 'Helytelen válasz!' : 'High Hopes'}
                        </Text>
                    )}
                </Pressable>
            </ImageBackground>

            <Button title="Vissza a Főoldalra" onPress={() => navigate('Home', {})} />
          </View>
          <TouchableOpacity onPress={() => navigate('About', {})}>
            <Text style={globalStyles.textStyles}>Tovább</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}