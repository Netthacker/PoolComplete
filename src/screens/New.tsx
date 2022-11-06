import { useState } from 'react';

import { Heading, VStack, Text, useToast } from "native-base";

import { api } from '../services/api';

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

import { TittleLogo } from "../components/TittleLogo";


export function New(){

  const [title, setTitle] = useState('');
  const [isLoading,setIsLoading] = useState(false);

  const toast = useToast();


  async function handlePoolCreate(){
    if(!title.trim()){
      setTitle('')
      return toast.show({
        title: 'Informe um nome para o bolão !',
        placement: 'top',
        bgColor: 'red.500'
      })
      
    }
    try {
      setIsLoading(true);

      await api.post('/pools',{ title })

      toast.show({
        title: 'Bolão Criado com Suceso !',
        placement: 'top',
        bgColor: 'green.400'
      })

    } catch (error) {
      console.log(error)
      return toast.show({
        title: 'Não foi possível criar o bolão !',
        placement: 'top',
        bgColor: 'red.500'
      })
    }finally{
      setIsLoading(false);
      setTitle('')

    }
    
  }

  return(
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar Novo Bolão"/>
      <VStack mt={8} mx={5} alignItems="center" >
      <TittleLogo/>

      <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center" >
        Crie seu próprio bolão da copa{'\n'}
        e compartilhe entre amigos!
      </Heading>

      <Input
        mb={2}
        placeholder="Qual o nome do seu bolão"
        onChangeText={setTitle}
        value={title}
      />
      <Button 
        title="CRIAR MEU BOLÃO"
        onPress={handlePoolCreate}
        isLoading={isLoading}
        
      />
      <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4} >
        Após criar seu bolão, você receberá um código único
        que poderá usar para convidar outras pessoas.
      </Text>

      </VStack>
    </VStack>
  )
}