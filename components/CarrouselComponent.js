import { CardComponent } from "./CardComponent"
import { api } from "../services/api"


export class CarrouselComponent{


     constructor({observer, route}){
        this.route = route
       
        this.containerSlides = null
        this.HTMLComponents = []
        this.cardComponents = []
        this.currentSlide = 0;
        this.buttons = []

        //Observadores para saber qual foi clicado
        this.selected = null;
        this.observer = observer
    }
    
    async fetchData(){
        const response = await api.get(this.route)
        this.slides = response
    }

    setSelected(value) {
        this.selected = value;
        this.observer(this.selected);
        
    }

    async render(){
        await this.fetchData()
        this.slides.forEach((item) => {
            const actual = new CardComponent(item)
            const actualHTML = actual.render()


            this.cardComponents.push(actual)
            this.HTMLComponents.push(actualHTML)
            const button = document.createElement('button')
            button.className = 'btn-carrousel'
            this.buttons.push(button)
        })
        

        //divs
        const carrouseContainer = document.createElement('div')
        this.containerSlides = document.createElement('div')
        const buttonContainer = document.createElement('div')
        
        //this.buttons
        this.buttons[0].classList.add('active')
        //classes
        carrouseContainer.className = 'carrossel display-flex-colunm gap-2'
        this.containerSlides.className = 'container-carrousel gap-1'
        buttonContainer.className = 'container display-flex-row gap-1 center-items buttons-container' 
        
        //logica
        this.HTMLComponents.forEach((slide) => {
            this.containerSlides.appendChild(slide)
        })
        this.buttons.forEach((button ) => {
            buttonContainer.appendChild(button)
        })

        //Logica de clique em cada card
        this.cardComponents.forEach((card, index1) => {
            this.HTMLComponents[index1].addEventListener('click',() => {
                card.updateCardState(true)
                this.setSelected(this.slides[index1].id)
                this.cardComponents.forEach((card, index2) => {
                    if(index1 !== index2){
                        card.updateCardState(false)
                    }
                })
            })
            
        })


        carrouseContainer.appendChild(this.containerSlides)
        carrouseContainer.appendChild(buttonContainer)

        this.addSwipeListener()

        return carrouseContainer
    }
    
    addSwipeListener() {
        this.containerSlides.addEventListener('touchstart', (e) => {
            this.touchstartX = e.changedTouches[0].screenX;
            this.containerSlides.style.transition = 'none'; // Remove a transição durante o swipe
        });

        this.containerSlides.addEventListener('touchmove', (e) => {
            this.touchmoveX = e.changedTouches[0].screenX;
            this.updateCarouselPositionDuringSwipe();
        });

        this.containerSlides.addEventListener('touchend', (e) => {
            this.touchendX = e.changedTouches[0].screenX;
            this.handleSwipeGesture();
        });
    }

    updateCarouselPositionDuringSwipe() {
        const distanceMoved = this.touchmoveX - this.touchstartX;
        const offset = (-this.currentSlide * 288) + (distanceMoved / this.containerSlides.clientWidth * 288);
        this.containerSlides.style.transform = `translateX(${offset}px)`;
    }

    handleSwipeGesture() {
        const distanceMoved = this.touchendX - this.touchstartX;
        if (distanceMoved < -50) {
            this.nextSlide();
        } else if (distanceMoved > 50) {
            this.prevSlide();
        } else {
            this.updateCarouselPosition();
        }
    }

    nextSlide() {
        if (this.currentSlide < this.slides.length - 1) {
            this.currentSlide++;
            this.updateCarouselPosition();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateCarouselPosition();
        }
    }

    updateCarouselPosition() {
        const offset = -this.currentSlide * 288;
        this.containerSlides.style.transition = 'transform 0.5s ease-in-out'; // Adiciona a transição de volta
        this.containerSlides.style.transform = `translateX(${offset}px)`;
        setTimeout(() => {
            this.containerSlides.style.transition = ''; // Remove a transição após a animação
        }, 500);
        this.buttons.forEach((button) => {if(button.classList.contains('active')){button.classList.remove('active')}})
        this.buttons[this.currentSlide].classList.add('active')
    }
}

