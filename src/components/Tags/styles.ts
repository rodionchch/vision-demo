import styled from 'styled-components/native';
import {List, MD3Colors, Text, TouchableRipple} from 'react-native-paper';

export const Tags = styled(List.Section)``;

export const TagsAccordion = styled(List.Accordion)``;

export const TagsAccordionIcon = styled(List.Icon)`
  padding-left: 8px;
`;

export const TagsTouchable = styled(TouchableRipple)<{selected?: boolean}>`
  ${props => props.selected && `background: ${MD3Colors.secondary30};`}
`;

export const TagsItem = styled(List.Item)``;

export const TagsItemIcon = styled(List.Icon)`
  margin-left: -32px;
`;

export const TagsItemText = styled(Text)``;
