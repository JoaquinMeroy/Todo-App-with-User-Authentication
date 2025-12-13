import { Container, Heading, Input, InputGroup, VStack, Checkbox, HStack , Menu, Button, Portal, ClientOnly, Skeleton, IconButton} from '@chakra-ui/react'
import { useColorMode } from '@/components/ui/color-mode'
import { LuMoon, LuSun } from 'react-icons/lu'
import React from 'react'
import { LuSearch } from 'react-icons/lu'

export default function HomePage() {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Container maxW="md" pt={8}>
        <VStack >
          
          <Heading size="3xl">
            Taskly
          </Heading>

          <HStack pt="4" align="center">
            <InputGroup w="500px" size="md" flex="1" startElement={<LuSearch/>}>
              <Input placeholder='Search note...'/>
            </InputGroup>

            <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline" size="sm">
                Filter
              </Button>
            </Menu.Trigger>

            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-all">All</Menu.Item>
                  <Menu.Item value="new-complete">Complete</Menu.Item>
                  <Menu.Item value="new-incomplete">Incomplete</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>

          </Menu.Root>
          
          <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton onClick={toggleColorMode} variant="outline" size="sm">
              {colorMode === "light" ? <LuSun /> : <LuMoon />}
            </IconButton>
          </ClientOnly>

          </HStack>

          <VStack align="flex-start" w="100%">
            <Checkbox.Root>
              <Checkbox.HiddenInput />
                <Checkbox.Control />
              <Checkbox.Label>Todo note</Checkbox.Label>
            </Checkbox.Root>
          </VStack>

        </VStack>
      </Container>
    </>
  )
}
