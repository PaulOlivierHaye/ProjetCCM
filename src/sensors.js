import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

class SensorCard extends PolymerElement {
  static get properties() {
    return {
    }
  }


  static get template() {
    return html`
    <style>
      .sensors-card {
        height: 88vh;
        display: flex;
        flex-direction: column;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }

      .card-content {
        font-size:20px;
        position:0 0 0 0;
        flex-grow:2;
        padding: 5px;
      }

      .buttons {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
      }

      .buttons paper-button{
        flex-grow:1;
      }

      paper-button {
        padding: 0px;
        margin-bottom: 5px;
        background: lightgreen;
        color: green;
      }

      paper-button:not([disabled]) {
        background: lime;
      }

      paper-button:hover {
        background: lightgreen;
      }

      vaadin-grid {
        font-size: 13px;
      }
    </style>
    <paper-card class="sensors-card" heading="Capteurs">
      <div class="card-content">
        <vaadin-grid>
          <vaadin-grid-column path="number" header="Numéro"></vaadin-grid-column>
          <vaadin-grid-column path="hygro" header="Hygrométrie"></vaadin-grid-column>
          <vaadin-grid-column path="temp" header="Température"></vaadin-grid-column>
          <vaadin-grid-column path="battery" header="Batterie"></vaadin-grid-column>
        </vaadin-grid>
      </div>
      <!-- <div class="buttons">
        <paper-button class="arroser">Arroser</paper-button>
        <paper-button disabled class="notarroser">Arreter</paper-button>
        <paper-button class="bouton3">Auto</paper-button>
      </div> -->
    </paper-card>
    `;
  }

  ready() {
    super.ready();
    const grid = document.querySelector('sensor-card').shadowRoot.querySelector('vaadin-grid');

    grid.items = [
      {
        "number": 1,
        "hygro": 'OK',
        "temp": 16,
        "battery": '36%'
      },
      {
        "number": 2,
        "hygro": 'OK',
        "temp": 16,
        "battery": '82%'
      },
      {
        "number": 3,
        "hygro": 'Forte',
        "temp": 17,
        "battery": '6%'
      },
      {
        "number": 4,
        "hygro": 'OK',
        "temp": 16,
        "battery": '58%'
      },
      {
        "number": 5,
        "hygro": 'Basse',
        "temp": 16,
        "battery": '75%'
      },
      {
        "number": 6,
        "hygro": 'Basse',
        "temp": 17,
        "battery": '49%'
      },
      {
        "number": 7,
        "hygro": 'Basse',
        "temp": 17,
        "battery": '85%'
      },
      {
        "number": 8,
        "hygro": 'Basse',
        "temp": 19,
        "battery": '8%'
      }
    ];
  }

}
customElements.define('sensor-card', SensorCard);