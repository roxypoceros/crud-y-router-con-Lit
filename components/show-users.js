import { LitElement, html } from "lit";
import { navigator } from "lit-element-router";

export class ShowUsers extends navigator(LitElement) {
  render() {
    return html`
      <h1>Estoy en show users</h1>
      <button @click="${() => this.navigateTo("/info")}">
        Hacia show info
      </button>
    `;
  }
  navigateTo(path) {
    this.navigate(path);
  }
}
customElements.define("show-users", ShowUsers);
