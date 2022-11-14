import { Box, Container, Heading, Img, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { BiFontSize } from 'react-icons/bi'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'


const headingoptions ={
  pos : "absolute",
  left : "50%",
  top : "50%",
  transform : "translate(-50%,-50%)",
  textTransform : "uppercase",
  p: "4",
  size : '4xl'
}

const Home = () => {

  const MyCarousel =() =>(
    <Carousel 
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs = {false}
    showArrows ={false}
    showIndicators ={false}

    >
      <Box w ="full" h ={'100vh'}>
    
     <Img src={img1}  />
     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
      Watch the future
     </Heading>
    
      </Box>
      <Box w ="full" h ={'100vh'}>
    
     <Img src={img2} />
     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
      Future is gaming
     </Heading>
    
      </Box>
      <Box w ="full" h ={'100vh'}>
    
     <Img src={img3} alt="Image not found" />
     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
      Watch the future
     </Heading>
    
      </Box>
      <Box w ="full" h ={'100vh'}>
    
     <Img src={img4} alt="Image not found" />
     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
      Watch the future
     </Heading>
    
      </Box>
   
    
    </Carousel>
  )
  return (
   <Box>
<MyCarousel />

<Container maxW={'container.xl'} minH={'100vh'} p="16">
  <Heading
  textTransform={"uppercase"}
  py ="2"
  w={'fit-content'}
  borderBottom={'2px solid'}
  m={'auto'}
  >
    Services
  </Heading>
  <Stack
  h="full"
  p="4"
  alignItems={'center'}
direction = {['column','row']}
>
  <Img src={img5} h={['40', '400']} filter = {'hue-rotate(-130deg)'} />

<Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quo quos, deleniti aspernatur, reprehenderit ratione blanditiis quae rem veniam aliquam natus, ipsam alias vitae voluptas? Ad ex voluptate accusantium quos alias, molestiae officiis itaque laborum aliquam tempora asperiores. Delectus ab excepturi possimus praesentium maxime ullam hic mollitia culpa, consequatur maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veniam eaque laudantium obcaecati soluta accusamus commodi consequatur eveniet totam voluptatum.
</Text>
  </Stack>


</Container>
    </Box>

  )
}


export default Home