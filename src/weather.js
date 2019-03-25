import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";

class WeatherCard extends PolymerElement {
  static get properties() {
    return {
      _weatherJson: Object,
      _forecastJson: Object,
      _buttonActive: {
        type: Boolean,
        value: false,
        observer: "_loadWeatherData"
      }
    }
  }

  _loadWeatherData() {
    
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Amiens&APPID=f341f2a56cba93cb2ee5abecb3ce5448",
      (json) => {
        this._weatherJson = json;
        document.querySelector('weather-card').shadowRoot.querySelector('div.temp').innerHTML
          = "Température : " + (json.main.temp - 273.15).toFixed(1) + "°C";
        
        document.querySelector('weather-card').shadowRoot.querySelector('#icon').src
          = "http://openweathermap.org/img/w/" + this._weatherJson.weather[0].icon + ".png";
    });
  }  

  static get template() {
    return html`
    <style>
      .weather-card {
        height: 88vh;
        display: flex;
        flex-direction: column;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      }

      .card-content {
        font-size:20px;
      }

      .announce {
        font-size: 20px;
        color: green;
        margin: 16px;
        text-align: center;
      }

      iron-icon {
        width: 60px;
        height: 60px;
      }
      paper-button {
        background: lime;
        color: green;
        margin: 16px;
      }

      paper-button:hover {
        background: lightgreen;
      }
    </style>
    <paper-card class="weather-card" heading="Météo">
      <div class="card-content">
        <!-- <div>[[_weatherJson.name]]</div> -->
        <div>Saint-Quentin</div>
        <span>[[_weatherJson.weather.0.main]]</span>
        <iron-icon id="icon"></iron-icon>
        <div class="temp"></div>
        <div>Précipitations : [[_weatherJson.rain]] mm</div>
        <div>Humidité : [[_weatherJson.main.humidity]]%</div>
        <div>Vent : [[_weatherJson.wind.speed]] km/h</div>
      </div>
      <paper-button active="{{_buttonActive}}">Rafraichir</paper-button>
      <p class="announce">Une pluie est prévue aujourd'hui, l'arrosage n'est pas nécéssaire.</p>
    </paper-card>
    `;
  }
}
customElements.define('weather-card', WeatherCard);