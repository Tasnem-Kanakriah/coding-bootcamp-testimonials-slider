let arrowNext = document.querySelector(".next")
let arrowPrev = document.querySelector(".prev")

arrowNext.addEventListener("click" , () => {
    document.querySelector(".people").src = "2.jpg" 
    document.querySelector(".testimonial p").innerHTML = `" 처음에는 회의적이었지만, 코딩 부트캠프는 내 기대치를 뛰어넘었습니다. 커리큘럼은 적절했고, 실전 프로젝트는 실제 문제에 대처하는 자신감을 심어주었습니다. 부트캠프를 마친 후 몇 달 내에 프론트엔드 개발자로써 내 꿈을 이룼하게 되었습니다 "`
    document.querySelector(".name").innerHTML = "이종석"
    document.querySelector(".job").innerHTML = "Vue.js"
})

arrowPrev.addEventListener("click" , () => {
    document.querySelector(".people").src = "1.jpg" 
    document.querySelector(".testimonial p").innerHTML = `" 코딩 부트캠프는 내 경력을 변화시키는 포괄적인 학습 경험을 제공했습니다. 실용적인 방법과 헌신적인 강사들은 학습과정을 즐겁고 보람 있게 만들었습니다. 이제 저는 부트캠프에서 얻은 덕분에 자신감 있는 소프트웨어 개발자입니다"`
    document.querySelector(".name").innerHTML = "배수지"
    document.querySelector(".job").innerHTML = "UX Engineer"
})
