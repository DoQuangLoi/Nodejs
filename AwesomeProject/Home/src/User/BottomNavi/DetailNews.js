import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNewsDetail } from '../../http/NewHTTP';
const DetailNews = (props) => {

    const { navigation, route: { params } } = props;
    const [newsDetail, setNewsDetail] = useState({})
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getNewsDetail(params.id);
            setNewsDetail(response);
          } catch (error) {
            console.log(error)
          }
        }
        params.id && fetchData()
      })



    return (
        <View style={{ flex: 1, }}>
            <View style={{ height: '92%', paddingHorizontal: 24, paddingTop: 24, backgroundColor: '#fff' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 2 }}>
                    <View style={{ flexDirection: 'row', width: 100, height: 50, justifyContent: 'center', alignContent: 'center' }}>
                        <Image source={require('../../Img/iConNew2.png')} resizeMode='contain' style={{ width: 40, height: 40, marginTop: 4 }} />
                        <View style={{ marginLeft: 3, marginTop: 5 }}>
                            <Text style={{ color: '#000', fontWeight: '700', }}>BBC new</Text>
                            <Text style={{}}>14h ago</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#1877F2', width: 80, height: 35, borderRadius: 6, marginTop: 5 }}>
                        <Text style={{ paddingHorizontal: 8, paddingVertical: 6, color: '#fff', fontWeight: '700' }}>Following</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        newsDetail.image && <Image style={{ width: '100%', marginTop: 20, height: 230, borderRadius: 6 }}   source={{ uri: newsDetail.image }} />
                    }
                        
                        <Text style={{fontSize: 16}}>{newsDetail.title}</Text>

                        <Text style={{ fontSize: 18, fontWeight: '400' }}>{newsDetail.content}</Text>
                    
                    </ScrollView>
            </View>
            <View style={{ borderTopWidth: 0.5, height: '8%', width: '100%', borderBlockStartColor: '#DCDCDC', backgroundColor: '#fff', flexDirection: 'row' }}>
                <View style={{ width: '80%', flexDirection: 'row' }}>
                    <View style={{ margin: 24, flexDirection: 'row', height: '100%' }}>
                        <Image source={require('../../Img/Heart.png')} />
                        <Text style={{}}>2,1k</Text>
                    </View>
                    <View style={{ margin: 24, flexDirection: 'row', height: '100%' }}>
                        <Image source={require('../../Img/Comment.png')} />
                        <Text style={{}}>2,1k</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 25, paddingLeft: 20 }}>
                    <Image source={require('../../Img/flag.png')} styles={{ paddingTop: 300 }} />
                </View>

            </View>
        </View>

    )
}

export default DetailNews

const styles = StyleSheet.create({})

