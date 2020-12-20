import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Text, Button} from 'react-native';
import {Body, Card, CardItem, Thumbnail, Left} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Url from '../../api/UrlApi';
import {useNavigation} from '@react-navigation/native';

const OrderList = ({route}: any) => {
  const {id, date} = route.params;
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    OrderApi.fetchOrderItemHistory(
      '/api/member/order/history/item',
      id,
      setItems,
    );
  }, []);

  const renderItems = ({item}: {item: any}) => {
    return (
      <View>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri: Url.image(item.imagePath),
                }}
              />
              <Body>
                <Text>商品名:{item.imagePath}</Text>
                <Text>商品名:{item.name}</Text>
                <Text>
                  価格:{item.unitPrice} 個数:{item.quantity}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Body>
          <Text>注文履歴</Text>
          <Text>注文日時:{date}</Text>
        </Body>
      </View>
      <View style={styles.list}>
        <FlatList style={styles.list} data={items} renderItem={renderItems} />
      </View>
      <View>
        <Button title="戻る" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
  list: {
    flex: 10,
    margin: 3,
  },
});

export default OrderList;
