import { html , LitElement , css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

class MyClass extends LitElement {
    static get properties() {
        return {
          classes: { type: Object },
          styles: { type: Object }
        }
      }
      static get styles() {
        return css`
          .mydiv { background-color: blue;
            height: 60px;
            font-size:60px;
        }
          .someclass { border: 1px solid red; }
        ` 
      }
      constructor() {
        super();
        this.classes = { mydiv: true, someclass: true };
        this.styles = { color: 'green', fontFamily: 'Roboto' };
      }
      render() {
        return html`
          <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
            Some content
          </div>
        `;
      }
}

customElements.define('my-class', MyClass);