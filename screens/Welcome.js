/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {images, icons} from '../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Welcome = props => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 100,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{flex: 1}}>
        <View
          style={{
            flex: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              width: '100%',
              alignItems: 'center',
            }}>
            <Image
              source={icons.fire}
              style={{width: 30, height: 30, marginStart: 10, marginEnd: 5}}
            />
            <Text style={{color: 'white', fontSize: 20}}>ENJOY WORKS.CO</Text>
            <Image
              source={icons.question}
              style={{
                tintColor: 'white',
                width: 20,
                height: 20,
                marginLeft: 'auto',
                marginEnd: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', marginBottom: 10}}>Welcome to</Text>
          <Text
            style={{
              color: 'white',
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            {' '}
            EnjoyWorks!
          </Text>
          <Text style={{color: 'white'}}>Please select your account type</Text>
        </View>
        <View style={{flex: 40, paddingHorizontal: 10}}>
          <TouchableOpacity
            style={{
              marginBottom: 10,
              marginTop: 20,
              backgroundColor: '#fff',
              borderColor: 'white',
              height: 50,
              width: '100%',
              borderWidth: 1,
              borderRadius: 4,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            {/* <Image
              source={icons.check}
              style={{
                width: 20,
                height: 20,
              }}
            /> */}
            <Icon name="check-circle" />
            <Text
              style={{
                color: '#F3705A',
                fontWeight: '600',
              }}>
              Influencer
            </Text>
            <View style={{width: 20}} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginBottom: 10}}>
            <Text
              style={{
                color: 'white',
                borderColor: 'white',
                height: 50,
                width: '100%',
                borderWidth: 1,
                borderRadius: 4,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Business
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                borderColor: 'white',
                height: 50,
                width: '100%',
                borderWidth: 1,
                borderRadius: 4,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Individual
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 20, backgroundColor: 'yellow'}}>
          <Text> 20%</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
