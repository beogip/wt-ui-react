// @flow
import React from 'react';
import Button from 'components/Button';
import classnames from 'classnames';

type PropsType = {
  /**
   * The `<input>` element `type`
   */
  type?: 'checkbox' | 'radio',

  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name?: string,

  /**
   * The checked state of the input, managed by `<ToggleButtonGroup>` automatically
   */
  checked?: boolean,

  /**
   * The disabled state of both the label and input
   */
  disabled?: boolean,

  /**
   * A callback fired when the underlying input element changes. This is passed
   * directly to the `<input>` so shares the same signature as a native `onChange` event.
   */
  onChange?: (SyntheticInputEvent<*>) => void,
  /**
   * The value of the input, should be unique amoungst it's siblings when nested in a
   * `ToggleButtonGroup`.
   */
  // eslint-disable-next-line flowtype/no-weak-types
  value: any,

  /**
   * A ref attached to the `<input>` element
   */
  inputRef?: React$Ref<*>,

  children?: React$Node,

  className?: string
};

type StateType = {
  focused: boolean
};

export default class ToggleButton extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  handleFocus = (e: SyntheticInputEvent<*>) => {
    if (e.target.tagName === 'INPUT') this.setState({ focused: true });
  };

  handleBlur = (e: SyntheticInputEvent<*>) => {
    if (e.target.tagName === 'INPUT') this.setState({ focused: false });
  };

  render() {
    const {
      children,
      name,
      className,
      checked,
      type,
      onChange,
      value,
      disabled,
      inputRef,
      ...props
    } = this.props;
    const { focused } = this.state;

    return (
      <Button
        {...props}
        className={classnames(
          className,
          focused && 'focus',
          disabled && 'disabled',
        )}
        type={null}
        active={!!checked}
        as="label"
      >
        <input
          name={name}
          type={type}
          value={value}
          ref={inputRef}
          autoComplete="off"
          checked={!!checked}
          disabled={!!disabled}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={onChange}
        />

        {children}
      </Button>
    );
  }
}
