import './style.css'
import {renderComponents} from './components/ComponentsRegistry';
import { api } from './services/api';


function homePage() {
  
  document.querySelector('#app').innerHTML = /*html*/`
  <main class="container"> 
    <div data-component="Header"></div>
    <main id="main-home" class="container back-white"> 
      <div class="container-padding"> 
        <h2 class="fs-3 text-align-center">First things first: select your favorite broth. </h2>
        <p class="fs-4 text-align-center">It will give the whole flavor on your ramen soup.  </p>
        <div data-component="Carrousel" data-props='{"observer":"selectBroths", "route":"/broths"}'> </div>
      </div>
      <div class="container-padding"> 
        <h2 class="fs-3 text-align-center">It’s time to choose (or not) your meat! </h2>
        <p class="fs-4 text-align-center">Some people love, some don’t. We have options for all tastes. </p>
        <div data-component="Carrousel" data-props='{"observer":"selectProtein", "route":"/proteins"}'> </div>
      </div>
      <div  data-component="Button" data-props='{"text":"PLACE MY ORDER" , "icon":"../arrow.svg", "id":"buttonOnSubmit"}'>
      </div>
  </main>
  `;

}

async function showSuccessScreen(response) {
  console.log(response.image)
  const img = `${api.baseUrl()}/files/${response.image.replace(/\s+/g, '')}.png`;
  const title = 'Shoyu and Karaague Ramen';
  document.querySelector('#app').innerHTML = /*html*/`
    <main class="main-sucess">
      <div class="container center-items display-flex-colunm center-items header sucess"> 
          <span class="text-yellow bold"> ramenGo!</span>
          <div class="display-flex-row container center-items img-sucess">
            <img class="m-auto img-container" src="${img}" />
          </div>
          <p class="text-white bold"> Your Order:</p>
          <h3 class="text-yellow bold">${title}</h3>
      </div>
      <div class="container back-white center-items display-flex-colunm center-items gap-2 body-sucess"> 
        <div class="display-flex-colunm center-items gap-1">
          <img src="../iconSucess.svg"/>
          <p class="text-yellow">どもありがとうございます。</p>
          <h3 class="text-red">Your order is being prepared</h3>
        </div>
        <p class="text-black text-align-center">Hold on, when you least expect you will be eating your rámen.</p>
        <div data-component="Button" data-props='{"text":"RETURN HOME" , "icon":"../arrow.svg", "id":"ReturnHomeButton"}'></div>
      </div>
    </main>
  `;
  await renderComponents();

  document.getElementById('ReturnHomeButton').addEventListener('click', () => {
    location.reload()
    homePage()});
}

// Initial call to homePage to render the home screen
homePage();

document.addEventListener('DOMContentLoaded', async () => {
  await renderComponents()
  document.getElementById('buttonOnSubmit').disabled = true;
  document.getElementById('buttonOnSubmit').addEventListener('click', async() => {
    const data = {brothId: selecteBroths, proteinId: seletedProtein}
    const response = await api.post('/orders', data)
    showSuccessScreen(response)
  });
});




let selecteBroths = null;
let seletedProtein = null;

function selectBroths(selected) {
  selecteBroths = selected;
  isAvailableToSubmit()
}

function selectProtein(selected) {
  seletedProtein = selected;
  
  isAvailableToSubmit()
}

function isAvailableToSubmit(){

  if(selecteBroths !== null && seletedProtein !== null){
    document.getElementById('buttonOnSubmit').disabled = false;
  }
}
// Tornar a função global
window.selectBroths = selectBroths;
window.selectProtein = selectProtein;


