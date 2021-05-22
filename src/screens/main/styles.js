import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: #FFFFFF;
`;

export const Header = styled.View `
    justify-content: space-between;
    margin: 40px 30px;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.View `
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: #7159c2;
    justify-content: center;
    align-items: center;
`;

export const ContainerRight = styled.View `
    flex-direction: row;
`;

export const OnlineStatus = styled.View `
    background-color: #14b866;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 0px;
    right: 0px;
`;

export const Title = styled.Text `
    padding-left: 11px;
    font-family: 'Roboto_700Bold';
    font-size: 24px;
`;

export const ContainerScroll = styled.View `
    margin-right: 10px;
`;

export const Scroll = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
}) `
    padding: 8px 10px 24px;
`;

export const Img = styled.Image `
    width: 98px;
    height: 130px;
    margin: 5px 3px 1px;
`;

export const ContainerImg = styled.View `

`;

export const NameGame = styled.Text `
    font-family: 'Roboto_400Regular';
    opacity: 0.7;
    margin-left: 3px;
    width: 90px;
`;

export const Label = styled.Text `
    padding-left: 11px;
    padding-top: 5px;
    font-family: 'Roboto_400Regular';
    opacity: 0.5;
`;

export const WatchingStatus = styled.View `
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: red;
    margin-left: 3px;
`;

export const ContainerWatching = styled.View `
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ContainerScrollFooter = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
}) `
    padding: 8px 10px 24px;
`;

export const ContainerLive = styled.View `
    flex-direction: row;
`;

export const ContainerLiveLeft = styled.View ``;
export const ContainerLiveRight = styled.View `
    padding-left: 10px;
`;

export const ImageLive = styled.Image `
    height: 100px;
    width: 160px;
    margin-bottom: 5px;
`;

export const ContainerAvatarLive = styled.View `
    flex-direction: row;
`;

export const AvatarLive = styled.Image `
    height: 30px;
    width: 30px;
    border-radius: 15px;
`;

export const Livedescription = styled.Text `
    width: 160px;
    font-family: 'Roboto_400Regular';
    opacity: 0.6;
    padding-left: 11px;
`;

export const AvatarName = styled.Text `
    font-weight: bold;
    font-family: 'Roboto_400Regular';
    margin-left: 10px;
    opacity: 0.8;
`;

export const ContainerLanguage = styled.View `
    height: 20px;
    width: 150px;
    border-radius: 5px;
    background-color: #696969;
    margin-left: 11px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
`;

export const TitleLanguage = styled.Text `
    color: #FFFFFF;
    font-family: 'Roboto_400Regular';
`;
