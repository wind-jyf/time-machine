import React from 'react';
import { View, Text } from '@tarojs/components'
import { Grid, Divider } from "@taroify/core"
import { ThumbCircle, Smile, Warning, Underway } from "@taroify/icons"
import "@taroify/core/Grid/style";
import "@taroify/core/Divider/style"
import './index.less'

const About: React.FC = () => {
  return (
    <View className='about'>
      <Divider>提醒事项</Divider>
      <Grid columns={2} square>
        <Grid.Item icon={<ThumbCircle  />} text='记得吃药' style={{ color: "#4EA510", fontSize: '60px' }} />
        <Grid.Item icon={<Underway />}  text='记得喝水' style={{ color: "#1989fa", fontSize: '60px' }} />
        <Grid.Item icon={<Warning />} text='记得不要吃太辣' style={{ color: '#CC1503', fontSize: '60px' }} />
        <Grid.Item icon={<Smile />} text='记得要永远快乐！' style={{ color: '#FF5733', fontSize: '60px' }} />
      </Grid>
      <Divider>个人的碎碎念</Divider>
      <View className='text'>
        <Text>记得从我们认识开始，就一直想要一起去做一个产品，但一直没有规划下来。</Text>
        <Text style={{ marginTop: '15px' }}>这次借助新年礼物，来完成了一个简单的小程序</Text>
        <Text style={{ marginTop: '15px', fontWeight: 'bold' }}>祝愿2024年我们越来越好！！！</Text>
      </View>
    </View>

  )
}

export default About;
