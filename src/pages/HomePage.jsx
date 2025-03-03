import React, { useState } from 'react'

const data = [
    {id: 1, name: "Trung", age: 18},
    {id: 2, name: "Trung 2", age: 19},
    {id: 3, name: "Trung 3", age: 120}
];

function HomePage() {
    const [clicked, setClicked] = useState(false);
    
    function display(data) {
        return data.map(u => 
            <div key={u.id}>
                <span>{u.id}</span>
                <span>{u.name}</span>
                <span>{u.age}</span>
            </div>
        );
    }

    return (
        <div>
            <button onClick={() => setClicked(!clicked)}>Show more</button>
            {clicked && display(data)}
        </div>
    )
}

export default HomePage
