import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { Button, NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Result = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    NunitoSans_Regular: require('../../assets/Nunito_Sans/NunitoSans-Regular.ttf'),
    NunitoSans_SemiBold: require('../../assets/Nunito_Sans/NunitoSans-SemiBold.ttf'),
    NunitoSans_ExtraBold: require('../../assets/Nunito_Sans/NunitoSans-ExtraBold.ttf'),
    NunitoSans_Black: require('../../assets/Nunito_Sans/NunitoSans-Black.ttf'),
    Montserrat_Light: require('../../assets/Montserrat/Montserrat-Light.ttf'),
    Montserrat_SemiBold: require('../../assets/Montserrat/Montserrat-Medium.ttf'),
    Montserrat_Bold: require('../../assets/Montserrat/Montserrat-Bold.ttf'),
    Montserrat_BoldItalic: require('../../assets/Montserrat/Montserrat-BoldItalic.ttf'),
    Montserrat_LightItalic: require('../../assets/Montserrat/Montserrat-LightItalic.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%', flex: 1 }}>
      <View>
        <View
          style={{
            width: '100%',
            height: 96,
            backgroundColor: '#F5B870',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View style={{ marginLeft: 20, marginTop: 40, flexDirection: 'row' }}>
            <View>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{
                  fontFamily: 'Montserrat_Bold',
                  fontSize: 18,
                  lineHeight: 21.94,
                  color: 'white',
                }}
              >
                K???t qu??? M-CHART
              </Text>
            </View>
          </View>
        </View>
        <ScrollView stickyHeaderHiddenOnScroll>
          <View style={{ marginHorizontal: '16%', paddingBottom: '27%' }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 31,
              }}
            >
              <Image source={require('../../assets/Onboarding/result.png')} />
            </View>
            <View style={{ height: 51, marginTop: 33 }}>
              <Text style={{ fontFamily: 'Montserrat_Regular' }}>
                S??? ??i???m ?????t ???????c: 9
              </Text>
              <Text style={{ fontFamily: 'Montserrat_Bold' }}>
                K???t qu???: Nguy c?? cao
              </Text>
            </View>
            <View
              style={{
                marginTop: 5,
                height: 140,
                width: 299,
              }}
            >
              <Text
                style={{ fontFamily: 'Montserrat_Regular', lineHeight: 17.07 }}
              >
                K???t qu??? s??ng l???c cho th???y tr??? c?? nguy c?? t??? k???. B???n n??n ?????n c??c
                c?? s??? uy t??n v??? ????nh gi?? v?? ch???n ??o??n t??? k??? ????? x??c ?????nh ch??nh
                x??c v??? t??nh tr???ng c???a con m??nh. B???n c?? th??? t??m th???y t??n v?? ?????a
                ch??? c???a c??c c?? s??? trong:
                <Text
                  style={{
                    color: 'red',
                    fontFamily: 'Montserrat_Bold',
                    lineHeight: 17.07,
                  }}
                >
                  Danh s??ch m???t s??? c?? s??? y t??? t???p hu???n v?? hi???n ??ang c?? th???c hi???n
                  ????nh gi???, ch???n ??o??n t??? k???.
                </Text>
              </Text>
            </View>
            <View style={{ height: 140, width: 299 }}>
              <Text
                style={{
                  fontFamily: 'Montserrat_LightItalic',
                  marginTop: 30,
                  lineHeight: 17.07,
                }}
              >
                L??u ??: M-CHAT-R ch??? l?? b??? c??ng c??? s??ng l???c ????? ph??t hi???n tr??? c??
                nguy c?? t??? k??? v?? c??c r???i lo???n ph?? tri???n kh??c.
              </Text>
              <Text
                style={{
                  marginTop: 30,
                  fontFamily: 'Montserrat_BoldItalic',
                }}
              >
                K???t qu??? M-CHAT-R kh??ng ph???i k???t qu??? ch???n ??o??n!
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#447DB9',
                width: 299,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                marginTop: 50,
              }}
            >
              <Button
                colorScheme="#447DB9"
                onPress={() => navigation.navigate('Maps')}
              >
                T??m ki???m nh?? chuy???n m??n
              </Button>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: 299,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                marginTop: 15,
                borderColor: '#447DB9',
                borderWidth: 1,
              }}
            >
              <Button
                colorScheme="white"
                onPress={() => navigation.navigate('Home')}
              >
                Quay v??? trang ?????u
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Result />
    </NativeBaseProvider>
  );
};
