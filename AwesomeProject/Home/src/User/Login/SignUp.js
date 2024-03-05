import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { register } from '../../http/UserHttp';

const SignIn = (props) => {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const role = 1;
    const handleRegister = async () => {
        try {
            const result = await register(email, name, password, role);
            console.log(result)
            if (result) {
                Alert.alert('Success', 'Register success, please login');
                navigation.navigate('Login');
            } else {
                Alert.alert('UnSuccess', 'Có vấn đề, please tryagain');
            }

        } catch (error) {
            // console.log(error)
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
            console.log(error.message);
        }
    }
    return (
        <View style={style.body}>
            <View style={style.View}>

                <Text style={style.well}>Hello!</Text>
                <Text style={style.TextSmall}>SignUp to get started!</Text>
            </View>
            <View style={style.View2} >
                <Text style={style.TextSmall2} >Email*</Text>
                <TextInput style={style.TextPut} value={email} onChangeText={(text) => setEmail(text)} placeholder='Enter your email'></TextInput>
            </View >
            <View style={style.View2} >
                <Text style={style.TextSmall2} >Name*</Text>
                <TextInput style={style.TextPut} value={name} onChangeText={(text) => setName(text)} placeholder='Enter your name'></TextInput>
            </View >
            <View style={style.View2}>
                <Text style={style.TextSmall2}>Password*</Text>
                <View style={style.TextPut2}>
                    <TextInput secureTextEntry={true} value={password} style={style.TextPut} onChangeText={(text) => setPassword(text)} placeholder='Enter your password'></TextInput>
                    <Image style={style.EyeIcon} source={require('../../Img/Icon.png')}></Image>
                </View>
            </View>
            <View style={style.ViewSmall}>
                <Text style={style.TextInSmall}></Text>
            </View>

            <TouchableOpacity style={style.Button} onPress={handleRegister} >
                <Text style={style.TextInButton}>SignUp</Text>
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
                <Text style={style.TextIndont}>Allready have an account!</Text>
                <TouchableOpacity style={style.footer} >
                    <Text style={style.TextInSmall} onPress={() => navigation.navigate('Login')}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn

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
        marginTop: 18,
        flexDirection: 'row'
    }, footer: {
        width: 40,
        marginLeft: 5
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
        top: 16,
        right: 5
    }, TextPut2: {
        width: '100%',
        heigh: 48,
        position: 'relative'
    }, TextPut: {
        width: 'auto',
        height: 48,
        borderBlockColor: '#4e4b66',
        borderWidth: 1,
        borderRadius: 6,
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
        fontWeight: '400',
        lineHeight: 30,
        letterSpacing: 0.12

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