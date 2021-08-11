import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';


ReactDOM.render(
    <div>
        <Counter1 />
        <Counter2 />
    </div>, document.getElementById('root'))

// 可能会有很多组件，每个组件都有自己的状态、动作
// 规定redux只能有一个仓库，只能有一个reducer、一个状态，都放在一起会比较乱
// 可以写很多reducer，每个reducer有自己的状态
// 然后将众多reducer进行合并 combineReducers