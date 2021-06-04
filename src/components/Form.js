import React from 'react';

const Form = (props) => {
    return ( 
        <form onSubmit={props.submit}>
            <input 
            type="text" placeholder="Wpisz tutaj" value={props.value}
            onChange={props.change}/>
            <button>Wyszukaj lokalizację</button>
        </form>
     );
}
 
export default Form;
