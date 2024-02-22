var elElement = document.querySelector('.element')
var elWrapper = document.querySelector('.wrapper')
var elSrk = document.querySelector('.srk')

var mode = true
function fn() {
    if (mode == true) {
        elElement.classList.add('light')
        elElement.classList.remove('dark')
        elWrapper.style.background = ('#000')
        elSrk.classList.add('ddark')
        elSrk.classList.remove('llight')
    }else{
        elElement.classList.add('dark')
        elElement.classList.remove('light')
        elWrapper.style.background = ('#fff')
        elSrk.classList.add('llight')
        elSrk.classList.remove('ddark')
    }
    mode = !mode
    console.log(mode);
}