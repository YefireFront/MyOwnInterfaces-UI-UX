
const $slider = document.querySelector('.slider')
const $li = document.querySelectorAll('.navigation ul li ')
let indexValue = 0;
let leftPosition = 0;


$li.forEach((element, index)=>{
    $slider.style.width = [0].clientWidth + "px"
    $slider.style.left = leftPosition + "px"
    

    element.onclick = function () {
        $slider.style.width = element.clientWidth + "px"
        indexValue = index
        getPosition()
        $slider.style.left = leftPosition + "px"
        leftPosition = 0
        
    }
})


function getPosition() {

    for (let i = 0; i < indexValue; i++) {
        const element = $li[i];
        leftPosition += element.clientWidth
        console.log(leftPosition);

        
    }
    
}

