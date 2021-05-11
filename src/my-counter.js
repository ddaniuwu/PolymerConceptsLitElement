import { LitElement , html , css} from 'lit-element'


class MyCounter extends LitElement{
    static get styles() {
        return css`
        .general-text{ 
            text-align:center;
            font-size:50px;
          }
        `
    }


    static get properties() {
        return {
            counter: {type: Number }
        };
    }

    constructor() {
        super();
        this.counter = 0;
    }

    render() {
        return html`
        <div class="general-text"> Llevas ${this.counter}  clicks </div>
        <div>
            <button @click="${this.incrementar}">+1</button>
        </div>
        `;
    }

    incrementar() {
        this.counter ++;
    }
} 

customElements.define('my-counter', MyCounter);