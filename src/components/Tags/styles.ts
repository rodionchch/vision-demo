import styled from 'styled-components/native';
import {List, Text, TouchableRipple} from 'react-native-paper';

export const Tags = styled(List.Section)``;

export const TagsAccordion = styled(List.Accordion)`
  margin-right: -8px;
`;

export const TagsAccordionIcon = styled(List.Icon)`
  padding-left: 16px;
`;

export const TagsTouchable = styled(TouchableRipple)<any>`
  ${props =>
    props.selected && `background: ${props.theme.colors.inverseOnSurface};`}
`;

export const TagsItem = styled(List.Item)``;

export const TagsItemIcon = styled(List.Icon)`
  margin-left: -8px;
`;

export const TagsItemText = styled(Text)``;
