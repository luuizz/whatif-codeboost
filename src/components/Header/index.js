import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/logo-marvel.svg'
import LogoCodeboost from '../../assets/logo-codeboost.svg'
import { HeaderStyle} from './styles'

import { Container } from "../../styles/global"

export function Header() {
    return <HeaderStyle>
        <Container>
            <div className="logo">
                <Link href="/">
                    <Image src={Logo} alt='Logo' />
                </Link>
            </div>
            <div className='code'>
                <Image src={LogoCodeboost} alt='Codeboost' />
            </div>
        </Container>
    </HeaderStyle>
}