import React, {useState} from 'react';

function StateManagement(props) {
    const [content,setContent] = useState('içerik Değişmedi')


    return (
        <div>
            <p>{content}</p>

            <button
                onClick={()=> setContent("İçerik Değişti.")}

                style={{background:"red"}}>İçerik Değiştir. </button>
        </div>
    );
}

export default StateManagement;