import { LitElement, html, css } from 'lit';
import { outlet } from "lit-element-router";
import "./components/info-users"
import "./components/show-users"

export class MainOutlet extends outlet (LitElement) {


  render() {
    return html`
    <slot>

    </slot>
    `;
  }
}
customElements.define('main-outlet', MainOutlet);
