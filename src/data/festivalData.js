export const festivalData = {
  program: [
    {
      id: 1,
      title: 'Åpning og velkommen',
      time: '09:00',
      room: 'Auditoriet',
      speaker: 'Festivalgruppen og 2INF-lærere',
      description:
        'Kort introduksjon til dagen, praktisk informasjon og presentasjon av festivalområdet.',
    },
    {
      id: 2,
      title: 'Bedriftspresentasjoner',
      time: '10:15',
      room: 'Rom 204',
      speaker: 'Lokale IT-bedrifter',
      description:
        'Bedrifter forteller om webutvikling, nettverk, sikkerhet og hvordan en arbeidsdag i IT kan se ut.',
    },
    {
      id: 3,
      title: 'Elevprosjekter og stands',
      time: '12:30',
      room: 'Kantina',
      speaker: '2INF-elever',
      description:
        'Elevene viser fram nettsider, programmer, designskisser og andre prosjekter fra skoleåret.',
    },
  ],
  companies: [
    {
      id: 1,
      name: 'Kodehuset AS',
      type: 'Bedrift',
      organization: 'Programvareutvikling',
      focus: 'React, API-er og moderne webapper',
    },
    {
      id: 2,
      name: 'Nettverk Norge',
      type: 'Bedrift',
      organization: 'Nettverk og drift',
      focus: 'Servere, sikkerhet og stabil infrastruktur',
    },
    {
      id: 3,
      name: 'DesignLab',
      type: 'Bedrift',
      organization: 'UX og webdesign',
      focus: 'Brukervennlige løsninger og visuell identitet',
    },
  ],
  teachers: [
    {
      id: 1,
      name: 'Anne Hansen',
      type: 'Lærer',
      organization: 'Informasjonsteknologi',
    },
    {
      id: 2,
      name: 'Jonas Berg',
      type: 'Lærer',
      organization: 'Programmering',
    },
  ],
  students: [
    {
      id: 1,
      name: 'Sara Ali',
      type: 'Elev',
      organization: '2INF',
    },
    {
      id: 2,
      name: 'Marius Olsen',
      type: 'Elev',
      organization: '2INF',
    },
    {
      id: 3,
      name: 'Nora Nguyen',
      type: 'Elev',
      organization: '2INF',
    },
  ],
  practicalInfo: {
    wifi: 'Bruk nettverket Skole-Gjest. Passord fås i resepsjonen ved inngangen.',
    parking:
      'Besøkende kan parkere ved hovedinngangen og ved gymsalen. Følg skiltene på området.',
    contact:
      'Spørsmål kan sendes til festival@skole.no, eller tas direkte med festivalvertene i resepsjonen.',
    safety:
      'Hold gangveier frie, rydd etter deg, følg skilting og si fra til en lærer hvis noe skjer.',
  },
}
