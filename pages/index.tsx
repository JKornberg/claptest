
import { Container, Flex, VStack, Button, Divider, Text, Center, HStack, Image } from '@chakra-ui/react'
import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" /> */}
    </Head>
    <Container maxW="container.xl" p={0}>
      <VStack w="full" h="full" p={10} alignItems="start">
        <Button colorScheme={'blue'} size='lg' borderRadius='3xl' alignSelf={'center'} m='20'>Upload 3D File (STL, STEP)</Button>
        <Text>History</Text>
        <Divider bgColor='black' />
        <HStack h='50px' w='50px' bgColor={'gray.500'}>
          {/* <Image></Image> */}
        </HStack>
      </VStack>

    </Container>
  </div>
);


export default Home;
