import { LitElement , html , css } from 'lit-element';


//conected-disconnected callbacks

class MyPlatziClass1 extends LitElement {
    constructor(){
        super();
        this.p = document.createElement("H2")
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
  b{
    color:coral;
  }
  code{
    background-color:#A3FCFC;
  }
      `
    }

    connectedCallback() {
       super.connectedCallback();
       console.log('conectado')
       this.p.textContent = "Mixins de propiedad personalizados(Custom Property Mixins)"  
    }

    
   render() {
    return html`
    <div>
        ${this.p}
        <ul>
            <li>Básicamente, el <b>mixin</b> es una variable que contiene múltiples propiedades:</li>
            <code>
            html {
              --my-custom-mixin: {
                color: white;
                background-color: blue;
              }
            }
            </code>
            <li>Una regla <b>@apply</b> tiene el mismo efecto que agregar el contenido de 
            <b>--my-custom-mixin</b> en linea en conjunto de reglas donde @apply se usa.
            </ul>
            <code>
            :host {
              @apply --my-custom-mixin;
            }
            </code>
            
    </div>
        `;
}
}

customElements.define('my-platzi' , MyPlatziClass1)