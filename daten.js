var suchgebiete = [

  // ============================
  // ALTES GROSSES POLYGON (UNVERÄNDERT)
  // ============================
  {
    name: "Großraum-Suchgebiet",
    typ: "polygon",
    farbe: "orange",
    beschreibung: "Ungefährer Bereich wie im Screenshot markiert.",
    punkte: [
      [52.55, 9.60],
      [52.45, 10.10],
      [52.40, 10.55],
      [52.20, 10.70],
      [51.95, 10.45],
      [51.90, 10.10],
      [52.10, 9.70]
    ]
  },

  // ============================
  // NEUE GEBIETE ALS PUNKTE (5 STÜCK)
  // ============================
  {
    name: "A36-Korridor Braunschweig–Bernburg",
    typ: "punkt",
    lat: 52.15,
    lng: 10.80,
    beschreibung: "Großes Suchgebiet entlang der A36, ca. 40–60 km Länge."
  },
  {
    name: "Bitterfeld–Bernburg–Helmstedt–Braunschweig",
    typ: "punkt",
    lat: 52.00,
    lng: 11.20,
    beschreibung: "Sehr großes Suchgebiet zwischen vier Städten, ca. 60×80 km."
  },
  {
    name: "Ilsenburg–Blankenburg–Quedlinburg",
    typ: "punkt",
    lat: 51.83,
    lng: 11.00,
    beschreibung: "Harzgebiet zwischen drei Orten, ca. 10–20 km Ausdehnung."
  },
  {
    name: "Okertalsperre–Seesen",
    typ: "punkt",
    lat: 51.90,
    lng: 10.55,
    beschreibung: "Gebiet zwischen Okertalsperre und Seesen, ca. 15–25 km."
  },
  {
    name: "Markoldendorf–Einbeck–Ilmetal",
    typ: "punkt",
    lat: 51.82,
    lng: 9.95,
    beschreibung: "Gebiet im Ilmetal, ca. 10–15 km Ausdehnung."
  },

  // ============================
  // REGION HANNOVER
  // ============================
  {
    name: "Koldinger Seen",
    typ: "kreis",
    lat: 52.263,
    lng: 9.819,
    radius: 800,
    beschreibung: "Zu Fuß in Kleingruppen abgesucht."
  },
  {
    name: "Sarstedter Seenplatte",
    typ: "kreis",
    lat: 52.238,
    lng: 9.857,
    radius: 900,
    beschreibung: "Seenplatte + angrenzende Waldstücke."
  },
  {
    name: "Giftener Seen",
    typ: "kreis",
    lat: 52.240,
    lng: 9.901,
    radius: 700,
    beschreibung: "Zu Fuß abgesucht."
  },
  {
    name: "Kleingartenanlage Mittelfeld",
    typ: "punkt",
    lat: 52.344,
    lng: 9.776,
    beschreibung: "Bunker und Umgebung abgesucht."
  },
  {
    name: "Bockmerholz",
    typ: "kreis",
    lat: 52.295,
    lng: 9.865,
    radius: 900,
    beschreibung: "Waldgebiet abgesucht."
  },
  {
    name: "Hämeler Wald",
    typ: "kreis",
    lat: 52.324,
    lng: 10.124,
    radius: 1200,
    beschreibung: "Zu Fuß abgesucht."
  },
  {
    name: "Himmelreich Lehrte",
    typ: "kreis",
    lat: 52.371,
    lng: 10.020,
    radius: 700,
    beschreibung: "Von Feuerwehrtruppe abgesucht."
  },
  {
    name: "Kananoher Forst",
    typ: "kreis",
    lat: 52.394,
    lng: 9.728,
    radius: 1500,
    beschreibung: "80 Personen, mehrere Tage."
  },
  {
    name: "Tongrube Resse",
    typ: "kreis",
    lat: 52.508,
    lng: 9.726,
    radius: 900,
    beschreibung: "Wald- und Wiesenstücke abgesucht."
  },

  // ============================
  // REGION BRAUNSCHWEIG / PEINE
  // ============================
  {
    name: "Fürstenauer Holz",
    typ: "kreis",
    lat: 52.246,
    lng: 10.311,
    radius: 1200,
    beschreibung: "50 Personen, großflächig abgesucht."
  },
  {
    name: "Flughafen Braunschweig",
    typ: "kreis",
    lat: 52.319,
    lng: 10.561,
    radius: 1500,
    beschreibung: "Bienrode – Waggum – Bevenrode."
  },
  {
    name: "Riddagshausen",
    typ: "kreis",
    lat: 52.273,
    lng: 10.574,
    radius: 900,
    beschreibung: "Wald- und Teichgebiete."
  },
  {
    name: "Schachtanlage Ohlendorf",
    typ: "kreis",
    lat: 52.086,
    lng: 10.389,
    radius: 700,
    beschreibung: "Wald- und Dickichtgebiet."
  },
  {
    name: "Oderwald",
    typ: "kreis",
    lat: 52.089,
    lng: 10.492,
    radius: 1500,
    beschreibung: "Mehrere Wege abgesucht."
  },
  {
    name: "Mittellandkanal Peine–Braunschweig",
    typ: "kreis",
    lat: 52.300,
    lng: 10.300,
    radius: 3000,
    beschreibung: "Zufahrten abgefahren, Magnet eingesetzt."
  },
  {
    name: "Fabrikgelände Winnigstedt",
    typ: "kreis",
    lat: 52.064,
    lng: 10.676,
    radius: 600,
    beschreibung: "Verwahrloste Gebäude, Gruben, Müll."
  },

  // ============================
  // REGION WOLFENBÜTTEL / HARZ
  // ============================
  {
    name: "Steterburg",
    typ: "kreis",
    lat: 52.143,
    lng: 10.531,
    radius: 700,
    beschreibung: "Waldgebiet und alte Wege."
  },
  {
    name: "Heidberg",
    typ: "kreis",
    lat: 52.235,
    lng: 10.512,
    radius: 600,
    beschreibung: "Zu Fuß abgesucht."
  },
  {
    name: "Lindenhalle Wolfenbüttel",
    typ: "punkt",
    lat: 52.162,
    lng: 10.540,
    beschreibung: "Treffpunkt der Suchtrupps."
  },
  {
    name: "Asse",
    typ: "kreis",
    lat: 52.150,
    lng: 10.650,
    radius: 2000,
    beschreibung: "Mehrere Wege und Schneisen abgesucht."
  },
  {
    name: "Elm",
    typ: "kreis",
    lat: 52.200,
    lng: 10.800,
    radius: 2500,
    beschreibung: "Großes Waldgebiet, mehrere Suchaktionen."
  },

  // ============================
  // REGION HILDESHEIM
  // ============================
  {
    name: "Hohnsensee",
    typ: "kreis",
    lat: 52.145,
    lng: 9.957,
    radius: 500,
    beschreibung: "Uferbereiche abgesucht."
  },
  {
    name: "Galgenberg",
    typ: "kreis",
    lat: 52.147,
    lng: 9.951,
    radius: 700,
    beschreibung: "Waldgebiet abgesucht."
  },
  {
    name: "Steinberg",
    typ: "kreis",
    lat: 52.168,
    lng: 9.930,
    radius: 900,
    beschreibung: "Mehrere Wege und Schneisen."
  },
  {
    name: "Itzumer Wald",
    typ: "kreis",
    lat: 52.122,
    lng: 9.950,
    radius: 1200,
    beschreibung: "Zu Fuß abgesucht."
  },
  {
    name: "Marienburger Höhe",
    typ: "kreis",
    lat: 52.137,
    lng: 9.951,
    radius: 600,
    beschreibung: "Wald- und Parkbereiche."
  },

  // ============================
  // REGION SALZGITTER
  // ============================
  {
    name: "Salzgittersee",
    typ: "kreis",
    lat: 52.142,
    lng: 10.333,
    radius: 1200,
    beschreibung: "Uferbereiche und Inseln abgesucht."
  },
  {
    name: "Reppnersche Bucht",
    typ: "kreis",
    lat: 52.129,
    lng: 10.309,
    radius: 700,
    beschreibung: "Zu Fuß abgesucht."
  },
  {
    name: "Lichtenberg",
    typ: "kreis",
    lat: 52.109,
    lng: 10.304,
    radius: 900,
    beschreibung: "Waldgebiet abgesucht."
  },
  {
    name: "Fredenberg",
    typ: "kreis",
    lat: 52.147,
    lng: 10.330,
    radius: 800,
    beschreibung: "Wohn- und Waldnähe."
  },

  // ============================
  // REGION GOSLAR
  // ============================
  {
    name: "Okertalsperre",
    typ: "kreis",
    lat: 51.875,
    lng: 10.429,
    radius: 2500,
    beschreibung: "Uferbereiche, Parkplätze, Zugänge."
  },
  {
    name: "Harz – Torfhaus",
    typ: "kreis",
    lat: 51.806,
    lng: 10.509,
    radius: 2000,
    beschreibung: "Wald- und Moorbereiche."
  },
  {
    name: "Bad Harzburg – Kurpark",
    typ: "kreis",
    lat: 51.889,
    lng: 10.562,
    radius: 700,
    beschreibung: "Park und angrenzende Waldstücke."
  },

  // ============================
  // REGION PEINE / UMMELN
  // ============================
  {
    name: "Ummelner Holz",
    typ: "kreis",
    lat: 52.285,
    lng: 10.225,
    radius: 900,
    beschreibung: "Waldgebiet abgesucht."
  },
  {
    name: "Vöhrum – Feldmark",
    typ: "kreis",
    lat: 52.301,
    lng: 10.217,
    radius: 700,
    beschreibung: "Feldwege und Knicks."
  },
  {
    name: "Peiner See",
    typ: "kreis",
    lat: 52.316,
    lng: 10.240,
    radius: 600,
    beschreibung: "Uferbereiche abgesucht."
  },

  // ============================
  // REGION SACHSEN-ANHALT
  // ============================
  {
    name: "Bitterfeld",
    typ: "kreis",
    lat: 51.623,
    lng: 12.323,
    radius: 1500,
    beschreibung: "Innenstadt und angrenzende Bereiche."
  },
  {
    name: "Goitzsche",
    typ: "kreis",
    lat: 51.645,
    lng: 12.310,
    radius: 2500,
    beschreibung: "Uferbereiche, Wege, Zugänge."
  },
  {
    name: "Greppin",
    typ: "kreis",
    lat: 51.630,
    lng: 12.268,
    radius: 900,
    beschreibung: "Wohn- und Waldnähe."
  },
  {
    name: "Sandersdorf",
    typ: "kreis",
    lat: 51.613,
    lng: 12.289,
    radius: 1200,
    beschreibung: "Wald- und Gewerbegebiete."
  },
  {
    name: "Fuhneaue",
    typ: "kreis",
    lat: 51.610,
    lng: 12.350,
    radius: 1500,
    beschreibung: "Auenlandschaft, Wege, Brücken."
  },
  {
    name: "Zörbig",
    typ: "kreis",
    lat: 51.626,
    lng: 12.118,
    radius: 1500,
    beschreibung: "Wald- und Feldbereiche."
  },
  {
    name: "Pouch / Muldestausee",
    typ: "kreis",
    lat: 51.645,
    lng: 12.420,
    radius: 2500,
    beschreibung: "Nordufer, Wege, Parkplätze."
  },

  // ============================
  // EINZELNE PUNKTE
  // ============================
  {
    name: "Fundort Handy",
    typ: "punkt",
    lat: 52.300,
    lng: 10.200,
    beschreibung: "Letzter bekannter Standort."
  },
  {
    name: "Wohnort Karsten",
    typ: "punkt",
    lat: 52.150,
    lng: 10.000,
    beschreibung: "Startpunkt der Ermittlungen."
  }

];
