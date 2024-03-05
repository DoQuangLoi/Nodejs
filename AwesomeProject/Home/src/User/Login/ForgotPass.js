import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useContext } from 'react'
import { forgotPass } from '../../http/UserHttp';
const ForgotPass = (props) => {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [Show, setShow] = useState(false)
    const handleForgot = async () => {
        try {
            const result = await forgotPass(email);
            ToastAndroid.show('Kiểm tra email để đổi mật khẩu', ToastAndroid.SHORT);
            navigation.navigate('Login')
            console.log(email)
        } catch (error) {

        }

    }
    return (
        <View>
            <View style={style.View2} >
                <Text style={style.TextSmall2}>Username*</Text>
                <View style={style.TextPut2}>
                    <TextInput style={style.TextPut}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter your username'></TextInput>
                </View>
            </View>
            <TouchableOpacity style={style.Button} onPress={handleForgot} >
                <Text style={style.TextInButton}>Login</Text>
            </TouchableOpacity>
        </View>
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
export default ForgotPass