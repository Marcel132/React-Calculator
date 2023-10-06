// import necessary style and library
import React from 'react'
import { Link } from 'react-router-dom'
import './css/main.css'

export default function Home() {
    return (
        <div className="container flex">
            <h1 id="header">Witaj w przeglądarkowym kalkulatorze!</h1>
            <div id="button_box" className="flex">
                <Link to="/calculator"><button className="button_list">Kalkulator</button></Link> {/* Go to calculator (calculator.jsx) */}
                <Link to="/hail"><button className="button_list">Miary</button></Link> {/* Go to hail calculator (hail.jsx */}
            </div>
        </div>
    )
}


