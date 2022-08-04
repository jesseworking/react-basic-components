import * as React from 'react';

import DropdownWrapper from '../DropdownWrapper';
import TextField from '../TextField';
import { List, ListItem } from './styles';

export type AutocompleteTextFieldProps = {
  className?: string;
  dropdownClassName?: string;
  /* Asynchronously fetches based on a prefix string */
  fetcher?: (prefix: string) => Promise<any[]>;
  dropdownItemProps: {
    className?: string;
    /* Formats React component key */
    formatKey?: (item: any) => string;
    /* Renders each item in the dropdown */
    renderItem: (item: any, index: number) => string | React.ReactNode;
  };
  input: {
    value: any;
    onChange: (item: any) => void;
    clearOnSelect?: boolean;
  };
  textFieldProps: {
    /* Formats the current value of the text input based on the current input value of the component */
    formatValue: (item: any) => string;
  };
};

export type AutocompleteTextFieldState = {
  inputValue: string;
  items: any[];
  isOpen: boolean;
};
export class AutocompleteTextField extends React.Component<
  AutocompleteTextFieldProps,
  AutocompleteTextFieldState
> {
  state = { inputValue: '', items: [], isOpen: false };

  static defaultProps = {
    dropdownItemProps: {
      formatKey: item => item.toString(),
      renderItem: item => item
    },
    textFieldProps: { formatValue: (item: any) => item.toString() }
  };

  handleInputChange = (value: string) => {
    const { fetcher = async () => [] } = this.props;

    this.setState({ inputValue: value, isOpen: true });

    fetcher(value).then(items => this.setState({ items, isOpen: true }));
  };

  handleItemClick = (e: React.SyntheticEvent, index: number) => {
    const { items } = this.state;
    const {
      input: { onChange, clearOnSelect },
      textFieldProps: { formatValue }
    } = this.props;

    const value = items[index];

    if (value) {
      onChange(value);
      const inputValue = clearOnSelect ? '' : formatValue(value);
      this.setState({ inputValue, isOpen: false });
    }
  };

  render() {
    const { className, dropdownClassName, dropdownItemProps } = this.props;

    const { inputValue, items, isOpen } = this.state;

    return (
      <DropdownWrapper
        dropdown={
          <List className={dropdownClassName} data-test-id="dropdown">
            {items.map((item, index) => (
              <ListItem
                className={dropdownItemProps.className}
                data-test-id="dropdownItem"
                key={dropdownItemProps.formatKey(item)}
                onClick={e => this.handleItemClick(e, index)}
                style={{}}
              >
                {dropdownItemProps.renderItem(item, index)}
              </ListItem>
            ))}
          </List>
        }
        isOpen={isOpen}
        onClickOutside={() => this.setState({ isOpen: false })}
      >
        <TextField
          className={className}
          input={{
            value: inputValue,
            onChange: this.handleInputChange
          }}
        />
      </DropdownWrapper>
    );
  }
}

export default AutocompleteTextField;
