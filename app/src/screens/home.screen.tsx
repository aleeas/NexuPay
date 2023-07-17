import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import CarouselCards from '../components/CarouselCard';
import FrequentlyUsed from '../components/FrequentlyUsed';
import Services from '../components/Services';

interface HomeScreenProps{
  navigation:any;
}

function HomeScreen(props: HomeScreenProps): JSX.Element {    
  return (
    <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.sectionContainer}>
      <View>
        <CarouselCards nav={props}/>
        <FrequentlyUsed />
        <Services />
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20
  },
  
});

export default HomeScreen;
