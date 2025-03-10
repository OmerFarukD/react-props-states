import React from 'react';

function List3(props) {
    const  takim3 = ["Esmanur Akdoğan",'Elif Okur','Beyzanur Kaymak']
    return (
        <ul>
            {
                takim3.map((kisi,index)=>(
                    <li key={index}>{kisi}</li>
                ))
            }
        </ul>
    );
}

export default List3;