import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Services(): JSX.Element {
  const serviceData = [
    {
      icon: require('../../res/images/icon_1.png'),
      title: 'Open Account',
    },
    {
      icon: require('../../res/images/icon_2.png'),
      title: 'Manage Card',
    },
    {
      icon: require('../../res/images/icon_1.png'),
      title: 'Open Account',
    },
    {
      icon: require('../../res/images/icon_2.png'),
      title: 'Manage Card',
    },
    {
      icon: require('../../res/images/icon_1.png'),
      title: 'Open Account',
    },
    {
      icon: require('../../res/images/icon_2.png'),
      title: 'Manage Card',
    },
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#2F394E',
          fontSize: 17,
          fontWeight: '700',
          paddingHorizontal: 10,
        }}>
        Service
      </Text>
      <FlatList
        data={serviceData}
        renderItem={({item}) => (
          <View style={styles.cardData}>
            <Image source={item.icon} width={67} height={67} />
            <Text style={{maxWidth: 118}}>{item.title}</Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 10,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  cardData: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginHorizontal: 10,
    marginBottom:20,
    borderRadius:16,
    backgroundColor:'#fff',
    paddingHorizontal: 10,
    paddingVertical: 22,
    shadowColor: '#1B1F44',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 0,
    
    elevation: 1,
  },
});

export default Services;
