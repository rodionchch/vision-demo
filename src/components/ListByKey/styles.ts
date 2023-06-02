import styled from 'styled-components/native';
import {List as PaperList, Text} from 'react-native-paper';

export const ListByKey = styled(PaperList.Section)``;

export const ListByKeyHeader = styled(PaperList.Subheader)``;

export const ListByKeyItem = styled(PaperList.Item).attrs<{
  byKey: boolean;
}>(props => props.byKey && {titleStyle: {fontWeight: 'bold'}})<any>`
  ${props =>
    props.selected && `background: ${props.theme.colors.inverseOnSurface};`}
`;

export const ListByKeyItemIcon = styled(PaperList.Icon)`
  padding-left: 16px;
`;

export const ListByKeyItemText = styled(Text)``;
