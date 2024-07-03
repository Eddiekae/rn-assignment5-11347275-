import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cartItemContainer}>
          <Image source={item.image} style={styles.cartItemImage} />
          <View style={styles.textConatiner}> 
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.cartItemName}>{item.name}</Text>
          <Text style={styles.cartItemPrice}>{item.price}</Text>
          </View>  
          <View > 
          <TouchableOpacity style={styles.button} onPress={() => removeFromCart(item)}>
            <Image source={require('../../assets/remove.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  textConatiner:{
    flex: 1,
    marginLeft: 10,
  },
  cartItemImage: {
    width: '40%',
    height: 200,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cartItemName: {
    fontSize: 15,
    color: '#888',
    marginVertical: 10,
  },
  cartItemPrice: {
    fontSize: 18,
    color: 'orange',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    top: 200,
  },
});

export default Cart;
