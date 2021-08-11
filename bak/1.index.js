import { createStore } from "./redux";
let counterValue = document.getElementById('counterValue');
let counterAdd = document.getElementById('counterAdd');
let counterMinus = document.getElementById('counterMinus');


/**
 * 处理器函数
 * @param {*} state 老对象
 * @param {*} action 动作对象，是一个普通的js对象，对象中必须包含type熟悉
 */
function reducer(state = 0, action) {
    console.log(state);
    switch (action.type) {
        case 'ADD':
            return state + 1;

        case 'MINUS':
            return state - 1;

        default: 
            return state;
    }
}

let store = createStore(reducer);
console.log(store); //{getState: ƒ, dispatch: ƒ}

function render() {
    counterValue.innerHTML = store.getState();
}

store.subscribe(render);    // 每次状态更新就重新调用render方法

counterAdd.addEventListener('click', function() {
    store.dispatch({type: 'ADD'})
})
counterMinus.addEventListener('click', function() {
    store.dispatch({type: 'MINUS'})
})

