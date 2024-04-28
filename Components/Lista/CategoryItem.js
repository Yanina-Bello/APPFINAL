import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card';

const CategoryItem = ({category}) => {
  return (
    <Pressable
    onPress={() => console.log("Category pressed: " + category)}
    >
      <Card style = {styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
    </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: colors.teal600,
        width: 250,
        height: 40,
        shadowColor: "#000",
        shadowOffset:{
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    text: {
        color: colors.teal200,
        textAlign: 'center',
        fontSize: 20
    },
});