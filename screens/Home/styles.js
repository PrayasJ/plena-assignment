import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 22,
      paddingTop: 72,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
      item: {
          border: 'solid black 1px',
          margin: 1,
          padding: 1,
      }
  });