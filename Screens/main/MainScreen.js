import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";

export default function MainScreen({ navigation, route }) {
    const [dimensions, setdimensions] = useState(
        Dimensions.get("window").width - 16 * 2
    );
    const [posts, setPosts] = useState([];)

    useEffect(() => {
        if (route.params) { setPosts(prevState => [...prevState, route.params]) }
    }, [route.params])

    useEffect(() => {
        const onChange = () => {
            const width = Dimensions.get("window").width - 16 * 2;
            setdimensions(width);
        };
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.mainHeader}>
                <Text style={styles.mainTitle}>Publications</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Image source={require('../../assets/logOutBtn.png')} style={styles.logOutBtn} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainProfile}>
                <Image
                    style={styles.avatarProfile}
                    source={require("../../assets/avatar.png")}
                />
                <View style={styles.textProfile}>
                    <Text style={styles.textProfileName}>Natali Romanova</Text>
                    <Text style={styles.textProfileEmail}>email@example.com</Text>
                </View>
            </View>
            {/* <View style={styles.mainNavigation}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                >
                    <Image source={require('../../assets/mainBtn.png')} style={styles.userBtn} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('')}
                >
                    <View style={styles.addBtnContainer} >
                        <Image source={require('../../assets/addBtn.png')} style={styles.addBtn} /></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('')}
                >
                    <Image source={require('../../assets/userBtn.png')} style={styles.userBtn} />
                </TouchableOpacity>
            </View> */}
            <FlatList data={posts} keyExtractor={(item, indx) => indx.toString()} renderItem={(item) =>
            (<View style={{ marginBottom: 10, justifyContent: 'center' }}>
                <Image source={{ uri: item.photo }}
                    style={{ width: 350, height: 200 }} />
            </View>)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    mainHeader: {
        marginTop: 55,
        flexDirection: "row",
        justifyContent: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD'
    },
    mainTitle: {
        marginRight: 100,
        textAlign: 'center',
        color: '#212121',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    logOutBtn: {
        marginRight: 10,
        marginBottom: 10,
        width: 24,
        height: 24,
        // backgroundColor: '#BDBDBD',
        fill: '#BDBDBD',
        color: '#BDBDBD',
    },
    mainProfile: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 32,
        borderRadius: 16
    },
    avatarProfile: {
        width: 60,
        height: 60,
        marginLeft: 16
    },
    textProfile: {
        marginLeft: 8,
    },
    textProfileName: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 15,
        color: '#212121',
    },
    textProfileEmail: {
        color: 'rgba(33, 33, 33, 0.8)',
        fontSize: 11,
    },
});