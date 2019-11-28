import React, { Component } from "react";
import {Dark,Light} from './styles/theme-context';
import { AsyncStorage } from "react-native";
const Context = React.createContext();

export class AppContextProvider extends Component {
    state = {
        theme: Light,           
        setTheme: (theme) => {
            if ((theme)==0){
                this.setState({theme:Light});
            }
            else if ((theme)==1){
                this.setState({theme:Dark});
            }
            else {   
                let date = new Date();
                let hrs = date.getHours();
                const themeByHour = (hrs>=19 || hrs <=6) ? Dark : Light;
                this.setState({themePanel: false, theme:themeByHour});  
            }       
        },
        loadedMusic: false,
        playerState: 0,
        playing: false,
        loading: true,
        duration: 0,
        startValue: 0,
        presentPosition: 0,
        searchValue: "",
        repeat: false,
        title: "Chia tay hoàng hôn",
        artist: {
          name: "Thanh Lam",
          id: 1,
        },
        songImage: require("./assets/thanhlam.jpg"),
        albumName: "Album Hồng Nhung",

        updateState:(someDict) =>{
            this.setState(someDict)
        }
    }


    componentDidMount = async () => {
        this.state.setTheme( await AsyncStorage.getItem('theme'));
    };
    render() {
        const { theme } = this.state
        return (
            <Context.Provider value={ this.state }  theme={ theme } >
                    { this.props.children }
            </Context.Provider>
        )
    }
}
export const ThemeContext= Context;
export const AppConsumer = Context.Consumer;