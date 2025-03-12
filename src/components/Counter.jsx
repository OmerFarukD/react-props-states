import React, {useState} from 'react';

function Counter() {

    const [number,setNumber] = useState(0);
    const  [range,setRange] = useState(1);

    console.log(number)
    return (
        <div>
            <p>Sayı : {number}</p>
            <p>Aralık : {range}</p>

            <button style={{margin:"12px"}}
            onClick={()=> {number+= range}}
            >Arttır</button>

            <button
            onClick={()=> {setNumber(number-range)}}
            >Azalt</button>

            <hr/>

            <button onClick={()=> setRange(1)}>1</button>
            <button onClick={()=> setRange(3)}>3</button>
            <button onClick={()=> setRange(5)}>5</button>
        </div>
    );
}
export default Counter;
