import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";

export class InfoUsers extends navigator(LitElement) {
  render() {
    return html`
      <h1>Estoy en info users</h1>
      <button @click="${() => this.navigateTo("/")}">Hacia show USERS</button>
    `;
  }

  navigateTo(path) {
    this.navigate(path);
  }
}
customElements.define("info-users", InfoUsers);
