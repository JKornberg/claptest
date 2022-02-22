

import { Container, Flex, VStack, Button, Divider, Text, Center, HStack, Image, InputGroup, Box, Link } from '@chakra-ui/react'
import Head from 'next/head';
import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { ReactNode, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { Form, Formik } from 'formik';
import { MultiFileUploadField } from '../upload/MultiFileUploadField';
import { signIn, useSession } from "next-auth/react"
import AzureADB2C from 'next-auth/providers/azure-ad-b2c';






function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleClick = () => inputRef.current?.click()
  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return 'Files is required'
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024)
      const MAX_FILE_SIZE = 10
      if (fsMb > MAX_FILE_SIZE) {
        return 'Max file size 10mb'
      }
    }
    return true
  }

  const { data: session, status } = useSession()

  return (
    <div>
      <Head>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" /> */}
      </Head>
      <Container maxW="container.xl" p={0}>
        <VStack w="full" h="full" p={10} alignItems="start">
          <Text>{status}</Text>
          {
            (status === 'loading') ? <Text>Loading...</Text> :
            (status === 'authenticated') ? <Text>Authenitcated</Text> :   <button onClick={() => signIn('azure-ad-b2c')}>Sign in with Email</button>
          }
          {/* <input type='file' id='file' ref={inputFile}></input> */}
          <Link href="/" onClick={handleClick}>Test</Link>
          <Container pt={50} pb={50} borderRadius='xl' bg='blue.700'><MultiFileUploadField /></Container>
          <Text>History</Text>
          <Divider bgColor='black' />
          <HStack h='50px' w='50px' bgColor={'gray.500'}>
            <Image></Image>
          </HStack>
        </VStack>

      </Container>
    </div>
  );
}

export default Home;
