import { Container, Heading, Input, InputGroup, VStack, Checkbox } from '@chakra-ui/react'
import React from 'react'
import { LuSearch } from 'react-icons/lu'

export default function HomePage() {
  return (
    <>
      <Container maxW="md" pt={8}>
        <VStack >
          <Heading size="3xl">
            Taskly
          </Heading>
          <InputGroup pt={4} size="md" flex="1" startElement={<LuSearch/>}>
            <Input placeholder='Search note...'/>
          </InputGroup>
          <Checkbox.Root>
            <Checkbox.HiddenInput />
              <Checkbox.Control />
            <Checkbox.Label>Todo note</Checkbox.Label>
          </Checkbox.Root>
        </VStack>
      </Container>
    </>
  )
}
