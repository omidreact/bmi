import react, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { Slider, Button, Overlay } from "@rneui/themed";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStore } from "redux";
import { Provider } from "react-redux";
import result from "./src/screens/result";
import imperal from "./src/screens/imperal";
import meteric from "./src/screens/meteric";
const Stack = createStackNavigator();
const toptabs = createMaterialTopTabNavigator();
let customFonts = {
  tabsom: require("./assets/font/tabssom.ttf"),
};

const mainstate = {
  BMI: 0,
};
const reducer = (state = mainstate, action) => {
  switch (action.type) {
    case "NEW_BMI":
      return { BMI: action.data };
      default :
      return state;
  }
};

const store = createStore(reducer);

class App extends Component {
  state = {
    fontsLoaded: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }

  hometabs = () => {
    return (
      <toptabs.Navigator
        initialRouteName="meteric"
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#757575",
          Style: {
            backgroundColor: "#212121",
          },
          tabBarLabelStyle: {
            textAlign: "center",
            fontFamily: "tabssom",
            fontSize: 23,
          },
          tabBarIndicatorStyle: {
            borderBottomColor: "black",
            borderBottomWidth: 3,
          },
        }}
      >
        <toptabs.Screen
          name="meteric"
          component={meteric}
          options={{ title: "کیلوگرم و سانتی متر" }}
        />
        <toptabs.Screen
          name="imperal"
          component={imperal}
          options={{ title: "اینچ و پوند" }}
        />
      </toptabs.Navigator>
    );
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
              <Stack.Screen
                name="home"
                children={this.hometabs}
                options={{
                  title: "محاسبه شاخص توده بدنی",
                  headerTintColor: "#ECEFF1",

                  headerTitleAlign: "center",
                  headerTitleStyle: {
                    fontSize: 30,
                    fontFamily: "tabsom",
                  },
                  headerStyle: {
                    backgroundColor: "#1B5E20",
                  },
                  headerRight: () => (
                    <Icon
                      name="infocirlce"
                      type="antdesign"
                      color="white"
                      size={28}
                      onPress={() => alert("clickes")}
                    />
                  ),

                  headerRightContainerStyle: {
                    padding: 10,
                  },
                }}
              />
              <Stack.Screen
                name="result"
                component={result}
                options={{
                  title: "نتیجه",
                  headerStyle: { backgroundColor: "black" },
                  headerTintColor: "orange",
                  headerTitleAlign: "center",
                  headerTitleStyle: {
                    fontWeight: "bold",
                    fontFamily: "tabsom",
                    fontSize: 22,
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      );
    }
  }
}
export default App;
