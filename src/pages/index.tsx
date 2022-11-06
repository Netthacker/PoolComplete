

//Utilizar o componente dentro do next image para importar imagens
import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/user-avatars-example.png'
import iconCheckImg from '../assets/iconcheck.png'
import { api } from '../lib/axios'
import { FormEvent, useState } from 'react'

interface HomeProps{
  poolCount: number;
  guessCount: number;
  usersCount: number;
}

export default function Home(props: HomeProps) {
  const[poolTitle, setPoolTitle] = useState('')
  
  async function createPool(event: FormEvent){
    event.preventDefault() // para não direcionar 
    try{
      const response= await api.post('/pools',{
        title:poolTitle,
      });
      const{ code } = response.data

      await navigator.clipboard.writeText(code)

      alert("Bolão criado com sucesso, o código foi copiado para a área de transferência. O código é: " + code)
      setPoolTitle('')
    } catch(err){
      console.log(err)
      alert('Falha ao criar o bolão, Tente novamente !')
    }
  }

 return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className='mt-10 flex items-center gap-2'>
            <Image src={usersAvatarExampleImg} alt="" />
            <strong className="text-gray-100 text-xl">
              <span className="text-ignite-500">+{props.usersCount}</span> pessoas já estão usando
            </strong>
        </div>

        <form onSubmit={createPool} className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text" required 
            placeholder="Qual o nome do seu bolão ?" 
            onChange={event => setPoolTitle(event.target.value)}
            value={poolTitle}
            />
          
          <button 
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit">
              Criar meu bolão
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div className='mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100'>
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.poolCount}</span>
              <span>Bolões Criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.guessCount}</span>
              <span>Palpites Enviados</span>
            </div>
          </div>
        </div>

      </main>
      <Image 
        src={appPreviewImg} 
        alt="Dois celulares exibindo uma prévia"
        quality={100}

      />
    </div>
  )
}

// Para que a página acesse mesmo se o javascript do browser estiver desligado

export const getServerSideProps = async() => {
  //serve para fazer com que haja múltiplas chamadas sem necessidade de esperar uma em detrimento da outra
  //getStaticProps

  const [
    poolCountResponse, 
    guessCountResponse, 
    usersCountResponse] = await Promise.all([
      api.get('pools/count'),
      api.get('guesses/count'),
      api.get('users/count'),
  ])

  return {
      props: {
        poolCount: poolCountResponse.data.count,
        guessCount: guessCountResponse.data.count,
        usersCount: usersCountResponse.data.count,
      }
  }
}
