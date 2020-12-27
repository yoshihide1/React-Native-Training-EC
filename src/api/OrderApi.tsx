import axios from 'axios';
import {Alert} from 'react-native';
import UrlApi from './UrlApi';

export default class OrderApi {
  /**
   *
   * 注文詳細を保存する
   *
   * @param request リクエスト先のURL
   * @param data 注文詳細情報
   * @param nav 保存後に注文完了ページに遷移させるためのナヴィゲーション
   */
  static saveOrderDetail(request: string, data: any, nav: any): void {
    const url = UrlApi.get(request);
    axios
      .post(url, data)
      .then((res) => {
        nav.navigate('Complete', {
          orderId: res.data,
        });
      })
      .catch(() => {
        Alert.alert('通信エラー,,saveOrder');
      });
  }
  /**
   *
   * 注文詳細を保存する
   *
   * @param request リクエスト先のURL
   * @param id 注文ID
   * @param setState
   */
  static fetchOrderDetails(
    request: string,
    orderId: number,
    setState: Function,
  ) {
    const url = UrlApi.get(request + '/' + orderId);
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
      })
      .catch(() => {
        Alert.alert('通信エラー,,fetchOrder');
      });
  }

  static fetchOrderItemHistory(
    request: string,
    memberId: number,
    setState: Function,
  ) {
    const url = UrlApi.get(request);
    axios
      .get(`${url}/${memberId}`)
      .then((res) => {
        setState(res.data);
      })
      .catch(() => {
        Alert.alert('通信エラー,,fetchOrderHistory');
      });
  }

  static fetchOrder(request: string, memberId: number, setState: Function) {
    const url = UrlApi.get(request);
    axios.get(`${url}/${memberId}`).then((res) => {
      console.log('-----------response', res.data);
      setState(res.data);
    });
  }

  static fetchMemberId(request: string, email: any, setState: Function) {
    const url = UrlApi.get(request);
    axios.post(url, email).then((res) => {
      console.log('-------------id', res.data);
      setState(res.data);
    });
  }
}
