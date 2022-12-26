import react, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { Slider, Button } from "@rneui/themed";
import * as Font from "expo-font";
import { connect, Connect } from "react-redux";
let customFonts = {
  tabssom: require("../../assets/font/tabssom.ttf"),
};

class meteric extends Component {
  state = {
    heightsliderval: 175,
    weightsliderval: 70,
    man: true,
    fontsLoaded: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
  weightincrease = () => {
    if (this.state.weightsliderval < 100) {
      this.setState({
        weightsliderval: (this.state.weightsliderval * 10 + 2) / 10,
      });
    }
  };
  weightdecrease = () => {
    if (this.state.weightsliderval > 40) {
      this.setState({
        weightsliderval: (this.state.weightsliderval * 10 - 2) / 10,
      });
    }
  };
  heightincrease = () => {
    if (this.state.heightsliderval < 200) {
      this.setState({
        heightsliderval: (this.state.heightsliderval * 10 + 2) / 10,
      });
    }
  };
  heightdecrease = () => {
    if (this.state.heightsliderval > 150) {
      this.setState({
        heightsliderval: (this.state.heightsliderval * 10 - 2) / 10,
      });
    }
  };
  calculate = () => {
    var h =
      (this.state.heightsliderval / 100) * (this.state.heightsliderval / 100);
    var w = this.state.weightsliderval;
    var bmi = Math.round(w / h);
    alert(bmi);
    this.props.NEW(bmi)
    this.props.navigation.navigate("result");
  };
  render() {
    if (this.state.fontsLoaded) {
      return (
        <view
          style={{ backgroundColor: this.state.man ? "#1B5E20" : "#f7642d" }}
        >
          <ScrollView
            contentContainerStyle={{ flex: 1, justifyContent: "center" }}
          >
            <view
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flex: 8,
                margin: 10,
              }}
            >
              <view
                style={{
                  width: 150,
                  height: 150,
                  marginTop: 25,
                  backgroundColor: this.state.man
                    ? "rgb(26 139 34)"
                    : "rgb(26, 139, 34)",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRadius: 30,
                }}
              >
                <Icon
                  name="male"
                  type="font-awesome"
                  size={70}
                  onPress={() => this.setState({ man: true })}
                />
              </view>
              <view
                style={{
                  width: 150,
                  height: 150,
                  marginTop: 25,
                  backgroundColor: "coral",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRadius: 30,
                }}
              >
                <Icon
                  name="female"
                  type="font-awesome"
                  size={70}
                  onPress={() => this.setState({ man: false })}
                />
              </view>
            </view>
            {/* ta inja adamak------------------------------------------------------ */}
            <view style={{ justifyContent: "center" }}>
              <view
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Slider
                  animateTransitions
                  animationType="timing"
                  maximumTrackTintColor="#ccc"
                  maximumValue={200}
                  minimumTrackTintColor="#222"
                  minimumValue={150}
                  onSlidingComplete={() => console.log("onSlidingComplete()")}
                  onSlidingStart={() => console.log("onSlidingStart()")}
                  onValueChange={(value) =>
                    console.log("onValueChange()", value)
                  }
                  orientation="horizontal"
                  step={1}
                  style={{
                    width: "80%",
                    height: 70,
                    marginHorizontal: 20,
                    heightsliderval: 70,
                  }}
                  thumbStyle={{ height: 20, width: 20 }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="human-male-height"
                        type="material-community"
                        size={20}
                        reverse
                        containerStyle={{ bottom: 20, right: 20 }}
                        color="red"
                      />
                    ),
                  }}
                  thumbTintColor="#0c0"
                  thumbTouchSize={{ width: 40, height: 40 }}
                  trackStyle={{ height: 10, borderRadius: 20 }}
                  value={this.state.heightsliderval}
                />
              </view>
            </view>
            <view
              style={{
                flexWrap: "wrap",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <view
                style={{
                  margin: 10,
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Button
                  onPress={() => this.heightdecrease()}
                  color="warning"
                  radius={"md"}
                  style={{
                    width: 50,
                    textAlign: "center",
                  }}
                >
                  <text>-</text>
                </Button>
                <text
                  style={{ color: "white", margin: 10, textAlign: "center" }}
                >
                  قد به متر
                  <br />
                  {this.state.heightsliderval}
                </text>
                <Button
                  onPress={() => this.heightincrease()}
                  color="success"
                  radius={"md"}
                  style={{
                    width: 50,
                    textAlign: "center",
                  }}
                >
                  <text>+</text>
                </Button>
              </view>
            </view>

            {/* az inja -------------------------------------------------------*/}

            <view style={{ justifyContent: "center" }}>
              <view
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Slider
                  animateTransitions
                  animationType="timing"
                  maximumTrackTintColor="#ccc"
                  maximumValue={100}
                  minimumTrackTintColor="#222"
                  minimumValue={40}
                  onSlidingComplete={() => console.log("onSlidingComplete()")}
                  onSlidingStart={() => console.log("onSlidingStart()")}
                  onValueChange={(value) =>
                    console.log("onValueChange()", value)
                  }
                  orientation="horizontal"
                  step={1}
                  style={{
                    width: "80%",
                    height: 70,
                    marginHorizontal: 20,
                    heightsliderval: 70,
                  }}
                  thumbStyle={{ height: 20, width: 20 }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="spoon"
                        type="font-awesome"
                        size={20}
                        reverse
                        containerStyle={{ bottom: 20, right: 20 }}
                        color="red"
                      />
                    ),
                  }}
                  thumbTintColor="#0c0"
                  thumbTouchSize={{ width: 40, height: 40 }}
                  trackStyle={{ height: 10, borderRadius: 20 }}
                  value={this.state.weightsliderval}
                />
              </view>
            </view>
            <view
              style={{
                flexWrap: "wrap",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <view
                style={{
                  margin: 10,
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Button
                  onPress={() => this.weightdecrease()}
                  color="warning"
                  radius={"md"}
                  style={{
                    width: 50,
                    textAlign: "center",
                  }}
                >
                  <text>-</text>
                </Button>

                <text
                  style={{ color: "white", margin: 10, textAlign: "center" }}
                >
                  وزن به کیلوگرم
                  <br />
                  {this.state.weightsliderval}
                </text>

                <Button
                  onPress={() => this.weightincrease()}
                  color="success"
                  radius={"md"}
                  style={{
                    width: 50,
                    textAlign: "center",
                  }}
                >
                  <text>+</text>
                </Button>
              </view>
            </view>
          </ScrollView>
          {/* az inja --------------------------------------------- */}
          <view
            style={{ display: "flex", justifyContent: "center", margin: 30 }}
          >
            <Button
              color="success"
              radius={"xl"}
              style={{
                width: 150,
                textAlign: "center",
              }}
              onPress={() => this.calculate()}
            >
              calculate
            </Button>
          </view>
        </view>
      );
    }
  }
}
function mapstatetoprops(state) {
  return {
    BMI: state.BMI,
  };
}
function mapdispachtoprops(dispatch) {
  return {
    NEW: (data) => dispatch({ type: "NEW_BMI", data: data }),
  };
}
export default connect(mapstatetoprops,mapdispachtoprops) (meteric);
