import { Component, React } from "react";
import './my-name.css'
import anime from 'animejs/lib/anime.es.js';

class MyName extends Component {
    componentDidMount() {
      var textWrapper = document.querySelector('.ml3');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='color: #FFCC73;'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml3 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }).add({
          targets: '.ml3',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }

    render(){
        return (
          <div className='name'>
              <span>I'm a</span><h1 class="ml3">&#60; developer  /&#62;</h1>
          </div>
        )
    }
}


export default MyName;