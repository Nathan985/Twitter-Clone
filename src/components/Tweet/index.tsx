import React from 'react';

import { 
    Container, 
    Retweeted, 
    RockeatseatIcon, 
    Body, 
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    Retweet,
    LikeIcon 
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RockeatseatIcon />
              Você retweetou
          </Retweeted>
          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Rocketseat</strong>
                      <span>@rocketseat</span>
                      <Dot />
                      <time>12 de mai</time>
                  </Header>
                  <Description>
                      Foquete não tem ré
                  </Description>
                  <ImageContent />
                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <Retweet />
                          18
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;