import React from 'react';
import Button from '../Button'
import { 
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    ExitIcon,
    Botside,
    Avatar,
    ProfileData
} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <TopSide>
              <Logo />
              <MenuButton>
                  <HomeIcon />
                  <span>Pagina Inicial</span>
              </MenuButton>
              <MenuButton>
                  <BellIcon />
                  <span>Notificações</span>
              </MenuButton>
              <MenuButton>
                  <EmailIcon />
                  <span>Mensagens</span>
              </MenuButton>
              <MenuButton>
                  <FavoriteIcon />
                  <span>Favoritados</span>
              </MenuButton>
              <MenuButton>
                  <ProfileIcon className="active" />
                  <span>Perfil</span>
              </MenuButton>

              <Button>
                  <span>Tweetar</span>
              </Button>
          </TopSide>

          <Botside>
              <Avatar />
              <ProfileData>
                  <strong>Nathan Rordirgues</strong>
                  <span>@N4th4nRordirgu3s</span>
              </ProfileData>
              <ExitIcon />
          </Botside>
      </Container>
  );
}

export default MenuBar;