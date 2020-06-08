import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Nav({children}) {
    let items = React.Children.toArray(children)
    for (let i = items.length - 1; i >= 1; i--) {
        items.splice(i, 0, <span key={i} className="separator">|</span>)
    }
    return (
        <nav className='nav'>
            {items}
        </nav>
    )
}

function NavItem({children}) {
    return (
        <li className="menu-items">{children}</li>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Nav>
            <NavItem><a href="/">Home</a></NavItem>
            <NavItem><a href="/about">About</a></NavItem>
            <NavItem><a href="contact">Contact</a></NavItem>
        </Nav>
    </React.StrictMode>,
    document.getElementById('root')
);


