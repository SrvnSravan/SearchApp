import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function PhotoGallery() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPhoto = async () => {
    var requestOptions = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    fetch(
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e712f50f1d4c1a29fd47242b263748b6&format=json&nojsoncallback=1&auth_token=72157720847113914-1066336a213f4c9c&api_sig=f1e769488a0e86e3b4caa3820b66571f',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.photos.photo);
        setData(result?.photos?.photo);
        setLoading(false);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <>
              <TouchableOpacity key={item} onPress={() => {}}>
                <Text>{item.title}</Text>
                <Image
                  style={styles.Image}
                  source={{
                    uri: `https://live.staticflickr.com/7372/12502775644_acfd415fa7_w.jpg`,
                  }}
                />
              </TouchableOpacity>
            </>
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  Image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});
