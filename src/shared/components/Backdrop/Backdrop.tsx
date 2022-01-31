import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop: React.FC<{ onClick?: () => void, portal?: boolean, children?: ReactNode }> = ({ onClick, portal = true, children }) => {
  return portal ? ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}>
      <div onClick={(e) => { e.stopPropagation() }}>
        {children}
      </div>
    </div>,
    document.getElementById('backdrop-hook')!
  ) : <div className="backdrop" onClick={onClick}>
    <div onClick={(e) => { e.stopPropagation() }}>
      {children}
    </div>
  </div>;
};

export default Backdrop;
