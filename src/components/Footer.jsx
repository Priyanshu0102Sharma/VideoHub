import { Box, Button, Heading, HStack, Stack, VStack , Input,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack 
        direction={['column','row']}
        >
            <VStack alignItems={'stretch'} w={'full'} px={'4'} textAlign={'center'}>
            <Heading size='md' textTransform={'uppercase'}>Subscribe to Get updates</Heading>

            <HStack
            borderBottom={'2px solid white'}
            py='2'
            >
                <Input placeholder='Enter Email here....' border={'none'} borderRadius={'none'}></Input>
                <Button 
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
                outline={'none'}
                >
                  <AiOutlineSend size={20} />
                </Button>
            </HStack>
                    </VStack>

                    <VStack w={'full'}
                    borderLeft={['none','1px solid white']}
                    borderRight={['none','1px solid white']}
                    >

                    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                        Video hub

                    </Heading>

                    <Text>All rights recieved</Text>

                    </VStack>


                    <VStack w={'full'}>
                        <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                        <Button variant={'link'} colorScheme={'cyan'}>
                        <a href="https://www.linkedin.com/in/priyanshu-sharma-/" target={'blank'}>Linkedin</a>

                        </Button>
                        <Button variant={'link'} colorScheme={'cyan'}>
                        <a href="https://www.instagram.com/invites/contact/?i=apjduhbrev3h&utm_content=i1dmn32" target={'blank'}>Instagram</a>

                        </Button>
                        <Button variant={'link'} colorScheme={'cyan'}>
                        <a href="https://twitter.com/007priyanshu007" target={'blank'}>Twitter</a>

                        </Button>

                    </VStack>

        </Stack>

    </Box>
  )
}

export default Footer