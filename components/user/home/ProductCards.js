import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import colors from '../../../constants/colors';
import { Card } from '../../Card'

const ProductCard = ({ data, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={(data) => data.id}
        data={data}
        renderItem={({ item }) => (
          <View>
            <Card item={item} isAdmin={false} navigation={navigation} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default ProductCard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});
