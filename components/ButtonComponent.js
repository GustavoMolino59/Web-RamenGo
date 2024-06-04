export class ButtonComponent {
    constructor({id, text, icon, onClick} ) {
        this.text = text;
        this.onClick = onClick;
        this.icon = icon
        this.id = id
    }

    render() {
        const buttonContainer = document.createElement('div')
        const button = document.createElement('button');
        const icon = document.createElement('img')


        button.textContent = this.text;
        button.id = this.id
        icon.src = this.icon
        

        //classes
        buttonContainer.className = 'container display-flex-row center-items'
        button.className = 'btn display-flex-row center-between'
        icon.className = 'm-auto'
        buttonContainer.appendChild(button)
        button.appendChild(icon)


        button.addEventListener('click', this.onClick);
        return buttonContainer;
    }
}