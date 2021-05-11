import {LitElement , html , css} from 'lit-element'

class Updates1 extends LitElement{
  constructor() {
    super();
    this._prop = 0;
  }  

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
table{
  margin:5%;
}

td{
  border-bottom:solid;
  margin:10%;
}
.concept{
  color:blue;
}
    `
  }
  
  static get properties() { 
        return {
             prop: { type: Number }
             };
      }
    
      set prop(val) {
        let oldVal = this._prop;
        this._prop = Math.floor(val);
        this.requestUpdate('prop', oldVal);
      }
    
      get prop() {
           return this._prop; 
        }

      render() {
        return html`
          <div>
          <h1>Another main Features</h1>
          <p>Los elementos heredados pueden usar la funcion <b> Polymer</b>
          para registrar un elemento. La funcion toma como argumento el pototipo del nuevo elemento.
          El prototipo debe tener una propiedad <b> is</b>, que especifique el nombre de la etiqueta
          <b> HTML </b> para su Custom Element.
          <table>
              <tr>
                <td class="concept">created</td>
                <td>Se llama cuando se ha creado el elemento, pero antes de que se
                 establezcan los valores de propiedad y se inicialice el DOM local.
                Úselo para una configuración única antes de que se establezcan los 
                valores de propiedad.
                Equivalente al constructor nativo.
                </td>
              <tr>
              <tr>
              <td class="concept">ready</td>
              <td>Se llama después de que se establezcan los valores de propiedad 
              y se inicialice el DOM local.
              Úselo para la configuración única de su componente después de que 
              se inicialice su árbol DOM 
              de sombra. (Para la configuración basada en valores de propiedad, 
              puede ser preferible utilizar un observador ).
              </tr>
              <tr><td class="concept">atttached</td>
              <td>	Se llama después de que el elemento se adjunta al documento.
               Se puede llamar varias veces durante la vida útil de un elemento.
                Se attachedgarantiza que la primera devolución de llamada no se 
                disparará hasta despuésready .
              Los usos incluyen la adición de detectores de eventos a nivel de documento. 
              (Para los oyentes locales del elemento, puede usar el manejo de eventos declarativos, 
                como los oyentes de eventos anotados ).
              
              Equivalente a nativo connectedCallback.</td>

              </tr>
          </table>
          
          <button @click="${() =>  { this.prop = Math.random()*10; }}">
          change prop
          </button>
          <p>prop: ${this.prop}</p>
          </div>
          
         
        `;
      }
}
customElements.define('my-update1' , Updates1)