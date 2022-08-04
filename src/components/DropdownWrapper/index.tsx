import * as React from 'react';

export type Props = {
  children: React.ReactNode;
  dropdown: JSX.Element;
  isOpen: boolean;
  onClickOutside: () => void;
};

export class DropdownWrapper extends React.Component<Props, {}> {
  ref?: HTMLElement | null;

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e: Event) => {
    const { onClickOutside = () => {} } = this.props;

    if (this.ref && !this.ref.contains(e.target as Node)) onClickOutside();
  };

  setRef = (node: HTMLElement | null) => {
    this.ref = node;
  };

  render() {
    const { children, dropdown, isOpen } = this.props;

    return (
      <div ref={this.setRef}>
        {children}
        <div
          style={{
            position: 'relative'
          }}
        >
          <div
            style={{
              background: 'white',
              opacity: 1,
              position: 'absolute',
              top: '10px',
              zIndex: 1
            }}
          >
            {isOpen && dropdown}
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownWrapper;
