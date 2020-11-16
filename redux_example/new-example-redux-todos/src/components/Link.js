import React from 'react';


function Link({active,children,onClick}){
    return(
        <button 
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
        >
            {children}
        </button>
    )
}

export default Link;