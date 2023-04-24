import styled from 'styled-components/native';
import {MD3Colors, List as PaperList, Text} from 'react-native-paper';

export const List = styled(PaperList.Section)``;

export const ListHeader = styled(PaperList.Subheader)``;

export const ListItem = styled(PaperList.Item)<{selected?: boolean}>`
  ${props => props.selected && `background: ${MD3Colors.secondary30};`}
`;

export const ListItemIcon = styled(PaperList.Icon)`
  padding-left: 16px;
`;

export const ListItemText = styled(Text)``;
