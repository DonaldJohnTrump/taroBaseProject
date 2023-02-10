// import { Component } from 'react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import 'taro-ui/dist/style/index.scss'
import { AtToast } from 'taro-ui'
// import { AtToast } from 'taro-ui'
import './app.less'

React.$AtToast = function(params) {
  AtToast(params)
}

function App(props) {

  // AtToast({isOpen: true, text: '3333'})
  return (
    <RecoilRoot>
      {props.children}
    </RecoilRoot>
  );
}

export default App
