import React, { memo } from 'react'

function Memo(props) {
    console.log("memo");
    return (
        <div>
            <h4>LIKE: {props.like}</h4>
        </div>
    )
}

export default memo(Memo) 