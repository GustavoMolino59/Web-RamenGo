export class ImageHeaderComponent {

    render() {
        const containerImg = document.createElement('div')
        const elipseBackgoudDiv = document.createElement('div')
        const containerElipsis = document.createElement('div')
        const imgHeader = document.createElement('img')
        const blueBalloon = document.createElement('img')
        const yellowBallon = document.createElement('img')


        const titleOne = document.createElement("h1");
        const titleTwo = document.createElement("span");
        const titlesDiv = document.createElement('div')

        const paragraphHeader = document.createElement("p");

        imgHeader.src = 'assets/header/entregadoraHeader.webp'
        yellowBallon.src = 'assets/header/balaoLaranja.svg'
        blueBalloon.src = 'assets/header/balaoAzul.svg'


        imgHeader.className = 'image-header '
        yellowBallon.className = 'ballonYellow-header'
        blueBalloon.className = 'ballonBlue-header'

        containerImg.className = 'container center-items display-flex img-header'
        containerElipsis.className = 'w-50 m-auto'
        elipseBackgoudDiv.className = 'rounded-background container back-hard-red relative'

        //h1
        titleOne.className = "display-flex-row text-white fs-1";
        titleOne.innerHTML = '<span class="text-yellow fs-2">ラーメン </span> GO!';

        //p
        paragraphHeader.className = "text-white text-align-center fs-4 ";
        paragraphHeader.textContent =
            "Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!";


        //div containers 
        titlesDiv.className = 'm-auto w-75 titlesHeader-img'
        titlesDiv.appendChild(titleOne)
        titlesDiv.appendChild(paragraphHeader)

        const button = document.createElement('div')
        button.className = 'button-header'
        button.innerHTML = '<button id="buttonScrollTo" class="btn display-flex-row center-between"> PLACE MY ORDER<svg class="m-auto" width="18" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7115 7.23199L13.3586 0.298656C12.9845 -0.11041 12.3878 -0.0976104 12.0278 0.326923C11.6673 0.751457 11.6786 1.42666 12.0532 1.83519L16.7247 6.93333H0.941176C0.421176 6.93333 0 7.41119 0 7.99999C0 8.58933 0.421176 9.06666 0.941176 9.06666H16.7247L12.0532 14.1653C11.6786 14.5739 11.6673 15.2491 12.0278 15.6736C12.2127 15.8907 12.4588 16 12.7059 16C12.9407 16 13.176 15.9013 13.3586 15.7019L19.7115 8.76853C19.896 8.56746 20 8.29013 20 7.99999C20 7.71039 19.896 7.43306 19.7115 7.23199Z" fill="white"/></svg></button>'



        containerImg.appendChild(containerElipsis)
        containerElipsis.appendChild(elipseBackgoudDiv)
        elipseBackgoudDiv.appendChild(yellowBallon)
        elipseBackgoudDiv.appendChild(blueBalloon)
        elipseBackgoudDiv.appendChild(imgHeader)
        titlesDiv.appendChild(button)
        elipseBackgoudDiv.appendChild(titlesDiv)


        button.addEventListener('click', () =>{
            document.getElementById("main-home").scrollIntoView({ behavior: 'smooth' });
        })

        return containerImg

    }

}