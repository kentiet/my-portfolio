import { React } from "react";
import './intro-div.styles.scss'
import MyName from '../my-name/my-name.component'

const IntroDiv = () => (
    <div className="container tc">
        <MyName />
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="animate__animated animate__slow animate__fadeInDown animate__infinite bi bi-arrow-bar-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/>
        </svg>
    </div>
)

export default IntroDiv;