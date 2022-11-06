import { Flex, Text } from 'native-base';


export function TittleLogo(){
  return(
    <Flex direction="row" mb="2.5">
            
      <Text fontSize="md" pt={6} color="gray.200">
        Bolão da
      </Text>
       <Text fontSize={"4xl"} bold color="yellow.500"> Copa</Text>
  
    </Flex>
  )
}