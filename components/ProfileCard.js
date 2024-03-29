import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  propNames,
} from '@chakra-ui/react';
import CustomButton from './CustomButton';

export default function ProfileCard(props) {
  return (
    <Center py={6}>
      <Box
        border="1px"
        borderColor="gray.400"
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image
          h={'120px'}
          w={'full'}
          alt={'Profile image'}
          src={
            props.coverPicture ||
            'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Night-Thumb.jpg'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={props.imageUrl}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {props.name}
            </Heading>
            <Text color={'gray.500'}>{props.handle}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{props.stats.totalFollowing}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Following
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{props.stats.totalFollowers}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack>

          <CustomButton mt="8" text="Connect"></CustomButton>
        </Box>
      </Box>
    </Center>
  );
}
