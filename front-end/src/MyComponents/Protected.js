import React from 'react';


export default function Protected(props) {
    const Comp= props.component;
    return (
        <div>
            <Comp/>
        </div>
    )
}
