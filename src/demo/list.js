import React, { Component } from 'react';
export default class List extends Component {
    // 当state改变的时候 才会触发render函数 页面才会重新渲染
    state = {
        isShow: false
    }
    // setState参数可以是一个对象，也可以是一个函数但是返回值必须是一个对象
    changeShow = () => {
        // this.setState({
        //     this.state.isShow: !isShow
        // })
        console.log(this.state)
    };
    render() {
        let { data } = this.props
        let { title, list } = data;
        // let { isShow } = this.state;
        let isShow = false
        return (
            <div className={`friend-group${isShow ? 'expanded' : ''}`}>
                <dt className="friend-group" onClick={() => {
                    this.isShow = !this.isShow
                    console.log(this.isShow)
                }}>{title}</dt>
                {list.map((v, index) => <dd key={index}>{v.name}</dd>)}
            </div>
        );
    }
}