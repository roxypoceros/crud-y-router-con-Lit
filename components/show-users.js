import { LitElement, html, css } from 'lit';

export class ShowUsers extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
        <h1>Estoy en show users</h1>
    `;
  }
}
customElements.define('show-users', ShowUsers);
