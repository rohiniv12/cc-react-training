import React from 'react';   
function Animalslist(){
    const names = ['Cat','Rabbit','Dog','Cow','Horse','Lion']
    return(
        <div>
            <p><h1>This is a list of  animals</h1></p>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}
export default Animalslist;