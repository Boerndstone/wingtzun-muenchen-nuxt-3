// plugins/cookieconsent.client.ts
import { Plugin } from '@nuxt/types'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import 'vanilla-cookieconsent/src/cookieconsent.js'

var logo = '<svg style="width: 110px; height: 30px; display: block;" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 337.6 72"><path fill="#737373" d="M140.4 14.4v43.2h-7.5V23.7h-.1l-13.4 33.9h-5l-13.7-33.9h-.1v33.9h-6.9V14.4h10.8l12.4 32h.2l13.1-32h10.2zm6.2 3.3c0-1.2.4-2.2 1.3-3 .9-.8 1.9-1.2 3.1-1.2 1.3 0 2.4.4 3.2 1.2s1.3 1.8 1.3 3-.4 2.2-1.3 3c-.9.8-1.9 1.2-3.2 1.2s-2.3-.4-3.1-1.2c-.8-.9-1.3-1.9-1.3-3zm8.1 8.9v31h-7.3v-31h7.3zm22.1 25.7c1.1 0 2.3-.2 3.6-.8 1.3-.5 2.5-1.2 3.6-2v6.8c-1.2.7-2.5 1.2-4 1.5-1.5.3-3.1.5-4.9.5-4.6 0-8.3-1.4-11.1-4.3-2.9-2.9-4.3-6.6-4.3-11 0-5 1.5-9.1 4.4-12.3 2.9-3.2 7-4.8 12.4-4.8 1.4 0 2.8.2 4.1.5 1.4.3 2.5.8 3.3 1.2v7c-1.1-.8-2.3-1.5-3.4-1.9-1.2-.4-2.4-.7-3.6-.7-2.9 0-5.2.9-7 2.8s-2.6 4.4-2.6 7.6c0 3.1.9 5.6 2.6 7.3 1.7 1.7 4 2.6 6.9 2.6zm27.9-26.2a8.08 8.08 0 0 1 2.8.4v7.4c-.4-.3-.9-.6-1.7-.8s-1.6-.4-2.7-.4c-1.8 0-3.3.8-4.5 2.3s-1.9 3.8-1.9 7v15.6h-7.3v-31h7.3v4.9h.1c.7-1.7 1.7-3 3-4 1.4-.9 3-1.4 4.9-1.4zm3.2 16.5c0-5.1 1.5-9.2 4.3-12.2 2.9-3 6.9-4.5 12-4.5 4.8 0 8.6 1.4 11.3 4.3s4.1 6.8 4.1 11.7c0 5-1.5 9-4.3 12-2.9 3-6.8 4.5-11.8 4.5-4.8 0-8.6-1.4-11.4-4.2-2.8-2.9-4.2-6.8-4.2-11.6zm7.6-.3c0 3.2.7 5.7 2.2 7.4s3.6 2.6 6.3 2.6c2.6 0 4.7-.8 6.1-2.6 1.4-1.7 2.1-4.2 2.1-7.6 0-3.3-.7-5.8-2.1-7.6-1.4-1.7-3.5-2.6-6-2.6-2.7 0-4.7.9-6.2 2.7-1.7 1.9-2.4 4.4-2.4 7.7zm35-7.5c0 1 .3 1.9 1 2.5.7.6 2.1 1.3 4.4 2.2 2.9 1.2 5 2.5 6.1 3.9a8.1 8.1 0 0 1 1.8 5.3c0 2.9-1.1 5.2-3.4 7-2.2 1.8-5.3 2.6-9.1 2.6-1.3 0-2.7-.2-4.3-.5-1.6-.3-2.9-.7-4-1.2v-7.2c1.3.9 2.8 1.7 4.3 2.2 1.5.5 2.9.8 4.2.8 1.6 0 2.9-.2 3.6-.7.8-.5 1.2-1.2 1.2-2.3 0-1-.4-1.8-1.2-2.6-.8-.7-2.4-1.5-4.6-2.4-2.7-1.1-4.6-2.4-5.7-3.8s-1.7-3.2-1.7-5.4c0-2.8 1.1-5.1 3.3-6.9 2.2-1.8 5.1-2.7 8.6-2.7 1.1 0 2.3.1 3.6.4s2.5.6 3.4.9V34c-1-.6-2.1-1.2-3.4-1.7-1.3-.5-2.6-.7-3.8-.7-1.4 0-2.5.3-3.2.8-.7.7-1.1 1.4-1.1 2.4zm16.4 7.8c0-5.1 1.5-9.2 4.3-12.2 2.9-3 6.9-4.5 12-4.5 4.8 0 8.6 1.4 11.3 4.3s4.1 6.8 4.1 11.7c0 5-1.5 9-4.3 12-2.9 3-6.8 4.5-11.8 4.5-4.8 0-8.6-1.4-11.4-4.2-2.7-2.9-4.2-6.8-4.2-11.6zm7.6-.3c0 3.2.7 5.7 2.2 7.4s3.6 2.6 6.3 2.6c2.6 0 4.7-.8 6.1-2.6 1.4-1.7 2.1-4.2 2.1-7.6 0-3.3-.7-5.8-2.1-7.6-1.4-1.7-3.5-2.6-6-2.6-2.7 0-4.7.9-6.2 2.7-1.6 1.9-2.4 4.4-2.4 7.7zm48.4-9.7H312v25h-7.4v-25h-5.2v-6h5.2v-4.3c0-3.2 1.1-5.9 3.2-8s4.8-3.1 8.1-3.1c.9 0 1.7.1 2.4.1s1.3.2 1.8.4V18c-.2-.1-.7-.3-1.3-.5-.6-.2-1.3-.3-2.1-.3-1.5 0-2.7.5-3.5 1.4-.8.9-1.2 2.4-1.2 4.2v3.7h10.9v-7l7.3-2.2v9.2h7.4v6h-7.4V47c0 1.9.4 3.2 1 4 .7.8 1.8 1.2 3.3 1.2.4 0 .9-.1 1.5-.3.6-.2 1.1-.4 1.5-.7v6c-.5.3-1.2.5-2.3.7-1.1.2-2.1.3-3.2.3-3.1 0-5.4-.8-6.9-2.4-1.5-1.6-2.3-4.1-2.3-7.4l.1-15.8z"/><path fill="#f25022" d="M0 0h34.2v34.2H0z"/><path fill="#7fba00" d="M37.8 0H72v34.2H37.8z"/><path fill="#00a4ef" d="M0 37.8h34.2V72H0z"/><path fill="#ffb900" d="M37.8 37.8H72V72H37.8z"/></svg>';

var cookie = '🍪';

const cookieConsentPlugin: Plugin = () => {
  // @ts-ignore
  const cookieConsent = window.initCookieConsent()
  cookieConsent.run({
    current_lang : 'de',
    autoclear_cookies : true,                   // default: false
    cookie_name: 'cc_cookie_demo1',             // default: 'cc_cookie'
    cookie_expiration : 365,                    // default: 182
    page_scripts: true,                         // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // force_consent: false,
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'box',                      // box,cloud,bar
            position: 'bottom right',           // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'box',                      // box,bar
            // position: 'left',                // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired ...');
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired ...');
    },

   languages: {
        en: {
          consent_modal: {
            title: "Datenschutz-Einstellungen",
            description:
              'Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von Dir, um z.B. Inhalte und Anzeigen zu personalisieren, Medien von Drittanbietern einzubinden oder Zugriffe auf unsere Website zu analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Datenschutz-Einstellungen benennen. <br /><br /><button type="button" data-cc="c-settings" class="cc-link">Einstellungen individuell festlegen</button><br /><br /><span style="text-align: center; font-size: 12px;">Du bist unter 16 Jahre alt? Dann kannst du nicht in optionale Services einwilligen. Du kannst deine Eltern oder Erziehungsberechtigten bitten, mit dir in diese Services einzuwilligen.Wenn du alle Services akzeptierst, erlaubst du, dass Google Maps geladen wird. Diese sind nach ihrem Zweck in Gruppen Funktional1 und Statistik unterteilt (Zugehörigkeit durch hochgestellte Zahlen gekennzeichnet).</span>',
            primary_btn: {
              text: "Alle akzeptieren",
              role: "accept_all", // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: "Weiter ohne Einwilligung",
              role: "accept_necessary", // 'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: "Cookie Einstellungen",
            save_settings_btn: "Einstellungen speichern",
            accept_all_btn: "Alle akzeptieren",
            reject_all_btn: "Weiter ohne Einwilligung",
            close_btn_label: "Close",
            cookie_table_headers: [
              { col1: "Name" },
              { col2: "Domain" },
              { col3: "Expiration" },
              { col4: "Description" },
            ],
            blocks: [
              {
                //title: "Cookie usage 📢",
                description:
                  'Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von Dir (z.B. IP-Adresse), um z.B. Inhalte und Anzeigen zu personalisieren, Medien von Drittanbietern einzubinden oder Zugriffe auf unsere Website zu analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Datenschutz-Einstellungen benennen. <br /><br />Die Datenverarbeitung kann mit Deiner Einwilligung oder auf Basis eines berechtigten Interesses erfolgen, dem Du in den Datenschutz-Einstellungen widersprechen kannst. Du hast das Recht, nicht einzuwilligen und Deine Einwilligung zu einem späteren Zeitpunkt zu ändern oder zu widerrufen. Weitere Informationen zur Verwendung Deiner Daten findest Du in unserer <a href="#" class="cc-link">Datenschutz</a>.<br /><br />Im Folgenden findest Du eine Übersicht über alle Services, die von dieser Website genutzt werden. Du kannst Dir detaillierte Informationen zu jedem Service ansehen und ihm einzeln zustimmen oder von Deinem Widerspruchsrecht Gebrauch machen.<br /><br />Du bist unter 16 Jahre alt? Dann kannst du nicht in optionale Services einwilligen. Du kannst deine Eltern oder Erziehungsberechtigten bitten, mit dir in diese Services einzuwilligen.<br /><br />Wenn du alle Services akzeptierst, erlaubst du, dass Google Maps geladen werden. Diese sind nach ihrem Zweck in Gruppen Funktional1 und Statistik2 unterteilt (Zugehörigkeit durch hochgestellte Zahlen gekennzeichnet).',
              },
              {
                title: "Essentielle Cookies",
                description:
                  "Essenzielle Services sind für die grundlegende Funktionalität der Website erforderlich. Sie enthalten nur technisch notwendige Services. Diesen Services kann nicht widersprochen werden.",
                toggle: {
                  value: "necessary",
                  enabled: true,
                  readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                },
              },
              {
                title: "Funktional",
                description:
                  "Funktionale Services sind notwendig, um über die wesentliche Funktionalität der Website hinausgehende Features wie hübschere Schriftarten, Videowiedergabe oder interaktive Web 2.0-Features bereitzustellen. Inhalte von z.B. Video- und Social Media-Plattformen sind standardmäßig gesperrt und können zugestimmt werden. Wenn dem Service zugestimmt wird, werden diese Inhalte automatisch ohne weitere manuelle Einwilligung geladen.",
                toggle: {
                  value: "analytics", // your cookie category
                  enabled: false,
                  readonly: false,
                },
                cookie_table: [
                  // list of all expected cookies
                  {
                    col1: "^_ga", // match all cookies starting with "_ga"
                    col2: "Google Maps",
                    col3: "2 years",
                    col4: "Zweck: Kartenmaterial, Navigation, Routenbeschreibung Verwendung auf gesetzlicher rundlage von: Einwilligung Anbieter: Google Ireland Limited Datenschutzerklärung: https://policies.google.com/privacy Technische Cookie-Definition: _gam Typ: HTTP Cookie Zweck: Registriert eine eindeutige ID, die verwendet wird, um statistische Daten dazu, wie der Besucher die Webseite nutzt, zu generieren. Host: .wt-muenchen.de Dauer: 1 Jahr(e)",
                    is_regex: true,
                  },
                ],
              },
              {
                title: "Statistik",
                description:
                  "Statistik-Services werden benötigt, um pseudonymisierte Daten über die Besucher der Website zu sammeln. Die Daten ermöglichen es uns, die Besucher besser zu verstehen und die Website zu optimieren.",
                toggle: {
                  value: "targeting",
                  enabled: false,
                  readonly: false,
                },
              },
            ],
          },
        },
      },
    
  })
}

export default cookieConsentPlugin