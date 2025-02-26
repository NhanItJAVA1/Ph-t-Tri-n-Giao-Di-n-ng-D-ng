import React, {useState} from 'react';

function Header() {

    const [text, setText] = useState('');
    return ( <div>
        <h1>Header</h1>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
    </div> );
}

export default Header;