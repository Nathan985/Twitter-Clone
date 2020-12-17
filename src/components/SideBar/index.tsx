import React from 'react';
import List from '../List';
import StickyBox from 'react-sticky-box';
import News from '../News';
import FollowSugestion from '../FollowSugestion';
import { 
    Container, 
    SearchWrapper,
    SerachInput,
    SearchIcon,
    Body 
} from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SerachInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>
          <StickyBox>
            <Body>
                <List 
                    title="Talvez você curta"
                    elements={[
                        <FollowSugestion 
                            name="Nathalia Caetano"
                            nickname="@NathCaetano"
                        />,
                        <FollowSugestion 
                            name="Victor Nascimento"
                            nickname="@vt.nc"
                        />,
                        <FollowSugestion 
                            name="Geovana Prado"
                            nickname="@https/gi"
                        />
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
            </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;