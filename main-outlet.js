import { LitElement, html, css } from 'lit';
import { outlet } from "lit-element-router";
import "./components/info-users"
import "./components/show-users"
import "./components/add-user"

export class MainOutlet extends outlet (LitElement) {


  render() {
    return html`
    <slot>

    </slot>
    `;
  }
}
customElements.define('main-outlet', MainOutlet);
