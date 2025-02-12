import React from 'react';
import ReactDOM from 'react-dom/client';

const ele =<span>This is SPAN</span>
const Jxs = () => (
<h1 className="heading">
    Hello World {ele}
    </h1>
);
const HeadingComponent = () => {
    return (
        <>
            <Jxs />
            {Jxs()}
            <h1 className="heading">
            This is from fucntional component
            </h1>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);