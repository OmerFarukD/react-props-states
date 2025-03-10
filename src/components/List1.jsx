import React from 'react';

function List1() {
    const kisiler = ['Yunus Emre Cinbolat','Doğukan Bayazıt','Eda Esen','Senanur Yurdakul','Özlem Arslan']
    return (
        <ul>
            {
                kisiler.map((kisi,index)=>(
                    <li key={index}>{kisi}</li>
                ))
            }
        </ul>
    );
}

export default List1;