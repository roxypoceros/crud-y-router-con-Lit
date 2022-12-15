import { LitElement, html, css } from 'lit';

export class OutletComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
    <h2>HOLA, HOLA</h2>
    `;
  }
}
customElements.define('outlet-component', OutletComponent);
