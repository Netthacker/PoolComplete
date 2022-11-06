import { Center, Text, Icon, Box, AspectRatio, Image} from "native-base";
import { Fontisto } from '@expo/vector-icons';

import { Button } from "../components/Button";
import { TittleLogo } from "../components/TittleLogo";
import { useAuth } from "../hooks/useAuth";


export function SignIn(){

  const { signIn, isUserLoading } = useAuth();

  

  return(
      <Center  flex={1} bgColor="gray.900">
        <AspectRatio  w="100%" ratio={9/16} h="100%" >
        <Image w="100%" h="100%" source={require('../assets/background.png')} alt="background" resizeMode="cover"></Image>
        </AspectRatio>
          <Center position='absolute' top="40%">
            <TittleLogo/>  
            <Button
              title="ENTRAR COM GOOGLE"
              leftIcon={ <Icon as ={Fontisto} name="google" color="white" size="md" />}
              type="SECONDARY"
              mt={5}
              onPress={signIn}
              isLoading={isUserLoading}
              _loading={{_spinner:{color:'#f1f1f1'}}}
            />
            <Text color="white" textAlign="center" mt={4} >
              Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
            </Text>
          </Center>
      </Center>
)}