import { LitElement, html , css} from 'lit-element';

class MyElement extends LitElement {
  static get styles(){
    return css`
    :host{
      font-family:Arial;
      max-width: 70%;
      max-height:70%;
      margin:auto;
  }
    div{
      -webkit-box-shadow: 2px 2px 5px #999;
      margin:10%;
      text-align:center;   
  }
  h4{
    text-shadow: 1px 1px 5px black;
    color:yellow;
}
h4:hover{
    color:black;
}
b{
  color:coral;
}
    
    `
}

  static get properties() {
    return {
      prop1: {type: String},
      prop2: {type: String},
      prop3: {type: Boolean},
      prop4: {type: String}
    };
  }
  constructor() {
    super();
    this.prop1 = 'Plantillas con Polymer';
    this.prop3 = true;
    this.prop4 = 'static get template()'
  }
  render() {
    return html`
        <div id="${this.prop2}">
        <h1>${this.prop1}</h1>
        <b>Especificar una plantilla con captador de plantillas</b>
        <input class="general-text" type="text" disabled="${this.prop3}" .value="${this.prop4}"/><br>
        <button @click="${this.clickHandler}">click</button>
        <h4>Heredar otra plantilla de otro polymer</h4>
        <p>Para heredar una plantilla de clase base sin modificarla,
         no proporcione una definición de plantilla en la declaración de la clase secundaria.</p>
         <h4>Clase Base</h4>
         <code>
         export class BaseClass extends PolymerElement{
           static get template(){
             return html...<br>
           }
         }
         </code>
         <h4>Clase hija</h4>
         <code>
         import {BaseClass} from './base-class.js'
          export class ChildClass extends BaseClass {
            ...
          }
          </code>

          <h2>Ampliar una plantilla de clase base en una clase secundaria</h2>
          <code>
          class BaseClass extends <b>PolymerElement</b> {
          ...
          }<br>
          class ChildClass extends<b> BaseClass</b> {<br>
          ...
          <p>super.template</p> //redirige el contenido de la clase base a la clase hija
          }

          </code>
          </div>
    `;
  }
  clickHandler(e) {
      console.log(e.target);
  }
}

customElements.define('my-element', MyElement);