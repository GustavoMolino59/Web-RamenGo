import { api } from "../services/api";

export class CardComponent {
    constructor({name, imageActive, imageInactive, price, description, active = false}) {
        this.title = name;
        this.imageActive = imageActive;
        this.imageInactive = imageInactive;
        this.price = price;
        this.description = description;
        this._active = active;
        this.listeners = [];
    }

    
    
    
    // Método para atualizar o estado do card
    updateCardState(isActive) {
        const containerBaseHTML = this.containerBaseHTML;
        const titleHTML = this.titleHTML;
        const descriptionHTML = this.descriptionHTML;
        const priceHTML = this.priceHTML;
        const imageActiveHTML = this.imageActiveHTML;
        const imageInactiveHTML = this.imageInactiveHTML;

        if (isActive) {
            containerBaseHTML.classList.add('active');

            titleHTML.classList.remove('text-blue');
            titleHTML.classList.add('text-white');

            descriptionHTML.classList.remove('text-black');
            descriptionHTML.classList.add('text-white');

            priceHTML.classList.remove('text-red');
            priceHTML.classList.add('text-yellow');

            imageActiveHTML.classList.remove('hidden');
            imageInactiveHTML.classList.add('hidden');
        } else {
            containerBaseHTML.classList.remove('active');

            titleHTML.classList.remove('text-white');
            titleHTML.classList.add('text-blue');

            descriptionHTML.classList.remove('text-white');
            descriptionHTML.classList.add('text-black');

            priceHTML.classList.remove('text-yellow');
            priceHTML.classList.add('text-red');

            imageActiveHTML.classList.add('hidden');
            imageInactiveHTML.classList.remove('hidden');
        }
    }

    render() {
        // Estrutura
        this.containerBaseHTML = document.createElement('div');
        this.imageActiveHTML = document.createElement('img');
        this.imageInactiveHTML = document.createElement('img');
        this.titleHTML = document.createElement('h3');
        this.descriptionHTML = document.createElement('p');
        this.priceHTML = document.createElement('p');

        // Classe
        // Container
        this.containerBaseHTML.className = 'container card-box-shadow display-flex-colunm center-items rouded-little ';
        this.imageActiveHTML.className = 'img-container hidden';
        this.imageInactiveHTML.className = 'img-container';
        this.titleHTML.className = 'text-blue bold';
        this.descriptionHTML.className = 'text-black fs-6 text-align-center';
        this.priceHTML.className = 'text-red bold';
        this.priceHTML.style = 'margin-top:22px;';

        // Textos
        console.log(this.imageInactive)
        console.log(this.imageActive)
        this.imageActiveHTML.src = `${api.baseUrl()}/files/${this.imageActive}`;
        this.imageInactiveHTML.src = `${api.baseUrl()}/files/${this.imageInactive}`;
        this.titleHTML.textContent = this.title;
        this.descriptionHTML.textContent = this.description;
        this.priceHTML.textContent = 'US$ ' + this.price;

        // Appending children
        this.containerBaseHTML.appendChild(this.imageActiveHTML);
        this.containerBaseHTML.appendChild(this.imageInactiveHTML);
        this.containerBaseHTML.appendChild(this.titleHTML);
        this.containerBaseHTML.appendChild(this.descriptionHTML);
        this.containerBaseHTML.appendChild(this.priceHTML);

        // Initial state update
        this.updateCardState();

        
        return this.containerBaseHTML;
    }
}