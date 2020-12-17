import React from 'react';
import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowPage,
  EditButton

} from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Nathan Rodrigues</h1>
        <h2>@N4th4nRodrigu3s</h2>

        <p>
          Developer at <a href="https://github.com/Nathan985" target="_blank">@Nathan985</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Carapicuíba, São Paulo
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de maio de 2004
          </li>
        </ul>
        <FollowPage>
          <span>
            seguindo  <strong>247</strong>
          </span>
          <span>
            <strong>25.347 </strong> seguidores
          </span>
        </FollowPage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;