import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';
import CustomButton from '../CustomButton';

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
          {/* <Button rounded={'full'} px={6} _hover={{ bg: 'orange.500' }}>
            Get started
          </Button> */}

          <CustomButton colorScheme="orange" bg="orange.400" text="Get Started"></CustomButton>

          <CustomButton
            text="Learn More"
            bg="useColorModeValue('#151f21', 'gray.900')"
          ></CustomButton>
        </Stack>
      </Stack>
    </Container>
  );
}
