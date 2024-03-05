import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Newss from './Newss';

const News = (props) => {
    const {navigation} = props;
    return (

        <View style={styles.body}>
            <View style={styles.body1}>
                <View style={styles.header}>
                    <Image style={styles.imgKb} source={require('../../Img/smallKB.png')} />
                    <Image source={require('../../Img/Bell.png')} />
                </View>
                <View style={styles.ViewSearch}>
                    <Image style={styles.son1} source={require('../../Img/glass.png')}></Image>
                    <TextInput style={styles.Search} placeholder='Search'></TextInput>
                    <TouchableOpacity style={styles.son2}  onPress={()=>navigation.navigate('Search')}>
                    <Image  source={require('../../Img/Frame.png')}></Image>
                    </TouchableOpacity>
                    
                </View>
         
                    <View style={styles.ArowTrend}>
                        <TouchableOpacity>
                            <Text style={styles.Trend}>Trending</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.see}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainNews}>
                        <Image style={styles.imgBanner} source={require('../../Img/banner.png')} />
                        <Text style={styles.see}>Europe</Text>
                        <Text style={styles.Trend}>Russian warship: Moskva sinks in Black Sea</Text>
                        <View style={styles.iconNews}>
                            <View style={styles.iconNewsIn}>
                                <Image style={{ width: 15, height: 15, marginTop: 5 }} source={require('../../Img/iconNews.png')}></Image>
                                <Text style={[styles.Trend, { fontSize: 13 }]}>BBC News</Text>
                            </View>
                            <View style={styles.iconNewsIn}>
                                <Image style={{ marginTop: 5 }} source={require('../../Img/iconClock.png')}></Image>
                                <Text style={[styles.see, { fontSize: 13 }]}>4h ago</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ArowTrend}>
                        <TouchableOpacity>
                            <Text style={styles.Trend}>Latest</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.see}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <Newss></Newss>
          
            </View>
        </View>




    )
}

export default News

const styles = StyleSheet.create({
    iconNewsIn: {
        width: 80,
        height: 30,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',

    }, iconNews: {
        width: 150,
        height: 30,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    }, imgBanner: {
        width: '100%',
        borderRadius: 8
    }, mainNews: {
        width: '100%',

    }, see: {
        lineHeight: 24,
        fontSize: 14,
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: '400'
    }, Trend: {
        lineHeight: 24,
        fontWeight: '600',
        color: '#000000',
        fontSize: 16
    }, ArowTrend: {
        width: '100%',
        height: 34,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    }, son2: {
        position: 'absolute',
        top: 8,
        right: 5
    }, son1: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 10,
        left: 5
    }, ViewSearch: {
        height: 40,
        position: 'relative',
        marginTop: 30
    }, Search: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        padding: 12,
        paddingLeft: 30,
        borderRadius: 8,
        fontSize: 15
    }, imgKb: {
        width: 100,
        height: 30
    },
    header: {

        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    body1: {

        width: '100%',
        height:'100%',
        padding: 24,
        backgroundColor: '#fff'
    }, body: {
        width: '100%',
        height: '100%',
        flex: 1
    }
})
