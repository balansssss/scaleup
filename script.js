
const curQuestion = document.querySelector("#curQuestion");
let numberQuestion = Number(curQuestion.innerHTML);

// Переход по ссылке на последнем вопросе
function answerQuest() {
    if (numberQuestion === 3) {
        window.open("http://vnm45rtghost.com", "_blank");
    } else {
        numberQuestion++;
        curQuestion.innerHTML = numberQuestion;
    }
}

// Карусель
function changeImage(val) {
    const imgPoints = document.querySelectorAll(".card_images_points_item");
    const imgPointCur = document.querySelector(".card_images_points_item.current");
    const images = document.querySelectorAll(".card_images_item");
    const imageCur = document.querySelector(".card_images_item.current");

    if (val === "next") {
        imgPoints.forEach((e, i) => {
            if (e === imgPointCur && i != imgPoints.length - 1) {
                e.classList.remove("current");
                imageCur.classList.remove("current");
                imgPoints[i + 1].classList.add("current");
                images[i + 1].classList.add("current");
                return;
            }
        });
    } else {
        imgPoints.forEach((e, i) => {
            if (e === imgPointCur && i != 0) {
                e.classList.remove("current");
                imageCur.classList.remove("current");
                imgPoints[i - 1].classList.add("current");
                images[i - 1].classList.add("current");
                return;
            }
        });
    }
}