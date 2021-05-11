import { html , LitElement , css } from "lit-element";
import { buttonStyles } from './button-styles.js';


function Paragraph(){
    return html`<p>Aparece un data-binding en la plantilla del DOM como un atributo <b>HTML</b>
    Para el lado izquierdo del binding identifica el objetivo de propiedades o atributos.
    Para hacer bindig en el nombre de una propiedades a un nombre de un atributo se mapea:<br>
    <code>
        property-name=annotation-or-compound-binding<br>
        attribute-name$=annotation-or-compound-binding
    </code>
    </p>
    `
}


function articleTemplate(text){
    return html`<h1>${text}</h1>`;
}


function button(){
    return html`<button class="blue-button">Click me </button>`;
}

class MyPage extends LitElement {
    static get styles(){
        return [
            buttonStyles,
        
        css`
        div{
            -webkit-box-shadow: 2px 2px 5px #999;
            margin:10%;
            text-align:center;
            
        }
        h1::first-letter
    {
        font-size:150%;
    }
    p::first-letter{
        font-size:150%;
    }
    :host{
        font-family:Arial;
        max-width: 70%;
        max-height:70%;
        margin:auto;
    }
        
        `
    ] 
    }
    
    static get properties() {
        return {
            article: {
                attribute: false,
            },
        };
    }

    constructor(){
        super();
        this.article = {
            text: 'Data binding anatomy',
        };
    }

    render() {
        return html`
        <div>
        ${articleTemplate(this.article.text)}
        ${Paragraph()}
        ${button()}
        </div>
        `;
    }
}

customElements.define('my-templates', MyPage)