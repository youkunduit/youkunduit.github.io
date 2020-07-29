/*
  Copyright 2020 Esri

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.​
*/

define([
  "calcite",
  "dojo/_base/declare",
  "esri/identity/IdentityManager",
  "esri/core/promiseUtils"
], function(calcite, declare, IdentityManager, promiseUtils){

  return declare([], {

    /**
     *
     */
    constructor: function(){

      // INITIALIZE CALCITE WEB //
      calcite.init();

      // INITIALISE SURVEY //
      this.initializeSurvey();

    },

    /**
     *  INITIALIZE SURVEY123 FORM AFTER CONNECTION SPEED TEST //
     */
    initializeSurvey: function(){

          //
          // SURVEY123 WEB FORM //
          //
          const survey123WebForm = new Survey123WebForm({
            container: "survey123-webform",
            clientId: "kC3LdPudTY67vLfd",
            portalUrl: "https://nycdot.maps.arcgis.com",
            itemId: "6ed19d513abf4d0899f05e49d39142f2"
          });

          // SHOW SURVEY123 FORM //
          const surveyPanel = document.getElementById('survey-panel');
          surveyPanel.classList.remove('hide');
    }
  });
});