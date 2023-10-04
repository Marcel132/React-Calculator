// import necessary style and library
import React from 'react'
import { Link } from 'react-router-dom'
import './css/main.css'

export default function Home() {
    return (
        <div class="container flex">
            <h1 id="header">Witaj w przeglądarkowym kalkulatorze!</h1>
            <div id="button_box" class="flex">
                <Link to="/calculator"><button class="button_list">Kalkulator</button></Link> {/* Go to calculator (calculator.jsx) */}
                <Link to="/hail"><button class="button_list">Miary</button></Link> {/* Go to hail calculator (hail.jsx */}
            </div>
        </div>
    )
}


