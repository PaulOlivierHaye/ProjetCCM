import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `project-station`
 * Meteo station
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ProjectStation extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'project-station',
      },
    };
  }
}

window.customElements.define('project-station', ProjectStation);
