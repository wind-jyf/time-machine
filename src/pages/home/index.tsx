import React from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components'
import { Button } from "@taroify/core"
import "@taroify/core/Button/style"
import "@taroify/core/Tag/style"
import './index.less'


const Home: React.FC = () => {
  const handleClick = () => {
    Taro.reLaunch({
      url: '/pages/index/index',
    })
  }
  return (
    <View className='home'>
      <View className='home-title'>即将开启在线时光机</View>
      <View className='home-title'>Are you ready !!!</View>
      <View className='home-img'><Image src='https://jiangyufeng-time.oss-cn-beijing.aliyuncs.com/1.jpeg' /></View>
      <View className='home-button'>
        <Button onClick={() => handleClick()} style={{ background: "linear-gradient(to right, #2402FA , #02AFFA)", color: "#fff" }} shape='round' variant='contained' block size='large'>开启时光机</Button>
      </View>
    </View>
  )
}

export default Home;
