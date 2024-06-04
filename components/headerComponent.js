import { ImageHeaderComponent } from "./ImageHeaderComponent";

export class HeaderComponent {
  render() {
    const imageHeaderComponent = new ImageHeaderComponent();

    const header = document.createElement("header");
    const titlesDiv = document.createElement('div')
    const topHeaderTitle = document.createElement("span");

    const titleOne = document.createElement("h1");

    const paragraphHeader = document.createElement("p");
    //header
    header.className =
      "container center-items display-flex-colunm center-items header";

    //top title
    topHeaderTitle.textContent = "ramenGo!";
    topHeaderTitle.className = "text-yellow bold topTitle";

    //h1
    titleOne.className = "display-flex-colunm center-items text-white fs-1";
    titleOne.innerHTML = '<span class="text-yellow fs-2">ラーメン </span> GO!';

    //p
    paragraphHeader.className = "text-white text-align-center fs-4 ";
    paragraphHeader.textContent =
      "Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!";


    //div containers 
    titlesDiv.className = 'm-auto w-75 titlesHeader'
    titlesDiv.appendChild(titleOne)
    titlesDiv.appendChild(paragraphHeader)

    
    header.appendChild(topHeaderTitle);
    header.appendChild(imageHeaderComponent.render());
    header.appendChild(titlesDiv);
    return header;
  }

  
}
