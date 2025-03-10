import React from 'react';

function List2(props) {

    const takim2 = ['Ahmet Hakan Albayrak','Emre Işık','Eren Genç']
    return (
        <ul>
            {
                takim2.map((kisi,index)=>(
                    <li key={index}>{kisi}</li>
                ))
            }
        </ul>
    );
}

export default List2;