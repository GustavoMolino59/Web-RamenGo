import { ButtonComponent } from "./ButtonComponent";
import { CardComponent } from "./CardComponent";
import { CarrouselComponent } from "./CarrouselComponent";
import { HeaderComponent } from "./headerComponent";


const componentRegistry = {
    'Button': ButtonComponent,
    'Header': HeaderComponent,
    'Card' : CardComponent,
    'Carrousel': CarrouselComponent,
    
    // Adicione mais componentes aqui
};


export async function renderComponents() {
    document.querySelectorAll('[data-component]').forEach(async element => {
        const componentName = element.getAttribute('data-component');
        const ComponentClass = componentRegistry[componentName];
  
        if (ComponentClass) {
            const props = JSON.parse(element.getAttribute('data-props') || '{}');
            if (typeof props.observer === 'string') {
                props.observer = window[props.observer];
            }
            const componentInstance = new ComponentClass(props);
            const renderedElement = await  componentInstance.render();
            element.replaceWith(renderedElement);
        }
    });
  }
  