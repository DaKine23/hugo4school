# hugo4school

`hugo4school` ist ein Projekt für eine moderne, schnelle und pflegeleichte Website einer Grundschule. Die Seite soll mit [Hugo](https://gohugo.io/) als statischer Website-Generator aufgebaut werden. Inhalte wie Nachrichten, Termine, Seiteninformationen oder Elternbriefe werden als Markdown-Dateien gepflegt, waehrend Layout, Farben, Navigation und Komponenten ueber ein angepasstes Hugo-Theme gesteuert werden.

## Projektidee

Ziel ist eine Schulwebsite, die fuer Eltern, Kinder, Lehrkraefte und die Schulleitung einfach nutzbar ist. Die Inhalte sollen ohne komplexes CMS aktualisiert werden koennen: Neue oder geaenderte Markdown-Dateien werden ins Git-Repository eingecheckt, danach baut und veroeffentlicht GitHub Actions die Website automatisch neu.

Am Ende soll das Projekt als GitHub-Repository vorliegen und auf Firebase Hosting ausgeliefert werden. Jede relevante Aenderung an den Markdown-Inhalten oder am Theme soll ueber eine CI/CD-Pipeline automatisch deployed werden.

## Geplanter Tech-Stack

- Hugo fuer die statische Website
- Markdown fuer redaktionelle Inhalte
- Ein angepasstes Hugo-Theme fuer das Grundschul-Design
- Git und GitHub fuer Versionsverwaltung und Zusammenarbeit
- GitHub Actions fuer automatisierte Builds und Deployments
- Firebase Hosting fuer die Auslieferung der fertigen Website

## Ziele der Website

- Schnelle Ladezeiten durch statische Auslieferung
- Einfache Pflege von Inhalten ueber Markdown
- Klare Struktur fuer Schulinfos, Termine, Aktuelles und Kontakt
- Freundliches, barrierearmes Design fuer eine Grundschule
- Responsives Layout fuer Smartphone, Tablet und Desktop
- Automatisches Deployment nach Aenderungen im Repository

## Geplante Inhaltsbereiche

- Startseite mit aktuellen Hinweisen
- Aktuelles oder News
- Termine und Veranstaltungen
- Informationen zur Schule
- Kollegium und Schulleitung
- Klassen oder Jahrgangsstufen
- Betreuung, Ganztag oder AG-Angebote
- Elterninformationen
- Kontakt und Anfahrt
- Impressum und Datenschutz

## Deployment-Idee

Der geplante Workflow sieht so aus:

1. Inhalte oder Theme-Dateien werden im Repository geaendert.
2. Die Aenderungen werden nach GitHub gepusht.
3. GitHub Actions erkennt relevante Aenderungen, insbesondere an Markdown-Dateien.
4. Hugo baut daraus die statische Website.
5. Die generierten Dateien werden zu Firebase Hosting deployed.
6. Die Schulwebsite ist automatisch mit den neuen Inhalten online.

## Naechste Schritte

- Hugo-Projektstruktur initialisieren
- Passendes Hugo-Theme auswaehlen oder ein eigenes Theme anlegen
- Design an Grundschul-Kontext anpassen
- Erste Inhaltsseiten als Markdown erstellen
- GitHub-Repository vorbereiten
- GitHub Actions Workflow fuer Hugo und GitHub Pages erstellen
- Deployment testen

## GitHub Pages Test-Deployment

Fuer eine erste Testversion wird die Website ueber GitHub Pages bereitgestellt. Der Workflow liegt unter `.github/workflows/github-pages.yml`.

Nach jedem Push auf `main` baut GitHub Actions die Hugo-Seite und veroeffentlicht den Inhalt aus `public/` automatisch als GitHub Page.

Im GitHub-Repository muss unter `Settings -> Pages` als Quelle `GitHub Actions` aktiviert sein.

Die Test-URL lautet voraussichtlich:

`https://dakine23.github.io/hugo4school/`

## Langfristige Idee

Das Repository soll als wiederverwendbare Grundlage fuer Grundschul-Websites dienen. Schulen koennen Inhalte, Farben, Logo und Navigation anpassen, ohne die technische Basis jedes Mal neu entwickeln zu muessen.
