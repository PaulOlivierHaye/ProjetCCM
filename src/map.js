import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

class MapCard extends PolymerElement {
  static get properties() {
    return {
    }
  }


  static get template() {
    return html`
    <style>
      .map-card {
        height: 88vh;
        display: flex;
        flex-direction: column;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }

      .card-content {
        height: 100%;
        font-size: 20px;
        position:0 0 0 0;
        flex-grow: 2;
        text-align:center;
      }

      .map {
        height: 80%;
      }

      .map-state {
        position: absolute;
        bottom: 5px;
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 16px;
      }

      .reco {
        font-size: 14px;
        color: red;
      }

      paper-button {
        background: lime;
        color: green;
      }

      paper-button:hover {
        background: lightgreen;
      }
    </style>
    <paper-card class="map-card" heading="Stade Philippe Roth">
      <div class="card-content">
        <img class="map" src="../img/roth.jpg"/>
      </div>
      <div class="map-state">
        <div>
          <div>
            Recommandations :
          </div>
          <div class="reco">
              - Les parcelles 5 – 6 – 7 – 8 doivent être arrosées <br>

              - Les batteries des capteurs 3 et 8 doivent être changées
          </div>
        </span>
      </div>
    </paper-card>
    `;
  }

}
customElements.define('map-card', MapCard);