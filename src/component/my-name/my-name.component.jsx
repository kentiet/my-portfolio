import { Component, React } from "react";
import './my-name.css'
import anime from 'animejs/lib/anime.es.js';

class MyName extends Component {
    componentDidMount() {
        var textWrapper = document.querySelector('.ml2');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: true})
          .add({
            targets: '.ml2 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
          }).add({
            targets: '.ml2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
    }

    render(){
        return (
            <h1 class="ml2">Ken Tiet</h1>
        )
    }
}


export default MyName;