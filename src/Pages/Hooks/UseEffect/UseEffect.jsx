import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { useMemo } from 'react';
import Memo from '../Memo/Memo';

function UseEffect() {
    const [state, setState] = useState(1);
    const [like, setLike] = useState(1);
    // componentDidMount chạy sau khi render
    // componentDidUpdate chạy sau khi State thay đổi
    // componentWillUnmount chạy sau khi state bị hủy

    // cach 1 su dung thay the componentDidMount va componentDidUpdate (IT SU DUNG )
    // useEffect(() => {
    //     console.log('useEffect');
    // });

    // Cach 2 : sử dụng thay thế componentDidMount( sử dụng nhiều)
    useEffect(() => {
        // console.log("useEffect");
    }, [])

    // cach 3 : su dung thay the componentDidUpdate ( su dung nhieu)

    useEffect(() => {
        // console.log("state has been changed");
    }, [state])


    useEffect(() => {
        // console.log("Like has been changed");
    }, [like])


    useEffect(() => {
        // console.log("State and Like has been changed");
    }, [state, like])

    // cach 4 su dung thay the componentWillUnmount (sự dung gọi socket.io, chat realtime, ....)
    useEffect(() => {
        // call api
        return () => {
            // console.log("ComponentWillUnmount");
        }
    }, [])

    // use memo Cache lai gia tri
    const count = useMemo(() => {
        return like + 1000 + 2000 + 3000 + 4000;
    }, [like])

    // console.log(count);
    // console.log("render");

    // use call back cache lai function
    const handleSetLike = useCallback(() => {
        console.log("use call back", like);
        setLike(like + 1)
    }, [like])

    return (
        <div>
            <h4>UseEffect</h4>
            <button onClick={() => {
                setState(state + 1)
            }} className='btn btn-dark'>INCREASE</button>
            <button onClick={() => {
                handleSetLike()
            }} className='btn btn-warning'>DECREASE</button>
            <Memo like={like} />
        </div>
    )
}

export default UseEffect