// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs/react';
import Modal from 'components/Modal';

import '@windingtree/wt-ui/dist/styles.css';

const sizeOptions = {
  large: 'large',
  small: 'small',
};
const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);
stories
  .add('Modal', () => (
    <Modal
      onClose={action('closed')}
      backdrop={boolean('backdrop', true)}
      size={select('size', sizeOptions, 'large')}
      show={boolean('show', true)}
      centered={boolean('centered', true)}
      autoFocus={boolean('autoFocus', true)}
      backdropClassName={text('backdropClassName', '')}
      keyboard={boolean('keyboard', true)}
      animation={boolean('animation', true)}
      dialogClassName={text('dialogClassName', '')}
      enforceFocus={boolean('enforceFocus', true)}
      restoreFocus={boolean('restoreFocus', true)}
      onHide={action('onHide')}
      onEnter={action('onEnter')}
      onEntering={action('onEntering')}
      onEntered={action('onEntered')}
      onExit={action('onExit')}
      onExiting={action('onExiting')}
      onExited={action('onExited')}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        Modal Footer
      </Modal.Footer>
    </Modal>
  ));

  