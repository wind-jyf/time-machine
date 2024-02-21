import React, { useState } from 'react';
import { View } from '@tarojs/components'
import { Tabbar } from "@taroify/core"
import "@taroify/core/Tabbar/style"
import { TvOutlined, EnvelopOutlined } from "@taroify/icons"
import TimeComponent from '../time';
import About from '../about';

import './index.less';


const Index: React.FC<any> = () => {
  const [value, setValue] = useState(1);
  const renderChild = () => {
    switch (value) {
      case 1:
        return <TimeComponent />
      case 2:
        return <About />
    }
  }
  return (
    <View className='wrapper'>
      <View className='wrapper-child'>{renderChild()}</View>
      <Tabbar defaultValue={1} onChange={(val) => setValue(val)} className='custom-color'>
        <Tabbar.TabItem icon={<TvOutlined />} value={1}>时光机</Tabbar.TabItem>
        <Tabbar.TabItem icon={<EnvelopOutlined />} value={2}>其他</Tabbar.TabItem>
      </Tabbar>
    </View>
  )
}

export default Index;
