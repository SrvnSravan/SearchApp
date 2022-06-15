import React from 'react';
import {View} from 'react-native';
import SearchBar from './app/screens/SearchBar';
import PhotoGallery from './app/screens/PhotoGallery';

function App() {
  return (
    <View>
      <SearchBar />
      <PhotoGallery />
    </View>
  );
}

export default App;
