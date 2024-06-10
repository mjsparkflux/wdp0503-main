function myF() {
    const demo = document.querySelector('.demo')
    demo.innerHTML = 'hello javascript'
    demo.style.color = 'black'
    demo.style.fontSize = '30px'
    demo.style.backgroundColor = 'yellow'
    demo.style.transform = 'translate(100px, 200px) rotate(45deg) scale(1.5)'
}
// 변수
// 변수란 데이터를 저장하는 공간
// 변수 선언 (let, const, var)

let a = 20
a = 10
console.log(a)

const b = 30
// b = 40
console.log(b)

// 데이터 타입
// 숫자(number)
let num1 = 1
let num2 = 2
console.log(num1 + num2) // 3

// 문자열(string)
let str1 = '1d'
let str2 = '2d'
console.log(str1 + str2) // 12

// 불린(boolean)
const isTrue = true
const isFalse = false
console.log(isTrue, isFalse)

// 객체(object)
const post = {
    img: 'https://s.pstatic.net/shopping.phinf/20240402_6/60af39c7-fad0-42a8-b672-55813cfcbf04.jpg?type=f294_378',
    title: '독보적인 예쁨 인생원피스 45%',
}
console.log(post)

//if
const aa = 10
if (aa === 1) {
    console.log(aa)
} else {
    console.log(`a는 ${aa}입니다.`)
}

//slide
let cur = 0
const listSlide = document.querySelector('.slide ul')
const slideCount = document.querySelectorAll('.slide ul li').length

console.log(slideCount)

//every 3s slide
setInterval(function () {
    slide()
}, 3000)

function slide() {
    cur = (cur + 1) % slideCount
    listSlide.style.left = cur * -100 + '%'
    console.log(cur)
}
