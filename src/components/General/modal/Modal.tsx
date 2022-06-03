import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

const Backdrop: React.FC<{ onClose: () => void }> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay: React.FC<{ children: JSX.Element | JSX.Element[] }> = (
  props
) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal: React.FC<{
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
}> = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
