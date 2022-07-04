import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Entypo
            name="menu"
            size={35}
            style={styles.MenuIcon}
          />
          <Text style={styles.Title}>Home</Text>
        </View>
        <View style={{borderWidth: 1}} />
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              marginVertical: 8,
            }}
            onPress={() => navigation.navigate('Product')}>
            <MaterialCommunityIcons name="bat" size={30} />
            <Text style={styles.Fashion}>Belts</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </TouchableOpacity>
          <View style={{borderWidth: 1}} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              marginVertical: 8,
            }}
            onPress={() => navigation.navigate('Extra')}>
            <Entypo name="shopping-bag" size={30} />
            <Text style={styles.Fashion}>Handbags</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </TouchableOpacity>
          <View style={{borderWidth: 1}} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              marginVertical: 8,
            }}>
            <MaterialCommunityIcons name="safety-goggles" size={30} />
            <Text style={styles.Fashion}>Goggles</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </View>
          <View style={{borderWidth: 1}} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              marginVertical: 8,
            }}>
            <MaterialCommunityIcons name="watch" size={30} />
            <Text style={styles.Fashion}>Watches</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </View>
          <View style={{borderWidth: 1}} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              marginVertical: 8,
            }}>
            <MaterialCommunityIcons name="alpha-f-box" size={30} />
            <Text style={styles.Fashion}>Fashion</Text>
            <MaterialCommunityIcons name="chevron-double-right" size={30} />
          </View>
          <View style={{borderWidth: 1}} />         
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: 16,
  },
  Title: {
    fontSize: 22,
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    marginRight: 60,
  },
  Fashion: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    alignSelf: 'center',
    marginLeft: 10,
  },
});
