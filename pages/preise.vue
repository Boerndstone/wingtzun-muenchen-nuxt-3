<template>
  <div>
    <section class="container-rot">
      <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div>
            <h2>Deine Wing Tzun Mitgliedschaft</h2>
            <p>
              Deine Mitgliedschaft beinhaltet alles was du zum erlernen von Wing Tzun
              benötigst. Hier findest du eine Übersicht zu unseren Preisen. Du kannst
              individuell zwischen den Trainingsorten wählen. Natürlich kannst du auch in
              beiden Schulen trainieren.
            </p>
            <p>
              Für nähere Informationen kannst du uns gerne
              <nuxt-link to="kontakt">kontaktieren</nuxt-link>
            </p>
            <ContentLinks
              link-title="Unsere Preise"
              link="#preise"
              class="topMargin30"
              style="display: flex; align-items: center"
            />
            <br />
            <ContentLinks
              link-title="Unsere Trainingszeiten"
              link="#open"
              class="topMargin30"
              style="display: flex; align-items: center"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="zitat-box">
            <h3>
              "Die Erfahrung ist wie eine Laterne im Rücken; sie beleuchtet stets nur das
              Stück Weg, das wir bereits hinter uns haben."
            </h3>
            <p>Konfuzius</p>
          </div>
        </div>
      </div>
    </div>
    <section class="container-grau text-center">
      <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div id="preise" class="row">
            <h2>Unsere Preise</h2>

            <div class="col-xs-12 col-md-12">
              <div id="pricing-box">
                <section>
                  <h4>Schule (Schwanthalerhöhe) Ganghoferstraße 41</h4>
                  <p>
                    <small>Monatsbeitrag</small>
                  </p>
                  <span>55,00€</span>
                </section>
                <section>
                  <h4>Schule (Giesing) St-Martin-Straße</h4>
                  <p>
                    <small>Monatsbeitrag</small>
                  </p>
                  <span>35,00€</span>
                  <p>
                    <small>Monatsbeitrag Kinder</small>
                  </p>
                  <span>30,00€</span>
                </section>

                <section>
                  <h4>Beide Schulen</h4>
                  <p>
                    <small>Monatsbeitrag</small>
                  </p>
                  <span>60,00€</span>
                </section>
                <section>
                  <h4>10er Karte</h4>
                  <span>160,00€</span>
                </section>
              </div>

              <div class="col-md-12">
                <p>Ermäßigung für Jugendliche/ Kinder/ Studenten/ Azubis/ Rentner</p>
                <p class="text-center">
                  <nuxt-link to="kontakt" role="button" class="btn btn-secondary btn-lg"
                    >Unverbindlich anfrage</nuxt-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div id="open" class="text-center">
            <h2>Unsere Trainingszeiten</h2>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h4>
              Schule Ganghoferstraße 41 <br />
              (IG Feuerwache):
            </h4>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>Grund und Mittelstufe</th>
                    <th>Oberstufe und aufwärts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="yel">Montag</td>
                    <td>18.30 - 19.45 Uhr</td>
                    <td>19:45 - 21.00 Uhr</td>
                  </tr>
                  <tr>
                    <td class="yel">Mittwoch</td>
                    <td></td>
                    <td>entfällt zur Zeit</td>
                  </tr>
                  <tr>
                    <td class="yel">Donnerstag</td>
                    <td>18.30 - 19.45 Uhr</td>
                    <td>19:45 - 21.00 Uhr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h4>
              Schule St.-Martin-Straße 30 <br />
              (Grundschule in Giesing)
            </h4>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>Kinder/Jugendliche</th>
                    <th>Erwachsene</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="yel">Dienstag</td>
                    <td>17.30 - 18.30 Uhr</td>
                    <td>17.30 - 19.00 Uhr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <p>
              <span> Einzeltraining nach Absprache. </span> Vereinbare einfach einen
              Termin unter: <br />
              <span> Tel / 0177 6460429</span> oder <span> Tel / 01577 2035061</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div id="probe" class="probetraining">
      <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-8 pull-right">
          <div class="row">
            <h2>Dein kostenloses Probetraining</h2>
            <p>
              Erfahre mehr über Wing Tzun und lerne uns ein wenig kennen. Keine Angst, du
              musst keine Kampfsportmeister sein, um ein Probetraining zu machen. Jeder
              hat einmal angefangen.
            </p>
            <p>
              Für ein Probetraining ist keine spezielle Kleidung erforderlich. Am besten
              eignet sich eine schwarze Trainingshose und ein weißes T-Shirt.
            </p>
            <p>
              <nuxt-link to="kontakt" role="button" class="btn btn-secondary btn-lg"
                >Jetzt anmelden</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "WING TZUN - Preise und Öffnungszeiten",
    };
  },
};
</script>
