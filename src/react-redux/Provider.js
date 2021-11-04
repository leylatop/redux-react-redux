/*
 * @Author: your name
 * @Date: 2021-10-25 23:37:12
 * @LastEditTime: 2021-10-25 23:41:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-redux\react-redux\Provider.js
 */
import React from 'react'
import ReactReduxContext from './ReactReduxContext'

function Provider(props) {
    return (
        <ReactReduxContext.Provider value={{store: props.store}}>
            {props.children}
        </ReactReduxContext.Provider>
    )
}

export default Provider