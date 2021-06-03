import React from 'react';
import { Text, View } from 'react-native';

// import MapView from 'react-native-maps';
import MapView from 'react-native-web-maps';
// import MapView from './components/MapView';

export default function App() {
  return (
    <View style={{flex:1, backgroundColor:'#996666'}}>
      <MapView style={{flex:1, width:'100%', backgroundColor:'red'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
