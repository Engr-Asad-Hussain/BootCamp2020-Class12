# Conclusion: Web Animation API (WAAPI)

-------------------------------------------------------------
### Web Animations API (WAAPI)
- Animations is a set of pictures that have certain movement in certain time.
- Later on internet we use .gif files for animations but we donot prefer this .gif file because its size is larger. Then we have .svg file again, although its loading is too fast and size is also small but its complexity is huge. Then we have a web API's.
- In Web API's we add certain timeline to a static picture so that it seem to be animated.
- (Web Animations API Concept)[https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Web_Animations_API_Concepts]
- (Using Web ANimations API)[https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API]
- (GitHub)[https://github.com/web-animations/web-animations-js/blob/dev/docs/examples.md]

### element.animate([], {}) or element.animate({}, {})
- element.animate([], {}) : animate takes two arguments [] and {} ; [] represents **keyFrames** and {} represents **EffectTiming**. 
- (See GitHub)[https://github.com/web-animations/web-animations-js/blob/dev/docs/examples.md]

### document.querySelector()
- document.querySelector('#line') : it is same as document.getElementById() or getElementsByClassName()

### Few KeyFrames
1. { transform: 'translate(xAxis, yAxis)' } :translate means inline.
  - { transform: 'translateX(500px)' } 
  - { transform: 'translateY(500px)' } 
  - { transform: 'translateZ(50px)' }
2. { transform: 'translate(200px, 200px)', backgroundColor: 'red' }
3. { transform: 'scale(0.5)'}  : scale is the zoom effect, in percentage.
4. { transform: color: 'red' } : color of text will be red
5. { transform: 'rotate(90deg)' }  : rotate to 90 degrees
  - { transform: 'rotateX(90deg)' }
  - { transform: 'rotateY(90deg)' }
  - { transform: 'rotateZ(90deg)' }
6. { transform: 'skew(90deg)' }    : rotate in skew type
  - { transform: 'skewX(90deg)' }
  - { transform: 'skewY(90deg)' }
7. { opacity: [0.1, 1, 0.1] }  : see sample # 05


### EffectTimings:
- (All attributes)[https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming]
  1. duration: 1500 => The number of milliseconds each iteration of the animation takes to complete.
  2. iterations: Infinity    => The number of times the animation should repeat. Defaults to 1, and can also take a value of "Infinity" to make it repeat for as long as the element exists.
  3. direction: 'normal', 'reverse', 'alternate', 'alternate-reverse'
  4. easing: 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(0.42, 0, 0.58, 1)' => The rate of the animation's change over time.

### Methods()
- (See All Methods)[https://developer.mozilla.org/en-US/docs/Web/API/Animation]
  1. Animation.pause()
  2. Animation.play()
  3. Animation.reverse()
  4. Animation.updatePlaybackRate(20)    : duration will updated to 20 milliseconds.
  5. Animation.finish()  :   Finish all the animations.
- See Sample # 06


### Action On Events:
- (See All the events)[https://developer.mozilla.org/en-US/docs/Web/API/Animation]
- See Sample # 07, 
```
document.addEventListener("wheel", (event)=>{
    console.log(event)
    animation.play();
})
```
