/**
 * 创建仓库的方法，返回一个仓库，仓库就是一个js对象
 * @param {*} reducer 根据老状态和动作计算下一个新状态的方法，由用户自定义
 */
 export default function createStore(reducer) {
    let state;  //可以存放任意的内容
    let listeners = []; //存放发布订阅的函数，在dispatch阶段执行
    function getState() {   // dispatch还没执行之前，state都是函数内部默认的state
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action); 
        listeners.forEach(l=>l());  // 发布
    }

    // 实现订阅的功能，并提供取消订阅的方法
    function subscribe(listener) {
        listeners.push(listener);   //订阅

        // return一个取消订阅的方法
        return () => {
            // 取消订阅，供组件销毁时调用
            // let index = listeners.indexOf(listener);
            // listeners.slice(index, 1);  
            listeners = listeners.filter(l=> l!==listener)
        }
    }

    // 首次执行dispatch的时候，state的值还是默认的undefined，所以就会使用reducer方法的默认的state值
    // 源码中会默认执行一次dispatch，让state的值等于reducer中定义的值
    dispatch({type: '@@REDUX/INIT'})
    return {
        getState,
        dispatch,
        subscribe
    }
}