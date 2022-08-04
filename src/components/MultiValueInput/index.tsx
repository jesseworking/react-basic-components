import * as React from 'react';

import Chip from '../Chip';

import { Root, ItemList } from './styles';

export type MultiValueInputProps = {
  children: (innerProps: {
    innerInput: { onChange: (value: any) => void; value: any };
    handleAddItem: (item: any) => void;
  }) => React.ReactNode;
  className?: string;
  itemListClassName?: string;
  itemProps: {
    className?: string;
    /* Formats each item's React key */
    formatKey?: (item: any, index?: number) => string;
    /* Renders each item in the dropdown */
    renderItem: (item: any, index?: number) => string;
  };
  input: {
    value: any[];
    onChange: (item: any) => void;
  };
};

export type MultiValueInputState = {
  innerInputValue: any;
  items: any[];
};

export class MultiValueInput extends React.Component<
  MultiValueInputProps,
  MultiValueInputState
> {
  state = {
    innerInputValue: '',
    items: [],
    isOpen: false
  };

  handleInputChange = (value: any) => {
    this.setState({ innerInputValue: value });
  };

  handleAddItem = (item: any) => {
    const {
      input: { onChange, value }
    } = this.props;

    const newItems = value.concat([item]);
    onChange(newItems);
  };

  handleDelete = (index: number) => {
    const {
      input: { onChange, value }
    } = this.props;

    const newValue = value.slice(0);
    newValue.splice(index, 1);

    onChange(newValue);
  };

  render() {
    const {
      children,
      className,
      input: { value },
      itemListClassName,
      itemProps
    } = this.props;

    const { innerInputValue } = this.state;

    return (
      <Root className={className}>
        <ItemList className={itemListClassName}>
          {value.map((item, i) => (
            <Chip
              key={itemProps.formatKey(item)}
              onDelete={() => this.handleDelete(i)}
              className={itemProps.className}
            >
              {itemProps.renderItem(item, i)}
            </Chip>
          ))}
        </ItemList>
        <div>
          {children({
            innerInput: {
              value: innerInputValue,
              onChange: this.handleInputChange
            },
            handleAddItem: this.handleAddItem
          })}
        </div>
      </Root>
    );
  }
}

export default MultiValueInput;
