import styled from 'styled-components/native';
import {List as PaperList, Text} from 'react-native-paper';

export const List = styled(PaperList.Section)``;

export const ListHeader = styled(PaperList.Subheader)``;

export const ListItem = styled(PaperList.Item)<any>`
  ${props =>
    props.selected && `background: ${props.theme.colors.inverseOnSurface};`}
`;

export const ListItemIcon = styled(PaperList.Icon)`
  padding-left: 16px;
`;

export const ListItemText = styled(Text)``;
