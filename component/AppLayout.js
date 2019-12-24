import React from 'react';

const AppLayout = ({children}) => {
    return (
        <div style={{position:"absolute",
        top:"50%", left: "50%", transform: "translate(-50%, -50%)",
        }}>
            {children}
        </div>
    );
};

export default AppLayout;