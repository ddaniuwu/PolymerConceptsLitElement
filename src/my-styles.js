import {LitElement, html, css } from 'lit-element';

const mainColor = css`red` 
const margin = css`50%`;
const font = css`30px`

class PascalCaseName extends LitElement {

    static get styles() {
        return css
        `div { color : ${mainColor};
             margin-left : ${margin};
             font-size: ${font};
    }
    `;
        
    }
    render() {
        return html`
        <div> Some content div</div>
        `;
    }

}

customElements.define('my-styles', PascalCaseName);