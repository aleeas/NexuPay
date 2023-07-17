import React from 'react';
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';

function FrequentlyUsed(): JSX.Element {
  const frequentData = [
    {
      icon: require('../../res/images/mobile_recharges.png'),
      title: 'Mobile Recharge',
    },
    {
      icon: require('../../res/images/bill_payment.png'),
      title: 'Bill Payments',
    },
    {
      icon: require('../../res/images/bank_transfer.png'),
      title: 'Bank Tranfer',
    },
    {
      icon: require('../../res/images/request_money.png'),
      title: 'Request Money',
    },
    {
      icon: require('../../res/images/bank_transfer.png'),
      title: 'Bank Tranfer',
    },
  ];
  return (
    <View style={styles.cardWrapper}>
      <Text
        style={{
          color: '#2F394E',
          fontSize: 17,
          fontWeight: '700',
          marginBottom: 10,
        }}>
        Frequently Used{' '}
      </Text>
      <ScrollView horizontal={true}>
        {frequentData.map((data, index) => {
          return (
            <View key={index} style={styles.cardWrapperData}>
              <Image source={data.icon} width={67} height={67} />
              <Text style={{maxWidth: 67, textAlign:'center'}}>{data.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
    width: '100%',
  },
  cardWrapperData: {
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    paddingRight: 15,
  },
});

export default FrequentlyUsed;
