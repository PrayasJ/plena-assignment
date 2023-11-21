import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Image } from 'expo-image';
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ItemCard } from "../ItemCard";

export const ItemsContainer = (props) => {
  const { items, checkIsFavourite } = props;

  return (
    <View style={styles.container}>
        {Object.keys(items).map((index, i) => {
        return <ItemCard 
          item={items[index]} 
          isFavourite={checkIsFavourite(index)} 
          key={index}
          openProduct={props.openProduct}
        />;
        })}
    </View>
  );
};
