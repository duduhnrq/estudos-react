import { useState } from "react";


function Title({ nome, paragraph, color }) {
    const [text, setText] = useState("Um titulo do estado inicial")
    return (
        <div>
            <h1 style={{ color : color }}>{text}</h1>
            <button onClick={()=>{setText("Mudei via botão")}}>Mudar</button>
            {paragraph ?
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consequatur eos, fugiat incidunt praesentium error reiciendis alias dolores cum nobis blanditiis. Velit nesciunt suscipit repellendus atque fugiat labore laborum ab.</p>
                :
                <p>Nada</p>
            }
        </div>
    )
}

export default Title