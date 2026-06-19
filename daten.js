var suchgebiete = [

  // ============================
  // GROSSER POLYGON-BEREICH
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
  // NEUE GEBIETE AUS DER DETAILLISTE
  // ============================

  {
    name: "Kleingärten Hannover, Sarstedt und Umgebung",
    typ: "kreis",
    lat: 52.30,
    lng: 9.85,
    radius: 8000,
    beschreibung: "Alle Kleingärten Hannover, Sarstedt und Umgebung – Vereinsvorsitzende kontaktiert, teils zu zweit abgegangen."
  },
  {
    name: "Waldgebiete Othfresen–Liebenburg–Döhren",
    typ: "kreis",
    lat: 52.00,
    lng: 10.43,
    radius: 3000,
    beschreibung: "Waldgebiete um Othfresen, Liebenburg, Döhren (Tatort) in Kleingruppen zu Fuß abgesucht."
  },
  {
    name: "Grube Fortuna Döhren",
    typ: "kreis",
    lat: 52.00,
    lng: 10.46,
    radius: 1200,
    beschreibung: "Gebiet um die Grube Fortuna (Döhren)."
  },
  {
    name: "B6 Othfresen–Hildesheim",
    typ: "kreis",
    lat: 52.05,
    lng: 10.20,
    radius: 6000,
    beschreibung: "Kleinere Wald- und Dickichtgebiete an der B6 zwischen Othfresen und Hildesheim – mit Auto abgefahren, teils zu Fuß."
  },
  {
    name: "Ortschaften um Hildesheim",
    typ: "kreis",
    lat: 52.12,
    lng: 10.00,
    radius: 12000,
    beschreibung: "Harsum, Borsum, Förste, Giesen, Sarstedt, Bockenem, Holle, Sehlde – nach Gefühl und Auffälligkeiten Dickichtgebiete abgesucht."
  },
  {
    name: "Markoldendorf–Einbeck–Ilmegebiet",
    typ: "kreis",
    lat: 51.80,
    lng: 9.90,
    radius: 4000,
    beschreibung: "Zwischen Markoldendorf und Einbeck (Gebiet zwischen L580 und Ilme) – über Monate gegraben, Suchhundestaffel, Hullersen, Kohnsen, Juliusmühle."
  },
  {
    name: "Bodenwerder und Umgebung",
    typ: "kreis",
    lat: 51.97,
    lng: 9.52,
    radius: 3000,
    beschreibung: "Bodenwerder – Waldwege und abgelegene Stellen, Campingplätze, Waldstück mit Drohne überflogen."
  },
  {
    name: "Stieglitzecke / Magdeburger Hütte",
    typ: "kreis",
    lat: 51.86,
    lng: 10.41,
    radius: 2000,
    beschreibung: "Stieglitzecke im Harz (Magdeburger Hütte) – angrenzende Waldstücke zu Fuß zu dritt abgesucht."
  },
  {
    name: "Route Okertalsperre–Seesen",
    typ: "kreis",
    lat: 51.90,
    lng: 10.35,
    radius: 15000,
    beschreibung: "Route von der Okertalsperre über Altenau, Clausthal-Zellerfeld, Bad Grund, Lautenthal bis Seesen – nach auffälligen Bereichen geschaut."
  },
  {
    name: "Campingplatz Prahljust / Teichkette",
    typ: "kreis",
    lat: 51.80,
    lng: 10.35,
    radius: 3000,
    beschreibung: "Campingplatz Prahljust – Gebiete am Pixhaier Teich, Sumpfteich bis Bärenbrucher Teich in Kleingruppe abgesucht."
  },
  {
    name: "Stieglitzecke–Clausthal an der B242",
    typ: "kreis",
    lat: 51.84,
    lng: 10.42,
    radius: 4000,
    beschreibung: "Wege von der Stieglitzecke bis Clausthal an der 242 angefahren, teils zu Fuß abgegangen."
  },
  {
    name: "Ostharingen–Harhof–Ostlutter–Steinbruch",
    typ: "kreis",
    lat: 52.00,
    lng: 10.30,
    radius: 4000,
    beschreibung: "Waldstücke Ostharingen – Harhof – Ostlutter – Steinbruch Ostlutter, inkl. Bunker, zu Fuß zu zweit abgegangen."
  },
  {
    name: "Waldgebiete Gebhardshagen",
    typ: "kreis",
    lat: 52.10,
    lng: 10.30,
    radius: 2500,
    beschreibung: "Angrenzende Waldgebiete an Gebhardshagen."
  },
  {
    name: "Verlassene Tankstelle Haverlah–Salzgitter",
    typ: "kreis",
    lat: 52.05,
    lng: 10.30,
    radius: 800,
    beschreibung: "Verlassene Tankstelle mit Bauzäunen zwischen Haverlah und Salzgitter."
  },
  {
    name: "Angelteiche Probsteiburg",
    typ: "kreis",
    lat: 51.93,
    lng: 10.28,
    radius: 2000,
    beschreibung: "Wege an den Angelteichen Probsteiburg – mit Hund abgegangen, nach Auffälligkeiten geschaut."
  },
  {
    name: "Wege im Okertal",
    typ: "kreis",
    lat: 51.90,
    lng: 10.33,
    radius: 2500,
    beschreibung: "Wege im Okertal – mit Hund abgegangen, nach Auffälligkeiten geschaut."
  },
  {
    name: "Mittellandkanal und Stichkanal – Zufahrten",
    typ: "kreis",
    lat: 52.32,
    lng: 10.30,
    radius: 4000,
    beschreibung: "Wege/Zufahrten am Mittellandkanal und am Stichkanal abgefahren."
  },
  {
    name: "Sachsen-Anhalt Tour Ilsenburg–Heynburg",
    typ: "kreis",
    lat: 51.85,
    lng: 11.10,
    radius: 30000,
    beschreibung: "Touren über Ilsenburg, Blankenburg, Quedlinburg, Halberstadt, Oschersleben, Aschersleben, Westerhausen, Heynburg – nach verlassenen Gebäuden, verwahrlosten Gärten, Schuppen gesucht."
  },
  {
    name: "Route Baumarkt Bitterfeld–Bernburg–Helmstedt–Braunschweig",
    typ: "kreis",
    lat: 52.00,
    lng: 11.00,
    radius: 40000,
    beschreibung: "Tour vom Baumarkt Bitterfeld über Bernburg und Helmstedt nach Braunschweig – Ausschau nach geeigneten Ablageorten."
  },
  {
    name: "A36 Braunschweig–Bitterfeld Korridor",
    typ: "kreis",
    lat: 52.00,
    lng: 10.80,
    radius: 50000,
    beschreibung: "Alle Ortschaften und Bereiche an der A36 zwischen Braunschweig und Bitterfeld – jedes mögliche Gelände in Augenschein genommen."
  },
  {
    name: "Innerstetalsperre",
    typ: "kreis",
    lat: 51.90,
    lng: 10.25,
    radius: 2500,
    beschreibung: "Bereiche um die Innerstetalsperre."
  },
  {
    name: "Okertalsperre – zusätzliche Bereiche",
    typ: "kreis",
    lat: 51.88,
    lng: 10.43,
    radius: 3000,
    beschreibung: "Weitere Bereiche um die Okertalsperre."
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
