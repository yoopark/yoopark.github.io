Day01

## JavaScript Drum Kit



---



## 1. index-START.html

* `<link rel="stylesheet" href="style.css">` 로 html-css를 연결합니다. 
* `<audio data-key="65" src="sounds/clap.wav"></audio>`로 audio 파일을 가져올 수 있습니다. 
* `<script></script>`는 body 끝 부분에 위치해 있네요. 



## 2. style.css

* `background-size: cover`와 `background-size: contain`의 차이

  ![img](https://i0.wp.com/css-tricks.com/wp-content/uploads/2015/02/cover-and-contain.jpg?ssl=1)

* css에서는 0.07 이라고 안 쓰고 .07 이라고 쓴다!

* font-size를 지정할 때 px, em을 안 쓰고 rem을 썼네요. px는 말 그대로 px 단위고, em은 상위 요소 대비 배수를, rem은 최상위 요소(html 요소의 크기) 대비 배수를 의미합니다. 해상도에 따라 다르게 위치하는 것을 막으려면 상대적인 비율로 font-size를 지정하는 것이 좋겠죠?

### 1) display: flex

* 참고 링크 : [CSS Flex(Flexible Box) 완벽 가이드](https://heropy.blog/2018/11/24/css-flexible-box/)

* 수평 요소 배치에 아-주 아-주 유용합니다. 

* flex가 있기 전까지는 요소와 요소를 수평 배치로 바꾼 뒤에 일일이 간격을 다 주면서 정렬시켰다는...

* ```html
  <div class="boxes">
  	<div class="box"></div>
  	<div class="box"></div>
  	<div class="box"></div>
  </div>
  ```

* 위 코드가 있다면, boxes는 container, box는 item이라고 지칭됩니다. 

* `.boxes { display: flex; }`와 같이 container에 명시해야 합니다. (생각해보면 이게 당연한 겁니다.)

* container가 가질 수 있는 속성 : display, flex-flow, justify-content
  item이 가질 수 있는 속성 : order, flex, align-self

* `flex: 1;` 은 `flex-grow: 1; flex-shrink: 1; flex-basis:0`과 같습니다. 

  * flex-basis: item의 최소 너비(이것보다 글씨가 차지하는 길이가 작으면 flex-basis만큼은 여백으로 늘려줌)

  * flex-grow: **아이템이 flex-basis의 값보다 커질 수 있는지 결정하는 속성**이다. 0이 아니면 화면 전체를 item으로 채우고 그 여백의 비율을 지정한다. 

  * flex-shrink: **아이템이 flex-basis의 값보다 작아질 수 있는지 결정하는 속성**이다. 0이면 flex-basis보다 작아지지 않음. 

    -> 개념적으로 대충 알아도 써먹을 정도로 이해하지는 못했다. 그냥 아무리 줄여도 그 정렬 상태가 잘 안 변하는 커스텀인 듯(*flex end*)

### 

* margin은 외부 여백, padding은 내부 여백
  ![When to use margin vs padding in CSS - Stack Overflow](https://i.stack.imgur.com/PeSIJ.gif)

* `.key {transition: all .07s ease; }` `.playing {transform: scale(1.1); }` transition을 사용하기 위해서는 반드시 transform이 함께 있어야 합니다. transform이 단순히 scale만 키우는 것이라면, transform을 자연스럽게(연속적으로) 변하게 하기 위해서 필요한 속성이 바로 transition입니다. 



## 3. script

* `document.querySelector()`를 통해 크롤링 하듯이 해당 요소를 받아올 수 있다. 
* `foo.classList.add('bar')` : foo가 querySelector를 통해 파싱된 html 요소인 경우에 해당 요소의 클래스 목록을 불러오는 기능 역시 가능하다. 클래스 목록을 불러왔다면 거기에 클래스 목록을 추가하는 것도 역시 가능하다!
  * 그렇다면, html 파일이 실행 도중에 수정되는 것이다! 이런 기능을 할 수 있게 된 근본이 document 클래스(?)다. 그래서 이걸 두고 [HTML DOM](https://www.w3schools.com/whatis/whatis_htmldom.asp)이라고 말한다. 
* document에는 `getElementsByTagName("p");`, `getElementsByClassName("instrument");`, `getElementByID("tomtom");` , `querySelector()`, `querySelectorAll()`과 같이 특정 요소를 찾는 기능을 아주 빈번하게 수행한다. 
* window, 또는 querySelector를 통해 가져온 key에게는 addEventListnerer이 가능합니다! 
  * keydown -> playing 함수를 키가 눌렸을 때 실행
  * transitionend, removeTransition 함수를 transition이 모두 끝났을 때 실행



