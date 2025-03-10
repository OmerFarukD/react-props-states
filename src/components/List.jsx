import React from 'react';

function List({members}) {

    return (
        <ul>
            {
               members.map((kisi,index)=>(

                    <li key={index}>{kisi}</li>

                ))
            }

        </ul>
    );
}

export default List;