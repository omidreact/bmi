import React, { Component } from "react";
import { Button } from "@rneui/themed";
import { Alert, View } from "react-native";
class App extends Component {
  state={
    flag:true,
    bomb:"hi"
  };
  alertkon=()=>{
    alert(this.state.flag)
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "pink",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div 
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            color: "white",
            borderRadius: 100,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={
            ()=>{
            this.setState({flag:!this.state.flag})
            this.alertkon()
            }
          }>
            <h1>
         ok
         </h1>
        </div>
      </View>
    );
  }
}
export default App;
