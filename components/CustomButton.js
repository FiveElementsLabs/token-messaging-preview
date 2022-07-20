import { Button, useColorModeValue } from '@chakra-ui/react';

export default function CustomButton(props) {
  return (
    <Button
      w={'full'}
      mt={8}
      border="1px"
      borderColor="gray.400"
      bg={useColorModeValue('#151f21', 'gray.900')}
      color={'white'}
      rounded={'md'}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
    >
      {props.text}
    </Button>
  );
}
