import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { homeStyle } from "../../styles/homeStyle";
import * as Animatable from "react-native-animatable";
import { textStyle } from "../../styles/textStyle";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {ThemeContext} from "../../AppContextProvider";
import SliderItem from "./SliderItem";
export default class SliderDot extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {isActive}=this.props;
    return (
        <TouchableWithoutFeedback onPress={this.props.onPress}>
      <View
        style={{
          backgroundColor: isActive? this.context.theme.buttonColor :"#aaa",
          height: 8,
          width: isActive?21:8,
          borderRadius: 100,
          marginEnd: 6
        }}
      ></View>
      </TouchableWithoutFeedback>
    );
  }
}
SliderDot.contextType=ThemeContext;