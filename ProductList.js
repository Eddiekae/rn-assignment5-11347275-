import React from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductList = ({ products, addToCart }) => {
  const renderItem=({ item }) => (
    <View style={styles.productContainer}>
      <View> 
      <ImageBackground source={item.image} style={styles.productImage}>
      <TouchableOpacity onPress={() => addToCart(item)}>
        <Image source={require('../../assets/add_circle.png')} style={styles.buttonIcon} />
        </TouchableOpacity>

      </ImageBackground> 
      <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
     
        
      </View>
      
    </View>
  )
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}

    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 8,    
    flex: 1,
  },
  productImage: {
    width: "100",
    height: 300,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productName: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: 'orange',
    marginBottom: 10,
  },
  button: {
   top: 240
  },
  buttonIcon: {
    width: 24,
    height: 24,
    top: 260,
    left: 145,
  },
});

export default ProductList;
