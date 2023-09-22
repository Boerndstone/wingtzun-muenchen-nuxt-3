<template>
  <div>
    <div class="hero">
      <div class="container">
        <div class="col-xs-12 col-sm-10 col-md-7">
          <div class="hero-heading">
            <h1 class="animated fadeInUp delay-05s">Wing Tzun Selbstverteidigung</h1>
            <p class="animated fadeInDown headline">ERKENNE DEINE FÄHIGKEITEN</p>
            <ContentLinks link-title="Mehr über Wing Tzun" link="wingtzun" />
          </div>
        </div>
      </div>
    </div>
    <section class="container">
      <div class="container container-fluid">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h2>FIT DURCH WING TZUN</h2>
            <p>
              Wing Tzun ist eine ca. 300 Jahre alte chinesische Kampfkunst, die von einer
              Nonne namens Ng Mui entwickelt wurde.
            </p>
            <p>
              Es ist eine reine Selbstverteitigung die versucht, auf direktem Weg den
              Angreifer außer Gefecht zu setzen. Körperliche Kraft spielt dabei keine
              große Rolle.
            </p>
            <p>
              Neben der Kampfkunst wirst du auch deine Ausdauer, Fitness, Koordination und
              Beweglichkeit trainieren.
            </p>
            <ContentLinks
              link-title="Weitere Informationen zu Wing Tzun"
              link="wingtzun"
            />
          </div>
          <div class="col-xs-12 col-md-6 hidden-sm hidden-xs">
            <div>
              <img
                src="~/assets/images/wt-prinzipien.jpg"
                alt="Wing Tsun Prinzipien"
                width="357"
                height="420"
                class="pull-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-grau">
      <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="row">
            <h2>Dein Probetraining</h2>
            <p style="margin-top: 2rem">
              Wenn du wissen möchtest, ob Wing Tzun das Richtige für dich ist, bieten wir
              dir ein
              <b>kostenloses Probetraining</b> an. Hier nehmen wir uns Zeit für dich und
              erklären dir alles, was du wissen musst.
            </p>
            <p>
              <ContentLinks
                link-title="Kostenloses Probetraining vereinbaren"
                link-title-attribute="Mehr über Wing Tzun erfahren"
                link="kontakt"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center">
      <div class="container">
        <div class="img-gal col-xs-12 col-sm-3 col-md-3">
          <img
            src="~/assets/images/2020/startseite/wt-kindertraining-sm.jpg"
            alt="Kinder ab 6 Jahren können bei uns Wing Tzun trainieren"
          />
          <img
            src="~/assets/images/2020/startseite/wt-sparring-sm.jpg"
            alt="Effektive Selbstverteidigung mit Wing Tzun"
          />
        </div>
        <div class="img-gal col-xs-12 col-sm-6 col-md-6">
          <img
            src="~/assets/images/2020/startseite/sifu-kostas-sparring-sm.jpg"
            alt="Sifu Kostas beim Wing Tsun Training"
          />
        </div>
        <div class="img-gal col-xs-12 col-sm-3 col-md-3">
          <img
            src="~/assets/images/2020/startseite/wt-frauen-sm.jpg"
            alt="Für Frauen ist Wing Tsun sehr gut geeignet, da wir die Kraft des Gegners nutzen"
          />
          <img
            src="~/assets/images/2020/startseite/wt-gruppentraining-sm.jpg"
            alt="Gruppentraining bei Wing Tzun München"
          />
        </div>
      </div>
    </section>
    <section class="container-grau">
      <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div style="text-align: center; width: 80%; margin: 0 auto">
            <h2>SIFU Kostas</h2>
            <p>
              ist der Leiter der Wing-Tzun Fachschule für Selbstverteidigung in München
              und betreibt seit 20 Jahren Wing Tsun. Er besitzt den 5. Meistergrad im WTFB
              Fachschulenbund.
            </p>
            <img
              src="~/assets/images/2020/startseite/sifu-kostas.jpg"
              alt="Sifu Kostas"
              style="margin-top: 2rem"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="zitat-box">
              <h3>
                „Es ist mir wichtig, mich persönlich um meine Schüler zu kümmern. Es
                erfüllt mich mit Stolz und Freude, wenn ich die Fortschritte und
                Begeisterung meiner Schüler sehe.“
              </h3>
              <p>SIFU KOSTAS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ContentLinks from "~/components/ContentLinks.vue";
export default {
  components: {
    ContentLinks,
  },
  head() {
    return {
      title:
        "WING TZUN - Wing Tsun München - Kampfkunst und Selbstverteidigung in München",
    };
  },
};
</script>
