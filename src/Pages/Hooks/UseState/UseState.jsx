import React, { useState } from 'react'
let previousAvatar = '';

function UseState() {
    const [number, setNumber] = useState(1);
    // class khi setstate chỉ gọi lại hàm render còn func thì gọi lại nguyên 
    // scope component
    const [avatar, setAvatar] = useState("https://i.pravatar.cc?u=1");


    return (
        <div>
            <h4>UseState</h4>
            <p>Number: {number}</p>
            <button onClick={() => {
                setNumber(number - 1)
            }} className='btn btn-danger'>DECREASE</button>
            <button onClick={() => {
                setNumber(number + 1)
            }} className='btn btn-success'>INCREASE</button>
            <br />
            <div className="card w-25 py-0">
                <img className="card-img-top" src={avatar} alt="#" />
                <div className="card-body">
                    <button onClick={() => {
                        setAvatar(previousAvatar);
                    }} className="btn btn-primary">PREVIOUS</button>
                    <button onClick={() => {
                        const id = Date.now();

                        previousAvatar = avatar
                        const newAvatar = `https://i.pravatar.cc?u=${id}`;

                        setAvatar(newAvatar);

                    }} className="btn btn-warning">NEXT</button>
                </div>
            </div>
        </div>

    )
}

export default UseState