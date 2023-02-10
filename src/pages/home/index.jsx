import { View, Text, Image } from '@tarojs/components'
// import Taro from '@tarojs/taro'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { AtButton } from 'taro-ui'
import { useRecoilState, useRecoilValue } from 'recoil'
import { apiGetAText } from '../../api/home'
import { GLOBAL_COUNT, TEST_ID } from '../../store'
import sss from '../../asset/images/test-img.jpg'

export default (props) => {
  const [num, setNum] = useState(1);
  const [globalCount, resetGlobalCount] = useRecoilState(GLOBAL_COUNT);

  // 全局异步状态
  const testId = useRecoilValue(TEST_ID());

  // 相当于 mounted 和created
  useEffect (()=>{
    setNum(num)
  },[num])
  const handleClick = async (e) => {
    // console.log(e)
    setNum(num+1)
    resetGlobalCount(globalCount+1)
    console.log(testId)
    const res = await apiGetAText()
  }

   

  return (
    <View className='index'>
      <Text>num{num}</Text>
      <Text> globalCount:{ globalCount } </Text>
      {/* <Text> 接口:{ testId } </Text> */}
      <AtButton type='primary' size='small' onClick={(e) => handleClick(e)}>点我+1</AtButton>
      <Image src={sss} />
    </View>
  )
}


