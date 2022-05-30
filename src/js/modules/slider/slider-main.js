import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        //Если в переменной n быльше чем количество слайдов, нужно вернуть в начало слайдер
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            //слайд индекс равен последнему елементу.
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = 0;

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = 1;
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                //если пользователь уходит с этой страницы удаляем класс
                this.hanson.classList.remove('slideInUp');
            }
        } catch(e) {

        }
        

        this.slides.forEach(slide => {
            slide.style.display = "none";
        });

        this.slides[this.slideIndex - 1].style.display = 'block'; //номерация в массивах с 0
    }

    changeSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex); //вызываем повторну инициализацию
            });
        });

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.changeSlides(-1);
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.changeSlides(1);
            });
        });
    }

    //самый главный метод
    render() {
       if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e) {}
            
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        } 
    }
}