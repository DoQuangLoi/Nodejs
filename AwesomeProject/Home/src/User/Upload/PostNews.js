import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, ScrollView, ToastAndroid } from 'react-native'
import React, { useState, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { uploadImage } from '../../http/NewHTTP'
import { launchCamera } from 'react-native-image-picker'
import { upNews } from '../../http/NewHTTP'

const PostNews = (props) => {
    const [Show, setShow] = useState(false)
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const [ImagePath, setImagePath] = useState(null)
    const takePhoto = useCallback(async (response) => {
        if (response.didCancel) return;
        if (response.errorCode) return;
        if (response.errorMessage) return;
        if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            // hiện hình
            setImage(asset.uri);
            // tắt modal
            setShow(false);
            // upload image
            const formData = new FormData();
            formData.append('image', {
                uri: asset.uri,
                type: asset.type,
                name: asset.fileName,
            });
            const result = await uploadImage(formData);
            console.log('>>>>>upload image: ', result.data.path);
            setImagePath(result.data.path);
        }
    }, []);
    // const chupAnh = async () => {
    //     const result = await launchCamera();
    //     console.log(result.assets[0].uri);
    //     const formData = new FormData();
    //     formData.append('image', {
    //       uri: result.assets[0].uri,
    //       type: 'image/jpeg',
    //       name: 'image.png',
    //     });
    //     const response = await AxiosInstance('multipart/form-data').post(
    //       '/media/upload',
    //       formData,
    //     );
    //     console.log('RESPONSE=>>>>>>', response);
    //     console.log(response.data.path);
    //     console.log(response.error);
    //     if (response.error == false) {
    //       ToastAndroid.show('Upload Image Success', ToastAndroid.SHORT);
    //       setImage(response.data.path);
    //     } else {
    //       ToastAndroid.show('Upload Image Thất Bại ', ToastAndroid.SHORT);
    //     }
    //   };
    // sử dụng lại hàm này
    const openCamera = useCallback(async () => {
       
            const options = {
                mediaType: 'photo',
                quality: 1,
                saveToPhotos: true,
            };
        
            await launchCamera(options, takePhoto);
    
        
        // await launchImageLibrary(options, takePhoto);
    }, []);
 
const dangtin= async (title, content, image)=>{

upNews(title, content, image)
setTitle('');
setImage(null);
setContent('')
}
    return (


        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.Title}>Create News</Text>
                <View>
                    <TouchableOpacity style={styles.ButtonImage} onPress={() => {
                        setShow(true)
                    }}>
                        <Image source={require('../../Img/plus.png')} />

                        <Text>Add cover photo</Text>


                    </TouchableOpacity>
                    {
                        image &&   <Image  style={styles.imageIn} source={{ uri: image }} />

                    }
                  
                </View>

                <View style={styles.TextInArow}>
                    <TextInput style={styles.TextIn} placeholder='New Tile'
                    value={title}
                    onChangeText={text=>setTitle(text)} />
                </View>
                <View style={styles.TextInArow2}>
                    <TextInput autoComplete='address-line1'
                    onChangeText={text=>setContent(text)}
                    value={content}
                    style={styles.TextContent} placeholder='Add News/Article' />
                </View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={Show}
                    onRequestClose={() => {
                        setShow(false)
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text> alo</Text>
                            <TouchableOpacity>
                                <Text >Chọn Ảnh</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{margin:24}} onPress={openCamera}>
                                <Text >Chụp Ảnh</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setShow(false)}>
                                <Text>OKE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View>

                </View>

            </View>
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%' }}>
                    <Text>Aa</Text>
                    <Image source={require('../../Img/hamberger.png')} />
                    <Image source={require('../../Img/Image.png')} />
                    <Image source={require('../../Img/dot.png')} />
                </View>
                <TouchableOpacity onPress={()=>dangtin(title, content, image)}>
                    <Text>Publish</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>



    )
}

export default PostNews

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: '8%',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 0.2,
        borderColor: 'gray'
    }, imageIn: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }, TextInArow2: {
        width: '100%',
        height: '100%'
    }, TextContent: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        color: '#4E4B66',
        letterSpacing: 0.12
    }, TextIn: {
        fontSize: 24,
        height: 100,
        lineHeight: 36,
        fontWeight: '400',
        color: '#050505',
        letterSpacing: 0.12
    }, TextInArow: {
        width: '100%',
        height: 60,
        justifyContent: 'center'
    }, ButtonImage: {
        borderColor: 'grey',
        borderStyle: 'dashed',
        width: '100%',
        height: 200,
        borderWidth: 1,
        backgroundColor: '#EEF1F4',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        position: 'relative'
    }, Title: {
        paddingHorizontal: 130,
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '500',
        color: '#000',
        letterSpacing: 0.12,
        justifyContent: 'center',
        alignContent: 'center'
    }, modalContent: {
        width: '90%',
        height: '40%',
        borderRadius: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }, modalContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    }, body: {

        width: '100%',
        height: '92%',
        padding: 24,
        backgroundColor: '#fff'
    }, container: {
        flex: 1,
    }
})