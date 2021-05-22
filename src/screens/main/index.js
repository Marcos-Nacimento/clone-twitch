import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import 
{
    Container,
    Header,
    Avatar,
    ContainerRight,
    OnlineStatus,
    Title,
    ContainerScroll,
    Img,
    Scroll,
    Label,
    NameGame,
    ContainerImg,
    WatchingStatus,
    ContainerWatching,
    ContainerScrollFooter,
    ContainerLive,
    ContainerLiveRight,
    ContainerLiveLeft,
    ImageLive,
    AvatarLive,
    ContainerAvatarLive,
    Livedescription,
    AvatarName,
    ContainerLanguage,
    TitleLanguage,
} from './styles';
import { items, itemsLiveChannel } from '../../data';

export default () => {
    return(
        <Container>
            <Header>
                <Avatar>
                    <MaterialCommunityIcons name='account-outline' color='#FFFFFF' size={16}/>
                    <OnlineStatus />
                </Avatar>
                <ContainerRight>
                    <MaterialIcons 
                        name='notifications-none' 
                        size={22}
                        style={{
                            paddingRight: 24,
                        }}
                    />
                    <MaterialCommunityIcons 
                        name='message-outline' 
                        size={22}
                        style={{
                            paddingRight: 20,
                        }}
                    />
                    <MaterialCommunityIcons name='magnify' size={24}/>
                </ContainerRight>
            </Header>
            <Title>Following</Title>
                <Label>FOLLOWED CATEGORES</Label>
                <ContainerScroll>
                    <Scroll>
                        {items.map(item => (
                            <ContainerImg
                                key={item.key}
                            >
                                <Img 
                                    source={item.img}
                                />
                                <NameGame
                                    numberOfLines={1}
                                    ellipsizeMode='tail'
                                >
                                    {item.name}
                                </NameGame>
                                <ContainerWatching>
                                    <WatchingStatus />
                                    <NameGame>{item.watching}</NameGame>
                                </ContainerWatching>
                            </ContainerImg>
                        ))}
                    </Scroll>
                </ContainerScroll>
                <Label>LIVE CHANNELS</Label>
                <ContainerScrollFooter>
                    {itemsLiveChannel.map(item => (
                        <ContainerLive 
                            key={item.key}
                        >
                            <ContainerLiveLeft>
                                <ImageLive 
                                    source={item.img}
                                />
                            </ContainerLiveLeft>
                            <ContainerLiveRight>
                                <ContainerAvatarLive>
                                    <AvatarLive source={item.img}/>
                                    <AvatarName>{item.user_name}</AvatarName>
                                </ContainerAvatarLive>
                                <Livedescription
                                    numberOfLines={1}
                                    ellipsizeMode='tail'
                                >
                                    {item.live_description}
                                </Livedescription>
                                <Label>Games e Technology</Label>
                                <ContainerLanguage>
                                    <TitleLanguage>Português</TitleLanguage>
                                </ContainerLanguage>
                            </ContainerLiveRight>
                        </ContainerLive>
                    ))}
                </ContainerScrollFooter>
        </Container>
    )
};