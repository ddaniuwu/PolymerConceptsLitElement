import {LitElement, html,css} from 'lit-element';

class Change extends LitElement {
static get styles(){
    return css`
    div{
        -webkit-box-shadow: 2px 2px 5px #999;
        margin:10%;
        text-align:center;
        
    }
    
    
    .boton{
        width: 100px;
        height:50px;
        font-size:100%;
        cursor:pointer;
        border-radius:5px;
    }
    .boton:hover{
        background-color:black;
        color:white;
        -webkit-box-shadow: 2px 2px 9px #999;
    }
    :host{
        font-family:Arial;
        max-width: 70%;
        max-height:70%;
        margin:auto;
    }
    p{
        margin:2%;
        font-weight:bold;
    }
     li{
       text-align:center; 
        list-style:none;
        color:red;
        text-transform: uppercase;
    }
    li:hover{
         color:green;
         font-wight:bold;
         text-transform: lowercase;
     }
    
    h1::first-letter
    {
        font-size:150%;
    }
    p::first-letter{
        font-size:150%;
    }
    `
}

static get properties() {
    return {
        counter: {type: Number },
        prop : { reflect: true}
    };
}

constructor() {
    super();
    this.counter = 0;
    this.prop = ' Mi propiedad';
}

render(){
    return html`
    <div>
    <button class="boton" @click="${this.increment}">Button</button>
    <P>${this.counter}</p>
    <div>
    <button class="boton" @click="${this.changeProperty}">Change Property </button>
    <p>${this.prop}</p>
    </div>

    <div>
        <h1>Lit-Element</h1>
        <ul>
            <li>ConnectedCallbacks:</li>
            <p>Nos indican cuando un elemtno esta conectado al DOM</p>
            <li>DisconnectedCallback:</li>
            <p> Nos indica cuando un elemento ha sido desconectado del DOM</p>
            <li>AdoptedCallback:</li>
            <p>Invoca cuando un componente es movido a un nuevo document</p>
            <li>attributeChangedCallback:</li>
            <p>Invoca cuando el atributo de un componenete cambia</p>
        </ul>
    <div>
    `
}
connectedCallback() {
    super.connectedCallback();
    console.log('Conectado')
}

attributeChangedCallback(name , oldVal, newVal){
    console.log('Attribute change' , newVal)
    super.attributeChangedCallback(name , oldVal , newVal)
}

changeProperty(){
    let randomString = Math.floor(Math.random()*100).toString();
    this.prop = 'My prop' +randomString
}
increment(){
    this.counter ++
}
}

customElements.define('my-change', Change);