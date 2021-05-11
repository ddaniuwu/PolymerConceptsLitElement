import {LitElement , html , css} from 'lit-element'

class Updates  extends LitElement{
constructor(){
    super();
    this.addEventListener ('load-complete' , async function(e){
        console.log(e.detail.message);
        console.log(await this.requestUpdate())
    })
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

render (){
    return html `
    <div>
    <h1> Polymer Elements</h1>
    <h4>array-selector.js</h4>
    <p>Elemento personalizado que vincula rutas entre una matriz de <b>"elementos"</b>
    de entrada y una matriz o elemento <b> "seleccionado"</b> de salida en funcion de las llamadas 
    a su API de seleccion.</p>
    <button @click=${this.lanzar}>Lanza una carga completada </button>
    <h4>custom-style.js</h4>
    <p>Custom Element para definir estilos en el documento principal que puede aprovechar
     el alcance de estilo de Polymer y las moficaciones de propiedades personalizadas. </p>
     <h4>dom-bind.js</h4>
     <p>Elemento personalizado para permitir el uso de teplates con caracteristicas de Polymer(data binding)
     eventos listeners declarativos en el documento principal.</p> 
     <p>Las etiquetas que usan enlaces pueden estar envueltas con el elemento <b>dom-bind</b></p>
     <code>
     import {} from '@polymer/polymer/lib/elements/dom-bind.js'
     </code>
     <h4>dom-if</h4>
     <p>Marca , oculta  o elimina condicionalmente el contenido de la plantilla
     en funcion de una marca boleana</p>
    El elemento <b><dom-if></b> ella un template child en el light-dom cuando la propiedad
    if se vuelva veraz y la plantilla pueda usar funciones de <b>data-binding</b> y <b>declarative-events</b>
    <h4>dom-module.js</h4>
    <p>Registra el dom que contiene al nombre dado por el atributo id del modulo.</p>
    </div>
    `
}

lanzar(){
    let newMessage = new CustomEvent('load-complete', {
        detail : {message : 'hello a load-complete happened'}
    })
    this.dispatchEvent(newMessage)
}
    
}
customElements.define('my-update', Updates)