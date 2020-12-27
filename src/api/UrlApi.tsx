import {Platform} from 'react-native';

export default class Url {
  static get(request: string): string {
    return this.baseUrl() + request;
  }

  static baseUrl(): string {
    const android = 'http://10.0.2.2:8080';
    const ios = 'http://192.168.1.16:8080';
    if (Platform.OS === 'ios') {
      return ios;
    } else {
      return android;
    }
  }
  static image(imagePath: string): string {
    return this.baseUrl() + '/image/' + imagePath;
  }
}
