import { Component, React } from "react";
import './my-name.css'
import anime from 'animejs/lib/anime.es.js';

class MyName extends Component {
    componentDidMount() {
      var textWrapper = document.querySelector('.ml3');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span className='letter' style='color: #FFCC73;'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml3 .letter',
          opacity: [0,1],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 20 * (i+1)
        }).add({
          targets: '.ml3',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 3000
        });
    }

    render(){
        return (
          <>
            <div className='name'>
                <h1>Ken Tiet:</h1>
            </div>
            <div className='job-desc'> 
              <h2 className="ml3">A Professional Full-Stack Developer</h2>
            </div>
          </>
        )
    }
}


export default MyName;