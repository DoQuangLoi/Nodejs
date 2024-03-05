import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, ScrollView,SafeAreaView } from 'react-native'
import React, { useState, useContext } from 'react'
import {login} from '../../http/UserHttp'
import { UserContext } from './UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Login = (props) => {
    const { navigation } = props;
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const handlelogin = async () => {
        try {
            const result = await login(UserName, Password);
            console.log(result)
            await AsyncStorage.setItem('token', result.token);
            setUser(result);
            console.log(result);

        } catch (error) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }
    }
    return (
        <KeyboardAvoidingView style={style.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView >

                    <View style={style.View}>
                        <Text style={style.hello}>Hello</Text>
                        <Text style={style.well}>WellCome!</Text>
                        <Text style={style.TextSmall}>Welcome to KaBar App!</Text>
                    </View>
                    <View style={style.View2} >
                        <Text style={style.TextSmall2}>Username*</Text>
                        <View style={style.TextPut2}>
                            <TextInput style={style.TextPut}
                                value={UserName}
                                onChangeText={setUserName}
                                placeholder='Enter your username'></TextInput>
                        </View>
                    </View >
                    <View style={style.View2}>
                        <Text style={style.TextSmall2}>Password*</Text>
                        <View style={style.TextPut2}>
                            <TextInput secureTextEntry={true}
                                value={Password}
                                onChangeText={setPassword}
                                style={style.TextPut} placeholder='Enter your password'></TextInput>
                            <Image style={style.EyeIcon} source={require('../../Img/Icon.png')}></Image>
                        </View>
                    </View>
                    <View style={style.ViewSmall}>
                        <TouchableOpacity style={style.smallButton} onPress={() => navigation.navigate('Forgot')} >
                            <Text style={style.TextInSmall}>forgot the password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={style.Button} onPress={handlelogin} >
                        <Text style={style.TextInButton}>Login</Text>
                    </TouchableOpacity>
                    <Text style={style.textOr}>or continue with</Text>
                    <View style={style.ViewFG}>
                        <TouchableOpacity style={style.FaceGG}>
                            <View style={style.InTouch}>
                                <Image source={require('../../Img/IconFace.png')} />
                                <Text>FaceBook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.FaceGG}>
                            <View style={[style.InTouch, { width: 75 }]}>
                                <Image source={require('../../Img/IconGG.png')} />
                                <Text>Google</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.Viewfoot}>
                        <TouchableOpacity style={style.footer} onPress={() => navigation.navigate('SignUp')} >
                            <Text style={style.TextIndont}>don’t have an account ?</Text>
                        </TouchableOpacity>
                    </View>


                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>


    )
}
const style = StyleSheet.create({
    InTouch: {
        width: 95,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between'
    }, TextIndont: {
        color: '#667080'
    }, Viewfoot: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }, footer: {
        width: 150,

    }, ViewFG: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, FaceGG: {
        width: 160,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#EEF1F4',
        borderRadius: 10,
        marginTop: 15
    }, textOr: {
        textAlign: 'center',
        marginTop: 10
    }, TextInButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    Button: {
        width: '100%',
        height: 50,
        backgroundColor: '#1877F2',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    }, ViewSmall: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }, TextInSmall: {
        color: '#1877F2'
    }, smallButton: {
        width: 138,
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    EyeIcon: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 12,
        right: 5
    }, TextPut2: {
        width: '100%',
        height: 48,
        borderBlockColor: '#4e4b66',
        borderWidth: 1,
        borderRadius: 6,
        position: 'relative'
    }, TextPut: {
        width: 'auto',
        padding: 12,
        marginTop: 4,
    }, TextSmall2: {
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 21
    }, View2: {
        width: '100%',
        height: 73,
        marginTop: 16
    }, TextSmall: {
        fontSize: 20,

    }, well: {
        color: '#1877F2',
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 72
    }, hello: {
        color: 'black',
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 72
    }, View: {
        width: 'auto',
        paddingBottom: 18
    },
    body: {

        width: '100%',
        height: '100%',
        padding: 24,
        backgroundColor: 'white'
    }
})

export default Login