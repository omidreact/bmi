import react, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { Slider, Button, Overlay } from "@rneui/themed";
import * as Font from "expo-font";
import { connect } from "react-redux";

let customFonts = {
  tabssom: require("../../assets/font/tabssom.ttf"),
};
class result extends Component {
  state = {
    fontsLoaded: false,
    visible: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };
  showresult = () => {
    var x = Number(this.props.BMI);
    if (x > 18.6 && x < 24.9) {
      return (
        <View style={{ color: "green" }}>
          <text>{x}</text>
          <text>خوبی</text>
        </View>
      );
    }
    if (x > 24.9 && x < 29.9) {
      return (
        <View style={{ color: "lightgreen" }}>
          <text>{x}</text>
          <text>بدک نیستی</text>
        </View>
      );
    }
    if (x > 29.9 && x < 34.9) {
      return (
        <View style={{ color: "orange" }}>
          <text>{x}</text>
          <text>هوم یکم تپلی</text>
        </View>
      );
    }
    if (x > 34.9) {
      return (
        <View style={{ color: "red" }}>
          <text>{x}</text>
          <text>خیلی تپلی</text>
        </View>
      );
    }
  };
  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              flex: 8,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#37474F",
            }}
          >
            <text
              style={{
                width: 300,
                height: 350,
                fontFamily: "tabssom",
                fontSize: 30,
                color: "white",
                backgroundColor: "#263238",
                textAlign: "center",
              }}
            >
              
              <br />
              <text >{this.showresult()}</text>
              <br />
              شما در بازه مناسبی هستید
            </text>
          </View>
          <View style={{ display: "flex", flex: 1, backgroundColor: "pink" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "orange",
              }}
            >
              <Icon
                name="comment-medical"
                type="font-awesome-5"
                color="red"
                size={40}
                onPress={() => this.toggle()}
              />
            </View>
          </View>
          <Overlay
            isVisible={this.state.visible}
            onBackdropPress={() => this.toggle()}
            overlayStyle={{
              width: 300,
              height: 300,
              borderRadius: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              backgroundColor: "orange",
            }}
          >
            <text>این یک اوور لی است Overlay برای بهتر شدن برنامه شما</text>
            <Button
              title="okey"
              titleStyle={{ fontSize: 20, fontWeight: "bold", color: "black" }}
              buttonStyle={{ backgroundColor: "white", width: 70 }}
              onPress={() => this.toggle()}
            ></Button>
          </Overlay>
        </View>
      );
    } else {
      return null;
    }
  }
}
function mapstatetoprops(state) {
  return {
    BMI: state.BMI,
  };
}
export default connect(mapstatetoprops)(result);
