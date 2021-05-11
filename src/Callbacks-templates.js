import { LitElement , html } from 'lit-element';

//En este archivo se trabaja con slots multiples y sencillos
class MyCallback extends LitElement {
    constructor() {
        super();
        this.counter = 0; 
    }
    

    render() {
        return html`
       <div>
            <slot> </slot>
            <slot = "My-slot"> </slot>
       </div>
       <div>llevas ${this.counter}</div>
       <button @click="${this.indrementa}"> CLick</button>
        `
        ;
    }
    /**
      * Called every time the element is inserted into the DOM. Useful for 
      * running setup code, such as fetching resources or rendering.
      * Generally, you should try to delay work until this time.
      */
    // connectedCallback() {
    //     super.connectedCallback();
    //     console.log('Mi boton esta conectado')
    //     // this.button.textContent = 'Mi botton está conectado'
    // }


    indrementa(){
        this.counter ++;
        console.log(this.counter)
    }
}

customElements.define('my-platzi2', MyCallback)