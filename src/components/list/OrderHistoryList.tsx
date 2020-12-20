import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import OrderApi from '../../api/OrderApi';

const OrderHistoryList = () => {
  const navigation = useNavigation();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    OrderApi.fetchOrderDate('/api/member/order/history', 1, setOrder);
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.button}>
        <Button
          title={item.date}
          onPress={() =>
            navigation.navigate('OrderList', {
              id: item.orderId,
              date: item.date,
            })
          }
        />
        <Text>合計金額:{item.totalPrice}円</Text>
      </View>
    );
  };
  return (
    <View>
      <Text>注文履歴</Text>
      <FlatList data={order} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default OrderHistoryList;
