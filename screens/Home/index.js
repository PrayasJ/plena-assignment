import { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import {
  setItems,
} from "../../redux/itemSlice";
import { LOADING_STATUS, SCREENS } from "../../api/constants";
import { fetchData } from "../../api/fetchData";
import { ItemCard } from "../../components/ItemCard";
import { ItemsContainer } from "../../components/ItemsContainer";
import { Header } from "../../components/Header";
import { CartContainer } from "../../components/CartContainer";
import { ProductContainer } from "../../components/ProductContainer";

export const Home = (props) => {
	//Define items and loading status
  const items = useSelector((state) => state.items.items);
	const favourites = useSelector((state) => state.items.favourites);
  const cart = useSelector((state) => state.items.cart);

  const dispatch = useDispatch();
  const [loadingStatus, setLoadingStatus] = useState(LOADING_STATUS.NOT_LOADED);
  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME);
  const [currentItem, setCurrentItem] = useState(items[1]);

	//Load Initial Data
  useEffect(() => {
    setLoadingStatus(LOADING_STATUS.LOADING);
    fetchData((value) => {
      dispatch(setItems(value));
      setLoadingStatus(LOADING_STATUS.LOADED);
    });
  }, []);

	const checkIsFavourite = (id) => {
		return (favourites[id] === true)
	}

  const backFn = () => {
    switch(currentScreen) {
      case SCREENS.HOME: 
        break
      default:
        setCurrentScreen(SCREENS.HOME)
        setCurrentItem(null)
    }
  }

  const openCart = () => {
    setCurrentScreen(SCREENS.CART)
    setCurrentItem(null)
  }

  const openProduct = (item) => {
    setCurrentItem(item)
    setCurrentScreen(SCREENS.PRODUCT)
  }

  const getCartSize = () => {
    let cartSize = 0;
    Object.keys(cart).forEach(id => {
      cartSize += cart[id];
    })
    return cartSize;
  }

  const getCartInfo = () => {
    let cartInfo = {};
    Object.keys(cart).forEach(id => {
      cartInfo[id] = items[id];
    })

    return cartInfo;
  }

  if (loadingStatus == LOADING_STATUS.NOT_LOADED) {
    return <></>;

  } else if (loadingStatus == LOADING_STATUS.LOADING) {
    return <ActivityIndicator />;

  } else {
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.container} onLayout={props.handleOnLayout}>
        {currentScreen == SCREENS.HOME && 
          <ItemsContainer 
            items={items} 
            checkIsFavourite={checkIsFavourite}
            openProduct={openProduct}
          />
        }
        {currentScreen == SCREENS.CART &&
          <CartContainer
            cart={cart}
            cartInfo={getCartInfo()}
          />
        }
        {currentScreen == SCREENS.PRODUCT &&
          <ProductContainer
            item={currentItem}
            isFavourite={checkIsFavourite(currentItem.id)}
            openCart={openCart}
          />
        }
        </View>
      </ScrollView>
      <Header
          backFn={currentScreen == SCREENS.HOME ? null : backFn}
          openCart={openCart}
          cartSize={getCartSize()}
          currentScreen={currentScreen}
        />
      </SafeAreaView>
    );
  }
};
