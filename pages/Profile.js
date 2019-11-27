import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  AsyncStorage,
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { getStatusBarHeight } from "react-native-status-bar-height";

import AndroidDialogPicker from "react-native-android-dialog-picker";
import { textStyle } from "../styles/textStyle";
const theme = ["Sáng", "Tối", "Tự động"];
import { AppConsumer, ThemeContext } from "../AppContextProvider";
import MeIcon from "../icons/MeIcon";
import meCheck from "../icons/icon-pack/meCheck";
import CheckBox from "../components/common/CheckBox";
import CardView from "react-native-cardview";
import { commonStyle } from "../styles/commonStyle";
import meLeaf from "../icons/icon-pack/meLeaf";
import meHeart from "../icons/icon-pack/meHeart";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      theme: 0,
    };
  }
  componentDidMount = async () => {
    const currentTheme = await AsyncStorage.getItem("theme");
    if (currentTheme != null) {
      this.setState({ theme: currentTheme });
    }
  };
  render() {
    return (
      <AppConsumer>
        {appConsumer => (
          <View
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.backgroundColorPrimary,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 12,
                paddingRight: 9,
                marginBottom: 2,
                paddingTop: getStatusBarHeight(),
              }}
            >
              <View style={{ flex: 1 }}>

                <Text style={[{color:appConsumer.theme.colorPrimary},commonStyle.header, textStyle.bold]}>

                  Cá nhân
                </Text>
              </View>
            </View>
            <CardView
              style={{
                height: 75,
                backgroundColor: appConsumer.theme.backgroundColorSecondary,
                margin: 15,
                alignItems: "center",
                padding: 9,
                flexDirection: "row",
              }}
              cornerRadius={12}
              cardElevation={2}
            >
              <Image
                source={{
                  uri:
                    "https://i.scdn.co/image/7be436d24a08969d8724edc8c0e290a4b5624fff",
                }}
                style={{
                  height: 60,
                  width: 60,
                  resizeMode: "cover",
                  borderRadius: 9,
                }}
              />
              <View style={{ padding: 9, flex:1 }}>

                <Text style={[textStyle.bold, { fontSize: 15, color:appConsumer.theme.colorPrimary }]}>

                  Cường Trần
                </Text>
                <Text style={{color:appConsumer.theme.colorPrimary, opacity: 0.75}}>iammaytinhdibo@gmail.com</Text>
              </View>
              <MeIcon size={23} icon={meHeart} color={appConsumer.theme.buttonColor} />
            </CardView>

            <TouchableOpacity
              onPress={() => {
                if (Platform.OS === "android") {
                  AndroidDialogPicker.show(
                    {
                      title: "Choose your theme...",
                      items: theme,
                      cancelText: "Cancel",
                    },
                    async buttonIndex => {
                      this.setState({ theme: buttonIndex });
                      appConsumer.setTheme(buttonIndex);
                      await AsyncStorage.setItem(
                        "theme",
                        buttonIndex.toString()
                      );
                      if(buttonIndex==1){
                        StatusBar.setBarStyle("light-content") 
                      }else{
                        StatusBar.setBarStyle("dark-content") 
                      };
                    }
                  );
                } else {
                  ActionSheetIOS.showActionSheetWithOptions(
                    {
                      title: "Test",
                      options: ["item1", "item2", "Cancel"],
                      cancelButtonIndex: 2,
                    },
                    buttonIndex => {
                      console.log(buttonIndex);
                    }
                  );
                }
              }}
              style={[
                listStyle.item,
                { backgroundColor: appConsumer.theme.backgroundColorSecondary },
              ]}
            >
              <View>
                <Text
                  style={[
                    listStyle.label,
                    textStyle.regular,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  Giao diện
                </Text>
              </View>
              <View style={listStyle.action}>
                <Text
                  style={[
                    textStyle.regular,
                    { color: appConsumer.theme.colorPrimary },
                  ]}
                >
                  {theme[this.state.theme]}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
              style={[
                listStyle.item,
                { backgroundColor: appConsumer.theme.backgroundColorSecondary },
              ]}
            >
              <Text
                style={[
                  listStyle.label,
                  textStyle.regular,
                  { color: appConsumer.theme.colorPrimary },
                ]}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                listStyle.item,
                { backgroundColor: appConsumer.theme.backgroundColorSecondary },
              ]}
            >
              <Text
                style={[
                  listStyle.label,
                  textStyle.regular,
                  { color: appConsumer.theme.colorPrimary },
                ]}
              >
                Cá nhân
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardView cardElevation={2} cornerRadius={5}>
                  <Image
                    style={{ resizeMode: "cover", width: 72, height: 156 }}
                    source={require("../assets/screen/light.jpg")}
                  />
                </CardView>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 6,
                  }}
                >
                  <CheckBox isTrue={true} value={0} />
                  <Text style={{ marginLeft: 3 }}>Sáng</Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardView cardElevation={2} cornerRadius={5}>
                  <Image
                    style={{ resizeMode: "cover", width: 72, height: 156 }}
                    source={require("../assets/screen/dark.jpg")}
                  />
                </CardView>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 6,
                  }}
                >
                  <CheckBox isTrue={false} value={0} />
                  <Text style={{ marginLeft: 3 }}>Tối</Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardView cardElevation={2} cornerRadius={5}>
                  <Image
                    style={{ resizeMode: "cover", width: 72, height: 156 }}
                    source={require("../assets/screen/light.jpg")}
                  />
                </CardView>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 6,
                  }}
                >
                  <CheckBox value={0} />
                  <Text style={{ marginLeft: 3 }}>Tự động</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </AppConsumer>
    );
  }
}

const listStyle = StyleSheet.create({
  item: {
    padding: 12,
    marginBottom: 2,
    flexDirection: "row",
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  action: {
    flex: 1,
    flexDirection: "row-reverse",
  },
});
export default withNavigation(Profile);
