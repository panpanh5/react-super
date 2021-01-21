//生命周期函数
import React, { Component } from 'react';
export default class LifeCycle extends Component {
    /**
     * 生命周期函数：
     * 
     * 1.挂载
     * 2.更新
     * 3.卸载
     */
    constructor() {
        super()
        console.log(this.props)//undefined
    }
    state = {
        name: 1,
    }

    static getDerivedStateFromProps(props, state) {
        // 静态方法里面没有this
        console.log(props, state, '渲染组件之前的')
        return true;
    }

    render() {
        let { name } = this.state
        console.log('渲染')
        return (<div>
            <input value={name} onChange={(e) => {
                this.setState({
                    name: e.target.value
                })
            }}></input>
            {name}
        </div>)
    }
    componentDidMount(e) {
        console.log(e, this, '挂载模块')
    }
    shouldComponentUpdate(props, state) {
        console.log(props, state, this, '组件自身更新')
        return true
        // 当return false的时候组件将不会更新
    }
    // componentWillUpdate(props, state) {
    //     console.log(props, state, this, '更新')
    // }
    getSnapshotBeforeUpdate(props, state) {
        console.log(props, state, this, '123')
        return false;
    }
    componentDidUpdate(props, state) {
        console.log(props, state, this, 'componentDidUpdate')
    }
    componentWillUnmount(props, state) {
        console.log(props, state, this, '卸载')
    }
}