import { html , LitElement , css} from "lit-element";


function Mytext(text){
    return html`<h1>${text}</h1>`;
}
function AnotherText(another_text){
    return html`<h4> ${another_text}</h4>`;
}

function ShadowDomtext1(shadowDomtext){
    return html`<p>${shadowDomtext}</p>`
}

function ShadowDomtext2(){
    return html`<p>Proporciona encapsulación de estilo al agregar clases a los hijos de <b>ShadowDOM</b>
     y reescribir las reglas de estilo para que se apliquen al ámbito correcto.</p>`
}
//Seccion de funciones que regresan etiquetas con valores definidos en el constructor

class MyEvents extends LitElement{
    constructor(){
        super();
        this.article = {
            text: '¿Como funcionan los Polyfills?',
            another_text:  'Los polyfills utilizan una combinación de técnicas para emular shadow DOM',
            shadowDomtext: ` Mantiene las divisiones lógicas del árbol de sombras
             y el árbol descendiente internamente, por lo que los niños agregados al LightDOM o
              ShadowDOM se representan correctamente. Aplica parches a las
             API de DOM en los elementos afectados para emular las API de DOM de sombra nativas.`
        };
    }

    static get styles(){
        return css`
        div{
            -webkit-box-shadow: 2px 2px 5px #999;
            margin:10%;
            text-align:center;
            
        }
        :host{
            font-family:Arial;
            max-width: 70%;
            max-height:70%;
            margin:auto;
        }
        h4{
            text-shadow: 1px 1px 5px black;
            color:yellow;
        }
        h4:hover{
            color:black;
        }
        `
    }
    
    static get properties() {
        return {
            article: {attribute: false}
        };
    }
    render() {
        return html`
        <div>
            ${Mytext(this.article.text)}
            ${AnotherText(this.article.another_text)}
            <h3>ShadowDOM:</h3>${ShadowDomtext1(this.article.shadowDomtext)}
            <h3>Shady CSS:</h3>${ShadowDomtext2()}
        </div>
            `;
    }
}

customElements.define('my-events', MyEvents)