import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  ImageBackground
} from "react-native";
import { homeStyle } from "../styles/homeStyle";
import Swiper from "react-native-web-swiper";
import PlaylistItem from "../components/home/PlaylistItem";
import SliderDot from "../components/common/SliderDot";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { textStyle } from "../styles/textStyle";
import SongItem from "../components/home/SongItem";
import SliderItem from "../components/common/SliderItem";
export default class Home extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "column",
            height: getStatusBarHeight()
            // backgroundColor: "#433"
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 12,
            paddingRight: 9,
            marginBottom: 2
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={[
                { fontSize: 27, fontWeight: "900", justifyContent: "center" },
                textStyle.bold
              ]}
            >
              Trang chủ
            </Text>
          </View>
          <View
            style={{ width: 50, height: 50, backgroundColor: "#345" }}
          ></View>
        </View>
        <View style={homeStyle.slideShow}>
          <Swiper
            timeout={4.5}
            from={0}
            slideWrapperStyle={{ padding: 12, paddingBottom: 30 }}
            minDistanceForAction={0.1}
            controlsProps={{
              DotComponent: ({ index, isActive, onPress }) => (
                <SliderDot onPress={onPress} isActive={isActive} />
              ),
              prevPos: "left",
              nextPos: "right",
              nextTitle: ">",
              nextTitleStyle: { color: "red", fontSize: 24, fontWeight: "500" },
              PrevComponent: ({ onPress }) => (
                <TouchableOpacity
                  style={{ flex: 1, height: "100%" }}
                  onPress={onPress}
                >
                  <View style={{ height: 150, width: 40 }}></View>
                </TouchableOpacity>
              ),
              NextComponent: ({ onPress }) => (
                <TouchableOpacity
                  style={{ flex: 1, height: "100%" }}
                  onPress={onPress}
                >
                  <View style={{ height: 150, width: 40 }}></View>
                </TouchableOpacity>
              )
            }}
          >
            <SliderItem
              index={1}
              image={{
                uri:
                  "https://avatar-nct.nixcdn.com/mv/2019/10/23/f/2/2/5/1571805287222_840.jpg"
              }}
            />

            <SliderItem
              index={1}
              image={{
                uri:
                  "https://avatar-nct.nixcdn.com/mv/2019/10/17/d/f/d/6/1571316241353_840.jpg"
              }}
            />

            <SliderItem
              index={1}
              image={{
                uri:
                  "https://avatar-nct.nixcdn.com/mv/2019/10/21/b/3/9/8/1571633065834_840.jpg"
              }}
            />
          </Swiper>
        </View>
        <Text
          style={[homeStyle.sectionTitle, { paddingTop: 0 }, textStyle.bold]}
        >
          Playlist nghe gần đây
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PlaylistItem
              imgUrl={require("../assets/nuocmat.jpg")}
              name={"Nửa hồn thương đau"}
              actorName={"Thu Phương"}
            />
            <PlaylistItem
              imgUrl={{
                uri:
                  "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg"
              }}
              name={"Giấc mộng trong mơ"}
              actorName={"Hồng Nhung"}
            />
            <PlaylistItem
              imgUrl={require("../assets/nuocmat.jpg")}
              name={"Con đi đâu để thấy hoa bay"}
              actorName={"Nhiều ca sĩ"}
            />
            <PlaylistItem
              imgUrl={require("../assets/nuocmat.jpg")}
              name={"Đi đu đưa đi"}
              actorName={"Tuấn Hưng"}
            />
          </ScrollView>
        </View>

        <Text
          style={[homeStyle.sectionTitle, { paddingTop: 0 }, textStyle.bold]}
        >
          Bài hát đề xuất
        </Text>

        <View>
          <SongItem
            imgUrl={require("../assets/nuocmat.jpg")}
            name={"Nửa hồn thương đau"}
            actorName={"Thu Phương"}
          />
          <SongItem
            imgUrl={{
              uri:
                "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/2/1/4/b/214b84c68b94865dbc8e908f75449c79.jpg"
            }}
            name={"Giấc mộng trong mơ"}
            actorName={"Hồng Nhung"}
          />
          <SongItem
            imgUrl={require("../assets/nuocmat.jpg")}
            name={"Con đi đâu để thấy hoa bay"}
            actorName={"Nhiều ca sĩ"}
          />
          <SongItem
            imgUrl={require("../assets/nuocmat.jpg")}
            name={"Đi đu đưa đi"}
            actorName={"Tuấn Hưng"}
          />
        </View>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Playlist")}
        />
      </ScrollView>
    );
  }
}
