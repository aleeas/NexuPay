import React from 'react';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

interface DetailCardProps{
  navigation:any;
}

function DetailCard(props: DetailCardProps): JSX.Element {
  const ecardLayout = [
    {
      rightCornerIcon: require('../../res/images/visa_mask_logo.png'),
      backgroundImage: require('../../res/images/background_black.png'),
      logo: require('../../res/images/logo_bank.png'),
      logoCard: require('../../res/images/visa_logo.png'),
      cardNumber: '**** ****  **** 1690',
      cardMembership: 'Platinum',
      cardExp: '01/22',
      cardHolderName: 'Sunny Aldevco',
    },
    {
      rightCornerIcon: require('../../res/images/visa_mask_logo.png'),
      backgroundImage: require('../../res/images/background_purple.png'),
      logo: require('../../res/images/logo_bank.png'),
      logoCard: require('../../res/images/mastercard_logo.png'),
      cardNumber: '**** ****  **** 1990',
      cardMembership: 'Platinum Plus',
      cardExp: '04/22',
      cardHolderName: 'Sunny Aveiro',
    },
  ];
  return (
    <View style={styles.sectionContainer}>
    <ScrollView>
      {ecardLayout.map((data, index) => {
        return (
          <ImageBackground
            key={index}
            style={styles.card}
            source={data.backgroundImage}>
            <ImageBackground
              style={styles.cardMask}
              source={data.rightCornerIcon}
            />
            <View style={styles.cardContent}>
              <Image source={data.logo} style={styles.cardLogo} />
              <Text style={{color: '#fff'}}>{data.cardNumber}</Text>
              <View style={styles.cardMembership}>
                <Text style={{color: '#fff'}}>{data.cardMembership}</Text>
                <Text style={{color: '#fff'}}>Exp {data.cardExp}</Text>
              </View>
              <View style={styles.cardMembership}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>
                  {data.cardHolderName}
                </Text>
                <Image source={data.logoCard} />
              </View>
            </View>
          </ImageBackground>
        );
      })}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    alignItems:'baseline',
    paddingHorizontal: 24,
  },
  textStyles: {
    color: '#2F394E',
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '700',
  },
  textSeeAll: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
  },
  card: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 200,
    width:327,
    borderRadius: 20,
    margin: 10,
    position: 'relative',
    zIndex: 10,
    padding: 20,
  },
  cardMask: {
    height: 200,
    width:327,
    zIndex: 11,
    position: 'absolute',
    top: 10,
    right: 5,
  },
  cardContent: {
    width: '100%',
    paddingHorizontal: 5,
    position: 'relative',
    zIndex: 12,
  },
  cardLogo: {
    marginTop: 10,
    marginBottom: 30,
  },
  cardMembership: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});

export default DetailCard;
