import React, { Component } from "react";

class PhoneList extends Component {
  render() {
    // phoneMain에서 보내준 모든 매개변수 중에서
    // phoneList가 있을테니 내가 사용할수 있도록
    // (분해)추출해 달라
    const { phoneList } = this.props;

    return <div>전화번호 리스트</div>;
  }
}

export default PhoneList;
