import React, { Component } from "react";
import {
  ToastAndroid,
  Dimensions,
  Clipboard,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import lyric from "../../assets/data/lyric"
import MeIcon from "../../icons/MeIcon";
import mePlay from "../../icons/icon-pack/mePlay";
import meShare from "../../icons/icon-pack/meShare";

import { playerStyle } from "../../styles/playerStyle";
import { textStyle } from "../../styles/textStyle";

import {AppConsumer, ThemeContext} from "../../AppContextProvider";

import CardView from "react-native-cardview";
import meCopy from "../../icons/icon-pack/meCopy";

class Line extends Component {
  checkPos() {
    const props = this.props;
    var result = this.context.presentPosition >= props.start && this.context.presentPosition < props.end;
    if (result) {
      props.curLine(props.text);
    }
    return result;
  }
  render() {
    const props = this.props;
    return (
      <View
        style={[
          { width: "100%", alignItems: "center" },
          this.props.lyricSelected.indexOf(props.idx) != -1
            ? { backgroundColor: "rgba(111,111,111,0.2)" }
            : null,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.selectLine(props.idx);
          }}
          style={[styles.lineWrapper, { width: "100%", alignItems: "center" }]}
        >
          <Text
            style={[
              textStyle.medium,
              styles.line,
               { color: this.checkPos() ?this.context.theme.buttonColor:this.context.theme.colorPrimary },
            ]}
          >
            
            {props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Line.contextType=ThemeContext;

export default class MusicLyric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyricSelected: [],
      lyricData: lyric.scripts,
      ar: lyric.ar,
      ti: lyric.ti
    };
  }

  curLine = value => {
    if (value != this.state.curLine) {
      this.props.curLine(value);
      this.setState({ curLine: value });
    }
  };
  selectLine = value => {
    var lines = this.state.lyricSelected;
    if (lines.indexOf(value) == -1) {
      lines.push(value);
    } else {
      var index = lines.indexOf(value);
      lines.splice(index, 1);
    }
    lines = lines.sort();
    this.setState({
      lyricSelected: lines,
    });
    console.log(lines);
  };
  copy = () => {
    const text = this.state.lyricSelected.map(key => {
      return this.state.lyricData[key].text;
    });
    Clipboard.setString(text.join("\n"));
    ToastAndroid.showWithGravity(
      "Đã sao chép lời bài hát",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
    this.setState({
      lyricSelected: [],
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[playerStyle.header]}>
          <View style={{ width: 50 }} />
          <View
            style={{
              flex: 1,
              alignSelf: "center",
            }}
          >
            <Text style={[playerStyle.nowPlaying, textStyle.bold, {color:this.context.theme.colorPrimary}]}>
              Lời bài hát
            </Text>
          </View>
          {this.state.lyricSelected.length > 0 ? (
            <TouchableOpacity
              style={{
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={this.copy}
            >
              <MeIcon size={22} icon={meCopy} color={this.context.theme.buttonColor}/>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 50 }} />
          )}
        </View>

        <ScrollView>
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1, paddingVertical: 9, paddingBottom:40}}
          >
            <View style={{ marginBottom: 9, alignItems: "center" }}>
              <Text style={[{ fontSize: 16, color: this.context.theme.colorPrimary }, textStyle.bold]}>
                {this.state.ti}
              </Text>
              <Text style={[{ fontSize: 16, color: this.context.theme.colorPrimary }, textStyle.medium]}>
                Ca sĩ: {this.state.ar}
              </Text>
              {/* <Text style={[{ fontSize: 16, color: this.context.theme.colorPrimary }, textStyle.medium]}>
                Sáng tác: NS Thuận Yến
              </Text> */}
            </View>

            {this.state.lyricData.map((line, index) => {
              return (
                <Line
                  key={index}
                  idx={index}
                  curLine={this.curLine}
                  lyricSelected={this.state.lyricSelected}
                  selectLine={this.selectLine}
                  start={line.start}
                  end={line.end}
                  text={line.text}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

MusicLyric.contextType=ThemeContext;

const styles = StyleSheet.create({
  lineWrapper: {
    padding: 9,
  },
  line: {
    fontSize: 17,
    opacity: 0.8,
    color: "#888",
  },
});
