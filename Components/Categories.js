import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../Data/categories.json';
import CategoryItem from './CategoryItem';

const Categories = () => {

  return (
    <View style = {styles.container}>
    <FlatList
    styles={styles.container}
    renderItem={({item}) => <CategoryItem
category={item}
/>}
data = {categories}
keyExtractor={category => category}
/>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.green1,
      shadowColor: "black",
      textShadowOffset: {
        height: 5,
        width: 3,
      },
      elevation: 10,
      shadowOpacity: 1,
      shadowRadius: 1,
        flex: 1,
        width: '100%',
    }
})