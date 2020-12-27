import {IMember} from '../interface/Api';
class Member implements IMember {
  constructor(public email: string, public password: string) {
    this.email = email;
    this.password = password;
  }
}
export default Member;
