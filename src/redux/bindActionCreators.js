/**
 * 
 * @param {*} actionCreators action的创建者对象，里面集合了当前组件所有的action,或只有一个action方法
 * @param {*} dispatch 派发动作的方法，方法接收一个参数action
 * @returns 返回一个对象，或者一个方法 
 */
export default function bindActionCreators(actionCreators, dispatch) {
    // 当第一个参数是函数的时候，它是 actionCreator工厂函数，执行actionCreator函数会返回actiontype
    if(typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch)
    }
    const bindActionCreators = {};
    // actionCreators = {
    //     add:() => {return {type: 'ADD'}},
    //     minus: () => {return {type: 'minus'}}
    // }
    for (let key in actionCreators) {
        const actionCreator = actionCreators[key];  // key是add/minus方法
        if (typeof actionCreator === 'function') {
            bindActionCreators[key] = bindActionCreator(actionCreator, dispatch);
            // 相当于是下面的逻辑
            // let action = actionCreator();
            // bindActionCreators[key] = function() {
            //     dispatch(action);
            // }
        }
    }
    return bindActionCreators;
}

/**
 * 传入老的actionCreator，返回一个新的函数；调用新的函数，可以执行dispatch进行派发
 * @param {*} actionCreator 绑定action方法
 * @param {*} dispatch 进行派发
 * @returns 一个可以方法，执行此方法就表示执行dispatch
 */
function bindActionCreator(actionCreator, dispatch) {
    // 返回一个方法，执行这个方法就可以执行dispatch
    // 相当于是下面的逻辑
    // let action = actionCreator();
    // bindActionCreators[key] = function() {
    //     dispatch(action);
    // }
    return function (...args) {
        dispatch(actionCreator.apply(this, args));
    }
}