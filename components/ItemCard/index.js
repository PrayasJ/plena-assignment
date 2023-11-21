import { Pressable, Text, View } from "react-native";
import { Image } from 'expo-image';
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart, addToFavourites, removeFromFavourites } from "../../redux/itemSlice";

export const ItemCard = (props) => {
  const dispatch = useDispatch();
  const { item, isFavourite } = props;

  var icon = isFavourite ? 
    require('../../assets/images/favourite_1.png') : 
    require('../../assets/images/favourite_0.png');
  return (
    <Pressable
      style={styles.item}
      onPress={() => {props.openProduct(item)}}

    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
        />
        <Pressable 
          style={styles.favouriteContainer}
          onPress={() => {
            if (isFavourite) {
              dispatch(removeFromFavourites(item.id));
            } else {
              dispatch(addToFavourites(item.id));
            }
          }}
        >
          <Image
            source={icon}
            style={styles.favouriteImage}
          />
        </Pressable>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.mainInfo}>
          <Text numberOfLines={1} style={styles.price}>${item.price}</Text>
          <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        </View>
        <Pressable 
          style={styles.addContainer}
          onPress={() => {
            dispatch(addToCart(item.id))
          }}
        >
          <Image
            source={require('../../assets/images/add.png')}
            style={styles.addImage}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};
