import { IconText } from '../../components/IconText'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import { HeaderContainer, HomeWrapper } from './styles'

import imagemHome from '../assets/imagem-home.svg'

const HomeHeader = () => (
  <HeaderContainer>
    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
    <h2>
      Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
    </h2>
  </HeaderContainer>
)

const HomeBody = () => (
  <>
    <div>
      <div className="infoColumn">
        <div>
          <IconText
            text="Compra simples e segura"
            icon={<ShoppingCart size={24} weight="fill" />}
            color="#C47F17"
          />
          <IconText
            text="Embalagem mantém o café intacto"
            icon={<Coffee size={24} weight="fill" />}
            color="#574F4D"
          />
        </div>
        <div>
          <IconText
            text="Entrega rápida e rastreada"
            icon={<Package size={24} weight="fill" />}
            color="#DBAC2C"
          />
          <IconText
            text="O café chega fresquinho até você"
            icon={<Timer size={24} weight="fill" />}
            color="#8047F8"
          />
        </div>
      </div>
    </div>
    <div className="imageColumn">
      <img src={imagemHome} alt="" />
    </div>
  </>
)

export function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeBody />
      <>
        <h2>Nossos cafés</h2>
      </>
    </HomeWrapper>
  )
}
