import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        paddingTop={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Token{' '}
          <Text as={'span'} color={'orange.400'}>
            messaging
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Token Messaging is a project that allows you to connect and message directly accounts
          based on interests. You can pay to connect with relevant accounts on Lens and be paid by
          others to connect.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
          >
            Get started
          </Button>
          {/* <Button rounded={'full'} px={6}>
            Learn more
          </Button> */}
        </Stack>
      </Stack>
    </Container>
  );
}
