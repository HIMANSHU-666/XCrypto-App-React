import { VStack, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <>
      <VStack h={'90vh'} justifyContent={"center"}>
        <Spinner size="xl" color="blue.500" />
      </VStack>
    </>
  )
}

export default Loader
