import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'


import { getNews } from '../../http/NewHTTP';
import { UserContext } from '../Login/UserContext';
import { searchNew } from '../../http/NewHTTP';

const All = (props) => {
  const { navigation, text } = props;
  const [News, setNews] = useState([])
  const [Babe, setBabe] = useState([])
const { keyword } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNews([]);
        setNews(response);
        
      } catch (error) {

      }
    }
    fetchData();
  }, [News]);
  const onSearch = async (text) => {
  //   try {
  //     const response = await searchNew(text);
  //     // console.log(response.data)
  //     text === undefined&& text===null ? News : setNews(response.data);
  
    
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  }
  const renderItem = (values) => {
    const { item } = values;

    return (
      <TouchableOpacity onPress={() => {
        console.log(item._id)

        return (

          navigation.navigate('Detail', { id: item._id })

        )
      }}>
        <View style={styles.item}>
          <Image source={{ uri: item.image }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
            resizeMode='contain' onPress={() => {
              return (console.log(item.Image))
            }} />
          <View style={styles.TextInItem}>
            <Text>{item.country}</Text>

            <Text style={styles.TextNews} numberOfLines={1}>{item.title}</Text>

            <View style={styles.ArowIcon}>
              <View style={styles.ArowB}>
                <View style={styles.IconIn}>
                  <Image style={{ width: 15, height: 15, marginTop: 3, marginRight: 3 }} source={require('../../Img/iconNews.png')} />
                  <Text style={{ fontSize: 13, fontWeight: '700', color: '#000' }}>{item.nameNews}</Text>
                </View>
                <View style={styles.IconIn}>
                  <Image style={{ width: 15, height: 15, marginTop: 3, marginRight: 3 }} source={require('../../Img/iconClock.png')} />
                  <Text style={{ fontSize: 13 }}>{item.time}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={require('../../Img/IconEclip.png')}></Image>
              </TouchableOpacity>


            </View>
          </View>
          <View>

          </View>
        </View>
      </TouchableOpacity>

    )
  }
  
onSearch(keyword)
  return (
    
    <View style={styles.body}>
   
      <FlatList data={News}
        renderItem={renderItem}
        keyExtractor={(item, index) => item._id}
        showsVerticalScrollIndicator={false}

      >

      </FlatList>
    </View>
  )
}

export default All

const styles = StyleSheet.create({
  ArowB: {
    flexDirection: 'row',

  }, IconIn: {
    flexDirection: 'row',
    width: 85,
    lineHeight: 0.16
  }, ArowIcon: {
    width: 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, TextNews: {
    height: 50,
    fontWeight: '700',
    color: '#000',
    overflow: 'visible',
    fontSize: 16,
    width: 250,
    marginTop: 5

  }, TextInItem: {
    width: '100%',
    height: '100%',
    marginLeft: 5
  }, item: {
    marginTop: 10,
    flexDirection: 'row'
  }, body: {
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,

  }
})
var Data = [{
  id: 1,
  Image: '',
  News: `Ukraine's President Zelensky to BBC: Blood money being paid...`,
  nameNews: 'BBC news',
  time: '14h ago',
  country: 'Europ',
  iconNew: `../../../Img/iconNews.png`
}, {
  id: 2,
  // Image:'../../../Img/Ukraina.png',
  News: `Her train broke down. Her phone died. And then she met her...`,
  nameNews: 'BBC news',
  country: 'Europ',
  time: '14h ago',
  iconNew: `../../../Img/iconNews.png`
},
{
  id: 3,
  // Image:'../../../Img/Ukraina.png',
  News: `Her train broke down. Her phone died. And then she met her...`,
  nameNews: 'BBC news',
  country: 'Europ',
  time: '14h ago',
  iconNew: `../../../Img/iconNews.png`
},
{
  id: 4,
  // Image:'../../../Img/Ukraina.png',
  News: `Her train broke down. Her phone died. And then she met her...`,
  nameNews: 'BBC news',
  country: 'Europ',
  time: '14h ago',
  iconNew: `../../../Img/iconNews.png`
},
{
  id: 5,
  // Image:'../../../Img/Ukraina.png',
  News: `Her train broke down. Her phone died. And then she met her...`,
  nameNews: 'BBC news',
  country: 'Europ',
  time: '14h ago',
  iconNew: `../../../Img/iconNews.png`
},
{
  id: 6,
  // Image:'../../../Img/Ukraina.png',
  News: `Her train broke down. Her phone died. And then she met her...`,
  nameNews: 'BBC news',
  country: 'Europ',
  time: '14h ago',
  iconNew: `../../../Img/iconNews.png`
},
{
  id: 7,
  // Image:'../../../Img/Ukraina.png',
  News: `Her train broke down. Her phone died. And then she met her...`,
  nameNews: 'BBC news',
  country: 'Europ',
  time: '14h ago',
  iconNew: `../../../Img/iconNews.png`
}, {
  id: 8,
  // Image:'../../../Img/Ukraina.png',
  News: `Her train broke down. Her phone died. And then she met her...`,
  nameNews: 'BBC news',
  country: 'Europ',
  time: '14h ago',
  iconNew: `../../../Img/iconNews.png`
}
]