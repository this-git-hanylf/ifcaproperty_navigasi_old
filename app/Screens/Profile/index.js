import React, { Component } from "react";
import {
    View, Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    ScrollView,
    Dimensions
} from 'react-native';
import nbStyle from './Style';
// import { goToAuth } from '../navigation';
// import { Navigation } from 'react-native-navigation';
import DeviceInfo from 'react-native-device-info';
// import email from 'react-native-email';
// import RNFetchBlob from 'rn-fetch-blob'
// import ImagePicker from 'react-native-image-crop-picker';
// import { Icon as Icons } from 'react-native-element';
import OfflineNotice from "@Component/OfflineNotice";
import { urlApi } from "@Config";
// import { sessions, nav } from "../../_helpers";
import { sessions } from "../../_helpers";
// import { authService } from '../../_services';
import colors from "../../Theme/Colors";
import FlatListMenu from '../../components/FlatListMenu/FlatListMenu';
// import Navigator from '../Service/Navigation'

const vw = Dimensions.get('window').width;
class Profile extends Component {
    static options(passProps) {
        return {
            topBar: {
                visible: false,
                height: 0
            }
            // statusBar :{
            //     style : 'light',
            //     backgroundColor :'#2c9993',
            // },
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            mounted: false,
            isDisabled: false,

            username: "",
            email: "",
            token: "",
            userId: "",

            fotoProfildefault: require("@Asset/icons/profile.png"),

            dataProfile: [],
            modalVisible: false,
            dataMenu: [
                { id: '1', menu: 'info personal' },
                { id: '2', menu: 'help' },
                { id: '3', menu: 'about us' },
                { id: '4', menu: 'sign out' },
            ]
        };
        // Navigation.events().bindComponent(this);
    }

    async componentWillMount() {
        const data = {
            email: await sessions.getSess("@User"),
            username: await sessions.getSess("@Name"),
            token: await sessions.getSess("@Token"),
            userId: await sessions.getSess("@UserId"),
            mounted: true,
            isLogin: await sessions.getSess("@isLogin")
        };

        this.setState(data, () => { this.getProfile() }
        );
    }


    async componentDidAppear() {
        let refresh = await sessions.getSess("@RefreshProfile");
        console.log(refresh);
        if (this.state.mounted) {
            if (refresh === true) {
                sessions.setSess("@RefreshProfile", false);
                this.getProfile();
            }
        }
    }

    // handleNavigation = (screenName, passedProps) => {
    //     this.setState({ isDisabled: true }, () => {
    //         this.goToScreen(screenName, passedProps);
    //     });
    // };

    // goToScreen = (screenName, passedProps) => {
    //     Navigation.push(this.props.componentId, {
    //         component: {
    //             name: screenName,
    //             passProps: {
    //                 passed: passedProps,
    //                 token: this.state.token
    //             }
    //         }
    //     });
    // };
    goTo = ({ navigation, route }) => {
        console.log('navigate', navigation);
        console.log('rooute', route);
        navigation.navigate('Login')
    }

    componentWillUnmount() {
        this.setState({ mounted: false });
        // this.props.onBack();
    }

    getProfile = () => {
        fetch(
            urlApi +
            "c_profil/getData/IFCAMOBILE/" +
            this.state.email +
            "/" +
            this.state.userId,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Token: this.state.token
                }
            }
        )
            .then(response => response.json())
            .then(res => {
                const resData = res.Data[0];
                console.log("res", res);

                // ? Agar Gambar Tidak ter cache
                let url =
                    resData.pict + "?random_number=" + new Date().getTime();
                this.setState({ dataProfile: resData }, () => {
                    if (resData.pict) {
                        this.setState({ fotoProfil: { uri: url } });
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidDisappear() {
        this.setState({ isDisabled: false });
    }




    render() {
        let { fotoProfil } = this.state;
        console.log('data menu', this.state.dataMenu);
        return (
            <ImageBackground style={{
                width: "100%", height: "100%", backgroundColor: colors.bg_hijautua
            }}>
                {this.state.isLogin == true ?
                    <Text>is login true</Text>

                    :
                    <View>
                        <View style={{ top: '5%' }}>
                            <Text style={{ color: colors.bg_abuabu, fontSize: 18, textAlign: 'center' }}>Profile</Text>
                        </View>

                        <View style={{ backgroundColor: colors.bg_putih, borderTopLeftRadius: 60, borderTopRightRadius: 60, top: '10%', height: '100%' }}>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Image source={fotoProfil}
                                    style={{
                                        borderRadius: 40,
                                        width: 80,
                                        height: 80,

                                    }}
                                />
                            </View>
                            <TouchableOpacity
                                style={nbStyle.btnYes}
                                // onPress={() => this.btnLogout()}
                                // onPress={() => this.handleNavigation(
                                //     "screen.Login"

                                // )}
                                // onPress={() => nav.push(this.props.componentId, "screen.Login")}
                                // onPress={() => nav.push(this.props.componentId, "screen.Login")}
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={nbStyle.textYes}>
                                    login
                        </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                }




            </ImageBackground>


        )
    }
}

export default Profile;