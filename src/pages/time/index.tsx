import React, { useState } from 'react';
import { View, Text, Image, Video } from '@tarojs/components'
import { Button, Toast } from "@taroify/core"
import "@taroify/core/Button/style"
import "@taroify/core/Toast/style"
import { ArrowLeft, Arrow  } from "@taroify/icons"
import { CardsInfo } from './constants';
import './index.less'

const Time: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(CardsInfo.length - 1);
  const handlePageChange = (nextPage: number) => {
    if (nextPage >= 0 && nextPage < CardsInfo.length) {
      setCurrentPage(nextPage);
    }
    if (nextPage === CardsInfo.length) {
      Toast.open('已经到最后了');
    }
  }
  const renderCard = () => {
    const currentCardInfo = CardsInfo[currentPage];
    return (
      <View className='card'>
        <Video objectFit='cover' src={currentCardInfo.imgSrc} />
        <Text>{currentCardInfo.desc}</Text>
      </View>
    )
  }
  return (
    <View className='index'>
      <View className='banner'>
        <Image src='https://jiangyufeng-time.oss-cn-beijing.aliyuncs.com/2.jpg' />
      </View>
      <View className='content'>
        <View className='middle'>
          <Text className='title'>-- {CardsInfo[currentPage].title}  --</Text>
          <View className='cards'>
            {renderCard()}
          </View>
        </View>
        <View className='operate'>
          <Button.Group variant='contained' shape='round' size='small'>
            <Button disabled={currentPage === 0} onClick={() => handlePageChange(currentPage - 1)} style={{ background: "linear-gradient(to right, #2402FA , #02AFFA)", color: "#fff" }}> <ArrowLeft /> 上一年</Button>
            <Button disabled={currentPage === CardsInfo.length - 1} onClick={() => handlePageChange(currentPage + 1)} style={{ background: "linear-gradient(to left, #2402FA , #02AFFA)", color: "#fff" }}>下一年 <Arrow /></Button>
          </Button.Group>
        </View>
      </View>
    </View>
  )
}

export default Time;
