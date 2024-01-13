// Exporter la carte GMM → KML, une couche à la fois
// Pour la conversion KML → GEOJSON : https://anyconv.com/kml-to-geojson-converter/
// Créer const tableaux non_officiels, officiels, proprios et autres.
// Dans chaque tableau, coller le GeoJSON, plus particulièrement remplacer le tableau vide par le tableau à l'intérieur de features.
// Si on recommence de zéro, supprimer les collections dans la BD. Attention, supprimer toutes les collections supprime la BD aussi!
// Aller dans terminal, cd server, et faire node BatchImport.js

const non_officiels = [
    {
        "geometry": {
            "coordinates": [
                -74.6712716,
                45.938938
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/s2kf8d9gnq5tlgjm7i2mivt16s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisAWs7wxqTynJMcYGXs4c-M1KaK5ReJAgdZcwicnzNyFfrt6zpaI4Y2ZI5MWJ73PBpoNTz-YgyriplLlPMg6R-4ZqBHl9pdrpajNq-58hzjdlUXL3san9vYxDJOEeIS495j6M2v5GvqtWnQGX-9GWGevZ8VNcYaQ6A7EpsnaChcNTrMk7moxDvUUivRw6r7svoQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Accès par un petit sentier près du pont du Corridor Aérobique. Techniquement privé mais sur la carte-guide pour les canoteurs en tant que site de groupe. La plage est immense.<br><br>2018.08 : nuitée tranquille, canot-campeurs respectueux à l'autre bout de la plage.<br><br>*** Note de l'admin :<br><br>2021.08 : un cyclotouriste s'est fait avertir par un ami du propriétaire de ce terrain que le sentier accédant à la plage est privé. Il lui a laissé camper là après une bonne discussion mais c'est à vos risques. Le canot-camping est légal car la plage est publique, mais la personne en question qui surveillait le terrain déteste les cyclocampeurs.<br><br>*** Suivi :<br><br>2021.08 : J'ai campé là récemment. Il y a effectivement des gens de l'association des résidents du chemin Courte (à qui appartient le terrain) qui patrouillent régulièrement. Quelqu'un a tenté de m'expulser. J'ai joué la carte de l'ignorance, des problèmes mécaniques et du fait que je suis mal pris pour lui convaincre de me laisser passer la nuit. Je déconseille ce site! :(",
            "name": "Plage sur la rivière Rouge – ATTENTION : lire l'avertissement!\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.8547962,
                46.8868945
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/uakra51o0nj6h97vsh2tpi3edg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisW1BUrlBPoPQbRvi_hT6xYs82OdOHi_tvMSB3WOoNQvj0NkdejvIRbPMQeLZqw-VN3kFZp83Oh3Rr9lM6DmP7D2RuxusXc1capLszlUg2XEDTThQl1z9WzH8EsWWn1d7qSMCY1_889ITuN9VM4_VvQmBdAYg2ZuUwNIVQT_SE_xh00FeM6Gv9cGZPyNWJxT7OB?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Accès direct par la Route verte. Aucun panneau d'interdiction à cette entrée. Pas de toilettes sèches (contrairement à ce qui est indiqué sur la carte).<br><br>2019.08 : nuitée très tranquille au premier point d'observation.<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hbf8sjjotf62hd9sesphr57mos/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisDYghEyaIxAya-GvG45wjFfQ8TH5ZRksHYrxEM4IZIV9IH1h-Ab69zEYd6WJis9abY_OpsH_gcynVjGavIMdQCecjqoOpMEZ4t09zDR3cZ772m_AaFQm_RvOCVAyij_kiWiR_iYZ6sjJ8ej6qWsYyjnShGEwPYGq-HiVQ9qKqf9l2RvwSLoqJXdFfFbDzk44Rv?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc de la rivière Ste-Anne"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.8016545,
                47.0143466
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nms62s84nf4g7o91jgqkih9brc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu5sqiODz057R0EN1CePVurRzaB5E7jPa69LCJzJk30iDOzZk9JFk2CqsZ5p945hpSA3ljleDqy64-B4AlrYCTaL-S7R9GiDZ8F_19lBCyOEwWusrH9uRPixv_mOc2Rf_OV2pSINAD2edpjs1ONSBpU9xUIDnpjbDCXLS6D6yDHTY7UFPdiaMIN_dtuzUqsWjiB?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Accès via le ch. de l'Anse-Verte (privé), puis il faut faire passer son vélo par-dessus quelques grosses roches et pousser son vélo à travers le sable et le gravier pour trouver un endroit tranquille. Situé à côté du camping des scouts. Toilettes sèches et point d'eau à courte distance dans la forêt. Super beau lever de soleil. ATTENTION à la marée montante!<br><br>2019.07 : nuitée tranquille, quelques passants.<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dhtge17om5u7pul74q7l5p8lkk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisQixbsc0wJDzhP_npzztJosuluLTzf7SgkBlxNrV4RyM2_M_3RMe_3Oz2daB02Nh3unxupjQxMtS14ytPl92eNobmKoeIDGOt9dfpjjvX2R0Nd5pEm_N2LeIoemwNxm01qMK-z_BwW5q9VjbGc7jVi-S-GT--tTKWjMj13imG53nDU7s1EPD9hz1tMr3_rl05q?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Pointe d'Argentenay"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.8799424,
                47.2550238
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Accès: Route Drapeau Sud (très important!) passé le 1er ponceau, jusqu'à une fourche 6 km plus loin où vous prenez le chemin D'Ixworth à droite. Roulez un autre ~4,5 km, puis traversez le ponceau à gauche, pour ensuite garder votre droite sur le ch. D'Ixworth. Au \"carrefour\" triangulaire en pente avec plantation de conifères au centre, montez la côte (au lieu de prendre la droite vers le pont enjambant la rivière). Une fois la côte gravie, le petit cul-de-sac à votre droite mène au point de vue sur la chute, d'où vous pourrez aisément trouver un endroit pour installer votre tente.<br><br>Chute: Les rapides en amont se transforment en une triple chute tonitruante. Un 1er grand bassin pour nager baigne à son pied, à peine connu des gens du patelin.<br><br>L'on peut accéder à son 2e bassin qui le domine d'un mètre de dénivelé en nageant à contre-courant, puis en rampant tel un lézard sur des roches mouillées. Avertissement: faites gaffe de ne point glisser puis chuter: l'endroit est situé à au moins 12 km de la plus proche localité!<br><br>Un véritable paradis sur Terre vous attend dans cette grande cuve rocheuse, où l'on peut se faire masser le dos par la grande chute, mesurant environ 4 m. Un 3e bassin la surplombe, auquel il est aisé d'accéder via une courte marche sur le sentier. Suite à de fortes pluies, le courant pourrait vous empêcher d'accéder au 2e bassin, ou rendre la baignade dans le 3e périlleuse. Le 1er bassin (en bas) demeure sécuritaire peu importe la force du courant pour quiconque sait nager.<br><br>Il y a d'autres petits bassins peu profonds pour se baigner en amont et en aval, dont certains légèrement moins \"sportifs\" d'accès.<br><br>www.facebook.com/francsoisd",
            "name": "St-Onésime-d'Ixworth, chute de la rivière Ouelle"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.3817809,
                49.1667185
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Accès via la rue Du Havre, environ 7-8 km à l'est du \"centre-ville\" de Ste-Anne-des-Monts.<br><br>C'est la rue des petites maisons des pêcheurs du coin, avec vue imprenable sur la \"mer\" et ses rochers, où fourmille la faune aquatique même à marée basse.<br><br>Ne vous étonnez pas que des pêcheurs viennent \"sentir\" votre campement aux aurores, vous saluer, puis vous jaser leur vie si jamais vous étiez lève-tôt. Immersion gaspésienne garantie! :)<br><br>www.facebook.com/francsoisd",
            "name": "Ste-Anne-des-Monts (Petite-Tourelle), rue de la Grève"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.0637353,
                48.8059421
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Situé à plus de 400 m d'altitude, et à seulement quelques kms au sud du magnifique parc de la Gaspésie via la route 299, ce site de camping est fichtrement sauvage et n'a rien à envier à la SÉPAQ!<br><br>Situé peu après le 2e km du chemin de gravier menant à la ville-fantôme de Murdochville, sur votre gauche juste avant le premier pont.<br><br>Superbe lac au rivage de sable fin pour le bain du matin, quai pour canot / kayak. Micro stationnement à éviter pour le camping, sauf près des arbres ou dans les herbes: les pêcheurs matinaux peuvent y rentrer plutôt rapidement avec leur 'pick-up'.<br><br>www.facebook.com/francsoisd",
            "name": "Lac Ste-Anne, sud du parc de la Gaspésie"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.8195034,
                47.054272
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Pas de services. Une patch de gazon et deux tables à pique nique, un abreuvoir. OK pour passer la nuit si on arrive en fin de journée avant d'attaquer les côtes de Charlevoix. Voir https://www.google.com/maps/@47.0539377,-70.817702,3a,75y,161.23h,76.75t/data=!3m6!1e1!3m4!1sPve5v7776HX_AGhVkQOSWg!2e0!7i13312!8i6656",
            "name": "Halte routière en bordure de route"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.8164411,
                47.0534826
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Mini stationnement avec table de pique-nique.<br><br>Coin très tranquille de nuit, mais pouvant recevoir nombre de visiteurs à partir de 7-8h.<br><br>www.facebook.com/francsoisd",
            "name": "Cap-Tourmente, marais des Graves"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.9894195,
                47.738395
            ],
            "type": "Point"
        },
        "properties": {
            "description": "2820, boul. Malcom-Fraser, La Malbaie, secteur Saint-Fidèle.<br><br>Nous avions campé sur la pelouse plus bas sur le terrain après la fermeture du centre, puis démonté les tentes avant l'ouverture.<br><br>Tables à pique-nique, casse-croûte et  quelques commerces à proximité immédiate.<br><br>www.facebook.com/francsoisd",
            "name": "La Malbaie, St-Fidèle, poste d'info parc marin Saguenay-St-Laurent"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.8267274,
                47.9959193
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Nous n'y avions pas dormi, mais il y a certes moyen de trouver un coin retiré pour y planter une tente.<br><br>Tables de pique-nique et majestueux lac. <br><br>Avis: bouchons d'oreilles requis si vous aviez le sommeil léger, car la route 138 étant la seule reliant la Haute et la Basse-Côte-Nord au reste du Qc, le camionnage y est sporadique à toute heure (et comme le lieu forme une cuvette, il peut y avoir réverbération, et donc amplification des sons).<br><br>www.facebook.com/francsoisd",
            "name": "Deuxième lac du séminaire, halte-routière"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.8693493,
                48.3107302
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Stationnement du belvédère où il est assez aisé de \"camper en pirate\" à proximité, de préférence en bivouac ou à la belle étoile (l'endroit est tellement paradisiaque pour ça, avec la vue, puis l'omniprésence de la flore et la faune!)<br><br>Il importe simplement de ne pas camper trop tôt ni décamper trop tard. Bien que le site soit situé hors des limites du parc, les gens de la SÉPAQ pourraient théoriquement passer puis vous exiger un paiement pour passage quotidien, ce qui est relativement peu pour un tel lieu.<br><br>www.facebook.com/francsoisd",
            "name": "St-Fabien-sur-Mer, belvédère Raoul-Roy (* parc du Bic, SÉPAQ)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.9873712,
                45.1244781
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/pmf39hlh79e01qb0lruljfnh3c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PismsEYkRnlBKR4j1lnHk9XdNJP9qkC77siNHuYcGemJP2EP2W0LGYyJ8yXCtf5GFNP2bCXmzfeJtYvnODJzu4bxJmpQY0622YoBDiLki4CwHC8MzQ3Z_tJeq5mgS5k0BwSGZ1DgvqgLpTVuxx4P4GcKgCTrxTJnbENoDlu_jbWrISvGhMCUuk-XQYgtfa_1Cl71?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Idyllique sur la rive de la petite rivière Chateauguay, abrité par de gros arbres matures. Au bout des terrains de soccer. <br>Pas de table de pique-nique, pas d'eau courante.  (mais le village est tout près)<br>Bruyant très tôt le matin, car beaucoup de faune près de la rivireè, et la route 138 est tout près.<br>Nous y avons campé avec bonheur le 25 mai 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/g5l65jbag0ndlmv6h7r9ct9j6k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuQtIBDBfQQJK8pS6IMxOhn2DpH6dQGfRydkQmBswE5xSaVG0fudCJAPOuptzxqvwzdGhZoxqiZg0EKsmo1kZECldiL4Go4gw-Rp7fculkug79PoWeZEyBX-76QFRk7NMCxWOGSBS0LELHglABbso77saszQAI9drmurojJDPgiM4uIZNGi7f_KYt1tPYvUUjPR?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/5hstffr8p2f9q4vf80uk13u718/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piseq00dR3gZ9ZP33GFA_S7vsMeaQpYpyy3EFtAi6WaZibzzy1wdcHuhGHUzWYbG6N69Pj0ymGcYM3juMtMjfXLLASuAn6qU6TFWAXibQ8qgBH5CaUpduvpOzy7IkbxmTZnfHZaKAL89OPvu2GOOj8MQFhq5t0dnWlE0hOcpEskRMv_WKtBXfwnqUzhpLXIGuVeH?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/0pbp22hls90uk7942vlbdfrbf4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piudhhepc3fDHajB4BK_l0rI2Y9fhhO9Gk-mQ-owwFXxfvTerrEcA2JXTW79yucviwbgc-M-T6x2dmAYHYFzyLD9YP03km6UqO2ejmW5kc-6IeqKUzlevkJF2-gAO1C8vtl6ofnHdlAPQZUGYrY9CYM-gaD-V7JEaAC3rJRgR6P9HwovthF02movwljH3yvYV3uu?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc Municipal, Village de Ormstown"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.2138214,
                45.0620392
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Adjacent aux bâtiments municipaux, le terrain est en verdure et comprend quelques arbres procurant de l'ombre. Table de pique-nique disponible, pas d'eau courante.<br>Nous sommes passés à vélo le 28 mai, mais nous avons dormi à Venise ce soir-là ((La Cache du Lac Champlain, Hotel)",
            "name": "Clarenceville-Est, Halte municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.3035707,
                47.183955
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière à côté de la 132<br>Aucune interdiction de camper seulement ramasser vos déchet.<br>Toilette disponible",
            "name": "Halte des pilliers"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.3077252,
                46.999186
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Accès: Route 285, tournez à droite sur chemin Lessard Ouest, après le tronçon rectiligne de ~3,75 km vous aurez approximativement un autre km sinueux à parcourir. La grande clairière servant de stationnement le jour est l'une des entrées vers les chutes et rapides.<br><br>Camping: Il est aisé de trouver des sites de camping plus en retrait des sentiers, ce que je recommanderais notamment les fins de semaine estivales: je ne serais pas étonné que des fêtard.e.s visitent les chutes jusque tard en soirée.<br><br>Chutes: Situées au fond d'un petit canyon rocheux, elles sont par ailleurs reconnues localement pour le naturisme, alors les morceaux de textiles sont optionnels autour de l'eau.<br><br>www.facebook.com/francsoisd",
            "name": "Ste-Cyrille-de-Lessard, chutes Les Portes-de-l'enfer"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.775264,
                48.5950264
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Camper au sommet d'une dune de 50-60 m de hauteur vous parle? Go! et ce n'est pas l'espace qui manque pour le camping sauvage!<br><br>Par contre il ne faut pas être trop frileux pour la baignade sur la jolie place à son pied: la température de l'eau de l'estuaire du St-Laurent n'y monte que rarement en haut de 6 à 8°C en plein été!<br><br>www.facebook.com/francsoisd<br><br>Caroline ajoute en 2020 : il y a maintenant un règlement municipal qui interdit le camping sur dune, il y a même des polices/agents de la ville qui circulaient cet été, mais peut-être que les cyclo sont toléré.es!",
            "name": "Tadoussac, grande dune"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.3363063,
                48.0027099
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Accès: Au bout de la rue Church, après avoir traversé la voie ferrée. C'est à quelques coups de pédale du village, mais l'on s'y sent en pleine campagne.<br><br>www.facebook.com/francsoisd",
            "name": "New Carlisle, plage Green"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.3821417,
                48.7823928
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Les gens du coin sont habitués de voir des campeur.euse.s, mais on vous rappellera possiblement de ramasser vos trucs!<br><br>Faites gaffe à la marée; montez votre tente sur les points les plus élevés!<br><br>www.facebook.com/francsoisd",
            "name": "Gaspé, plage de Haldimand"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.4044577,
                48.8203696
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Plage naturiste.<br><br>www.facebook.com/francsoisd",
            "name": "Gaspé, plage Boom défense"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.3811117,
                48.77685
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Plus tranquille que du côté nord du pont ferroviaire.<br><br>Faites gaffe à la marée; montez votre tente sur les points les plus élevés!<br><br>www.facebook.com/francsoisd",
            "name": "Gaspé, Douglastown"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -61.873654,
                47.422612
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Faites gaffe à la marée; montez votre tente sur les points les plus élevés!<br><br>www.facebook.com/francsoisd",
            "name": "Îles-de-la-Madeleine, dune du Nord (Cap-aux-Meules)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -61.9499574,
                47.3421793
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Faites gaffe à la marée; montez votre tente sur les points les plus élevés!<br><br>www.facebook.com/francsoisd",
            "name": "Îles-de-la-Madeleine, dune de l'Ouest"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -61.9340788,
                47.3328728
            ],
            "type": "Point"
        },
        "properties": {
            "description": "À l'abri des vents de l'ouest.<br><br>Faites gaffe à la marée; montez votre tente sur les points les plus élevés!<br><br>www.facebook.com/francsoisd",
            "name": "Îles-de-la-Madeleine, plage de la Martinique"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -61.8243442,
                47.2252639
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Faites gaffe à la marée; montez votre tente sur les points les plus élevés!<br><br>www.facebook.com/francsoisd",
            "name": "Îles-de-la-Madeleine, dune Sandy hook"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.2919988,
                48.5822538
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Magnifique plage de sable et galets quasi-déserte. Aucun service.<br><br>Faites gaffe à la marée; montez votre tente sur les points les plus élevés!<br><br>www.facebook.com/francsoisd",
            "name": "Percé, plage de Rang-St-Paul"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.3474454,
                48.5760643
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Camper en retrait de la carrière, surtout les fins de semaine, car c'est le festival du pick-up jusque tard en soirée!<br><br>La chute vaut vraiment le déplacement!<br><br>www.facebook.com/francsoisd",
            "name": "Percé, chute de la rivière Aux Émeraudes"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.0843157,
                48.7040987
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/6ifqh8s1fbsmhung3h2s7ska54/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitaSnPNXZfuhzUdhzbPryyCESodCRO1LkzgO5GLmmNSJsGkGvh87ePSPGSzro-FiO1HYR5xj2WgBeCXK2Cxku5ffrzl0yZBf677zIsN5WI-jZcJ1FU2HLLusZ9RoUdkwtsmFSSKs3OAXEcIsSTT2CgKjMjgoKxN-H3jEIpFJeWlB4ePFF6iqYCM7YcHULjMxB43?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Un coup de coeur en hauteur au dessus du fleuve, sur une partie peu fréquentée de la route Verte #5, au sud de Forrestville.  Personne n'est passé là entre 6PM et 9AM le 27 août 2018!<br><br>Table de pique-nique avec toit, fruits sauvages autour (mûres), pas d'eau, pas de toilette.<br>Coup de coeur au Québec!<br><br>Nous y avons campé avec bonheur le 27 août 2018<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br>Caroline ajoute septembre 2020 : Partie de la route verte fermée à cause de travaux d'Hydro-Québec. J'y ai quand même campé une nuit, le lever du soleil est magnifique, mais attendez-vous à voir des ours! Soyez bruyants et rangez votre nourriture loin de votre tente. Des voitures ont aussi passées sur la piste cyclable pendant la nuit.<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ono7r80mq5opssagl7kqk0k7ro/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit0l5iBuI47go4VQa1rcMfqWxxMTMQLrs0SLPZwqqdF6UZLGisUqblJ-AbJOJhTUPR3_Ocn4dwi1MuFvnFEaCG6RvYdrzaS99GoorDijneFGI6tG6tRNoJtHIQXj9p3JM2t-pOhmfqp9E-5-zkxSXP7TLbJKTN45lU8vhwL-sxDWn0d9iJUSKNoBmtP21tM6nSD?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/j2e821cj04ofed6cb2v048ke5c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisxvQ3utX5B6bq5-emGUiq1z6X7rcocf-3tUYbi19vtf2CxgGLSvTJJJ1kCSg3A0mntXVxnyCrKKZFtSa6i3Pt_emGvoX0tgFNluCtPoiq3CbhBI1-UpN2Mb0YpV63mQplZErix8kDzyNXmjFYuYGS3Haga0IPAsn1KxdMyN1ZeL5jaLhJ3lsacR459DdWwbv8U?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Forestville, Route Verte #5"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.9770536,
                45.28593
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/0hvi267kmtj30t2kffckr5ssio/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitjCgtZ67w2ttXTrXLp-IWQhB_8-oR9T39WaG1blD0WVc4aRrZ0JVDBXyaIpbv3T_SsjGOsR4a6Oj4pchFk_5AbZFzxl_qriVyi0xMv7lqlbRZMyG3D_quYAm5rwVDunbDNNQKdQX1w_teiHK4pfiVz_5kpHqFkvnl3AC4Vn0Sh-pEIWgNjgyF3Et0cRS4vx0rQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Ce parc adjacent à la très fréquentée piste cyclable Granby-Farnham (Route Verte #1) est incroyablement bien située; Toilettes et eau courante, tables de pique-nique, jeux pour les enfants, beau gazon, terrain plat.<br>Le hic étant l'achalandage ... et la tolérance incertaine des autorités en période de pointe.<br><br>A Farnham, il y a une autre une autre option intéressante , de l'autre coté de la rivière Yamaska, dans le Parc municipal dit: \"Centre de la Nature\". Un secteur boisé, joli sur le bord de la rivière, beaux terrains plats et gazonnés, table de pique-nique.  Plus discret, mais de service (eau, toilette ...)<br>Nous y avons campé avec bonheur en 2010 avec nos enfants (tous à vélo), au retour de 10 jours de cyclotourisme au Vermont.<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
            "name": "Farnham, Parc Municipal Conrad-Blain\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.9608018,
                45.280935
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Parc municipal à Farnham, dans un secteur boisé, avec tables de pique-nique, mais sans eau et sans toilette.  Nous n'y avons pas campé, mais nous y avons installé 2 fois des familles françaises venues découvrir le Québec à vélo, que nous avions hébergé la veille via le réseau Warmshowers.org<br><br><br><br>A Farnham, il y a une autre une autre option intéressante , de l'autre coté de la rivière Yamaska, dans le Parc municipal dit: \"Centre de la Nature\". Un secteur boisé, joli sur le bord de la rivière, beaux terrains plats et gazonnés, table de pique-nique. Plus discret, mais de service (eau, toilette ...)<br>2020/06 : nuit très tranquille, ne pas hésiter à emprunter les chemins du centre de la nature pour se trouver un spot tranquille<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
            "name": "Centre de la nature"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.5073826,
                50.2843003
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/61qmj94tsn6u5lq2nmtqnonf28/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PityJhCWkLnpaf0mNG6QxFw71A6yRx8UGE3bbv-FImcUTPsuxtSCBJyd3Pevly9eVsGUnUSVhH9Ie68w_hvqCr2Eaar4hIWzefZba1SVx8qc7lZrNdyxk5swEmCQlr7AJgZAyblyimUs59av6fH1_GfufC37aplAJ4OoY3PzC1E529FdVUIyZPUVLAZ1r1B93yWm?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Quelques emplacements pour tente avec rond de feu. On m'avait dit qu'il y a une source d'eau mais je ne l'ai pas trouvée. À côté de la route mais avec un bon couvert d'arbres pour protéger des regards. Pendant que j'étais là, une famille a arrêté prendre une pause, un VTT est passé et une personne faisait du surf. Relativement tranquille. Aucun service.<br><br>Ajout du 6 juillet 2020, NPion et HGiguère<br>Un premier emplacement juste avant le pont de la Rivière au Bouleau (avec un drapeau du Québec) est un stationnement surtout fréquenté par les gros RV et autres Winnibagos.<br><br>De l'autre coté du pont, les emplacements sont plus jolis, plus boisés et plus en retrait de la route 138. Directement adjacent à une plage immense et au Golfe du St-Laurent.  Un coup de coeur pour nous!<br>La source d'eau est de l'autre coté de la route 138, moins de 200 mètres à l'est de l'entrée du campement.  C'est un ruisseau bien alimenté, nous n'avons pas filtré l'eau.<br>Nous avons campé sur ce site avec bonheur le 6 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8338t565qc5vr6uun9lugtjne4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pium-_x0tXyR4nXXQwQwL9XAUNEFfaqEIwNacATTmjTcjyfKB2Ksde-NuEt9UDK_msdNGqxJW-d6Xjf24oXBDXKkfBP4v9lqi0ToEoBU4IcZl6IrXCwyZ834N_0s5FO0Os29sftCDaHYy4uVF064tI6vybQkES7o4n_hrdGKiTKUzH6PUau56Fj2fK3JpkxYcpVP?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/f4u1nsuohgid5f1belb4o8jbe0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuL1TD1l1NDtew6hvi6aNWTlDk-YzlQm28ENxvvp_guncVaOtdJkBaHBEubZby9wTmgTpH4P920feDzULKk1Owbg1r22juqsfTv4VrldSFX_iLjRZESkGDc_tOHyL237yjM1DcHwgUFcemwpy733YeLv1nyeTjl3GZpH9xndZP9pxZCAprJDg2rZHuEKTTusrAx?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Sites rustiques Rivière-au-bouleau\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -62.8099823,
                50.2859896
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/32ss6d5cmrkoh859nv2oqc97b4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivMdqKJ4lssCUzblM7GXW1HvIdbYtiu8z4Ta5B51DH0Z851eu1T3r-Bk7L3R2apgfFF-Y3x9KvhC9QjFRbaZJzoiRkG-t8GmYqRSwbUmzwnHzM11jMv7F_vK3bz_-f48v-SK2JbecTb4bHEkPgH9nJ442GkES62-VSUIO12k-jtMnqPzBB7tLT9X1Pm9wMuQVp7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Camping sauvage sur le bord du fleuve. Je n'y suis pas allée mais j'y ai vu une tente et un campeur. Aucun service.<br>Anonyme ...<br>Ajout, 10 juillet 2020, Pion-Giguère<br>Le site est magnifique et comprend une dizaine d'espaces aménagés pour les tentes (carrés de gravier tapé)), autant de table de pique-nique et des toilettes sèches.  Site officiel mais gratuit.<br>Eau potable à l'information touristique à l'entrée du village; Petit marché d'alimentation au village, incluant café et SAQ!<br>Venteux, moustiques ... mais magnifique!<br>Nous y avons campé avec bonheur le 10 juillet 2020, nous y étions 6 (3 tentes)<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/pfafdsne7hanfh8ag995b7ggb8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit-oCyiNez8njWfDeySQMEb_B8XBVaO-cNxuu0XmvDtcBCaPgA6tPROzmMFxhH8DLiDsfT_RLZmpRJcwtosaqm6J0AshE6qCsMHQR0jBT85ci9gm-ecKt-he9MoGTgMYMEyrQwAG1euSlvv7kC0bu4kAoD5z9eB8aGZ2O6KzIg496HnJpcSCP4PYR1oQovFh5zY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fulkksne1e0uq8h77pkh84klso/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisvf6X7sg88u2-aoL48wCT0HxIfV1LThqz-tFwLukfc3dolUeVZuosa-mb2I8DB-r-E2uqyBnSYE3dPS7MDfl5AAyggVNNCbNZl7i1E5-ZTsWvGN7d13wkcWZ6yKACDylEmlhihFqcwdaNPzrWltuairhzpQBUfPoSYD3e2c6rBb9E6u04jnoCzC7mzOxo3Vaco?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/gr6nt8n30j2ns87kf80mbuc20o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisYuwCKZsjrg2D-TbFwJsca1Hu47ruor8RzHa5IUuSCyFwzuEWRDIwEfjbV2FIU4Ch-dn8msQ4bRW_L4eYG3UyfwF26_cttcinjdnl_-lZejHEauMbuwbKJOaSIYx6pITNi0rbsYGPCrOe9Rfzo8YHxDmg5KsoMQ2Bv-tdqFWNoAbLVrL4N7XeT0qbAyXCXNfeK?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Baie-Johan-Beetz\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.3030353,
                50.2052236
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2ubat87a9583nnh6huc1gomkdc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivHhudB5kDofOnoEw8inao3-GCNZYfZBh94RaZl_RgKbbsA6fnMtLdLiMd8ogRu9Vx-tBa50OmzzE1PPn2xczUo-UddMXZvBbOwFq9Yjq0sSmmk2q6DQAYhdY49RhhQ6egc2URmyRwL0Qpy7MVPgHzRva_Jt-1LtrzpPfN3I1HBoic6pdkA9kIb1uTsR6JKSqe8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Camping sauvage sur la plage, L'entrée #1 a un grand stationnement et des toilettes sèches. C'est un endroit très fréquenté par la population locale donc il est préférable de décamper tôt le matin. C'était très tranquille la nuit quand j'y étais mais je suppose que ce ne serait pas un bon endroit pour camper la fin de semaine. Trajet sur piste cyclable pour s'y rendre de Sept-Iles.",
            "name": "Plage Sept-Iles Entrée #1\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.4776463,
                46.5776322
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/t93v9hck7mquc2653f4rk0gvjg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv6yGWEolM8TQnJA_ouM23DxkiowxHxJhU9jHjVhr6krzEbzAMwm2FzsEN_-GBAVkzdthxl1gHHRxfdbtpYbuwMuciCVBi_s99RzrQfsDyrHUOTBUWoqkpcS5s0fFCrBmrsZpoQtpaFe_sKn2IPsCXLf1BtYREZV4GzKx_f0hRp2QNDGnzlbQ3LQXhFpx6e-2qC?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Abri aménagé par le club de 4-roues de Bellechasse mais qui ferait un bon \"spot\" de camping par mauvais temps. Beau panorama en prime. Pas de point d'eau.",
            "name": "Parc éolien du Massif du sud"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.1514646,
                50.289012
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fjte1e9qbuackdrl8vr7hh18c4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit5wwkrZXYnDElTpjyJwUAfG0z95PxjKK7MYW9QiztvZ0TMdEQYWetIFOQGn0ImG5CgvWLoAlAqwvXpdVjRbm0eGnmDadlb_KmzKNen4O0A53UTkhelrJynytkkdiscavqYeYHEAqXUvq24YHJO5hcxSY3RGbHJepjQ8HYa2AgDoDX_o8HzXR_uJnvBBxffFxY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Accès sur une route de terre du côté ouest de la rivière à la chaloupe depuis la 138, la route tourne à 90 degrés vers l'ouest et longue une vaste zone aride pleine de bleuets et de plaquebières. Il faut manoeuvrer le vélo vers la mer depuis ce point sur un sentier de 4 roues en sable pour enfin descendre la pente et se rendre à la plage. Visiteurs occasionnels en 4 roues. Beaucoup de fruits en août, mouches au rendez-vous. Belle tranquillité, horizon immense sauvage, sans eau, sans services. Halte touristique de rivière Manitou, eau et bécosses à quelques kilomètres à l'ouest.<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vte800so9ai64tbmioteerefqo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisp-b4m0uQ9_ss2ApYLAlB8SmXPJSRofa4tsLamqZOXyCYCG2PY2X5ByGQsK6JtdnAaELVU0SRvVY6qsM7tC6r-sg9Qd286aUN8od0mv1QAalNeXKfmcIm-EmEixelr9Ch6Jw_aJLj9pda298hnO0cW3PPujJSFeu9_ugOe-ENxse8Y4R89_TbeUsdlM4BNrlY?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Rivière à la chaloupe"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.2845597,
                45.178884
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2v612mvoas611cq7t99vssem7k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit3ue4B7N2sMO2IB66ciOTNXRhV3lj6nUBKuh6AelujLPwijEVLQofQOchLbFcJALQGWsq8RNSwBIbxTt67nKecDilRUSrgAyE0R28p6ZRl7z29Od-LHpqYtpBQdvejwFvJyw6YphfeEw3rb9QDQpKcoMJJJRE1vX5y4nBfCVfHsxDGj-fPUNTF2ZTYDc4PgkTx?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>en face de l'Hotel de Ville de Austin, à 200 mètres en retrait de la route principale, beau parc municipal, avec terrain de baseball et patinoire extérieure. Beaucoup d'espace pour y monter une tente, relativement à l'abri des regards. Tranquille en ces temps de pandémie. Personne n'y est venu entre 7PM et 10AM.<br>Nous y avons campé avec bonheur le 2 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fe2kuabllh4d37qqi5adul4h30/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit2z8EqCXFJ6jxu9SCVInbE23mrVb7G4ywP9L3ZjDNJuS0YZO8NrLWA0snPVW6v4atZz_kK9OTQgGoEYp-l12O1fbqtBpx-C0iWq26pqGQW7SdytpYR1Yos_714k1BdJTd9sFsiSO7RZuWgzHyGSDmmLdBbFhTziFDBrJHWDr8BuEHU5OIJmED0BZRFX6NEQZz6?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Austin: Parc municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.5012515,
                45.1984153
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hpsrplnlmf3u9rt8ie2ijbo9b8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv82tCjsjwQfqU0mBJC6B-VLxHIBg9xKGjbTZxGEToIJlh67ystqvah2m_TiP1PjlPw5ZeiIDXP5lICXvWC3jFh8x5HsA4Z3JhxpEIelH_lXd-qzEtSNoV80XrZkTuaKLv8FMolkF66GeF3e21ypRqEKupez78SkKBQDxSwnFlkkB7mM3JEb6Tjp5kddUCP5yCW?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Un extraordinaire spot pour camper, dans le joli village de St-Malo: Abri avec toit, 4 tables de pique-nique, toilette et eau chaude!, Wifi ouvert!!!<br>beau terrain gazonné, endroit magique!<br><br>Un peu bruyant tôt le matin (camions).<br><br>Nous y avons campé avec bonheur le 4 juin 2020, avec 2 amis cyclistes.<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br>***<br><br>Juillet 2021. Je passe par là pour remplir mes bouteilles mais l'eau est non potable. Au dépanneur en face, j'en ai demandé le plus gentillement possible, mais elle a d'abord refusé, « à cause de la COVID ». J'ai dû rappeler à la préposée qu'en mettant un papier essuie-tout autour de ma bouteille, il n'y avait aucun risque pour elle.<br><br>Nicola Z.<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/b73jd7olsh364b8c9tj2iq2h4c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivEBl3nBB9uJ7wLgNOQogaho0_ycapWpNZAoRkUJ0S93LquH37KvPo2YldJ4r3rhUD37ENGiGdrNpz_IUBB75AK6WeA-i7WWCi1CSmSS6s__qVge_VaGEtUFuunOTCr4mlYw7O6GtK4eLwlK2BTo2fXX0hqbbWckuehPikGHaOCICKjPvGXFL4CqmT0VSzWQd5Y?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ord5fgnrbgpja85bj0q4t7qsjs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitogxWqpq-u_6MfJCAey4TlMe8mTVlPu3r1BcbZuuyqEQnJgqootWDi86Ya-zW3fM_YqK-Q0U4T_iwz1w_6iPMOKnAAGxQW-zU0-zw1-_CFI2wGJ6_ippoOAn1SNWLdeAJICTZxEEhzPKy0MmMTnTesMpKXZ76W8prz2wiLVXumkxkocm7s2NMCky-m1TTYYnfx?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Village de St-Malo: Halte municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.4895278,
                45.200223
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3vv29en02r7mknubf1k3600b20/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuXGhEYESI5zULJ8aQ4PMJpIPLFIQp8wjd5qqJNXjytExLGbEZs0D1FKjJwRWSbIFWhjT3ITUtQPfsV1ZQ-MjSHAlEQ-LqB6u6kC56AXdmsjisgdhH6XuG7SfZP8NplraWn7wGm5rx298kM0PNzOmjCgGMdKu-OakDjfBdM5ZIilekTER8X5hhNJqTZsbWDBt3K?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Aucun panneau d'interdiction sur place. Je me suis installé derrière les arbres pour être le moins visible possible à partir de la route. Voir autres notes laissées par Normand et Hélène.<br><br>J'ai campé là en juillet 2021 sans problème.<br>-Nicola, l'administrateur de la carte<br><br>******<br><br>en visitant le village, nous avons trouvé ce spot encore plus beau, avec vue sur toute la région. Table de pique-nique, toilette, beau gazon, totalement isolé en haut du village. Mais pas d'électricité, pas de wifi, pas d'eau(voir voisin en façon) plus une côte majeure à monter pour s'y rendre 😅.<br>Si c'était à refaire, nous sommes presque unanimes à vouloir nous installer en haut!<br><br>Site visité le 5 juin 2020 (nous venions de camper la veille dans le village de St-Malo, à la halte municipale).<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/g71i4aqulmn0oq64dfn7boctc0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitgcaTV_Ml6i_TwBj4BGYrQgUYLvhU9YbaBHwakUR2jhelQBXQBbqq45u0womN3nI8Fw2a9q-7ild0MCYizlGcltNpYCQ9btddr16fa_zvnuxwMA-I_ObAvfjzDh9UYGSnYO3IwttH4zBiadVKlJMURyyi7urrkZYEWx-olW7p7f2a3N6Wc3wlAPt6YtRvtBZcY?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "St-Malo: Observatoire au sommet du village"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.7846292,
                45.3751144
            ],
            "type": "Point"
        },
        "properties": {
            "description": "On peut facilement trouver un coin tranquille quelque part par là. Pas d'eau ni toilette, mais Granby n'est pas loin pour un ravitaillement.",
            "name": "Montérégiade"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.8235562,
                46.5139996
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Champ tranquille. Discrétion svp.<br>.... oubliez ça, maison en construction (printemps 2021) Le site est maintenant occupé par des maisons, mais à peine un peu à l'ouest, une entrée d'un autre champ avec une forêt un peu rocailleuse à côté. Pour mal pris.",
            "name": "St-Boniface"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.1937496,
                48.9370761
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Espace en gravier/pelouse tranquille, possibilité de faire feux et en bordure du fleuve à 500 mètre de la maison la plus proche. 2018",
            "name": "Spot Grosses-Roches. "
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.28572,
                46.53368
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Un abri sur le bord de la piste cyclable avec des tables de pic-nic autour et plein d'espace pour installer une tente.",
            "name": "Camping sauvage Lac Boyd, sans eau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.63889,
                46.30701
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Dans le boisé à l'ouest de chemin H. Bondu, on peut y installer plusieurs tentes.",
            "name": "Camping sauvage dans le boisé, sans eau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.165967,
                45.0660682
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/u0i8enlj4ht0mhmhjvmokm0egg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv8fum4g1s_TDUYPispeVT-2k7T-8bYOv8x0QKqerOISThjbQIqjplabucLpFswlA301WI4a8xYD13rybGj9x8EtvK0dMPjWibEcfFar5Ti-jYUo7ttgpdyC310OualMR8yUiAwhucqrQo4AseY_mzEwc_UeP2-Ay_3hoGl1-I_k-1nZGL6w7xFNlXfk7FYWu-i?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sentier pédestre aménagé, bon spot pour tente un peu en retrait de la route côté nord, toilette sèche , table de pique nique à l’entrée Du sentier.<br><br>***<br><br>Campé là en juillet 2020, mais un peu plus loin sur le sentier. Pas vu personne. Chalet ouvert le soir et tôt le matin (toute la nuit aussi?) avec une distributrice d'eau.<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/jmbsq3ep8ucrdo1tcsmuhf8gdo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivVtkc30IkjYq4ZCWbpN2OIQ52NWQP70eXpIS4Eez0o3Zhqn3T1zlLauCEksysGjuJGLoWCFWm3bbDXo8i7j9tIdx44xv6tNlxt-HmdLwL_6SOQK2JfWaLr1eEea3chsld1DWMRkQlx6Czf6-ARpP01ued8aTm4Il6PoaJyot1l2Re67-CfIFyfEDdJL0LgP_37?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Réserve naturelle de la Tourbière de Venise Ouest"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.4006399,
                45.0087443
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/jt3qqs5k6c4m3rdkev2gfr03gg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivXCjh7atShRnl5kDRexwOAflttNC1t19MZj0C7wSQ6K6sAb_PxJevT9jgtNeL_0kF4GmgjlKGeZ0khCITCubzxX6Bg7KXlqgBIcBg6pNnHeJHmquvr55wKEv28MMeYm2nzLMjQ1a3TRRD2o11EzpAcLG_ggeDaqS0do7ynbiMrk-1QMNCiByWwYaELH31tlUqs?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Dans le minuscule village de Ste-Agnès de Dundee, un joli parc de village, tranquille à souhait.<br>2 tables de pique-nique. Toilette sèche au bout du terrain de baseball; Pas d'eau courante sur le site, mais possible de demander aux voisins (et en même temps, aviser de votre présence pour la nuit, par courtoisie)<br>Terrain avec beau gazon et arbres matures. Il y a un peu de pente, mais nous avons trouvé facilement à nous y installer.<br>Endroit tranquille, aucun traffic en soirée ou tôt le matin<br><br>Nous y avons campé avec bonheur le 26 mai 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fsnk8moss2jtk8gk4sn8t7su8g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitw-WZ7G9_x4S44zEJIvlFEhf5pw1etQKOfNVCxasl1PPDQlQajeMmY7OEPgI-GDQ1Y052hN-JJO5sjE38iErUxlo-qQAwBqp2OZsCwaJNvsfcTMswE3N6QhPOCsYFuFnzAu1bNxpdXyWV7Eex58HirSYvykHv3efawMERVMyExqjB0aaVt1638xukP9x0fLZmQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fiq3ebllnma414c6cq7snsdo10/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitSwI0hGoN5HibehK49k-VGt33RHoyIo26XFdGzS6coTmqwyhtUTi3pG71l5dW3SEialrvl74E0ew65vvDae4NC0xr6mNHyhPU8UPIaFz-EfktPHJt4I54hxkpIZ8-I0_l4rRbNNJvvK3Gq5SyRH0oxsGBEPI-y6O6SyHCA0W1TbJEkhr8VG2TFpgeq25CJpK8K?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Ste-Agnès de Dundee, Parc municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.0617054,
                45.3907644
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/arugqqqmds041bnbuqp3gadua4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis-03ekcLila9IXXSblhDfD7vmUYtDsS4QCWsQGfQNFRtPK6pmulaV4JZCI6NzPRnLjlJafvHA2VOJ2spj_c-ZtPZNcz7jNQvWBEzvG6aKJ3-7pN7PcPfzh_lboBy7_crnUZig6yndelqvteaSVaJziqmmHOTlF5WDdKP0ziWR7UC1epCuuyrC6Jzn_R7MiZeBs?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En retrait de la route 212, à la sortie est du village (à la fin d'une dure montée!), cette halte municipale située en hauteur permet un panorama fameux sur le ciel étoilé et sur le Mont Mégantic.<br>Toilette sèche, tables de pique-nique avec abri, beaucoup de verdure.  Pas d'eau sur place. Très beau site!  Visité le 12 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/5imm2adqhh2f31ibrq9ulc5qs8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitthoAaaze8NEG_m0GKI0P2JI4WaYlE7WsFqea-p5Y38kNt-E9mK_MwzaGCv9E41KNLqxQEI3M2QVtZw1uzoAQLKg74-Xbx-JheMBUs0d_hznCkjKdnLrmtXges5wCBkj5qwVkAMo9oyDqsY36wb2EXqYVd0Tf4AadWEDGrTB0sYbuJHitm9Q5mxOH_zcpRhRkw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/r6s73vet030t00p4864v6l5d28/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisXEjIPnvtUGhJm_jZEM1dgsjBm_lpPuH3UxSXyQE7FNbvbm3FwjBOmzmKjx8jSLtWXY7PTJYMEX5kD1NhFAXEdm8b5XcDEtlWqDlMlXiZM6z3E0oEjOAOWVGZr5PfvEKtJx3GlabPZI8KHcp0PGOchNyUZ96h-IILLshz_5oGZZk9r7Q4asDB1hlBdTLp-1kgA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4pdqcrs5nr07s6rm5roq9sju6s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuqT1nS5vouKt51YYrq30HQcsXIXLuS1CRTCOpWxYY_z4vJztRJg62kWWG3n2HcTPV7izWI9GQKn2jY2UGuxMfN4eYCH1Do3MCRmMOVPO0A55mmMvomews-VMfc5b_ByvWZPxnTclQj2iG2UjyvznTTogcKw-Ej7ivSOS1B4SGCBdVesxnI1siVz_qTmbMrU4pT?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/si1557osqhff2ifg6dc3dk3ukg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv_cFGrMGrewTOrGNYjpJyWxf1ydl_ApRroNSfeau_zkcvc1XZEBbv7Om58IxqE7kETs8mRzdTmU2ylywbyKg0K6k0E5FgIyQMhpDrMbONRbWJQHF2fVMUZ-XQmLDNVLwNBIwOlRUtlEyTXORdoj9ikoaVEu_97Z8mS0P7frUkkIdlkZefK_lAia6TwiwQkxgUX?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte municipale de Notre-Dame-des-Bois"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.8713967,
                45.4138866
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/glvh6gjghuq3605behjl23pgg8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisSWchU4-aKqsMrF6zXEBB0chAHYqTizXQV-aXnLUJ2xNL4j55Rln28Qo9g2ExgznwBigslzgvdoQlfMZ4DGrn0DYS3r-aKrvQNSVqhkwE2iAYebrEhURyfNnwDvww6YxQ49OH9RoJl-iuOPRaKijAsrymJ4fazDzMag1MxMrOF2HSlDnc-AiDK-lqJj7XwwKuA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>A la pointe sud du Lac Mégantic, sur le circuit cycliste faisant le tour du lac, un parc municipal est aménagé à la croisée des routes 161 et 263. <br>Assez vaste, pas mal de verdure, quelques tables de pique-nique abrité par un toit, toilette sèche, pas d'eau sur place.<br>Nous avons visité le site le 12 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
            "name": "Lac Mégantic: Halte routière Joseph-Alfred Fontaine"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.8719229,
                45.4853683
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8aes6cfc46017hdbptii50i0bc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisFThp_GnmziK-1KTwf_UM5YesrSkm4KCFPM0D47yaa3qYR9z076hmGvLI5J8EwoF6t97LKZXaY-GsJ9nk1Daa4s0ZUwKaMYI4Jn6s2HEq3vmTDDBtZTGettjKxSm7gEWT7D7nd7vllK3ZMSw-nBWwauUfY0hxDlmlEBApHEWLn0vy2DmaLa1p7YSJHX9TJkV5q?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>sur la rive est du Lac Mégantic, en face de Piéopolis, ce parc municipal dispose de quelques tables de pique-nique abritées par un toit, prise électrique, beaucoup d'espaces verts et des arbres matures, et un accès au lac où il serait même possible d'y camper.  Pas d'eau sur place, accès aux toilettes fermé en soirée.<br><br>Nous avons visité ce site le 12 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2r4k2954tsmi2ueptsk90i16hc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piso0-LbJvn3i5PBpfh67zkgx-ejg9N5SUH7NaGeho_P476vEzdHoX9iVeITeIOpJF8-a3H8GuRSpBYmqBryiZM8MHYbLvBDkxEygtPuNfS-hvmvNDy89eRlzw1TNRwQo3DqTWE6sL12JEHBN_mOAPfKJT83eLeNBfDYzu3MAGAIFNl9Z3yzbp3FC6LpbcR8yvg7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/sdv4fm5il2nai1j83kgn29mikc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivJyY-KiPszTGAv2NlEsrVOV0dzOW1QkWC46blQGQuhVSxEhzezFIo2rHsFB7XfS9v5YD0jUGjIPDtBnrKHnOeMRpJbgtYNcwXyhIq3wqg1esu5yuVzfPUX7ogngbyKhwt4kFK4yVtXVkrCVBDcaKx-Gojf2MInyXWG5EtfsTCdRjGhpHt8ymf9sEFPuOLAaPNT?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ns1ar2ejdvcvqpn8sbm42nb91o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitQu49ZvXLEaHLPQRlue7EcaLc1WT-eKlqT5qbhok-bC2ZlfkXja8DkWSdN6J5SO8CrlNZgFe2suBBGYd8-YZDxbk8pALMyTNmQKExwgSHOpr7KFc4BzOxN4UhyCzRj_JZsK2YXfSWVw4Ugl4pDwvsbiI4mRadLqqKBqDHArRqONxZCvLYM5LT7I86J7rcOAnnw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/mrtp1j0u1i0h5nn7mqcgv9q14g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisZOubJNP-5zXlbXzmyn6bo5AZpPLrKypmKZQWXme03FTIz05fFMRdLBH59TNxfl63wC8m6Qgn8eG0cGxOmVewga0_2r91p2etfkjhKGnl7RcYwgoCmAhxNsO8PCPwk5GbQhP9vlGmSDrWXJN2fTb_Yb3vqBoLwJOmifrbja2KqkNzbusz6NAYRxxSNQSXeMZ6Q?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "sur la rive est du Lac Mégantic, "
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.8693459,
                45.5033688
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/1u6bfdquda2qda9747j9cu6j40/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivN4WCKCVhm6NYtoqMForRKTm0LWe8xA_iUhiop4QPKAcpAwWyPZPSu4M4Ht3_U5F-I_lB1hs8dFGhCtQjvewtD4f9zdOraamIYUIzdr5RFcRi_tuWcy24IvV9QY736L_m6Cgbt-Zihmb6ClBIE8N4UrBHo8x71HQM7bVpKjQbKLNcnWxR-B4zG5qwc7NokXHvT?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>sur le site d'une tour d'observation qui surplombe le Lac Mégantic,  quelques beaux spots pour monter sa tente en soirée.  Quelques tables de pique-nique abritée d'un toit.<br><br>Nous avons visité le site le 12 juin 2000<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
            "name": "Terrain municipal face au Lac Mégantic"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.6444069,
                45.8533559
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/d1q6c34vc7shk758hm0sltq4vg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitZFgKCeQ66cFRCJ7p0yRKxMOKwjyd-mVOsfJgPAkyTTjXAjnsLNc-vFd2PyspCBEyERFuWjnD15-etkk17dnMNTxx3zffNRNkzxWR5AWA3E0F5ddtgrbi4Z1ns3fFBYogGqI-qnuvadCNsHZbIkckzwQuCIGKy2thIwbNwYFqWeaGkIaSkzeI213Hu3TkweQmP?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Beau site en bas du village, derrière l'aéra Marcel-Dutil.  Sur la rive de la rivière Chaudière .  Il y a quelques tables de pique-nique dans le parc municipal voisin.  <br>Nous y avons séjourné une nuit le 13 juin 2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/t0cj4fjteicvl34nhdqpu8da4k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit8AnUlDKvMe9dhWXnDyUo6jGIMA8K2lxynMIWD4gat_pZ_Y7GZGtIfcGsFC66Men7eNhFfnEpfEFNDA2em6ZeSzdIdy-SYySzGaE7S8upjdeJ4fYWLVY09wWxGQ2GThfqgWAVETkM88vs-f81eQljRmErN03Vkxo7NT0GfaM3nmLFgBiWJlAK_vIonOjSeM6A0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/eaa08j21bnefnb01ehuvmvbsos/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pivoajoy5PvAik7-OXeQtuSjjfQlmflAOY2ZtYeyX-LgFGi5zG1illZsL5cn4xfMGAl9AgtxcHGRXuk4yttvVlk7nW5Cs7-QheRE6z_7V3AO3KqPfp5jD3eAG0rls95Ioj2rBjnUZPcr_1E_pYiNu-IAM6wZVz7_cIPmkqo7qBijaQtKH9oZy5rHQU_a3dir-rsH?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/t2cqu0m7c5jf2le9qpsgeut8sk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis-K3hf_G_Dr5AGbTIxQNUh2p8zak7mv4x1S-tUOFNFq-IuSMuPZBNoUYTuu5NvrazTAlLuZVQRqo3uFviuuQqTfTNxMM6NZmPW-M0VMQ8ZtDdt4th54gduf5XkYTISXB0VjaPloPra45BeTusthaHFHcLz1QONqZHNGgC2IiWQ6pj-JSoywn1ynhcvVYfcwPLk?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "St-Gédéon: Parc municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.3710994,
                45.455555
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Apparemment des terres de la couronne. Aucun service. Utilisé au printemps 2020. Bruits d'autoroutes pas loin...",
            "name": "Secteur boisé\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.0199306,
                46.2476616
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ut91d0n0980mimhnbaq2trusuk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivMnV0RATorDtOoPBvZvxhUFoRBHQsksGsVB8dNhEHDFfvslMn6IY9hIVQ2Anb53akp7ckgvuiFrTghIOk2go9Qau0mhGblvX55j3yhJ5UZOou6_OJJEq_NaqIWQr5X-Ru3oDE2jnZwJFckoAlgKgujorEGXuTqzpgMNDxAQOLpXIadv_frxBXqVJErqoHtP2Up?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En descendant de la route, passer le petit pont, à droit il y a un petit sentier. Facile de trouver un coin sur le bord de la rivière.<br>***<br>Il y avait peu de place à droite, mais à gauche (est), il y avait une belle place, par contre pas à l'abri des regards et avec un beau panneau camping interdit! J'ai quand même passé une nuit de repos en aout 2020 avec un décor fabuleux. À mon arrivée, il y avait des gens qui profitaient de la rivière mais ils sont partis assez vite. Pas de dérangement.<br>Possibilité de filtrer l'eau de la rivière. Pas de toilettes.<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/sepk71tre7hgqh84m7cevpgro0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivHxvU-sH4SPQ4JmaGkDTy_0YTLavFTgWRV3F_wQOs872_4bDGvJk5u0t9vEchW4iqMIkhpTV6bwFqZpYc3XuJlz-kM-ZRAEAuLUr0y6NPuWcmqWdJwOGcMyCeHdtIrlPL_dVBcEZIRjo0rR3KRiYCdrfdj8urVB4jwK2F9rQq_Z_J1J84Dm1MF564qsWLIi0C1?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Point 60"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.81255,
                47.953837
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Détour de la 138 qui peut vraiment valoir la peine. <br>Possibilité de planter la tente sur le bord de la route au bout. Les sentiers sont magnifiques, et on peut aussi camper sur les plages. <br><br>Dans mon souvenir, y'a des toilettes. Une rivière aussi.",
            "name": "Baie-des-Rocher"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.898255,
                46.8658309
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nvr4pi3stqgabuverbdmsaajnc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis8azonIDrwENmDMm_bR2CeYYDE9CF4Yyou7_3_Wer8eokZUIl-V3W5vVpL6-I8hUq6mNASPsDXg1-TLeL3qmN_n2vigpA4HfwIftDHmSOD2MtZngYxGGjlQp8y6HmQoyJ_ELZtTvVCGNGYVct5hLLaZvpg8n3mX1JxVbdbuuRn-WdPDxPcndEiT_qYMwUtMQHD?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Avec la permission de M.le Maire M. René Laverdure (sa maison est juste en face de l'église, en haut du village), nous avons pu monter notre tente dans le petit parc ombragé adjacent au cimetière, à coté de l'église.  Eau potable à l'extérieur du bâtiment municipal (aussi à coté de l'église). Wifi possible au restaurant O sommet des Délices (ouvert du jeudi au dimanche).<br>Nous y avons campé avec bonheur le 16 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ro60gu93ogfk0icnnm2796uksc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisrjfzLCa-uZfwPXl8xQQq6J709FUSFLPsUslQrzBZ1CiWK0Xh9-A29jVRytI9TN9fVM-Mx-QQELv-aOkRDbN_FOhJskMM0pwloZg9QAxd-eY06kDNykE5CMKHgyHH6fSZ713bJG2lLi18MrovhlI0b-KFQ67-qGfL2WagbjAquhRt2QSu8CoDl6lksPxbncZN0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/lca8sq4otgn8ebn4fvfho57t34/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivG-izsU0Nyl6lb7_MeJ4Iz3vMLxf7fA3HUxvwFcHKe47nSGpDDa15yg7U_IZ8w4vZUsNZkeD-byBbuNJ2MMqwBP1bIBoq1389gDuSaGK8ccj-Ht3jRPIdvZB-uobo39BaV9rk914W4Gpzgl-p03pyO3u7kZ9VNcS3w_DJ_VrHGqsjQy4EDkKZteT2eInAcR3Vk?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Village de St-Adalbert: Parc municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.3210012,
                46.4382471
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vi06lh6cndteangl7101mtic6k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivDbv2SQfN79iwLZJbTNnaIxeFWfb4rXU_8WC8UNKZR7jRb7Ot9sNKWoAPLjZRwog_UTitfGj00J6RcPWzPFGPk31Z9Ic56ixrBCgYCp00pG0zawzIYYO7NTKqd-nRNT6QdxR0KxV_ScunOD_6yEUjUuIluQb5rma4aFtfm5EmRa-HarsEssBOGMseGEQgQI5c7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Vaste terrain tout en verdure, en retrait de la route (300 mètres); Tour d'observation, tables de pique-nique et abri si pluie.<br>Site visité le 16 juin 2020<br>Nous y avons campé avec bonheur le 25 mai 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/q7rth9shapidf06tthm5dl1p40/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuVKzD9jURtlUF211k-1oCa0K7nBGyfE_FSGyfz2TETcRpfVF1_Mq-3VP-Gch7FwuRM-JtMgsxzp32j3q3aTPGwrfI9jOOGeqrnsW0Rds13seg47MmZPn-o_MXDfBQs14oe6QZfu4uTdWcQp02kZzbfvXicdrgZni_9pwXYTyQvWCUmFAB9PdglKlr6UeCm9FO9?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/86lo3m2crhhir5167qnko18qu8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv2QRlE_Llrm1ETb3yGZE1TYqtzmWyj2qzOrWnVlmRFUzeb7QAUKCtEpidTLBLkC9BdT-zWQq0sbwFvXgNj-F2xiH0hTzTBtnILO3XXCVy5xAbuYaQ3APmuKYU2_liX5FNMNLEohhroQtPGiQqatVNYn1_DD23PVgBG06X21P9IxbZgU3UWqHTyumhXNLVc_9hh?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3n21ovqttsp31qm2qs0gl3sq1s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitJkrFu0StrtBfB8N6eGApAw-eQSqjeGuG4Y7APqgysnWOeXOZ9kES4yKOgu_1JhHHkuFuB72pMiPMUglbjHyS7eNC8WQWF-3Ef7pSa5G9ptTaiKgFz86Xn2PT8PccOPgwk6RazV2K9FLebChdwvUM9MzjJKl1BhlDch6tlcXAmBhmoPVRMatRC36rcwI7MdcCW?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Ste-Justine: Site historique des Pères Trappistes est situé au 700, Route 204 Est, à Sainte-Justine."
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.0052421,
                47.1086996
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/46342n1u6e9v1gm82ud6vof0hs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuAmIuut4qC80cU6VwYBXBS8mYfbzTQY1xYBfwK6eXjEVU5JOUH5lpJ0lFuQfKnRe9QG6xihVHQaKg_3GSfts5rwWmNHF5y-Qefv6o-NPQ0vBBiVWkkEaWwCcYrGb81641ZKr3sVJug-Fon3r9y-TgbPgtBPXqpTeSw89vfI-7MaaoyN-cD2CyNWBfHhDf3zFJ7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Plusieurs tables de pique-nique, dont certaines avec un toit, amplement d'espaces pour y monter une tente (ou plusieurs), jolie randonnée en forêt et en tourbière.<br>Site visité le 17 juin 2020<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rarlulv568p989jk03emhikr1o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv3Rkee--e4K4dF-2bf67HFJpoWly5CawHgOM0LCMEO4ciN5OnjTDb7zAuP9zAIdcI6f7UM7INrCVlGaAYKu0hyvGA9wMgNtL2fmBBgOti7FcY4CC9WpSOMFulN2-kdCUe1hJcetxYjoVlbwnqlrox1rgVXp9Ln4ntYiSSnb2A6CKqddYrTzxuIMqacpF4Aea_5?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/qln05mg70h40no2m185sikcih8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuaVUxkySO4ykwRIL74yZN0b_8aV84_wsihqhqAvtv_DWUzItR3y0w9QulzAcLg3KAUWlMq7SdA4EazjhX5ZEEGb_W14Gi9GdiRDTYn-k4hN86Y8dGWKLc4A4ERd2zMtPTn7FzS96ueswhrY9ltC7S33mQGqFCp6ncynBZ3ZOAYLGpOsAYzNF8IyrjPqqMsj2d1?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Tourville: Parc ornithologique du Lac Noir"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.4846667,
                45.9367665
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/d8lnjapm92ps7n48jqsm1f6fl4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuGA-WXhmj6yzXJliFwm7X1aI3f3V3czizoHlYSOURdpANSo4okjqyXrTI9Jc3py1PC4CIw5h2pk5ajuKD0ICIP8RSioMKoDbJJJaXhxusUngpdEa7QNMZAa4AbRT0WSToh5yUr2w960gV1IFOdlYNCghV9NcjXmNbQGKBHhEpEUcDsxMWk5E3rYxZgWR1oQAIo?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Jolie halte municipale dans le village perché de St-Théophile; Beaux arbres matures, beaucoup de verdure, tables de pique-nique, gazebo couvert en cas de pluie.  Petit marché d'alimentation tout près.<br>Site visité lors de notre passage le 14 juin 2020<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/d3qqukvu421jmb5msqj2vmnnas/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisuvv27K7fI6LWs3jbdqlqKnyi-7giCxe0ASKjSDPO-Zr8HF_k4TpJ6hgkH41yFY5LI_IY251B2gdMzJNEWMTLhoE9FbbCXF_xxUkR__RTqKBnxUVqZB48friocHLATNkgs_ih-FzOl6bXSMBjpDEc-tFAhOjkYz3qans5Vh0TQp6O07BTr1Ql8Ce1PRqxAZcWs?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8usohjlo6i1e3o40fn759djtj4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisSuMLlZD4nw5h9cOBxDlxULR9__Xj4-6Vyqwy_sUxI2U_K-t4WMW3CPcPSq_9G5PsoQ0VUUj34_Bax4Nuhw2BOF7nAIJCbaUD3M_Gjs6MnaGOYzBT640_EOtBvJvZUgj4mN5eObconm06-bvWy6OmfsPpOuu851Zt_70IlWVfugeJ_Tng5rGYMQ6LUqPmwhNKn?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "St-Théophile: Halte municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.4183379,
                48.0309322
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dem7a6pg6b5jfkajuppn9tpva0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis9BHiGPiK1xZUqQyCZq5hp8e4hGPCxxSafT_-jVRHg7q7CytS_6qPFyFC4IHPfdX0_WIQJEs9wQAyRqKpUX00M4UOJlQWK4ZyRY7PGzEwyrOJ680CMWrRKMBD-efHyImkcSyti7Uu4-i-peYntI_814w9RgxROO10GfsytQ-M00HLYPrInuraBztfcbpCy47vz?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>juste derrière le Musée du Squelette, un petit sentier vous amène sur les berges de l'ile face au continent. Le lieu est identifié Parc du Portage et semble \"publique\".  2 tables de pique-nique, toilette sèche, terrain plat en verdure, arbres matures autour, vue sur le fleuve. Un beau spot sur Isle Verte.<br>Eau potable au village, 4 km plus loin.<br>Nous y avons campé avec bonheur le 21 juin 2020.<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/gcshqt44hmro6d367j0plhgf8k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitJ1shGcWT5M2pJn9HWSFPBJgb6cx7iA1qtO0vD9c0eonj5PQJZ6E3MtHbXalgoaim9NNlZdDuW_rv833mX3V1a63wHzgl7vyfYiq30NqlOc6WXPgZkYh4l1tPU9HwjWvTJ76LuNmm-sM5rx6-wctKoz5NwNekgZdYZ06dIcfJv74yImzuFUL9_YWtObuG_X2XI?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/10ovc9a644qfuf8rfr0r1d45p4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivN614KHSQCF3xeQk60FoB0bj2bbCpUO9jgL9Elof6NwndM6s_xIpEYrWwjs1ZGZOSCSKomGyA7ceqfZ9L4u_YbxVeRt8d6zbz2r1YiW53s-oGQh3Gwuow2kFq7kBKHJlQTNbRiBCnxEP-kN1ongBKfFwKwE9Qa4KHPRg3oFRWzSnuc0lnzcPl5f5G1g-rpTgM9?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/htjrgvoc51sp8mfprvgfom90b4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitgtv6pDfCFV5k1wFUfUh7QuR-bm4Zp9-YY2MybfpQCq3b-QGwoc-7FWNkTZni81-tM-QCB9E6eJFq6J_c52zcn5Xam1sWO1w5vPJ4vKaMM5xvTIEFM54iT4204Jiq5lzYFaGUmAR__FBrFSZNmJfWNaBhQPllwcfZivsXdDvX4Gwpz3jrHPfQ2u46JAXW8V2yT?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/br2tpasvusljtdtn7lgj0h2i6k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitYqJ7xlDVyxq8IPvDHk9kuvmMIC75fFFxU49wZHCwBQtcxNLxOSuegTPcneC48YiBV01ePkEpEbXWAEUF852ZLWy0BVHgrQx_rGG3n2DiwWkiePB54_f5i8iNG0mVIVXcjqeHHLTPWNe8hcqmchVHuwHoxpKuv-9tfq7JGPqIA6DSVeriIKfQ0IVWyFBtmqyNU?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc du Portage"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.4448772,
                48.017302
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/0ktki6spqc0q00pfpre76805q4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuoBYlI31M6OG7b1kJAz9B0QpkWTaEGx6ZlYnEQuLpahjMAym5Y5Dia98hTCIZvTNhpPL_MTXwndQ4lHEPgSHIkCXehdjhztgfpUXkkHOokEdIdcJjIPA1Y0ozgY8pAbf7ISxS8bN-RfY7csBnsuXf30Y4M7bbHioRpwel7J9DWKYOxJoRpIC0LhLk3HP9gmPY1?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Grand terrain en verdure, plusieurs tables de pique-nique, toilette publique, eau courante, wifi ouvert.<br><br>Préférable d'obtenir une permission officieuse (ou \"spéciale\") auprès du maire, si le bureau municipal est ouvert.<br><br>Site visité les 20 et 21 juin 2020, mais nous avions précédemment repéré le Parc du Portage, face au fleuve et plus discret.<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
            "name": "Halte municipale, Notre-Dame-des-Sept-Douleurs"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.410919,
                48.0416418
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Premier site de bivouac en arrivant sur l'ile, mais pas le meilleur.  Conviendra si vous arrivez tard, êtes fatigués ou s'il pleut trop pour continuer ...<br>Possible de monter la tente derrière le bâtiment. En verdure; Pas de toilette; Le robinet d'eau était fermé  quand nous avons visité le site le 20 juin 2020.<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
            "name": "Ecole du Milieu (halte touristique)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.4230461,
                48.0518691
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/6m7feabad21v9jb9gvuk5grdhk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu7Z6nuZDtXciOohGdGr98hNg32PtXenlm1ovUX8_xGjF16SZ4Fh7i-ZfS1g-sg3ooshAHC-4cGIypPx3efkol83xHDqchlHk820Jqweu9jk7NiWlrFDXi_rl3JWNcOwELDfpi6lLRdtb5cSEg_-i_-WYFhRdRhXY1aU0KVruG7GKL9yY2gMoOOpPOfG5JmDjbX?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Le Phare est le principal site touristique de l'ile, et pourra être assez fréquenté durant la journée. Il faut donc venir vous y installer qu'en début de soirée, et quitter tôt en matinée.<br>Quelques tables de pique-nique, superbe vue face au fleuve.  Pas d'eau potable, , toilettes pas accessibles quand nous avons visité le site le 21 juin.<br>Quelques maisons servaient de gites aux touristes jusqu'à tout récemment, mais ne sont pas disponibles en 2020.  Il n'y a donc personne à qui demander la permission, contrairement aux étés précédents<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fn5u7hmdbrj67rugmgjjpq0fpg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisqBSFbqsyrzJ0ueTXYI6vdF3rHmIPj34FiqlD8bTusk7AwgKPO41OSHJ6W4riWwLQk-q1ov15mibuAvGrrGSYDOge9e7CEA7r9DMRttIP8AubM3pQ47DZ_hOuhxFUvs8rDJXwxYrIYplNA9vDMXDwxA6ua-6X7y2l2Rx9mSb2bPoafz_D2hyg7yvzonjTe9cDP?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nhlqm5la2j0t3dc3rv5nlqfj1g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitOBD2ksY8fdmmipm6xRjt-FrudgLO0AnaXWmn8dMTXFrXbAlnGUymQhrSEWcge7vJb0MaaDcazVwkIpBJSRax1AZMQxA4ru09dbBmXPMbcCAGicXhvKADzResHAqGiE3JsI4ge5xssnn21ylxzdGYN3Jr8KGSRB5yu896A_InRc8kTruZbVehL8Jcuq-S5Y7s7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vr0cg70i7s2qeapud3pmiidpag/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuuxwlUQx0r9axxj6TqEGUDwT2FTXononfs3fveox6zfWJVbKB19sXD-w1ZqZFA8zmnc4lEE_DAjDY_kdUuquber5G7IgMTLwwjjvCI1gNoYOV0RIx-BjwfpcqAfcgXUDJExtFlPkvt1BWiLkXSmSI9zIR59pcitx8AAgmhUmdC5Ki_YlZoV9TKy-XfwGNV2UGm?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Phare de l'Isle Verte: terrain aménagé face au fleuve"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.315291,
                49.1880166
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9il5iuvm2q32g2plv0b1jh8utc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitQVxJybiPWP0ACuY-tHlICEsLjRbDrJKVjtTeRr5WqdTYTXcUP9aYqC1mw8OmQNNsHMkidd8mzlWU41bbu5VtZ9ZrEsw3UkMt8gXqFT8V3RhjW-7OTxrLWOfJRjH42pHWDg14fNTl85Hj3aJKljrhQw2D1TQM4o8uEi4hw7kWZjlcH-t1g8d4Jz4arJ7mvCUbj?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Dans le secteur Hauterive, en retrait de la route 138 et de la piste cyclable,  un site magnifique sur la rive est de la Rivière Manicouagan, près de son embouchure avec le fleuve St-Laurent.<br>Le site est assez fréquenté par les locaux, qui viennent pêcher au bout des rochers ou voir le coucher de soleil, et le stationnement est sans doute bruyant les soirs de week-end.  Mais juste magnifique pour camper!<br><br>Nous y avons campé avec bonheur le 30 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/val1eisu962203pn6o017kilog/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv1UBOk-n2u_VV41rbv1UmvAaHI-EONUZzxFo1ywi7TRQ4RccbYyRjWJvWWm-DxbsTb6ykHwF84h3-58ju_-UbQgHlIJX6mB9gJG4i_QCVEeiaNtNYaveY-62DCJDmifeYCDRBv7t_4dmRBKWscTL-Rw5gBe3nOXaCShm5ind-1vbcgUSFYBmoIMc6r4GEqP1RT?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2ol9g3i1jtnoqi4vn3opnnur5k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitmn6QCuf4bRZFEKUVYzl6wWiahwHU14l_TlV52BeXDba8a2o0J1vaC3B0B1kku-wbINd93y0GJn_AvyOPzoHeNZuiCib6AhGYcyVn7twokBSPpViqHPLa_nfSkmKMDnA7XvXzHD-6pQNyaI1eDjPXwjyN8CdUHnWFSX0AF1-UhPWUARh4UPOSRWSyw6I2niaun?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Rivière Manicouagan, embouchure du Fleuve St-Laurent"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.2987013,
                49.4222765
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dte65vhugacpgujd61msuka4p4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisYq-_UXNJuIP6BmE7TfTu_Jvy6lNqXIR4uuAYGC5Qk_2vlchLGcFpQdiLx00AtzfpjPoPI5I6uTjVY3Ols-ezg1IdFx_zEKybR74drW3xpMYsjMR7Vutqqy-wxzOn7R58fsspDoYnzs4veqVn8_XftzDrvTelHzo1IgrTJYWhM8aBaTYuZYM1jVdNQ-ehk3QR8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Très beau site, directement sur le fleuve, avec verdure, tables de pique-nique.  <br>Toilettes et eau courante sur le site.  Aussi possible de recharger les appareils au bâtiment des toilettes. <br>Nous avons visité le site 2 juillet 2020, et nous campé  à notre retour de la Côte-Nord l2 21 juillet.<br><br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4uuskd2lvkfakqs1dvi016u2ls/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuWUZf0GQRUl9S5Hpf_LDFWgj9_bnHbNLkmdufTSlqz3F_YQjfukWMvxb455qmXsYi6GXp0oF80-CVyEdsVa7ubu3zgevb5lG0NTzKtau4SMjP14R28jIkMJ6mXH8S7-Oq6LTbhyITwUrv3wP-un18oFnGkt88GriR5SgZokVZjmM2Wr20XTYlmZyS-9VKsl9H7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/k7m8umqn48bo8oadf0dnojck7c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piuu30REaJpYf7ZhkMLJpSUf7R74i0_URpdaYf9GOZsmcTuzKyVYC4vqT1ZHmZAsAgyvzP3l5zGcacLNHXBFV7GNIICH0HTUKa3iQd8WJH0Oisa1veZcxCFforZkphstfuzgmWvYaoUvYUBU6Yw-HYdU1zC30u4IVo1AAATomcM0z_InBQzESK4cZS2aM8Nx3LcH?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Baie Trinité: Halte municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.8709774,
                50.0187582
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/95ubqj8r4alc9vvmbqlmvj6288/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuKaklkblrhV3dM6z8eqbxJ6j6lJzWpYiHVQqPkLE4ZBSMugxLFlMCH0WQt92Z0ReXJMNjT9DFXz_p2M62W_V61pTkVIhpVITvyLV-3XHElzbsIOM7mFvedGV5EsVw5JUis5-4sxvwxWYOq6it7P6GxQ5PfjG1XegUsAAnRey7QTfEW7DQbKqm6k6JpBu4G5ZGL?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>en retrait du Chemin des Iles, tout au bout de l'Ile Patterson, nous avons trouvé ce site magnifique face au Golfe St-Laurent.  Belle verdure, tables de pique-nique, toilette sèche, pas d'eau.  Approvisionnement en eau: possible à  la Mairie juste en face (de l'autre coté de la baie, environs 1.5 km !)<br>Site visité à vélo le 3 juillet 2020; De retour le 20 juillet, nous y avons campé avec bonheur!<br>C'était tranquille le 3 juillet, mais plusieurs winnibagos parqués autour le 20 juillet.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/l1qfm0dgk11nf6tjk8uh337jfo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitnuKDTmLu1EbeOtQ9yFOETGJJCr9IApnVQSpvSoFy9pJ1rQS463NvdesHI8dYeqiFYkl2dtSYZGFQFn6KCVuevL-VnRhH-NYasNr75NNUzu2vCeeVkvAV5-hXuRvtwmZLwCHGTtS--d0lzqt9W6qM4kLrQ2snKEA5HiSqt33xNqLDo3PdUDcBOlCxWL5PzWO-p?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4nse1jjcnsbrsec0k458k3l1fk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pithxoiadhc7nZ5alnPQdy5-BMWE6H9FpDRkG1YZg8Ufi5BLcihgy6zi6U0k2dov_n5r3aYaxLvpUVP2JD6s04UocFT6IAMt7eqe0CwzNLRJTQHhvvrNBacMzgoYarNgkL7LVkVDkoA2V6XEok_qBqykqP7mQDyCVeFHCTcVyfjwSuQ06NG6olo61ah3itN28T6I?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vir9d1siplmo97n1pl2bqhcpn0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisqnxjQddgETes1p96QrtJRm_BboRP4IqDHep59zEUHK1-D1lV2Y8h6BJXt42KJGGYORlhXpkJNC_iCqEq_eHqLjinQ05qbGTQjHUv1AZobVRKv4Wuluvsegcn7mNF-qtKcjXLFe08xV2XQFX0dMHc9KP_e0ARBDLl0Z3dBHChgWDoiF4Rh4d_8SwBC5aaqdTk9?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Port-Cartier - Halte municipale / Ile Patterson"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.6960964,
                50.1093327
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/r8ecu5hg0ifg5r7nt62eptfn0g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pivwoe0GAAeRsJ7Gku64J3zwR3Ej8FaYnxrJllx_0GbhgIC9ptQ7KIGz2DNAJRnfai7Kvst7JhUVJAO83ZsuFlhcRHRyTPAnZAFt5j78nJ7GYH8NLP2Ox944Fv-tObCmQUwMT5yp3s23NxDGVIOVZUoEjI_NUCk1KZTFQzvtuZaXceAKQDgJHH7oGUd5GvQrt5Bp?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte municipale et site d'observation des marais salants.<br>Bel endroit isolé, à l'embouchure des marais et du Golfe St-Laurent.  Quelques tables de pique-nique, toilette sèches, gazebo semi-abrité en cas de pluie.  Possible de camper sur l'herbe en retrait du stationnement, ou sur le sable et la plage face au fleuve.  Un site magnifique!<br>Visité le 3 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/6h3dj75g5fjmpe4es0k365sl88/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis6mLAXNN3umzGp2JUAgdW49-uCsYS31A1IbA_4sJasn1JtdwCk9g3-RtkQxi2CMa4w8w4S3Sz1jl0fLhvyGSAZzvwb9d63QkP6vUkcPtKxvuKyaaC5T0-9psw0niJWYjcGwFT56yUYxuWWhMi-TF4RFEnXQy9B72izVUeuXN9tAgLNi6LIZUm-dKqi8u-cSxbZ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/qkc8cck8l2qtea4ui99813ulcc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piul1Qldoh4Rpgs7cu0buGonn1C3d82Q2ieN5-eFH8J-071E5lWfBCySmC4F_75S4wR5AIuJXP3n-27PNFsxOTCKiNN6wai9WWggixVbTvHJie8NcYqPCfR4EMiHLbToSMRVzJz6EgR4XGG0TPS0L96JCL-WaGH2rlVMJPKFgbnQxgQr9nf-u120xwjfsP_POrEQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/lf6sodkan7bsbqguipldlrnk58/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitRrH2z0HBtBiGXlCmTio5u9ag9Z74XgNpT6cv4xrATNf5fjrWh6r79rkUJmIE-3yYO0hkYsk1sj9HCueXBFibZy9GPxAF7o8mfxPsAigu4FLuHTpyacCgMXUksK-eCDa62wIZ5VQ8P9zrGiewjVzY9JKIlFAVvZaTHl-Exjox5UylP97r_u8dEqsJYnUmQHKvw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/0h2s4spgu0gcbvltd4k7c4nk8k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuhaFvQGyDkcKWNhPNp1nSAiuWD2Rt_vDXoiIyf60psmbJuDEp7p98HREFpBwCdw9U_Yxt-1r4GZHLeW1J-HqYeotGyBsDTC10BVtW9aoJsYE6l5F5sJF_bTJTNPeLDcszI8Y9MJLp1_2Ydc8AySmp2f0B0dCuT1Hj_wxWL4n10bCA_arrp7fFrEvICMS2xkU_z?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Gallix: Site d'observation des marais salants"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.4489656,
                50.2663137
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/f35gf9pqbocde2i4bbe10c4m6c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivlsxZnL4p8XKtO-G5GVCcJH91Jy3cThpmU1_Fniz0d244wZFhoA3C2DhLOCcwESPHQ2q-HZSqZ9eapMpDrFxbUOBQ9IxH1V5WV_EGuRERy0AHPBFcs78io8bJL9rgbGchW_vW8oE1tkmH4GmLZh2hzQUb6p-JxZjoDS0qeGV3xX7htwb3fdQaAWI1O0b4KEPFP?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Beau site en forêt, adjacent à la Baie de Sept-Iles. Avec tables de pique-nique, tour d'observation, toilette sèche, pas d'eau.  <br>Accessible à vélo seulement, par une jolie piste cyclable au milieu d'une forêt dense.<br>Site visité le 3 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/83knohlrfhfbl4dp4e38j1j70k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitUyHEjsXZqCXRJW9rchf_1SPMM-9IwMMvtZRzpX76VsSuuK1awsXKtAc7Be17_u1VOX5Quk3xuIAewpUp-GJKV189oFeUEq3eHGl7K-utZAmWNWDsWj7jz7hEOQQDFNe3eGxX4RKWRmgBb7PNBZW_5pfk4NTEZQqC-CCn4BKH0VZJa5ydKF7PCpnDNA7coG85V?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/oqb9ad706pmifhep5lq3k2da48/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitLcCaTBPIsxO2i7K7c30Do7KEz3aCB4NLyg73eWj56qfkTWv65yLngHy9vIU8ZpRjhUi-qX5QwbV8M6YRY6oZbWjn5376y6lpHS18B1vYO-3A7qyOGPmEUHPrWwhUDrq2sYMYi9l1LVAMNHlyVhhdjMS5BE0iuYMdrkPUAENdOJaIQRUcmcte9a7gocYrfYWCx?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/plbs4o1jppnc3kqvcgs5mc4am8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis7i1F5zEyTE268IJ4xmV-AQir-6WvQyLvzVvf7B2EEI1V50anyHIaL0VCIe6PB4RzoxFAaT1GmILedbBVt6R9683lNkVnaFeQmeQquXZcp0hXA1HzPzD_Xl8J_DPyiBQfIeJy4276-MzuLYANZr9XEGEE2aoZgU52AfvQfiGhVBV-qgLDlndwhbrEJkPDBs261?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc Aylmer Whittom, Sept-Iles"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -77.2687139,
                47.6930712
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Guérite rouillée. Emplacement sur gravier et roc, difficile de planter des piquets. Un km et demi au nord, petite rivière avec pont de bois du club de motoneige (attention, le pont est vieux et cède) où se procurer de l'eau.",
            "name": "Point 79"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -77.2718898,
                47.7026454
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Petite rivière pour eau (à traiter)",
            "name": "Point 80"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.2974125,
                50.2051706
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/693c8v7k3tpea9svgn5blccfv0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivfY1J7puk5b7eye0G2D2HZ0BMVf3XGvXzKCnViabQ2k20tgacWBj9SCQDGukdGxkgZD4CGTY3wQ5x_4SOFzYidAIgYK4s5t2CcBCJWmOYQxQk0BY100ryF_CrDOzyk8p9H6-yFh3qYmtTvIgWetLqyqNucbhJuHkyChNBaUC8lGnhfmrRm5dzYjCiL7Zyj8iW7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Toilettes puliques avec eau courante. Possibilité de camper sur la plage.  Pas de table de pique-nique, aucun service.<br>Très jolie piste cyclable pour s'y rendre depuis Sept-Iles<br>Site visité le 6 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/qrt91c5j796gm570v6764st7ds/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv11tCuvtAi7g9N8SJPwMSLHgn7QavKATZgPqK_2PR9Fhs8cxYNYdFHwihKlhsI6QaeX-nlhQilH-lai0o9xFYj0dEkMQYRJKum6UpUDhKofhleXUPvwDOuGj5lG4asDZr7cFSW5cCfM8wjS0T0Qyp4fqFpa5w2oxL0cIjMJmENolE0Wjt18ZZgKcgTAyC3aHpV?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Plage municipale de Sept-Iles, 2e stationnement"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.9130279,
                50.2697876
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ko4kmeqrmmfl40429cn7mlq2h0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiswwngWHuA_WdoxTvIxwsGqznrx8eX-KUfTllYZ9ebTGYBDP5whDr9r-ofwTM1s3lN5KZkTS2CTOb8f2lsAs4NFZaI0f2lyKtcOPLqMNt9OACDa2r09OQGPvffaDbrHgeGmpvVks5J3a90j2OW_71zBh503tGWxY6aWsI56jO8a_IkyyeVzSKXzYrcPUZSgT5Kc?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Beau site surplombant la mer coté sud et la rivière coté nord, juste avant le village de Sheldrake.  Sur une petit sentier  en haut de la route 138.<br>Avec table de pique-nique ; pas de toilette, pas d'eau.  Aucune ombre. Un beau bivouac tranquille, avec magnifique point de vue.<br>Site visité lors de notre passage le 7 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dek97h6aeqps34kmqc5v629lmo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitR6UjwNXVtkQJu_9Tt5SVp2MDLMKcGN9dQnJYNRpcD0HzRBClQuySFkjhSB9jqNSzo05ri1U8nU4tE9SvtcxlUY2pTYMMYNbXARh7EyB9f6snNj1qkLe2WIJx9M8n0mtMXM7xZnZ8xoEHoCw16h_TTmdc263y7HPG3BYPNo5uXGQBDKV_FaLWi8nQAndUyKiV3?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/p085c0fc11oc919edk608slr3c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitVzqnT49g-tp2kvOePYFh11OC74KJ3oUVKtiSgtZIyraqWkp4pBU3-p6NSHRYfiaDt8YYdeiOZLR_OFVrTj29Y8bzMvXzATeSSBl41JI74alkYo40Gev4OJXXWGrALTJvMhKiiJj5fzxit6jkY_3gDYSPmJMP2hVK-lT-nDqbH6cgvKQtI7y4Hiw_TtOIF3CmV?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/j7818dgt45lch139ecle0koleg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisnsW6ynFFyMr4Suun0PmQWQV4kGe5XHTHv8i0Tn7vW8gbpcGWuA6GPtmxXvMPYpLtKCqmWOddyNYzz8AfU6JLw96sx3lrF9qFW_9NJeWVY7PNZAlHfmxRIDYSZMuanMcJgiELTiffPaz27Tv140tyNfxjzyu9IlCpCwZsQ-nw3sJXio0XvY8rRFDldcbiiCXuU?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Croix de chemin, village de Sheldrake"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.8548534,
                50.2645768
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9a10g6agq5dlpvnofigcache2o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivLICL9eMzi5tE_nT1RbB9ZhmXd4MxBT4iHEwFkSF6ErdetQTyz0x6oIRrwpEzlelp2KhtkZ9wJGsk8R3RJkvG1zPR79uRUHc7R7JRFwqIWA3F7s1iA4k4nS4XdP6QzAojCU3QVwSuBNbdt4gonwX7VuE6fX0Q2nk4UyUEUZsGy02h91rGNeVdvcnlDnxtq30lu?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En retrait de la route 138 face au Golfe St-Laurent, vis-à-vis l'Anse du Ouest, une halte municipale  avec tables de pique-nique et suffisamment de verdure pour plusieurs tentes. Belle vue sur la mer.<br>Pas d'eau, pas de service.<br>Site visité lors de notre passage à vélo le 7 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3pndfmihh47n0i6h6g65hohm8k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiskpDGez4qEXUwgxAxoKUWn9_P2ERIXUNK_pT0E1xIy-F9wi4stLWqq6DeXtlxZtMuPR8atRl-iZ9lzVypLqFxqESrIwr_vDtFq7yGu5eASLcZXBOjksix30wwEs81AZRdS3WEdEx2gMOXGsEqczcNAS2W-F9UBsPaw3k3EBn3LxSRTNokm29fN56N40-PN5KpI?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte municipale, Village de Sheldrake"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.8193321079016,
                45.0392663048165
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vesh0k6h9tjaqf6nddn915it58/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu5ILVFECLx1sokjj-qSNDrAqTezKmr-hW4Qmu8G5M5lld4_xPhC_VEAVn8j2ELmgFIMNfcSnYe6Fc3ZLpeCpBYC2WXuiGVXaJ2gGCH-ZCOO9bcoAEVvXm019Yt56zgFwV3rQ4ACZkX1QdwLgZqokGtDE2dgMvow1AwRph5pc5tNhX5pq1_HMDYUAkLf83qwbp7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Aucune interdiction affichée. Sentier large menant à quelques bons emplacements près de la rivière. J'ai choisi le plus éloigné, entouré de jolis arbres avec un accès à la rivière. 1,5 km du stationnement, où il y a une toilette sèche, des tables et un petit abri. Campé là en juillet 2020, croisé seulement un couple de randonneurs. Aucun problème.<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9d1i755b4vhvol73dtkkheuuu0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisPV9rOdEDWBdN2g2A5vP2niptppXasjyGgE1Cw_6e_mnZ5jpwCL1DzPgm4tueWNf8p4aP2jm320pDHD_amzhwk3oTDm1muJJc7wCA22zBsVpJrGPA_owt9_MrzmKva_CyFxUzwfBd38j0smESyGswBKeSfxK-C0Lr-rl4ZZU5oHo0S8iiKI3S8g0DV99Y2g4H8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/htmlr9q99km72dp708fla7b3ok/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisv23yTvLg1S2fvkRbaASOTbqt3Z85dZdIh02i_bVImlg7R5kbj1SN-BjztwAhX4V4X-IW1IIX7ytnHZ5breJlsnmYkid_dzrqjF-3OJgHrJ7oZSMEU-pqOiOegDFbAZKd6X8-JgWe08AF8BQI0v_qydzwMEimAi44GpBVqf6JNtL3J_YQR2klk-7Bjf2GVqQM5?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc municipal de Frelighsburg"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.0485529601574,
                45.2151429522149
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2re3vmollhdgtm8lc7e0qvl5p8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivepFtfDM6CtjxQqsqGYgh76WW9KHqwEF1HLeCDHIrWCH5FWh6El_QQxeRFSaLGbkMh1WNTAvI24ebnW46Zh1Uz_HI2DC5JdrF-XGG16vSy8XrW1IekFVExDOtOgwDCUqLkcq1liyFutZEosRTFhIa1TK_rfxxdgJJl1ATGo20QWNgO2kp0u5HZfMDnrweWe2O4?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sur le bord de la piste. Toilette compost et accès au canal, ainsi que plusieurs tables sous abris. Techniquement interdit, sauf pour les bateaux accostés au quai. Passé une nuit là en juillet 2020. Il y avait 3 bateaux de familles qui ont passé la nuit aussi. Nuit plutôt tranquille. D'autres micro-haltes entre le pont de la R201 et l'extrémité ouest sont plus discrets, mais sans toilettes.<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/el5gqiofea964qvl59tbs45at8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitL89jPykRN_CRX0URui7qYIkI33kqR3R7_CtN6XZ1sGHpUeFR39aocytzxSYlDzDxUULiWGZjdbNRPE28Ntx4e89aXtZVtAlWFcHw5HyIgbWbc6KULo4MdDJ3geHXgrDhecmqnLuI96AM0P2Rb3TLW3vDOJBXTEB1bkB6UkLIsPAHLpuJAY3ua2Pe6h-F66QLK?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte de la Presqu'île"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.7439428,
                50.2701814
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/02i3f7ma85sbebhkv2ocj33e78/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiscbTMkyevUrpJ_8iKSZGfKBR_SNolcHQKE2ulWbMHPQsqEqg0b9-8B9GIkJjW0jXd1B5wIKIEDvhAV2OYQRzhfjFvNqF-pEXw2_i12uyGivxeQj0fE8-n8R_EUwhM5ylX6ZgRu2CWyOZ0e_CoL78_Z85GUxatNmG6HH06OL8grXUlTwLyCwiOd5jXTPECntKVx?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Fabuleux site de bivouac reféré par les locaux!<br>Pour s'y rendre, quitter Rivière au Tonnerre vers l'est par la rue du Vieux Quai.  Quand cette rue finit en cul de sac, suivre le sentier herbacé qui continue le long des plages à travers champs.<br>Quand vous serez vis-à-vis la tour de communication (elle sera sur votre gauche près de la 138, en hauteur), vous verrez une petite anse sablonneuse sur votre droite.  Vous pouvez y monter votre tente, ou encore monter sur le cap pour une vue plus aérienne. <br>Pas d'eau, pas de table, pas de service, mais site splendide!<br>Nous avons visité ce site le 9 juillet 2020. <br>Pamela et Nicolas, un jeune couple de<br>Drummondville y avait passé la nuit, venu en auto.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/a612hbf4ah4dchjdt03ra4g380/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivNH-9VP9RayPWEVBI8drK4sfpR4_8GL3sjZrvwBzUQEwo1lw7Gwy3d1P1-KzUsQ8wlaK4P2ZUMyfFzzZTLEW6uEWpkh4rVQrv2TjWpNZ7L8z8eEfWHK7KrcEa2X3iCabWbbQGNeWuTb5Z7gSG9fxF7b0TpeKGMJBKCCl3x7jD8T2S8V74rGAL46H8oKEtVdKW4?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/djsn6e3ib1ppbndp5f360126tg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis2vd-fdtGi3TUcl9eBbHD_CTMWnCfiQEHcCNwB_5JI9NQJV1B5pKv4pWB53i4Yho7gAnJ9x3DNpJxfuujtc1w7nb9cTM-pkEt36TctdatVNFTjM6FPNhlZgQv4gJa1SfuC1k8Sf89dKDwOLAFgJeG4HOvUQ2tUvEXnxKsihLNjTNqg8VlZGnFPO2inLGX0IAln?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/7nc79r3pup5sp0phnbj9lkuobk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivhjxC2B6prH-OOfncEX4oKw73uabDTickmaaqdmG-rlQ9b52Xilrj8G6WeUWp355d3yydYL_REE-L5ons6Xq3f6RAD04vrawYCoIcT7arjp4nYG4R2EdXXwddya026agQ63LBHgwjKkQztxeLdXVJDajuZSrTD_-8nqjyW-H5Q4QNsMbbtStrpQWGr7fx2O1TW?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/kr6i2se1bpk842tv3h147mahr8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitDZit_2xlL25R45YlH7xNBozdtDL4Hb_apabDqZrpi8H-SQX6f7pzZiA31YFevZ1R4_4VLMEGhU1f4wTFCw7id6kwrCSrRjgwbakCdEfWJ9CVIizU9uurOWAh63_wQK43sbXATZRC5s2vSKOKC2hCkJJCFdMpe_UWU36p1pQRWQxz0mjMAz0a16x8HlIAAQQRT?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/biv3e4i5jkeu8re66k3ha9dmbo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivigxBZ8-07sBPGwplLHTPd4SEbRiAIg9lo_F-VuYBAyVE_kqG99nVmjOkSITzd4VxM9n528Ijuh8kX4r4_hoeXsaYzwWz-3TNxVZJ6MqBvE3S16FrfDIIPDyrO_jqc6jiewwkeIbygMklwGJrgvVdRuPsPAWa8JweRFjZjjAznqXRk9Jt9wqgBRrYDqDNXLO1q?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "En contrebas de la tour de communication, à l'est de Rivière au Tonnerre"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -63.5747986,
                50.2503133
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Au bout du village voisin du camping municipal (était complet et dispendieux quand nous l'avons visité), quelques sites en contrebas d'un petit stationnement, juste au dessus de la plage, en partie dans l'herbe longue.<br>Il y avait un robinet d'eau mais pas de table.<br>3 tentes installées ici, lors de notre passage le 9 juillet 2020<br><br>p.s.: pas le plus beau spot, mais près de la ville.  <br>Un bien plus beau site plus loin à l'est sur la route 138, environs 5 kms.  Décrit plus loin dans une inscription distincte.<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020",
            "name": "Camping sauvage près de la plage, Havre St-Pierre"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -63.550794,
                50.2573092
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rmngbldu7mlk66g4g1o5u6nq4o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitgF9eJnEucLgUOUI_osKsQetVQWKNGjBjfoQMncIHohDxfikrCdcrVfW02Ckoc0Q__N1g9ghUd3O0MtU52X61h7tqpp1ncdcEZ4wd69My7BdtIv4gO-4CupX98GhIY31KSjrukjdXP7mX4FhX8_J5Gp7om7hs2BTdBbfVRZissrsydL23p7mE3CDC5HFOVeXjW?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>A 6.5 km du centre de Havre St-Pierre sur la route 138 vers l'est, c'est une halte routière gazonnée surplombant le Golfe; Quelques tables de pique-nique, pas d'eau, verdure mais pas d'ombre.<br>Site visité lors de notre passage le 10  juillet 2020<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hig18u37n4v5am8t7qcfkionpg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisw98RXQKUuSGhoMeT2sgf6UuCHW0K8OnlUCFsU2syEcPE1M8gjVAsueWd0_DzzJG-jnzHg4RBMZEj27LDb2ycubZlRMkhc78UVFClLMH0q77wd7cEg5ByR2YDYlcsicXY1OePFWpjipSzoRbUhzB4kBJ8Zl_LfwQ9-RpnwvXV-j2hmsZ59LK7CYHVb0j0xMm95?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte routière et belvédère, Route 138 à l'est de Havre St-Pierre"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -62.8061197,
                50.2867647
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/tjb8pofet03g0i0p5vddnci4rg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisCHADF1hGZtRB1PstJ4SEi0hUjQ10Efl2XCMN8JKIqWNAUgn-G9I9rh5Qg_ftgOb4_6pCse1GwV3dwbxUeoi5pjQVU1unOZff1XEwN90Rlrw49Fvxhos8iK7Qp35Dml7scGmnt6VFKhvqkZ1qaZYJVY5OaabNYVcCNTHgGN9KWvPcmFs3gzr7Fbo2d-g1hQO7N?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Accessible par la route 138 via un trottoir en bois (aussi possible de rouler sur les roches plates au fond de la rivière, par marée basse), c'est un beau parc municipal directement face à la mer.  <br>Pas d'herbe et pas de terre pour ancrer les piquets de tente (que des rochers plats), mais il y a un gazebo couvert assez grand pour y monter 2 petites tentes.  Quelques tables de pique-nique. Prise électrique dans le gazebo. Eau potable accessible à l'information touristique, à 100 mètres.<br>Site assez venteux, mais abrité en partie dans le gazebo.<br>Site visité lors de notre passage le 10 juillet 2020. Nous y avons campé à notre retour le 14 juillet.<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/g4b2smuslh22fmufa0c8j0ph9c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitAQ-RaaXsiCR3U3veHPgpvHmOJsZboUIeCuKmXhtWcO-bNuUIeEd65DyBDG1NXF7P5FuzL9PMaPR1iqxFDKLgvz_CggxAXPk-cgCFlTSZghY_87p1_09ZSskPeES2uKgipht4dA6LrIzsokj5u5tpT8p6nENfc9F89gDSrFXdi-X6ofPFZalJ-MtOrKO99CNM8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4ih1jup4de413vfh9b3cko058c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis6QNTk4-0ZIc0hMcg4NvNCVCCoLSaAOwNr_INO4utsuHwE5CXsOOiyHzf7n6db-sxulVcRrMZZRxn74Lr3GoBknN8d5muQCOdXqyNutIRMvaXrWkzR17xCJFM31xua7BAJa1LFwf80imqh4HZLAWHvUpvNni5Gm97cyjejRjtusKP98A4uHm8D8YEIw1tcZ_UB?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/l8i82crvbe7csufc5g8fbipff0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis5UDTvVib5-Xx92yciDLPtrt8adEhHOIi4Kg0nUxjSch-pb-O1I9IwWLsgWxVQL_yBPkgCgaIaPUUvP_NqeGKHk1rxBGMBWNGQpl_kY02PNRsqbsyBGk74v2BPBREbSy8FQTJLSOBw8LsFuNHz3_syu7D52KnkI_ecgz9I4HoLqCZ1VVXMHdUOeyttJteflM6x?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4kf8r9a17et4cooknkrj37ck2o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisWuCRQU7b7d-FRVXLBLDe9a6u_EXcEK9NBk5GSIapsaBuuiGh9TB1vFvVXsqQW0NM3OiWTWmzBo5NQiXfJHw9BQQYmb1tg6OgtKtm-yg4XHDaCXfoZwMVkneSLgY8RdF5Pcd3Yg1TQQ-75YOj5GCzbCh1liQ2zDspJkW34CLTrkh0Yahtfi_7fpBavhCCnhEnE?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Baie Johan Beetz, Parc Municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -62.5524765,
                50.2816048
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/53t2rlqlqm1och4r2bfqh84ejs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piscxbb8GrgagrqPAiiHGyZkDMFx2J2qe2cgBjUH_utClX-LnLDOGpAJCscHnN2qEXHisozNzXd9-Wg9i-eyZ_0D7lqCU7Xe2EyzsksCfprue1MuypRoj_EbmoYzRwXyWRv-7sRGkl4PQgHV8qETPzneSgWWF5VLUvbWY6GE6wzbOFEfUNVuBLd-vRPeJSA4zFJj?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Directement sur la 138, quelques tables de pique-nique, terrain gazonné et plat mais pas d'ombre et pas d'eau.  Jolie plage en contrebas.  Tranquille, mais prévoir la présence des moustiques!<br>Site visité lors de notre passage le 10 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9be31fq8nhmgru72j1iifcuj2o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuPwQYPJ1sAzFeHc2f7MUpvwLWEjACQYejNDH2lHrSoPiTeN0xvZb2_NSaYdQqjGMLZS88TwUt5xEIQPGuvU6c-aUkUkZwE-96Es92n8PaokmxRSKfFI9U1kts0ovxqjd05c2lKRvjOJXQYPjYp4neSEFoC5sS1ksY2TuO3wGeLEWcTbatyrLmdeicXE7OUGwoA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/d1h8q92qm7nid24id0uffvs364/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuJCEVswyLUBSrn4Pqb_YQipRs3p5fsjb9m_LJILTVSfaSdxvfLZT5ek91IY8IQQgvMieIzt66vczmGIQzJwA7rZMdYZxiMuSxwr5sWwCLSTsOI96wu4nFdF6n47yx5dLWpzteqHG12T9r_swzfqSrkEblCaC_yX7QYUWT3FMDYg7MItuDdbfBgjC0kC3ovfWPA?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte routière et Belvédère, Baie Pontbriand, route 138"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -62.1062603,
                50.2281068
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/q1mgfvk2q5s8v51kss4c93nv3g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivRwiCXGyBq-VbmSo2mTpe595oGo4ycY1cmz0FszYXS4szPZnF58_S7NNHtVRN7S9A4pXk_ZCoCX5DUlmO9arbnaD2gblOYTCE6HCdHlPYZlrxkY7FCLIaVkB4xmRBmWfRAguNN7nHYpoL-ioYl7ZI5TAlOo-23wsUjieQIX5EC0Fikn82BmqamaRRBJM30IDP7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Terrain plat face à l'embouchure de la Rivière Aguanish, à l'entrée du village.  Table de pique-nique, chaises longues.  Suffisamment d'espaces pour y monter 2 petites tentes, mais très près de la route 138, cependant très peu achalandée ici.<br>Site qui conviendra si vous êtes pressé de vous installer et qu'il est tard.  Autrement, de plus beaux sites pourront être repérés en face, de l'autre coté de la rivière.<br>Site visité lors de notre passage le 10 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/76tv5deoafe3a6afu96eq4mrvk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiviDVO2Dk1sEFmAZpWnbPbYBxafu8s4gzj08L_fawW_q1qmj4C0gRLKtscrZrvDmETsMbeN7S59KBds5F8kwxt-C2MaAEkD9zfHjcJ10fh_2iVfHqEPJ5aesUEL994pXqWBOrSo4-8pWm_C1Xmy9zkaL4lEVw9aIcRq-o9PMyKtE4mfsaJ9DMzOBJM7mWhRAbmX?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dg08232bu3rv30rp028bqn83k0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisJZXpk3YXxreB8HAXf6M1ZMeE5Bxq83xBT0Jlq7agol5Wu_WvUVkzFmTUo_Bp6sMw0ewR9fiMS3BrvVxKVfIvt_V1BXRn6-dS-9SHmqDSMTp__NSM3ew4bsdyAD_j_IuMrMv266Nk9uiMyAuKfeEeYTdXusSKtTGj5QTb713nt4S12QPPhqTFrb3BlJ3TwOMQt?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Village de Aguanish"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -61.8189163,
                50.1810058
            ],
            "type": "Point"
        },
        "properties": {
            "description": "un peu en retrait du village, au delà du Café l'Echourerie, plusieurs endroits où monter votre tente. Terrain sans service<br>Site visité lors de notre passage le 12 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020",
            "name": "Natashquan, plage ou dunes"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -61.2530683,
                50.1968634
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/oejv1aji2uvs4perrpqljs22tk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuOpzRpnm6AfPTgKL95_RXsHUMfH1G9rTYQw14mKmXmwSd9wGBxwc7aOdn7s4wIvixsEUdg1-LKVKdOUmyZXDxl6cq4mgSk43rot6t6JPIMf_-Tj70Xus0KAU8nFaydoynjHaNJf-Q01GMIX9QVpR1M6kohG9pxnQcn4pifqraY_gvQ3quN-5SxTLq3s-2lRpPK?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Prendre à gauche à l'entrée du village de Kegaska et suivre le chemin puis le sentier jusqu'à ce qu'il descende sur la plage. <br>Vaste plage tout le long de la baie qui fait face au village, vue magnifique; Très agréable promenade sur les rochers qui longe le Golfe.  <br>Pas d'eau, pas de table, pas de service ...<br>Nous avons visité ce site lors de notre passsage le 13 juillet 2020, mais nous n'y avons pas campé<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>Caroline ajout septembre 2020 : c'est proche de la dompte du village, une habitante m'a recommandée de ne PAS y dormir, puisque loups et ours y sont attirés. Il y un endroit magnifique au bout du village.<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/qckhjtnkdclid1e1sfopnn6e94/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PishSIvqTmZQSdJ6CXoM79yfPgfMIGd_6v7JZyMSHt6OyvlW_CNoUnloVRXOfyas1HwVFgS_Oc3GAC5D2XnjEpNCyeRFmCvJiQuFNBQdyXjdgoqDn1BP-UigRAhTDjw137VyVe-oAi5jJzVlSTrbJSTTg4fiv3byCu-OHcWBlLke14gVaKstfIC0jQH7xGWxdjVr?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/a774erorioto6cjj0v8r0c0mrg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivRiPnX9xQsP-lW37TZHgOMy32Q_XAv3StyoI6IaLMCzyE_Dz8N2NxMfWmJH1EE9MfOP7XBYW1T-OR_LqBL6gWIJj5nEYa50l2nsOzI-tbf6sNd4P-y7xXBcRTJwdIcN07Ro_7BQ1pvTK6R0aRhB4IDxSvLr8vgFuqGAbtMCLE19DgnEFvZ4-PS6l-kIxV04AF0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/d8uql3ao6ac9jdb56vil37b3go/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu7qbtwu1w-V-FUxbmMpG6GobKW71gLO4WYpRkry_K4W8h_PAVMtSJXZWVW4x4q0vztocEjX-T1dSphdM1lhgnSpkvMjROg28ghaHTavOOwcqBUa-Rioh-cewZw4WhNLYeO2_kTZ6aDjdvX4koCBYG0Sq9G5PtEHOODRFXbnTU2pYvmuyBZEeS7fhx2LHONXAxj?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Kegaska: Au bout de la route 138!"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -62.0409395,
                50.2282166
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/bhv2bt3ilu9lv45b577fc9giqg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu3ZJhuljID89XRBbm3CYxc54gLhE5wReiHdZlG1X62gMUAeQtKijnG4-HdKIDtE1SkoU9Wz6ydtu3u5046SmdrKlMMFc_c28hElD9__AqEa9cIvXerhIWgqFF8Kq5aBoF7gSBvl9-pXbm5YZAJ1hcyqM2FIT7StnC3EB8YR0GGLeyIW-DTu3fKvqE-7sryTNIQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>en bordure de la route 138.<br>Beau belvédère surplombant les iles, entre Aguanish et L'Ile-Michon. <br>Au delà du stationnement et du gazebo avec toit (possibilité de s'y abriter en cas de mauvais temps), un petit sentier de 50 mètres mène à un 2e point de vue, caché en retrait de la route.  Emplacement pour 2 petites tentes, à vélo seulement.  Table de pique-nique, mais pas d'eau et pas de toilette.<br>N.B.:  le premier belvédère adjacent à la route 138 est indiqué \"No camping\", et s'adresse aux autos et et aux winnibagos.  Celui en retrait  s'adresse aux cyclistes, et n'a aucune restriction affichée. Néanmoins, nous suggérons d'attendre la brunante pour monter votre tente, et de la défaire avant 8AM le lendemain.<br>Site visité les 11 et 14 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ja8nrgtngk5rqji4l7gas50u2c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivV-JyCNmTtdWHI-8DUm8ay9WL101ku2VBCYR7Inlhids2EZloEOTxX2HBZgH8J63fV3bR0kGELLZ7pcxxFiHgFAixQA8A6yr1c8Qp01aCylBl1ojx5Mos77odXJwgJrzxA-n5PyOU-MbzbnfFjHVDs5xGN11XJQ47V1WLo_leO1gROPwKSfDZNedzSCI2xieRi?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2eats56ug1bel00v67kkfj4gl8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivzImwG90KuKQQuEuyqJ-XouqEkTWz8RLgZyCuJtM_oqwF-q69HaeYtMiNXRXhLrEhRa-YpKqECLmB7VP3JZB4ixNWxqUNvnJmOGW9YxxH0EM-0iz7NryB8TsPtABg96DL5JnaigwteCewVu0uKMHpFdu_hBEaDQpEou0SGLNFh8YXoYd6JZS42c3XruuD-Nwmd?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Aguanish: Belvédère et Halte Municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.3431687,
                50.2849144
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/352c5goe58gksp37gck234pljs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivczB-HKUyvY7I9lsR9WGLGoZxKRHP4IDjGhJ9BY7HWnB6sG2mJGg41vU_RtfLhbAqW9AYabuEMfYPduOyYuTuuKrhYJgvQ2OkidAOaVpGlm7G198jG4u9Q4K27HCDyVJ4vBTUQ4bPVrIWrKVCAcINj0TLUgjVAFuQuSD2zlfcyFzvzP7HJGDiSyflzLxt5MGf9?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Un de nos plus beaux bivouacs au Québec, tous voyages confondus!<br>Pour s'y rendre, en partant du village de Rivière St-Jean:<br>- en direction ouest, traverser le pont de la rivière St-Jean et monter la côte jusqu'au sommet.<br>- prendre à gauche sur une rue pavée, environs 300 mètres depuis la fin du pont.<br>- au T, environs 200 mètres de la route 138, tourner à droite et aller au bout (50 mètres?)<br>- A votre gauche, un petit chemin de gravier descend jusqu'au Golfe.  Environs 150 mètres.<br><br>C'est là que sont les spots pour camper; il y en a une dizaine, tout au long de la falaise qui surplombe la plage en contrebas.<br><br>Pas de table, pas de toilette, pas d'eau.<br>Pour l'eau, approvisionnement possible à la mairie au village; Robinet extérieur à l'arrière du bâtiment, près du parc pour enfants<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8uv23lt8d2etiaac8u343m6hto/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivuIVL9NZO3154OVupr3q11ExHVRfpE-CfXog38IbaN3WjEHZak1IQQ8ywbqPKBX4FbJOaIDgaYL-_GIASiVhzn7lFfima6iBj_XKDAe08g8JzYXGe1Vu5_wlNk3vSxxbNPZZTe_PVDk5Z0MYQtGAZbZ6dC1n4Af0yj7cLOHGrK5Mla4mcVh6dsmgx4vSmza4m1?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rvemar0afgsrarrpi85fsuipkk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisG34QNipMK_U2Skkvtd1y0O7eScFyFh-z5-zEiK7P_e13E3bP5F0LlkP5n8Oez9xiItQ7ZEdMWvyulAn_Ax2fLa4kO2y5JxyOTRN1XM_1gWr674HbaPEKfCryvtEXgRG3hF-KqLyFas02ueCNoPF8SEgwssLeSygYLzHHk_1XouaxygeGMaFJSsLUkUbSjEDGd?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Rivière St-Jean: camping sauvage"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.4187,
                49.25239
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Petit sentier du côté nord de la route avec terrain à vendre abandonné. Plus loin sur le sentier, il y a un endroit avec assez d'espace pour installer une tente.<br>Pas d'eau à proximité, ni de toilettes.",
            "name": "Camping sauvage Manche-d'Épée"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.74358,
                49.13838
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Camping autorisé pour cyclistes uniquement. Assez d'espace pour plusieures tentes. Excellent endroit pour baignade. Table de pic-nic, eau douce à 600m, mais pas de toilette.",
            "name": "Camping sauvage Anse-de-l'Étang"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.38788,
                48.80425
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Sur le bord de la piste cyclable, plusieurs emplacement de bivouac : des tables de pic-nic et abrit, ainsi que de la place pour installer des tentes. Pas de toilettes, ni eau potable.",
            "name": "Camping sauvage près de Gaspé"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.12085,
                48.10038
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Il est possible de s'y installer au fond du parc en restant moins visible du stationnement.<br>Il y a un abrit pour cuisiner et des toilettes avec eau potable.",
            "name": "Camping sauvage Carleton-sur-Mer"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.13133,
                48.10954
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Endroit idéal près de la rivière pour passer la nuit en bivouac. Pas de toilettes, ni d'eau potable sans filtration.",
            "name": "Camping sauvage belvédère d'Assemetquagan"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.41416,
                48.71979
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Excellent endroit pour s'installer en bivouac. Table de pic-nic avec chapeau. Pas de toilettes, ni eau potable.",
            "name": "Halte du Pont-Couvert"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.3641893,
                46.4567403
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Petite station d'eau du village de Champlain. Il y a un sentier. La route est passante, mais ça fait le travail. Le village est à deux km en bas.",
            "name": "Point 103"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.2410274,
                46.6501339
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Il y a une aire de dépôt de bois accessible par la 175. Dépanneur à 2 km au nord. On entend l'autoroute, mais pour une nuit, ça va.",
            "name": "Point 104"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.16472,
                49.7812327
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/v0pmt79rfdk0uose4fh6k6culs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivDG355EY-nyOii1WPvHDL_h61gTicFGVPSNSL91ORKlmIDcTghStKg7xkARgTfJOdvbQY-N_c5vAUo-tCOUWxF8N1DGU97eTq0kTjbcVK8BpRtvU0oLjabolf79YC53mzL4WnknIb3S7WcG1IkpySUfGm8jOFMeRQFh7BOAZLsII_6pMVt_Bha0U4zomsWwbZa?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Terrain aménagé avec quelques tables de pique-nique, face à la rivière Pentecôte et aux iles. Officiellement fermé (pas de douche, pas d'eau courante, pas de toilettes), mais tolérance probable en choisissant un site discrêt sous les arbres.  Bel endroit, bucolique.<br>Site visité lors de notre passage le 21 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/givorsfa2cip0o30m16ao0st8s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis8Kx5vmVKOH40gyCCHwcbcGzYWcrnsOSUSK9wjVGdVne695ODwbwYRuyDJvIuFdt02RQo9WjWCwkXLqpsqg_4Mj8dY_-OqWyJ1Jnnz0tsTI7ipQO26zlZu8YWtRJWXMVUZpkiQjllZM8b4EbBqblW7udmpCaaOAx-7bk6tC1TId4Y3IgNa3A2g2-a9C3JyrVF0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/r41m2sp60d5tbvmhov61aik64g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivRUiKPTrD4ewkiJhOcvzwdhhTdbO0p_0WeHe41cxvSi8SDrDPjLPmi0T3cnyf8a7IqZosGShqAGBYHaR0zqYEg0vZ8OyOQhKOKa7SDPU2f1opnsXAsPfYO4PQRJjjqs6th2A7TlYLfJ4XFEP3oscze7qtrXh3mD9ArXOzaQrotxr_Om7OMlsNSQXwzTyUKefxq?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/73go4e75jn2c8l1mjanvvgb8is/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitbOBlA2tyEfbABzZhCPYu8QPF3QBIYt-2qBhgPnQoX2aruThT03F_Kso8oycNQmqllbFGKRNeqV9oI02POEVJeo4TG0ipeJ73XCmaCRhApaJYA6_Em6iyFx2VhW1q5lVezBD3T4vQVO5DSLRilbNdCB3n-MGCkj2NGnrgU50IxMc9ImAwaVyqs8neObRdBTUf5?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Rivière Pentecôte: ancien camping municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.55314,
                49.57399
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Du côté ouest de la route, il y a assez de place pour installer des tentes. Une rivière procure de l'eau à côté.",
            "name": "Camping sauvage 389 - 4"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.58292,
                49.5963
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Sur le bord de la route du côté nord un grand espace pour installer des tentes avec accès au lac.",
            "name": "Camping sauvage 389 - 1"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.76905,
                50.28504
            ],
            "type": "Point"
        },
        "properties": {
            "description": "A l'ouest de la 389, une sortie mène vers un endroit près de l'eau où on peut installer plusieures tentes.<br>Il y a aussi un endroit aménagé pour faire un feu.",
            "name": "Camping sauvage 389 - 2"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.3273143,
                49.089693
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vq8q2v6h9fiforgr7ffrj0qch4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuBL1sjiFu0b56pJbSLR7SNm8V0TqoK9YTfPwn4txKrFG3dAJIM-nsUZXERjYpmA4YN_5bC8VjSklVswnSc77B6a7FHAWgg_HyGly4vzmxr8vpzWxrVf5xdFDt6H_BIqfEyV_3PvU8aLCSJ7fQfM9SDF0GNHjPM8UjAJMp1cDJIaDJ0qh14d2qp7w5B4yjxaBED?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Joli parc au dessus d'une falaise surplombant le fleuve. Quelques tables de pique-nique, quelques arbres matures permettant de l'ombre, vue magnifique.  Pas d'eau,  pas de toilette (sera remise en place après le COVID).<br>Bain de glaise sur la plage en bas des escaliers, sur la droite.<br><br>N.B.:  La piste cyclable permet maintenant de relier Pointe Lebel à Pointe aux Outardes, et donc de faire le tour de la péninsule. La halte est sur ce trajet<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/snejm7jcir5uvnd5mj96po63ps/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv6IVGMb25qeHh4T_3A94rE_fNTABMVXexPRN5K7UMbk3hR5j0XAKdItOPB4KOQd2jeFyrsYrg5DLKiyI0OXV5LUbkNIbBZ8c1hc01gEfbOxUK784x-Rq75xvPvAuaANWecGtVpyWBatNXGCa50jRq_td93T0T50ipyeb-a8KbvFFjAkfgU64N7CJT0tibiqVqh?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2ls1f9g9bqvv0kpmhakfa7td4c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisDhA6oKn7uwbUFMfjOoUZDOvEUq4s3pEZBD3qeLzzE-Etve4HovevXZ14faKlX8g9WjEVIvRxXdgmw6C0uaxbhlP5xEA28Td3rzWX19PmQn8PGki9pqidk9KCKWF3KWou2vZbXn4Spzc_Td4KjI40uMT9iLzskP6KUw5xszvRsANf-3FcvVarS9u2wnYphpddG?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/0dfsplu4h9lvur7jqrtpj25pcs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis2a3Fq9LpV_46vJuULLsM3ErF-4WKGyKNeZr47HfsuoYFvVnZdHFhemCtnFjuiCZbxTK76BmmV3ldUbQ1vqSew-nZ-rMQV_mk7eZjgC-rHcjk2HEaFsGwO7nW1VaGzmPRxCDel9XlEEIWsEJV4tAB1zfHzHWty493E4uasSz9SCuG5oFSVSdgSwaTT79i2anvm?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Baie St-Ludger: Halte municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.9256169,
                45.654466
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Suivre le chemin de fer sur quelques dizaines de mètre. Piquer vers le bois par les foins (attention à la marche et à la possible accumulation d'eau en cas de pluie). Sous les cèdres et les sapins, il y a des endroits plats confortables. Montebello et son épicerie à moins de deux km.",
            "name": "Point 110"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.78013,
                48.49132
            ],
            "type": "Point"
        },
        "properties": {
            "description": "En arrière des arbres, près de la piste cyclable, il y a un endroit assez caché pour s'installer en bivouac. Il y a des bancs et un gazebo dans le parc.",
            "name": "Camping sauvage Microbrasserie du Lac"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.46616,
                48.57472
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Super emplacement sur le bord de la route pour installer plusieures tentes. Une fois installés, on n'est pas visibles de la route. <br>Pas d'eau ni toilettes.<br>C'est un terrain privé, alors restez très discrets et ne laissez aucune trace!",
            "name": "Camping sauvage Saint-Nazaire"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.4737275,
                49.0809576
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/n1l9tsp5dja1qq5h608b684b58/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuNBZGuCR4oMlFazHagrOkbkQ4pK6mMybzB4iVqDyPP0NimoeoIoODpYiL-zEVR_5W--aXRbXN6fQwY-BlZKdyPvlbOAYGp1wScBzLoGAYwqfTToAfxOzy4a7JRY6oNDkcPD2ObrT8QMXnegEV0I-MLVUCDfpFydiz2hHLQyS8FjSxusi0BbEN8388dZ22-ieQe?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>en bordure de la route 167; Avec toilettes publiques, eau chaude, prises électriques, tables de pique-nique; Un peu de verdure près du bâtiment;  Pas d'eau froide, mais nous en avons obtenu auprès des ambulancières, dans le bâtiment de l'autre coté du stationnement .<br><br>Aussi possible de monter la tente près du petit lac en contrebas, plus  tranquille et moins bruyant, et sans les lampadaires du stationnement.<br><br>Nous y avons campé avec bonheur le 15 août 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/uq0ulj996bm6uf42qdgob0c5jo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivBZdo8_Fh5d766a_K2Sp3-4GFBbG-ArOAdv4qRMWWWVh_wBmkKVB1y41tEBVJ91SCjTJxRBIg9IyrzW0eDfKVD2MIxYfMviZ85D-0MdcCny7oN2DaSyCpO7H4HCmWHQqqXm8UauOwUL60O8ufjaut0tOjswGkViDTACIkV5-d9EH75OyyuEZkaHMNcPeh2pw-R?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ajejlaejl2720kaf0lat1ngo20/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit53Kf64dUNSJQhK01kWrGfTnrV9htF3hJWG2G94JfEpw0iqmXkrrtjVUkMedkIgDEQEoFdJw2_k40YPnA-XdxdQe6QaqSDhxaJ1vOytZ6qTLtREZ89326xLYkN7aSJ39BQCfkoB7NqZg8yIPqVRUmmkCIJ9VQU3fLIXzVSKcvgFpoWxi5-QDA94cgqna_Ub1qJ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/is8huc3e3btq8vq1c0v9skjapg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiscZWH_HILrIJvGGUR1JLsRtFoaZB_Ai0FFB9OQRRbw8JbDj_ESC_JH2abCc9cBgMNalekJWPSRFWAOkaKJe0dKGm3RlPzWilcLUIRmf07kHSnepBtsDG40_7aF7m6QbPk8WhcHn18XmSeJLsXpjKzxkYEhl1hAKW5Wz6qB0ePU5qOC9Fm-zL3zIfxHNzLi4ZVP?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte Routière Route 167 vers Chibougamau (près du Lac Chigoubiche)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.5910712,
                48.7755763
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/i81he0gnqmpp1ph4jqn0cpko6k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit6QAALpQew5XpwQi5aBQqWDM1m664EVa-EK9esOsHvbseY2xlnKZp_Z-GixUSmx5QwpzXBr-5HwYL8YaHGz1A94QexEY-MkGcSjpF32Lvxc8ve0hg69BsPdEKGCmn5ckZFN4yJb9lR7UrvyR22-INUF3AUSxPHPu6KdWEvjhxxym4TD4CiHu9yNQcPiABhiM14?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Situé entre Normandin et La Doré sur notre route vers Chibougamau, en bordure de la rivière Ashuapmushuan, un site enchanteur face aux rapides.  Avec tables de pique-nique, plusieurs beaux coins de verdure, et arbres matures procurant ombre et intimité.<br>Eau facilement accessible par la rivière. <br><br>Site visité le 15 août 2020, sur notre route vers Chibougamau<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/or5s04pre6ue7bb98oj61usibk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivRvd4PDsVseJRr0rffdMRafyPBAMVkuSclZ8prte42fE931D7O7UjOJ7G0q2dp1oo7HeOU140LnQnsjgugl2tZiORGf72hxUab8d3U3aA9XMtriX6myBucYBNeLxc8M_jq4E0sYUVEXeepEM6uz2rITtysuXLicZ2r6ik5JS61xgGX91buOJOaXuttOQEB2bZ5?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/uak5ckl80v61rccth63ntrmuqg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitEvfweKuUI-3mbg0eYrqeCckn3q85PhDaUdpYZLWDmDRa5svaxUvohnqqrvKSYrQZRsbr9YDaRx_VV03ahtk5wr55uqq0WPK8KOtKLHI6rJI0CxxlXZbVGcH3llKmM8pSLZMCMXQeUHjul90KQyN1forokM8Z_zYDh_aCvbZPkzKQhn7BXskM211bLi1GROCB9?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/llvjlpha3coe2s06pl17t8d18s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitsoL84mI3jPXd4zJUrTORWIFCNaXYioJ1sYlre6wdCYHXjLwn5sEPtcb8uaGlmWsY1R7CY33_q6BgHz4CKSnK88hIhzKzmyaTm3v2jRHhIrq_wSiguFokCnN8qzPlsW3QixWp9aAYTEPuYc9f2hjrEVa_1viB1ztzo1lEWs9HkP6ydjfnWNaIH68sjZFZTSUlK?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/j9752drtmgkmrt1urkjb7h26k0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivWacjFMz_4VJwUAXxlMnFIJVQMz_odI1UBWAFwuL7zbbqFmGZ2ytFa_s_mW4R4W8bF7SLBWk2SYsGJE3Nyol009DO9Oo-wAi_y0eAMu86R4lhcSQbHCE-0WLLiLNmc1UpNq3kZbeZkIzkjdw6uLSoW3jVx10Fh5I2rnmKhKWVl80pP8dVgyTkV05wlGakbGs_l?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Chûte à l'Ours, Rivière Ashuapmushuan"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.6453994,
                48.5513596
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fibukblfbjinevdd32mitnjokg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisAPL6f9F4K0AXn9ckvnn0_A6iOQ9JRJZNDbIHhq6FIqFDe6HLiPtd7ZL35zw4RUmfaiC3H4gZLu5JsXPqGwBkJGCCNRSOf7rXH_JElA8CBoVHkRAArijQeNRq_MsDuAN6ffTWUGGBv56g1pxaW2HFxXgAKIounvvK6X9gXxMsXSQY4jS9DwNO_s55KwSCIPlJu?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>A Alma, dans ce parc municipal surplombant la Rivière Petite Décharge.<br>Tables de pique-nique, mais ni eau ni électricité.  Quelques passants, jusqu'à tard en soirée, et tôt en matinée.<br>Assez joli.<br>Nous y avons campé avec bonheur le 8 août 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br>Situé en plein cœur du centre-ville d’Alma, le Parc Falaise propose un sentier de randonnée pédestre de 2 kilomètres en nature. Le sentier permet de découvrir plusieurs sculptures monumentales qui furent créées lors des symposiums internationaux de 1965 et 1966 tenus à Alma. Profitez d’une promenade en soirée pour admirer la passerelle du 150e illuminée qui traverse les rapides de la rivière Petite Décharge.<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/scrveisivi1b8bdqipb665c7eg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv7-bFSLVY7rA357aLKobGF66nEG0EyqkUSsQz9uHOincOYBnKAytssM4zMfAnKSFTvqFsxu7G66KC23iwgNVd_AQvhZRdpN3cBvDTq74QxB8_ShpZSXQIiBSTseBFu34_fzA1Xtm_oInkY5SOp39u5-7Z4YmfFZGuZF2Nx3IXsy6Am35yH7QmdLDf05ZhXBIG3?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rk6mmooeo1sfmoqm7of90re1g0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitcgYPvbYtPZ1QyPaE5JPRASgszd1_BvcxX-lZDNsPcRqOobHKqo7xF7xOz4TzXzWUyPr7qqKiA9wklsYOgW4-w07dYsnSUzokfh8FZq87qJxnnqVmhE1UrjQsIN5aZY8MBO8A-M3z4RyZEaeILhAoUFPbAg6qJBoLaAQIyS4AIL0bLkES5cVyDuN9NYdcngek9?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hsanbf4elsn2n1e20l9nkqcnmc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivxHojPgmRJeFz625KBOXr6fHHhOHs9be_bqCC3VFmkWBcKbfCIVJbyLj49e5mbLSa8RIpaDz2wiAPD1sE1hmzmRG2UzmhusXIgzqZ3aAT1eWczGXD6kw4lUHEeaIsKZgCVXEwCrYzNqCKY11Z3OHSBjdjgPFkBykBFrOw_dA0_0-tYd8Edw802jO3IrLhA_jrr?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc des Falaises, Alma"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.9620844,
                48.4205804
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/sm509ric2i2fum0vc28ueilkk8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivNNmrELlFVsoOlHTUi8rCpbIO9n0evCAjzaSdTjWKd6QV3tFI19jECvrZOu3fWVdEQm_6JvesGxsGzOS9yRMSAChWOMkstR5St9HdEJWcXDdzcZMEYp-S_QG1Bi9dndj7RwqCEbgGCfZ4XQcrhWHxUzbYr0x_feonyjBjRR3q0JZabbPKDBXnwIMo2KpILMIOa?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Joli parc, avez gazebo couvert et tables de pique-nique,  directement sur la rive sud du Lac St-Jean près de Desbiens.<br>Aussi répertorié sur iOverlander, ce site est aussi fréquenté par les campeurs motorisés, mais néanmoins tranquille.  Les policiers sont venus en soirée, sans intervention, anlors que notre tente était déjà montée.<br>Avons filtré l'eau du Lac pour notre consommation. Pas d'électricité ni toilette, ni eau courante.<br>Nous y avons campé avec bonheur le 6 août 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/klh0jbf3dukv99u8u9ujkvsfag/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitFHqo6R-D8fgtxcz4NPgf41DUVdVrX2d95B5KDxIZW6wn4gifR9UE0sNtLpA7IF5H8i-ByzWxzaMCvmGjsPBg24_ITTtN3io_ofmIQzdvVJYZ05ILvyQOPfwjLkDc7B_u78SnPHg0HwPrFMmjE-Vwb_KxPHL-v1Wd01otsJ9R4Ci6xIfMh5znHymaFGmKeFD8-?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte Municipale à Desbiens, en bordure de la Véloroute des Bleuets"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.3900782,
                48.3461954
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Adjacent au Port d'embarquement du traversier à Les Escoumins, quelques spots pour y monter notre tente, directement face au fleuve.<br>Tous les sites étaient occupés, notamment par des campeurs motorisés, quand nous y sommes venus le 31 juillet 2020.<br>Autres possibilités le long de la piste cyclable menant au village, et mieux encore dans un parc municipal de l'autre coté de la Baie (voir autre inscription)<br>Nous y avons campé avec bonheur le 27 août 2018<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
            "name": "Traversier Les Escoumins"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.3990471,
                48.3529113
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nef3t54q3h9qt7mc3dtpoj7c6o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitS5oRC_o1Akba4u-GzgXFyceCsz4XebZv3WPDWBu4iJsYEIlaLWxtcL6n6D4c99Ivb6-ejl9lsWW6ryrfByQ2iRrgvJvHalcELJuCDGtinrK3S4IO1i0k6aIhxzawqMEjlbc7_T-buSmF3QaR7DxeMRhCcZZI4UwoQ9yc8J27HoL56ustJ19dvMq5slbOWJibq?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Parc municipal, Village les Escoumins, aux coins des rues Labrie et .Beaulieu.  Très beau, directement face au fleuve sur la Baie St-Onge.  Table de pique-nique sur le site, toilettes publiques et eau courante à 300 mètres au centre du village.<br><br>Nous y avons campé avec bonheur le 31 juillet 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/27ar90c33pvslauqaspb15nvvg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivCkqkw0waHjJUhZwBQTZi266hWFiJBfULBA6BbvHI_73YHXpFyR4EmlukQfwmAnS4B99KEeqgzWLKnHVN7eRs68tQ5ZHpUqYWXoVG_XlMXMu2zJov_F3ZKL1OpeTjgmIjQ-ZWePe3X4I-h1ypOGFNtfgi-qJuOow8h5ix2WgNCtJbz83kCY_hH0nODKvPRlnfD?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/a94mp9js69vovbm4dnjte53nus/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitwsNw0Ekuivr_Oq0kG8nVJjpD7dPbP58l8HDLilsqXGOnpA-9WOm6tkh1CX2piZlIPPZIA-aY3uzi2EjVsyCxCX_HB3zE9qwIE8N5pdyAT4oy_3txUBlaWOaxjIo1KfLgMoRQolSs3BAv4SnIRF1FwyG_9irtVCVc4JCfBzKvKid2Com_Az-NEQAVeRMiZiZ1y?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/on9nlcpv808uu2vreg1op5m420/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivQhqz_f4bRd0VwLHNO2hGfV3eL7kZANZFqZDpSNfd7vMJfauqRp0zj1Y9MHuKm3MEAf1m6RsUZ1z6uWmyWY3Cx05ynWN6mYDpNFVXen2cBI-tmfNgAnNz6d5HHBfrkB9ZxClnBZcpiuro5O555iOxJ1kIffNmIPVO-YwsLAik4jUPwNISaunXHCYZVpr6msNmD?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc municipal, Village les Escoumins"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.0972163,
                48.626314
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/a9ppmmnmjm769k337ob866h3a8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitk4vteI5TprU16-w5SP16nzoIVVddpAy32BBsRSrd_FGuFJv7F3hK5atgKqSo8xrOfJC-4sssDsEEXWTEbBwcB_ZepyBwOYhGN98c5nhLQoKErEAg6U7g19_V2CniaENtF5dm7jShmJJiTj2bESR9_iVtPfeZ3NHdOV3uZH06afORb8LS8dGQRYIKyumGmYEL6?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte municipale dans le village de Portneuf-sur-mer, en face des battures et du Fleuve St-Laurent.<br>Incluant un gazebo couvert, table de pique-nique et verdure pour y monter la tente.  Joli.<br>Site visité lors de notre passage à vélo le 31 juillet 2020.<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nlgt8jtfc78b39nm5gs71326t8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiubS-jjlqdQZsyMcwyRZ-J0whHmNX-G2SZ5fewqT2CFB6e3l5Nm926uUxsd17FkTOoFvhZVHvLFyll-kpPH5uV7sNSnvpGu_wJKOD2VHc1GJrCFH34TVTUMAO0KyoqtXO75nXL-XaR3_Vz4g6a0Z8YjviCpk5-4yFhHvvfAU3j1JOF2RTgmEqCeQtJkP8xyazPW?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ee82k1h6vd7mu9p0mus523hteg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivrCp6ClVpXMloawDKgZP8zStGG1uOlr-ndXC3MgAjQxxuC2q9Q2RWGLCA_RnWiO4MJh790Z2Dx4rLfQkE9sqQacfT32SYaM55Vz9pLXTAqh6PaVH7k9kNwq7mXJ_W-SAxJ3XXW3ZeRGAPEe-evyErICSmjA3oYszStw6aPHbtfRZaVb732_lKKFX0e4pd4Xo-B?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/63gl8tb2ore61s08o55rj1arqk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivylTYWdgsfsdbp-oZWIxYfDOFNI01-OLpO7drZifHQF2M8KsSOuWEGYRMq_JyLzG3YO0NIUTRZAkUp3dfkyhBG0QyGHpgUrQbYWHRr6c61Z6_AZGnXtooTKn43A_i1QL0uSynMTX5XelYwVRux9LVDHu1IohdQRsfXJykfQKZFLnA-SRr19jJrY-T0RQh_umnM?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte du Grand Héron"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.3897948,
                48.9944938
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Parc Régional des Grandes Rivières du Lac St-Jean, Secteur Albanel;  En face des chûtes <br><br>belvédère de la 9e Chute.***<br><br>Deux emplacements de camping sauvage sont disponibles dans ce secteur. Chacun est situé au bord de la rivière Mistassini, sur plateforme de bois avec foyer, table de pique-nique et est accessible à pied par les sentiers aménagés à partir du stationnement. Des équipements de poubelle et de recyclage ainsi que des toilettes sèches sont présentes dans le secteur. Seules les tentes sont admises et les chiens sont permis.",
            "name": "Parc Régional des Grandes Rivières du Lac St-Jean, Secteur Albanel\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.4156675,
                48.9935136
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/cg2m0h6mf6tg3hseiis9hdpn28/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuA1m_80GvjieKx6kwizMaDLBphQ2gdqRyL3J1Gv6B5u-geRrb5LRFUPW7cBfsDUpT-fUCWyo1sVskAIEw4nDbVYq92r8MqQa5U3KlFZqwsMdXqNDhd-JKbwHjm37xZsN4JQlD-SMEU_LaCVinHKJfTtuWXkP8p0PGFTzOSa55fgDQ7nAEenJb3Wlr4FIN0Pqzm?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>à 200 mètres en retrait du  sentier cyclable du Parc Régional des Grandes Rivières du Lac St-Jean,  face à la Rivière Mistassini, un abri couvert avec tables de pique-nique, et suffisamment d'espace pour y monter 2-3 tentes.<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ejqvsr9m8pd5pqd2627jt0t12g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu38C5PBlJV6IxpQBnHT1UG-Z5sVFzhOX6FrSMLoq4Ee5V7-8rN4u_-4ugO8DZtivfkFx3A3AiXKn8zDKY3rW9FVfdh-QYyNvR6l7Hk0vbWwdiwTyDP3tUdplMALbFwnMMXdJxaker83H1iZAQLNXrH-kZ5lheHB6mdOpOggVptUKBTJQrYkx-dRuOltK8I945R?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nt6vqjesc673meh7u76gi0d4kc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisGTgo1nsvyAwymfVsflwVQpUH3k1L31VBv73e72zZj-ng0aEnLtm84XSJb9qG_Jycn6Pk9F7aqHR9qNLhVp3sOJFto772m4HjOjcJwnul-MVkRqyzVVpR1NdOXp5fzekJcvfLhz4PMqQ3aOJZf1KSwQCVloeLdd2yZi91xgFE4Ouii45pgxogf8yH04ncM60ay?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Rivière Mistassini près de Girardville"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.3016057,
                46.8879824
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Poursuivez quelques dizaines de mètres après l'entrée du Parc des chutes de Montauban. Vous verrez un 2e stationnement pour la Pointe aux canotiers. Prenez le petit chemin et descendez le long de la rivière. Vous trouverez quelques emplacements de camping à faire rêver, en bordure du sentier national., tables de pique-nique en granit, toilette sèche, rivière! Pas d'eau courante. En pleine saison touristique, nous étions les seuls campeurs.",
            "name": "Pointe aux canotiers"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.2320597,
                49.5960365
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/due2se9aqkc869pe2orvjfq74c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivSzUgOCeikT-r17Z0f5x7NK--B-FsRPOR0a7DfP-wSDucBTxpfsWnmf8qhw3V_0D0VUQ1CerflwWboLrLGJEADocBRoG-93QJ-F5BkVOvCsrr1FkNbW5DR8Ek2GRzZVOrr-ssaSgOjtk8rNf1cc75BPSgY03OGnMQLaeca_enDzL5_mi0erCITYwHJ_PDIjyiw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Camping sur la plage. Entrée juste après le pont de la rivière du Calument sur la droite (direction Est).<br><br>Plusieurs espaces sous-bois, ou sur la plage. Un chemin de 4 roues sur la gauche permet d'accéder à d'autres options.<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/is267c0uenu7n413b6t3lgekrs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiufEwIkj5uBIVVazZ3dJ8wknbVP7UonMJ0GfEYpBxack7qI9Fn9z6tey7uI2ckdjPFwfEFykZBly-R-j6_uxj8Vi9qV3rFfBSnqYRGlHFIuUZIbT-Tm0haxIMrFkD8vNgFDREJM46ZXTY23torAoCt4VJmZFe5QfgY82_fgFAcf-RWXTcI_lLrf9qCq_XptK-fs?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Camping sur la plage\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3239362,
                49.9150597
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/k70kputhad7st0dt4cidpd0290/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv7lghd46JtFqdW8uOuriPv5x1OhArXPCl6YWe_Rfl__RGAELC4LgkIP6EYuNbQ54Ct0mlkvsrYTdQnAC0jBscgCPYGyGEHCavuC8J0wymglbrPW1c1YR7vxm53MbKHoX7EDChLaiHtKVNKkGYh0SDdrq3RSeXzLgbyzYVAPaf3ATwsEiLx7HOqx2b_RbWAHfcH?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée.  Coup de coeur assuré!  Le tour du lac à vélo est de toute beauté.  Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/edr4ffajpbrldql30fn0pevr20/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisixidLB6BQFRhzHZC5OlTFCtJ0ozqvt-QnD5LK-b6NE5YL0ahvggpc8aJFRIzXklQrQaNaCbRIXTwzc-0ZB3QeDDhhDmNb5dKBcHcHWGHQcP2Ra46T7fG8twwTS-ZiIRUtNWSbXApMdIQomEuuIlEGwHy3HM6TOnUH3cJRdomfLm_7CU1AbuCaG-aERte1PtyA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/he7rngjkcgovemt0ir6303njko/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivMN1tvIUQVqcbdpwzoOWJMLOgh27FTzjv8zSQ30PFynFh3gz7bdQ99xV799ZJ0TPYI8xtw3fRS0rXKi1bvGVTX8s5vAQm6yuy6xUvdTPJrDdHXa4DpvDtjvEY0a-kexrSpX-8wEb5SGN8pK2hzFzsC7Ubipd5FORn_6PzNzKh35x3ebqugmZwvmgKDQTWFLQH8?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc régional Obalski - Chibougamau\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -62.2232999,
                50.2338645
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/i3lblmsnajmfe610mat59bq5f0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitSQ_Wyz6UOSxhcnqGfAJHTmiWu1xB0Q4mv-hcVUcVjcL6HXia_rC2Ouetm5R9HZTPIKxDbn2QKheKjUrg2-_rlwIVsWsZn9_K6XgY-n1jmxiCS8s29vO5fEso9psJjmy7ZNP5eVzIsJ-54YCTbmbs8_x4Y4M19jB4NXyLB--izloJclwTiI-GP2PIAqlqO6HuP?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Prendre à droite dans le chemin de gravelle 200m avant la rivière Aguanish. Une grande prairie donnant sur une plage de sable avec plein d'endroits pour camper. Paix magistrale et brûme sur la rivière le matin si vous vous levez assez tôt. Pas de services.<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/13quejjoua445h0et08qtga77k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivEidhQHiMCzvUr2tYhm4PICI2VuK2B1oyUzwSBxDzMU06pCGkHRJiFPKIkQ7MtBvtXqB4An92limSavK037JZtwBGrxkW0ezSCb8YpgkMJWvGjHLjfsRmX1UgXMu6Wu-NNPjD0B7N69a1gAOPIWu3anVzmTSxjgDuYGsXi0KJEf6P0sui21w1V6ZFWl5Y0L-Pa?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Au bord de la rivière Aguanish.\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3547545,
                49.9125895
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/99u4dsd45jliat0m6ms8fkso2s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu5h49Jjcp-pwFBQ2xgOLrVugKGG8qy5TbPbrgJNXlkzFDFPIaDipvLbz1PYO7vKkI0LKX8LnNHOC9dkwYkiv4L8TdaSg5TfcTtZaUMojdJoQNyBPFmLxsit0BfWaNsYe-kJuRsWDiNLbPH8m7GvVF8EnhavegeLWNrM_EXfQLEXahfMgMNZO3u99nuP-sVCHX6?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée. Coup de coeur assuré! Le tour du lac à vélo est de toute beauté. Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vorjha3d8u8npm6p466du9je0o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivPFO3x1s3WS0aV0Pg3hPXsXwH6i61RrcUIfEyJoTtct7KTK7a7cg9MzOqrDDl1Juu92URCnX30JYy5eNS7glavzyAK0MHxm_lv-meGiNt_z2O9IlOi1TJsPHxXaocH9y8AngCd4KJdTbKNyG8kIlovVeBH_jaIzjpzvj39k10vcWheJ0KJGi6BKxlXcVzdR4NQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/jbh1p5rhgif7dof3qoo2a0r33s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuPxH7HP18uwHaCvfONcorvfv0pH82bcxXfuvWsI0Ktrd2kE8y6I0c08JIaDr5d-KtJOK6MTBf9QV_-TUWcuWvlaGU6OVICPyf2TL7z34Rk4mtWOhgnwo2gFwuABwhqXrB7oJ24oKV9hEse29mHk7ACLDI4nUooEWnwE2lp9UXnYlcRUAWE-UAXX2Q1EgfPW57M?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Quai municipal et Parc Kiwanis"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -63.4502962,
                50.2055725
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/a87mv0eqai68e6qjpd84olueqg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivlZ90TyoemG750Lol_eLpQyABtpoBUiuoWBMTPxX4ZZzcLpRhSsUD0bqvWJGqv9Hb-Jf4tLxYbdaIZToBxM0auq1v7l5JQmVDzC7-ayWs8nxuzAt6NSnjVFko6-vOKvVFTKPf_7WI2pNC41GbX4anCRkAOfzrIKsjJmqCvC-M2T1ue2zbbcdpB55pMqw6NvHDk?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Il vous faudra des pneus qui passent dans la gravelle pour atteindre ce bijou. Tournez vers la mer au km 1232. La plage au bout est dans la continuité de l'archipel de Mingan, avec des monolithes et un coucher de soleil spectaculaire, si vous n'avez pas le temps de prendre la croisière c'est une alternative solide.<br><br>Pas de services, mais il y a des maison pas loin.<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nrfkoc043tre7r977kemnbrgmk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivjDtEiEiZRUYUZOH1VmAdTdZUwmMqfRwyb5FRaZkxkGnoC8Z_t7yW0-Ly-cieUIC2oN47_t7YQ4Mv2ihU6LDT-gxSTDgxWDzd6tjH-t-UF5VUrgurJZzpp45aewHL1jdgpZInf3LrA7iEkM07EEJ_zbYXgy7ZMpEPVFWcFezsFMd-kLf6nyWXoNuCqjTwC0lvB?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/k928qvbuhe2e9qq2g6h69c1p1k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuMJlHqJxVLcG8h_HH3MEwQovcqUHNJBXrq_MncNRDGAcburThkAZHKv7tvr_l8lVKmnfjFGUsVO5tiZzwyaLHTvq4wzLAse3vw5oPpRhlw9Qe3dFGE2lmMioPeYa1HH53RoAxUbupCwcipAJCoZm_ETgiJJi41s2xNysfREx2k58rhbV9fu2DgjVudIKx1DaEo?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/c3vr6h978e7hdugio984vh0prc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis2sZLpOnUUBuX5z2WOFEIz-0Idl0b37DenmRWN-t86IQWo7gmtKazFiMdiE0zH-hx8XKwSMTPM2gDPsPJePREY3L3v0lYORa4nX33YhkfhBaRVB0qwHI0VZrQGg_zrs2eYo5MRBJiJqkIcyMmniy3N54oouWdYje4ga-wxqi__sFA_USBHXI7BpILzz98snGlT?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Plage de Pointe Ferré\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3242632,
                49.9118157
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3aaheub3e5u5gurdqu0n19mnp0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisPLVfJ9vrDVhvxLb0icCVlg47gtOcQu-1q5qV5ed7FnqbmiJlmhT6Av7mzT_eoSwdVdTkZN-3eDJVnQtZhMYEK3VEvPF3V9p1efJQh-DmLT_wGyiFsxqsRmE14EGRiwXUAZzIqPmiHILV5gJUMEN7T0lqXrrtLqP5cX5oXKCm1tfRKGBq4q_YdPUnVCINy-PQg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée. Coup de coeur assuré! Le tour du lac à vélo est de toute beauté. Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/s9jfttr4k011okh36voojnuuhc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisasUHOtDQdIyIxE_I-ef2pkEJ7VeA4sj3vwk1e9hSkYKMm4MpKtpnRax15FGyzdwtpOPP0yW5XEpyCvaYMYPr4Ybd6XwcFoc8gvShNPnbYBz-y6fh-9ApGmaXGY58iwfFwWqVH76aZISM-iL_BmvOto18rBsVr7O0qiwZXu_5OMa-D3oeaba1eBO-3jRugYyy-?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc Régional Obalski, Chibougamau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3369335,
                49.9066547
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/pgd0nlhg8e2bpm4nm8ree4h4eg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivpJsAlKaDbKpXD_z3CMqZ_vqCNdc-AYpu2hYv4DKGm59yEHuhuJzfCp9YZTe1733ievR8VZrsM2NRt-QAB_wWHAPgfXATkGgIuoiXMivoF94mHdaNhF3rrFLAAlJsFCjKBcT8xlmRyM274tpRiM0ZhLHVD7WyMwImdgwqQmZMEPSq8rGxy-vtq22RHvXy9Ddox?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée. Coup de coeur assuré! Le tour du lac à vélo est de toute beauté. Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/f5jgcc4mf6q6ms02mjceh9nuc4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiurBqxQfJ8bwpmht3qAEC0bwCFtZNtRc3EpkdFpW-LE-Np3bsADnLh2mcl3MIybffMDckJDAaKLskMyHHagZcrzwDZnpMSEwzXt8XVhYfLr9o51UM-u0Y_5pHu2fo4bOZTCGuWbA0e1Seu63W0zmPXMnColO30ey1_9ejfcINAYKAfPn05a4SIL3xf_qfYyS0MC?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc Régional Obalski, Chibougamau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3539215,
                49.89924
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4ddkr2eo1nvr5qiuujgcq3uj54/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivlryICu8l2WdrKkyc7dgoiEL81r21bPEMWAznT-ZFsdDSCCCH36oULvW1UnzKhqOk0wCZOYaaFLGiYWUQFeA7yFIOaDBZuyFFze599A169k9Xwwyqj93LZ-3RHZrhmDYqH6uPDIJgHXxAp5YS2yZRj55EJ0CvcxPC4HrhE5ou9ccR225jgS6qfhDr_uhsi5Hj1?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée. Coup de coeur assuré! Le tour du lac à vélo est de toute beauté. Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hbdpfu663da5o911hesqamskr4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisx1JXyLlvUDBDsX4XIfr8RSSO3PfDJX4jU1FbpkTjPlgZ2-YnYVqyVEjW6ggTR8QLjP2HK84UcDBIJGwMKHvJjtz6EYJPzG6ZXCfOHN2Glt_MIGGxSN2_sDj77L_qcYk3HInHQn1vgFhRUT2zNpo3O-rHSXxbfA0JjqPp5ListG_-gthc5vrGlRXLJJ584lELC?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/gbk9qm50jlkm9ffv767smpjhcg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu9M3xmZDGnGpY4XPcg2BZZ-zlAibleWdfWFUXJDX8oRXjkevnSk6gMMCtJ8Zc8cHZOUoaLUC1s_xY1jd_VJBytTBZQH88X2200iIjXO2sFqfbgi_dU3DnNMITAJkGZXE4lzprBD_0BajfV5f9W7trmaP-JMwoUt8U7m-u7eCBiVVSVJQqdem-YY-1LkRhXMLD8?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc Régional Obalski, Chibougamau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.8790254,
                50.2623584
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Plusieurs endreoits pour camper avec rond de feu. L'eau dans la rivière est assez chaude pour se baigner (pas vérifié si elle est salée).<br><br>Pas de services, mais quelques tables à pique nique.",
            "name": "Hâvre à Couture\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.67607,
                47.71482
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière avec tables, toilette, mais pas d'eau. Beaucoup d'espace pour installer des tentes.",
            "name": "Camping Halte 51"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.46985,
                47.03149
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière avec tables, toilette et eau. Beaucoup d'espace pour installer des tentes.",
            "name": "Camping Cap-Saint-Ignace"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.88814,
                47.82991
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière où on peut s'installer en bivouac à vélo. Il est écrit que le camping est interdit, mais c'est toléré en vélo.<br>Toilettes et eau à proximité.",
            "name": "Camping sauvage Saint-Siméon"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.33063,
                47.47254
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière avec tables, toilette et eau. Beaucoup d'espace pour installer des tentes.<br>Une superbe vue sur l'île aux Coudres.",
            "name": "Camping belvédère des Éboulements"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.54941,
                47.40665
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière avec tables. Toilette et eau seulement lorsque le centre d'information est ouvert. Beaucoup d'espace pour installer des tentes.",
            "name": "Camping halte Lévantine"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.8179498,
                47.5929708
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Plage discrète. <br>Aucun service. Pas d'eau. <br>Exposée au vent, mais beau spot !",
            "name": "Route de la Grève"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.7558605,
                48.5674419
            ],
            "type": "Point"
        },
        "properties": {
            "description": "accès à l'eau. <br>Possibilité de rentrer un peu dans le bois jusqu'à la ligne électrique pour plus de discrétion (mais peu de place)",
            "name": "Proche Déversoir #7"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.8526625,
                48.5506167
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Note de l'admin : SVP ne pas camper sur le lac ou vous allez vous noyez!<br><br>Aucun service, mais bien protégé du vent",
            "name": "Bord de piste cyclable"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.2170569,
                48.8907641
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Accessible par le camping. Discrétion exigée",
            "name": "Île municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.3912032,
                48.9085422
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Toilettes avec eau potable + tables au chalet d'accueil",
            "name": "Possibilités à explorer autour du chalet d'accueil"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -77.1141462,
                48.79121
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière en bordure de la rivière, avec rampe de mise à l'eau pour les bateaux.<br><br>Plusieurs tables de pique-nique dont certaines avec un toit; Toilettes publiques.  Très grand terrain.<br><br>N.B.:  Un panneau indicatif précise \"Camping défendu\".  Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours, notamment pour la pêche.  <br>Nos conseils:  vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur.  Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route.  <br>Nous avons visité ce site lors de notre passage à vélo le 25 août 2020, en compagnie des 5 jeunes du groupe Echo Explora.<br>Normand Pion y Hélène Giguère<br>127 des Chênes, Ste-Anne des Lacs, Qc  J0R 1B0<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook:  https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte de Bartouille, Senneterre\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -77.3446776,
                48.4009199
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/94ls618ppna5k12s6b957j6ehg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisYuXEUP9YD7G5gAlxpzoagwLroH4ChQmi0iexcKHJDFnFiIa3f90stNnI2gUO8wTHCh5YxVa1cWK9_Bx_hpFcZP6Pl046Io6Gsx_rDdjh_RLvQOU8YRa5wJK0Ibo_8W_BIUdjmOMbU65DLj6sB2YiThFHAC0tndJqgijc53p163hcKVOezKuPYhpJcE0-E5Ggw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sur la route 386 en arrivant de Senneterre, petite halte municipale avec tables de pique-nique et espace vert pour y monter vos tentes.<br>Village à proximité immédiate (eau, dépanneur)<br>Site visité lors de notre voyage à vélo le 26 août 2020, en compagnie des 5 jeunes du Groupe Echo Explora<br>Normand Pion y Hélène Giguère<br>127 des Chênes, Ste-Anne des Lacs, Qc  J0R 1B0<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook:  https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rofik6evsvrc82iloicsvqn8ao/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis1_NBregArWgqD-Kg1QlH9RWXHG3IsGUvZKBZlYpivSYxghMOjN5UTe7hC_bperYlmH0JViMhaAu7O-KBmb8NKXg4Qyo4j2459icMpBWjMZNNtLdyaS5g5cLzMj7QUAK21jibggCPSmqjGoX-9rw-Xr6aIjpPjzqPxX5tZ8oJLp0gdt3BE4mWTftGub8G9_4_d?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte municipale, Village de Belcourt"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -78.1286673,
                48.3906468
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/lr42stu2u61nlid1o46l14ifp8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivXTs6VncOarnG7lpR-YhKjXz5cMrpB1RmrxGVJgWo4sKn8RTFi17i06kdGA3RGNN1Kb624tPx35GPLoQ6Gvgsvx7iioSNAO_A25MsB3lRBzTVhqZM9K7Gg76eGiwSFb69oSpdLkaLks2ifApt-I96DfbhP7Vdt8wkRrSAELJOtlkdE7XpCfjKOSR06t-tJbEAs?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Il y a 2 spots permettant un bivouac potable sur la route 109, entre Malartic et Amos.<br>Le premier étant à la croisée de la route qui mène au village de La Motte, et le 2e étant quelques kilomètres plus loin au nord.<br><br>Les deux ont une table de pique-nique et de l'espace pour monter la tente.  Le premier nous a semblé plus joli et plus lumineux, mais n'a pas de toilette ni eau.<br>Le 2e est plus en forêt (mais à proximité de la route et facilement accessible), avec toilette sèche.  Propreté discutable lors de notre visite le 27 aout 2020.<br>Normand Pion y Hélène Giguère<br>127 des Chênes, Ste-Anne des Lacs, Qc  J0R 1B0<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook:  https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte municipale La Motte (2e)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -78.1330989,
                48.3565397
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Il y a 2 spots permettant un bivouac potable sur la route 109, entre Malartic et Amos.<br>Le premier étant à la croisée de la route qui mène au village de La Motte, et le 2e étant quelques kilomètres plus loin au nord.<br><br>Les deux ont une table de pique-nique et de l'espace pour monter la tente. Le premier nous a semblé plus joli et plus lumineux, mais n'a pas de toilette ni eau.<br>Le 2e est plus en forêt (mais à proximité de la route et facilement accessible), avec toilette sèche. Propreté discutable lors de notre visite le 27 aout 2020.<br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc J0R 1B0<br><br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte municipale La Motte (1er)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -78.1899809,
                48.5813097
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/s31e9k0b3jqm4mqrs64gc53h58/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisIL2r59SvSL2VJ4qNGVh8Fzu6KPePEdtw-N52cGKHVC104xR6h0e5eXnNpgz4Mw_3wMpTe9BEyfnmgTK1njhdoLseCPWzngNyY_s_XIcwrZnPdbBZcGCQwM958DHrXhYqWF9JqM3I4MgOoWwin3reHK_QaMXGXIbjMdlIa7dxSUSBywDFZcb1GzLGUPnmUdc9c?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sur la très jolie piste cyclable à l'ouest de la ville de Amos, une halte aménagée en bordure d'un plan d'eau, mi-lac, mi-marécage; Avec table de pique-nique, espace vert permettant d'y monter votre tente, au coeur de la forêt boréale .<br>Site visité à vélo le 28 août 2020, guidés par nos hôtes à Amos André Plante et Andrée Naud<br>Normand Pion y Hélène Giguère<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook:  https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/lcs3n4jvar0kga6nlbt1tdfcd4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitanJ4ptNvNjsesqb8Mpdg3WyZ6fnEx1GsxbBMJkq_OCVvECPvVjAnYDnLPU10xSVTS9ZuKmDP1eSSWBYaCYWHxVDzchoIefCauDrsre3-od2KDbc5yP-_ZiF116gGyHPn25NJQgb-oP8746Uqz8Sm2JksLu7mvv26OAV1Lvqkd_qlBcTo4LE6n1d7vcIMg2mJf?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hfha52dkdv0lo9jmkfi7u1ok84/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitA90jpQLXaLI-YwOxWhf5g-yj5AeiJUMkYVLViuHmCbczFB29vElAaTMAccFah66yWdnz2zLe73ILs_n22hrtXwsrRQg1n9UMErBSbH_fxNdjEAQqr9XQhpKesO8MRFcxmg-5dBeg02Q9fBb7Hz6ElCwUXFr7eqi-1eb6mOsrWlyXNABOj4ForeKZOUxCh8Ly0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/qa8p3f4hi72d54n7njic4jeiv0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiulhJ9MJlgSIOYODfAEHVMue3JgWvrPXeYzhhnWVOXCsp_pVv_5iXYJpsZ-fT6-g1_sHCFJYDLy6_eRvZ0O-SXJghQp-XtbvT4kW5SJDHRXKdGvZzWvW4Rp6jfNOGZB6bRwfma5xz7kiaFAzsPZtMzaJ3PDwA4L5z4fORGEx5jpwewl7pumdrMn2NYxxFIO3-bQ?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte municipale, Piste cyclable de Amos"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -78.9724517,
                48.6711092
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/00pp9s5atl5gs94nq4lfi79a1c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitkgHyxikT4AyYJdllOT_ZTRQElZA-ofrBpCqZ9v7IELH66EiDekFf5vQ61k869CK769LXNDOGDYI5l83YYMONat0BlfnG1gssmevqiaEIHQQR2FEEpC_1GjmAMMlLWDxnE7ksBad-iKnFWG-8D3Ls0pWxxvHMPd445jtRmdWemFjYDzJV8oIlnlZ5I3h_L7f2d?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sur la route 101 vers Macamic, juste après la sortie du village de Ste-Rose de Poularies, une halte municiplae en bordure de rivière, avec tables de pique-nique, toilettes publiques, verdure pour monter vos tentes et arbres matures. Joli site, visité le 30 aout 2020",
            "name": "Halte municipale de Poularies"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.2010487,
                45.2988849
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Passé la halte du gros arbre, on peut trouver une jeune forêt très dégagée du bas où se tenter.",
            "name": "Point 153"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.2758099,
                48.1833623
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/r5hvga5j4eqqpkkpfjhkspormc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivTtNI0-k9kTyqLM7TG2vg3H8owlxz-gY7-gQhBgGqK0d8Q9ELbXFf4XFp45GpnsKugZPcO4Hf5fiocPaBxTLJ8yPOsu484GSYXycYFGqlJPpYeSy4_G3bjcBjT6KgSPPf69kNnShhdrkO750SVQ80aAzWlX86hTX6jrZaK5e0BvQji4ugfPe8Y9QDvlaK2c1Mg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte routière en bordure du Lac Renault, à la croisée des routes 117 et 101<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours.<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 8 septembre  2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/1baf0mptm75ase3qb1o7a20ims/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisSfIblfxFazeYf6g37HJ9GMTVXl3I8ewmgFCu-JaDtFGlLzAYKcuRfvsXFqq0NKjav44aFMHu8L9FYBRYf6FwRI1LjCEU-lFvgLSuwqA-SNxMcvlBRX2Dz3U73yYNpZqzxiM56uqz1aIlvcT_FoAbpt4Lb2S1e8CgKKv6c2ENQdiMS7TtUkBAfYMxdEUEFIw7P?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fnihvl105anusaolr70q5ieqjc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pivd36IK3zdSRWzdlr2YiwlpkSS8SwmbFeGAGQP-vGCAvaDZQ0Lasl8VOKWSD5-PZbxIurtwvBIx21EEWKkDJ6gzIji4A0uS_C-wUhBRb0xy3k480GfesQrPs3Ro1dfblb4xRVjnpCaln_reHgwqUH2-fX705bOLnb3LhWFBnmpWZGU402BqbwNiv5ybXuufpueZ?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte routière, croisée des routes 117 et 101"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.2411738,
                47.9174756
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte Municipale  à la croisée des routes 391 et 101<br><br>Quelques  tables de pique-nique ; Toilettes publiques,  terrain gazonné, quelques arbres<br><br>Nous avons visité ce site lors de notre passage à vélo le 9 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte municipale, Hameau de Rollet"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.4864606,
                47.5901212
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nppnqsf44voi7b3438mldhk1vk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisYSb_IXK0SaghrSg42l-erYObqN76iwRlAGz2wXIF2zG1UsHqpe9R8exBu43aK9oWSzEHbjj6AlFm3BwzxFY6p7JN3WDjbBPKSEHK83J0qG5f9XJAxqh9gejFBNm3UImVXaYWKFr5Gm66O8R1wOAqIXWyCFA1OCb0YNU4gAbpfRVx37q7odxyZx42hUTAk6b5p?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte Municipale en bordure de la Rivière des Outaouais sur la route 101 en sortant du village de Notre-Dame du Nord<br><br>Quelques tables de pique-nique ; terrain gazonné  sous les arbres<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 9 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte municipale, Village de Notre-dame du Nord"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.4249801,
                47.6887905
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière dans le village de Nedelec, en retrait de la route 101<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain gazonné, arbres matures<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 9 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte municipale, Village de Nedelec"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.436973,
                47.5583343
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/cgpl5024lu1o1tp95vkc9sfiis/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisy3PKt8s3CVWe0X2KTXj7cNiRYOxdLr5WK5tSscDzUQXJjsY308BYnH-vC0t5Ibgl19nhNgY1XPwU0lHMFOQYABqdEpJsBS63kjWb0Gp0sESKwPWVR6_bTItO9gvRDw5ivRPqgiO2stNcgjuFtiJpLO7xpkhGo_Mihb_4NdyzeFJ47dc-AGm1ZrEUSURMA2Oa3?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte routière en bordure de la route 101, entre les villages de Notre-Dame du Nord et St-Bruno de Guigues<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours.<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 9 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte routière St-Bruno de Guigues"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.4605787,
                47.2888167
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/obn3f4oh1nq8lbs9admdfqg0co/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pivz_ogMLBknrsx-LsJS7oDIB67ynP1OQki5bW5oKi62KbLBhJr52aiFmnMas3zl9zjuoeMORwHu7eHgfjpY_FdMjGgRI2-6_PAnx8MqAph4rinR93z6wOqo7SifKmSrpoEVzF_1ay-ieZeekJbLcccjlavPSDfpQjBos3ZJj9jVLngJOJYn062UyR6IkR3HGRKQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Fort-Témiscamingue, lieu historique géré par Parcs Canada:<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain gazonné et nombreux arbres matures; Site magnifique et très intéressant à visiter!<br><br>Pas officiellement un camping de Parcs Canada, mais la Directrice Josée Latraverse est une ancienne cyclo-voyageuse avec quelques longs parcours, en Gaspésie et en Europe, et elle est particulièrement sympathique aux cyclistes lourdement chargés!  Vos chances sont bonnes, sauf peut-être en période de fort achalandage.<br><br><br>Nous avons visité ce site lors de notre passage à vélo le 10 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9ccrav6stenu1k442s7j1208m8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv7Acu5T8xje46y9sr8-n03Tiv_B_Ds1jXo4ZIIB2Bjic0ckdSrSMFUTj8QQdEidl8KodZf6tql8DXrkWCmbKulZSapoUb_8hMv82WWLmL203U2vnQ2Z7zcBP7Pg19eJ-LwFHOIN6SE5kZEWBmO3wUK10Ba5tZZSrwwZ1n16eOJe6XDmcDZOZy7hjEDr4G7WjWa?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Fort-Témiscamingue, Lieu Historique (Parcs Canada)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.4020598,
                47.2507907
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte routière en bordure du Lac Témiscamingue Près de la route 101; Entre Ville-Marie et St-Edouard de Fabre<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Beau terrain gazonné, arbres matures.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours.<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 10 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br><br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte routière du Témiscamingue"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.2714657,
                47.049882
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/p71bq54gk0ir96ms9o0kckb19k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivhTXwq-N_RRaIilnU9KdXgheFRvUmTwFT6wE-BjanC0o9R77dabpLXMoQ1Dwo4arIOIe1ZvjGKwsC9Q1hwNx8Jksy5K2RL5YdkT5SGcQIo6xkp_c_4BncIRBF20TwZxVU6DjbotDAxUYGLahCzHDppu_NtZbT-_X4HqsD5cYZuZVAQAi0YbVu2taby6usHss8l?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte routière en bordure du Lac Kipawa  en retrait de la route 101<br><br>Quelques tables de pique-nique ; Toilettes publiques, eau courante. Gazebo couvert en cas de pluie.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours. (NB : en réalité, une partie du terrain appartient à un camping, et l'autre à la municipalité. Il semble y avoir un litige).<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 10 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte Municipale, Village de Laniel"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.1801403,
                46.8524109
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/m58vupju96mqju86a53id7p1ec/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piugt4AdTIlPsNtifaBBx7j89BBygywa84tRiGM9Q1DE0_oLUi40x9Bz46mu5ji8KY0q-33Z0UtjNuLbZ_7bhen8GVWMeSepvU5O-QBHm1YbyV-mmToFJyrE5fuayEpPQiq1KmQSoEazHrASQSNtsU3HqNCuI_BYRq6vdeB2UBpjO_na242upy7xMm8oXeGdQYsR?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte routière Opémica,  en bordure de la route 101 (15 km au nord de la ville de Témiscaming)<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain gazonné, nombreux arbres matures.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours.<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 12 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/6gquindl8dtb6u3gl8s5tmu9s4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisnX71zeYgsKPluqiIDfbgVYVhOHxtC3Icl4xt_QXmo_fdtC7jLMeNlxxphrSa7oAm5e_ooiWICfNZLsFb6-0FU3_LyUox7CXg2zJH8l87X2pg0m2j90Zv3EJtnpgZfDC5FxRKZLp0BEwHbw_Y1MKxtiZFJZtFPT2zLqYi2CkCIidX3zHitShXy0FvB2OXVurPi?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte Routière Opimica, Témiscaming"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.0951029,
                46.7189047
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/12nnsm808ee5dd765lo62l3j94/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuBVk4qJ_KVKhy8-2keWqM-ebSCxcJF2qOhYn4fSqJX50EXnPT8O794StBChnETvAhDE0_TdYdVz0Sb3n_8ny56-X1-9XbdSYOyRQZ1qQRuPlCTuOZh_0-t8oeTCr7exLQU9yH3yGjm5r4HS2tsI2vdKT7G1sU46XDujXbsxYKnaZeYgIvn06_KeGzYU_ZeROK9?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Aire de pique-nique en bordure des chûtes et du Ruisseau Gordon.<br>01<br><br>Quelques tables de pique-nique ; Pas d'eau, pas de toilette, mais le village est tout près<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 12 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Piste cyclable de Témiscaming"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.1712077,
                46.6125358
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ltm1ifvv5r9t5fcv2gofcb961o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitSxQkzikB1ymjC4D6Yj_KAicAfOXyJiPyL0_8UYpJd-a4wT4jIH2c-q7nNR37ETtkD6msJrN40MCtc7KvE9qDOkzK_EbMaqUXXvDa6KCYftkZcwxXT3Ghaz_fM30Nemp-9-Y-ljgj7uM4-3MV1wqBbYvFgRMaw_HDA03iL-gmrzB82G0MHnSCodWJlqptRwk32?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte routière en bordure de la Highway 63, entre Témiscaming et North Bay<br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante.  grand terrain gazonné, quelques arbres matures.<br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 11 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/60qdhicrlj7a9ca7vust9oegps/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivUKCauSQmu5WAVGtCdVd3jvA9SdSJKWpaMuXoXYS7qW9o3JCrTD1qLkJiy76Fpm9sFQWFt-fvaZ8nxI0vyjYCZXa02s8yNb5be9VUhByFOAFIs-9lBI8JJ2HeMjwWwnYMqytuUa20RJrGn2urBXMStMARE2y30GZlKYgMz1HBMu81MincnrMwZaLXrna2BKeEp?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2ef5vqfptd012qjenrkviun9ik/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiscFhDrhGbQBuc-bSTzfXZE5yG2hW_6-bjaY8qCrrRraHPtmJaWQawUe3wcsQaqdwK8dlqbBmE-nxeZ6GjoOfn0sa5vQxZtIFjjJdHfMK_fkD2m9M_2RfC5ni9Ngzts6hTAYtk0LPipVN_BdQEfezc8f1ptGGrDtOEM7JHWLExbzRvVCdz_O9Ij-oCpECrAIOkT?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Aire de Pique-nique, Jocko Rivers Provincial Park (Ontario)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.5537727,
                46.3387176
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8fdjgrn9kcvu2meercnhbl1jc4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu8SXFmu7Xp7RgRTAHYLi9hIXqcuM_xGbZOIkMsrEaxlDqMjzECvVuiunIhP_PsKYhYBRASXXvALngbM_8771X_R1LGb3nM681Ciw1zS8gzyIAnuAOrG8LBmkoBSp3NCWdh-l6R9ZfEdnfaAIXb7e5qV7jBgQfcazR2mE1EEFgy9iXYmufpQxdy0GvNAbLirRco?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte routière et aire de pique-nique surplombant le Lac Nipissing, en bordure de la TransCanadienne (Highway 17) entre North Bay et Sturgeon Falls<br><br><br><br>Quelques tables de pique-nique ; <br>Site bruyant (autoroute voisine)<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 12 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/c6k0ruahsanhba8beneslsa5js/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivT_0qjXlwUlVbxb2sOVcrch9kN2PfLz3JE1fhV4ceg7c7xdMV8C4ay7QpPHoxToe-KlZqMmD-PT3uBtNh88wEYLLA0TBaumYPfDjPT00SwpyaY09huCMY0HmiayGgqsOfbevlec_ynNxs7hvtWhcBQYTqQoRIFVePQst6AylVsPQmX9v8LODDKina9xd2Zh2f9?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Belvedere, Lac Nipissing"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -80.1709737,
                46.3231574
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9o8av3169l7g47ja3b70nhdvkg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivJPogUiVTT2HwzZ6__Z28oKyxmketyT2UqDTIJfb2ibxZh6MFOzEu09abMCCOWgskkOuiwqg95-Umu5ppgN_3PGhOkRQVqfNKuBVEGaUv1me4hRT1byqTPt2jpNCJ-w0QEeCKvRbIIBDqrCcOnW6Bioqkj949CwI7EOg4VtdDCSkV4xJeNYdUd6z6-H3NBryyY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Quelques tables de pique-nique ; Pas de  Toilettes ni  eau courante, mais lac Nipissing à vos pieds. Beau terrain gazonné, arbres matures. Très beau site!<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 12 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/a23a24qslun89dov877v6ccp8g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivDDE6WWrGMLN7GDVrsc1OgDXA1c2RmPqUf_KRoOgIKId2tK9FdMWk8xbjEQ16TBgEn0qpnQKAE0UUFhgp0c1VqJmWU0EmjTDzCAc04WoQGBYPFg24-XMIER6IWqYU-Qi7vQTqg34NIw-TuVGnlfE1Y4erZytX4uqgJ632kevsxzuvoGuZTHs90QwLruzrePjYf?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Aire de pique-nique et quai, village de Lavigne (Ontario)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.5123844,
                45.4170996
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Endroit accessible seulement en vélo, parfait pour camper à 30min de Mtl. Endroits plats pour tente, pas d'eau ni toilette, baignade possible. Commerces les plus proches: Île-des-Soeurs (dépanneur/épicerie).",
            "name": "Plage le long de la voie maritime\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -76.9145914,
                45.9085432
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/b4lqm7tafddi6u525rdsioh6h0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv2xTHdq20zHOAV3QMc3bLMuJ-KLXEIbviX4Usq97gq7PsNPegXxWfLQIL6oD3YSaxK3OwK1x4CsTVALQp6oDNTWalRTUaJ4CkOWxh-E9FwTL48TeQnX7v_DktE0n8ngCoEgPjCWnG09At_WHZYBqvFsi_khNXiZQ-TcBisfUbO06LHLY_zZhgzEFl3KwDkqXhA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Entre l'église et le parc, adjacent à la Route Vrte #1, un joli parc municipal avec tables de pique-nique (avec toit), station de réparations vélo avec outils.  Pas vu de toilette ni eau courante, mais vous trouverez facilement dans le village.<br><br>Nous avons visité ce site lors de notre passage à vélo le 30 septembre  2020,<br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc J0R 1B0<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Chaltham, Parc Municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -76.9464342,
                45.8539063
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte cycliste en bordure de la Route Verte #1, près de la frontière de l'Ontario à Pembroke.  Table de pique-nique, un peu d'espace pour mettre votre tente, mais pas d'eau ni toilette.  Secteur retiré et tranquille.<br><br>Nous avons visité ce site lors de notre passage à vélo le 30 septembre 2020,<br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc J0R 1B0<br><br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte cycliste, Ile aux Allumettes"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -77.3647379,
                45.5984822
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/pbqikivg4bbcjcjtgkrnb2lmeg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisjiYFfBbIxblrK4FsLJmjXKBgF-vpSoIeZIhID8C2mZXwx9C7PWjkr-pZHcg8bcRHts1xvnWvy69JduTAG9NRlaUAzkKi2CWMUP9CtpvzLkBO64mBKeggB-6xLM89OaKshss6i07fOk2Lr4bjwmnRBi2OnuUShAIjnte16Fvg9m1BeVttvmuF9-bM3fy734DAP?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>en bordure du joli Golden Lake, sur le bord de la Highway 60,  cette halte comprend des tables de pique-nique abritées, du gazon très vaste face au lac pour y monter votre tente, des toilettes publiques.<br>Nous avons visité ce site lors de notre passage à vélo le 29 septembre 2020.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours, notamment pour la pêche. <br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route.  <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc J0R 1B0<br><br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte Routière, Village  de Deacon (Golden Lake)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -78.6522545,
                44.7791871
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ebdb516u1pn862p76gg7jbmbrc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitsx_r0OgekTZuVb0UN1ncCV1un67Pw8E035a7eIS39xb8njeuyt1xeRq77QmBsmfMHEFhdQEiSCr0VRV9gDEqm7FSqE5_eqgDZnIFIQeF1KrX7zOD8sYjJQhfOR6-XUiObyeihfFejIm8xBaWvauq9LlkryCboS63yL-stu-XI3koSc5-3z_yiIg8XkCX9wYF2?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Site magnifique et tranquille, en bordure de la piste cyclable et de la rivière, , cette halte comprend des tables de pique-nique abritées, du gazon très vaste pour y monter votre tente, des toilettes publiques (ouvertes de 7AM à 9PM)<br>Nous avons campé sur ce site lors de notre passage à vélo le 26 septembre 2020.<br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Normand Pion y Hélène Giguère<br>Ste-Anne des Lacs, Qc J0R 1B0<br><br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4fhibb19q9us5vv40ac49mtrgo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisCY9gxYAbYrfPEcsDCN1gPj71e-_m-oHzhdIa85ueejvbRspZiJke6FY63e5rIJQv9UXTgTIYXqrXHd2JhlZ8GMyxub-12Dfmb1s10UGKmuFH8_cMrUu2ZtHr_Ja0pnLA4Jwpwx8h3v8KYkLZaHhIHUiPJ1lFScdSDpsx1nrK_Luc6ePOTw1Y19QAR2MY1dr0t?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Kinmount Ont: Parc Municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.7598837,
                45.1828603
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Chemin en développement. Le boisé est agréable quoi qu'un peu rocailleux.",
            "name": "Point 176"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.5755987,
                46.7279009
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Le site est utilisé lors du festival western de la ville. J'ai rencontré des gens qui faisaient des réparations et j'ai demandé si je pouvais tenter. Sans problème. J'imagine qu'on peut le faire discrètement. Métro à côté, une aubaine.",
            "name": "Point 177"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -76.6864302,
                45.8198149
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/7dgffv5lnfhbg441231t2cd544/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit9ZnoCjXPh0tfydLXDk59G2n9_avNAZn_cXFWxkvCtpMLWNaosDVy0452abIuoJsfOrw5WzLjQhppY13LspjmbuaUG6zkF1cIiOdMuwplNxF-i8G_jm_f06bRS7zM8R3YMvJeeAeZ4U2MsgU9r4Drxz3Zqfjy8P2dLU7s-ylWYGjkgFqNJa1F5fmtMqNd6w8SX?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>en bordure de la Route Verte #1, environs 8 km au sud-est de Fort-Coulonge, une jolie halte cycliste, avec tables de pique-nique, abri pour la pluie, toilette; Super tranquille!<br>Site visité lors de notre passage à vélo le 3 octobre 2020.<br>Hélène and Normand<br>Sainte-Anne des Lacs, Québec - Canada<br>rikimiki@me.com<br>tandemetcie.comhttps://www.crazyguyonabike.com/doc/?o=1ni&doc_id=15622&v=26l<br>+<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Fort Coulonge: halte cycliste"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.5479278,
                48.2300621
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/n4ce08db4j8rc1t9hcaq53304s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivwmBP5MdA1nb-k8LqltvNHjptxZJ2FHKcihe-TBquShJyJhs8bpnpTJie012aaYruAasxC1nAaIwIozGVjTUaTy_udRqYui_JHWe0VKxD-BP6GastHKhAASgEzlimpfliIs9nphuRjXIX3p4U1vEVv-RZf7cwN82IQdkq9bZkkVutHZaGjTutoFZ_5A7uTMIZi?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline : Endroit où même les VR peuvent camper gratuitement. Toilette chimique à côté de la plage, on peut trouver de l'eau dans les commerces ou chez des gens dans le village. Plus loin en descendant vers la plage, il y a possibilité de dormir sur la plage si les marées le permettent!",
            "name": "Point 180 Camping gratuit"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.2546236,
                48.5395945
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/5m9qfhbertajh5jq09u5oa2ato/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitBfU8THb5M3ct07PQUzslVWoGkgdpK4RKJQM2hcYcJeQX4e2fAvv8HNnqUosJAtPMmCDULrIqtLQtCKBWa5YmUX-X3ec46hK9lenoNghb0xmuEausqQLUCLSVMx4GumXjRN8FoftY9PUDHqQpvyzstgPoD0_1JYYnKSOtRCejOzCYn34zt1fd1Wk7wgzbX4oSg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : halte routière avec tables de pique-nique, toilettes et eau potable de jour. Probablement possible de dormir là pour une nuit en vélo! Prenez le temps d'aller faire le sentier et de voir la chute et les vestiges de transport de pitounes!",
            "name": "Point 181 Halte Sault au mouton"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.0940875,
                48.6348513
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rm87e1dsptj5vf9kgbskfejek8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuJ5EZ7FvuycLFp0gd_ej6a6EtQfxZShVON6ljvnUGXo61RASMO2HrHrvwd9CynKyffS6Cn5nPFJx1-CqU5yttOwNoUhazxSWgRfyrX3_UtmHWHEL58NVvTMwngZs23A2tYvPrTTLHEB--AH7jm9MgN2wT2L1rRa5VRqRGTSo5VKWMGgLqpR50wKkZaUr7L1vlL?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : il était écrit camping interdit à côté du stationnement de la halte, mais si vous êtes motivé.es à pousser votre vélo ou à traîner vos bagages, c'est probablement toléré pour les cyclo de dormir une nuit à la Pointe. Il y a même un gazebo pour la pluie! Sinon allez au moins vous y promener!",
            "name": "Point 182 Halte touristique et parc de la Pointe des Fortin"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.8790816,
                48.824012
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/eef9tmqvu3dn3vjci2lb2t36lg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitihLkzfdXjmk3SwL-iN6vcP1LNi4hdv2ggnGbme1HIiJ60gQ3YUUZ6lfCPxxuYDfmHOHNW5-qOI3772xQcPTmirZ0qrTiJoDBZAEmJ0PheEocXSq4KdDz4kYM2EEqqxTYlsymheh4ti2sL8flda2AKKo7QwM50e0pQ4crbPCzWZxvugSMzTVfr-vLBHkO_YhZO?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : Plateforme en bois en haut d'un cap rocheux, vue incroyable, endroit trouvé sur un site de hiking pour voir les baleines, mais peu connu des touristes. Aucun service. Pour y camper vous aurez un sentier de moins de 1 km dans le bois/la boue à faire pour vous y rendre. Je n'y ai pas dormi, mais j'ai passé deux heures là-bas sans croiser personne, sauf les habitant.es de Cap-Colombier sur le chemin principal.",
            "name": "Point 183 Point d'observation de baleines de Cap-Colombier"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.8633746,
                48.8405522
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/og2qvmki0h087rcirfs569ipis/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivQWZydQti-EW9A5DtZlUkPjmJ6VgKu08tZnADphV_gxwgjxGJyvIVgZnQJfLehBe_4ad3PIpJwSMjZHpPNuh8fvjEWOG4PhVBFm5n2X1Za73kOKcKnlfrxvkf9FZK7lt-3O7oJ_KzzNYDuuJ4ItVTSEfQt_3zPbAD4ugfc0rS6_3B3AjIieMuG5cDYj4fSdzyF?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : tables à pique-nique et endroits pour mettre une tente sur le gazon (ne dormez pas sur la plage, la marée monte haut!). Pas de toilettes, pas d'eau. Beaucoup de VR cet été y étaient dans le stationnement plus haut, mais il n'y avait personne quand j'y étais en septembre. Il y a aussi des sentiers pédestres qui partent de là!",
            "name": "Point 184 Halte routière Cap-Colombier"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.7908906,
                48.8804465
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ltismjhivijqe0jeiah34nonlc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuRH5upNjefbA8Lv06uZFmDPFGZk03WX6qzmLM-bc70IioYDAMJLqpKflWhVGqIayDy0SxHZmJNcRFEQ-z1oQR983PlFPjoGCej6K9zJ6ZRANQliv9KOfoqY3uJ-uwy1j9005CAovHDVdMmpt5TV49HZutpF5R0t_9t6ISoITW7uiMJMrTE_KxkL97w8e0BBpZz?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : Endroit souvent mentionné où dormir sur la plage ou les ilets (entourés d'eau à marée haute). C'est par contre un endroit avec beaucoup d'érosion et les visiteurs sont invité.es à faire attention en marchant. Je n'y camperais pas. Il y a aussi un site de camping qui est un endroit de pèlerinage innu. J'ai préféré m'installer proche de la cantine, et le gérant m'a dit que j'étais la bienvenue à dormir à l'abri où il y avait les tables de pique-nique (pas sur les photos). Il fait une marche tous les soirs, peut-être vous pourrez le croiser et entendre parler de l'histoire du village! Toilettes et cantine fermées début septembre. J'ai mangé sur la plateforme d'observation, la vue  était magnifique.<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fdgiqpb8i5gkrmqigv68ne0c3g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuYad8MOCQjD-JEb8EAXtLwXLPxOiytEYGd0KaSEorYgQJEftGncuJWif5rP1ZmKvOPpoNovYmlbvduWpIqDriRSa0-oPudQN_f6u7MPxb7NPgbhofpHCQeWreImQA8PCZUVhQEzakiu3C-SmbxQ7iuVjv3_VjQo7uGL3vu8Jeh8n5ZF9dFOURzO55EDf7Eas0R?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Point 185 Ilets-Jérémie"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.2555217,
                49.1033217
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/lgjhdmsglpiiapc6qs65plcarc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv79-1W-yEcWg9DNUofBSEY5hRmqNCvWtlFtAG9KAaRaD1ayELtVGtEjP7LfIyLjV1MwirWwlZi9c5wnYTVnSuNNqa3UFhLgrUP0e_O4awuxCfqmqiEnyGPlbfiMkMr0q7guGkl9P-IBn3T6sEcvmHjUKYYp8s3DhH4AXcB9Uea7ng-s_ZKYpcNgbcig3d4Wiz7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : Piste cyclable magnifique perdue au milieu du bois. Il y a une grande table à pique-nique couverte où il est probablement possible d'y dormir à mi-chemin. Territoire de chasse et d'ours noirs! Sinon il y a une belle halte municipale plus loin, voir sur la carte :)",
            "name": "Point 187 Halte sur la piste cyclable"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.0963506,
                53.8942864
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/r6kd4au88nlkvqek4u3m4oelm4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisonazVWCkLWe0AB3FMy-R4sikOqY3TUm26NNVuW6HleuKRkx-NjTBBJ89OkRVNR3r40Baj1Z4Czh18AACEIHKV97h6FXNuyyRBlNTeSiKj7kFlY5etIbZeK3VRC2fbnGfUoATSi_7N77DLuwOQ6mAFHeOVmRiwFaIExsF1cRnuDJbb4DG55-4ljruSI-PQ-apy?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : Ancien site de randonnées pédestres et de refuges. Possibilité de camper sur un des belvédères après une petite randonnée sur escaliers et ponts de bois. Bancs et abri 3 murs. Pas de toilette pas d'eau. Faudrait laisser le vélo barré quelque part en bas durant la nuit. Vue magnifique. <br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rtu59qgb5s3gu4s3h35oi5jl3o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis9xa9MGh2NlVVbIDVDpIJoXUHXNgQltjeNzJiumaGnXBc5JZdmqYy91Nd8TNsFjgMUFFCVhled1t07Ly7UAeaTmmW19p6pMRlcZ7SNyurg4Gi1GNf945jIfw-YZJ1KMWaNVlgtBZ2bJGbANz0ijsd1FIr5KZRIHDiPXL5VCUs4wqPa7yhDDXbpWZI0tVEVfDo-?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Point 188 Belvédère du Fjard St-Pancrace"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.2455145,
                50.3156449
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/e47s0t2ho9j1tn3t0m4e1s3ni0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivGQuJbG5vcafiWYTaoIZolca67L39s_2F9kDfO6Luwmvdp5tqggIDpWXdg_6iP9U8ajVGejGuQQ4_jHo8tuEDXmuPhlfQFWc7RxRqxErwabawbUrK7c_ALXS3qeVBpOgZETBse0qKwB2-qi8fJXMaYlW6YWJh1-aaq93Wgg06fB6FDAswyPC1nNRdc_0l7ZDRH?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : Tables de pique-nique, WIFI, toilettes et eau non potable sur site. C'est ouvert 3 mois par année jusque mi-septembre normalement, mais j'y ai dormi la dernière journée d'ouverture le 2 octobre. Endroit relativement bruyant à cause de l'écho de la 138, mais calme et peu fréquenté un samedi soir pluvieux d'automne. Si vous êtes motivé.es vous pouvez sûrement descendre dormir en bas sur la première plage le long du sentier vers la Chute! C'est beauuu!<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dgiogqbejj0nuf8h74chcqle34/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuNnbUgZSua7imaRXb68fKHEz6e_gmegw2Ch1NCZLfQ69gNoX0qsoP6IeJqRwk3yIEC7SEVNzV0abHtfcY3xw8qhUwbQAYRc_PLPL4QPFBuMZ2lYwnG8iMldRTUqupywxRnvY_gmA6Sh620VUM5gWsvL45HUhEagRwGiwrRrDgCQb7Wa7sQYEXIgyH104zlpQi0?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Point 189 Halte touristique Manitou"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3351411,
                45.5667151
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/i9i3fpj6itn4svl7tjqar3oaps/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitU8lq3gaPh8knYtpxAVhfHyKki-V92IO5sJa1bxUjuTdTwbdEQgRdzOxh8j3VKsiaN4w_vizEWLgXEcWMvsoHN1Y23lE79BSge4hEMc98yNMtxpEjh_eLw4ReSib9D-upb3JiC4Il8CI7XqcaBYKPSeUMkalKdBvKYIpbkK-P9Om4FcLl4zVGXm7wk6uM3UY9c?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Très jolie halte municipale, en bordure de la Rivière du Nord, face à un petit rapide.  Avec tables de pique-nique, verdure, arbres matures.<br>Dans le village de St-André, en bordure de la Route Verte #1<br> Site visité le 6 octobre 2020, à notre dernier jour de voyage en 2020!<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020",
            "name": "St-André d'Argenteuil, Halte municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.1039521,
                45.6052238
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/bkiqm9ljtlv7cad2lno10t8650/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivBDHoMg8TendXZBX_MF1IZQLJhmfmu_eWwJvLPJlj4XQsW7yZ2VIMTY2GpXuVxS82II2VmzJ04VODzcNW_UnlycEiJQV__Qf2UBQd9QDgcPaoBnSFx5Laz3BNZ3pkb5bpx1lGDR4BTW2MNQqN8L757DzAMjgbWbetb2a7Td9ZIZL7tR199YG85ncHRAGR7uSkC?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Très jolie halte municipale, en bordure de la Rivière des Outaouais,.  Avec tables de pique-nique, verdure, arbres matures.<br>Un peu en retrait du village,  en bordure de la Route Verte #1<br> Site visité le 5 octobre 2020, à notre avant-dernier jour de voyage en 2020!<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020",
            "name": "Plaisance, Halte municipale"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.94251,
                45.72891
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Passer la clôture de la piste cyclable, de l'autre côté du chemin de fer. Près du sentier de VTT. L'accès est plus au Sud (porte sur la clôture).",
            "name": "Camping sauvage sans eau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.8656,
                46.40133
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Une table de pic-nic du côté Nord-Est de la piste cyclable et un espace plus au fond assez large pou installer une tente 3 places.",
            "name": "Camping sauvage Rivière Rouge"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3751547,
                45.5660381
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/tk4iv53gciv12r8ba79pj8s1i0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitaBVBfVDvXW6guEVLY2xeXFlz-VFlXOxPKWmjMTWodhjus84SszKnHVjOgrcsHIjAvgRmFqlIclnWq4W8F1vAL7sZ9tEg9ouphERdUbbmXiDUALtsymSbU_OX1OzQaOwjM80R-hNis0JiO7ID_DWC-x3Cdg8_OKX452XONmru-ZSXSzUntTjb6xe7pBs6JCIQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Derrière l'église et la maison adjacente, le terrain délimité appartient au gouvernement (Parcs Canada) et fait partie du Lieu historique du Canal-de-Carillon. Le terrain est en pente descendante et assez bien caché à partir de la rue, donc idéal pour passer inaperçu.  J'ai jasé avec le résident de la maison le lendemain matin, il avait l'air habitué de voir du monde passer la nuit là. Casse-croûte à proximité. 22 août 2020.",
            "name": "Canal-de-Carillon"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.8965644,
                46.0060802
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8thcsn4u82dnv6iu8o76nldevs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis4Z-hg0wg2aTx0S1SXMrrzXLkxfz3w815UYO79OT1vgk_XThYAA8mQffIaK3C3xOb5DoF164h-JKLjWWG8iEX6lqN1aRHfwM8yUbJSimDXi8kwSr8N2kJSq1-GfasmjRnsY0nFaVpkcN4AtWKDOZujtqu-dNkcbz0-SB1JGM7oHv2kUxtsqkAydMMLGn9rPDIj?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Si vous ne voulez pas payer le plein prix pour un terrain au camping (40$+ tax en 2020), une alternative ici: petit boisé sur terrain privé, mais non occupé (pas de maison). Facile de se trouver un spot discret dans le bois. Commodités à proximité au camping: douche, casse-croûte, etc. Juste à faire semblant que vous êtes un client du camping qui revient d'une ride de vélo! 21 août 2020.",
            "name": "Alternative au camping Lac-des-plages"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.38732,
                48.70419
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Beaucoup de place pour installer des tentes. Camping seulement pour les vélos. <br>Toilettes et eau disponibles.",
            "name": "Halte routière des Pionniers"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.9565435,
                46.6215854
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Sol inégal et un peu de bruit de l'usine. Aucun service. <br>Pour dépanner.",
            "name": "Espace semi-discret en contrebas de la piste"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.80396,
                50.20128
            ],
            "type": "Point"
        },
        "properties": {
            "description": "A l'ouest de la 389, un terrain près du lac près où on peut installer plusieures tentes.<br>Il y a aussi un endroit aménagé pour faire un feu.<br>Un accès au lac permet de se baigner.",
            "name": "Camping sauvage 389 - 3"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.9461512,
                46.6202301
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Camping officiellement interdit. Notre tente, montée tard, a été tolérée par les employés municipaux du matin (aout 2020). <br><br>Toilette sèche, tables de pique-nique. <br><br>Possible d'aller un peu dans le bois vers l'ouest pour plus de tranquillité et discrétion. Il y a notamment un espace correct à proximité d'une cabane à sucre non visible sur google maps.",
            "name": "Parc des chutes Rouillard"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.54567,
                48.07663
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Il est possible de s'y installer en bivouac lorsqu'on est en vélo.",
            "name": "Halte d'Escuminac"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.5357739,
                45.9365454
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dgnrf2i9f3gsvah5maug28vj4s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisODw2mLMGexxFljDYCWrInmh9LNYe4a6RVqyUzd7CgMn7rH-7PR-qCiWpb2PP85NcFfDq6l_Zhwh5oDOaue2fy-SozsJDR6W-HjGKObpJ-0YAt5vM-QoH3w3bZWpq9V72WNK6MBIrbyV8lsWvv3S68cHJ7x2SYFCD5Scvr_6mmV1nmF0WDUHLkWNjyhRxVz9uL?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sur le Corridor aérobique, environs 1 km avant le village de Weir, cette halte cyclable en face du Lac des Rats serait un bon endroit pour le voyageur fatigué.  Table de pique-nique, toilette sèche, eau du lac à filtrer, espace plat sur petit gravier.  Secteur peu fréquenté par les cyclistes, car loin des villages plus achalandés.<br>Site visité le 12 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8sl76ar0c0u9np3179suh07ets/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitF0e9boq3ra2uvq4RP9w0iH_FGuPiyhaD_atUdRMVYQQDU9Px2rsXsRieJVPGpwg61ex7mICOUO-017qGOXZSAeW8xZQH_YoIyGY2kn-yUW_BRFNHS_UOivQqmNd8jfr09W35TREIV2jyg4GUY1uT6K4hiCYM-vLkbgIadWlwLYYVSMZl0z8C8594qhiLgmQbF?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte cyclable près de Weir"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.6187724,
                45.9684311
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/uee1g0j7rgcc2fmikc72bed61k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivYXatC3-7Ny9axZjDSK-wnOCwM3G0XAMaJPxfcLfYqsyCI1Adp7MCIPGM-lG7ewKM4LDBUyVaET5Mh37oGhdGepRbQLB1C4Ox7Wolsheyn5HpNIxbWEJayqErmLvNpKuA_0xiqeTYwoxpV9C31sgICdsEmzfwcs28V3lMDoYKaq01tNBR5cvj-6ZY_jbNl9-Wi?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Près de la croisée des routes 327 et 364,  le village expose quelques pièces de collection de l'époque ferroviaire, à l'extérieur de l'ancienne gare, qui est maintenant occupée par le Bureau de Postes local.<br>Il y a autour suffisamment de verdure et d'espaces  plats pour y monter discrètement votre tente en début de soirée, après  les heures d'affaires.<br>Site visité le 12 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/7uqpicbddpemdfb203h25hct4k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivEFZ3s8knSAuH2tNCyLIF6hknEr1oQ14G50MACzMZ8550M5k_UrA-ajeMtBOCfHDhF3HQx7JXgS_SJTH2htPi9rmYy475lpiWBy3wpSRF3MpfNkZTpobVb_Kv7rC6MzRudTmSAmFp7DeODIv8onni4kKhAhfig2OIPhwCYenD4RJWzKJJ6NuLSOYpPx2QBBgHY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hatujsdlc08mb5ikp7buqgugq8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivvwEPFonsTbEdfZdfbl_CvcolKy1zE3kMDwTAZQ6zNwyY1LpV_pm9KDH1bxWCQ3a68xTyzEgh9A-vhULIaJzJLUOu1tWc3SxlyYGLQqKfhIkTRMqdtdfqhB8m10tAcgvimNEJVfAtAfknM3BMI5O6HkiLBQYcp4E9MRxR30C-1kgZLOhBxAYEi1PpOrx8Szdus?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/c0pvn1okfinagcomks55fdkqm8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisIEtJ7brEzyAdYSJ2CsAmydsgLpyJoVTXJKUpuHAYASiCiSXQ5xyWPFbjx3u1KXunenyC3enTCMrnX_laJhSKL2EmrTmXOG2TsnbBjgIV2dgbjoDJF-cgehOZB5Ouoe34n55LmikEug0Or3ack9x91UiwqMwdJwT2m8nvEun9rR3WNa3tHFCs-fhYaC1Gnento?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Ancienne Gare, Village de Arundel"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.6334994,
                45.9750146
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/82eeg14nh326v0hjvs7ndoj4d0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitjrhcPmmWHgJWGuIiP-0KQengm9-671n8usxZN5bxm029ZR5XEgs7N3e3gdPRbCNs5k5B6FwXILnW8K346CC4YaWNJcO_4-16wXQQ6KdTmm2j5GOZ4JPo8cSJ7WfwGu-6VqydvCSQOhk7aHm5IpslC1EsOdqUF26A5Rb0NX2RDqMURIz0akXqZa66qjOuvWcRY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Ce parc municipal aménagé juste en face de la mairie est fort joli, en surplomb de la rivière Rouge.  Quelques tables de pique-nique, un peu d'espace plat sous les pins, gros arbres faisant ombrage.<br>L'endroit est public, il importe de ne pas y monter votre tente avant la brunante, ce qui ne vous empêche pas d'y préparer votre souper en attendant.<br>Il  y des toilettes publiques à 100 mètres de l'autre coté de la rue.  Un marché Richelieu est aussi tout près.<br>Le pont de la route 364 tout près pourrait être parfoisvbruyant, mais le bruit des rapides atténue grandement cet inconfort.<br>Nous y avons campé le 12 mai 2021, sans y être importuné ni questionné. Un bel endroit donc, avec un peu d'audace.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/k2ccsdjp11226og82nvrme9jo8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuNsKxHdXaBcr3oKg2QqeBHcIsH8St_Maye4TvN3UK5h2hjL5p3peRTRkVqm8UWPUVWYzdx2rJY1DmC8IYQlAgDnPBSdZp3WmDcdiXyQzy7ZLprJnB2cM5q2A1ETtn4P0HESWkxS8Qt0mE0b0dKPDghP8EkBKgUx3GZxK558jwqlepwQ9M6VWAgmj_2DOKDPIzp?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/coi1md9403eo8qh1sh65emlgas/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivFatx35HDx_XS4shAyVAoDLSxPS6UvBPpUjes7s6smGBYEYPuZZrOTFD9TVd-tB2XbZZjS-8XibmpgNo49Ay8KQt1bVFCDdeSx5awclygFJcDaJAE0Wc5zo1WJGLsQ_Pg03Z7-_MgWYN8y5YAYQcu296c4cWbJLuFh1NaIEnd5XecksKQuwWrsLI9747bM8zgV?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/1fuo5cqt44989gcbh2eiqtbtpo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuTnSk6mKLxWvbvY-b4wxYls2n-gcTtExVmPnoIhDVvt0CckHhZTZHlwa279oE_nuYDWLlyRRI_UA1ywVowI5M4Dkfzj6X3hhQvXB7iJ1VZTCKfgrLIEmi6AzCbH_RxizoAbNCwfjd1pQs2XMy6gT7Wz2gYG6BRRFO74pmUkZB4lDFv-YEUsadmpK7FDpniP1Zu?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vp8drr84u8rnh6n3n9s98sge5g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitlzuYimgZ-AAzX6szXiP-nin2_Wf8iiz6n9YMf2H45o9BATbbSZduh1YstZi01TyWS1SmHhVP2ryZVm9s4dhvrp3t0HWlkJqb33PiruzW52H2rTGboSzSbAFAi3400IN5k1MTGh3yXlk4FZIbag5-HeJmz8zacTKutH_bGPWB6VRdIDQHBXJfnd_s3LjbsEiuT?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/eerpsvb3cldd34q6ph4qk5kdrc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivJwgu2ZH3hvR9CRHdTJgIrNTaLzbRkkQrVDbDfJ8aOIhAXkz-eb_K5PwCM7ZwyiPxOxJ7KkQiyZ51CJWQF1_IGlRL7vXZ6DxUeeqToDYXxI6bmBNe1n1ff7q9uBKOmUwYp88RC7U8vtsIqpkhC673d2Pn1Fc9ma8Z6GUJjKH3eQgeLjmEM-h47E5kLQRn-s7DT?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc Ghislaine-et-Frederic-Back; Village de Huberdeau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.6404543,
                45.9923967
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/if5oeu09f12astfpr4r0mqpa80/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuwKHVSaD_OL_JhdJ2fqQllWcRcDwS5Qf4YAF1jXBR_HI5gC4GeSE7xDhnWbP1afIAv4WRzj1VR8hNv1XD2B1QJgl1bHa-3ImbJpd0YIaUzKVn0S_CNmebtf_qhbmDBIINvH81VrleXe-DRhOcrt2B3aSRm835ki_yYr9Kr_XHh-doJIrW1k3HMQNhfKPVZ1-C9?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>A la croisée des chemins vers le Lac-à-la-Loutre et celui de la Rivière Rouge, ce petit parc est équipé de quelques tables de pique-nique et de grands espaces assurant une certaine intimité si vous attendez la tombée de la nuit pour y monter votre tente. <br>A 1 km du village.  Pas d'eau, pas de toilette.<br>Site visité le 13 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com",
            "name": "Huberdeau, petit parc municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.6727063,
                46.0756233
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/o8skg2quu5m7j1thkuft2ev240/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis0U9jfa5U9vdRMBPswAXu_luh74ict5JKlCwzHfsJaoDUkwK_LTgaIrMdLyDeUrfohCqdIIL1liTx4c7k4mIlfj7E-3gnxZLbP3bINcUTTOFSRkk31KmOhe8YMYu8QL9CFuciFtcHXAjA_ow9yju3DHBlP5rzb-jGC0pm-lIvB-00eiNQS6ZaX6yq8DGgdScEG?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Au milieu du village, en face du petit marché d'alimentation et voisin de la Caisse Pop.<br>Abreuvoir sur place, toilettes à proximité.<br>Quelques tables de pique-nique installées sous un gazebo avec toit, prise électrique, arbres matures et gazon sur terrain plat. Y monter votre tente discrètement à la tombée de la nuit.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>Site visité le 13 mai 2021<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/api3d34guflbt3o2n9age4alc0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PithHoGoJSyqAN9sA7Xe8Wju4B_O0bFEX40eEPH0T6bjXRuvgNyUn4RNhPXAPjwLI1Km4Raw0teKPTJp-snfiqNWOoQuhpoHHq9Fu_QFCzhv7fK8ljz8-VxUrctmUGa2n6_S7kmitoT12zG3LI2m4DUiwWtJwleNdC1WgrpFKvbSZ_3VJIBsqiL79SokDf4sehLe?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vtrvvfb1sin2k4ju37mk67qk3k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisGttAgzfW0AQgdYLYLq1_NgFxnNCmz8Vekvr2giicLFnDEPxhwk9SVvJWlBGq8CEOAlEx1dbFf3vuPDaF4aiR2fGdu4U4Qhxm0IEuZty3G3tw9ChmAq4_H-HhNi9ocf_oeQtSXmmLGUklZVyQ4O8ziHbzCKyMPjewmR79enubhHbAYxH2L2q0fXCw6C8aCyO5y?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Village de Brébeuf, parc municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.685516,
                46.2039588
            ],
            "type": "Point"
        },
        "properties": {
            "description": "En bordure de la piste cyclable Ptit Train du Nord. Le bâtiment est ouvert au public, et contient une toilette sèche, mais pas d'eau. Pas mal d'espace autour pour monter votre tente, mais aucun service (pas de table, pas d'eau)<br>Site visité lors de notre passage le 13 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com",
            "name": "Ancienne gare, La Conception Station"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.707267,
                46.1784243
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/1o26fubibg5ljv6anrsicdlo18/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitfWkEhsE48fm-2CQfPckIWGHQE1aZxx-_qf6beCwhwRTqKQmPvfz2Xfg4IPIprVM40Hgbu3uLC1tWanYhl0szzSay3t9ix1t8esjYeRfzi_IIUBSnv7deSmEsuB8s9c8SXvLCwH6QlFml-Mfour-Z85I1IVyb9g8EgmVWd3VxSIUqIsURcCL0rfNWZXlPLKUdQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Joli parc aménagé à la campagne, en surplomb d'un méandre de la Rivière Rouge.  Très bel endroit pour camper en fin de journée, quand l'achalandage de la journée est terminé. Grands espaces, plusieurs tables de pique-nique, toilette sèche. Pas d'eau, mais possible de filtrer l'eau de la rivière. Assez d'espaces pour y mettre plusieurs tentes, tout en restant discrèts pour ne pas déranger les voisins et ne pas \"bruler \"le spot.  <br>Visite seulement faire le 13 mai 2021, mais nous planifions revenir ici pour y camper au débu octobre.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/pqq2rsag3d1pmurv6uqs8oim5g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivDXRyBc1moMydrA2oh89UI7gGVzWABA7vUKXgzGpuxNSkFxE0MCigN4DepXJEaGaJFRwurm1jpHVBU9BgViFEbIvHpY8-5wKqnrByfAVDtWu7TUGpT4Jir0PDotGJg36JiHHAkjw4ejZF2r1rgbMdLTHfarlG-GhK3RwDKFB_DWPAklEiAMaf4r-g4AakzPVev?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ujr3tadr1aeokefaioc2e9ud4o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitXV4pDrvttlFb3Ns37CHReYioWm5VPqbN_EU0XCvs4qQwTb8GNyB2BFkdipUVVWEoAxWG3KLGveFWwMN42IHXs2rEOzAyc78KPs45Bq0bayiJ00m4RUib7_oWHkXu70m0IctKRar_1CClO0ot6yUMAM1SMMH56tXyik_vy2udP-S-72em2ayIVKuHTXMqXToub?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/p9sbdqv8hkul88s8onb47iderk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv867BhAQ9qHouJ41B684YTEYxGcL1jwPws5jbJqe-ev2OV8q-MYl5LF5MX-ElqWKnwZr1fXtbnnVdL-_uvTb2UCUPULKwJ9D6vVlkRHUd1dQR7ZKZ2pchulE5BPwAA9XF1eEONI6sh99ltwPd9iz-qx_SX4ce5VnZpAhXg8TG8H2KWVSsU7fVvlOzaYybGGwy-?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vvel4kkc575cn3l4facfq780js/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitptanVo51-CMndMGGs3Xk2YJZzzooukQT7qm9ZO8yD-auna4V0HGaS3c0NCfVhLrhvNiZf3sa-d1Jk_4OKRH6SYq0gnvrcvH8-ebL1x4IotBl1J40d4Uka8VUDvPrPX4GzO2s1SjoXpW7NPO4yIVivYUWPebNzGgSIiivsfIi7_XXbNUtHZ5Rfh1tlS-Ep_995?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc municipal, Village de La Conception"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.8121267,
                46.5579886
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/q2jr0eugolktpsqvqpnqvd61rc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisfZ7PcYywFkDk8XWWQN1e4yV3Wspos3tT2kRUvCTIKLVJwvaKNkWhCUJMvtlTOrEir1Y2RE6r_lKpENEgpnTry4TFWf_B9Nm-HzJJ4VY2op8WTd6lV6QrDAVSt2Pb0d_H28lxYOCSAjQo_DxXbKbuy2vAVjQ7pI_c_JH7AQR4i_nEVvucO3B5WJZWPb1Qel3jK?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Ce n'est pas un spot officiel. Mais on peut se mettre un peu à l'abri derrière la haie d'arbres",
            "name": "Point 199 Cimetiere de St Zenon\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.810113,
                46.2655877
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Réserve naturelle sur le bord du lac Saint-Pierre. Sanctuaire d'oiseaux (et de maringouins). Peut être assez marécageux, mais il y a moyen de se trouver un endroit sec et presque privé pour sa tente. C'est assez peu fréquenté, je dirais une vingtaine de personnes par jour. J'y suis resté une semaine à l'été 2019.<br><br>Note de l'admin : j'y suis allé faire de la randonnée deux fois en 2020. En entrant dans la réserve, on peut tourner à la droite pour la passerelle ou encore continuer tout droit pour longer la rivière. C'est plus tranquille par ce dernier sentier. À la toute fin du sentier, il y a une grande plage de sable, par contre, il faut couper à travers la forêt (difficile avec un vélo) à la gauche lorsque le sentier devient inutilisable.",
            "name": "Réserve naturelle de Pointe-Yamachiche\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.2560664,
                45.395042
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Juste en bordure de la piste cyclable, il y a un petit boisé avec des sentiers non-balisés (Au sud du point). De mémoire, il y a une pancarte 'camping interdit', mais on y a campé sans problème 3-4 jours en 2020. C'est fréquenté par des promeneurs et promeneuses durant la journée, et des gens qui font des feux le soir, mais on s'était trouvé un spot bien privé en retrait. Possibilité de se baigner dans la rivière. Pas de point d'eau connu à proximité, il y a un dépanneur sur l'île habitée juste un peu au Sud. Google maps nomme Fryer l'île plus au sud, mais c'est une erreur je crois bien.",
            "name": "Île Fryer \n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.0836254,
                45.8008737
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/1lcr6rlh4eqdmvlbi5m2qrdk80/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv7QlZ3taHFJRt8O4pJHOKuXVf7NxXYtP8vw1AWUokpZpeF8RK8IQpyjdW5o4z6VU5NraEb7N1SieU-FcOgcxH5P17t3tkV-KJ3rt43EKcsHvT399He05gFvSXUYJSdzO4xB87a84jgYrlHo1XEdq3BDcZ9_eUXO0wm-82idobGDMdOA0pL4OGgcD8h3ad6Q8f7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En bordure de la riviere et à proximité immédiate des chûtes, joli parc aménagé à 2 km du village.  Vaste, plat, verdure et arbres; Toilettes sèches, tables de pique-nique.<br><br>Site visité lors de notre voyage à vélo dans Petite Nation le 15 mai 2021<br>Pion et Giguère, tandémistes et cyclo-voyageurs<br>Rikimiki@me.com<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ctaa3ovctakee1ccdl4giau2n8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisMovAzMLV3pd5paQprE1ke6TSMuVfUfxtSVOtxu6NbqSq0hatzUujqRM4zCnl5Qx5VEj6qlMDLAYckLw7zvc6HIQLwTcUdDG9aPNvMpcOWoRMM8QmIoxTUxSvIbfQeuATWN9CRjo1qd-IWTZJyGbINtQ83I8I9KOQu-wW0Uq0Zt_vR5wwtAbWCYOIfznQNCSul?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ndq080eit6o8se0rcj7sg698k8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu9w8rwSJAccTEG2cGvPa1t23beH7x6OEUZYTL5hCjoHDS9fMVJVVaLCoDci3qK_QnyVNPc6YsgssYPjcM6M_RONA5LBgPEfFJhbFDLwQUuf8_UATwB8Qrulgdp19BxxoguHwU8dQqDTC_Nj5IvsG1gNrN34HhdFtetlnxRS6CuUaFs84Wy8nnmPckP4Cfxacd0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hfvn5vnd3v8olr9stsq2auqnis/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuCj_w2XLp_c-PdLD1AHJ2bhgG3od6DX1xDoO5YMIvrTHthZ2IgWwr-rGFa-MWRkPctydcj9g3BsTBxLvQ766UA8egmY4Z4fodvgqmCF51afEiY8UEiSw3SZWZOl5MPt9jJDQWnTxKUzMUOqo5uQSDTaVBiW6jUynaQQB2KR-mrje_mraLNgXpkQIls_MZwBIVX?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Ripon, Parc Municipal (Halte des chûtes de Ripon)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.0749256,
                45.7401073
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3avoj3vjp2mflh5qf0dafi657o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitweiu_tEBQl7TS2oF3gNNyX-ycEYYp1HhJR4_wPHgKc6-EXoHpK99s4_bFgxAgdwKgv4OpwwTQBPxeWviTm1lFg0X8Bs2GfmK19A5USp97AFyDzrgTDTeFsRyOb-tD8kDqTYTU0f-BjR_Bdnf5fol9VKMgSp4YJ_IF-PJzHgUufkQ9_BQLlvmycs60nBGigwaJ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Environs 1 km avant l'entrée du village, sur la route 321.  Quelques tables de pique-nique, verdure, arbres matures. Pas d'eau, pas de toilettes<br>Site visité lors de notre voyage à vélo dans Petite Nation le 15 mai 2021<br>Pion et Giguère, tandémistes et cyclo-voyageurs<br>Rikimiki@me.com<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com",
            "name": "St-André Avellin, Halte routière"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.1015606,
                46.9190362
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/cve59rj1pb50cq7lk7krbcsnto/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitzfI5KLhiLr2GFFaKrbQ1zy26yodtdgQOaVZYaPR510g39_U_AjBqSow5PTgaaw3Jvls_NDvuoHW7K2XHtNwTSoRTA21n31iNrlJ35p_ZX-Z1aobY3eRyaO9LB-ucgAyQ9-rrKY896lJU30K7NdTKxwrV_IcF-tO91IQfZdVtbZ-VIz6edJpRI8T1A3SbDKyCJ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Il y a une table sous un petit abri et beaucoup de moustiques!<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/cj2b97ncsrcsdm5aluap32ae38/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit2xak0WqIq6e5gElgUTrq0H4RDIJW_najESEjA20Wmshcq6Z7-iv9HRJGWTCwi9rUv04bMS3DrElzHFINCNtotfT3aFnfhcLL3oq_HQU5hlMya7hOmN5oJbgCLiV09jTu24_N0Ls1TRQsqz1kFr7_QlF3nfsnxCKYhv1j963qCsnigRcMs4eILZ3mv2Hm4UXW3?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/1nt0ch1e2t2m2du8bq9qj2pnps/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis1LeGhF-LASQhYbsfpP7pPF83nz4JrDKILACx0Z1APKPltc-ro7iC3ih8vWeXhmKNLehklJcH7JLKoaKriBRAnlDkIjsM81ohbcaPyPccFtqndIyo-13NbMFF4ddAZXXTmneh9vNSSO0Ffu8EsfqzWXSjVp7va-ZOddwp8iDSU8jn2GXfif2fsmVnKz5HnfeQA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/oko5pcb3affqak30dqul4a9mm8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuWnJYa8Vj7eRwBPI-IB415adVm9v915-31crkpyD3TECLX40E2rXGaBgEcHeJwnZFcUUM40UduC21qTmhetCLwFTcH78BR4IvgmGawj9tVDfzXXOfemv0HA2UM_R32u2G9SK3KYydZXGK6t-6AacxwPd-FCislLPoqbjOFsBPStxlIdneGwR4xZJexPV3r8pTT?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Lac St-Père\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.4740605,
                45.4388006
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9ro9d4qfcm5c1c6am333mpm5g0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisb_6_ExcIVlPjJLxW-zOcFVvHDgg0xnu2WxbyWgVOwOwYPdUY3t4LUYyk9MfERb7m7XnC6JmQrm4JIpyrAVFfVBd_GtMmxOtOYvz2SBTaLCa6QE_IH4vSeuA_Dubn_SaabLrriiOqyKitYymxwE_vjNuR-ubMXMGO0auM3V6SrFZbuyOTh5rSZEXdDvkYY47B0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Un peu en retrait du village sur la concession #14, un parc de village avec quelques tables de pique-nique abritées par un toit, du gazon, quelques arbres maturs. Pas vu de toilettes ni eau potable , mais le village est tout près.<br><br>Site visité le 19 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dekd3q21q4nclpoc1q1bss94a8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuBl3F_jEHGlCSuEvP2fBm46Nqz3ECVfQmDHwsG8HsHMIwuZ_LFmP6alBlmInAoqEpnJ49W7UnKVz6VbRN6bkyGikimaSWAc2YE5LWMmVMDyHkI1zl9nZKQvNkGMKrd7grZUP-5tOsmeE6vyMaFhDTok3gFVb63xBQLf0XIZvZsRmIxGnAFGNpkiqtgBt7Moh2S?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Ste-Anne de Prescott, parc municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.0595997,
                45.8265639
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/gtrehhsj76kao0qgtnl8gh5ecs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pithjt4M9IeBhYxHTpfllV5IDo6Bo1mqlroPk_6YhBM9OoRR99czs37HqA8VmprvfYTUjpQVksbGrM0_QcbgIGZEB10vHrglWDTcH7CZHhBiwTdyc7O_9xXX9y97lQcYzFMgYeOPx5TblMh8EkWB1CBwRz-_1GvlNI70wgoiLvhsOF6O496TFHdYGUeVgki47PCX?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Nous avons une prédilection certaine pour les parcs municipaux des petits villages du Québec! Ici à Michaudville, le parc FX Desrosiers est joliment amenagé, avec 2 tables de pique-nique couvertes, des toilettes sèches, de la verdure et de gros arbres faisant ombrage. Site visité lors de notre passage à vélo le 24 mai 2021<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/a4abqa618druigqhptg45eve78/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisJ3wgC-r1dn6iQsMXWTwsQXXcLMUdq4cgIA2L6urfU7aEBht-YmwJJ5fuURS2NEqUO8Q_sKYW8fSZLl9jbL7atCze99Gab1B4-yZThi9G_5RmYeAbk2W0jUHNqE0EAVytGrsdQghmERAcHXZZEmqDCeaNM-98kJ-hZh_PFHzNjiL3gIhMp3VPNPXIyBVwjtDsG?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hn8p3mbfvkqmsjakm4h89o91v4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuYfsMK_KkAfsXpgydWO0bgs7spaeA_KxC8mSOSWnxEjL36CfQ9xuzb6z6uu9-zUB9a00lvtlXLTP1ttII9WSxGO2rHYsANaiBQaJionqida8tumf4tvtMZqzcpjCDU41SEN1hhRwMjfrlwdQHF0TcpbK94STLROjCL5LUFbnZvjERHps4PPYNqw-o8NsqTyh7z?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "St-Bernard-de-Michaudville, parc municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.8557018,
                45.790891
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4fgg7smdplcgrqimtbvno6d3bg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuFaoLctsV-39k8oWfG2LsjY1jaLQz-AS5iMSyfaDh6ApFPRuWlHkSJ-iaofcX6kk4OCL6RyqMzHKd3n58gP8_06uJEve4I85Oezv3JdS2szNTL29L9jg0unF8oq9FwjjYkV253YNNdksReAmu8gLzRzQkbN4D5QhKw06t3s5i7pLIt7zYIAIE2gtBHjtxn-wxj?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Nous avons une prédilection certaine pour les parcs municipaux des petits villages du Québec! Ici à St-Hugues, le parc FX Desrosiers est joliment amenagé, avec plusieurs de pique-nique couvertes, des toilettes sèches, de la verdure et de gros arbres faisant ombrage. Site visité lors de notre passage à vélo le 24 mai 2021<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9m1lbau7u652knnion8sm7dp9o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu87MZPIlnz1Kxzk0WpyKizPR5L0iZYVHwD5Q0d8tTMjoB-v4qT6TQCi0-gdcyxS0PaRJVyxF9YC8RsnFJgcwqAG4n8UWah2U37hkawSzMzXyYWjKtHBr9VOocGdn8tcbapzSgh7c8y6Xo2S6R_9Dcy96-BmWdR5pm0nZRnGtjLni_E2uK-AsF0oU4A849zvZmi?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fncu61g3b535dhkok1q05pn01c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitiVxkXl3kNE7H1Z7q9P760U05zysy7ldeI9PKX-k3LGmbHllFZHDrm06a_MoDCVUDZwrH3NtUvA1A5xoH77YYSV5FoISdS4i0WIHQR9do4_rtCUDhkihy7AHcO-BEEY3DxpCs6MJDt-SMw4VJocgdAzoCyhc-VYaLpX1Do3G0BMitUCs-x0xoJoMgNOKsHiCw-?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "St-Hugues, Parc Municipal"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.5260866,
                45.5758449
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/cimsq3rs3126npkslksq0ljovg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivvY6VwLvFPDQuoOWH41iBI055emKZubo2pmCsh-Ir2BVpN2hERH5f635MTeVWV1ZwV4KuDp-TPXGz1arLEsP9XjmQ6GS8McL-tu7BzNY3uoEO2A4IEXmU6lRpQrXZ1j2rHnryGfiBbQybp680iyED-qF87rMnQiz0B9Qky9OpINb-crVHxvNq_5aiI1bkpMnIj?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>A l'entrée du joli village de Roxton Falls, une halte cycliste en bordure du sentier la Campagnarde, surplombant les rapides de la rivière en contrebas.<br>Amenagé, avec 2 tables de pique-nique couvertes, des toilettes sèches, de la verdure et de gros arbres faisant ombrage. Site visité lors de notre passage à vélo le 25 mai 2021<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/r1g4r7al5rpf484hgr8okt68e8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pish7P_koVT9xU1vtUX89RXkxY1pUuf51sR4XSYfqw1X7iVGU3N6n8MzXwsRyWb2C6cgxkbDUq4sq8IWfIPJCyILHBcP87eb8rMFDrJ_uFMSe-APhDFgfZbLsfj4ISA24NSlWbiDCk1CpLwUhF4iXEu8JzZO-487rgA_XFJWSS3jNbtzWBOJSIjgL2frGT51iQMy?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/033kfc5d86b57dc4olgif67tos/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pisszv9ooD0w5cYrgxjqUy8tUNvAQO61BBT42T_Nmsvz91njHMmMvw8g4O_I4oil-xF1oe6M-0gDxVKu21Iky9GknA2cFdDtlgplIAYPm6izhz_CZ8bpDd1HY_pDjetGoNhMQOlBvvyIZFPzzwSrHdIEuAcuy43RjJ30S3GoepB7HXm5oowiKFrb2imIH6rz4Dtc?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte cycliste, Roxton Falls"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.1703214,
                45.668485
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/0qpduqvv1ukso85ehmm5jefk9o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuaQ8LfepU5uFrmpysk3tVQ7xFwFV8opScBQjRLTac-L7lqwiCJ9SFXjdCwXOyEtDAunOsuXmOOJQxBkAT2s2dP33PtDX02piI18tYBqeYFen7uSymsgus9hCrCBuO1TjucK5IdlDrEfyvlOnRAkXHESekfoCxR1esf0TMJLDbqzVdpPQnf70NFvxM9OyQWTXOV?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>A l'entrée du joli village de Melbourne, une halte routière en bordure de la route 143,  surplombant  la rivière St-François en contrebas.<br>Amenagé, avec plusieurs tables de pique-nique couvertes, des toilettes sèches, de la verdure et de gros arbres faisant ombrage. Site visité lors de notre passage à vélo le 30 mai 2021<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Parc de la Rivière, Melbourne"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.0902093,
                45.6143588
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/k1c5jcldg600cd9voh20pnq19s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisdhnZ8JcQ_ycKfJaKFzMZHu5dSHarb95jTiT6hEDjSltcwszn28DHdyAW51BgL5oUuH6DPPnCRUxjlSt9iYFkcttx1ozrB02Av2HmCciY8UK8xKwDSwaCeMS107q3632QN05pSbt9JE7oJ-6_s1uUuJwzn08XYeg3igcdBmJK4_4wzZzllwPzxWSvcfBY_T0t_?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>J'ai campé là en aout 2023. Il y a maintenant une belle toilette sèche!<br>Il y avait des pêcheurs en soirée et tôt le matin, mais assez loin sur les rochers. Il faut quand même marcher ou rouler 2 km du stationnement le plus proche, donc je n'ose pas imaginer qu'il y a toujours des gens ici.<br>-admin<br><br>******************<br><br>Dans un secteur isolé le long de la rivière St-François, un très joli parc, en bordure de la rivière.<br> 2 tables de pique-nique dont une couverte, de la verdure et de gros arbres faisant ombrage. Pas de toilette; Eau de la rivière, à filtrer au besoin.<br>Site visité lors de notre passage à vélo le 29 mai 2021.  <br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dkna0824cseg34ddc3kd7qlv5c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu1dDyffmhWAoZGwZkHh75Cc-DdXdW_mbCPEEuFh_XGAGiDZpsg1yq7hXK65fpsmhYn72eO6gkwKUZsXSgfggegU3k4JFynvTJB-klC3aUs8AO7AAjDlqmd_zzpvYOORKPNg8VwfKSBrB3EA-HnLH83MpvpmCZlbCbVHusUfDijWA-zX5MJ_8NX6Nq9C_oREByj?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/d32rl0t4t0dfetgdealql0s3tk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivU8F5rMIPqyCvId5PdpXtIQRzZ2jUMiNFfXzKU0o-4AYMu_dwhPXE8k5MX4pQMnGIRyM5l_aUcXR5QHoCMJOFBn59ZusM4hXKA3ofKB6v41gNwuASb5iCwy7MZFR0j_E8mXiV7tuD3zQ4_MmpCNuBziKyYOO_KgK-2Abrzv3htORqw6TY5d9i3V9bPr7Ugd5z1?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/m8abq0jirqapacbq4806ol9618/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit5mdMXKUO-vQgZ4qVqPuX1izB62gV6F8FCDEykeNZs7ond5hoDW0oM_of9_9ptF6hbfkMP5s55lb0oPU_huSkvbR_6l2lwiy807Acu6IB1_xVLkD9v4eP986O4eSlJflW-MCN5J8EiNs2hyV9ZFo7o2m8KEZT1BaAfcn37IyRw7pjvLYxn5DbLEQourRKKElrl?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/l7ous8i15amu0ob45tvr45o9k0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisUF4nkWdGlyn9xWV7RcPhVW4dymJLp-23Wi9GXc72Spw1kaTDxIcaHBbsMZ6iaC5hTJiwJsM7x7xcNA976--9wHq4JAReqywgVv71pGtUPnjWeGsBvqTkgwHS1F6oNR6xpuUzanXzi568PNsvPLU-pVHF8FbR6yg7_gi9ObLePlYH3punQuD4ZDCEKQUWy1Qa3Lahb4Nn1IdIXm-O-GtuuAq01bwzzXN31OVw0ouh1MIO5cQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/b0d9m8t7dq7kibp5jbhv3avdc8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit2yiyv-FZgX_Jgvwx7YRPRZyakvC85Pxuxf92Vo2ALavUP-WpRrAAmxV9LZ75CTMQtgHqoCrjBfH1zwviHhkUTvlMTN6EbDMJoHP8JZxC_-jHhpLyAvKYwIzfbJQDCuRkfwenGXEMSI12nywOlVndjDuEWQj2g0kjyGno1vfU6WedDmCSo-3uxMkAGxqFfprIPTIYueRQX_rQCAcMh3vHLnr8Kv3jc__YtkWWx76fgcniFyg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/eukcqkobihn7e1228hmn8q34m8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitiUuqndrG6tH-_CZHXCBoziFPSG5Y6VXAQfRehBjbdB8SQS4nQH3-9o0a_Uq90-kA4BXJqY2Eiykw29qVDMcV2pId6-FEwNr2U4PPPWfo2OlVvqmvDv81NhvNnoZvD-6UqfKqchtW7xDlO61h3Yrt3wrRYc12s_vYSPxXWPC74THCOHN2_D7BJ1JUlmA9FbOiCmHxNOXxByufONpHNV40zHqXEGk5RnGOZmpa9iRBarotzxQ?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte cycliste sur la Route Verte #1, entre Windsor et Melbourne"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.0252616,
                46.7384761
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Derrière le bureau de poste. Sur place il y a un bloc sanitaire, toilettes, eau potable, douches, laveuse/sécheuse",
            "name": "Ste-Lucie-de-Beauregard"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.0343286,
                47.4471043
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte municipale, bloc sanitaire toilettes et eau potable, tables de pique-nique, abris couverts",
            "name": "Rivière-Bleue"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.1410578,
                46.6541006
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Dans ce petit parc, on peut tenter. C'est indiqué. Éloignez-vous des lampadaires au sodium qui auront l'impression de vous faire dormir en plein jour (eh, merde...) C'est gratuit. Ah, St-Casimir. Microbrasserie à l'est sur Tessier et Marché Richlelieu sur la 363 nord.",
            "name": "Point 214"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.2768744,
                48.3820156
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/q5a5vr64qch9pvuikgq7aosl20/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiupQ8zOki-55DQbmyLbnyRKFEIM1QWaQDXVjpE3oUHieirF7ONuWiAUpTceygMvOHQZ8LTVV7dNoYZxfEqGaSyg5mvbXyai3kQCLfmWnI6En5tXdnmWzcvlJ81DRK-SLmehaS9YS3b1X9MNwmcucAItMFNO8OFBe9Zwq_7r4j5fuahKKgCa1PvQo_l8UqIm2-R0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>en bordure de la piste cyclable, directement face à la rivière des Sables dans un secteur tranquille .<br>Site avec verdure, table de pique-nique, sans service. <br>Site visité lors de notre passage à vélo le 6 août 2020.<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/qdnmeil8k0c3s80dgfajskki24/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitlu4Axi6USdfN_A8PLOQIHOjoSF-BPvdL4npkr8EsHbYHbnsCYKaEMuB--eDcdQCUdLpmU1DphfDrdcvE1LuuHRbKn_Mzj7GSv3ynUGU-MiwjUTIHnT_60hnARyolsz5ATGV5KZgGxsM7eov3n14GFcoFid1SPaSpeMp04q1lF2VjyFEzRBLCXuo5zeoQq5S9R?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/92t2t5b3nbngcq7mdnann8vvec/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitrUgQuMxisPaPt6kxs-DpYWrlQRMyGD9XY0qCwNygpF-XOUkwd0ZJq_ZRAQIKClSYOMEpimtQhH5-vVhidCsdaYwckr-jc7EPnscOwQiyof05hdBQX3O6hTI0U9kgvR-OTSFSJwI0j1EfptF-UtawbhWSH8j1lNoVjyAcZfk2lOk2e9016ZO9sXrBlCrYWX01C?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/uo2omeqareklp1s8dvkgodnnsg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PislIpfJGs3dOmj0fPJqLSZg29VV3RMzhr0zNZT4v8iSDBKr0Kac07jA_NhtRg4WjBV3WjipmNpXJp0pyoLoyDBiW4Ed8-hSNGQFJJxFWIpLD-aqm1H7BE3755JvXsMHGh4FQueG3mstFNvX6FOnQjISOfcRmyAslBHEXpT3lGnf5qV0_amkeoofHcuQDtstjBW9?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/e9bggnnchb3dob9og51ose85to/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivHuCs9VCYAltm8H7a87uYy1XswYLs64WBC-y3rhlBo5Zpf0ekufC7u9pcQq_sKzPCiMN0l2K1k5mWpgaxLMLAPk6a8L00BGQPowTl7YEiVeMZnO1oInpuGRE31z5HS_jePqyQpGTCBtoEJRtXFY-jS_832XEtmF87j8a3Fke_W-41WGetuqthAcRuPLfK5BKKo?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte cycliste, piste cyclable à Jonquière"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.4644492,
                48.1906363
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte municipale, toilette sèche, pas d'eau potable, table de pique-nique, site en bordure de la rivière Rimouski. Possibilité de se baigner et puiser de l'eau pour la traiter.",
            "name": "La-Trinité-des-Monts"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.2480855,
                46.6052742
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8p4gp4jj2ffvo3h6j93otmj22k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisaGrrlgv2tgq-gs-JxxPCLVfxu5_aKwqtKBJMKgp0Oxsxk18Aleyu4FTbCp_wzP68h4BMr6xFEUjKLqSmBOV11LjDAw4QUDJfvgO7YKky69PY4ptXFSzA--06oqEQBFazGr50qbwExpbRvygOefcUI6lbizkIxi4WeYrwZyNLZ4cG4syGCzyZRZQSRKuDbfw72?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Joli parc régional en bordure de la Rivière Chaudière, coté sud face à un rapide.<br>Quelques tables de pique-nique, toilette sèche, beaucoup de verdure.  Très vaste, incluant plusieurs endroits retirés et discrets, notamment sur la rive en contrebas.<br>Site visité le 11 juin 2021 lors de notre voyage à vélo 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/pbi776beekqi6mv4rrq2hrhl58/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu9DJ692XpceGXppxso9G2D_hw82VTRph2a0oRb006G1Qg42_msttj7CH0uoiqBSVYgtMzTZQc_ZFCBWHroTHinshHbYZBQCMfpLtyPrLzeGfexG64iH56Jb7VoNlVxLB8HzTVgbA3cMd-jYoOD39uaXtMaXshBbjJgVgJO9MXRSIbVEW98l2H0iKLsWhIjLFOt?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/00ibk67alhguo35o1t2k1lutng/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit3Grbmy-ngYo0BtvNMXOWbyktbc-BIOH1qz_GxwxRZoHKxGffJamRD2LlZqPzHHQP2yFmTuBUlxQWWD_Wq14xCV6VF8MZQDPUJJQefVtu7gb_nf-zbRG0yzLl_s91z8nbVYUr-HQgNB_F3cAQm58J-cqi3qdVxaJLLmAnYouFaa7H9ix39qL3dEk_17cFK63wc?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/kmicjn0c41veltq1b3hgu9rc9s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit-pe2IrIxnT7US-K0oQnaoNezUldko7Bn7-aTNO5yTX0NZ1lCJGivZmBTMpe82cg-qiBg18VIVFi2c7AV6iubQinY7lM4sorWah8cm0PVbPemHPkNX5xBbdEBYsb86LQ-yujhxCJeh7DRHKZd3HexirkMCcQUWwCTVS7UE2FtieJFUWgPzlnUxsMO00ShByKkm?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc régional, entre St-Lambert et St-Etienne "
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.9889188,
                46.4131405
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/bofn4ulo6c107tgbnpi49n5d2g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivW29zJoiHj6jt2qCVc41wTeyCT1kaEzqFqSFw-nMS9qKF_9rTeYXnhzeh1EgepunDk33yq9766ektSDPFqGwBl1IA8F3WH9N8CMNbWdPWvRRTbJSri-OHBie4aIi3ZfmPAtiofo5fP8tYS7ysoZo1pq8PqSEmc_QwGn8j8ufQ_N7rCktvU75U5hzqRa18ezUoD?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Jolie halte en bordure de la piste cyclable.<br>Quelques tables de pique-nique, pas mal de verdure, quelques arbres matures faisant ombrage.  Site assez joli, avec la rivière Chaudière en contrebas.<br>Site visité le 10 juin 2021 lors de notre voyage à vélo autour du Québec.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/k7gna9t86n1pioqe1ki20u771o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitItyfwhN_Nue2yGCTvmX82D8D9zCn1WHf_c0UwNB8BLjt94_U3atEJqir366QGav4ulvsppUtTplzg-sO1Sg3R0S-0yxjCqM_ZKqkM-eZVoDp7C7AHPH_iovQEN6-XYnamCHzEyvt3RDXSqVIE9NF7osP_8Os95zWAWDuq0zB3-RhLLFn1_rvRm6F1vPDQaD55?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/jobppc3o84ov85jbdj7osl7kv4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pito8gy7fTOiHuBE9RVxAkbK2ygDPIdxfpbWsvXrhSk0uaATgq0ZuL3zMWdRaynL0BOvaMNrkt1LVXh0UejaB2ywQXHoLJ3SPC4S9JCFfDcv27KaFsgdL9dssY6WzjpcdZT4DKATFQkwxDzwxxOUHQuhJLqzTl9EF5vbtsy9dpKHpDXN5fdQ1xDyq-eDW30CM-t2?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9tuers2rvcg2pn12f3g6ca7ko8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiudDdGxcOHewrjNkjHIWGB1BoCHcYtRFevGO5vcxIN-tSvwun-wieti-AN6Eflpw9QAgFBm2JBwwCb27k5OXyHFHK5LV3CJ-S74nbToZrLB8fxsR7oFQgEa9M4cFR8uPrAohy2KMtaohnYF4ukmMH8N_8anRR9oE_nqvf_eDePJSjKmWg0t0G8uXrwY8My5nDGn?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte Cyclable, Route Verte près de Ste-Marie de Beauce"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.7183502,
                46.1817486
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/us63n256fkgjkrltmpi26o3qdc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuMy9xtsSrb0QHsaXJtsT5xAz6HR2AS9ZfqLQHWZgGs8RXbLqUeo4p7If-6_ZSUbw1XTjQ7jrnqZCgzCWbes-A9w458Pcf_lp1JgMH7zWShaU8tBPfgu8CYaELA2XfOghZ9j8CQQ0xszGKWDVV3fUBQtkxtGG7qBlAJSnQ6Yxa0jhiBmjXsSurqC5moQiyBpbSz?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte cyclable en bordure de la Rivière Chaudière, face au pont couvert, du coté sud de la rivière.<br>Comme le pont est maintenant fermé aux vélos, ce parc n'est plus fréquenté et est donc bien plus tranquille que le parc municipal à Notre-Dame des Pins.<br>Quelques tables de pique-nique, verdure, arbres matures faisant ombrage; Très bel endroit!<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3f4c3qqs1t6ah95qo5bfi5ltdg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu_ZEMbC_TS19xQoKzzM7MpBWZ5BWf76JrPMHbRiyr53JNmQTlUBxh1efIuWwmAG0f7ydyxDlKmh9TRk-gGdEdsa8OeEoWRKPBU7MuEJ3SGyRra6xmnLQtonr2G4tz0jDPjL5FEcJx-UP3DpalnVR8_v5BIYSBFr9QJ5T5kGz24VqGDgLe2ldgEYbWFvlJOwRF2?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte cyclable en face du pont couvert, coté sud de la rivière Chaudière"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.7151361,
                46.181756
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/27p8gh9ie14o60sbfko9m7sv8c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisD6kh5THEuFGGIJMzULl5CDSCQameW8lEHbjnphl5xI_7Xh8bRP-V9K-wcXtbE_wKjpx3uM2V6AiqBxfAR7uIqE0HlZl1HSkGXMj8jcL01B3QSrmU5sf_ArYAHYR8i2kmy-3WAhmsJuRuMCrA733Z0uxyqmCmd2CJIi1NCf2z5ZfpbN-22OH3pZR8GR8v-lN2H?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Joli parc municipal du coté nord de la rivière Chaudière. Nombreuses tables de pique-nique, verdure, arbres matures, très vaste. En bordure de la piste cyclable.<br>Assez achalandé durant la journée, sans doute plus tranquille en soirée.<br>Voir aussi la halte de l'autre coté du pont couvert (coté sud de la rivière), aussi joli mais bien plus tranquille.<br>Site visité  le 10 juin 2021 lors de notre voyage à vélo au Québec<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/qmbsi52lq8u8ll7rqejci8no1g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivCe-NFdJ555dv76ldMpv2NFcu0JgdSBncGoXkzF8LQpOl2U2Oc9rLW0NUH1e8ik_At88Ugdvlr_8VT6UHiIdemiz7rtVgVXYWactp-5b4merjeh4VkNMt_TrSXXdlpE70bdt0D748MgFY6ATNtqsGNc9kR0EIH0QT18rarg12uVyHpgBnHQRYMnxKOWT_Fyy-b?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/5h98qb229vdsuf41u554d4no0o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PispLQfLBiDWdV0l3NkMKc2-hzdTYsM3pqWWAZAXgrUPQXy8k2Nk9HKXj0fjchHW-TEldwZGz4ORg9n6VXOC5U--_M13qJymfOTB3bvy2spq1WucfXESxZ_SpuEz5-9LaKkEEHG5eL_Rd50dTgP18YbwYIYQC60rEIpkCiEBA7wXI4L1Wub26aFvlkfp6S-2l-E2?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/lvit98a79s2v81o2r7li4v60m8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisLaXfGhGI-lU1JubH79WzQBb0aVpvH5CdeeKemTrQWc2PqD1WdxFHEu9UA1Y-l3GsRE7N3uQlPVnmNkKYxdEG4Y2FWiFJWA8z4osNi0btTbyNrJBbBt0tMB_YpjhOOryQEGcxoqXfCxyWQygxLboX9GoGTuFFdMCrp_syxtb1T09Yg2TtgoZ-zFbtfI2-twza4?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte du Pont Couvert, Parc municipal de Notre-Dame des Pins"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.8287128,
                45.9607705
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/jsic4tpcr413hbtog8gdi9ha2o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitACOciCBx_yE6c492QyvhgjXRDkBsNsQ4hMbzAWKpPfIOWQCIk-EhkyOF9C6d9AGELFswg09T0s44rbRhHqOg9Q7OAJ2CtsybMD85dmUMKpKKPs_cnGCV2-NM2jJiBf3tNuDY_OHVQVAyel0gGMx8mAW1CfRtplMZiKzmLCv5UBAp93YIm3ti5nnHymXXYJaQa?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Au coeur du village, voisin de l'épicerie, ce parc joliment aménagé: tables de pique-nique, verdure, ombrage des arbres matures;  Un coin plus discret à l'arrière permettrait d'y monter votre tente, si vous attendez la tombée de la nuit pour vous installer.<br>Site visité le 9 juin 2021 lors de notre voyage à vélo au Québec<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8jamio1o35ti0fcsmjh97nmass/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitvJgQiklqdL-qmBTtrQPm_VCCb9dkduXHh2hy48nyxZY1a4AyPBXfCkNbVw7v5O9O3gbDXcX3YVLQE059_tqAzsqGQzerNyNwCnTXEl8O7GWJES4mToyqsGPjznfhDy2gc7H90U4MeBtl-58CDkZ5v_xVkeuFVujxHv-jvFFH0t4F1nCinw_nqs9nHsaSW-xmy?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/pnmb1b2jg6sl88vss7cme2smo8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitfam8aQzyJezATPl7_FxXgJv2wey0xcc-8cEyZrBQVrXlZfZXw33xwkfZRRR4Shj7VZjt9y97oPwMMgUQmmZBLPaoF_QkIxEHL7nitQ2cedfAfVfabxOm6Khg7CwAXueKaS6SJbESUT98HGcW_Xf1L1V-ne6kp36afcpogoDS4WLMyx5675WdaD2pIwenC_RLb?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc municipal Emélie-Allaire, St-Honoré de Shenley"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.5563704,
                45.9726315
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/bimat532qar23it7nun18kc4r4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiseS4nTTrttdJggDPKIpwamVNegqlBctbx5lwTd57vkx10CQPNBFqv_I0vxmEipGJIHWScGYFa49OdnM6mUDqqDADjCBLsIEE3Sjt23dUSTk9QmRsM8eklYefJsXesJIIQ5zqdQVksqy11enyGWs1uDpzFmwv1ElawZPcK-Pz5yTmcsamcx5HuIxVZ2kYra7DI5?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>en bordure de la Rivière St-François, entre Drummondville et Pierreville sur la Route Verte #4.  Il faut quitter le sentier principal sur environs 800 mètres (aller-retour). Quelques tables, arbres matures, bord de rivière, jolies vues sur la rivière. Endroit isolé et tranquille, loin des villages.<br>Site visité lors de notre voyage à vélo au Québec, le 4 juin 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ph0n93ch6td05bb62me2gro2uk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu8fzbchByVpEC-cmyfQa2V1n32L90hw36BOsCak484zz2Xju7QDVemfP_dCIYh6ofJ61zOSVe_7LWn9OPaGe28Tf54QGLRv1SXD2JjXaPjPa1WvUMvUXaRQRvzZ4SmBniOxhpQPyocfOwYBnhiRAwoQPT-ljdxyI24nfDJOSDKnFIDYt1QLYkC_0Yl-BzW5OoQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/v1gtd8d6eefp1js0i2o8lkfpjo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv-8X4vZn_ULntSCUQgECWFek83xeIrPPI3ckebmrFZtCl4VPN9JOJz5Vty9tGsZr9LdZab7C3q45_loOgwKXPjScR1DShYtIRyLbOMouSVEp35bo1ubG-c0a7jMzaFaWykMyKj8b1JU-Hyx_R1rH6ykqXgZBEVTEk2OG95d3x4_Qpzi6Gy4E0CGtrY7OH-Eb7r?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/o05pg6orseaadnm0l08j117ff4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisRgf3owX6J_iZJm1wilhG1WTcNl-w-R6cLMV0Y5w7z1P4yYjSfd1rQN8p1KXwR3sXfa7dbCwOSurqPrruEs2di4q7Gc41Xs7YQoAj8rAqmTK4k75bmHOyxTjWNnMyJ8fdEgxtY49NDvhnsGDzSfTmGe0_XgrPxPXRTiVPm0p6taN3G4WCuUzus6fdiWJZ4ppwF?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte cycliste sur la Route Verte #4"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.2503352,
                50.3181372
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Halte municipale / kiosque d'information touristique. Ouvert de la mi-juin à la mi-septembre de 8h à 17h. Les toilettes sont barrées en dehors des heures d'ouverture. Bloc sanitaire avec eau non potable, tables à pique-nique. À proximité des magnifiques chutes Manitou. Visité le 25 juin 2021. Infesté de moustiques et mouches noires.",
            "name": "Halte municipale Chutes Manitou"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.2385936,
                46.7817328
            ],
            "type": "Point"
        },
        "properties": {
            "description": "À 2 pas de la piste cyclable, trouver le trou dans la clôture pour y avoir accès!",
            "name": "Plage"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.7013098,
                47.4839555
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/j6je4amd1ibl8i3f657a8jsucc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PissVaJfgpb8XDtPb0grwGIO1x3amcpC1JNexUtDNVferTBhwxA288cl25JfMnf9IUcOyJmyiSB7eDY-r_46QgICYtWQRLTHnLBhKOLX_6zuLs_fVSwpKtbeI5tyTPzyeuAaWgZwuurcN2epUQs8vSd667ANkXm-Z2w2V_WYIY8XeKtzNgo1LDzyaLoj8w08zCu-?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>S'y rendre par les rangs Sud-Est ou des Pionnier, selon que vous y arrivez depuis le Lac St-Jean ou depuis La Tuque.  Cette route magnifique et tranquille vous évitera une vingtaine de kilomètres sur la trop achalandée route 155, de l'autre coté de la rivière.<br>Sur la halte routière: quelques tables de pique-nique, verdure et arbres matures, et la rivière à vos pieds! Un site enchanteur et tranquille!<br><br>Site visité lors de notre passage à vélo le 25 juin 2021.Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ei5k4oh48nm3v5gamch8nm4nl4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuJgz2CvIgNC-LLJio4njN1nAh6HpB-ytVETyi0JdxjY2bW9Ym1pmOp5XzzEjFw5ZB5Z6ckgkjO-0F86FwFRvc4lXZrmOJTkaH8Cf1Ah2sj5NR3hzjbwNpP_UlAlNNmy7Yx_sl8CvtmN4mmpI8HcJgPQ1x7k7EO_2qWRLDhpCuTUce8NGHtCTR5dLi9eqo_YvVw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ae3u7memi3m1q3cf3cl1blum7k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit9ApBvhrKrztO-RdAEQZ4mxs6tlmdTrHSz1MvUjW6XX5lQcFgMNkZFiLEYkkAu5Ry3bmsuRRFLwV7pgt1E3GSeHMrwVVvLDOv8VnvvwCv3KfR6rMMCF_AzVQZv0VgH0CctZjT3iRoV0x8s0XXwpXP41asldveIzkTU6-Aj16ZV9AL3FqwAUayWngttzCnqP90k?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte routière, en bordure de la Rivière la Bostonnais"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.6913159,
                46.9201119
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rjkcfcje5al3p25s3bdqdjqe24/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisWEVTLIzUvpuohi9r3BXvEi-Dz5BvseZfqsuGV1dXE5rfVKad0LWjZsOukVx_l_RDa8SxvPPniGMZ1e4_OWLan0DsVyzOluiFMlN4jC1BILsnh49h3X87Vp6Rs7WH_QbWtPpnnvu85NaSqHNdNNnHSJmCoCQvUq3tlyIu45qM6195WzIgsu1-MqNXLn_CsCPoA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>La route qui relie le Lac Mékinac à la route 155 est un pur plaisir!  Pavage neuf, achalandage très limité, beaux paysages, et plusieurs beaux vallons qui rendent le trajet sportif.  L'aller-retour vaut la peine pour tout voyageur qui privilégie le plaisir de rouler à vélo avant tout.<br><br>Méki est un parc municipal en bordure du village.  Joliment aménagé: quelques tables de pique-nique, beaucoup de verdure et d'espace, et comble du bonheur, des toilettes et eau courante .  Le village est petit et tranquille, vous y aurez la sainte paix!<br>Site visité lors de notre passage à vélo les 23 et 24 juin 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vjuonm0iph3ctu7ba0rhl21qsg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit6v99XQ8N4ljFFxj2d_oqrT6G-_F2Z2gkyF_BjhFHJuxq5eLzz-PsMGMjnsC_llLRZzHM1jJr_UhJ9G7a1XRgwH0hb6lC46qC8qdMK7hD1N3JeCwmPBES33k9TImMmDb2cOMu-MgziJW6GqxkWEM5DduornbZiafG1s9XQZYYrugYAwxVlYD8v58uatCYIsJ6i?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9hf3ahpsr6nrt63oskef64qcto/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivRMlXcL4RxwdTPVpnHiy8MlJ6EOzPhLDlco7A8CAqACAUQ3wjVDGKzCZKiS-sZnemohE0-k0W_yUoIuGoSfcXuRx6mdoR9X5dn-7TxqrABKszbn9ymoCxYh2amZjTx0A-sm7ek-VbaUUmu8tifhiwoH02MPd_oHmEJsZ7DDwbKlvqLErYgJ1aXsou89MnqbWFD?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/bg1h9hph81599i0h7ai64iv67g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisM6A9Z2ez2GsUIGEx4trvM9bFxjnWo9e62-f5hyslQbrqyIAvkCmLr7nVmU6C5r_d5UMlVvk28wSdyqKG6OQ6OZAGrrZ9oIYr2al33T-nyyM_FL3KU_bNxqTLTs26BwBvTLoH5YvwLFzpL1ZrqNHnc9pBDj2-NoPhZRQRyMK2v9VxG-D44YQSmVMR0wWlIoJm-?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc Municipal le Méki, à St-Joseph-de-Mékinac"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.7606721,
                46.7393768
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/17dha9j6mfdmq0hpmvi8if7jks/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitCLH8tMTbn_Diwnpyd3t2Ff4sIiprz7PsTyJbd3hrgfLTPFJC9LOLg21xetaiDxDdloMDt-eVQcx596cPMyZxNe_HZFWXsE9rz1OKAlYwuZa2XtUNP_IWRu3n5R1hdEgjqcXjGwU8IpmOlm0yYZbuU0hxVXYiQeyJXVspMQLD4KHxNS7CJ-8kFAB7kvENnORI0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Un peu passé une halte routière très achalandée de la route 155, quelques kilomètres au nord de Grandes Piles, vous trouverez ici 2 courtes routes en retrait de la 155, permettant au cycliste épuisé d'y passer la nuit.  La proximité de la route 155 rendra sans doute l'endroit bruyant jusqu'à tard en soirée, mais vous y serez à l'abri des regards.  Eau à filtrer sur le site; Pas de table, pas de toilette, mais la halte routière est disponible à quelques centaines de mètres vers Grandes Piles.<br>Vous verrez un 2e endroit juste un peu plus loin sur la droite, aussi en retrait; Le premier nous semblait plus joli.<br><br>Site visité lors de notre passage à vélo le 24 juin 2021.<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vmsuou7rennpcdtj5iq0fe81a4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivY_13mRKANmqYdcsU7q_QOgduEvXZLALeLrSy71Ioii4Q2IqdI2EMnCkbnrCWR2NHI-QmdHZlIkI1KuuUTlIyt0M2th_X4-sm6r4DpKvybUmRXOS1FD1Tr-_YWJGiVQKByroxZsUDpAkTE8HMLYJI-qiDHxz0dlSN8ESxXU0kN1QnYt6yrJv6P1p56twTb4l6C?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/80muemtvn5mp4k3akjmtn6qsqo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitTGo_85F0lj1FAmpSG4k_FGx6pU7QGuDV8Bu87hS46M4Wi-PrflPUrLKJkdGiuuDdMmppdaIIBn9vqcoiQgmh6qEPb8KI5od4uIvgOBleZTAbm8Q56BUARrcMgLvg6hUkrVYYAhPfe8sRcdmno-jma8VcC0Qq9fItowVCCJgfi_XvmWEd2fg6gxX5VBtryST17?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2klj8mdnrsl1jjes6v0kcgs03o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuVaCnEQk8AVZm9WhXMqRbNAC1HScvdti-N0Ks1K9aFaXPRnXuM2dlfb6bRsUf6OqlawbSyv4kQhMPqR88wOl3L5SUdFUhbxc29ZzGyESci8-v1HEEINji8oYZU8kMl2TvUfs3b4d0XSn9HaCxpoZTyun5hvqZ_8KGHoXjg0wnr0yv6Co1QLgSrD0n8Skr3OyRM?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "En retrait de la route 155 (a)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.767668,
                46.7437735
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Un peu passé une halte routière très achalandée de la route 155, quelques kilomètres au nord de Grandes Piles, vous trouverez ici 2 courtes routes en retrait de la 155, permettant au cycliste épuisé d'y passer la nuit. La proximité de la route 155 rendra sans doute l'endroit bruyant jusqu'à tard en soirée, mais vous y serez à l'abri des regards. Eau à filtrer sur le site; Pas de table, pas de toilette, mais la halte routière est disponible à quelques centaines de mètres vers Grandes Piles.<br>Vous verrez un 1er endroit, aussi sur la droite, aussi en retrait; Le premier nous semblait plus joli. Voir les photos mises sur le premier emplacement.<br><br>Site visité lors de notre passage à vélo le 24 juin 2021.<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "En retrait de la route 155 (b)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.8278512,
                46.5047906
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/35bnvltv7lkf067j19nqslkqmo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisMWFR8nU6DtWFIgxpXK-Y05BHtKJsNQUUZwXltJE9813wNPFw7nXuSFKbv13HeL-GWwmZztffIYR9X0EqYmpuKMaJ7fdJtUCyabtEkte2C1vV6Za5mP-_diBzbZ0sDAaPqI1p7L0IuwN9Wr0bcclAgQKmpRRXpGviW1dAUhgMke04jl2rVn5ScoaLmIXotYsrY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Pas pu résister à vous partager ce petit bijou, au coeur du village de St-Boniface.  Magnifique parc tout en verdure et sous le couvert d'arbres matures;  Suffisamment vaste pour y monter votre tente à l'abri des regards une fois la nuit tombée.  <br>A éviter toutefois les soirs de fête, comme par exemple à la St-Jean-Baptiste ...<br><br>Site visité lors de notre passage à vélo le 23 juin 2021.<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Parc Municipal, Village de St-Boniface"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.0072607,
                47.4930154
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Wow! Y'a une bécosse et des coucher de soleil incroyable.",
            "name": "Plage de Rivière Ouelle"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.1324231,
                47.279648
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Au bout du stationnement vous serez tranquille. À 2 pas du dépanneur.",
            "name": "Salle communautaire"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.1187403,
                47.3299064
            ],
            "type": "Point"
        },
        "properties": {
            "description": "À 800m du début de la piste cyclable. Ancien site de peche a l'anguille avec bâtiment débarré. Terrain gazonné parfait pour y poser votre tente.  Ca se peut bien que ca soit venteux mais vous aurez les pieds dans le fleuve",
            "name": "Pointe Rouge"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.14901,
                47.2952681
            ],
            "type": "Point"
        },
        "properties": {
            "description": "À 2 km de St roch des Aulnaies. Il y a un ruisseau et c'est très tranquille.",
            "name": "Le méandre"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.8756183,
                49.7569389
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/8811g8un032529jpd5gg03rke4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisFINruToIeMVDKpf6g4kcbR0FCpWcVavxY9LSuuKPOeODK3B9lesiuQnR8ESflQy3zww6LNtEE5hyv8eDcUe13KaNnWPpFiFp6cFfuQntwVJz_eiTGVd9rTOSDtcOMesrUx8QzZCmZh0dAAb7vCHIPDKlTWcXtbe2ifHYjWvuuv6QBxr52kaDyrW5qGHO-dKXm?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En bordure de la route 113, sur un coteau la suplombant, clairière dégagée et plate assez grande pour plusieurs tentes.<br>Point d'eau (décharge du Lac Renault) à 300 mètres.<br>Attacher vos sacs de nourriture suspendue au pont au dessus de la rivière.<br><br>Nous avons campé ici le 21 août 2020, en compagnie des 5 de Echo Explora<br><br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br>49.89924, -74.35392<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/infblbj1cmpb2qri8dmp8qchms/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisV_x_dutO5z3qP9ChFlkW9XWhjHTtiQeT5MPXQSgACRqbAf6ZPNd_2-qgjINbNsT3bF7UkiL56l1hRtw1_JaVKctlDsTZUJups9L5v8gQwd_5pmTu7oZnoRm2WjBNnk6aGoW-4EewTnXaof1RS-g0AcNIc46vGxANQzKUxXyK0goTy1drxSq0-OTwnAq_3gyWP?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/eu56onpeiqtvgnucso4jgk1g70/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv-F0SvY6xEd38gMQ_3lL809KoBvd5fypCYm5CRJhWbHP5YOaNU98-8z8bwxHakC7HOk3aCzb2akAO1ymKgB5ou22XnQH_5JsozTkg4aYegSjzg8R53kXmCb0QSwsL82-_auxYiWIn4drFoysricZqrYIkVMRGUp1K7b3s-TvStyHiwgyEcBMunoWXYZQcRNT05?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9a4hakmjbknar3dbaj64e1ah8k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv_kIQxSWMagFzpb6MlbSqS_iQCi0Fqh0UQZZsf8hprsejK1cZgWRrsYjEq8Q7y2apyWVXF4qCSCFrojOPwcyMO1lZ78PKF2bSODr32uznzT0F7UZkBrqjv8o5aCAdWLLEdI9hmteuYRFfYeaJQA8vVq-riZtWbwpI66NpecGKBToeKVPYpKDJHC8e9ELLM85Dz?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Réserve Waswanipi, près du Lac Renault"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.6812974,
                47.5188611
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Caroline été 2021 : Possibilité de piquer sa tente proche de la rivière sur le gazon. Des affiches permettent le camping rustique temporaire. Toilettes, eau potable et tables sur place. Plein de sculptures d'oiseaux en plus ;)",
            "name": "Point 236 Parc Ducharme"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.7812044,
                47.3825815
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Caroline été 2021 : Il y a des affiches interdisant le camping, mais plusieurs VR y ont passé la nuit. Très grand parc, j'ai mis ma tente loin du stationnement, sous un toit à l'abris de la pluie. Très tranquille sauf pour le bruit des chutes ;) <br><br>Aucun service de soir/nuit, les installations sont par contre probablement ouvertes en journée.",
            "name": "Point 237 Parc des Chutes"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.358928,
                47.4031677
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/odu9lliic4tjr3t9u5lvcqp50g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu1pObqR_P-jEnv-4kS0bBuVkAjDmIP86h7IRqpBFmSzyrx74I_sG8cHai6_5J76mtsAQEA6T3W5MJlkpv7TjxIefdWdUc4n1GOf-WkZz04e97zX3dCjCAi-v25vo1CaZ4VTXXQ5gSDjrXUZ0OnIO92rAUgruIeColuutcFnz7r1Y-OEiDpK_9vvvW1P6AtfGr5?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En arrivant de Dégélis par le Petit Témis, la piste cyclable va longer la Rivière Madawaska en entrant à Edmunston. A cet endroit précis, vous trouverez une table de pique-nique, des arbres matures et suffisamment de gazon abrité des regards pour y monter votre tente pour la nuit. Un beau spot!<br>Site visité lors de notre passage à vélo le 7 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte cyclable, sentier trans-canadien, Edmunston NB"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.0096332,
                45.7304723
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Joli parc municipal, juste un peu en retrait du village. Avec table de pique-nique abritée (toit et plateforme de ciment), un peu de terrain plat en verdure.  Un ruisseau à 50 mètres en forêt pour se laver ou pour cuisiner.  Epicerie à 300 mètres au centre du village.<br>Comme d'habitude si vous campez sans permission dans les lieux publics, attendre la tombée de la nuit pour monter votre tente.<br><br>Nous avons campé sur ce site le 11 juillet 2021 lors de notre tour du Nouveau-Brunswick à vélo.<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Harvey Lakeside Trail, Harvey Station NB"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.2547455,
                48.0695562
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ts0jej9ptl0v551jdts1oh4ugs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piuf4iuEzkGBC8g5fk5SXZmhKW-hROSaOJI1fop5Fbsd8sYUWjYhUYDGuLnBFQ21ev7fQ-3-lkutGAzzCGlt1DjIF2Q2QZjvaLqKG5u1SzgtgD4VH9u4A5TPwL-Yta1gaHf0OMVwSdEP3i4RqDiCuga7nwYgrOoSHI0H-MpXcT4C_ogK71-IAF1PJIiXOy0ImCxe?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Beau spot avec verdure et terrain plat, en bordure de la petite rivière des Commissaires, juste un peu en retrait de la route 155.<br>Site visité lors de notre passage à vélo le 25 juin 2021.Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br><br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/tlhvhscjrvp0r6clhhu2khk49o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv5ccERRznHcSDnSPf__OFW-9_3fsWt4-Qib1i3T7ig9VQO0T8Kw6Ky84F8hTZ8EEgz-8H47LWsMcd-C_zhklw8rRCZES7MAw5vjTPYEH-RwtKX1IK7ckgJWeIgshonhsrGnx2hKhPI7tlUqs7zWDuQzdCUzDeXPzaRrIubnJKgCKBJG-VOcAziC3xaBjPfLv7h?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Bord de la Rivière des Commissaires, Route 155"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.1585337,
                45.3938653
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/uuf24sig1nct4q84ms8drkdit0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu-Iae2xc72GHFgc1plQrc9ORXFfFr0r0B-5PkR6FPh81wuOqdsJGtxjG4jm8vtlrzLN0nr14lcjHGnAd5i-MinMEyPhouwotlJNapZn_tcXNoDu4FbeLVIzk-9qUN5X5WbG02IGdmySr3W0M-_w-I_x9wDxrObzexPhy6D7PnuMYmDicq7vM-knKEtT6HLUSJ4?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sur une portion de l'ancienne route, où coule un ruisseau tonitruant, beau spot pour diner ou pour camper. Site visité lors de notre tour du Nouveau-Brunswick, le 12 juillet 2021<br><br>Site visité lors de notre passage à vélo le 25 juin 2021.Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Route 127, près du Lieu-Dit \"Dumbarton\""
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.3404385,
                45.1805696
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/avr9u9su44du4ucr5mansmbhag/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuJ7J1M53wuAK1ZAkXPaIhAtUxgvhBPqHBghcVHgBgYfdNBZ2tGiRA_-FoIf28h2XpTdg5OSjeslbiq4gM0RJaMGfupAS78GXwH6CZlqXB3XyFfXId24urVY-cxN9D_dcgNmQLITsRsqhUkSyLRssQY-jJm09x5uG2EfP1D2WJWBbI-DgHm7kyUG2DbYNPM_Vj5?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Table à pique-nique abritée, face à la rivière sur l'ancienne route, face au pont détruit.  Eau de la rivière accessible, un peu d'espace pour monter vos tentes (gravier, asphalte, peu de verdure). Tranquille, en retrait de la route 790.    Site visité lors de notre passage à vélo le 15 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Parc Municipal, Village de Musquash"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.8304905,
                45.1304286
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dqj6tcqto3fi2hthn8fg94s0ac/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PismJM2RssK3dIPvswCNxH1vV5DZC8a1s-gYG2Gf6rmSpwoP5kQqP5UJSPiaqvSzdT5BzQ5aFSorYzeHI1HvXlyBrHHwJYx-ejHMNroEYU4TLfsw9lUxjIt1jfptREjIgmw6gfDfZ7szI7FNk_wVFx_TpnnocmGem6DCxAvUK6P6KwJiAPyq3joa3U96esG2_GKl?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Il y a 2 excellents spots de camping sauvage dans le village de St-Georges!  Le premier est à l'arrière du magasin coop (c'est aussi l'Information touristique), qui est aménagé avec quelques tables, une toilette (demander la clé au magasin) et un joli sentier dans les marais.  Face à la rivière.  Simplement demander la permission de camper sur le site, avant de monter votre tente.      Site visité lors de notre passage à vélo le 14 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Face au sentier des Marais, village de St-Georges"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -66.8287568,
                45.1297202
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/09hg3lnq0gj5susg6i7lerv5as/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit1_8yfUUPmRbVY7DnVfimRrFr0uRAM2s4XTGKd3A2_H9fDwG8vw0DMEpUy8ZdXtKNWUIl9BMW9ZHzNSARYUBvaTtvJhmH0BCpmwdPGrRyaWAr4-Glb1VHkNYGvPrI9IkiwWeLjyZWNDqofm7N5UuIIhadjmX_B2O54OX4qEvfjUBTiKSxaENhJDsU16ihIvHu3?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Il y a 2 excellents spots de camping sauvage dans le village de St-Georges! Le 2e  est adjacent aux chûtes, en retrait de Brunswick St. ; c'est un petit parc avec quelques tables de pique-nique.  Tout au fond, belle verdure et arbres matures permettent d'y monter votre tente à l'abri des regards et du bruit.  Site visité lors de notre passage à vélo le 14 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte routière, Village de St-Georges"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.6992733,
                45.6371353
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/uro14lb8i6unrnkdt433du47ko/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivTGJ7WFti7_9L3OYdRBvuPNsaesoYJkTTxZQ6p5yw2CRHrdci3VnVy5SuDu4ZU3AJUqoUz0REaH641g1EQIQG2vn3n4RbO4Ab0jTc-BwW7vA2s-AaD44u7ozjRdzDHvxBGJxGjC8brrUCZOIzT30a7mAWv989clc9R8s80IvuXAU0fyACMsRH0WTq7dFA4jFSg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sur un beau terrain gazonné sur le bord de la rivière, avec des arbres matures, des tables de pique-nique, et même un gazebo en cas de pluie.   Site visité lors de notre passage à vélo le 16 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/b3l8t9ku0s2eh889q91ve5q4pg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv8j7aetB0v2Ob_BK1Pc_mqZ843a6eHgFEhTKg96pMH8hger1XqotMVjwEerIF8AXyBpKWqz_71MMtKAvqN9JeK23X2kK3KtfNDMqnLuCzwkU02UcKH1ZxNxv9qLn09Yu35GUsnEmVOhwI8ZJo3hSjtiLmih80PWVXq1EO2IpHqo7Qe7JABlmQu6rr-xOf7Eei2?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Parc municipal, Village de Norton"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.73631,
                50.64229
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Il est possible d'installer des tentes à ce belvédère. La vue sur le barrage de nuit est magnifique!<br>Pas de toilettes, ni eau potable.",
            "name": "Camping sauvage belvédère Manic 5"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.3671091,
                48.2438991
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Très bel endroit avec eau potable et toilettes. Il y a plusieurs endroits pour piquer une tente.",
            "name": "Parc des artistes"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.8721567,
                45.3318241
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ajmgpc22noodljk3f67bemfkcg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitXtd2b0_0ccCNLfMHfnQrSUHfOHcDm7dcTBtbbRUrrzpXTwwj-wIvpnH7EfV66Tco0lX9lm6iPjh064EaggEjgh0gdROC269-RbazkHJX6oprGEPnLMT8bAB1dxIeDqTa3weN962NZxq_NWtPOdVZcN4MhAk3xG7pN_eWFxZ1zv-EILkC3FnXa_zm90XUiqmUG?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Beau site, très facile à manquer, en haut de la piste cyclable, côté nord.<br>Aucun service, mais les toilettes ne sont vraiment pas loin (≈1 à 2 km) en direction de Granby. On peut percevoir le bruit de l'autoroute au loin, mais ce n'est pas très dérangeant.<br>Je n'ai vu aucun panneau d'interdiction.<br><br>J'ai campé là en juillet 2021, en route vers les Cantons-de-l'Est.<br>-Nicola, l'administrateur de la carte.<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9ag2klh7q3jjuldam0hq4l7tag/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiumJWwnW_G62-Q_Wvio8fa-mQNBiMIJ6Sk6NN0YoFo_7oewC6LJ43iTnn6BvJhunLQM9udP8bKfJe4Ap6dex56tANS-xQr0a4Vj8ZyQLXuHSInuWYGMeC7U4JiQMCTXkZ-jwORZqoRJV7I6LRMeY0BpCZRjTNkGcmuJOyZ6RzeHEJ_JLjPHlBoHBS1A9OvUD_MK?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/e1qd9gfopi459jq5kg3tmo2mes/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitqqYQZxAIyUR13VYetTRrqpHM6kfrPDnMFFfMGyFcFwIpMxibLepxwvCLhmEDQBVJiCw68raSRwXemY0-Sv_yeiufPCUDI2Wiesc4Kgbk0F4Hw1R15whPyDVL0DbMDYv0M6SK0DtEVpvvMeSfCTDPUQ8Y8GDUSy8sESAz5hCo_Co9qcl11B7G5xfweF3usqtM2?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Montérégiade (Ange-Gardien)\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.0561762,
                45.3304579
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dpduhuh6jjvvrmiil79rhr8tvk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitrvsakPhCaVmFB3AgXn2fkvPEaL0lB5gK_SqhS_tMHDE5gkAMOB3S1Zxp8Qua_ThgjN1ymXurQ5JW3PK9_OZmCL3fW_UnFmZi467bGV0B2uXHVS8b7bHASWJ3rYcnqoEN3IAjuJAz5w0FN6MY-6W6uN4k8AB7-D-Dcjj-HuVyX1uVUim_H-FlfIn_71llG0TI?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Il y a un lean to (abri 3 coté) sur le bord du parking de la montagne de marbre. Il y en aussi un 2 ei dans le bois (Voir photo), accessible par le parking, la rivieres est juste a coté pour filtrer de l'eau, Il y a aussi une toilette seche. Le parking est animer le jour, mais le soir ben tranquille. Pas de wifi, mais il y a du réseau cellulaire. pas de poubelle non plus.",
            "name": "Lean To de la Montagne de Marbre (parking)"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.3577555,
                45.2073661
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/4c73paoolutkjc0gnosj5t3pe0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitqQJDGhsJk9fR89eFES7xQPxXAg5B2LfemzpI2-mwj-vyvWgK6PDLl28WWSMW3XlfnVfbcYfKJy6tIcH5LnPNiLaNcyOueT8BJ0qL8M7NqGDloSml7u67CY7jVajJfT-uRH-U6S3h4khInUpb6swLJgkOMouT_O5uSSEz9AzcV4V4fXsYZVUyFBmJ-daGOCKz7?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Je n'ai pas l'habitude de camper dans les parcs de village, mais j'ai tenté ma chance ici derrière ces arbres. Il y a manière de s'installer sans être trop visible, par contre la surface n'est pas plate à 100 %. Un samedi soir de juillet, c'était calme, mis à part un groupe de jeunes qui jouaient au basketball entre environ 21 h et 22 h. Il y a des toilettes sèches près de l'entrée du parc, mais pas d'eau.<br>Attention : le parc est officiellement fermé de nuit. Il faut donc être discret.<br><br>J'ai campé là en juillet 2021 sans problème.<br>-Nicola, l'administrateur de la carte.",
            "name": "Bolton-Est – Parc Terrio\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.135324,
                45.0545713
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/1l89piqbg08qa96geut20p3o1g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisDN4oFexZzSwWhwScgf7_Q-___2nk5mRHXRzlpzPzvGeHRghg-2GeEo33lEE10JvxFdwTuLrel8378vNzsq0CR4lqgZ48vdwp-dItcF79Dey8JFvaUbyASKHtlDftYEMLbxOcVyo5iaOQVCKiQI81Y63aXNjbhA7QISlhXxOQuTaCwXWmxkXxU6HET_fyqYy8j?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Site 5 étoiles près des cascades, en bas du sentier Tomifobia. Pas de toilettes, ni de poubelles. Il n'y a qu'un seul petit banc. Il y a juste assez d'espace pour installer sa tente et dormir paisiblement au son des cascades.<br>Officiellement, il est interdit de camper sur le bord de ce sentier.<br>Possibilité de se baigner, et de filtrer l'eau de la rivière.<br><br>J'ai campé ici sans problème en juillet 2021.<br>-Nicola, l'administrateur de la carte",
            "name": "Sentier Tomifobia – rivière et cascades\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.1604251,
                45.3612858
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/g06bog963eqk99sssjsnokesis/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiutRkmPued9Gh5tWVgbsrPYHBWZbzuLd0tdltyDA7Pfrnf00Ws5fZRR0O0vWoiD9VIKd-Zs0r00g1u7bRAE1ZjkAH5eiYtL8aUdINBxcG_X28KtB84MhcXOsjNgs8cztnEHkIsaBJWiihtRreyzdjYh0Jp9HlSBADG98fsDJYJcJSyw6Q6bEWAg48n0jEdePaT8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Site 5 étoiles isolé et à ma connaissance légal sur le bord des cascades / chutes de la rivière au Saumon. Aucun service, mais il y a une toilette sèche à quelques centaines de mètres au sud-est, au camping officiel pour les randonneurs.<br>Ici, on dort au son des cascades et il est possible de se baigner. Je n'ai pas vu personne de la nuit. Pas de réseau cellulaire.<br><br>Campé là en juillet 2021 et passé une très belle nuit.<br>-Nicola, l'administrateur de la carte<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nj8vll4di6v8dljsuqbjv0gul4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivQ7UWiNoqjBKP6JTBueVEU2O6f2LlkBVesL__Vg7wxuo83-IFIbuPbQLCAS6AbhV0u1F1_dU_9BSPQ1Zjngv_GgXm1OdtLri4CfUMcypB1fLtscH-t5va1pAazizXHzeiZKry2-YP5Gn_kIiMXv4sdG8WEJ_Dv-WZ4RkT57xh9ETKXN8pYXHI9JqBYptQM8n-U?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/olkdoblr3au45f8inh0i8g1c04/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuWd3o2MdTuR60TF-F2t8X0CrGOzSmDGMMlLnuVVWwAxphoXQwSyOeeVemALaICyekEJr-zKnZMVq0Mg6NXEfuGBL3dzJVh3BTDz03TaGwXYYd75OcBPNndzT68skMHn-oeMcFCF4uMc-O6L-QbL0hvVH3NeiuOGuEfw9PiNxzu8TdJHzOztH38EVJMSkeukp9n?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Chutes de la rivière au Saumon\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.0544342,
                45.7130642
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/gbu8rsh2s0rbm6iqli03ghvg0g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pith7DHsjE7QYqtgPeNB-Fd9dqRKQbygodq6sEuv7rXMFkEAIrDrwaqd0BtW51nufvn86u5_XHxZMRRDercSxF39XgPCUYjari0Nji8-wOHl4t-t_0oGUrWe10n5ZmX0eWWaXhWcHIxq1AdICvR8PczBDUcrGkmLL7Xxlrf07KSvn-2Tij9VfqE_K2FlYQZoL0Nn?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte cycliste assez spacieuse avec de l'espace pour s'installer à l'abri du regards des automobilistes passant sur le chemin, et si les moustiques nous dérangent pas, à l'abri des utilisateurs de la piste cyclable aussi. Par contre, je n'ai pas vu de panneau d'interdiction, donc je ne me suis pas trop trop caché. Seuls quelques passants sympathiques sont venus durant l'heure du souper, et un couple fumant et écoutant de la musique à tue-tête sur leur cyclomoteur électrique, mais ils ne m'ont pas vraiment dérangé.<br>Toilettes sèches, poubelle et recyclage, tables, mais pas d'eau potable.<br><br>Campé là en juillet 2021 sans problème.<br>-Nicola, l'administrateur de la carte",
            "name": "Halte St-Cyr\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.3221976,
                45.3921741
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3m6gesdjmsekk5q8htkq25c8lg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiueDHvcoWNh8AmNXGbNGKuS6Q5UGpaGdyaL3wpT5BPGLPrpbiHVeenIeqUA9yyFmi_mSpG_T8di1JhjXwdL5B-naXQZaSbsiGbXfn6mSxJQfNpo_tBnte4-cbKG4pkVrR3pJ_FPUy-qK5QTbGtQIOWxgukcyjijTkE3B3CD_Q5iW9RAogl7Av-uCocbtjD5rSpx?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Site de dernier recours à déconseiller. Trop de moustiques, pas d'accès à l'eau (stagnante) de la rivière sans risque se casser les jambes, et surtout, juste en face d'une mine (de quartz?). Réveil brutal à l'aube, mais heureusement, la machinerie lourde est partie après 5 ou 10 longues minutes. C'était suivi par seulement du va-et-vient, mais au moins j'ai pu dormir. Pas vu de panneau d'interdiction.<br>Pas de services.<br><br>Campé là en juillet 2021.<br>-Nicola, l'administrateur de la carte.",
            "name": "En face d'une mine\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.6973446,
                45.7352519
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/po72083skhurae86nq26rvqa48/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis_zEhzQqUEfssUKViuTEVBFKavekdgX7St-59-DNHfyhwLND3FefzWTo7e1wEqyDDRCT7dM07d6MLuwDVo34cIpkMt3sY3gstiI-YUpH5rIjyaCKDYwkPH7M_NrjFBgMfz00rlELQR_8_sKOBa0mXCR3YmFdv6wMTnpB8ufMPw8-MY-mB5M0i1IvmLh-mTtA70?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Un superbe site de camping sauvage, sur un ancien phare aménagé en parc.  Au milieu des marais, tout près de la Baie de Fundy.  Site visité lors de notre passage à vélo le 18 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dfcvarjq5d4gke5ohrah61ggu8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivUyGG49gdM9qliqTxI8Tk3XkGwjxjsIaJWY3-19uxYXIyxK5lVCSanLxulINzzJg7z6JhmlQg93m1UMMFOKR0Z0nwV-Xi8p3ZIAE6WGu4BPzoWoyvZ9O96ZzJ5z6_VZwBzzddg76y-8BjM3MBIjBl1MfDuS_zT1v1PfwXXlia_tSQLKu9iiL9SkKunp5izh0pv?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/j51hveoi2slf06nmt7og4hp91g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuE82ESID6CwXL3o-DKaZGNHuDRCTAPUepRKxDF3wvxuAQOmg-uVT0quNEOkQMsJ30MDWyRCrLZ2xowqardplhOAFD3hLEw1MBgoO_UVOcgAqz_hnNX2Obiu5pij_lWJv8lWHVEibZtAyhVGj2CR1APd9rfj5U97zUD_14AzaLUk-cQ18lxj9_8Pb_wEMIK5mo7?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Anderson Hollow Lighthouse"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.567078,
                45.3695124
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Une halte routière avec un chemin qui fait une boucle, avec plusieurs espaces de stationnement avec tables à pique-nique. Il n'y a pas d'affiche qui indique que nous n'avons pas le droit de camper. Nous y sommes installé.e.s au coucher du soleil et sommes parti.e.s le lendemain matin. Les citoyen.ne.s que nous avons croisé.e.s étaient très courtois.e.s. Avec toilettes, eau (non potable), grand abris (pratique pour faire sécher la tente le lendemain matin!) et prises électriques. Route un peu bruyante, avec des bouchons c'est parfait! Situé à une distance parfaite de la microbrasserie La Ferme ;) <br><br>17 juillet 2021; Charlie et Maude",
            "name": "Parc de la mairie Shefford"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.6103204,
                45.1092557
            ],
            "type": "Point"
        },
        "properties": {
            "description": "La cour d'école est super grande, et le fond de la cour est à la lisière d'un bois. Pas visible d'aucune rue. Par contre il n'y a pas de toilettes ni d'eau (mais ravitaillement possible à de multiples endroits autour), et bien sûr il faut être discret et respectueux du lieu. Et se timer avec les vacances scolaires, sinon le réveil sera brutal ;) On y a croisé personne - c'était parfait pour dépanner. <br><br>18 juillet 2021 - Charlie et Maude",
            "name": "School Sutton"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.9961944444444,
                45.2343333333333
            ],
            "type": "Point"
        },
        "properties": {
            "description": "On était en route vers le camping, quand on a vu ce sentier municipal le long de la voie ferrée. Quelques spots tranquilles pour mettre sa tente le long du sentier. Toilette sèche à l'entrée et petit abris avec bancs de parc. Pas de point d'eau, mais comme il n'y a rien autour, nous avons demandé au camping le lendemain matin et ils nous ont laissé remplir nos gourdes :) On a même eu droit à un concert de ouaouarons! <br>45°14'03.6\"N 72°59'46.3\"W<br><br>19 juin 2021 - Charlie et Brigitte",
            "name": "Sentier municipal de Sainte-Sabine"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.8936944444444,
                45.3205
            ],
            "type": "Point"
        },
        "properties": {
            "description": "On y a pas camper, mais on a vu de beaux spots dans ce coin-là pour tenter au bord de la rivière. Parfait pour l'approvisionnement en eau si on traite l'eau. On a vu une tente aussi dans le coin.<br><br>45°19'13.8\"N 71°53'37.3\"W<br>Juillet 2021 - Charlie et Maude",
            "name": "Piste North Hatley - Lennoxville"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.7356814,
                46.0806965
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/arf03eiluhb6pk5889bqt24cng/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitO7e8ramQawLicFOimwOeITTTRq0gbrJjPa_xq7rCVBVk1NK9w86elFqtH_1M8FEAn35fM668C-6VkWChu7r3Cnkz4d0anx7yaFiFk4kfytapazOzBDxJvKovRKK8XOhHFQbEWuyD518UsLVBv5lj69y9wkl-RA8n-qkvAKGAYXDa2_r2VaUvxGc3BPYnGTJ8w?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En retrait de la piste cyclable, peu après avoir quitté Moncton et Dieppe en direction sud, cette halte cyclable dispose de tables de pique-nique, de toilette sèche, et de verdure suffisante pour y monter vos tentes. Pas d'eau courante, ,ais commerces à proximité Subway, Tim Horton, etc).  Moustiques présents, car voisin de la lagune en bordure de la rivière Petit Codiac.  Site assez joli et tranquille, néanmoins   Site visité lors de notre passage à vélo le 21 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rqfdtldpun9ku06co2mi22nqi8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuFqoqh8Ixdn5dIf518_2WOuXu03RH1dZ2bYG2n70QjfLImffLItpK5DEaFZrobYpwfCN6wuaL3BxXdz_mXFeXytXEKlQPLxQpBxHRmiqytnAwFjT8rhcKgOV5hn2JPlG0Lpk_Wvsbymm81xGhuMXkuVlHtyqtcnvC9n8wAuTVAuKH_0vHxt3QJkeW_4iCIMOiJ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/1jhsa63k04u0k1l3egppjmj1b0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit9iB61qBRDAYvZfT-noc-r9kgFmE_9zz1QnFW3KhEhRtMhMDij58a6R4lwer7Gui7TkmsQ0JFb9rFwYLOL6wKEoOCbMalGQlJTvehe4Z0sFxiAscxOQhDf_Wzi6tmUDN4NknEiT094UaVxTPzloVU4lfb0RTvJi_1TOs1EFmpw0n5gMmlp4mLx9kk-gO6eAZxM?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte cyclable, Route du littoral de Fundy"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.8742665,
                46.1750154
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/6oibtdco9vr8umlmas93umu9jc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitG9jswf9_0vZgJiaWDNvZ90skoXj9CA_RpatR5ZuKFjHUQlOoa1EVbnC7I-CBx5AE4nt0ggVxNnJZDyO3GFReza2fM3wBlpRzXzoLvr6NCnif3lRB1gVJmSMfbuVDQYD_9KFleobGmO6yXDNAIZUWoyM15pZzC0owhnSkph2dyJ08Q6zIfZKnJS5zSs6nsWwZU?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Plusieurs beaux emplacements avec accès à la rivière. Les chemins sont accidentés dans ce coin et prisés des quads et autres 4X4. Le spot commence à être connu mais tranquille et sympathique malgré tout. J'ai passé 2 nuits, soit un vendredi et samedi soir 17-18 juillet 2021. Possibilité de baignade et de faire un feu de camp. Guillaume F.",
            "name": "En bordure de la rivière Ouareau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -61.4993872,
                47.5618641
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/e8l6pq9urc41f8p5eas6veencg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv9IUi-DsYVXQMJgRL2NxggApCLouCmBCDcry-N8Xryyg6Rzcw6wyS4dkvoA-nbW_RctDmuzT8luN0KDaPyLZfMHrIGwiKYcw8VrndamxtalpFc-SVEzClNKNXXOyMyQM9mMaaJVrs2BXgbmdmaDK5IlsQFbQsEDaz5zCs_S3GhSplbdwnh4FDEdPaK3k1wY7xH?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Pas d'eau - pas de toilette<br>Blocs sanitaires disponibles entre 10h et 19h à la plage de la grande échouerie à quelques km au nord, ainsi que près du port de Grande Entrée.<br>Plage bien à l'abri du vent ouest ou nord<br>Juste assez d'espace pour une tente au-dessus de la ligne de marée.<br>Accès par le chemin du Bassin Est<br>Plage connue mais relativement peu fréquentée (en pleine saison touristique, on n'a vu personne entre 20h et 8h du matin).",
            "name": "Plage du bassin est"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.8658843,
                48.7376303
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Très tranquille, il y avait un peu de gens, mais personne est venu nous déranger. Pas de toilettes, d'électricité et d'eau potable. On s'est installé dans le coin à gauche du quai, c'était très discret.",
            "name": "Quai de Sainte-Monique"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3685062,
                46.1032488
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/6n8gj39kqheue8tobgq7d6ecls/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitAj3EfTo_JePW-cy4C1K0GYW73jxizDHeF9KN5LJuluaKW1f2_7bGKWwZIUczy2sCEAF3KoLfBF8HXmqMHTU9ygnndX4EAz7tpDc3mouqpIvjoLhHh0R1wWWTCyNrLG2DoVRZTrwkGaSEf9FJFlbebG-xNyTHEY207pLx9cLZlnNPLtSbu9yDuqLtVNwi9W1k?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Porte en métal avec un cadenas rouillé sur le côté Sud du Petit Train du Nord. La clôture juste à côté de la porte est enlevée et on peut y passer facilement avec les vélos. Une belle plage de sable à côté du lac et plein d'espace pour des tentes.<br><br>*****<br><br>Couché là le 20 août 2020. Vraiment un beau spot, tranquille et belle baignade dans le petit lac. Update avec photo.<br><br>*****<br><br>Couché là en 2021, exactement comme décrit. Un peu trop près de la route, on entend les voitures, mais avec des bouchons c'est correct. Endroit magnifique. Attention, cet endroit est sur un terrain privé, mais aucune maison dans les environs. Soyez discrets! :)<br>- admin",
            "name": "Camping sauvage petit lac"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -57.1282525,
                51.4286513
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Camping rustique avec toilette sèche. Tables de pique-nique, gazon, plateforme en bois. Pas d’eau, mais village est tout près. Les campeurs y sont expressément bienvenus 😊. Visité le 5 sept 2021; Pion et Giguère, Cyclo-voyageurs.  our blog:Normand_Pion@yahoo.ca<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br>+<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>+<br>tandemetcie.com",
            "name": "Parc municipal Blanc-Sablon"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -56.8600094,
                51.4607005
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Au bout de la route! Spot extraordinaire face au Détroit de Belle-Isle;  Baleines et mammifères marins sous vos yeux, icebergs si vous y êtes en début de saison.  Terrain gazonné, moyennement abrité ( peux être trop venteux pour tente légère si tempête annoncée …) mais vue fabuleuse! Toilette et eau potable durant les heures de visite, mais bâtiment fermé après 5pm; Présence tolérée ( de fait , j’y ai été plus que bien accueilli!); J’ai campé ici le 6 sept 2021.Site visité lors de notre passage à vélo le 25 juin 2021.Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Phare historique de Anse-Amour"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -57.5341735,
                50.3382778
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Bel espace aménagé sur la falaise surplombant le village; La mer est à vos pieds! Tables de pique-nique, gazebo, terrain gazonné et plat, abrité du vent du large par un gros buisson ( insuffisant en cas de tempête!  VÉRIFIER la météo avant de camper ici!!! Pas de toilette; un petit ruisseau au pied de la falaise ( accessible sous le pont qui donne accès au village) procurera l’eau  nécessaire . Mon plus beaux spot de camping sauvage en 2021!  Camping lors de mon passage à vélo le 12 sept 2021.              <br>                 Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Village de Bellburns, parc municipal "
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -53.3471862,
                48.3633483
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Beau terrain gazonné surplombant la falaise côté est de la route. Le phare est á 200 mètres. Le joli village de Trinity de l’autre côté de la baie; Fantastiques paysages au lever du soleil! Relativement bien abrité du vent du large par de gros buisson. Néanmoins à Terre-Neuve il est toujours prudent de vérifier la météo et s’abstenir quand de forts vents sont prévus … Pas de toilette, pas d’eau à proximité; prévoir vos réserves d’eau á Dunfield ( plus rien après le village!).      J’ai campé dur ce site fabuleux  le 16 sept  2021.Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Phare historique de Pointe-Trinity"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.1646553,
                46.0843009
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ueut0kdk0cjv4orp3bum9t30cs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitPAzGH6PAeWrPiD0qH3sISM0Z653jbuU-E1r4sZkbpOKtu2aX6jt2XX6p4aoGo1FurHTcgBNfj55dViIsgwpCg38P_6KD_4jmgsNgrVA-r98mBh47di1-0MQBrXF1eJ0-hJeIJ6Hd_aVEk3pOlswKSSdUAJuE5Q9cfhiCvb2BYT7SKx03tHf3ATVgx-vsiG8YZ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Très beau site avec toit, tables de picnic, bac de recyclage et poubelle. À l'entrée des sentiers des îles de Berthier.",
            "name": "Point 251"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.1420445,
                48.1483433
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Section de l'ancienne route 132. Place pour feu et de l'eau accessible.",
            "name": "Ancienne route 132\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.9322013,
                46.6182355
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Il y a un grand bâtiment municipal et des emplacements pour faire des feux. N'en faites pas, tentez-vous tranquilos et profiter du fleuve. Je me suis baigné dans le fleuve à marée basse à l'été 2021 et c'était très agréable.",
            "name": "Point 253"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.2056338,
                46.505
            ],
            "type": "Point"
        },
        "properties": {
            "description": "À la quantité de VR cordés là, il semble permis de s'y installer. Toilette chimique derrière l'église et boyau d'arrosage pour l'eau.",
            "name": "Point 254"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.4944937,
                45.2557379
            ],
            "type": "Point"
        },
        "properties": {
            "description": "À 5.5 km du village, petit espace où il est permis de camper. Sur le bord du lac.",
            "name": "Point 255"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.6200374,
                46.2261848
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Derrière le point d'informations touristiques, prendre le bas vers la rivière, à gauche, il y a un grand espace vert où on peut tenter sans problème. Tranquille la nuit malgré le pont.",
            "name": "Point 256"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.9724183,
                45.8499286
            ],
            "type": "Point"
        },
        "properties": {
            "description": "On trouvera sans doute un coin agréable près du parc récréatif ou le long de la \"rue du Parc\" qui se poursuit en \"piste cyclable\" non-asphaltée.",
            "name": "Point 257"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.2069164,
                46.9590859
            ],
            "type": "Point"
        },
        "properties": {
            "description": "C'est une halte dite municipale, mais qui porte aussi un autre nom. Aménagement : toilettes sèches, tables de pique-nique en granite. Village à 2 km. Les gens s'arrêtent et repartent. Probablement plus achalandé pendant les vacances ?",
            "name": "Point 258"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.6923379,
                46.9192702
            ],
            "type": "Point"
        },
        "properties": {
            "description": "J'aime personnellement mieux les endroits plus discrets que les parcs, alors je me suis rabattu sur le côté de l'église (le cimetière est sur une butte) où il y a de grands arbres.",
            "name": "Point 259"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.0356671,
                46.9126758
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Quand vous êtes sur la piste cyclable, un panneau indique le pont de pierre. Le sentier se rend jusqu'à la route qui borde un parc. Je n'hésiterais pas à m'y tenter un soir de semaine en basse saison.",
            "name": "Point 260"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.0746963,
                46.0219764
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/67ps72i3bo5ds9itb58a0bpjpk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuVZkM0w-B_lcYhcTOkdcAeSJS6UD2OIpOrPFvwMZPOFIkJ8qBrhq1UEB5xHAHYNx0ulJX1T8VoRQqyzpLMEaIkONDHWwIfKhzl3FvxvWfoQmbF0jQGAuCXg6BykXdeQ77eaDTLTMTTIc5QDorj3gHoh4FjCsGYPvfk3aXxLJwIUzDaGHZH1le-k20s9Tc1D-Io?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>J'ai passé une nuit de vendredi à samedi ici en aout 2022, sous les pins et au son des chutes (et des voisins). Aucune interdiction affichée. Pas d'eau potable. Toilette sèche « hors service » mais débarrée et assez propre à mon passage. Il y a des passants durant la journée (descente de kayaks et de tubes) mais sinon c'est plus tranquille quand on s'éloigne du stationnement. Accès facile à la rivière. Deux dépanneurs à proximité.<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/9stv0v0oqf5dtq7tfullnrhe5g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pivn08VoVLEdml_9YASWNgtfGSXdRdyoU-O4g7W8DO-10DTXj71PvXEGCdUCaPA5Cc998ItXAeA19RPCs9NkYO7IN3j0d85EenSSWXW8XAfaPz6LJBSZHhm3nG6IN8Xri4pPiLmh5qtrTBF_ACviDKyqyVZGv4MGTtg2z9Fe68nYIYpCC0FhQ-bK9vfeuZWvfikN?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Duhamel – halte routière\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.0909011,
                46.0520992
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3nslju6iqr3d93lsn6ajtvfb6s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu6DfBr25YEEjDX5bu8XAGZm0yBSQAf3Ro96PlMjnP_B0qVw2pTTyx0lvQQUSVpaKd-38BRnMIOM2b1n2AxOJIDqnNr6FB0ZJKY64-32RcB8Fyk15Baq7LbaK4CLS5472M7u_rFRIUXuU5KtApwwAHPnRMYRAsY2EFgkpNy-z73n0QV_OH8CdImqe58xk2UtwCf?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>À quelques pas de la piste cyclable, non accessible en voiture, il y a une halte cycliste sur le bord de l'eau. Je n'ai pas campé là, n'ayant pas vu l'emplacement sur la carte avant que j'étais déjà campé à la halte routière plus au sud.<br>Table à pique-nique. Pas de toilettes, ni d'eau potable, mais accès à la rivière. Un peu plus à l'est, un autre site, avec une grande table.<br>Pas de panneaux d'interdiction.<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/i1vbui02fcjvggnue2imkq8pqc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivFpvSYMH9ENImSQY5xJI_UW9WvZjwzWm-CwLIYN7xeLIcQbUlMsOCi_Uggrb4C4jl0HwsvhrI7qY4JDI6ngVu9CuVd9ItzwnGCetDqi7lSeBtlaQCwjUxy1XeHwoiEvo9RY2m-aihpEoP43npDXa9nharVCzbJAArL319CtgCrHqBUdqZBbuRllMP9_7NQfA6j?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Duhamel – bord de l'eau tranquille\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.8468228,
                46.1316674
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vtntev72lt7bofvgh61df7ni20/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiufeppYUHfCQ2o4dbK2U3x9ZF1QYAWzktNPjPbT-SCo0VrV9W8VooyKFFA5uaXL5rpaTz2v_UCyl_7n6Ju9pICawTXl7344p5v-5n_c3YGaSXIuzfwnzTdagio_7_c5Oxfpfd8thW9STzKR04MIU8_jHV-Dl2qIbl9MPRFupcESEtKEFBzAWn3JBEuWK_BYNJkp?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Très bel endroit pour camper. Il y a plusieurs choix. Il y a l'emplacement principal, gazonné, tables à pique-nique, toilette sèche, entouré d'arbres, mais j'avais choisi lors de mes 2 passages en aout 2022 un petit emplacement sur le bord de l'eau près des rapides, immédiatement à l'est. Plus loin à l'est, il y a d'autres accès sous les arbres avec l'accès à l'eau aussi.<br>Lors de mon 2e passage un samedi soir, c'était assez achalandé. Mais bon, aucun panneau d'interdiction, et c'est un espace public.",
            "name": "Rivière Maskinongé\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.8980354,
                47.4174291
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ve6aidku0vchqd6snfm54nh38k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivQFuTgvJ7vDXwBYaoInuK53LfWJu_Q_VhoUvXt8cMUxlHu_NF8OxL33ErGLsOy-XbEqI6-4o4BXTguvRTbINAvXNNRoJJ3_rybC9dpqDASUJPk36KCONtX3Vm3Au_Smbebux1UQ9Vxr7tIIqMyWaBF611gQJLHq2ZvHDaefnUaYVKz8eQrkO_lRrtPd_RuvP9T?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Campé là en juin 2022. Tranquille, puisque le stationnement principal est situé plus loin au nord. Quelques pêcheurs à mon passage. Aucun panneau d'interdiction. Pas de toilettes, pas d'eau potable, pas d'ombre!<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nmi1oifhdr779udel9j65ip6ck/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuljK1LnPrPdVpEaTNb9sm9-_fYXTX1bEZ9kaoL6yzTX_Us_tDyTkaH25hXw8JqvrdEf-yq43w1gzJFgXpV-Tlr9-k0QPj0eIgzJS3QiTsq83gT4TCce6mpg3g71YrEnVnlZe_cDFG-B22uS1wgkQBdYEl4-_sXuJlESt_R0-KFIsKAqoJzynm2hFfiAdUlDth6?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ka27alk4l69iiip3isvim19fgo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv5f6elyyiDQ5fjBFOzdyz_RQ4ZCImtFYHzHHuMuhbi-8cXhcfkJsITkUPQwQxzL2FQpuo_cK427C7ynJacv4c3thld8k-6VZHEIfaML0VAtdjYo8IMeoPam1fU5vj7Xr61aEF0HyaipeTTL0ejvDNIyToEU5YrakSVN-zaaaZsew4TYhsgrBTVyhUhLoPAevKX?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Plage immense\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.2130568,
                45.5443792
            ],
            "type": "Point"
        },
        "properties": {
            "description": "On indique que le parc est ouvert de 8 h à minuit, mais j'y ai vu des VR passer la nuit. Derrière le bâtiment sanitaire, il y a une place avec des tables parfait pour une tente. Pas d'interdiction de camper. Sinon, voir en face :",
            "name": "Point 265"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.2131319,
                45.5438589
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Je préfère de loin les endroits discrets : juste devant la pancarte d'interdiction de stationnement, il y a les vestiges d'une ancienne maison. Ça donne sur le grand parc. Le couvert forestier est vaste, le sol est dégagé. L'endroit parfait. La route peut être bruyante, mais pas trop la nuit.",
            "name": "Point 266"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.2992364,
                48.5523825
            ],
            "type": "Point"
        },
        "properties": {
            "description": "À côté de l'église de Rapide-Danseur, j'ai rencontré un gars de Vélo-Québec encore dans sa tente. Il m'a dit que le maire du village (qui habite à côté de l'église) lui a permis de s'installer là.",
            "name": "Point 267"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.810275,
                46.9874492
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Quelques touristes sur la plage en fin de journée et calme durant la nuit. Pas de toilettes ni d'eau potable. Bel emplacement pour une nuit.",
            "name": "Pointe-Sapin"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -60.800022,
                46.8306766
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Superbe plage où l'on a pu dormir à la belle étoile en août 2023. Il y a quelques vans qui s'y stationnent aussi pour la nuit. Pas d'eau potable ni de toilettes.",
            "name": "Pleasant Bay\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.3228528,
                45.1608161
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/trg2q1sme34shu63elcp8lkv3o/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisWNRq2-oHmkKEMFomPk8xjG4sVMjGZB7TsMwM4HFenIMQJr0BDifGiiXiEiXZav-3ZosVBjL-YNiZpGNEKqD1bLkkDBAWpeakLVm9w9QIIpoyG0Bhx0jYw75SelkwE7SXbLGtjbr-8H_bA9Cg7t2GpMG6dbk2NZGnBQmxK6w_6E5Ygx33T2KD-tqdl2HKiMZsolgvUfyjcqwefU8h2ALQE1YSXRtJHYr97iGcRegdtiJ0Wfg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Joli spot de fin de journée, en bordure de Route Verte #2, entre St-Valentin et St-Blaise.<br><br>Il s'agit d'un parc municipal au milieu des champs, à la croisée du Rang St-Joseph et Montée du Petit Rang; Quelques bancs, mais pas de table de pique-nique, PAS DE TOILETTE, et pas d'eau courante.<br><br>Prévoir vos réserves d'eau pour la nuit dans le village de St-Blaise si vous arrivez par le nord (8 km avant), ou dans le village de St-Valentin si vous arrivez par le sud.  (4 km avant)<br><br>Pion et Giguère, tandémistes et Cyclo-Voyageurs<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/e0gt127mgo940c6n5grka38uj0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu6icnvJzqADq4XiK8KsOnohfKY5mj0fZCzgBEFDcLWbOnBpYtfriU4PqcnMhyRVwGKb1JRMn5V85CdEdxNSJWvGn_BMXmJqATHKBH3geOiuEAQQXkGw-uZx5DDTEsJQD1bx0_tVX48Ah3QtxiSr_r0nbcbAa-jUIuUrrIm4k-nR_68oVTKH219qXzI8BeQ0_isEF1wauar5VwzRvo-4Y_BRcZVGd6uxIBlo4K0c70ImflYKQ?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Point 270 Parc Municipal St-Valentin"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.4289984,
                45.5319644
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/5lfnphjjcotmq8tfneekng924g/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis7k1gQDPqxB0pbdS7KuQtcZ4z5dn0X13wRGBVVZLBVwnPWnrjCJr7rUKODOhoLKf0qeLou1l7A8FvXQQ1TcLOoWKLnArkCWBg7b0pmms5Z6Ug56N4DaOMYHzv1Y9mY-WsSHRkBenlN_Sx6EGMedQjMnvPtQL_yK4pRQP4mydbx4sUij4CUv6Nr177IYxlWVP4Tc5YKLEEzp3gSzgMK0PFrd54r8gScl0RtIk7FLy6nTBzMZg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Entrée sud-est du Parc, dans un  secteur peu fréquenté.  Verdure, tables de pique-nique, toilette sèche.  Pas d'eau, mais commerces de proximité à 500 mètres.  <br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ktkgotpqvdo08u00vlqca685h8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisSOH9xspRpIh-w-_1OkkaqJInikHtKotlP-YjwES7Lv1la_k--NOGsoFiPEjLaHfzCYJUhPvQAvNq8R1BrPITZZRbfQZto7Lv91cPUIeBfAIg7cyzIun4YM_OP3pxdBYfI17tCoa0izxxn9DQ0eT39PMzf2lQCl1OzZ9vfXp7Bo9xn5Iwy3SCtGgd7U3xLcJbPZrnMyRL91fIlxGdW0szdpZ9LILtLxwGl2AamvDsWrvytOQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/5rllvu9jt0miofnolt082s67l0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuYVVKGBYNl8BdXI2PNYXhDQErkCheBOObbDk_PyMKCdGCj-tRJShP9P9YGoCxAPHSv8Dv_IKUjVWIipaidricoRZwLI-xJXodvRRlUJDRK1x36di14QJrY2FzoUIxldiXyJGp49Lu8-TsNNhWOcqthF6uKXrtAZT0B-Or_tprYe94OX0ClOi-7Q5kwhNmoTfcBFJ27gJwsQj73QqNOpZSnGSEV2n0QKnJlUd_EZ3HHnMqYrQ?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Boisé du Tremblay"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.5466842,
                45.6771617
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vq0oikjn64jqsr0evtnatrjs2s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PittzpWzQLAoCYfwG2_KWLmZ4kfBG8KW9WH_snWnmwn0IP8W_fq_EoqyhpaosibdosC003iCWZbIuIwI6OzsN8GHDydRKC_-FnAfJcpjAOl_wRS9-2F-Ho8RJQmnaf7r-zoahDilA7I3SQgfBidn0X6MEFvvYS2tE6HHXzw6TQzGhxBTgpTsDFLmBmkEo-Qlnb83vil_BGxuF-zFuocOyDP14GkUhpMwZ_cNDtDAAAQ56631Lw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Halte cycliste quelques km au nord d'Acton Vale. Pas de toilettes ni d'eau potable. Possibilité pour une petite tente (2 places) d'être montée sous l'abri, sinon un peu plus de place à côté. Un beau mur pour protéger des vents de l'ouest! Eau potable et toilettes à Acton Vale, à côté de l'information touristique.<br>On entend un peu la circulation automobile de la R139, mais c'est juste assez loin pour pas que ça devienne trop incommodant.<br>Aucun panneau d'interdiction sur place, par contre, il y a des panneaux discrets aux intersections, donc techniquement, le camping est illégal sur la piste dans sa portion de la MRC d'Acton.<br>-admin",
            "name": "Halte cycliste Acton Vale\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.5308996,
                45.7094201
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/sjvv8j68ng12k17v9b4acob9rs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivFV_G5o_6jyPvpZfu2b0EIbLjXZtjVWH9B95dVLJx1wbCTFiRsUOQh7rF_rPA5QnQBe3ObycP2G3BZ6wnb_TN3fJuJV9UEUZKZYISAVCbSRKvlp6B91QYkere2XQCreBKRV_jhZmdVq_oE2KAFeA7fdrN8Y7rlaIVjJ8sXUaCeHdXzfM0xCet2xSCOMsmMXEx_9VBR3fIaG1LsnEzacgOqSuzXEfYx_9A3cU87R0YwS9j0bA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Alternative pas mal identique à la halte un peu plus au sud. Je n'ai pas campé là, ayant campé à la halte plus au sud.<br>Aucun panneau d'interdiction sur place, par contre, il y a des panneaux discrets aux intersections, donc techniquement, le camping est illégal sur la piste dans sa portion de la MRC d'Acton.",
            "name": "Halte cycliste sur la Campagnarde\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.4900707,
                45.7822
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/7qj9097guiod9hos3s84i6a0gg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiutO6uijZ-2tAJjzklN9_qV3hCGxme7vFA9SKtSJ7mCyc-RK1zKdet6KX-lG-bwSEC_Z3b2eikpNQlO-Rhb8ANUta8KNIFWoPkz8fkG2yq7pzyCYEu3OFU0EDGSoMFPcIDt0K5Dv9bEWeCwVNGvyVXo5nT9_7oYeb_IoEHmMKZ3hAI321h4WwSnKV05ugedWqnAqwzvY79Lo47CGYU0lkS9_IzixqzdtODaYKzTSX6r5NUROQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Sûrement un bel endroit pour installer sa tente. Je n'ai vu aucun panneau d'interdiction. Je n'ai pas campé là puisque j'y suis passé en matinée, malheureusement!<br>Pas de toilettes. Belle rivière avec de l'eau à filtrer. Par contre, quand même près de Wickham et Drummondville, donc ça risque d'être achalandé. Il faut toutefois noter que cet endroit est à une bonne centaine de mètres de la halte cyclistes, donc pas visible de la piste.<br>-admin<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/bh6n1cupd1pbqvqjfum9ev73qk/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiujFvCTdDWC_k3clurXma26BV3-MRAccTLpxBQjQs2B64_6wgWuuRImnO9X-k3PeGpGnPZwEooA2WXMAfTJkHGH_4YXx9RP0773taEJ2qTaT_EBhnvR3LMMZbHxsq2ETTcGEwNZwVwLiaQ0sx-SUUByVAP8rzZl1581uvRhhuKnLc6gEC-wYKQlvpunbCBMECu7ataBfEhzI7uUVWtKp4Ti9fMju9TmRXof0gSYDLAUecpgXg?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Site potentiel près de la rivière St-Germain\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.3031623,
                45.7796864
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/m8k5s7ptskpptm5t4tqbjmn6hg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuQnkmuZl3TfWf_ObcINTU9pPSbqAsLJJqfczXKFGqoLA8rffRa7C8eUbdNGFB6w5D5hDb4BkGXXOFG_WIFjqxQEawdSeQQTkePYcFED3oeZ_XbrSJWKUe5mlQfQA70-u9waaE0FqV_APLWa5-Qa5yugMhywgUlEsXsbEOx4h53qq2MssswOlfaUXDRFwhKeLSnYB67P6mmrsKIFHXnAYzczvFbMlFH3Xsel4dokuxVeWckug?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>C'est bien le nom du ruisseau. Il y aurait probablement moyen d'y camper sans problème sur un des deux bords des ponts, à cette halte le long de cette courte mais bucolique piste cyclable qui mène au village de l'Avenir.<br>J'y suis passé, mais je n'y ai pas campé, puisque c'était l'après-midi. Aucune toilette, pas d'eau, mais une rivière si on a un filtre.<br>-admin<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/v9dckb08gj17mf3vc2ilfgt6f4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisWCs15YcgSXOpbfKydATGt1NPqb6w0GmYaR8Zoe9mQlTmDOgKoInreWKACZlF8BAednuUoWqwGiVUHknH6687ceP5i4gpumtvLrQCIAM19kyDDPB9F1q6iAOhvIrwoENgMaGHT65EQxAe1L9HS_Wr29UPoJbyCQSFvMlx8GoSdY5FXYKuAOST37LGZsDFlV_GT91WS9yPwXniOXarB169ssyAQyXY37-SkmJh4QPeOFjB5eQ?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Sur le bord du Grand Ruisseau\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.5924754,
                45.469872
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Une belle alternative à la SÉPAQ. Halte presque identique à celle au nord d'Acton Vale, avec un beau toit et un mur pour se protéger contrer les vents de l'ouest. Je m'y suis réfugié pendant une heure en matinée pour laisser passer un orage mais je n'y ai pas passé la nuit.<br>Aucun panneau d'interdiction, contrairement aux haltes dans la MRC d'Acton.<br>-admin",
            "name": "Halte cycliste près du parc de la Yamaska\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.9296386,
                46.5906834
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/0h6cnbtj8rjmqikk5huuqeni7c/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisJDkqpp8L04-RMgDz6YXSwy5tM6wiEpPjn_lTt55wT2sHGuiOimOlEJ1Qc4K7xqMlHm6s5pJWQrmyXqOyEMO9X-ec89ATXmeCAU-l3ZQCVjd7dMzcC32pKvH4TfplNFMiZa4nA-M4msvCu2uxy16XLrYFo9NkJfRaKzIvvsPOXfbocBcYOCoQsn4lFFhpCRlf0GvNUcN-HiNTSzijG-3ebps7lRs8fPaDhUtDjy0xI7Juu8Q?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Aire de gazon en contrebas du pont couvert de Grand Remous. Accès à la plateforme d'observation par des escaliers. Possibilité de descendre le talus.<br><br>PAS de toilette sur place. Poubelle au niveau de la route. Accès à la rivière (attention au courant) pour la vaisselle ou se rincer. Dépanneur ouvert tôt et tard à quelques kilomètres sur la 117 (toilettes). Possibilité de se mettre à l'abri sous le pont.<br><br>Lieu très tranquille. Quelques habitations à proximité.<br><br>Circulation sur le pont interdite aux véhicules à moteur, passage possible à vélo [août 2023].<br><br>La rivière fait beaucoup de bruit<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/oh3v5fhatpjocbvmea6ngdm4ik/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitwoeR5DLzQ-CfNbMnHhmOKm162eMyQ7eorBdwkoChysF0FykxFyeTpFNJxgshkN7o7XyBl1GMZd1rFKdNsGmZFGMHqI9gxxC8V2jTckWAat9b8MiysFQFckNK5hpdAPFDwr1wiSlhI43CGfkUbPcq_rXYV5SlKF_oTEdbe66kez_8DESAplEkO4i3Us-paM0Zs0Vm92Ia2A5mW4zTH1jvDPvaDyJFK9O-lmaAh4l_Hl5Mohw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/bdcs27iv1it0i88iupnaavcod8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit4KDSguPr-jvRMNCewKyPuEUCrHA0QP5QJ-tRgJXjsXdnrmFzQZP907RZLm3av9Ygk0SWFFF_xw1Q0gBqPQ9CLFWQRIxLISkJ_cQLe1UttvVI7_QTMfrPVUvl-s5jy91F5DMhQQuWWeNQK16kYnZe_v44HK_wC9m-QemL-lHuOQkUVBMHqN25pG5jCz-Pfpj6iS5eJZpLWErX-DD4yPTgQkpv0-RaCQvWYHMPyJfzlesOK3Q?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Pont couvert\n"
        },
        "type": "Feature"
    }
]

const officiels = [
    {
        "geometry": {
            "coordinates": [
                -69.3753252,
                47.7554025
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/6kdh93urs8qqectf7trvdlkahs/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivQZo8lDd-3qVt6bexNAlVHXcsyC2RR2R9wEHXnC5zOcEwH32LMX7Mp2rdFJyv_wAylAr3OySPkC6hraEaiRJRgBtmlSY0wnsl2wuaLMksBLexP-HtPTlvWR5UBOyUW8roG3k6Ih4JWFc_3a0gE0EM7e2O7uq0Hx1TMacBAKeJFvTX6-KwHElBjH9YAz9EbzKvR?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>https://www.petit-temis.ca/fr/services-<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fvv6bg532hcghchhl1bc1kn9kg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiskSVjCrupydVJGXsBC0stA3-p9JbsmGbprGiByPPv8pgotQdbChYBFlWKk2zRhALQgbaARDEj2Rds6SLJhu8LRHSlu_JGlwxbKNIRElV249wuTY2BrpGuHoG8ynA3KNx_fu-vq0_8oW9hkMb5VcW2r6kpshtZ_RGBzoVOScdhkD4QJDGrhFHiLEvVIS5cwhRGo?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Halte-camping de la rivière des Roches"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.2074299,
                47.7044111
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/rvlrpbfovupg1s8i27dsuotkt4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PissPJAluEwSc0Bwn3S1RCzxQoQnmCZJAbtq866gx6Od3afy99KSv3TqyY4jf2Z1n2W-D5F5OjD-jxLpTaEtbNUtXhA8x_uDpd6DZmL0iUo4Zzl2u16F6kUN5PPHRYyIyxslEVsuh0JdZFlkbdTPtD1nSUzVi4Ogd3VTzwm_f18bF4oWSaVH4xFADOVj1cKub8ha?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>https://www.petit-temis.ca/fr/services-",
            "name": "Halte-camping du ruisseau Beaulieu"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -69.0108449,
                47.6715348
            ],
            "type": "Point"
        },
        "properties": {
            "description": "https://www.petit-temis.ca/fr/services-",
            "name": "Halte-camping de l'Observatoire"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.378917,
                45.5802987
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/dnf7el4kh1i18657uvourpigbc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu-scKOwKb8cZfBxJybRHECokZrBCeycA5U2HmBOoMzYvf07o3Kz-wkoj_ltmJop6c88LvHicP6EAe9T78a8_hVuXnufq-cJPKYFMDPe2tak5cT-3ILpcabdgZTBlLWcMaYjM6zTaDcY_06X6cBWQYgqmxNNBzFJD_3nc22bVXwlP3LHzv4zAjUaQDSaky8ROsk?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Beau secteur boisé sommairement aménagé.<br>Belle piste cyclable pour s'y rendre.<br>Chaque site comprend suffisamment d'espace pour 2-3 tentes. Toilette sèche à proximité. Pas d'eau courante.  Village assez loin.<br>Alentours marécageux, donc beaucoup de maringouins à la fin mai !<br>Quelques sites ont des bancs avec dossiers, mais pas de table de pique-nique.<br><br>Nous y avons campé avec bonheur le 23 mai 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ijf0l3rn6ers3p28ee3os9rlno/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piv-jcBEo0Bn4tNEDS9FpaYrIwVKMBtR9JNdxmbk29-Dawya45rWbJijK5Iz4TmC5LzMcA7PH22K6PfgYn5ReBHC_gw5Elqvlp63MtbfPPv-ZNLFfnhyXu_UOBMBE7ziDZ6gRkIugJMEJrd5AgDgykWcuyLIaYRj3Tc__RK4rYvkdu3NF9AdrGZAuVYxznC2TvDE?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/gcv9gh820nlnkltvr7q40pqifc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PistHpZBo8UD4BJM3GV6gRTbAV19JDr6QnYE_W-Tlk3LUZzIaoiGRV4VbQDuU22ev5vBKqdrlGCWH0ArBlHMZSQr5LXEek0bDngGZom4L7lkigkIVodpztaM9FWzia3t_Yz9vtbqxRbKmOkm0bHb6BVcAZyjDJ8Rzwf4e2B3DbhiNLhjqWTa2-veR1pjH0lSyk3y?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/87q8gdo56m6t4ub1q5ejguf648/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Piu4eaaah0fdDP-ubkpHm8-hLJKwEKrjfw_F04rMHvGCGVg92nKvciAb-vcS4lm35wDQbXEeqaN0qSqqxDLh8q9Ph5npTYwf_iu40lCJCoMTvrHUVreAMs2yXalqSku6HwlUBCSXpUWVlM6Fa_GxG2lS0X2-EgDtUYsz5rNfGDSfY-2292-Jst3-qGKsmP-e-qFD?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/id3j7jgqfpbdid7166b4p0b9ak/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis2vya450OoHLAIZ-eu7lUjtiFm2t4BhUBaXTNo9VV6ByUoZ42PNM2lzfF2ya8ZwZdiKmxolndxM9hErhSEuPZDXsylFRqbQaEuhzHltFfIf7D7xwCsk54n7QVz3V7szwsqDb9-5MlxSS_GYDdKq8dmMd32VOBFR4Mk6QXBE25QV6Vj_kgyPou7ZxrHKmvd5rnK?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Boisé Von Allmen, Ile aux Chats, Carillon"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.1684047,
                46.4993358
            ],
            "type": "Point"
        },
        "properties": {
            "description": "http://www.lacsaguay.qc.ca/loisirs.html",
            "name": "BOISÉ JOSEPH-B.B.-GAUTHIER"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.8929411,
                46.4696285
            ],
            "type": "Point"
        },
        "properties": {
            "description": "aménagé, gratuit. (2019)",
            "name": "Aumond"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3847539,
                45.5791922
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ss9shpdg537d7ns872s25lhll0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PisnHI2YTWXgt3Nn0GEh-FtI7KGAT88Z7OYSv21r5cjHjhabLo82ICubYX3GX35iik1YgvvJFHLvrOexrDQaUptPMCBVn85S3QIs7Ny1FWYeGucF4sDJTU5nqILPtZKoijQbHK4YXp4ZGKMoJJmsB8GcS-BnsipD_5sy_CQfuYk-RVTEonkrqmQyKzKHuUCH4sr4?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>.Beau secteur boisé, en bordure de la Route Verte #1;<br>Comprend suffisamment d'espace pour 2-3 tentes. Toilette sèche à proximité. Pas d'eau courante, mais rivière à proximité si vous avez un filtre.  Village assez loin.<br>Nous y avons campé avec bonheur le 5 octobre  2020, à notre dernier jour de voyage en 2020!, puis une nouvelle fois le 18 mai 2021<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/hc0p23h80nkjgno7vtahepvslc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivmwpFBlrk_qwmSaWlKfB8IRZwNkTA-OC5iaZQQYh-ezmHzWw-WqpuIWM56H7Qqvc4xyBSh1hcVJjUEP1MQp6qcfgypXpUjy1iXdZ1zUy6ICHuL29QYKKcjCRotfOTyLkVY3aYzN5q1oIAzMOc9kO0RK4t1t-z2eBJvaMo4uQJCKLKRDCy4X2E0ig2nSgAnZM4B?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Boisé Von Allmen"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.3795036,
                45.580445
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Dans le boisé du parc, on peut y installer des tentes.",
            "name": "Camping rustique, sans eau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.58537,
                49.0901
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Note de l'administrateur : aucune info présente. Je crois que c'est un camping payant mais peu cher.",
            "name": "Camping Azellus\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.19477,
                48.24008
            ],
            "type": "Point"
        },
        "properties": {
            "description": "CCamping très abordable (10$/personne avec places toujours disponibles). Wi-Fi et douches gratuites.",
            "name": "Camping de l'Anse"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -76.5552884,
                45.6875973
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/fje97cf7l552u3iiji5tl2ehh0/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitn8KsZpkm0vGJYzkxCL0LW0S_IlfqM-uZxfK0BjZBXIHErXVBjrzKQj_GPgCmKXzbXDWupgBPPJeSHpO8jvuyOOLXAFfoPGGfvJtsD7m9XRkm0VTdpjusaNUkg_ecJPfR0kepREaIdt51Y9LsUfdT3zTdCtrL5M3GxTD5uOrlcxtXuO7zYzmuZcKzdnrHfK7NF?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Note de l'administrateur : je l'ai changé de catégorie puisque le camping semble officiellement permis aux haltes cyclistes dotées d'un bloc sanitaire. Ce n'est donc pas des sites non officiels.<br><br>Il y a enntre Fort Coulonge et Luskville dans le ¨Pontiac, environs 5 haltes cyclistes aménagées en bordure de la Route Verte #1,  avec tables de pique-nique, abri pour la pluie, toilette; Toutes super tranquilles!<br>Sites visités lors de notre passage à vélo le 3 octobre 2020.<br>Hélène and Normand<br>Sainte-Anne des Lacs, Québec - Canada<br>rikimiki@me.com<br>tandemetcie.comhttps://www.crazyguyonabike.com/doc/?o=1ni&doc_id=15622&v=26l<br>+<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
            "name": "Halte cyclable, Route Verte #1"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.5494918,
                49.060829
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Caroline septembre 2020 : Endroit génial avec 3 plateformes en bois et de l'espace sur le gazon pour mettre une tente. Toilettes et eau non potable sur le site. La municipalité laisse une boîte pour les contributions volontaires. Visité le 29 juin 2021. Super site de bivouac. Contribution volontaire.",
            "name": "Point 186 Camping officiel gratuit"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.5020407,
                50.3034681
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/7gv7tc8sfkvfefir4mor93bk04/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivCfy0buxcBPiWLE9nvZn-wXrUWBcfHontfJoji0LxOINaJwVfYU62ngjMNgURRKDRovxKk7uzXSJvHzCd-QsqD0alx1AploUCjspMT2X1dutOcVTPy3hHZcb60oNLNyr4YX9lo-gsGZD_am9o8x5NjcUrUPny8XXBGPENSVLG85-JlbA_O3Ni2-9PFKYQe17ta?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : magnifique vue sur la baie et le village. J'y ai campé sur l'aller et le retour. Il y a un sentier aussi à partir du belvédère. Une boîte à don est laissée par l'église pour réparer le toit! Toilette sèche.<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/pcsj56uq9egqm599pmmvvd203s/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiskAB_92fDlBBh5ndWEiNqBPrx1tjj8jNrSsxYjaJ8J8SRpvjvulCu9ZRYGNFNrOgK8-s6xvnAZ8gKGksBfyKepVPjCnPI8MqTh1EiS-aPGkglXA3ds_oh8zILYD9BGcUc8i_vdJRedHy1bch--MufI-WOh_VWwaFJAmde97PDfDYHi7aGcar8hK7XJzFWsQANu?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Point 190 Camping gratuit officiel"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -61.2690757,
                50.1776034
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/7avpjcmcivfu0k5m9ilnnr17vo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiugrcPgZ7GJ-eJ7ie4wisVytdQBAUchKMCKMMX93qlih9LIyAOQUe119wcHU3Cl5yaCjkSOBACvvUzIrtwnIi0jB4-RwSnp7OciyLvb1bqy6qz4GGwVlFe7Qm_wCZSwbv7wfGn0k8gj7g2VZlGzB3hWP0HlL-Us2tZ1hQfw654ssn8zUIW-UDQeAb-QWe9GkL5l?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Caroline septembre 2020 : Endroit officiel et gratuit. Pas de services, sauf une table de pique-nique, mais il y a un dépanneur au village. La vue est sublime, on se sent au bout du monde, et on l'est presque! l'endroit est assez vaseux alors j'ai monté ma tente sur la passerelle en bois qui permet de monter au bateau échoué.<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/jr2o5ioqbch02thmg3fej27s8k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiunLHEEyiqP9Fk9nLekTAQaWlY64JQJhgZYlkX7ziT4cJ_MDrAVOzyzB4QVie70GuySib98F_JfNMAcYi22FR7_ToD15uOUSZNFgYCCimeHzaAm1Na1Z7dZS7gep_jpvTdMKUsgO4fl6X1Of7e23eaCW4Ll18KzWWlzWVwjBggdufBbALVpbIknD5BKFot98s5p?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/ibb5lgit4d7dds2tki2vvub3eg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitnkXuFVNQ66HwGYSv_vSCGtUPpio7NKI2159_K7umh790x-TUDJiwV5i5DLV1B6krQpgZom9o0MY1laytaO7Eida7FWq_znd1LB9xJNbBqk0p2QyoF4DtgHLF7Y0PVJ4fqAkLLLWTaMOiXupueVkCBKPrHR0_GNVmt9o-Pyh13wvLIBVNhTsVJgiodxsuCtDKM?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Point 191 au Brion"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.0593175,
                47.9468237
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/vu4c76ca1vq3hc6fassbt098io/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuDGM19hEDFfNi2E5BfAiOLyJ5tjv1vhb63bFKcNas48rgwTE62XRFCtDrOE_r7iveJIAF3MZOufbZRPjpYzoM2OQji-yFIwFXkhb2EvwuEfEaTfFuwywVjr0PNfYlQp9oklP7eHrwI73AK1rrmIoH2TtfKVLKTfgTAgg61jJ1JpYs27MA99U3q8IYN-sSM35BM?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Toilette, eau, table de picnic.",
            "name": "Halte camping Lac Deschêne"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.912138,
                46.1104286
            ],
            "type": "Point"
        },
        "properties": {
            "description": "https://camping-plagedessables.com/<br>Établissement Bienvenue Cyclistes selon le site de la route verte<br>Note de l'admin : seuls les camping abordables devraient être indiquées, alors que leur site web indique un prix autour de 35 $. Est-ce qu'ils offrent un tarif réduit aux cyclotouristes?",
            "name": "Camping plages des Sables\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.3212158,
                47.9729138
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Possible de camper près de l’accueil. Bin marché, toilettes, eau courante non potable, possibilité de prendre une douche au camping non loin.",
            "name": "Accueil Zec Kiskissink"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -64.6976721,
                46.5359556
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/778jao8r3qdhmpa1qms12kkqek/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuUmczbuzgwoupnWjpchEtiAnw8uq1O7fowMJuECxlVtBZUVukfAWV1D2MY8Wxn_XvRyFpYzEkEqp0pD-KGgEomAQKgjCMV_8zdx3KE7pG5P4HEpG2pmuTeuHfptCgLt_TaiVj2HkDfx8H4a60vRz9FNCXywBvVYbXjv0nvMcN7gviZLeM0SQ8CsAWCDdSN8RTG?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Spécial pour les cyclos: seulement $15 par tente.  Avec douche, toilette, abri pour cuisiner au sec, tables de pique-nique, eau courante, électricité.  A 5 minutes de la Dune de Bouctouche, magnifique aménagement de 13 km au milieu des dunes. Nous avons dormi sur ce  site  lors de notre passage à vélo le 24 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/7ni776ibb9tgvs0d673ifvuvps/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitAxYuk1-cdkSfnuZjCSPEXQrQrxzyET4o5jFIgXJXUZXgYHhK0vAYOEr7kg6UphYnDNqaBJaVlUfuvtAIHJVzDB17EI-HKjps971bqSguUzU4sYwf4D7-zLLyGQJ4yYVsUgsNC6JcR-xAZZqtYlQjJ_MJsHuiiw7hEPC-S8JWdNriyqNJzerUpSo6ucuv0q3R8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/u9ikv34k5ioqm37veml7rgvdv4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pit0u72oxyA08a7UShAEzMVZYN4PPZMDYVXdEcaCuKf9mrIWNNBqqdH13aPx5ENO8qf9_ZjYqvd2zGIrb4WZAHTg866Jfs_9ydUMCqJEF--CXW7E07w5NbWyvuNVVuqxsGiRS8ythLJu8njBM99MxO6__A6RVGnPnzKZHviLZL1I1Qk6lTO60X-rSDiXwrT4e_Xn?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Chez Maury - camping à la ferme"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.250044,
                45.2886655
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Centre plein air Ronald Beauregard. Grand parc très fréquenté où il est permis de camper (il y a des VR dans le stationnement). Ce serait le paradis si la piscine était pas un danger bactériologique (elle est fermée et la pancarte le dit). Toilettes chimiques. Il y a un marché Richelieu 1 km plus au sud sur Jacques-Cartier. je ne suis pas resté pour la nuit (y'avait vraiment trop de monde pour mon besoin de solitude), mais c'est faisable.",
            "name": "Point 19"
        },
        "type": "Feature"
    }
]

const proprios = [
    {
        "geometry": {
            "coordinates": [
                -70.80693,
                46.537417
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://lh3.googleusercontent.com/umsh/AD1GIHPCzl3bHnL_d7K3yMd9WBWb_ZxwcPg_zJI6rEgTUmdpnzqrx1bCB-0pCZCOG4w62rtLcKBmyjf8Ws-JAeCx1wfCRYYvhUmrZKzjv7qX5gYVTPzmptXbYrc8p18w6yReX33L4OxbWfOfPH0waV-KC-96j39eUuVU5WURMcYIRT717efeuNtiItYhge1ZDTYoePCJ-aH36GTQa5lb09gp5VKrFYOqQBYBRfgpnHU6n26jd0DbZ9wXTijHFKXY6ewf-3lJWMYfHd3r5Xbcr1qe5Qp_DbS_TnAw5MznHQv6h9S4JgrcmoGaTMGstSmdP0bqQKe4PYRGEhk2zLsXKxv4YUQ5cz3LiUZvjQIlNV_14bRfo2rdr1NF1dyr3UdCVPL7h4bkO4JopTEu6ozAgGipebJHwfW_38tNo9FtdB3uccg57bkc5Z7A6YNnLHvqwdAqLxF1P43DDE20Wbvl_rSX-LSjIhMzrkpj4xogNiW-2N86ezVK2_kAVEoolq9ZW1-1EKhRuQZgQ1TqD6dHlEpzvXNHv38wiqxzPl-Sy1-Xjj0qqj3vtjAGUd5MyLLJ6espoQmXLt9HilDwi_ovOKXViYp0krnMG1PTVmeWU8VqNVV4LNiv5xzEKKi_q-PpK0gW3ikrYAYJAPkMvfXqsFLgNQT7y7auxkVTrPRph3ZWxjHTmhNnFZ3iy4tKhJOY3UKcFc82VK1OJXmLb2odYttcB0P1sNP12niDIjQS836HU2ku1Lp1BF4MpQEZiM5hLv1lJwlyh4H8-xFgxvdhb8pGbmtukiUdpD9LaJktCjhX3Yrf9fOzZ9CJXbW1uzhJqP9dJsFlqu89BKvbuLNuASWlT6AUj2zHCqvMkHiH6zAI59V4MWa1K3t0dk-NvAWpAjY9QETHDoIRcY-mS27Eqk_7RwCn-Hsy3CXdrEmHgJbqV2ceusfF9q5BJAxDuJ5AjoE8OrPdihYezfklS77yUjOk35nzVIo8nat0Z8UmMPpwbyXoEzSQNW69joAnMDUFFN9eAaIXxgkrkBFUKBloGywyJcptp04wdZPQKknJ3IE\" height=\"200\" width=\"auto\" /><br><br>Le camping est fermé mais le proprio accepte que l'on s'installe pour une nuit. Table à pique-nique, emplacement pour feu. Il y a un abri avec table et toilette sèche habituellement mais ce n'était pas encore ouvert il y a 2 semaines.<br>***<br>Ancien camping de Saint-Malachie. Il y a une halte vélo avec abris, tables toilette.<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/tfggnsqtadgcjcsmjumoi2ja40/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivItMnE66h7p19Z-CL9zUJdP8HeuEh_MWVCVA2wOB4hGJc32vDqf5Zkl1YsPIe9YuxsO-P09jrR0ZWnhCrak6TaD1iFwqpo4rz9nmMDFrKi2Rigc_7LF7IJG1QcVom4nsFX4ylCt0S2cEkrdcMoaWxMEcZeppKfTpQN9nlEqu2JJ9kBa1Uya1VOG8sw_OCQN9U?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "Ancien camping saint-Malachie"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.48198,
                48.03765
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Après un souper ici, le propriétaire du café nous a proposé de nous y installer en arrière pour la nuit. Quel accueil chaleureux! <br>Les repas sont goûteux et les croissants trop délicieux!",
            "name": "Café des Acadiens"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -76.460893,
                49.403251
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://lh3.googleusercontent.com/umsh/AD1GIHOAi_7kh0v7X5y_nCkYwMasCq-O3SBSkzpzZQALOvJksyaC1TdL4zR2cUTgZLSmoRybe6e1l2qCFRKAIU60MG5ZH8KoDTVmrjZ0viKO139go98TGqa-SnxAUjsfZHaOz18Rn8pf4D7xKU3idNXtuWJYcHPrjdw0akcAEWMf2EkYCwiuQP8pJD9VhrCU6Fjt0acdlTAu_4iqh5AUf6-LDEGFQw8jUZgdd04Kg76-nfnSaJPpXtygs4Tk5sT5_Hzv7goClMX0tfnJZFQPMrVmvJxXnZm8LIwkew9e2pqlLDDIHLBTt3QI8B_jtgTWMKrIkTBLh0yjx4sF8H7vFsswa17MZJxOwxxev_FS3GKQXMR538I6LbseQUxVlVoJ4smxpZgmxDPeACWUQei50BMkR4Ar3q73S_mxNJcMAvL7CN_z8nooRYJgrUAYAB_MacIy0SDc9enihufdUj5h9k_ul5Zugop-WZp9bwxRYVu7XcLwTFbWqcWca3xKTUT9XYh_g7kb2zc5NlKpXXGs7eSQVFJawc-m7tAZ0NOoRlGt7UN9uv55s0UBpgm9uJ_W4nA3zw4jd-EjvrsfqNejcDFZqQ\" height=\"200\" width=\"auto\" /><br><br>Pourvoirie Miquelon, sur la pointe du Lac Pusticamica, dans le hameau de Miquelon<br><br>Le propriétaire permet gentiment aux cyclo-voyageurs de camper une nuit sur un terrain sous les arbres, à proximité du lac.  Espace plat, suffisamment grand pour plusieurs tentes.<br>Nous avons campé ici avec la gang de Echo Explora le 22 août 2020.<br><br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://lh3.googleusercontent.com/umsh/AD1GIHNlavGCY45fbjupz__3VKYHQoo3LdSqOkywDcqUInoZ3yE1ywZM40ef6tSO07x0tGMDeaVy8i7fwQRUnAVgRQSy8DutHpfcDqkqquiwaoNE-YpTCdjO1J8SsA3jDatZxiqkn4uOeesq4seNtL2c2F9NMwEOYzufgAvU2WcpEXWD_Iwe90rkthG4fEoB7nmF-G5qQZjvoKFjPBdYvYtMCv3hvbCxfJ4PAvXQd6gBXOywILCRqADN6aFUc6oAnq4rmO9awNSRZyjUi3Bz_xJwK8RVOh7jvHEHXdM3O1ZLiadYrXA9Ir8LyQVHeFB8IS-65uHqUjMhYlGYMc0x2AnIehziFKDqOwRoIXoeJICGCVAuE8WfB_pC9R0s8tO1ICDDBG1sjIMQNGasfocXZUWVbe2uA7QoJ6cRVvaY1SzP5CZRIxocqLFt57hRNxViyZVdRevTewPXdJeCrLLVK5RZZNbV8B2BXNB8WoIxrqyh9VHJmCuXf3-afJ_rzAl0PnowYCBsqfoRBSpXVfCQGyUuBQn3zEd3HawKljr3hPFCEr6GKzhua-KWgB6j_b3O7e4gUtgaQq0ayO6KSfJeUvfw\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://lh3.googleusercontent.com/umsh/AD1GIHMLppujJuAjLnqtpQ0GCG0lnGLkCmhd2k7j-0_qTWrIz3F2dxUr8FrYAsiOp0WSOLERXkwOxMe0w8WXAynpnBbHDKUiBkmOyWnxj7uQVtK8SQn4itLW92g-Jcwjw44MxaKOXmrOhFzTqTfslN7PlLAMcZ92vmTZewXF1uHtBXcq3njCPQC6FcSwyUijntKtxR-CxGSv2i-FQ3gM_-CySHrONlSLRqgHPLExDljnVwf1wBotNilwzh5WO_SKZhuri-s2aPbgOsbkQS_1xyYACNR99uZRCOAi3HqvdXwZRwAssYBPx1Y2YOP1s3GnzZZyVnI0-kn42WwRiWdlYq3nDkFyyKle5PnkoByYmV9yhPuG_-4kRU03gwSahUwbI0ZVTpbcPqc_svbw5fv6XiQv-e7uXYVGIMxsg87SMeNBysfsmJixcomdenZzETyRLxodiyubt__b56llxqgCUL5KDp0gmG3kT618REBU-6XzXGTtJB2cb4AbTF24leUR1pN1k4V_ZEGglbImUBvK8Mi9vPkcp3Naw1FUBU9nvBBUNtTwPyxAPmzrEiCl50fNQ6jdcf45yigOUQR1QEH3NIeLag\" height=\"200\" width=\"auto\" />",
            "name": "Pourvoirie Miquelon"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.242832,
                45.550787
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://lh3.googleusercontent.com/umsh/AD1GIHO75AzkL8ik5YPIb2f6zksx1mBBvpfLM6Dd4-bEX0ZYimxdXtYSVbKOlzTXJ_grjSmUNXIL_OHBVf5C-o8N3y_lGyyj7xnfxwX50mCKjeG53qucAakGHRu4QcNamymiWiFrtGCYTx_AWQ37imi3q_RqwfQTn_7QPG7DwmvhAp1KqZXreSiTf_-ekxkY_naA-NK2gObLXQRbjnUuNC1vr8d4p-lvilrfcTSSKE05FopwcoiAIfAlI7prLCm-r7a-VJmq31ZgqFTdEBQPJXtQgqqxjSplDrLgcjqTWDs0GqJpN1e2PoIbFfLpQM7pF0D8gxob_Rwd4VCfpDNDVdpgzmzVH4dYJWq12jXHegUaUmmol8az9yC9Z2m7KK1_Bbzya51VnqDlmpb6Jx9D13iPdpBAG98d9-lpl1SCYqciteT29k3SmGHo0Bt5gvAFBrJJnXlWR8jFQ7ZedrrsHJchAlHrJSrHmzWV6i-EpZYXOkVLARNgXDbhYT8ZbO6M7TFU5XZBrt4AcJpmkQ6b9Jy7q9zVIKI0twMI_G1kv0dhl6Mb5HwfFH3aDQXs29p_8O26gEfxev-D74Z3qlHzT7A5vA\" height=\"200\" width=\"auto\" /><br><br>812 rue Albert-Leal, McMasterville. <br>Contactez nous par notre page Facebook.<br>Bienvenues cyclotouristes! Résidence avec piscine, spa, douche, garage pour ranger les vélos, cabane pouvant coucher 4 personnes, terrain pouvant accueillir tente et bien sûr eau et hospitalité!",
            "name": "La famille aux 10 roues"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.977199,
                47.008613
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Note de l'admin : merci de mettre plus de détails!",
            "name": "Point 7"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.384272,
                46.675512
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Maison de campagne situé à St-Nicolas (rive sud de Québec) à 2 minutes de la pisciculture Bernieres... vaste terrain près d'une forêt, jardin d'eau, grand potager, accès à une piscine (non-chauffée) petits animaux de ferme, accès à de l'eau potable et douche si désirée.<br>14 km des ponts de Québec<br>8 km de l'accès à une plage au fleuve à marée basse<br>Contactez : janieblefebvre@gmail.com",
            "name": "Maison de campagne"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.683238,
                45.388266
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Grand terrain où on accepte tous les cyclovoyageurs de passage. <br>Idéalement appelez-nous : 438 725 3787<br>On offre eau, terrain pour camper, piscine, garage pour ranger les vélos au besoin - et idéalement on se partage un bon repas sur la terrasse si c'est possible.<br><br>On ne peut accueillir du monde dans la maison jusqu'au 12 septembre - mais vous êtes les bienvenus pour planter votre tente.",
            "name": "Chez Yan et Laura"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -67.453608,
                48.863914
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Petit Matane viens piqué ta tente chez moi 819 919 6595 par contribution volontaires",
            "name": "Point 224"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.6372832,
                45.7257903
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Maison ancestrale avec grand terrain, table à pique-nique, emplacement pour feu, toilette à compost, étang, belle nature. Nous sommes aussi sur Warmshowers (Hildegund Janzing et Michel Bachelet) et accueillons avec plaisir les cyclistes de passage. Vous pouvez nous contacter avant pour un accueil plus \"organisé\" (avec repas partagé, si ça adonne!), mais vous pouvez aussi simplement vous arrêter au passage et planter votre tente, même si nous sommes absents.<br>Contact: hildejanzing@gmail.com; 819-828-0518.",
            "name": "Maison ancestrale à Ham-Sud\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.694796,
                46.9437501
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/2epvilvtvetu1ld0ig0rug5ucc/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PivT3E9XcdE_q3ouj48YbyECMZpgPdSsV0Pwn4Q-oirWvfhVZxvjRbBvUU23fUPRc5Y_W3E6oJaP9gdhOv_pQO4utfUQntpgyheXIlSSSq_QRNi9iCWU_hQFkr6l5beDm3MEeYvSvsYMkgctc3nf4wkRYdtfQaaMzoMf_o0vkUn3PmQ-5CCITmMfn97WXXzk5ro?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Voir image.",
            "name": "Bord du fleuve\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.8797445,
                45.4352974
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/3n1v862hb4rmdr3qm3abgdifks/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiuWJXGsAU1d_WyYAmCR4zgTyeMYx4Nn6dJixklY6sol5lK7YbaVoxfkCMt9Y6tyRVXBwaLUkfToNMZ4zoXaDOgZJ9Bh42uCoGkyoAHHURRMgvx0c0B3BjeVeUC3LOYH8qyoj4UTMTEfjFJzsPRlrGmOpxmrsmBEQUzGUiKjwhOXL9KYTPNv73Ay4fBMDql1vmpy?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>La ville de Saint-Paul-D'Abbotsford offre depuis 2020 des plaques de bois pour les cyclotouristes qui veulent y installer leur tente. En 2020, le projet avait été reporté, mais je crois que les plaques sont installés maintenant. Le parc est bien équipé pour le camping (point d'eau, toilettes, abri avec tables) et le dépanneur est juste sur la rue principale. Un bel endroit!",
            "name": "Plateformes dans le parc "
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -70.8286741,
                46.890043
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/a2i0m16b6l1jarmjhvlq7usdbo/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pis0XmypLBju_OQQDsH1kQtAp-Hr2P8IAWP5odxR2hoSypQ67kJel-8t7rbHK66KV3rgjp0p5t1AxIsJ3kBmvTmDhu5R9xn4t_CR2gcO1vGWLt_hVtlwL9MDNXLQ3217cujNL1ogQPlQl7_YBjlM9ExJaoObwqWEAELf9XxIAWarSQD96o9Nn5iBFkyEnG75iEOK3EdK6HsEdMb6CLloDqDCNelu1S48Kgg_9vlr1y_ZfzDGoA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>On a un beau site de camping (sans services, sans traces svp), chez nous à St-Vallier dans Bellechasse, sur la route verte. Site privé, ombragé, tranquilité assurée, toilette sèche, rond de feu, plage sur le fleuve et en bonus très peu ou pas de moustique!<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/56f6gcr4do01cckbf2tfl3akhg/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitkBFTzX9XA8DyQDsLmOn9TOVuRdclTIcAZ-XFDqBIw_fmHcqfqK2hkciIpdnsD9y2wAd2dkiVw86VrE6alz9qudRbIIsBClmyB7ybTPjmo03zLHu6uzLJFzC5-WbhJ_L-GVhFwzB-lrAM2xwzrBkrIytHlT064-uyTyMI9opeL4AH29vF1RaOuROSFA0KFdQ6YUaPw0V-PCsam0JB2HRmfQ5h4AL6LwNaa0Rxdm5KuGZWk8g?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/5qf9ek0ik6oudi6pdbt9nfe6r8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PitIdmQzH0Td_TXr1EeG3wQ231dlt56iXyBnqNYCKbAKKGsARXUqoF3uz4OgPKpz9zX5mUiOuC68WnM8LXof8rw5woQlqgFHMSZJirWHDlf37HX0Pt654BuwGSxLvYi1GxQkyuLZTGeUmK2s1n7s6UwsciL4CHFGcozSGR4PClXojsAVF-0Ygm2t3hXygzHL0Wk3UHGVwIv7xIxjdPeY9bl6JghXm52C6_7XpfHuoeVZU2X6lA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/0dnoh0kgdkk40vgg1t801e033k/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8PiukvhD2DGiMzf1Zk5NPLIx3Hr0vT2d2jYYUDD3A7W4H8Fum5PbS2BeV05_9Z2_R-dl4nYpreGAsXU32uq2N5xhXzlB29DiUcAVfTru0IcFPjNVK_DMbrWm-x-C0RZAaBWT_qB6eRRR8hrUrV3JLe-sXv1Xr_mt40mRWYp3QeX8n_Teo0EpH_gCNZXh_4VJ8pS5z565j9xafbNm5mozJmzXxUVJAIWJ40dK8gR_cVHD_HSih9w?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/g09upgot25pe0no9kdkcd3ure4/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pitf_oQGsQrx8cdhaxTBkfy_Xca5FanyWlkk75S-dFZK-PbgXx3wJssuYKjcI41WyGuxB3zFPg006aL_r9s614ZIclDDGmFTOD0rqlluvjkGrGps4QEAd-Evd5YhCHwpKmF_FBsOqY1FzKzBa87OLT25F-lzwh7bWsYuieFmZcNAIB3SsyvvcgH5JPWNbHpZwnOHlAQkUuXC-sgAgMJxSOr0Ae05aP_kFHzYOKHOG_MxQi74Kg?session=0&fife\" height=\"200\" width=\"auto\" />",
            "name": "St-Vallier"
        },
        "type": "Feature"
    }
]
    
const autres = [
    {
        "geometry": {
            "coordinates": [
                -72.6140398,
                45.1127559
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Point d'eau 100 Rue Pleasant",
            "name": "Point d'eau 100 Rue Pleasant"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -62.8061091,
                50.2894102
            ],
            "type": "Point"
        },
        "properties": {
            "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/m/ril7s7o2r7o122taccjrfcdo00/nfqgb87c3gt9vui3vut50prev8/1705163063500/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5AEQ8Pittken36HopbW-K8IuL8sVOYJn9S-Ec1OMkuFdtn7mQWzKiPSn7f-fk7BJ_cHEDNYmezO0qqOIpILozEd2HsDpfHsb6AHwJqVgYpsL7B5z59w6VWwYRCPN5H0cWmKk5OfoZdcDYieL5S4cTWMeinae8KIURQ6VeZmD9m1KZn8liUWGKVkPm2XK98un8sVTnTJZw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Chambre et dortoir, cuisine communautaire, possibilité de faire son lavage (demander à l'hôte). Hôtes très sympathiques. Odeur de moisi au dortoir.",
            "name": "Auberge de jeunesse\n"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -65.5065723,
                50.287713
            ],
            "type": "Point"
        },
        "properties": {
            "description": "A compter des spots de camping à l'est du pont de la Rivière au Bouleau, il faut compter environs 200 mètres vers l'est. C'est un petit ruisseau en pente du coté nord de la route 138, on entend couler l'eau assez fort quand on approche.<br>L'eau est claire et nous ne l'avions pas filtré.<br>Site visité le 7 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020",
            "name": "Point d'eau, ruisseau en retrait de la route 138"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -68.4927945,
                48.4917208
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Point d'eau",
            "name": "Point d'eau"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.1591626,
                45.2670085
            ],
            "type": "Point"
        },
        "properties": {
            "description": "Douches à l'intérieur du bloc sanitaire derrière le resto Petit Taco. Utile quand on voyage en mode camping sauvage.<br>Utilisé en 2021.<br>https://ioverlander.com/places/95188-shower<br>-admin",
            "name": "Douche"
        },
        "type": "Feature"
    }
]

module.exports = {non_officiels, officiels, proprios, autres}