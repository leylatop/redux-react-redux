import * as types from '../action-types';
/**
 * actionCreator 用来创建action的工厂函数，返回action
 * @returns action
 */
function add() {
    return { type: types.COUNTER1ADD }
}
function minus() {
    return { type: types.COUNTER1MINUS }
}
function reset() {
    return { type: types.COUNTERRESET }
}
const actions = { add, minus, reset };

export default actions;