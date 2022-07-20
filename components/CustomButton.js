import { Button, useColorModeValue } from '@chakra-ui/react';

export default function CustomButton(props) {
  return (
    <Button
      w={'full'}
      mt={props.mt}
      border="1px"
      borderColor="gray.400"
      bg={props.bg}
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
