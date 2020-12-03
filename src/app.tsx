import React, {useRef} from 'react';
import './app.css';

function App() {
    const rectRef = useRef<HTMLDivElement>(null);
    const onClick = ():void => {
        const randomNum = Math.trunc(Math.random() * 100);
        const randomHue = Math.trunc(Math.random() * 360);
        const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
        const randomColorEnd = `hsl(${randomHue + randomNum}, 100%, 50%)`;

        const node = rectRef.current as HTMLDivElement
        node.style.setProperty('--start', randomColorStart)
        node.style.setProperty('--end', randomColorEnd)
    }
    return (
        <>
            <h1>Make Gradient</h1>
            <button onClick={onClick}>색상변경</button>
            <div className="rectangle" ref={rectRef}></div>
        </>
    );
}

export default App;