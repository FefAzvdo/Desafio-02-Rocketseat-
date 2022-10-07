import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderWrapper } from './styles'

import logo from '../../assets/logo-coffee-delivery.svg'

type HeaderProps = {
  state?: string
  city?: string
  productQuantity?: number
}

export function Header({
  state = ' .. ',
  city = ' ....',
  productQuantity = 0,
}: HeaderProps) {
  return (
    <HeaderWrapper>
      <img src={logo} alt="" />

      <div className="locationAndBadgeWrapper">
        <div className="locationWrapper">
          <span>
            <MapPin weight="fill" size={24} />
          </span>
          <p>
            {city} , {state}
          </p>
        </div>

        <div className="badgeWrapper">
          <span className="badge1" data-badge={productQuantity}>
            <ShoppingCart weight="fill" size={24} />
          </span>
        </div>
      </div>
    </HeaderWrapper>
  )
}
