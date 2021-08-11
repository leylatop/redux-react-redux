import React, { Component } from 'react'
import store from '../store'
import actions from '../store/actions/counter1'
import { bindActionCreators } from '../redux'

// 将所有action和dispatch进行绑定，返回一个对象，对象的属性为action对应的方法
// boundActions = {
//     add: () => {
//         // 执行dispatch,dispatch内部执行了reducer
//         store.dispatch(action)
//     },
//     minus: () => {
//         // 执行dispatch,dispatch内部执行了reducer
//         store.dispatch(action)
//     }
// }
const boundActions = bindActionCreators(actions, store.dispatch);
// const boundAdd = bindActionCreators(add, store.dispatch);   // 绑定时候直接写boundAdd
// const boundMinus = bindActionCreators(minus, store.dispatch); // 绑定时候直接写boundMinus

// const 
export default class Counter1 extends Component {
    state = {
        number: 0
    }
    componentDidMount() {
        // sunscribe的回调方法是reducer执行完毕，更新state全局发布
        // this.unsubscribe 是取消订阅的方法
        this.unsubscribe = store.subscribe(() => {
            console.log(store);
            console.log(store.getState())
            this.setState({
                number: store.getState().counter1.number,
            })
        })
    }

    componentWillUnmount() {
        // 组件销毁之前取消订阅
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={boundActions.add}>ADD</button>
                <button onClick={boundActions.minus}>MINUS</button>
                <button onClick={boundActions.reset}>RESET</button>
            </div>
        )
    }
}
