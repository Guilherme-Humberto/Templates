import { FiMenu, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { Container, Logo, ContainerSocialMedias } from './styles'

export default function NavBar() {
    return (
        <Container>
            <FiMenu size={35}/>
            <Logo>Stylish Life</Logo>
            <ContainerSocialMedias>
                <FiFacebook size={35}/>
                <FiInstagram size={35}/>
                <FiTwitter size={35}/>
            </ContainerSocialMedias>
        </Container>
    )
}