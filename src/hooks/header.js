import React, { useContext } from 'react';
import Context from '../utils/context';

const Header = () => {
  const context = useContext(Context)

  return (
    <div>
      {!context.authState
        ? null
        : <button
          style={{ float: "right", marginRight: 20 }}
          onClick={() => context.authObj.logout()}>Logout</button>
      }
    </div>
  )
};





export default Header;
