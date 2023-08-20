// Pour la conversion KML → GEOJSON : https://anyconv.com/kml-to-geojson-converter/

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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/n7fqefoj480g295be42446662c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6vVPFfrmtjNRJqyvM9Wm1QeX_aH8ndRmjeHhhCgvJ398uueNRehvpskdRiY9QFdrb_lmFcfvUHan8PDQkfYqnH6fC4mYUPawyc6W1rzZB3wKmihKPdoRWFcEcDr5ycXjz4CDbpBoYtpoVV9JW4SIRGb3t0mrdid3d-yZbtBTzYeS9yk1NftJT9j2EgLAenurSF?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Accès par un petit sentier près du pont du Corridor Aérobique. Techniquement privé mais sur la carte-guide pour les canoteurs en tant que site de groupe. La plage est immense.<br><br>2018.08 : nuitée tranquille, canot-campeurs respectueux à l'autre bout de la plage.<br><br>*** Note de l'admin :<br><br>2021.08 : un cyclotouriste s'est fait avertir par un ami du propriétaire de ce terrain que le sentier accédant à la plage est privé. Il lui a laissé camper là après une bonne discussion mais c'est à vos risques. Le canot-camping est légal car la plage est publique, mais la personne en question qui surveillait le terrain déteste les cyclocampeurs.<br><br>*** Suivi :<br><br>2021.08 : J'ai campé là récemment. Il y a effectivement des gens de l'association des résidents du chemin Courte (à qui appartient le terrain) qui patrouillent régulièrement. Quelqu'un a tenté de m'expulser. J'ai joué la carte de l'ignorance, des problèmes mécaniques et du fait que je suis mal pris pour lui convaincre de me laisser passer la nuit. Je déconseille ce site! :(",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vgvpd8fhvsormnfkiojt4962es/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5b2lBpVxc8ATYyJPShIHN8EhFO62_0COwdWdXXbY99jOvzgJlFo4m_-neofZZIViCvKBKXVbTx6DSxJeCJyj3IwmD-ddNDDZANqg6y2Xwue44gtM8NYQDDL96m5BoCAgBv33m7fcCO-xo2Oy2x5AzTK_WStY9uv6rsjNXi5MMx2Gfs57PpNCqvEOTmO0j64Fjc?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Accès direct par la Route verte. Aucun panneau d'interdiction à cette entrée. Pas de toilettes sèches (contrairement à ce qui est indiqué sur la carte).<br><br>2019.08 : nuitée très tranquille au premier point d'observation.<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8nvum4vrj3h22rptoehnsv8rdc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5fTVhvJgC7PHF4VL_dY_aYv80z0pZa3xaBlkZQKnVtCYYSuoSV5Rfpc0bhmsE9eqC89tJz7YB3Paclf65-97OzmZvmuRutl6rK8YpUotiK0bnZW86CcNmSQsNRCUc0FUu8-lVQBYVzhsi2VLiXYpxaAghfnATZebdtF1P5i2cFgzJeT3hrOz4uJNRXqsK9bt2V?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8drtj9e4iurbah2tk5aqilcht8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4FY0b8BfFdv4yzKZzCtAt_22xPdUuKDDu8MGE19Aw9d5U174K2ic7tqODGkgYfMscUbbRvDz2QHq7tfUfTCwGhxpdziNytKzFyEiK2xZQNyWoto2BHqwO_vkByN1qFKX1DtDz11SdhmQ_cWJd38R8Yf72Zt6vC24fKpP5XeSR5dMEveuRhX2gDSUOx_OsoBztB?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Accès via le ch. de l'Anse-Verte (privé), puis il faut faire passer son vélo par-dessus quelques grosses roches et pousser son vélo à travers le sable et le gravier pour trouver un endroit tranquille. Situé à côté du camping des scouts. Toilettes sèches et point d'eau à courte distance dans la forêt. Super beau lever de soleil. ATTENTION à la marée montante!<br><br>2019.07 : nuitée tranquille, quelques passants.<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fel8c9jl7ej268797flbnnh8j4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7nba-b-diRLXBPh0OE8kq--aOQ9cnXVPMv4vDgWSesrN51VHzA6dEm2N64rPX7rqYZ9I-cTwgxpRxggmQweQjx46TBn89bkkyofVYHgs8CLtPnjHABJZYZbXG15LCF6E6-aQvfdgN-72j_3KT-HDFuRqR5-iXGpo0sxW8F1dUowp72p4VAvXjQM4KmhrgPN1PF?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/guku8lcs8682pmu9gc85ahpo1k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5-YEfyBWee6xWAB_qbMN4idC79Wy2RSxwZToeUB6W7ISUH7bu5u1EZvOp0xy8DpzQRTXowiA0KopaReGMH_CoxzeY-n3tTDxpx3YL2Jq7wyYbyW20XjtziTZZcKcJhAl380MxHmfhWYJ7fNA0jQDsNCHQMP56PL3Dy8C_DBYIMwHzMXp8-PpgkVNnwqEm88_F9?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Idyllique sur la rive de la petite rivière Chateauguay, abrité par de gros arbres matures. Au bout des terrains de soccer. <br>Pas de table de pique-nique, pas d'eau courante.  (mais le village est tout près)<br>Bruyant très tôt le matin, car beaucoup de faune près de la rivireè, et la route 138 est tout près.<br>Nous y avons campé avec bonheur le 25 mai 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/luar38n71jt6db87d2d5l7226o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet78zblxm70QodJ523KuYuZURmnj7xz3w5ziWyu6YmpupcvRyw2oLGg0iVhtKeJrRWYTw1JvCIqAJZ8QYueYjpVkrAndroZsnVie4ueO2mpCHbmGKxpYM9LWH7v9G6owi5oTrHd4CkkxfGnZj1cu8zXCNRsONfKt1lfuVmO4_J69uWJTuhyfeFUAcUOp9QsxgQiE?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1ej7dit1l10drg2hjbpiojqpi8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4Z-9pBwFEgCJQU2H_mqYigcVinhyHYKLxq8q740ll5mS186UTIsOtSkhD2K62xw7PbMvuFeTM6vu8tc_yziBYVlJ9pDcEWdk__nVmJsiCIvxCmXYayWQVMbgHpNVmn3ZM0u85z-HNvtuvGRGi8dBy-sjVENJzI9Rg0Erg6v3Ppr6pmSTxbCqLsIVKVl2m1cljl?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3qcs70344a5l0588mbai91u6i0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet58_zSX8Fjzzfl_xwB0SHmfJmuciwaqsv-suZHOe2iFElvO0HRgSJ6i9jKarNoL2_29x_F43AGWWF5CQLViq2pGKlz1QQu9EnEaI3CjLCpWRHZCu-1MrqrBHe5e0m_Qt6r_lHaPOxZIjjOSfTnAsqSw_wT0ItpwSSDi53ib0LYYBsw5Mr3_uR4iKR_nxP7KKJXQ?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/h6vqoffj05p93lgaal4ck6g7pk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7L3BMl1aJuM_CzMaw0WxI3HuOJJaSi6YuPmhYlY7lSO3EYcupWvrWWwID7dEr0_8LYj1PqlftHiKurRtJ1R3LZw0LkiI68FFGNwdEzZm-D2wuOy-UAfa2P3VDSsH70Fez9yPnmYtWq4_BePpecaoWhRQH3Xc1FGTLe8gnsA3ZhhRebIuXU5UMe2ihCUythLCeU?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Un coup de coeur en hauteur au dessus du fleuve, sur une partie peu fréquentée de la route Verte #5, au sud de Forrestville.  Personne n'est passé là entre 6PM et 9AM le 27 août 2018!<br><br>Table de pique-nique avec toit, fruits sauvages autour (mûres), pas d'eau, pas de toilette.<br>Coup de coeur au Québec!<br><br>Nous y avons campé avec bonheur le 27 août 2018<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br>Caroline ajoute septembre 2020 : Partie de la route verte fermée à cause de travaux d'Hydro-Québec. J'y ai quand même campé une nuit, le lever du soleil est magnifique, mais attendez-vous à voir des ours! Soyez bruyants et rangez votre nourriture loin de votre tente. Des voitures ont aussi passées sur la piste cyclable pendant la nuit.<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/mdavihrklvrfbpk7bp4julqs68/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6sGirdJfEGXq6PwITdkXp8GoTlFRq_ShERGVyKvqPPH3TJFeVJEggKM5RJHC3WfSIM7Jmb3dxyVVbyanWQ1hietJvtbtrLtzUYki18YJRK-QEXEb9rp_SBpeymgSvdNa_8PeETGyvCZukqG5jP7XzRhg_nQlo78316hpEGRAYommgOXBx3eKI6E2D9tmVw41lZ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5o2rv7hq0u7lteuiodo90hrd4c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7qKbHheihVQ8YFV07tmBaj-3R19irymuBoicAKqsOiMe8WkLRJa8JOvJ9BfQ6mj34icncywTBB1_wezvd5SkQIgiDnEdL_eB_eZbR_vElIHr6h275ZG9fuG5yvFgfpULw5IDnC2SXx_X1P9-XxbW6GlxikaRpJys41-4_xrHgXTe567QATGuTzAESwTwCLX6Q9?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qfobmd4s8ngh6i3egj7qflnkmg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7z1uO8dINN3Atxw3XLo5NKjcWn6zaqe-raHJHgPH3-aWynlQdoEJ0964kH5UI1cvr-p1enyBjokG6YsAopZp-KQht7J4B0Q-xcfx17ZwSMhDWl7_WuvVBxRt3iCuHYi3Zck8NA1V3M6T2iBa-dRxtjDq1IPZEhQ6uobukE4UuHXPIfJXeIU5650dRi7HpA1aAw?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Ce parc adjacent à la très fréquentée piste cyclable Granby-Farnham (Route Verte #1) est incroyablement bien située; Toilettes et eau courante, tables de pique-nique, jeux pour les enfants, beau gazon, terrain plat.<br>Le hic étant l'achalandage ... et la tolérance incertaine des autorités en période de pointe.<br><br>A Farnham, il y a une autre une autre option intéressante , de l'autre coté de la rivière Yamaska, dans le Parc municipal dit: \"Centre de la Nature\". Un secteur boisé, joli sur le bord de la rivière, beaux terrains plats et gazonnés, table de pique-nique.  Plus discret, mais de service (eau, toilette ...)<br>Nous y avons campé avec bonheur en 2010 avec nos enfants (tous à vélo), au retour de 10 jours de cyclotourisme au Vermont.<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ub9306tegl8r81sk4g846lj21s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet77IQCnCsUOrAnBJs80Zh-A2WXwj8MF60y7j4XAjLYXJbz6fpUU7qSCfI32faBgEgwgCXSKeIHwYANEjmMFyTx4b6r4rsyyWc4hYjPRxGzqgDod6Z0nj2NmtkHYr4rj5-JX5E26ctbwNLaav0tju1jJ1hS_5nBD62482CdbbM5MiRGs238nuE32-xYtjzNLB29_?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Quelques emplacements pour tente avec rond de feu. On m'avait dit qu'il y a une source d'eau mais je ne l'ai pas trouvée. À côté de la route mais avec un bon couvert d'arbres pour protéger des regards. Pendant que j'étais là, une famille a arrêté prendre une pause, un VTT est passé et une personne faisait du surf. Relativement tranquille. Aucun service.<br><br>Ajout du 6 juillet 2020, NPion et HGiguère<br>Un premier emplacement juste avant le pont de la Rivière au Bouleau (avec un drapeau du Québec) est un stationnement surtout fréquenté par les gros RV et autres Winnibagos.<br><br>De l'autre coté du pont, les emplacements sont plus jolis, plus boisés et plus en retrait de la route 138. Directement adjacent à une plage immense et au Golfe du St-Laurent.  Un coup de coeur pour nous!<br>La source d'eau est de l'autre coté de la route 138, moins de 200 mètres à l'est de l'entrée du campement.  C'est un ruisseau bien alimenté, nous n'avons pas filtré l'eau.<br>Nous avons campé sur ce site avec bonheur le 6 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/j6m2fijcg3r1pubq1pgj9gtb0k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7JFWZTz9pJJ3ipKGbl7UbL7JgUY3MRIEYfAphNHq1yiIe5YWFl3EUoBr0SOkFvm3Ek1xKJnkWBSzh-twVVKul0dlttjnS25etv0QSmwYr90drQAT_MRkuOleXVpmC5XFtsuquEBF6wMJCR2XzbMe6DOiRe0w14KkfLxABZb6UBJ4ePRd6SjUTJLSVswSbYxkRM?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/a49poeinimts182d7gpvvvkhs0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4a6cx_SGVOQlg9otyuQjXqWDYXfQ5XsZFnd4FDdG4RWcCmA-ExI9IuQM-vj1lfmr2_6XvT4giZW7RRc1_wiyFhfib34lcl_b91uVeL7COv6gnuNEsd32GdQETxLbggXGXCbXoeBY9IEHvPA3Y4Zr2N24bAKiEywGyDEDr4XQkqzSjlXltveRwxyup_16yhwg1B?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ef03n501mnst0gqmiulvr2cl1s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5HL71G5QE0z6_tXFzLy1ISr7rTRACc9kcxdwkTouoYTJ35qaBrPCIqdWqfI5zKMDwcgX1C-YwDGWa2auzxSK2jaOIpVWgMcJ95xGHyKMGbyBU604O__K1hxZT98wgap75eVvBqLg80xVPBQmGHPbCa5dz3gg8TR4e-TjLeecFBj3H_HAO0K-Orp7xd9ADg8bt8?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Camping sauvage sur le bord du fleuve. Je n'y suis pas allée mais j'y ai vu une tente et un campeur. Aucun service.<br>Anonyme ...<br>Ajout, 10 juillet 2020, Pion-Giguère<br>Le site est magnifique et comprend une dizaine d'espaces aménagés pour les tentes (carrés de gravier tapé)), autant de table de pique-nique et des toilettes sèches.  Site officiel mais gratuit.<br>Eau potable à l'information touristique à l'entrée du village; Petit marché d'alimentation au village, incluant café et SAQ!<br>Venteux, moustiques ... mais magnifique!<br>Nous y avons campé avec bonheur le 10 juillet 2020, nous y étions 6 (3 tentes)<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fkedo254bg40n76omd2p86f8g0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4GzTY6QYutEmp-bkWuyqbDmDl5qt2tY7_DQyYfA8h92K8KTAbvJH6NBf-9KHUDfBZqO5-owSXOnDMFczfQ9lcSdF6mg6wLBfo1lrLhh3U4ZGq85gh3bhiyGbfM-LkdKUUaGiTHq_ZK9t1SMLD_Eupib95SLef2YgPLRxudJe688-8t4ERHf_1KCJQK5WBqepWG?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/141sevifpmoo9fbo17luk8meok/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7yACWpg3t2MdeQeYNsYz2PUszwiDU5JuMoASfrMMeM5MlUPBwz3g4-V9by6Ek7ctsLO5T4LjVn_Lrm0Rj0D52RBb3xosEULuwpTFWcpowOfqTCYnKzNnTVv8GtDrzb1OkUz5A4fpZaIJ28j-iKNGZ_Z9mctlRPslXi4eliLl4oSlk-nbQYCELnJcZB-yK1F8Fy?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/u7t6h3abpeeav25mam4v0q5ue8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7ru4cnvxEw1g9N5VVfM_Yt2ixZsNdQjMOSRPh6n_EZLetX0Ylc1TdVC5lAzT2xfHG2N3kwrtU72H4pwQwbmoZprJU4hTj7RJ8POrbbFBGgtc3skh00-ooIEWgtRnhZ_m83osQ85c_8Osk8VWbhUsVPD0MkGCMbI7Luq8hUI2gxqYR0zFuY567BgowEuzTaZsI0?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/kj61cno7d301d45mgs12o3ccsg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7WYBu5j5ScIp9c2p8rNcNDErfWonT9leEm_U2hMOVY4Qe3UJZW_bvHhDktWNr51cmyFfoCrP6V_SDO7edDBpwzXr4L0BuBSz0eJVjZVh_71aPxSTsYJI-DsVN8HyoJWMrb1qxDWRAB65P5Y9QbI5c_gWAjY_rlTb05Kpz_LmaQQeewt1N_6arxWTkb7AoE7-Sn?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Camping sauvage sur la plage, L'entrée #1 a un grand stationnement et des toilettes sèches. C'est un endroit très fréquenté par la population locale donc il est préférable de décamper tôt le matin. C'était très tranquille la nuit quand j'y étais mais je suppose que ce ne serait pas un bon endroit pour camper la fin de semaine. Trajet sur piste cyclable pour s'y rendre de Sept-Iles.",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/s3ee431fnt9044j58asqr9dkt8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6U4CJ5IIYc6Vc4mO3Oz9y2-OvCqMhJQFEu3JMj_h038u3VWUuykWo5717qc69zdfLDfzQk1UnmNbh5PAjb_KX2nyP9MiAAh4siwKSAnYDFF8VCoE2MaBrLZUoSyx6GfyiQs1bkf2mucybSJl8cwvlPfHNGE8eq-iXp8asQXd6f8P1-7wn9BaneMcyo5VRPeW3Q?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Abri aménagé par le club de 4-roues de Bellechasse mais qui ferait un bon \"spot\" de camping par mauvais temps. Beau panorama en prime. Pas de point d'eau.",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ruh7iqj9shqj26obmpgf8ltlu4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4k--nBykPFPqGqYxWIlWcKJhNJCrHf7rl80-JrRbAVvdS6LxJHSJmOTXv9dAbkVngJLgPSD-_TwZJgq5tlRYvEAheqxlVabCXDpwLdtdnNKObSLSsxWzSTRg0lxK_KkLUVWjU_Q0FD6el-05gUoeegNEp91lcLCGs1WorPTRM4DITLS8szGnBwoDJQGoZC7W0?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Accès sur une route de terre du côté ouest de la rivière à la chaloupe depuis la 138, la route tourne à 90 degrés vers l'ouest et longue une vaste zone aride pleine de bleuets et de plaquebières. Il faut manoeuvrer le vélo vers la mer depuis ce point sur un sentier de 4 roues en sable pour enfin descendre la pente et se rendre à la plage. Visiteurs occasionnels en 4 roues. Beaucoup de fruits en août, mouches au rendez-vous. Belle tranquillité, horizon immense sauvage, sans eau, sans services. Halte touristique de rivière Manitou, eau et bécosses à quelques kilomètres à l'ouest.<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/0ri0kic0kod86ldnmsvbrp3fu8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet44svPkpu-AmwexdINxgqQgBHHrh6IPIhYB2_UkVxulwGDsreYscuy0QtpYMrtQRittNEJxCIFBF8QIkuV-0TPQI-7oSGuEX8A_eSAgI1sXBrnnD8uEJLxTiwaxHH3sAn05fuZ_7TfgsNABIkZoyGYQayebnDZrJkuAgdArUgZGOMMBczJRZlS0Ou2PYi73jcQ?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/v0keqlvbuurba6lis8ksoonf0c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5-62gDfw1YNge_44EUMNhEVSiPzRuvMyAtA-ZOBpqqRlEH-8A7PAEdqtoskSpqgEqBlwJDEVHlDQfg16vbx1ph5fX_mnwGbaZSOF4OFK9Fr0SVTR6TAcgTrrHezygbOs6t9f8-tv90CGfNYgbIo3qsp5FLoQOX4Ea7vfi3x-5KS5A2yT5TEEjgB_DhMxEB7rFV?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>en face de l'Hotel de Ville de Austin, à 200 mètres en retrait de la route principale, beau parc municipal, avec terrain de baseball et patinoire extérieure. Beaucoup d'espace pour y monter une tente, relativement à l'abri des regards. Tranquille en ces temps de pandémie. Personne n'y est venu entre 7PM et 10AM.<br>Nous y avons campé avec bonheur le 2 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fggacsaov3ubqaemdlogkrbb80/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4ScYMbxHCZ3fJ6l5P6k8gtzF0Wzvn-cdFna3tieE4USCj_cpszkPw370sH1XcAsRqOnINgU0qyV85R25x5JfOWacOKVZgo7zfGnAa5hN_zz7RKk9IQ3-XuRjfhjX1vVV_djuDyxxknxyc8CbatoDuwkybrBhOfB_IFUWlB_yj8i7rV49pnoDH957KV5-Xx7TsO?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/79t9haikclbcgerv6r07s10qqg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4uMEJ_oCHUe6qCcRG-w6QG0NVFM3zA_JrLBgyKu-sJY_2GqhkAzb0gqYxzUWEw3Vto35E010mU3UxhbKsgfL6UoWCHtT3Ac17eiq3YuE35KNbW1JlabgLxbGuey0VeiOS6BeAD3E9JVVkqoAye1hMA7fHKwFExTf602OSWrfJTnYoE5NUkdbesRA4FZnNlxDsB?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Un extraordinaire spot pour camper, dans le joli village de St-Malo: Abri avec toit, 4 tables de pique-nique, toilette et eau chaude!, Wifi ouvert!!!<br>beau terrain gazonné, endroit magique!<br><br>Un peu bruyant tôt le matin (camions).<br><br>Nous y avons campé avec bonheur le 4 juin 2020, avec 2 amis cyclistes.<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br>***<br><br>Juillet 2021. Je passe par là pour remplir mes bouteilles mais l'eau est non potable. Au dépanneur en face, j'en ai demandé le plus gentillement possible, mais elle a d'abord refusé, « à cause de la COVID ». J'ai dû rappeler à la préposée qu'en mettant un papier essuie-tout autour de ma bouteille, il n'y avait aucun risque pour elle.<br><br>Nicola Z.<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5flke816kuleu5nnelml34tjjg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6Y4WkaZ2IiNOQbg1_AEePjUAxDFE-oxeygTEhz-ADj_trcHGzV_AhQ19g50BVzDg_uiZmxXMd30K5NIA6aIsSU2JexuR03kyFaTvbRAHQgpmdo1LLkF_P-ygswB-rvw4_hesZGMLnaPRo3Gi4TlEPMmEWlIv0vq2nnwqA_bVv6469wNWwTq4A5ah2ytUn6eN52?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/a0jadj61acddpi5aa47vhdf1nk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4PaIH6eQsvumN9t7YtmY92K1ALrlz2ijY74PW8gdskm6Ug3uzxTJEu59J9pPe2M0p-I2nQPOgHP4ZgbwyOhA458vJz3n74vLnpeAn72sOyJSvj-brQkwIFsi5a7mm0uq7XS9ZvdCbHhG5ZPnwSu4fzxP1fu5sZxstkOFnUUhVKtNsm7c2cUaHuKilfIgdZcydq?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vh34dpioiufs0e97apouiddes4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4Ngnzv4Mf0FwwCnuiUUNYO9g5flzE4aHYFejNxHKCX7jG93Zarc-OOdJuQvHNI2A4RIK86xW2WR2SkME0r7lLasYU76j4cyrDJRG9E_9erU-pTiMiZmsqIcQiISw55PD65Gsx2LSbL7vmuoHrOmqTPN6f2pzajr1SXzY0V6BL3PRPlHlysKszI4vlYx7ZzWAL2?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Aucun panneau d'interdiction sur place. Je me suis installé derrière les arbres pour être le moins visible possible à partir de la route. Voir autres notes laissées par Normand et Hélène.<br><br>J'ai campé là en juillet 2021 sans problème.<br>-Nicola, l'administrateur de la carte<br><br>******<br><br>en visitant le village, nous avons trouvé ce spot encore plus beau, avec vue sur toute la région. Table de pique-nique, toilette, beau gazon, totalement isolé en haut du village. Mais pas d'électricité, pas de wifi, pas d'eau(voir voisin en façon) plus une côte majeure à monter pour s'y rendre 😅.<br>Si c'était à refaire, nous sommes presque unanimes à vouloir nous installer en haut!<br><br>Site visité le 5 juin 2020 (nous venions de camper la veille dans le village de St-Malo, à la halte municipale).<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/kk4rkg0en9qi5m1hdjptmcthro/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4fX8tiIbecSP7jHU8FQzCI0EwIIgSw8O4xxRVxA0UdFAKvIpBpqcaoiJetuWasOiApYQf8VCEeNVu08ZOMq00fEmYfnZNiIpKMl7SV8_ur8K4QigDYnmTEndiJsqr6zGzdc9SqyVLOu7YjgwcGuLIlW_4SyDLhOQsTvmsXmWBUVi_zd9KfWQC0tJ7n0_4rd7_U?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/smkj31ej79qaic2u62or7td3ns/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4r1f4VnTTck1oWolKu33HHvoVoLFQ8Je9zFUxQZ_JiQQImw0QIzUM_MFGojCk-zGytL7pt6KsfY-z0-QRvRH77q5w-SzkZV1Q9eSV7wlIwaf9HLzGZRAr4CiHEkYvKnvzsbPZDgwqwBO8CYRJ_8f-sOuqwVtliYqjQ8suHBscnpz2R9nlJHiBuBESbuFqgXsD9?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sentier pédestre aménagé, bon spot pour tente un peu en retrait de la route côté nord, toilette sèche , table de pique nique à l’entrée Du sentier.<br><br>***<br><br>Campé là en juillet 2020, mais un peu plus loin sur le sentier. Pas vu personne. Chalet ouvert le soir et tôt le matin (toute la nuit aussi?) avec une distributrice d'eau.<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/s84u6kc40km3jqh6qknr58lu78/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6hYWjgVGTh4EYpQpyo3h1D_6LyqcKOrOJM_wGMZkukOpaNMx3pZqP6hNYJ_vJsxConwNQSu4yoWhDnzIB-jJ7PXBrT8EkPL5vAe6X_djOu7nowZhuIp-zMu2Kh2poQytpKfojK3AG5-a4bRC5Y4KH2uHMoL266358GvKzXDCiGQMe0EUx-4UrHIonINp9FMrYx?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/v3k3t9fmm61fe17ngi8cqatb4c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7OPS_7Y4m8Zr3ZpsI0mtgO-pV0ftKVLIyKuDxr6ra5E3TxR6WrwjFUoGL6yyqq5ewaIXqxRk1-xK4rnzNeaLo2e2r2zvQCwh7IskP5lKjonXt7FaloKAbtp7AlV3Q8kMXrlAF-X9015K4IawOKWJckvqQQDWTKX6HuuOR9vPUisUHmY0GSjOkaivFO6-jmAkdQ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Dans le minuscule village de Ste-Agnès de Dundee, un joli parc de village, tranquille à souhait.<br>2 tables de pique-nique. Toilette sèche au bout du terrain de baseball; Pas d'eau courante sur le site, mais possible de demander aux voisins (et en même temps, aviser de votre présence pour la nuit, par courtoisie)<br>Terrain avec beau gazon et arbres matures. Il y a un peu de pente, mais nous avons trouvé facilement à nous y installer.<br>Endroit tranquille, aucun traffic en soirée ou tôt le matin<br><br>Nous y avons campé avec bonheur le 26 mai 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/o79k6secp2abomjpj0pdh5fbsg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6TyXj9YniSx7PRAKsSAA7ygxYhw3FGn1dlFQLYKsTPJWnJdXvLthj-x0BACoiUJluY1-rakIkkMEBtZ_mgpXLrugW0yudxUqjSPgpF-V4ihIWhb5YTSgLPGMBFbxlUzLBm8cX9O1XCeXQJF3A6iX1c2bDZywtEA3JqdgJ7d75QOCkRv-hQqkCs4vT2MMnK3D_Y?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/p265t90vllu7cai1snb6uabac8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7Uvcgsd_gkcaJfXOV2jX1laTNDyyOKPkcyBVA9Tys4NE2-eGtXXYnt5wApAo8atOZ2yYbozq7li_OmfziC4KDHkGyy2SbhrPF3SJaIPTL6qGWco05aFt3UiIE1xCpQDthSky3EfapDwp_NbEuFXR1JHUOKVziKSktk1xqaedhXetmGW1sIg7YkfP1xRZVJY5zV?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/h3aovh8o9gmptsfoc6c4ctc6h0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6XnU4gzMntcapfI6Ddyi94HN_mwOleh5f0NFnOJ4wN354b07sxrIzGpMT6nAy_iq8swjOAt1jBQunCYAFlPp-BfJhGPr1JPDt19ouU-2zoiUkIFq30R7gMVEzSz-uMOXGx9vX4T5tTHtLrW-u3EgW9clCamEuUw3gcFzfPdEmhGnRxlJ7iL-UtmsXkyiVVPpcw?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>En retrait de la route 212, à la sortie est du village (à la fin d'une dure montée!), cette halte municipale située en hauteur permet un panorama fameux sur le ciel étoilé et sur le Mont Mégantic.<br>Toilette sèche, tables de pique-nique avec abri, beaucoup de verdure.  Pas d'eau sur place. Très beau site!  Visité le 12 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/90v2defd8gt2n0o7saqbsq61mc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6AdPRfKYYV32X2d4cqo2ZEy4S2X0kpwTaOmq0l3WtRdl71Gd6MlSPfWz-Br5OVkNEgRDejbIoMncS1_r125Jruhi_ZKBfxZkB-GZzN7qv0McbeDuDkdddP8q92gnRVERSFZ40ym_wEaNMwkf-sKQgJ3c0G5dBkI-iDbVqXQloIxwVO8_ck2vyV6hDMoa-_O17n?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/b8v235a410agav7opmsacrbftk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6jvIt2E2MRTQnfsV0VtuSuk5unQmIb1LP9xVlt6F3xPJg4c1tGOj5KT6PcKQx_0rf_IGMxjm9VYrM293Fvjr3M7WMzoF7Z-N8tBDq4-B8ARCkr3--VNOLcXYVy__LhLx5X1UN40PK5TRUYDvgTgZ8B_XZESd6d_pa9c7V_jHx-5d-eiDWbxhLNT3F_X7w1N5jL?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ajellrmcolfpgeh137b78hci9s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5zgyK69Xqkbnig0GB4svJh_F7b5g9Y_zG8JTuveojJln8Hb0F8xHQ_39BwskL3OMaLc1TiU0EN91p2W3S7lhrzkWVdnZn0LMUSqXIDMicrLjBdgp0phc90FhDDmAjIfQlaw1WFgrOQM1X2H7C_CdBDJEzGOtWhWABSYGVu-UJMlqX39S4oHQxFR2XdptNEBzHk?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1ln8j0jaocsg44ld9l1tk79f90/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet52eN6lta_qmAzW9WuCywwzYLVCg8oSYONTraUwOqOZR8ZqeYlKKpxE67rUrHxtfS4GtH2vn0Tk74ET86pm31Lg9S4eqWsViypWfYRvN1l8UzmReQbcL0djpYwP7gKMMkjarFd-IjZsUkhDBuNcoX9aGqXVXeoVw92q30x4uclkx9fT6_hNxVxm7LV79nndikFR?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qqh7m0m52j8ifuqnsd1almjl5c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7jyE1HDuppEnkS3F4U7KdYT4rU4QVOPZr3kidEClJZj8nd4juiZDQ5djrFtqLrjCedJlvbARck617wdhMNxXewCH-0NoE8qRWc6wOm2kYA8DtewCM1TdRI0gYH4S9l750HyJ29CCtL7Ej1SrPJy_5vIkme8vY6g48-IcVghrvzOhJCFua9EtPErZhG20CcYIbv?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>A la pointe sud du Lac Mégantic, sur le circuit cycliste faisant le tour du lac, un parc municipal est aménagé à la croisée des routes 161 et 263. <br>Assez vaste, pas mal de verdure, quelques tables de pique-nique abrité par un toit, toilette sèche, pas d'eau sur place.<br>Nous avons visité le site le 12 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/enak0kefo52ojn2cflam6k9cr0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5f7QoflLNGMaGAt88eeiWfLpjLTS3xxBAMsSWAyJcL6pxRuyiLBci5pQQ7u0RyoS8y3eO8kVeP_bfJQp_Uxfiy__TvsMvPjCjJjCoE-tyVCcWzvS2MpOu1RFZQS1wgukmgfqe1htbsScnTi0XmKVVILNuo1WvvF7jTmSDKR9yEwdfEzaRlFPsn2c8ie5CFwZ3C?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>sur la rive est du Lac Mégantic, en face de Piéopolis, ce parc municipal dispose de quelques tables de pique-nique abritées par un toit, prise électrique, beaucoup d'espaces verts et des arbres matures, et un accès au lac où il serait même possible d'y camper.  Pas d'eau sur place, accès aux toilettes fermé en soirée.<br><br>Nous avons visité ce site le 12 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/abnjmtauujvdnr67kd197i6go8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6Rb6alw6Ef6xvp2komfxu4NsPjo0SxGKPvwihMUmHEtbAOLPHsA5v3xp-7Yleu4XHBt5VOHr2JweX5s5UXc7vuEyj5bfnSNz5enKTNl2_hohlEiA0tOoBowsNM3turwnmX6T21qmhh8bDgEsAy28D3TRpgz-Hdtd3RR1ScMll1_jyboAxyahWnXdq_wF7RI2Yh?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ojfelsd7ij3jgvvp9m314gk2t4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7xB6bCjc8eiXTL5IlkrDfZWCPeOhYzt9ftRrT0bGDPSLRISk3bGDDjnfni1_YZhVktXzpM_ce0ecuIRitOWqpFS8Jpc6ytjOJhIeZUvebX-bgqFGRLtS9Prk04-B8inGhfFVjOsocH8GAxdu98G4rvuQCQFkjD_DeWMI2BNJXnhiqOBplbW5DUhf5kTA4dauuK?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/a6mhs814s2eq07i40itqbp7vbk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6eh8AacRMzsRWLjky9n7dSGgC35FRibu1USRhMQcOQlvXHj6_D0H0gOrpUzc58Hx5jLd7aXN1-fu6oHndL1kxrkmx92hZ6d-wbbAw2XcIJX6YMwNK8ga5e12Ru7EaKU10gaA8SiKg5WkZ68f_xIOAFyttMZjtfbUdLzJPVMYeYDvq6EPMIB4c_zvb6bipZLRre?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/okilncog0rqpd9to5vntcjc740/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6vPCIKsyPPYC-GXq2MaWWgEhkRKP1-Txgd-K0hWaAcxSiFByqgT5OoYbcd8e-AVA4aZIgch8G4chgoRUyYNy9I6WUxCR6negtwNLjG64bzjbqTh3DEV-1mepjUDxgGNX9NnaqaOBQCQJwC1b6VTHRGpXjgNnFa9Up-rh6NhsFofCmfXJYh01Idm7MIA5mHYEPA?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/p2c3kbjijbn5o1dq46f2u92ugo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4TGgaTa-NPtfwiQmYfRD9RvJ-nGIzG90bHo94xB2FrmUwPHpPgyvRnYFdqaQQgZxLdtf5eqpbgO2yBJgAcXWsdeYW-igwB-fSquQ3C5pSE_jzfEFiJbk851YlGmAniGQZxCx2lfKpSgW_dyc9UiJRqHfqbfqjfOzXs4Kr5gPvNSd1NDx98e8I4FqN-ftoRVZrw?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>sur le site d'une tour d'observation qui surplombe le Lac Mégantic,  quelques beaux spots pour monter sa tente en soirée.  Quelques tables de pique-nique abritée d'un toit.<br><br>Nous avons visité le site le 12 juin 2000<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6kvf9kltks0vk81dfeug96uo04/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7ZM1H-ABQ1xkZOzXjWjCmWYRllS4dxPa978f49j3OF8qOEuPpMMOwMZFrmv25SA9SX6TaxSvuiSAXxuoNfBoh1rz2TUQbZnZa3YjRfH6ELz0OHlIBsYhHt8PpFJeQ-WNr4sczEdmTb673sUaWHpkPxXTNxoppYYLnkTzKwHFGxTliC-G5Bmm_rDT_MAsKOFhJb?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Beau site en bas du village, derrière l'aéra Marcel-Dutil.  Sur la rive de la rivière Chaudière .  Il y a quelques tables de pique-nique dans le parc municipal voisin.  <br>Nous y avons séjourné une nuit le 13 juin 2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3vq4c4o95v6qe5csj8ekp1rnd8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4B07iCwbkLbf8w7ZtgrOzvmav8Cxfvh4_ZK7UoTqRVzHoITwOFu6EEckCt5GKe13NeKSeZXQiq7Uh7kWVjoaKdw_kbjacTJICyInfhqXm2sRkj4-xYQWNhea6L5hjKgPrSNCIwdcqMyVTkZ4AFMEHY4YQ__tc7_L3NrTSykBL3iytA_DmHW5Z_npS7CeShof5L?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/97m2lnn62pa8g2kc18p6aejqe0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7uC8N9UTcYEefNLqFy19plGHESmN3tOfuTVRC5FZTtoqKg9uctsID8tUoDjxOXhkCdFuOptmmLT1ztQZgUViG3Pm8Q46qs8kEeXdczfBTVfT2TVkyUG7VA9WroXxMceGQJ5n-56JUyxyzHxuGHPRjeweRSEp6_4Nl3kJdTo53fitUO55o0eDxMEP_bWC690pwY?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/uhvhln5u5k7o6it6l5qr26qu4c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6Zx-BuJFR2MGo3aBGDceRRWPrvhqSQVzZ8dpEA7XLKuvD9Tk3RnX6gsrEUjrPKAzftPS8DgyUF49ZWA9g0z9ogpmqBpjCCDXrmPcxSlcZTbzSi3wo4qOZ5OJxNv5W31LPXWGi2KrSq8fst_4Z70ABxbgkwrcx0UK-aPFrsdctLjA7gDo5U6HPYDkBSXB94IGGx?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/uiimrel4748rp70bkpgsmrtkhg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7aznFui7SMejirJWK3SYWj9_IXJtJ-meZEihuwY-pG1E8fQu4tJqXchRJgB0SDrthMNLuqr5nBnZH9RJ1VIgAFGCuvdy31_6iH14aafcwdiNhQ8_qPZm0UqNkzO1iLsoJDajjyIyRaqnkWlXBu4iAje-4p7rO5pMKM-vEx8dGvzVDGLQKck-d29Xdn37_DbJoM?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>En descendant de la route, passer le petit pont, à droit il y a un petit sentier. Facile de trouver un coin sur le bord de la rivière.<br>***<br>Il y avait peu de place à droite, mais à gauche (est), il y avait une belle place, par contre pas à l'abri des regards et avec un beau panneau camping interdit! J'ai quand même passé une nuit de repos en aout 2020 avec un décor fabuleux. À mon arrivée, il y avait des gens qui profitaient de la rivière mais ils sont partis assez vite. Pas de dérangement.<br>Possibilité de filtrer l'eau de la rivière. Pas de toilettes.<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/nvrhr8v9v78md7j680p5tp0b0k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7NN97Qpjuapbj9la_ugr2DvLQNcCEv9ye47VyjIH0gWnoB7kppmLNo92dOmSd8IMqETlE3UBWDYg3lJ6NfRINEGuBwb3mrU7y8MOkrsc7xjqyNF_Rsq-Gt-mEjrvoHBynkxKS1XygQ1KpiH8y4g7G_FRwQt63RFvFESWP37PfseEC4J-DzSc_7gYblBRf4z8cD?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8i48oit866jdfmhahdm0fee3h0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7vG_3KYCGL7Aoc-sjzx1akl_GLDHVp77WSdlPwEBcwepoZUX7JXq3PUAMkx9UVyoVNrp51fpYT-GTtnnY4E1aEC_zkFvbbsrgOjXVd8avQXm-RGr3KO_jKFCYadBJN3k4TX31FzAWFLvsyR3PWnI6XNB_2ZoC6At8OJoqTUfGiRK6yCicC_maseMFx1O6vDWcJ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Avec la permission de M.le Maire M. René Laverdure (sa maison est juste en face de l'église, en haut du village), nous avons pu monter notre tente dans le petit parc ombragé adjacent au cimetière, à coté de l'église.  Eau potable à l'extérieur du bâtiment municipal (aussi à coté de l'église). Wifi possible au restaurant O sommet des Délices (ouvert du jeudi au dimanche).<br>Nous y avons campé avec bonheur le 16 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/2h5h9cgb11me5f37sm1dtlfg8g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5XBJTyAi4a4TARbkSDOugGeozib8EhePP2WuxOLCgmRVX0HztCB0buVcRh4XWxXzZkZR2d14D6IwFCtPyW4wSFcvt2xq9acu64enqIGrAlmepEw8FmB_VkOG3aAQibVPRYoxUKU0WH_0d5t3IsRcRi_e2_6uz0kVSZ7EZBqqOhBWXhYoNo5zhrSBSlb7DkjiNy?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lrc4ng65gl58mtqatoook2ff1k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6dvw3Lco9a1z_E3Sl25dRnbwyzVnK0m7P5U9zERmSru4svbwrb-an3dP17r9RErBi47t7qsuNR21QzB1FMjD3ubvciYS4K5th9dmBP_Xx70dBkYgrj1iyBUVtxh-e30rd1dY_lHSBlx0gbtPHb9FkoS0bHtBAyutGEt5k-lmdgdJFlqIx7hi9uRjXf29f67YKn?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8j413ijn2uq3o38q4f5vq1tc20/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet42N2-Aw51qOjHHKvRfTs8zuxjP76D7cqseFgRsJnga5B92wzOxLZvAjoWUG4spwllOjgzcaJu-hZOfTg8C53ZH_yRqBbmvRqNyLl83oLBaLc0t5Krk7z9K6ddGw2Nxqaohs9hc4EKUnNLlMIa-oo8eLKWYk1nqjZMRiMxFxp0NTNyis2zBO1N1Cpq9eEHKnnDX?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Vaste terrain tout en verdure, en retrait de la route (300 mètres); Tour d'observation, tables de pique-nique et abri si pluie.<br>Site visité le 16 juin 2020<br>Nous y avons campé avec bonheur le 25 mai 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gtmqkoo8qo60p64orb16cnub7s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet51USO4DVlTsGho-sB122NiGBmevZX4qHc3ItOEIxVE2J4kt6wwf110VOlV4yCp72WIsnChY7PRZzMtSnn9-nfcPG1pHHUYGVKc89fHNwJ-MQXt23tg9gGdm4qv-OKTYf8TaId8MnIz9Jcd7vAIdQlLGyFeNVcSiiS8eCsPN0kLBgofcO0AkrkqLKVzArCLXEzM?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/c9acqn1p6b77p81h1j8cee5c4c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet78qKgN_9LeEpYNgJBOdWFQlwlckRYoXifyXzSQFoG9ghd0WrdTyIdcoDrhVxb3d3R1UNVoQK1Qzh1gXMrWa26SuKMWrRoduVVq0AoynUMatj3joMKm5P75bygKd3mKSqnp8oPzEBV2Ef0Y1ZAcyqnnUfP09Lo5sxm8-5chKKF7CHQ2RFCoMfZCz_07Vkbn5zT3?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/om8bhn4tc0qfelnmsuie70548c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6W1NLZ2QYzYcd9071boFI-DZwHGhgrhR76Ta_q5ylUqtOLBwhMHd2PEP5tGcZfJGhOgjVnOqWIoN8lzMNRYivIztm3Vr8qHd8kh9xNNEOzzEN5EsB4lrYf0zn70ybGKkyH3WD1nv6RQ7kliLDLp50y2Qb426NkincFf4kl5HCXXLerSFCcn-y9smVvU9IkaPgd?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7kckvjvf28und7d41cq654dnc4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6s9JLcWx-_JIzW9wLGc7eU9gm-VeqXGDU93aRVuau4gEuBXQvl8Y5USf-Hfa1fymHHe56Zy6ujVEhCOe9SmsZPiuuzLwLn_l_J-JP360RvNay_ruxfzS3rmHvJkllbGsp7XUZgWeFV3VvRFEX9rNCLZwzG7FS8epXo9CelapmvqAlr7q1GLBEkcEloLaW6pHlU?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Plusieurs tables de pique-nique, dont certaines avec un toit, amplement d'espaces pour y monter une tente (ou plusieurs), jolie randonnée en forêt et en tourbière.<br>Site visité le 17 juin 2020<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8v0vt8sqdkmd4pkjn2s6vb3oa4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet48zCjPfXeEFtxZy77MzMn8Onwj-l2Bc7xI7tonDZiKEtdwb8RlI_LE2xyPOkXUfiy3_1Hwi4aaeK1BYJZYmJExIEr9WUhRTOKSsSxeRVm7FmnC5QrubjkhGp1Oi-kmDmUgOQVd4NWwDj8A3iG2eFrPkSt9ABuU05L4BBfPtP9KuAj7oBGYtyu29JzPh0gqihAd?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/15kosodvt201amkk9kmsaqu7q8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7RXEEaDQLl8bIVDgczd3qqyHGp8cZ4eY1V2xxrPP7ogUN6sa45wCjCcVw9qoHqlTCMePj0Su6iUQh81Hj3V1iF7EbMo3Hf2e0WJdzr91Ki8CGhl073XKuhLFwpxg-lx4vYuGV1kQiuszK9wY3H10-FT90HqOSX8tkS7-JgD1QsoucqA-CmZ0TO52wOXla8xRnC?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/l56r8rh1iiomo0vqshisfbn6eg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5FAkQrnS8t6vpbnFZVfvx3jc5n4TRD4ko7p0xwhaebmI2L2tyVoKggS6nl5sQff2LOKS_K15oAph7ECSQI21l2JNt57cg3UgGCwlQo7XXbM_7t8osWQoY1zRR1Nqh3PqhC87CyrCVZBbhvDhJFaDW9pjzjtHYtU5mADgNj_XgSVeFGugfns65z_zZ-lOgOrq6L?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Jolie halte municipale dans le village perché de St-Théophile; Beaux arbres matures, beaucoup de verdure, tables de pique-nique, gazebo couvert en cas de pluie.  Petit marché d'alimentation tout près.<br>Site visité lors de notre passage le 14 juin 2020<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/u19huqrsqe08nhmt25j1impfo0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4gfcAcprhF-FmiTZF7V28mUGmchp-gJxRqEdQZzy47OiVnNhqwEWGkO-NKngekXgoyywzZp3uTcMPjOUzbMkyJr-zlJhMugKWNzhFUWX__F6AurUsFKN9_sZxlNSrrSHz2LruBT8CvyjQVInNL9gbx9T9x8XT-FTTloCGw4YOM0yqIsQ2L4QqdmDBM1wlB1xD5?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/dkn8bp4sk668cgaf7kvaajtgtk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet74oHuHwQm_XXa8Jm0HeDR9hFFmpN_NKlEaYpoFQANpu-KPLBuYQEbeg-BlRCzy_LJoZbK0SR6Bfo6qoPaGaOX4PW0svO1yKcALdV0rWpia3tWhTSpI7aTvHcP1WzoRS-MUcNS0j8_pdE6NZU3FcPnZ4o6Ak4NPlxcCMkUXdChFwWq9Ft8X9Tpz7bcHyaOoHJv0?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/4uksuc3sf3d1136der82qucqe4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6Ogq2cCtGLyqtSWlt1rFQDd7xDm7YSJyDEAFep8RgB1zMQrvk9eT-87an-gj889jZPHNuvSI1XNIhdcKxl2JjrXSjRMO522B17f0vZwEQoFWaoC1OGSeKG4O77_vMZHzonsqHIe5uB1z9cu2m45PuFK02_7SVNkwYx2i2jCTOGugSSQb5eF0Djk1sSxumbzqby?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>juste derrière le Musée du Squelette, un petit sentier vous amène sur les berges de l'ile face au continent. Le lieu est identifié Parc du Portage et semble \"publique\".  2 tables de pique-nique, toilette sèche, terrain plat en verdure, arbres matures autour, vue sur le fleuve. Un beau spot sur Isle Verte.<br>Eau potable au village, 4 km plus loin.<br>Nous y avons campé avec bonheur le 21 juin 2020.<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/nlasavfs41m0s838do0le24njk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5mmufhYRGtTetrosV4qbD4012Y1JoHh3-3fib2XB1Kgz_-nPd_zhWLNXT9wf3gD90Hmva4msftP7xRFm518ehw1NEq-gYpNrjLCm3MqyKndXgZzMoYl8sVK4SQDC9vOEwuS4dTayx0V0JMvjhfZvBiPI2MRV8A_ulikYsx7R1vCLggfSzidWfRVnda1S-XOqS_?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6ul3fkp3dbdm4ubucajmdfvt2g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6k8kXCQHTRwe92saWZlB7nxjTVBiEHJbbhaV301SuDESHrNqu_WsL_jLLKjuEepneMh6Wux4aF4s9LltXiR6t4gy-rDaZg308Z8hp1iaw6K_nQJYzA7rdOjEAcPIDw-8tDVIzB-y77dknbegvxXWPwhd5FSMJonY27Jb72aBTE9NR8tVsF0JQ3L3tvybz1LIYt?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/jb38ou2khu2vvo9aa77hnjm75o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4-SzB0tXNm4DJ9RgtfOISmNsEPFgFCdQGOWUbbtFGWYqd5kKD8bzViiMulzGXY3mqCr7wRYUyoKSfBSGIeB-qfudoLPiDOAdbkcZ9GhFeEJeNYnglF46YGlW-H4YFF0GcBCFO88BDpC6WLVWodmNJeZU0xF0Nw0xe5HreNqtYhJpjbLEicv4majcmkvNXkD0zC?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/aqbtmessuvoq8in5s5gdap0rh4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7f0H6epHxlmtZdGlF4Z6rayK-pL-khkbuW7p9fpzIifZmKzle9vbwyxMGhbpOFcXgzD60tnyJ9DjYhEMXh53il19m7cE7iw1KY6KGvfR3HoK-w7gy76vDrHfEk7hsfOaKy9vxbF6i4qFaLJ4lbnt8tY-K0KDH1I-wAhuu6siD4jt8nk6IPGQyYTeq6gW2bh722?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qirgqtf512m249l9ci436j7p3s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4fYl5AWczNgPgxVCYlA0nH9MbMNzYVq2lrgAfkK_pn4nu-TKZLrdQaqxoaqF6um1VIffYx3yQEAqpIvRamOrBe0cFtHOX0KOm3bA3ArFTHEDORCO-0NtOjXiP1jJYKyikN7relRplxigcVf00lrPZu-a7eDt6RLDf3MJjCfVf6HrcwhuxlpH21CvO9pUi3o4OJ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Grand terrain en verdure, plusieurs tables de pique-nique, toilette publique, eau courante, wifi ouvert.<br><br>Préférable d'obtenir une permission officieuse (ou \"spéciale\") auprès du maire, si le bureau municipal est ouvert.<br><br>Site visité les 20 et 21 juin 2020, mais nous avions précédemment repéré le Parc du Portage, face au fleuve et plus discret.<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ehi6u50nqoaf79b302c3fhul88/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4j3k5pg40OLDbFeWfuQngqekXfv9wk54qLCtiVKf7G8nGlAw-c25GAhaLZ9xp8A17nbCqAupjiHwOQtwijxHNr3PkLptGYfXwp2RUJ3Zbqo8xSgKoXzwwxlJOPCoSIdzSgFf1qw5C8misAWccBmhNl5wPp74IIc_tmg6NY4rCHdE0V4A2JmkycGaVBpDCiF320?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Le Phare est le principal site touristique de l'ile, et pourra être assez fréquenté durant la journée. Il faut donc venir vous y installer qu'en début de soirée, et quitter tôt en matinée.<br>Quelques tables de pique-nique, superbe vue face au fleuve.  Pas d'eau potable, , toilettes pas accessibles quand nous avons visité le site le 21 juin.<br>Quelques maisons servaient de gites aux touristes jusqu'à tout récemment, mais ne sont pas disponibles en 2020.  Il n'y a donc personne à qui demander la permission, contrairement aux étés précédents<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rh7ql78u3etma9pb7fc56aq958/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7esI7JAOcYmIWWBiLYtjsrxY2M0-mIwR98Dp1_A01vbvWO_4eFl5VaBe4nIlafU4aOj-HcYiNGSCrYpdL7VBayqs2e3VREGBU-UKxajaMiOJneR0ZCB99-QvBJxYc9tTNyDThnK-mDq2NKq58AeMLsDjGRN2hFMhxiQ0F5gGGKBcsWa7TEsuoHXb8Dwto3WqVF?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/n427pm3niuueb7pmc2ojcnkpd0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5C52g15ksAY-zajYIreiKpRz5WHGNxktVquUjLnID403I5uyXjBNDDxJOr9N2xOe0_YDn6tHxCD4QqYKgWtkz72kQF2dgmts5klOYi0-WfLbItCl7xBfvEVOpGDt0pizwMzw-xh48vd6kGmckSt6NYCvavcIv0JdUWAJ2DBmvKhqOtQWi-wW4pQ8WyXIdToBa_?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/r6n7chabju96tc4sqfgobjeqs4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet71dnHTe7H3zb08j4kg5hvhw7PfHKJpRp9xIPSt376CZa82-x0NwvzRvKRGBTLMjtCLWIqQqYv0279qY9ye_Kh9AmenqVVghbbBj0ND2C4wdBhjkGSNZWX0NSUtIT4qFTCd-OyqcZUyyOUp5BMMJC2LB5AA8N57i3EfN8EvVEengNHjJdx6R9-3vBzzUwBF5R3L?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/9ec070memahn5i8g1hrqu8eo40/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7NlMb51RyGOZXe2j7G2fikkjTMcO0Ym7tT_TZoFgpghbeK7OfTk49TCKiTqwb2458i6LbR-7QIQkQstyXjvCvHmc74_9qmfrXxg26ogkk0CEe-1k_bki3YKp6bpBx2af3PPCHFezbKymklr8xbttshH6TDbdR64YEkVWL2xfny344sP6gNr_sj-lz3F6pWQ32L?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Dans le secteur Hauterive, en retrait de la route 138 et de la piste cyclable,  un site magnifique sur la rive est de la Rivière Manicouagan, près de son embouchure avec le fleuve St-Laurent.<br>Le site est assez fréquenté par les locaux, qui viennent pêcher au bout des rochers ou voir le coucher de soleil, et le stationnement est sans doute bruyant les soirs de week-end.  Mais juste magnifique pour camper!<br><br>Nous y avons campé avec bonheur le 30 juin 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/4k3q4h5euup80elvalo8fflkdg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6jXkTtjREcSuFcDCMyT4rMjDBMtlNVUFiorITAZ8A1gZDSttyIgTM2hVZxH8z11JiDTHkN9z5qQ2hL83Wbx6hWxaoKFcsJeimUBVuYH-WhBDKO27NM6lk5pnfwh_5HWt2OlnV3e2CBlKekn_Ch0oJzssG9Emr_OcCWXOL_DO_gmMOKydRlySSubJ2-pdnTArSJ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gimon098ijmlg1mm3jshi50em4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5TJIg_Oo2pN8cFBjtDQz376a-gnHbIXb86dXvZr0DRu1G2ZhGUaTA3D4pP4FvX4dZmMGb8a_lSBDfba9hyspicsDUN6O2rv73Croc28__2jP5Zoz2m1uMCP-oibqkdv6oCYorbi8MuaGhfBxMf_6rUJNNyGmwMN-z5Ws1csd8ukXIAZLx1uZ58Gvv9Ga38nuM7?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/m02mt4urnc7td2hnb1irfc2od0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4XIdDR2xytuj4-jxZlug3bpjZxw-XYbIJtacerJgtbtsJaBU8CHNrRSq_97ek7iruOWGnqNSaiZ2Ewsc5ctO8tc5qXhVivOR0BjJK4-TunhBQ-NWbDLYRhs2AqxR7a0fPiguJuG8Prepv1hEwsQM-m8mRhidSIWJ8snuxGzW9deF8SoJ9azvcLbOIeyUp5_p45?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Très beau site, directement sur le fleuve, avec verdure, tables de pique-nique.  <br>Toilettes et eau courante sur le site.  Aussi possible de recharger les appareils au bâtiment des toilettes. <br>Nous avons visité le site 2 juillet 2020, et nous campé  à notre retour de la Côte-Nord l2 21 juillet.<br><br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ic5p2sls88fu3ueupbu5pv0a8k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7Bz9nifMttLAIAtKtzd7yj-bTS_ziMLo6xwT0GpPxjbqgfj39yCXVaUsXRSp85P284cro36q8o-JwH08yyhppvSpREtQDKiC6Ykr0sKrHVLAtYPqTo-1jJK9hxqhiCnnMvZuWKSXmCI37sn74eJx-ua6o8j4WWNVMcpoq3y2EAi3CuwtfqtmqIEZY0GEWUti3l?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/emuiaqb4kemd9v162mhmq61vh8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet63nC62WQ4GW84rGfyBj7O2r30DsZn9Y-LApdwD87D6BhInziPTl1F0s5oAuPt7VTmqmx6_XbBk0sv6bu7yHU7JIOU5jnXtVDZBQCSpfi_JxA8tb21YQR2Kr3AG5Qs6E5oT6dCPnK3b_lnbvfxQSzIa8nZnD6Gb67wyOYX3K4EogQo97b1CkS_jDXg525OUsf3D?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/91a7m24hqaf8ofrt60b5lk89fo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5v_kvZUX5aMvlIUP_QvqEDQOzK1jO2y6lvvprZQTOD34G5_x9KuFqNUTYFyhtaUfZu4SsfQvD_AvKcLZqE2eaR4MXutaQAxwdBlwCdVptv0qeNeb6vhxkKxdm0IMfCDQyBA8RxY5tixK9znf_A_9Ir_mzSkES-f8u3-pu9kBm79gmnMOPQRZ_-owkWlYgVfPb4?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>en retrait du Chemin des Iles, tout au bout de l'Ile Patterson, nous avons trouvé ce site magnifique face au Golfe St-Laurent.  Belle verdure, tables de pique-nique, toilette sèche, pas d'eau.  Approvisionnement en eau: possible à  la Mairie juste en face (de l'autre coté de la baie, environs 1.5 km !)<br>Site visité à vélo le 3 juillet 2020; De retour le 20 juillet, nous y avons campé avec bonheur!<br>C'était tranquille le 3 juillet, mais plusieurs winnibagos parqués autour le 20 juillet.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6dih35ecc6dn3gvencnj135tq4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet67t_zBjFsOCHuYBmp-wCoik0IHe0fkTJ2GrCxgFSEKGNWyYGCALdgsEy6x4hORtqzso1MGNw1qzvAzRs4ZwQA1lRoRhu9bNjG8ur5U5OXKSZ6ztH114L2j3o4D16SZLWLnO9iDrDfWz9Bdkz4FMM9B-ljJQz8uR2x9Bw2-GPRxpe9E46dEshgvHhRgMDG7oEH1?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/slat5uqppd7u297o6ueilbce0k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5IDTB4URYwHPzeo6RdlXB_ifevaLg_Kk_aYIVmI8EeiCp9KdtdsvfOHMIrZTDZbAEUsXayxM3qeCXACBLFbPX2SFSNAtGZCLyj2pFcU7C5vXFfc7PKUZVBIhVxMPDyUQxK8bBZfI16hP7bm4m1a5TETtSlta2TR9GETjEztC8zocoUVM-Oj21fCgSD5mhLvCRt?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/4do67ip4nmbdj15h20fmjif68c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5Cixm4MvsD9WS4HvRQQ99MHT1lThH2P1JC-G1fkJYuI9zJuwazFCWZWbmaY6Dr_noVmW30ptvi7b1B39tdnYphvnCrFZcv70kgvjUmcZE2HqGis5jTB6pMeqObOItRLAUS8EnHltmYTg32n1jTykTWN0H-0ZuNT6feoTql0-8-jAZwSPLpt8jchTKXo3VDXy9J?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/cc7afubqkr7gvfr74h9uersj9c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7N3YYKjdHJxgSldTLTdw7jEnEYdMtjQLP3Ge-Rw1AzGYnZx65WrJUCJvBlaJdcZF5wU7BlMvH3pxdUhpc4rP2xq4bJEFwspnjmS_P0XR0PniMaUyi8BuvPnAvo49QBvtVcSiwSur3sWKFEqn40Sb_J8iu-LyOpYygJP0VzgbReA9UH0JbumBML58YZIYbSOHE_?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte municipale et site d'observation des marais salants.<br>Bel endroit isolé, à l'embouchure des marais et du Golfe St-Laurent.  Quelques tables de pique-nique, toilette sèches, gazebo semi-abrité en cas de pluie.  Possible de camper sur l'herbe en retrait du stationnement, ou sur le sable et la plage face au fleuve.  Un site magnifique!<br>Visité le 3 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/0v8mgnjm2roevke1d4po7ovi5k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4S_yuD8OUeIpROIMtuKIy4R6wHES5pgPJeT4igs1Bd53-500I-DRArPac35MIU6pKXKoT-EsIccTG7eb6o3Ix_Mfo3iELV4CMrwgZKOuqZ56QjeWUzMOTocQzNlvQVK5m29lIbm-09qy5yVEfhjM8cvPGeT3XTxH41wDoHb1JeItMo7WveWeXpDrbg0XInSAbK?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/eegffcrlfav7pr6ki54fql21tg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6r_mo4xYQS5ZxkFoac41iWf-3BuhDbARi2Lj4Vp9_EFBAdKt19C0gih-5pgOL2EmtSYuLd-14pP4o9OHVUB1FqK8SrYkrURGChmZEKF6585izsdLWjAQvQnx2CcuQ_tUGqZijsaZnT-RKKix2IBxsqr4L8tNNJq6YGzj5CTp1x9Bhqh6gmcDslAqVoEOre1wqd?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lnq9jo4t05c4ie4cdmp7btgihc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4WNImLrPd2zylR3XFJXWva7Y0GWCvOuLNpw68g_bXtGobfybsLQahuyhy2KHCszNLXh2vS1g5ANlKvDwu9RaN9Mc1nDNVoYIX43DpkT2tpwzHLrJvbXufOCf-QjxVNbB06f_h17dd8he4GXr7aRb6iUw513n0PXOZRiRqFHY98B6etGi1tQ4IJWuo-B-Dn7t_N?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/m3djbi1g5onnf5sevpp50ogri8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5wUUQTArVIFBj_OzDyuL8ul8RBWR4h3xXssxURDOlTH_Y6OfU8n1WhG224Ww0z2NTbQ4rTOM4KSMpuPd_4pV_lB1MozPGAbfu6SBQD2aCoqRFUC0REw1-kToli0Apc5x0c9ACFczovB8Q7J2IOW9FVArKcDUzRB466JHGY82YA7Gx9Ex6g1w1_o8puPXsBTcXh?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ocqjj6d72e0d4ujfhcsdt5cvu0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6JbSwz9Eh651sxMpN4LJSqgVm9n7fsZvQgZemi31GECmhvPSy6wrMk5fTujQdJhc4PcKBaccrF5aEXIVQ11F3PE0BjZ57EmhgPN0XdLD0u4v7-sVJouZE1a4peQn8WvADVroxaIXNBqlKG2lSMWxPosj26JyzweqqCv9yxV_lvVr8edP1hw7g7gCRtqFR5-dwF?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Beau site en forêt, adjacent à la Baie de Sept-Iles. Avec tables de pique-nique, tour d'observation, toilette sèche, pas d'eau.  <br>Accessible à vélo seulement, par une jolie piste cyclable au milieu d'une forêt dense.<br>Site visité le 3 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6sdm15agk8hpcu25rlf5ceh0jk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet53qMuWc3q1syBqV-jeNVQbfVkDELlNnPR0fbCUFcmyxDISCq1Ee4Y1iNpjaiHedh-tkUvqxUzPXF7RLd4GZou_4iMQg1LgQIZsT8cqRBtkeHLH3Be3Fpout7iWUhtzl-C69mwYWKwpjSP_V3T57XY-HlUz1yU1OhW3_l-7g4u52f-icy54UDEA_Rv9AzGgzowT?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vtf8k21kmnb082uhcoh6dar89k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7G1MP684sdQLCgHc5KvrKnTTNSum8HZUlKY-TWP3TJwj7sx5EHb9LX0aSdJoMqcdTmN9pBMLpeobmVeooCHfkZVAFS_-6MntEbotO9UZhF55V-VrN9tgbf_q8qK9elFH0tW8PpCFiPD07t2FZz__1UAovIQRpZ0hifPtaqhPKWkpunKwfFUdBMuzxcQj71RMBt?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/f8g5f73b3v0mo4q16je5c6uf6g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7-Ef3WEm_zcSzAt-ot2ls2RqLGuUJRSJR0_fZWs62TfBFId-0uv0Qxd_05FU_WvVVXte8yEfFzfPHal2rvEgB2-N3hkq_oOh6D99ulUyw96EF_ErHrORSnzWbFa-lsk1xjkmSJ5UkB6lMzJOIPTeI0BC_wU0iBdNnoRrrfzS87VTHpfnAyPdA6JdrLuUJmIbs9?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lp9q0qjf95mq64d04vjolc6ee4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4yHxxeK4Ot3-L7haQ7fQfRwB-85LCvUomIMx3yBVyB9yag59ZBycPMmuowqs5K-aUsgoPJqd9K9ULlHlRex5vzfje9C7DzVP8LIk4QUPGo7f4zo1COwPWRDhKpBDfRkKjIn2ZjJF5fiGhl_3kJdzUDrOit6u6NXLoLt1sJOMrJ4IRM-n8IwfWDWo60SWWntQFA?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Toilettes puliques avec eau courante. Possibilité de camper sur la plage.  Pas de table de pique-nique, aucun service.<br>Très jolie piste cyclable pour s'y rendre depuis Sept-Iles<br>Site visité le 6 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ti57ldqd95s555egjf7h3u387s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet646_0tiSXvCa4qfxBoCFWrYmOaSInZz5sRsnWcatftDoC4ZDwabYXISAWCQBCTITJyaGxEKw7NpR-IGpemkJXclJbq2vWQ-d6HD1b1BX8Cc207wLwWqIwnY5cVmQOz-q9WqIpJvyeyEF_LKEixL19KUweJ0yfXHV2qXyj04nl3rEUNy6ecQ2vtyR367pdjlDIW?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ejl0e1jjnqlufmfe1pr08ekisk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4s-VgYHS8IiXEZi5RXoidWkkiKqDnAtmNY1XXJ3vicZCJB4F44kZXJtiiVC-aY2sl4s5oX8gwGvOMDD6gixNvFOO67YeqQ9g0FE6x056I87-L5j1uCIwajrI6zleBejbf8w91AXyZlxcqPKkQlV2D_0fQGecPhdZRyF-zofOrGYCkMb32Sdq8vgCAXpEKBydwA?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Beau site surplombant la mer coté sud et la rivière coté nord, juste avant le village de Sheldrake.  Sur une petit sentier  en haut de la route 138.<br>Avec table de pique-nique ; pas de toilette, pas d'eau.  Aucune ombre. Un beau bivouac tranquille, avec magnifique point de vue.<br>Site visité lors de notre passage le 7 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/m5dp7tt1nfmmojp2s8fqkqbfvc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5JpIDYhqDERBgLB7FhciCw3U7akgWIhc9ifdZ4uDkT_nqBl6s4kYvqHPjzvHFSQ9wFUDRANd3sgistaRgDqfRn97Hp3rxZSMWpmU76WJM8p9i6uLaMQaDJIhbnUgfL2iWRshZ4Iru6_j0_LCHqjPBvS3cQ4UYH_NxB1AxY9jxnN1cts5ZY5mSXumphdqAboS17?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/9ejk0481qos132r9sesrmuv4f0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4zKYayKRHkbv4NCt3tLXgyrezf_ODYmosdaLeZwohzWyxvEYdK_Y2Cl2je__DWTxGoxsYIA1Tx4u55YlE_pvRpkmDhX3Hau79lnGzcjnHbysh5lYsrZOu-HmxvyAH0JdoO1NAUr4V7oY89CWB4g_eHNI4zGGZwYGR4UX2j9XWaEbuVEeCiZaPDFw5WhxHFzAPB?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/dpcvrtdp1f0e3gaq53ebfg4pik/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6Ch62PHo7P0M2-iKEUOhIF3Qu_uqc2OJJtAO3ZDRHD3sSnBdmmwo9R37RYoVW1VF2pWbDi6Y_aMMZgKYGwB0yj6G0VHL1kW0CF0Yhoea71ld6gEDFGR2ka_JhBfrydLBGgwTplZEX_19CK_-FHl-JE8o0NmkD4DNWkNR3bIEgDhHF2t3UyJGw86fSoPHr-hfi8?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7lkungblfnp75883plo6c7vktk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet622ZK973VLxEc6OJnV69SKFEgHy_8iORcNPP16BiulwToWb8tVua85YSEBu9ftGK0Po5TAWT--pVA9r67dq4CGcpsQJZxhsdStUNGeSUW9-4z64QVrqwJk9QI37Mx7ga-7-ZMLTYRp-tPyW88tp4O-F-fTRkchOYMMHr2lce1VWVHTIeSRnI9efIbD6tiNFCpM?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>En retrait de la route 138 face au Golfe St-Laurent, vis-à-vis l'Anse du Ouest, une halte municipale  avec tables de pique-nique et suffisamment de verdure pour plusieurs tentes. Belle vue sur la mer.<br>Pas d'eau, pas de service.<br>Site visité lors de notre passage à vélo le 7 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPIonMaritimes2020<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ihkq58nkf93hqeccdlog8pn7bc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4LjFzssksOF1d_2gxp6AR224G2jmQCHBZqRFW3sIcVBnNNZfKbvRfP9W7HnrnVqvWacaCrBtL-HLFPuWuPB8LOIIyv8fWla0LJYy4Mv2jUOVRzIN8y1vg0HpBuHUtgZyyOrhs0P-vmiJh4_mGcXr8NLYDAUVb26IrsrXNMB5cLXcKuV3ddMhPoLn32mhFOhY_Z?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fsn7q8798c4trj0jisu0j4kpb0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4ORadXS-4jkinDkryC_R0Q-Kp4PIn24YLBakpleVw89gTVxJ7-lOwEt1AjLHq4veNAUekavNi21p77Nw9OU8w80DfhkhkY3mb-8Q6Owc8-W7T3pGWsdy7CWpRa78_FlSQhr5jbFjXWT4Nl60K3B_5Guglh0kCgF-gJYt4jjLNJ4SbR2ldtdKbz_ocWrlQk4yXs?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Aucune interdiction affichée. Sentier large menant à quelques bons emplacements près de la rivière. J'ai choisi le plus éloigné, entouré de jolis arbres avec un accès à la rivière. 1,5 km du stationnement, où il y a une toilette sèche, des tables et un petit abri. Campé là en juillet 2020, croisé seulement un couple de randonneurs. Aucun problème.<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5ukt65srnjrhd24h86o638gq4c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6_ojN0-MG0qtgljnaMpzExDvEGFJlKKjZ9VOoZIFi5vV8FQK-h2I7SeVP_Sf2qA4PlGf9xtZqSdJ8i5ki3kZ4bYHiYU8EYpXlyG4qd2rswPuW_aj5YJFlPxM0QQ3Xnkf9lg04Xi5Lt2bHvBe4KErTk8M8rErDYyfUs8SIe5LKJZzLxwnacbwhWbMwPJWgOjkMg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/trrle5bc6p3tvk4d2ckrd4a9eg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4pV3XpdDMeAvWr2Sh9nb8VP0qOWbnfJOUTCkzWUgr2n4VyWotqJCoEEr6c61H9Iz_1ZZauHafsV4GK3W8GeNpKqTSEBrZEUhkUguFCaJM8HbxFjXfPxExI7LlNCae0O9QOsRA_e6w4n9NBDfVRlWV1-S2cUXvkyaEsOztXVU_x3XV5AB6bOQXqxm2XyJ_h0Bvs?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/34hoej6ddhls59f5u6c6lil9m8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet73P9s6RsYjIQPZx5tQa2OSCQJmJSOnOaq8n8kYd9kDOx-_nxsgfqHmKkZ_QojvQa-YEjIdScmru6WBR5GTRcq2UbTXM0o7X4dHQja8qslxQKo7F3dw5_9PtKLkXB16AhhQuG6_YpSiGTNO0phazMf621K9YCdgSW66O-CbNfbNypoIjtzQmhtDru3s4YDR6ChF?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sur le bord de la piste. Toilette compost et accès au canal, ainsi que plusieurs tables sous abris. Techniquement interdit, sauf pour les bateaux accostés au quai. Passé une nuit là en juillet 2020. Il y avait 3 bateaux de familles qui ont passé la nuit aussi. Nuit plutôt tranquille. D'autres micro-haltes entre le pont de la R201 et l'extrémité ouest sont plus discrets, mais sans toilettes.<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fmej66b0ss1imgda194emqlado/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet71RGXo-czdDsw7tB5ZQQJ7cW8yct-MTIGUYpxx98s2QPZNZhcGmZrkLY7cvFTPQz7QNeUEqQlY8yGTZgA0x6M933Ota-HDdng4YirHE_B18iCSiW1eFGPAvIuuPsp47Awomm5d3GGMSisURN5N194VNWUX7W3Xs0HeMmIghSC4v1bSI0yScut6-KAcZuM25dUR?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/sbvbfi777subn4sus9plpdb2fc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5OCtA00TvP4EZkS23TFLBjvidErr61N5_2zdh6PmFR7j3WLHZifSdI6iTAXS7Rws9MqGcWrJjltkiR_3VHCFJt1VWB5XW0xOA2t9Y59pRlzZaNUsSd08XdTuJgiebk0z80ij8MhAzlb69JEv7u6IiXgL_B-KipT9kE786lz31Unfr9Er4CNgqkKc1xk2TtaauD?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Fabuleux site de bivouac reféré par les locaux!<br>Pour s'y rendre, quitter Rivière au Tonnerre vers l'est par la rue du Vieux Quai.  Quand cette rue finit en cul de sac, suivre le sentier herbacé qui continue le long des plages à travers champs.<br>Quand vous serez vis-à-vis la tour de communication (elle sera sur votre gauche près de la 138, en hauteur), vous verrez une petite anse sablonneuse sur votre droite.  Vous pouvez y monter votre tente, ou encore monter sur le cap pour une vue plus aérienne. <br>Pas d'eau, pas de table, pas de service, mais site splendide!<br>Nous avons visité ce site le 9 juillet 2020. <br>Pamela et Nicolas, un jeune couple de<br>Drummondville y avait passé la nuit, venu en auto.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/hgn3qleuvj56rq74jmv2f84h5o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4fX3Y-Ir1ZoP9qxFYO3_Y8utO5L2NvoISgKvdMk5cSYc6C8D8-4jy_FaoQQoUMra8V5l1_jCbFobumhU3PPSd7L-4Ez9uFnQOHY7m28-qKHlCUPev2mFdeCNUff0BV8ZghCVE7R0VmuNs9K-MxJcCZR64gJPmsslD45RWXE6dSo0HLADzgAkqG5GZm7vq2cqWy?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lfis3j9nqu0199mdn372c8okjo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6QVMnGHijdU6K3DPRTgGw7YWgAnXykElu5I42612WUlK2hxNjfs_qvTKFc9HaPunc59LI2zJQ4_gC2o5-0Rm9RC2F67IQW_wqOchn0Vpc47407YOiA4nt2rsHudS-voObpxrB4pvKAjlmoSMyPCZq_I9tEZe6iadOA-uHLCdlcxuSFqS5OgmXasszTh_tp8QMr?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/hgbisaj567snbkljbe2povf82o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4Ph-Z-O04_lSOuOho6u8EAPZCzdi1QtwQGb37coBjxhrhiXNp6eCIwDnDVkAzpTzNN7sYr_OtmsAsCDTZtgWBD220IEd3LT-nw-qsxlp5uPVq4KvYNIHTEn9uITtsvgtFzJsWtu6kF3sDWqPqWMviEUQbeyM056EtuV35Yrxbm1Fj5UggCqLD6jf0szR-9kk_U?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rlt307d9474a1p1u81hvi8nbjk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7XV8SlYKVVx088yXTR22lf1VIiCUTkh-8bEML2Z9CbBqSSLmyxnay-UZ-YBY3C0hZaj7mUHZYLTmSKrhegC1J6qkJ_Kx-6amJ9zbGWzdOkzLhakTv6JMPyrBTa-1OEuXDPQ1SJaXO3UOWPzbJWtx4iuTxrATCG4bNDungxzcxVwKK5hVXk-fXOGsMdN9mteY4u?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lec7nq17rdnq4p0trfs7ar9208/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6vPf2I1VDNnVBy3za3hLrR1ZJAdCClMc9eZycasCjHExIteA_Xi1iB2HzmPR2sGO07dcVs6-SXXtLZ1pV3TofBPyU8CNlso9g-HOUYaBIDXFBcivRDJHdJmJVdg9wD_j1QYySSa5up1u2oZ5UZaoxUKDxrC0BmbUNOJeWicCmbkzgnNQtvOUfCFbz1R2l71mgz?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/speho9uhnqgt8mo1qlnr3uk9fc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6-NNjBLrX4wBG4buSXu4A-SwW4Oi_SJHgO-wmid9mOXC_nZ4x5VJ7UIg2OfB0Pq1HkeeM2BCLCGZAoN27KlDzFSNaZVdnFGcEP1qnnyd2cd7ntI7_pbyCafryTRVxxLkHh1tRdfpJyLbGhQgJJlxLvcu11twgzUTOf5sHhNlseEejMuY6kDMHqm1blVeQk6Bsy?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>A 6.5 km du centre de Havre St-Pierre sur la route 138 vers l'est, c'est une halte routière gazonnée surplombant le Golfe; Quelques tables de pique-nique, pas d'eau, verdure mais pas d'ombre.<br>Site visité lors de notre passage le 10  juillet 2020<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/s6g7e8tr1m1rkdfgajoj86ro3c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7c04Vi_4isthiUrB_7_31A4xLumAnzpf0hn5em-6oI6U-BX6wvw4TGU7Q8gM2U9W61_P26qi-jyK4udwVwNvpj9BHum5T5ONfDvFTegKH0aKUf5aPg5vn2QeBZ3uj8MvYpAbw4cuauNojH0Q9BPwwgf5Oxtu42e1DYu31ymVXNYTsT7ZRzonzLyswBFxeX8VDF?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qfjr2uk17qols5s3g88pqoonhk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4KCkWXxOLUesd_RR3vdrudonY-r7J1XYCu0_P0LYcNgNU05ExbQIgoc-H15elbM1rInszJvNNmd5yAqn42z2TGGzixcXc6Iic9U4TEOPyJqADRmOV4GOxW0IpFlfmIjkFaDrgiIAepXFVLtjSlMuFSqTcYeLzP39JofFcRin7fKEX304FTBmlNU-ENRIiHliw6?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Accessible par la route 138 via un trottoir en bois (aussi possible de rouler sur les roches plates au fond de la rivière, par marée basse), c'est un beau parc municipal directement face à la mer.  <br>Pas d'herbe et pas de terre pour ancrer les piquets de tente (que des rochers plats), mais il y a un gazebo couvert assez grand pour y monter 2 petites tentes.  Quelques tables de pique-nique. Prise électrique dans le gazebo. Eau potable accessible à l'information touristique, à 100 mètres.<br>Site assez venteux, mais abrité en partie dans le gazebo.<br>Site visité lors de notre passage le 10 juillet 2020. Nous y avons campé à notre retour le 14 juillet.<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/oallj1mgujjvc2kr0e397ufd7s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7uBeMm88BdiDeRYgVx3QSzat5g3hIiueqWNuuNf4CHw83Mi7S8DGeGKPeq4weK4h5GrQzy_YhU_IEUNP0_nW0lWv7RuwJuAfFX0bQdJHOIhE5dW1VVcVoOh9e-viU312PA_p-9VcvY320LZaTjrq6ao_QFoZy71LGzyC-a685YqYfCDhDA30I9-tCeWX6_hHBJ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/krpnlpr03p4h4p6gknlgpljmq8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6VeBLoCfT-5Mxl2ufvjI1MBebv8KeVyyTdZ4jjEJSH--9Ve3Zn7mzG3fg5VjE5zdTgLwqPnz3dsHf-Kw2eJNkNbBAT2J4aQviRYrja1LPoRYqZB34CkpY-339D7yuAE2d8v7F6wh8mWRdU_UuUmUbvONJ5Iuf6dSa6uT3zbpe8-i2z9MSoWbxzW0qmXUubH1ye?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/p8l9fre809bt9clg79s759frh0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5gMdXqd5tYl75-WwsF1TxXND7-7RNdzNYUEOTUiwwQN3SHS99Efxt6lulHVP9a_NWOWEINL_NKRBAgTkrUhr85QfaLBZrEtuXzgvl4FEB26ywrLAUWRKzw5RLJp70DyJCvgb4o0LD82q0mx0KctNXngBvzjfK7DCXGjaIk9MYTr3zt1LHiUkylAEohc5eIdydN?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lmma37mdd4g01qjke0e1mdumcg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5bK9izYtHDm6lNagXGJCYdjtyrqlTrzIkfiNkUoE_j3KWz1uZ6Ma4IOzmY4YkkgxQ8icb-E0uUYA1zlZnVa-ujP_4BC217X6AJXVsXJpTdk1q5rUP9A3HcPbHIW5OXmf_4ovXaYsXWTg8yPQTormlqMHT9lY-xc3mXXesTkUO08y-lWrtQX2blKSpPAkuG7K7U?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lqstjvlqg6fh6rhf617sehponc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5GtQnElcURaKS_fjcDenAsCbc81oW7d0q_Zr0ZHVVGMp1eUlR40Z2Ms8HRYGXJeLWlmRqqryWqqJDzWK7j4RmHQYusUpY_Vee7IHZDS29TfUifz_vo_WSQX2Qe7c-OkCA4hXyN-DfNvO37E7bnthUKe6svcl12drDLs-uiCtwH_OwAjP1mvmz6uWfQHn2JurTT?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Directement sur la 138, quelques tables de pique-nique, terrain gazonné et plat mais pas d'ombre et pas d'eau.  Jolie plage en contrebas.  Tranquille, mais prévoir la présence des moustiques!<br>Site visité lors de notre passage le 10 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gdpp1v6oud4oquhh05s0il8fko/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7MbO3JdIXixyH-opgPL8B3nY1xsqysWoS4xS0FLPjYZ1abVo0BupZtmaL9lYKcE4mHRx_Ki_pAnWR64EhnZVbVa-PrQeD64Sk4F1U706RIypFRDuekfIwAks2C8ueAJZzT_tBOOrDqYix2hfcEIh1fyu-73xXk9rTkPAafyb6IYqIU1CigQ1nWFrNqC9ZcS1gl?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6163i48kia9bv0h0rsi9md8374/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7fDBPwgpXMXKRPmz9Hzti-2XQX6DwM7DR1XBilhQV9bLFBma0U0r8f5Rfix-H2f0tV-08IBaFiArJQ6JEgRLdZMxU4dDI52wHYMWvRlbo85sl2nuUx6M3MUCbbOGlFzfBReEyAm2k2LUTcBzc29zKVUetWLEeRxyBDiJ9DXmpHMU-n8S-nbefVma4HqBOBUxtg?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/9lu26g6h5nsv5gl0vd7faes3g0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4sBZ7IMjYvFEanaeEONHmY2pzV63yHk-FKf_yXjRbZqnm-U77yLbLEUxCemTuOXavk_yuDIi4qG4xuF6dMzSxkB8120EagLI78UFrruVTZ4coTwp7-1_D8dgiuBVYMKX6CCWEgesEucNwoXm8EfublTxSxvDWOZ5k9eZ5CHqx38vf8vLLdFZM6uICwWP3jgPYo?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Terrain plat face à l'embouchure de la Rivière Aguanish, à l'entrée du village.  Table de pique-nique, chaises longues.  Suffisamment d'espaces pour y monter 2 petites tentes, mais très près de la route 138, cependant très peu achalandée ici.<br>Site qui conviendra si vous êtes pressé de vous installer et qu'il est tard.  Autrement, de plus beaux sites pourront être repérés en face, de l'autre coté de la rivière.<br>Site visité lors de notre passage le 10 juillet 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/50e3mv3htjo97v3holfr8k5j1o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4VK5dJTOPcZLOVqUOPqmsTkmye3BsXIM4v831Hn1uLROUKUlptDiM__zRHC_b5bD4Zx6ZrduwWgOnXxHduzJmeI7Sv_W3RHVINUdsPFuk19IeiLVdX3HnxIMmJ1dt9okq_13pYLUNHT8BLEQXpH0cneznu8gFaskhDbcgm6EgvburlOhUhWLW8ROX6tJN0CbD_?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/avd72jpl8btfab817u4ik0iohs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet73iS5Ko0gl38Wo982NIrDvOUsDMZZGXgaFLbBSISF34Oyfrq2ode6mzYLQzBwKaXRjvsoQ1YugOuW6W4-A98_ZO3YZBMa_izDnbwdnHuoLS7cEMhf2s9X6eeaDbVA0o2vcIWHG61Lc8nMnVNskOOqoIl1ciR6bodw7tN6zlW4kKanOrodl1C6W4GjIRN2HbiHV?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/jbmkdha2gb1i6tma0oa03ttg40/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7iQBHZQXNr6ZQhx-ohxN00hpubgpY8Qh8c3DU06ZlRBT4C-dAGfRabrO-QEuIXLcQOwXcXNRIvRfnbe3ETF2u7Ef4RsyY1sNsMlsmVbsu980SoghH4AlJOod44m8MG8iZlyQArNR4dyTQMvj4S2kMfSNpgj_cIjwPFQi_BJa2K1FF4xSgv3HxrV1ciH36i9FrM?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Prendre à gauche à l'entrée du village de Kegaska et suivre le chemin puis le sentier jusqu'à ce qu'il descende sur la plage. <br>Vaste plage tout le long de la baie qui fait face au village, vue magnifique; Très agréable promenade sur les rochers qui longe le Golfe.  <br>Pas d'eau, pas de table, pas de service ...<br>Nous avons visité ce site lors de notre passsage le 13 juillet 2020, mais nous n'y avons pas campé<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>Caroline ajout septembre 2020 : c'est proche de la dompte du village, une habitante m'a recommandée de ne PAS y dormir, puisque loups et ours y sont attirés. Il y un endroit magnifique au bout du village.<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/2t4rbhe0h9j8tl9ntb466mntbg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet63Kyo1aOWZOhN1kWn1Tvx4E2r2eCDue54NIoaii_xU2-q2zkVFX0VnYNHGRG-kTuUGvFPdIMq2ea8TASs9byiivp3w2Xyi59Nnm1u06OCibxpthNvKGCSCOOxLL49znIBGxIoDlrbIEWIWS5P60IdP4Cf6Xq14i1pOstfWL5l83UgWrgZ5dOAncwlTxO6IM0L3?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/0gc65kp7jmjb93ukskpim1ea1k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6TbqPHX0Nt4BZ7yqL0OoZAKgKqHUKCpAw0j86EV_brgBLySf3T6A2D8ITKwg9GcSz8YKjeiO3oxu6CuTyp1DcUVgw6chVFpAcRD-qo9w8fL-Rf9W0gtPPoJt0RKv1naKU4fn4fx_UCjNWEpWafF-8GWWrW2b4JS5KeSOuQXAd_5qP7w6-BkxzdkeiWL88zDqgf?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/is6n56n8ql835fa6blk9ju3dnc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6ISEOSlXIVXQQX5ft6Gn-pF5nSyfXOokTux5rOltfSyx9kwaFcrkngJvhqTPnzLNRMWrPsLvlrE6D4k8mD3zKvhTgYZq5rHhQZDUYDTXxhbEKjbzVH4q7NTRTHTS4fvIH8ejFKSRsUtcP7X3Y-S9mzFwk_Fl3EN9rsD2t_OGMTMieBGxp465iaOi8PqM3xElnh?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/a4fd5i9cnboiiglf7nu5cv3pm4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6VNzRfyxkOH6JgCRWZCT9pmjreIwgwVV1o770q9Sh2lmvmGk2ZsEHglEUARQIgOSjhq99MXB_amsAcMJlX4qNToONXowirMy-J97YcrXFPc6t9LTS4qKGuzRzyiHbh4HMfsAlbUe5m4xU7sF67QFdl6KrzNbNauJ-i8AnsgGBzJetPTTyGuyEJKeCxD1FNO2BO?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>en bordure de la route 138.<br>Beau belvédère surplombant les iles, entre Aguanish et L'Ile-Michon. <br>Au delà du stationnement et du gazebo avec toit (possibilité de s'y abriter en cas de mauvais temps), un petit sentier de 50 mètres mène à un 2e point de vue, caché en retrait de la route.  Emplacement pour 2 petites tentes, à vélo seulement.  Table de pique-nique, mais pas d'eau et pas de toilette.<br>N.B.:  le premier belvédère adjacent à la route 138 est indiqué \"No camping\", et s'adresse aux autos et et aux winnibagos.  Celui en retrait  s'adresse aux cyclistes, et n'a aucune restriction affichée. Néanmoins, nous suggérons d'attendre la brunante pour monter votre tente, et de la défaire avant 8AM le lendemain.<br>Site visité les 11 et 14 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/a34sa71jgv4b7nnigf8fi5op9s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7pB1pWMIAhkTNI9dpIwoMP4-Ke3kNq3IMn_N7T_EB-g8IvvqlPFzsbvPlhXkQ33lUog5tLEtj9xeq7vmr0uDoQxzbYGTsNgc0QRL19ioYP9eXyhKKwTzIOohIz3s-W3j9NTW711KPm2i_uunnvGv-LaKd1yK-gTmGsBLIc5Uv2WlOXZYVyea-N3OfZl9m0aEfm?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/v135itih9269f9tig3icdma96g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5o5Oz-gm8OiOblLOpWiYZguKodPWMkL7sC_lQvYcrvOmzeupRbOh6kBvJ4Lh-AU7WK4cXDS7D_UotaZxYD7ajaXLOU00KLEE-a-m6lMnAwA6O8igPAi9XufrCnYoO486tORjhIo-dqRSUm5MMZqwAIKK_uFtmH0gf9pjkUHqeWoLYNGnbZwFma72KX4cWcnttU?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/f6dhfpjta504c6vjs63pnk0ee8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5ELwDTNvT8l0uCvB9tthvhKX9CJXjMTinYhbSjOP8GtIm6S4e6GkrchtojlqjQA62RsY_cSeQbAdc4PcJzNRRv71MfhoVjuV8UEUz-4GtrnIOx1HLEQkybic0yiUDzuaUS3IkQERLjEllru5qekaryPxvS_ck44r_GLWi97STGvEE7e0HXe9-tdDhc0ftscgYN?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Un de nos plus beaux bivouacs au Québec, tous voyages confondus!<br>Pour s'y rendre, en partant du village de Rivière St-Jean:<br>- en direction ouest, traverser le pont de la rivière St-Jean et monter la côte jusqu'au sommet.<br>- prendre à gauche sur une rue pavée, environs 300 mètres depuis la fin du pont.<br>- au T, environs 200 mètres de la route 138, tourner à droite et aller au bout (50 mètres?)<br>- A votre gauche, un petit chemin de gravier descend jusqu'au Golfe.  Environs 150 mètres.<br><br>C'est là que sont les spots pour camper; il y en a une dizaine, tout au long de la falaise qui surplombe la plage en contrebas.<br><br>Pas de table, pas de toilette, pas d'eau.<br>Pour l'eau, approvisionnement possible à la mairie au village; Robinet extérieur à l'arrière du bâtiment, près du parc pour enfants<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gpls4oi769lp911i3io6d7n0tg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5C0WuvdnYVxARtL88Ozs1UdC7JeDLHYP4spCZlbV7LC6IkFbQSPu4Z87fNBDRRMLVm5gu0weTSgQ2Bpc8SI6kQyVwfp3InZOHOZuOJrhY-VcwDVj6v779myFQVUvTb4yLn6rEwo4iJQ1wRWnZZlEu3WT0KZWBlKLX_tIQDh6dSf5n8rbwQdip2-jWBZbxAawkg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/bbun9rsenr35jhep82lp8em18s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet67GRLO-k2fAiAtuyDybhgGKukLXOIEvK-OhtmxFsca6n8x3jTixq9U9l9CASRv5AN63c1aF_O3WgLX_X0weCVA2f1Ipzit-GskAlkIo5ma_AAebCGGJM4MxCgL4r8SAJyT9ZJhlsFSXCTFbnT2HAhPuDBzON87HEpU5kz-p-zfvODzZOJb1jX_MRrBWbpL9KYQ?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/up8tuq5n77r5pc3jchp8kkm2cc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6xxk_B5kZDnS9V7lip_IzayokQu6E0oqYyJOQrH29fsjrFto-mOcEzEYyPU8Lv75-Y1PHrc1sWYlkv0TZtgQuuMLYz91d1o9GJyQ_bNxbrQrYrXr1s0EEqDxtEW5ly6CFY1ItrupP0zvZAjJ1OgqxAS_rmKPdyO9FeSNaq1UP4Bm5mEOHeI2sOJd6l76cQI-GR?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Terrain aménagé avec quelques tables de pique-nique, face à la rivière Pentecôte et aux iles. Officiellement fermé (pas de douche, pas d'eau courante, pas de toilettes), mais tolérance probable en choisissant un site discrêt sous les arbres.  Bel endroit, bucolique.<br>Site visité lors de notre passage le 21 juillet 2020.<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/hcjl5ip21l8etb62tqalbmilbg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5v0tIo5mRWSpaFUBvk8AjF_Yukor_SOwTztzwMhfX-Fgu_i0WrRrp6As43eo8dh9nCqpU4-YURYE7vyz-OsOCwrAghWKK_3oPA_Zkj_5k9QLxoFroOxR3zbQbOVUvPnPJOhqm7HxmflX0-uAWLXtuv4jJNqo0ey5q_J3owbkMYkIhwc0BVK5Xv0s7_n7n60YDO?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/cr7fsj56ii0gqmmehqlqn61elg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5CqNExWE8xyNWO9iTqV9a82vcRXIWPghprCXSXc6TGIbwXEJ478XXPNpFMPWTZskeUyBuwkWS4okojmGHKBtC0kIN038C2v2eOJByRdkTThbyTc4yegSR2EGLn-3wUmoRvFSHNZNeHjoaYu67vpn2lZqFwK2eq-Vv6pda0gugjU33StwCK6TiN9gajRDwk_qvx?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3vifqpccuio8l696s5b7g8uups/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4fhru3MUGx31m7OWZvxmNMzreUYDUcSHUj3uobNnmRzP6Kb18shSXq60EsgkqMWynC0_M_X1qO2vCJKWbs30f1pAbYWMgrJNibnYVdCfWZ7aMf5WGlPl0Exfk0nJIQrJZCQBcXgwMzH_3_hYsi1Yn8mvHmYwOiUQjjy2J2UpObWP7Qb8g8qVXTp2kJJ-8X1L0b?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1m7uuok3cq70tf9gq8memod2t8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7pff86n1Ac23Hu1X2pI6wivhR9j-MMS7_h4PiawT7Kgpg3r7EcDjbMR7hyK8vH74gh_I54BjqX-Whz8hzfKeQ25NTrSg6ehNDiE_81isYophBloX6cYePpuvLHbYfMcVMlUJ5DETBvn_etN_6w9nsL5YMGgdbqxyHHOtiH-CBwoXmWeN5xqNl-WN1GuzMuC0wC?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Joli parc au dessus d'une falaise surplombant le fleuve. Quelques tables de pique-nique, quelques arbres matures permettant de l'ombre, vue magnifique.  Pas d'eau,  pas de toilette (sera remise en place après le COVID).<br>Bain de glaise sur la plage en bas des escaliers, sur la droite.<br><br>N.B.:  La piste cyclable permet maintenant de relier Pointe Lebel à Pointe aux Outardes, et donc de faire le tour de la péninsule. La halte est sur ce trajet<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/iq5hpe1nuqs1dpjjhbgbldtue4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6P1ZuPSZBOjMIL6BsfkQUQ0wS4m24BAwjQUCOyzheH-hJLPN_MQRfs0msqv1uzXp1Q3JWckp7ylu1tYC0xpaIkrfJLTxS4bMr9czEqws8cqGTYfkUY-e0rWXih5EHwJzZKtaMljBPFljq16Md7hkR18POfdWy6naGZfXjIh61YDbxqZDHSk5VFJuUv7YKpWT3K?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/58us49sufratihqhocamsmcq6o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4r64oOv4bRGEAWOAhljCyCp1LMYQIefzuJINprUw-S4cqoe0Fja-mDZB2EG0Yi-90YirdHweBU3e7RiEHhqcx7CkewReWIaNppiSSSSqJ3C7INKJl6CNbJw6RFzaoB-ebgnb-x4ek9uteAintQKeWMIzcuz8iDy6xhuT0AwP5CjDq86zd_b9MJOTSPlE9SmIg-?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/73q3lbn0ssbu1btep4nnvfmd5s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5dOUpqdmMLwZb0pJDmIexLEmGTs0fyPObbSg0iZZKJQCX32YPoMiIV4wyjRbw8WDRQqgkdBdcAuLtPj0GZpZoVztVoR_4j13qA10FuU6UrmD4kRXU3vl2ByVVawSJWgyjssQLLr-AdEgC24K2qDQr_vSGpY1hDaAtq_vgDcugmH2qxIGd4nnN5EI6Kus5er3Da?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/tjd6tv3dsefp7hh2oc4ohqfhqs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5weZBIh91Mnoayedj-uzfVU5hFiKtdQm4tfzudGwus-IXNasvzNbjPrny8PYGksYKrNRG0F3xS9gEuqZ1OiFHJrSw6dSEGmNWmb6BdbYR_0F5a_JOBUyN0MdI912ralnOY2pQXd28pcusPL4-AD7RVyppLxGqy3Pi3ZPGgjlB4OKxzJ9ygwa3VmjpgDr8aAIPP?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>en bordure de la route 167; Avec toilettes publiques, eau chaude, prises électriques, tables de pique-nique; Un peu de verdure près du bâtiment;  Pas d'eau froide, mais nous en avons obtenu auprès des ambulancières, dans le bâtiment de l'autre coté du stationnement .<br><br>Aussi possible de monter la tente près du petit lac en contrebas, plus  tranquille et moins bruyant, et sans les lampadaires du stationnement.<br><br>Nous y avons campé avec bonheur le 15 août 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7bqbbg095b0scf111r566cvb14/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5xyX5BJS_zJW5KpRnezautw3GJbD47a95yzWR8ch_mLuLddv-R0DBksaXNaMI2B7fdDbK40y-tYEq9rC8HKGucOj1Yqba2Wpkyi19x51DNceAO_ny5n0_kFYB7RH1F9bQ4i8BQpZJtmBbaGPzx8Zr42fy3D-evsmOswDY8b6Qx0cC80sQmD84TGChOjyYjQBHg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/bobkdru6e520565pn6elttfb00/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet577yId8S99o2KDp-2wjtmd_kTdGxoOxFMDWUIsJmjWOJTGMdBPfROdcDi9fDSzjW4AQVHsHtuq6oImNbK93Z7tUkcrPeQkTz4OD3NkB4d7NTVaxOwEJSHBODVXzuhFRRqL3GolJYvdP_pfAH_GFOlna5t5BPmcfBcwcCFds4HIYtJ2QPO9hx1U4jfg0GczFdoG?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/92bliebmon841n9hm8bqala8vs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7z3nKE2xSDDwNOLBTRCWw8J8r9XngcqsHh1J7CwY0d0lDC_dBHNQ9Kldy17YffyW7zl-3svLj3SVYzk0ZAow-BHtfC3n4uP6FWGA4dscEAEdkcwFdsIPBos0VIpUb6otuZzFRLN5EsofOH7SUUmYNHkUhePovtY5qvF27wOGlW963OTVMVOYKakQbFsyXQpqGx?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/53rkem6m44dip06c9d9gr9sgh0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5BB5DyNQNkKcgwyIQMuPCS0yqsseoIuC7FASLMujofnGXyKWbjU8YymxWPr9sU7gXwTAIDZEAiyPoWIJWDV6ygWKSkuE_YheJHGlFjDdor5H_jpI9dOTNKuZq4dN5Yb7Ml17V4c-wyOLr26j3NWt0b9Tb7WR7Z9wHEzDwrx1Zep5CR5axl1Xkg6isZLQhLQmaY?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Situé entre Normandin et La Doré sur notre route vers Chibougamau, en bordure de la rivière Ashuapmushuan, un site enchanteur face aux rapides.  Avec tables de pique-nique, plusieurs beaux coins de verdure, et arbres matures procurant ombre et intimité.<br>Eau facilement accessible par la rivière. <br><br>Site visité le 15 août 2020, sur notre route vers Chibougamau<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/dbi42h2kpfs5pta987fs9nljp4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6tzDKPD8qxO9_Izn2V0SuMxUDtPiwqagWbN6ec5HjwX2EkgRjMnQNqnOe8ZH5EJr7nXSa0wlrls1bnK3y7lv-8Diz53GZ-B8XRlI1URN2ejpUsy9MMq3YxiP64ULX_XK2HRmRXYL0CUKP60CROJ1WjsftdHDcVN5rV48ks60d-QFuNxumN50B0-9Hxvmo2rNS1?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/esspgqkqq30pid0ik8rdvkrjdg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6J0CdTK6pN5BW_Js5KNOqavzG9HMVrQsMcpOPMlHfXj0jd6Mbyn6UsOROJ2-2CRvGZhxSgdBuOuyHD8YW3orqYxErpMXVYfFVSZsMeCoNRTE_KMCp4aTFAaXayfBBohnG-qtThbDgE316vks9XWShAmPPAMrP1xr0ofXr9gX0z6bI9wXzTRjvHJTKmhyqIUkY-?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/0lmcpvj7ac2ldp6aisf55nv5ts/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7OFXeuWNoS5LeMPp8aFMNuqkYPbfsCI_Tgu0v7ca17-QSroV5Bs9rRBAHRlhrw6Vq5nLj3D6VNj-km8hSLTWkb_ZaJPr_m-bce654EeXNYrE7mb-EoeLsfYYidcvLYtWAihYhkN7pcK-gV6zgogOYfFO-kY3ZQBFc7ZKukgclOp8YaYL984NUtAnXYibG93NYI?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/furfoa3a9o73jnd82a7bh3i7hs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7TmyEKipDTssw_jIQSPKUhxO1OGA4TJ0RGUHur06_331Dj2aw4OmIflgmiHG8Kwn7ys0duqYql-jHSUJIa-mY57U9g0Nb47AukNPnVQOPt-Ls4uQhOT4C1kpUpzcIkLSCcwwsBWjo5CiRabadwBOq7Ir0v405Tkg65RhFHyMazUxdnxyuv6lP1K1e6Sw35xgX5?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1970tkipadtev96vq85t3tled0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6doL5uulJXqGi0qYJwOOBm9NgOkZlYvPs_OpwVqefy8fbDSIH0ArJBHmieBePQ7HiCvq4afj0wnH14usBLskWr5uRi5DgxjSkwMubzo1_0IhB4i7e3S2inFcVrStUkmGSlPGY0QWAddlxXe4yFyVjYDHkBmeHQFMkj-JTW3X956DXeSiSb3lw7BvtKsqU6SwVG?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>A Alma, dans ce parc municipal surplombant la Rivière Petite Décharge.<br>Tables de pique-nique, mais ni eau ni électricité.  Quelques passants, jusqu'à tard en soirée, et tôt en matinée.<br>Assez joli.<br>Nous y avons campé avec bonheur le 8 août 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br>Situé en plein cœur du centre-ville d’Alma, le Parc Falaise propose un sentier de randonnée pédestre de 2 kilomètres en nature. Le sentier permet de découvrir plusieurs sculptures monumentales qui furent créées lors des symposiums internationaux de 1965 et 1966 tenus à Alma. Profitez d’une promenade en soirée pour admirer la passerelle du 150e illuminée qui traverse les rapides de la rivière Petite Décharge.<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ftndt48qkdj3q3n7qmpq7tt0io/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5eb2cW8u5E8FYk58Alr37x_hgBBpS4V55095s88KeHBGOMQDg_ACKhgtUOQB5apakKfJ8GC4DWkHeMgczD2hp8LrjCpW9moQ6bvKmucx6ZxZAkWNo8sQ3ZOgM_abzZOsOkLD1NnLPbOPV27kH_swiXDKCw_hdGukg-wghgRnq8jF51D3ovj9_fMMpzwu1Xykn0?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/f65c50q8n6oas6jvfm1f464mbo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6pb4-rzb2SKsynN2hPAV1F28d9IQeMkYLkHZ79omHf2qrPNbnG-ZHP4xEDR5G6x113adE-RQHfJaVIDZdwzrUf8oUols_ctTkeJU8khJe3Am67lWGpxrUulRHuusiU-I7BTosseVO476q1Eg7bdPKnr2_nKFLEffYFIrN3yNORVJCzmqMQM0WSdkCWtfKmZ4lk?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/crsieps7fj3a9h471hde7qls58/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4ul5JvA9PFuORw19MlekQpxvzNKqQ1Xx171pDUBadjm8gA4bqrQc2nUgk_gHbyAkqHIIcI_xTK4YUTRa3cZ6xiCyE3nPMstQ1TzeOvev31hx7LlZX2tYjcat5bd00WcVXo8UePInm_PceayZNCWKwOeEw5iAKJgFn6Wc0hDgTbOimV28VOA5fS0ipi5L2aLlIO?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/hncfnnrn9gprdpsrvhlis92qpg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5w4SvXgZhia6DKR8pbliyIHlY3KDj4LJjkKIwS3Xsd1rBfHIctzDdUrMk_ufL-P1TS17rnM70ePSDCKyPCklKRNQOc--p-cr___NMFrs339zEWdxfPpslrkVvu9f2JpCrX3YD37_vTH4-hiy4h37C2TkhNg7Sb7LuMMJfoEu507juS5jFvA4v7OESmuJaPQ9hg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Joli parc, avez gazebo couvert et tables de pique-nique,  directement sur la rive sud du Lac St-Jean près de Desbiens.<br>Aussi répertorié sur iOverlander, ce site est aussi fréquenté par les campeurs motorisés, mais néanmoins tranquille.  Les policiers sont venus en soirée, sans intervention, anlors que notre tente était déjà montée.<br>Avons filtré l'eau du Lac pour notre consommation. Pas d'électricité ni toilette, ni eau courante.<br>Nous y avons campé avec bonheur le 6 août 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/2t674if0ajg7lpmauhv7ep6kj4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7D7TfIj0Aa533A_M071EFLcMzvLdZEpKrREyfHNiTiG7nNhPVaUSZzLEgLWaKDc5zTcqP-bGu1Lm8ZJfn_bJkBsb9EfjuwrLwWmOOvS4EpMyFO_wVyIkP1b376XamUvs-leXHF99hf7C6SuzOHT_00D72d8DzJvloezf9_jXxCBtLmVM_TThmQazwJX3rynChC?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/b3imvme5fvgroh96k408qvdh60/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6OiTLAsFAWpuOG_3h8P7TKuf2KZhdF6UMPXPsFhVbkuh5n4rkJBXcMKLXoqXoubVV5shOD9_JLGBu9AXMh0NOH-SnP6Qj_GOuVPRgyA2-26GghoYrzY5ASVursc2HVhxpndeu5CLRVquVNjEuty3N1vbCCxBVdlFbPauEVcNcoP5k5ynblHZyFxcbfmWEbx-TG?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Parc municipal, Village les Escoumins, aux coins des rues Labrie et .Beaulieu.  Très beau, directement face au fleuve sur la Baie St-Onge.  Table de pique-nique sur le site, toilettes publiques et eau courante à 300 mètres au centre du village.<br><br>Nous y avons campé avec bonheur le 31 juillet 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/s1nvvabt43kmg3qc7r2to28fm8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4DbfZfgcrcZGuToK0X11auCRvTmFKHUZZA57FNZ3gq2PkQcPvXy3c77lDh5V_X2d9oPXM48CJtzj3RcjC5L8ZfM-8dsDPskzn8lCQsBb1h9uh9grZnfYvtTgUJA69JAFtI0uhCk6vnAcwHzek_l6Althd6SjgFLfRDkVgnzYFhpIQON4ise99iKyo_ziBiKpf7?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ue72sapa97maoca1s2g9b5v7no/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet58EWwfDXXjEk0_BE7_gfFibefxY4H9xM3-8JYXZEnC8nD-Z7I3XQ2n9pM2beanPcNrH91XyBNv2D3DFZBSu-5dmH7w6NNm5vJ3TJMRmhmi230TPDky1T1h4Z4ZQtu9yLO0F82Wb984e7CXo27KIRpAsc06nir84gBRF9J1NJoIERY0xnN5vZ93TBF3vb32hXaz?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/trk2rppfk1v5v1i6r5b0m66kb0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6Ob-to33PuLGLtdDdNSnhOYIvYmZMz-08xluBw1u2W7tjAdr9XBIfsRmji78GH6ipbCZTIKqU8wer2HGgQrFr1fkIxPctCkSbEsECgp5a66TrxtqZv9KERxbfxyszkToV-ITEW_zkr_Zm8pmV54VSByR46AmzI6qNrC8iTF5QFC6pDBwtE7a1ZTq8tEZiG2EY3?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5tqh6hi6gegtl7rjbuu7a5js6g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7qkXOjTqWYLSU_T8i9G2WUQWaGxzw2jCm70loBHoQpZf_9OMPaZSVXB89e4R2AE6zMg1Lce_D2teJJdpu7ZcvzOdoYy-gJt_8tPPrhoCCTqvMWNl3JTFIaFFvXjlw4qZ7fonCfnVXvX_BEgdcZDfUT2dA2601x-JLAoKp76t1EQlSUf_FnbnzGE8PLOf1SyU2j?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte municipale dans le village de Portneuf-sur-mer, en face des battures et du Fleuve St-Laurent.<br>Incluant un gazebo couvert, table de pique-nique et verdure pour y monter la tente.  Joli.<br>Site visité lors de notre passage à vélo le 31 juillet 2020.<br><br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/jigics6l17t4fh9tnhh3qoea5o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet49fHffiog0RQYguVVpZFqp-djlMnkAjk3tRX9xF2PCREbOHPWBdJgMK1ZZ9BG5zhiNzD-x_1VV7-ByAaGzoAZgpGHv6LIw2xe5TFuWE2u6xx9hTURHRGwaajtP9_tUHN_yA7o9Tm6rRsRYlab8lQDUjETTfDZ06oUdcVBbHcIcE5cSz0aRKWLX2ZYcTiNBVF3P?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/n542anntg454hl0utdqk2ipaj0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7dfSdd_q_sgGZ173d3lVRHGhfp15_T5O5rJFekY51ujslsEEKNVw67gAZGLxYpKGMkPExdsCu_jF3Xh3xe4Cil4Lygh2LroxCAAVvgPqVdZS_AHCCwGyKqUT1XpAHtHc_29xuRPkrD9ZYeearhhsqqtF321yjaTRV7Ig8K_xMHc0LiXdhyPu0BAASjH9g91CCZ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/dlk6f23qjve8d4lctg6tsqjmes/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4CEs4ybogf8SqDpcgMRQe5rm4pbJyGwd5eEhMJankf_TlZmxf_VhPDOx_aUIFMT60VXxrBiFZb_qiC70BdL0sdsQ0KTFk5718hvJrLq83n-ArlBmgvw6pu8Z-2_Qxd3MrFafqneI5OJjG-yyi_bYf0Nq-ke2oNSFx2afo0tXh2oSeJsYJ-_b7N54OmJSrJTqED?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6sooes7122jjh0p224rq7o52ts/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5MUR9AieRKbK7s3loz12YWDR6AU_gaL6mQoSNBr9Ri1ivbh8jk0acPyIMpS9azrxSNagJJQ9xw6Gbz7p7AgKalqpA6ILLBI_0IvUies1vMeVHn9AYosjhFrTxvPzxupKarpAsWzNU6fldafbDOr8dFUMz-kxsy_7Jq62SsyfkcSEfr6rv-YP-L9_bWQ9HGOsgL?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>à 200 mètres en retrait du  sentier cyclable du Parc Régional des Grandes Rivières du Lac St-Jean,  face à la Rivière Mistassini, un abri couvert avec tables de pique-nique, et suffisamment d'espace pour y monter 2-3 tentes.<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/50l0saueqhmtcn52vn7craab3s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5I8MZLKKJ1KT_lkIjNGVr7NYSvIPtOTs8gH6GCiyKyZQKpWLtWO0TrOwRx91e7zHxClJOTxrVfZGvo__97D7B2yrNxTFDzzA20gGs-9NF8CcIWvim6UoAnPe3lNHTKyx662mOaYi4VxXtqW0tI3hQOIKEqsLkcs7_CaHYwuXvni2I3lSA_2HKtdeBulbX7JxuD?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/i60jurmhfku7bpsdsb74kubnr8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5bzvs2Tp80AkWcbH-86BPMt695ZFOxZgpNiGZHajHOXMh631g5Fr5fAL2BeHSBLHJQrwtJ1g62gCNh-yt5sVIj8UnxjruUqPtfQkuET0d6rc3Jip1joC22o5VAMtfINKRKw_F-q65QA3b030oI58H8sQ_itnUOI6yyTKF_bjKdAy3jrXytjaWT9JlAV1xig0_N?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/536ujd3uqh4thnvo5b72t4ium4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5P7T-zLcyZwyDgq6wlnrHi_zp4lP1n2KW-_vxT9fzTHf2md-B1GLGD5qubou8tzZMI4v_Wbe6nvrBt0Z76vbig1vuKataZ6MOwp_jNR9jM2tO9iN_7xuJtWDdv3xbF6qkeSvrg3t03-sviJK-SZ-WVw7s5AsCX4P6B8jh5CStkmd9Dy8ExRKDA0fM81qo80oqz?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Camping sur la plage. Entrée juste après le pont de la rivière du Calument sur la droite (direction Est).<br><br>Plusieurs espaces sous-bois, ou sur la plage. Un chemin de 4 roues sur la gauche permet d'accéder à d'autres options.<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ikjj9ti27e3ecog2nnacah1jc4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4xWpmQzHdK66EDf-dJyQLafal-yi63YpAoCnD2FGN1ecivG3w-EhwQLSKMQRu9Z5Q_l8xQ6jYcF0UsmEGnIMdJpJt2rh2IClNNY2Wi2L52Vy-XIfn2F2n--BdsPhKS8HtZcECForWfuLn96qapQYdMGNHhEATZsVJ60oQgAzJ8TRQWefoJvNVDFoey3fnNNwWR?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gjvu96p9ll5103jsbrej5rcva4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5RrsXLwz38McohTKV2BFGqo6OJqFbUaaqQ4GrfS6wEKSuH_tP0y6-PW_wcT0ghBziuZIRbcZMG1qkk16HlEd0zJZ0KaJsQuQ0QssZkRjHKRX0xi0u9UsWtlQKBOA4p3VSs2FPBU7Jy0xzrGZ5dV7Y3a70wgFtH2STPmsFBgl3HuyXXC8h_xGcyZQBPQjqqOa7l?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée.  Coup de coeur assuré!  Le tour du lac à vélo est de toute beauté.  Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/0g2a6s5k354d8aqvv5ag5limqg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6dPfwQ8RCwVDWKeCUhqCzIsYdb1JV6rna1bIFH3Yir0vMu7b4QquLPUgr7e2bf6LTViqBBlY2AH18qdLC2Odka56Uf2OSWEuiNcfMrWMO2ZpAKuA7S0Vyczk2RFiqlEVTy994XMGo66pW-85dr0nO0SGD0sW879xt30A5WQyFcuhJqZvCcwN5XwvTg5jsZa9fk?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8gnel5j0fpakmtnbhd8l31cdj4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet61fRs5aHFlgIbOOeyxq1M7mEBWjJRAESN8xCxdVfmfrISqyEPRD1E7N_P4yrAZNnoonlS2WRZJpAtg0s0QS6DmGPm_0XMrhQRZXqdlO_Pg8rtrTK6JNz755ABQzvOL21icZyxaLFHhg1IiuPtk3v4AuwElWGAo2MzxYxt8aLR32nNHz8UVyav6BtfXQamvYtxo?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/o1a2gsi9nsjivobjhnptgbjrfk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4SeAPyzmQ3O5K--8gyidmD2DxhPv15za7W1LkK8g95xEmC17V1BULQmVYjvwXGbbUYJNfqySW0J82N40kTvIEiLuivHzGJwGA-RtxcbO6K3YLaiwxkmjcekxKcxUapzpApzw1Dhmtk0QoTDjkbDx9tHON4IwdaRC6xy2p9lwrN8ll9nw8PkDpSeCJcOXuBfC2D?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Prendre à droite dans le chemin de gravelle 200m avant la rivière Aguanish. Une grande prairie donnant sur une plage de sable avec plein d'endroits pour camper. Paix magistrale et brûme sur la rivière le matin si vous vous levez assez tôt. Pas de services.<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/c4kfgea6e5eb30nb2ej7o1gfac/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7hqZWngop--f3kK8pfygP1GiALoutK2T4SFLieKm5OL8b2J_tImQ95dqdDm9S5qNrIp9b0jqwZgqSxTkU1GiX8CiZCnBh92qDLnjNPAXajCxPJuv0erCHU63byD1CODXqySsxlcC5fxYGPs69Gi0PRp81Ya9vAC71amE3zwU1wMBmZIUfxbNjts9ff7nsWUAGZ?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qnff01hogh3rit9d7nujl4boh4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7gOTPBU3pq02GbbXzviKO_t6ry4VALJ-K6coRhYQ1HTfK2f-TtKtJh0VXTM3cwEwpJ-lb7nffT-Za6ssMoc3KUG8IqIdjQLm8WSuXNbG_y8stM_1b8mBeI8LOr00QxGBHp1eFFzK4viHt1IoV4rstMLyxwIeB0yBIDzdKcn0DpyLi3iY4_UmzwxvTf_jcUc_bY?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée. Coup de coeur assuré! Le tour du lac à vélo est de toute beauté. Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/prkk324rqj6eg3c6p6c10stt20/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5xTEUBFG3RMSjapkrH4xGK5ocjDAD0x-I3BwCSmchOxsBD8lALdXq2GSqLFxxXgDyLTGblFmtYNVCtg6vl7nY_6DIyQF3Ue2gLLPSzvS2iP6AFg-qmxCOpP3qVV_Q729guEr04DTkQeHVbR7TcG4PDnuGkFdhbbKBpvHiLJkqQfrNEJNeXZ0JwgA-fPzgM1ndG?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vh1p2r3mq4ser2921umdu6v99s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6vtOewGiTr70eAIUPZQGnp-dt0GB9OiPZclsXWkxP1K-CS4eaiiO5D6lUpVaGxJ20-SuCmqrkVQvI9LVOwity2lxJ01bDGK1qIw2jNg81yxmuQi7AdSOHlKwcx_7Lg9rp7xCgC6e2nKC-THg2i0dvr8JkRF0Zu-uiLUFpCqAAfCaXnw6QfdTH0QxbBH50jT5mG?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5baj7nfb9b5k2rt1j2s4unnl7c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5M6P9PIRm3lJ5EA3O0imOYvaS3CSh3un1qIo8kf__eeyqnV6lqNLt_C6qE99OrmvrGxROUArNvxVMhmjKwbcEzYqQh2RUjSgempEz3gIEYcQAo-KAMXVLOaxsaYbr2k6hmlvhGjn0aJXoB_7o0epDKmOwfimJBzCvImYxnCBluW1UAbuGVH2TKLh3sARDE4pzj?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Il vous faudra des pneus qui passent dans la gravelle pour atteindre ce bijou. Tournez vers la mer au km 1232. La plage au bout est dans la continuité de l'archipel de Mingan, avec des monolithes et un coucher de soleil spectaculaire, si vous n'avez pas le temps de prendre la croisière c'est une alternative solide.<br><br>Pas de services, mais il y a des maison pas loin.<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/sg8b57qpj6hdecouu46vam4r54/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4I_csTqx1-xVntZogt85mphSPbRpWQ5CaKiKinCI8Gg5ULVIeBa0sArSiRIfvm3LM4Lo5B4IvP_C34uPh9r4Yv8ULR6SBpVn3PdQK5nsSqAqQrdWKfzwcNdmbuf1jh7xYQNZjcJHeu-Q0HwdUV0fWG6sCiYHiG32leWiHjkMudPLNWMktZb2xUtQNX0M3fkPlq?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7n30ulkv6psvak196ondioocpk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6u-IFxNO0DB1ewABlbOIFfrLpbgQxAB4A_Qbz9lvvGee0HwXCkfVYTvGrkWtv923mMk7DykmHz7FTpSX83ITwWtf49nWM9nxlH0QuWNEt7BpFQE61XArajbhPEeyVkfsWcgy8eV6_SXnZhPLJqsXx2kYH-v4daljCfdOczWvi80rq0yjryL_b61ssZ3U1StMQe?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/4vh8cgnsipoapr0pjdms7fki38/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet64lBPV8Xkx3OLMs00sMe1vTifGqo-yXzeOlP0B_bU36Betfm-xlnIESoEKjFarz26M5Vgi5Tf59g2n-2lRbm2ghqGEnkZrq2bT9gbUGw1Xcej-1Op3qDO1xgzfQM-1O2Y5kkXyuiSHKYvxUNk7PijVhxbQKHRWXkCJxnlSKliqrSwYOYS9-7tZ4TaAafKcPROu?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/9f2f8ok088o0amegam4r1incmk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5vry5z57TqUEFe6JGlsirFWUIYATJVF8Xp0dQYxPwkrqeFejLO4sUwM2f7grZa005bhBy377Ygi8CZBU4_y1aauxMo_SDSpLoq78Inx70Z-CL_g-PZhG0wO3mS4O06dCQHZ-BtfoYyzSbU0GPMTV3IBnJSsto9nnDvbwU_FoTE-VCudJ0PpXaMo2zCjyf_KCXB?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée. Coup de coeur assuré! Le tour du lac à vélo est de toute beauté. Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/t24iau5r2dkhv48irite5rgdbc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4k6LAvrgO09KV8gZEC3swwSk2-PuK2LX3F-hyFOPf1doWxAt2dR-Ow--n0uUBmgPJRgTLuVMA9FDSiEmKkAaZ12v3C-MDenP5hx-m8_ICpQ4gZM_JXbvpt8jApiloUlmxd60qAftQTkwN0MS7qfK-2aZaTyVQR8sPO_AGkk2nZhG-6snzx8fk_zduWxzhmyCZQ?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/kg7n9f1oon6fo5f310hlqat3dg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4K7gzx8XVSnXEd7zu3OQGeT_96cOfAcDagpva_dmAE4nN-BSSiq_Kx69ldKqPdMOcnx_8thUVyJ81MsTVKP0doAbSEA5faMZoeRDuj4oG5mgqngn3a7mrZU0clV115GAk-wpltK1HHUgHfRrDTWLzhcjLT0j1v5jijrY-S1TQUUiopEg_HYSoY9Y7pz4ZEPpVY?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée. Coup de coeur assuré! Le tour du lac à vélo est de toute beauté. Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/d41k581r1v1vplrenpmbmqisp0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7wxHmapjJvSube3Y2KT0iDebDYrGmCswquqx5kZh_ptH381kRs1xMa4gLqDRwDcV8KuOTVK81PmMmQQy4ovxiFFopKHAlwErrAPhJUnBHKwWQWU67rJ5e-rv0k8atKC-18EWBfjxRfyz-1GFy0Rvc0MLSAW7eJqqZ6DzObWz6mFhO9OUanwfbdfA6VRhOgYHSq?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/h7s3md85q0m7fsts99vv5vb6lk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5eZ170RHEHYhJCNtugh8IUFg7GSNejwxT-Es_nGLQYDpYVGn-b3k5OyxpfzaAAuWbstbiH2SYuVcIsusBtHkot_PvZXo-ouHD4qB-F4smo50_Jwsem81ZjHFhmmNg-SSRJM7hIaYyZjczA9_NIpEC086NKoZaHBpNWGE4vkqgIsSWI7znBG4lLyCqilXbMt3NR?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Parc régional Obalski, à Chibougamau, autour du Lac Guilmain: une bonne dizaine de sites très beaux pour le camping sauvage: tranquille, sur le bord du lac, avec tables de pique-nique et et contenants d'acier contre les ours; Certains ont des toilettes sèches, d'autres avec gazebos couverts, ou même avec une cabane fermée. Coup de coeur assuré! Le tour du lac à vélo est de toute beauté. Grande abondance de bleuets!<br><br>Sites visités à vélo avec grand bonheur le 18 août 2020<br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qv9sqq1evies6su3i9e081te54/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7iMJgf-rrI-HoTnXjd68iaTjkEW8Ntdl4eQnVumQWqs8sZCCLLhpuIjNrAMAXLCDrsq_bZHrV2iBbF_-BALh2ZBzbEXXNlnGKL-d-hurIhLTbm-ZG9mrehrauJOrYSIEJtTgHvXSSIMIMJZLBpb8yOTcA8zosykQLmkUdy005foouSwGPdzJ-EV1mUvOv_WIqf?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/grqg5u2dma1kq4e0v7egt3t5a8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4CNA7Fjfhum_D7CLY7JM0sC5xTPtqSRGTwhDbkzph6QShe7HAMZdDQ5awK0l2Kd8xofbjsEc6oZ9wjp9yc5AzKgJWxVFUM6skaVBjZYiOzMflHHSurIB3n3ji3GMSlGc269v4qLfyHTHJIZNBgp-8oBBVnDQoTAiDkYxyqNp6JuUmKeTz3KSAVipAC1PT3ybtc?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/tmhjqnpp05jj1snukrmnjqmh9c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6WOUQdwss9sb9c8ailzOhlTYpz0GX4dneiDbivmQXc7OxTF9cfExMsRRasdZaU4y5kvAJCk2Ts7vQZYy0Qn8DpQO0y2L-m5eYX1svNNXDwYJa-MxMuclNhpehkT2PdBiGN0QEmtSQAe4hYvN93LtLDY2Ho04YNGnv-zxnKjUi9Ods7hUUb2MrKCf2-aYEJTYEk?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sur la route 386 en arrivant de Senneterre, petite halte municipale avec tables de pique-nique et espace vert pour y monter vos tentes.<br>Village à proximité immédiate (eau, dépanneur)<br>Site visité lors de notre voyage à vélo le 26 août 2020, en compagnie des 5 jeunes du Groupe Echo Explora<br>Normand Pion y Hélène Giguère<br>127 des Chênes, Ste-Anne des Lacs, Qc  J0R 1B0<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook:  https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/e81poncknmsrm1kulc809duqho/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet73CDThWoRYReH46GtGWqP8LEgbt0G9vwx7i9TTDMKAq2JMLhTCYkXIeGb3tmSevT0FvxNsC-5q5VyKp28ay9odgKA146bucC2xhjV5VeLY5kRtvTg2nm5JdreCwttwuhnJJ7nr-Z-JxslOAzSHTNwaYCM4WwAN_cUlPb_M5liIiSZoQOqxFKrlsDbHUHWQUBLU?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3dgvgj7df5l0f2g7o63a9qaods/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7fe0dP0gcsTUTnfBaoxRJcxt3IyObtqqPKLHzlOJQ6FomlNX-ZbbXz9oEvscRDYlvCKIcRcej1btkmUWbxCVd13XI20ivV4PQc0D7e528Cd99zwt6nO9kVarviYVRN6yUQWQ9l8GqsWgpamtoQ-9kEXseyb6du9aq6uMO6oqQaNKD6efrxCGdg38wf5PsH8dnT?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Il y a 2 spots permettant un bivouac potable sur la route 109, entre Malartic et Amos.<br>Le premier étant à la croisée de la route qui mène au village de La Motte, et le 2e étant quelques kilomètres plus loin au nord.<br><br>Les deux ont une table de pique-nique et de l'espace pour monter la tente.  Le premier nous a semblé plus joli et plus lumineux, mais n'a pas de toilette ni eau.<br>Le 2e est plus en forêt (mais à proximité de la route et facilement accessible), avec toilette sèche.  Propreté discutable lors de notre visite le 27 aout 2020.<br>Normand Pion y Hélène Giguère<br>127 des Chênes, Ste-Anne des Lacs, Qc  J0R 1B0<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook:  https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/bv0389hcqoqof8du31bae7pt98/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6jcrE3W_PfwqAbHbrrxUHdTgMNXeRbunBP3ikNp02z3l2bUTLEVO4bb9fiO48ph_D0gsAjYHXrd7_PAtqnSQtaEfFwcbZbWaBcTyERUmEOxLIVlXrZE7-VE3P2KNJT5nLT61xzJ8KaHxawT91KHNtdHrfgNCFB8vb9Y3d_uTkPQT_bqyBJ8z_6cR1XfrU7qUcj?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sur la très jolie piste cyclable à l'ouest de la ville de Amos, une halte aménagée en bordure d'un plan d'eau, mi-lac, mi-marécage; Avec table de pique-nique, espace vert permettant d'y monter votre tente, au coeur de la forêt boréale .<br>Site visité à vélo le 28 août 2020, guidés par nos hôtes à Amos André Plante et Andrée Naud<br>Normand Pion y Hélène Giguère<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook:  https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5471vah70r48m91o8m43a18v4o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4dbZynHriElkMqyctJmp5Ws-ZEzCP1DtM72lZ1RscS_xc-2vhoSYLB8XvG7py_20St6vjINF0irny84rqFa9VRqFstXeYMDe4gGjQtB0rP8SNJvsocGkWv9WhFVg9S3dkmJLtN72Njtf-Ke1F8GSfHZyxlRsXjwIyAic47a8jnvBhrlpQzYutshq-XQnoTHNyv?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/4radvode6n001j66kdlfo8d00o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet670Fm2jw0O-gJ35n7dMwDEGNcKzDVyI_K1z9lfNqtwqhxnnVHrblMl9v8Q4zamUv85AYaDW30lVGJ8Ot8KfbuP_kp6tthJBjDi7SZDLq4tasON0lxcfJSVhEo4q4KumkSr4Ak0Pyf--TcVCb4EIWdyS0VekW_RI_z6ZLYnqJwSuyKM-_P0DmK4kUzCqlWt9yMr?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/bqml4hld6k1p64ta98kal81gpk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7X_za1yni6ujOI3mDcfTQ19ZDhrxn5TcprPVSn7dfO7yTqZd3cl2M6-_QPSBjWpaDJoQqeDZsKW-zHysp611_ceNU3R2e9qWNT-QO9aUdwxhiNzHu8g_7Igg05Oli36_Z2mvkBzHwIoEZJC8DkIAUe4v7Us6TI7jmctcCDpOBiIE5wZptYGP0vZCDtSAUY9jU9?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7gbvsrclebc1r96kqkj0liegkc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet54yrmdLazhYBpJBzvsyuKXu0IOdV5V8M-lB7BSAKGRFKtrbtSw_uEylRg-ojRlCDD47Xtq3OdKoKhmpWamuHFlwdQdzLxBtNdr90YIPha_kYifLHKzPHBN-WP1eDmwDZKQcg4KLk85LtDqhFbV0WkLaLY1U72cj8ol8JWY_b8d9Z3zcGEor2w6esdBFdwteMpy?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sur la route 101 vers Macamic, juste après la sortie du village de Ste-Rose de Poularies, une halte municiplae en bordure de rivière, avec tables de pique-nique, toilettes publiques, verdure pour monter vos tentes et arbres matures. Joli site, visité le 30 aout 2020",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/cnlm98togp0g34ju1q458ccq38/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6FeEUcPcYOzvwMoAKQI5L16e39hcfvddc8DjgM1VcKWWnCMUoEhaZToaOF75TQoWL9d00R8I4Dab8g3P6avpWSzArMiSrUt--U1mn6WfYW8ol-M3uubXn-Naf5KEe4DeDhtv7eOkTRxlwekFBuRV19_BuMWI6brE0hN5JR0BhuVIhIPaB_SWWR0luYTBlCqFrD?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte routière en bordure du Lac Renault, à la croisée des routes 117 et 101<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours.<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 8 septembre  2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/r50l6u0b0ihukbcv40mo749gv8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7ip1uPCe5_t-_ntYAJWtaDW2oW57LdKlSgETMr-vCDxTW93rpBLMn7yTu-ZLl_jPMYSBCQDdH5E-X60hkUZokcHkQE6v8IcPOwAQuEOIKz3z-MZZ4QZC6AqRWhBLhf5cUy4uTyOKMgmVPvE7570oh5O99zDYedAdbrViigKjzY64zbxxQnvLuPz7yeDDoQipet?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/4jofjgv3schd78hubngpd1nf7k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5R59eXrzM2XxKkMTphuePJDdXhgzG_CGozeyPk86aj-Dzof00Qn8jIEE8JX5NvKrI9yYFFi8dKZ8JLdplcgl4QPOLhh5EKZ8miAeTR-l9zlK-sWsUeZgUBy-YqsazLBVI4mq5uNMqNI2MvucyqqM3RxnpJH18vIzX-1GUbznxOZibcaaj08azY1KIG0zGwzBhJ?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7ca0ig69al4m12hg8iqqn29eh0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5zOOM-5ViMZgFkwA-Q8pmmIUl1nDKPsT7Fkni2gnBuELAwCygnBHduxbZS7iSNTM41oBrv6-NLhChWPmqpXSzpOKiu3oSEjlrtY4NSovKePrY7qUnN3fQk7_urmQ1KvkSpXSD8txB0QWQoKg4gdnh1XsLH9sN3p5lzjYCqJFn9c-6OFsfThVRYWbDg4Wv8rH3m?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte Municipale en bordure de la Rivière des Outaouais sur la route 101 en sortant du village de Notre-Dame du Nord<br><br>Quelques tables de pique-nique ; terrain gazonné  sous les arbres<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 9 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/jjp0un3sd2a2vm9l3br7mog9fg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5DmqsBBP7xmKI7fQfxey1fVR-K10ayuFXxDggrkEYGsb0gFRhUr1q5eyo2NikXxMrFdpX5rcOD9qQMP5aU-PNf3QMpbLLeqXm_-YBTbg1kHOrKbz3VO9fDhd2mam0tEc_2HYv0coba9SKmrmA8el42qcbAFaz9HMBvpABH-K4sp1Eovt3EM-Vk32eZgQq-V7nw?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte routière en bordure de la route 101, entre les villages de Notre-Dame du Nord et St-Bruno de Guigues<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours.<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 9 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qlqkjck59u5f1qrd6oij1hjvms/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7Wkvvt5RGQWHdkYEK1FzcWqD825OyL8QVdZdT_N8yMbQPJuZG4_AzkNEXL2SaMGDzola9Z4jhMiTbDsR0sgNCbuVmOWN29gCmmwajHDu3sBtgSHbCzU5aIQCXwQn_RrNpOZTmYOQGUXaMYuNH5U9pdK7N-MIlCjzpB86TY_t0X20A-j433piXdh9THHeSIXkop?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Fort-Témiscamingue, lieu historique géré par Parcs Canada:<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain gazonné et nombreux arbres matures; Site magnifique et très intéressant à visiter!<br><br>Pas officiellement un camping de Parcs Canada, mais la Directrice Josée Latraverse est une ancienne cyclo-voyageuse avec quelques longs parcours, en Gaspésie et en Europe, et elle est particulièrement sympathique aux cyclistes lourdement chargés!  Vos chances sont bonnes, sauf peut-être en période de fort achalandage.<br><br><br>Nous avons visité ce site lors de notre passage à vélo le 10 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vkn2cpus1omi4oibkqs0pc8gko/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet78BnSpkiGmeOIrIl5hTWTGffE2v78CnTeLftGXk3cjmZ6y6KK78TaP9lxHGylfRCP_ohfsXifaa3NqsKqnsJ6OD5tEA9FfwnjjoG64mzFJyKNp3ijxhIwwEscMu2IyCm5D9DAYV2GxhmD6JMei9X6SqUbKbN6KZkNEGzrsnxI9zOLfmPrbrCgCGLbjwxTuKpTL?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5ct938ag9cikd7ipb81e1htmgg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6GDKNTagxIj13V3EsDcjHsMWHZZj0z6W5Bs6hPqmIoLQA_bLZ64qN8ZqZodytsend46kLYOjfeVlp6ukiN2pXIBs9xfMOLBh1CTNYoi-QOL-3oWhxvB7_UJ1u5ZbultXEq_rwcKr25ndfxe-_y8JO4kCaJkVtYu7zWpi6jWavh5xoL1oL6Jy6c0oUO7U-PHfRZ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte routière en bordure du Lac Kipawa  en retrait de la route 101<br><br>Quelques tables de pique-nique ; Toilettes publiques, eau courante. Gazebo couvert en cas de pluie.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours. (NB : en réalité, une partie du terrain appartient à un camping, et l'autre à la municipalité. Il semble y avoir un litige).<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 10 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/nc8tklphqr7hq27ia8sg694lsg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5Vk8muN1CXMy5xHLsb324Xtk9zomu1Y0u8Ct7IR6gGyAo-qr63bBs07XcgSkPqmTyVLh1WKLExDxYqKXZJO2jyChqkeKIovJ3BkD3Bvie9WMzXWB6J1meMze56Hud7cz8wLiP5-5U0zftYyeqYC0QDhzZtWkNbA1eEDaE9SuqZ-P890FUqvAMVQGgC7I87LhhY?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte routière Opémica,  en bordure de la route 101 (15 km au nord de la ville de Témiscaming)<br><br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante. Très grand terrain gazonné, nombreux arbres matures.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours.<br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 12 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/s2blc1ikcie98b79a0mdae118o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6JEaNc_6FMPH_v9GqrblUgSqwpuntPlAUOyg0fpGPqkobkRe6Aa6DHuJQ0RDIZEkzZKBuk8QESKW-8HIguqaNbeY9z9n9UfLHmyfuTJ-e0s9iJM_DGr3syWS6z3F8xIFLo4cx5ny0OyXkuIcmks15rI5SLqRPJXBxRqpifmR_lxQ8WDHRPKP-UUGRrptD937SW?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gtsuvqb6ipbuj8u53vt1auce10/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7trsPvr17-V3iTnjRMu08o3PfrPpT1MYoWpzIG-RXjI9wuSkfi0ldpbr-gsGz5v9wS7aZ7v1RLiu5H_RVIulcZtAV2r6p0RBUXl6F1eNGIdaTW5hStMTn98mcyKjx0AulhH_ROZHtnT2-EUJKdT5xLckSrUKNakkXjYqgnogR_Oet36qisCvHH0FHIrt6W-Iax?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Aire de pique-nique en bordure des chûtes et du Ruisseau Gordon.<br>01<br><br>Quelques tables de pique-nique ; Pas d'eau, pas de toilette, mais le village est tout près<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 12 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vrd64r5s10m45c8qtoqpgj9ui8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4D3ON468KRnRSmrcoi3Jjq14EaxYs2Xlmb6i4XYo-R3IecBab3AhjXYZbJvQ1MDr-pEP-3KbHbiT3bsnbSF4UWxSAyeXCoMytUVxQfx71rAmQhg30qnWJEgtJcQUjf9jLBEQTz99hl4ji-Fxwha-t3Q0xE0IejaupXVzb6ftWJjY_E3eNofzu3iW2vNpxajm2w?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte routière en bordure de la Highway 63, entre Témiscaming et North Bay<br>Plusieurs tables de pique-nique ; Toilettes publiques, eau courante.  grand terrain gazonné, quelques arbres matures.<br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 11 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fkfei1657vm8kldio4ren0irik/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5xCc6GyLgAJHeSnCuRaMMwqlqQOxoqm5Xzh86au_Uaq_-KR0XwT24BET_Iffst_KZ5Tk0usgdNrIFgoAJhWHq5u-eMDsrR9fiuMY3NKIBCfqdVIAjNAorSIPV8c78NCkoh_fk4bhQL1mULOO8YP5bl3_-pYJqw9I7fL2QOZj9XIEpdV3yHq2i-HgcF9W1CKRzD?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/tu988dmerv7ksrm8arumbsfk8c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5HG0smTP--vAKrHvWYw5-DEw0AnwrsUbaU_v9zZdPEsS8Un6NRT21tJ1oYdBUyXEOiDsiqTORjjETw-ujf-ZcwfyrSrSFVtvUIe0HSVsAbYaid32QxCz3egt_CEorEbx5k2Y-dNVANFi6t6o39YFqrIVyuvXFTmenQXnWvVNzTxBIWisrUCYKjELar835UpOTJ?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/e5hsr4u5dql9olar958fflgefg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7Kgm9tE4EP3F_7bnlyBXW4w4cpnB8mYqoBBqDXIbcCGBYwCqAVfBYUbTqF960IOwXbyzAV-rbE3A_taywRyNJ_GrRD0Fk_XS0KNpsmW6SURJXh_rssTK9jbG7H__ubTfCLCR-NmIROxh3MLPXD5iLQ0ZsjduLgFJGMNpXE-lE6R57owlTY1LX4dh4GNZzDgEYF?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte routière et aire de pique-nique surplombant le Lac Nipissing, en bordure de la TransCanadienne (Highway 17) entre North Bay et Sturgeon Falls<br><br><br><br>Quelques tables de pique-nique ; <br>Site bruyant (autoroute voisine)<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 12 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>514-668-9772<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8c5no6kkpo5ms7bqs6932oqp8g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6EStr7tqelKdpKldCN3-y9BiZxrkfv0JKl60_CPoscVO9KHNMj2WOGSfi60DOkhBYBiLs0Jpplefl7u1c3ZhhB9bixrv2vZZKjDYYuB5Z6ZztZfCvm6ABDRESjrIZ99yILF7tUKPsgqWWH2JMqMHobxBb9aPv30dTnx8NUb-0HFe81znvHSOcjOEQ5zZkVzB0q?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/07qcvptv10q4so41d4fo1qigpg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4URy81nTqPt_oe592OWgi30Rgr_13Z2lmyWYzRL4td4bjK-qFE7bWuHbGOShMRmVYrXPIadn4aCa4y0lTieo69WRF40ZOGc5prwJlT-78okVnfIgx0WZWPDGY9SAI9MLeGiUL1ZsMz8CoKlSkQSZ6soVHWxSjHDgZHFIElWfXTqolzbHVkF9rvTUTU6yHp16nf?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Quelques tables de pique-nique ; Pas de  Toilettes ni  eau courante, mais lac Nipissing à vos pieds. Beau terrain gazonné, arbres matures. Très beau site!<br><br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Nous avons visité ce site lors de notre passage à vélo le 12 septembre 2020, <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc<br>rikimiki@me.com<br><br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gqulv845kvp2q7abcc1aqdkkmc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7rY2DgGyD3Tm1HHKRlqn-WaPu2VGnhROytDAt8Xj6IWhGQBhozgNWNvy7hkAP0ljjWbndfYyLSGb0xGwICXxJnCixL1MNP8loCV0nydh2F4RhtV_n4lYM0IDeiMlUswDe_j_z0cFKHoQBmjvzBZ0q6DApAjDrGHXvfJoVDYOR7IE64BnQgRTOTe_7lryfJu8Ji?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/9hi2qtgb7rr23459c937cpa338/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet69XdltppaG4LnRFwQftq1ffepazwYHHgiR0cM25q2lfzt734_r40725QCU_BoixSz1hCx2O3eRuyaQH2rLQSrNNmlJR0Z2GKSf5njbZj4_JMtlalKCYwzwAuA6EkvlavrXqkhv0397rIoiYkd_ArxWe4ynw6-JmSLIm150Ut6aCnxdZDZKZO9u4gp_DvOIgsJJ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Entre l'église et le parc, adjacent à la Route Vrte #1, un joli parc municipal avec tables de pique-nique (avec toit), station de réparations vélo avec outils.  Pas vu de toilette ni eau courante, mais vous trouverez facilement dans le village.<br><br>Nous avons visité ce site lors de notre passage à vélo le 30 septembre  2020,<br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc J0R 1B0<br>514-668-9772<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7djbt85hj3dn7n9rp3u499g3dc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5V0iggnxLdAha8KYk0csewjlCndtPh5clDW5UMWG9vevnqZ-JjQmwcLUGBWtPs3qYCtTLBH0hU5ugMN1-K6ZiyLHUfwpsMwGs_STAvarGFLaSK24Bx68OvePY1qEibL-fd2e51S1GVp-Pj9ln6nmcawMEwx5pgFQ3wgxfA0mH2v1AsTZzMk0BTb69YMORfvLAE?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>en bordure du joli Golden Lake, sur le bord de la Highway 60,  cette halte comprend des tables de pique-nique abritées, du gazon très vaste face au lac pour y monter votre tente, des toilettes publiques.<br>Nous avons visité ce site lors de notre passage à vélo le 29 septembre 2020.<br><br>N.B.: Un panneau indicatif précise \"Camping défendu\". Nous sommes d'avis que la clientèle visée sont les gros campers qui voudraient s'installer ici pour plusieurs jours, notamment pour la pêche. <br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route.  <br>Normand Pion y Hélène Giguère<br> Ste-Anne des Lacs, Qc J0R 1B0<br><br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/eiodk3077soj9j9t3h3hvcji38/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5ME0gaqvc3fUIbCouYQjJ7-DAA0hn0cfx-va9YtMJ7McF8qX48H89ZWukPwYI4vvRnw446P-YuVQc3pQivG_mxznr0e7ZcFhPEyI0fC1Ypd9pSNRaS8c1_6oQ1bR2VgemjPh5C0k-MzphNDD6T8u3CtMx_tja2tYldSQfXAqX0P7xatkOjQnPxHi01Fj9gViZK?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Site magnifique et tranquille, en bordure de la piste cyclable et de la rivière, , cette halte comprend des tables de pique-nique abritées, du gazon très vaste pour y monter votre tente, des toilettes publiques (ouvertes de 7AM à 9PM)<br>Nous avons campé sur ce site lors de notre passage à vélo le 26 septembre 2020.<br><br>Nos conseils: vous installer ici pour souper et ne monter votre tente qu'en début de soirée, un peu avant la noirceur. Démonter la tente avant 8AM le lendemain; Pas d'urgence ensuite pour reprendre la route. <br>Normand Pion y Hélène Giguère<br>Ste-Anne des Lacs, Qc J0R 1B0<br><br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br>http://tandemetcie.com<br>sur Facebook: https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/86he8ckjt9tl630s1ct1vg84gk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4ruv1Pn1KJBE8vNk8Va0FQ1wxt066S6Nr1DTzrrIx9y5CB9hNkgnPYlgpVWNjZP-KIwCN2j54wCGZqwcdREb8-g4e23iGawkuyqrDxgZJYledXrKYGtX-AASdQ_mzpGWGqhy1rAF5QnutFXApV8ysR0tYaT7vd6wo9jHIeT6xt3k3ufkglstSCbFd4nkOh_C_J?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1dvn32lk9a6dq6kgpvs97aqpvs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4IAhaOSBc9cpsk8YXvnyOCNqNPdwa1n-76pPjRpQTJfazrlsa0fXCTdT8Y9_uy4sCMfMV0GwtuncpA863gQ6GU4dWIXZyPjEQaSlmPRlZnigoVFDZhf_AHzqsuaaz0zRLBHNdqvttWyAsBWAhXiEfC7XCUS61lAdmH-ijmeCl-l1XA_VOLUTgaX5oc6oHQ0TMg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>en bordure de la Route Verte #1, environs 8 km au sud-est de Fort-Coulonge, une jolie halte cycliste, avec tables de pique-nique, abri pour la pluie, toilette; Super tranquille!<br>Site visité lors de notre passage à vélo le 3 octobre 2020.<br>Hélène and Normand<br>Sainte-Anne des Lacs, Québec - Canada<br>rikimiki@me.com<br>tandemetcie.comhttps://www.crazyguyonabike.com/doc/?o=1ni&doc_id=15622&v=26l<br>+<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/hak6rv2u3e9ng60opoa3cbjp0s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6kAO21gDlUcyUDCIyMPihh_ocXGgTeJTthkREqXO0mczf0Q4URkzA-zoPIu_LMyDLk8uMufu75HOZzdEGU1l_de04V6tv_ikvmiD3DIZ5UUh1zPNRpvYYGzGcW4nL34iEy4WuVLlox51UCWPzhlzJvnLHurd_2It2jseBvNPogLrPBJi-S9DBL7tSiUC5vTgS9?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline : Endroit où même les VR peuvent camper gratuitement. Toilette chimique à côté de la plage, on peut trouver de l'eau dans les commerces ou chez des gens dans le village. Plus loin en descendant vers la plage, il y a possibilité de dormir sur la plage si les marées le permettent!",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/is7nc7j0ddah7p05del1i7dn7o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet47M-w9asKLkX0KoJGJXgOhMo22D0NijoXJKdoYkcBa0rDjnPqX09zlPfPrjdnrTHJpFZSp60QBNMDXP7mN79ijP6zRIoV2CK-u2PEFhIgJYkGRFIir9piQOFZuhXv3eptbaxZ30qgU9LqB3Jr6IOBTvYtS2yX6XDpGQFAFUZ81j4WHCi59W9lBAfwq7NMwJna0?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : halte routière avec tables de pique-nique, toilettes et eau potable de jour. Probablement possible de dormir là pour une nuit en vélo! Prenez le temps d'aller faire le sentier et de voir la chute et les vestiges de transport de pitounes!",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rgmr58djae3gfg37fskdlbntb4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6cJ5xoSzpHKfxwycPVdpczVspd_IngAEspb1Z2EU8tzdS9-MNTg5caMZc4cNS1_Fzg4glAo-2wkR9eT-7mDDeBp92cjTX3h8WXB7uMBfStdhG0wsadGGwmlJasy9Ku969b9_lbqn9gg3c3oJP6oMdelDAIx1U8RphEm9Fyd7tIpAD34_2nAOxfcvFqHLWeMJDd?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : il était écrit camping interdit à côté du stationnement de la halte, mais si vous êtes motivé.es à pousser votre vélo ou à traîner vos bagages, c'est probablement toléré pour les cyclo de dormir une nuit à la Pointe. Il y a même un gazebo pour la pluie! Sinon allez au moins vous y promener!",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/i3jsv5ddolkvn7ifg6m4hs2acs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5ED16Gl-vg-FyhsyS371Jq6Kj_qIgQ37nsDRe3tFEWxl4tpMxdmSl8_Dw_1VShdDH2gcEiFbQB5ZhSeEm-sopHb9UZeEqG0gkBgX8DbiRwx-dNjJ4h96LJBshg5z9gh1T1hqkUbZk5ufWlWQPGZwy_DRHtcuWBUqtpUPmkONmQBH-rFFfgMIQfCmJadhPJvcWR?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : Plateforme en bois en haut d'un cap rocheux, vue incroyable, endroit trouvé sur un site de hiking pour voir les baleines, mais peu connu des touristes. Aucun service. Pour y camper vous aurez un sentier de moins de 1 km dans le bois/la boue à faire pour vous y rendre. Je n'y ai pas dormi, mais j'ai passé deux heures là-bas sans croiser personne, sauf les habitant.es de Cap-Colombier sur le chemin principal.",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fgnuqsooust2mmatsp8tmdfjos/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7G5BQHiKc-Hv681USvu9v-HYN_akInA1cTAYbUmrA_NKfqNUeh4iZi4YFPn7p_FcTW5zzbV3vsBaXSwyegtxi-mUq02l1yGWlOFdol3xGQS3-xt-tyTB0-gP54W-SEvkCYXbhtTS-3QWIhmv7SlbDWWqtLI7PZabRPHS20DwOe8NTaEX50Q2d4GYbA2vejZAJt?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : tables à pique-nique et endroits pour mettre une tente sur le gazon (ne dormez pas sur la plage, la marée monte haut!). Pas de toilettes, pas d'eau. Beaucoup de VR cet été y étaient dans le stationnement plus haut, mais il n'y avait personne quand j'y étais en septembre. Il y a aussi des sentiers pédestres qui partent de là!",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/efubcq50gfc10n3ctqjavs3f40/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6nfTYY8bbpZkzT6LqQTaOFA6rNrrIngyz5qQZZBAmQSIzrO8baQYYG9TsA0DiuG6WPj777PRpIiTtv-Ys4D9UiLTQD-pZNcU3TdVidQePmqdnWJ_fyxSMNE9RZ-cP-iM3yS3AtC_gUH8YA9UaF2UoSY-zvbUkaDtCHKeuTZuXFDB6fcfRQhRS-6YJHYoyeHN8N?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : Endroit souvent mentionné où dormir sur la plage ou les ilets (entourés d'eau à marée haute). C'est par contre un endroit avec beaucoup d'érosion et les visiteurs sont invité.es à faire attention en marchant. Je n'y camperais pas. Il y a aussi un site de camping qui est un endroit de pèlerinage innu. J'ai préféré m'installer proche de la cantine, et le gérant m'a dit que j'étais la bienvenue à dormir à l'abri où il y avait les tables de pique-nique (pas sur les photos). Il fait une marche tous les soirs, peut-être vous pourrez le croiser et entendre parler de l'histoire du village! Toilettes et cantine fermées début septembre. J'ai mangé sur la plateforme d'observation, la vue  était magnifique.<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/aogos82kci2euuuocpmhpihkbk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5ga_IftUEq88gOcNBHHvPdFVVXuS7ixUNqSXc6BrM77jxDDiCrZtJM4HvIkJYdeKzEd7MjCU4G-CzX6fSeo-sAnKbqEB3gVrg9riz3MWIIEZxvrj4HhvD2YQFT5qB7bAPp1IKlb3YDiKWK-zIg0nppZpkexthJtLz-_XCGWAynfIbAyhsaR1Bh923M0QkCayS5?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8io5f19nj8qdvg81t5geaijku0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4w3_VgjWC-fAORWYbVvCX-dr7spsFFAxaZMljzYj8s_Y25QOxCNgKy_p1t6ru6eTP_lVHw-iStdJGmcmsy_vQYmVc26-AD9xrtF3IhSKJokCD394xGM2E17y-KUzD_Mlvd7wWElN-sifcU-64nMHb3mO3MRae5m-OOBWB0xFEuBKM44XMj536c9SVaAI8pyZi7?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : Piste cyclable magnifique perdue au milieu du bois. Il y a une grande table à pique-nique couverte où il est probablement possible d'y dormir à mi-chemin. Territoire de chasse et d'ours noirs! Sinon il y a une belle halte municipale plus loin, voir sur la carte :)",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/m7m7mssk6r0pga0m6peajscr60/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7oZ0V8kEDjVMsg6-waU8eIPKcQCWF91ohLzdaTMOvUxqnQOFv3LvIHP3A_Y8pdodgWRONjH6IVwKwgsB3GUOJD7Tb3LMSDTgXRY01xWUkNv362C9x4IJmmHZhQlCf8SW4ZgpBrl__bFq7I_uldTnPRr3JPdmfViOuphqBDBS8VvO03671iYa_JhL2B2Q_pDqPB?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : Ancien site de randonnées pédestres et de refuges. Possibilité de camper sur un des belvédères après une petite randonnée sur escaliers et ponts de bois. Bancs et abri 3 murs. Pas de toilette pas d'eau. Faudrait laisser le vélo barré quelque part en bas durant la nuit. Vue magnifique. <br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8fcukmondv4v0fbli1kbc34ekc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6mpxDG1ZOL9XrNe1nauc8jzMC86sbQ0YXhAnEP34oxoicYhtcxDeTrfjLPul_VxWNdJV_CcECC90DNgBEbb356fK3bgfDx4BD7DPW6K4LFu0RDOd-_O-heePQ0mHBzs7op3Kj_2tBtdIvw11XSJ-1niT5AIy3Ox6-fTaiV-bYX4wB5aNOUOUzwPVkiRFOhfYbE?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vdrijhvhkdmr8hp32lk5qjq4s8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5S01Xk3ouEnydfzbTd_ZkyWQE5gu2Rmwx2-wQ2_H-EpQuHRgQEnYT8WZ5sv-QnDHhrT2eBvRvEFmK8fsy5vdQ5tgOUiVfKbBWhijzc1mthgMhD7u2FxGTb09l7zroU52Zsed98Y-SQqy6pUMqjadZaGCtz-r2n-KefsMnhAXbNL_Ax2X_u6JctnUXNjWShfi-2?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : Tables de pique-nique, WIFI, toilettes et eau non potable sur site. C'est ouvert 3 mois par année jusque mi-septembre normalement, mais j'y ai dormi la dernière journée d'ouverture le 2 octobre. Endroit relativement bruyant à cause de l'écho de la 138, mais calme et peu fréquenté un samedi soir pluvieux d'automne. Si vous êtes motivé.es vous pouvez sûrement descendre dormir en bas sur la première plage le long du sentier vers la Chute! C'est beauuu!<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6kg48prncjemdlne8arkpdjtm4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7JBiywRHK8_5aGs3yS_5ivwwnRMLoZCod51zP8Z_MDEwaJd8vMB9MIq8lhCFG9a4u-6UwD9j0BmLsJ7S6TQNCaaP_WTVzR9tSIDWcZSncuz97fVKC8jqOSuyryRj4vp35F3FlPqtNJyiQx8stYDMihge3IxxfIDbqzzOCiOf9Yz2L4KcnglMr0099MFroGZ-GM?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ect98e2ujn75qjoma3t5c0duco/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5QAZW2UPhT-i7GNTJK1_pihqzrNLjUWkHt227b2ZYw7-w3WUKYx9fSU8OTBLgYcJzcH9r4XS4NQBSAblnIMGrVtG5vcGoj5RrZ3ROQK9xh2GffR9uppZclg1vF0xgr4_Ef5CjUEaXY1meNeSxcrDKJf2xATADB6fAx7KUuwbJWw3-jbDS9gK2tKEmebT6spFTJ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Très jolie halte municipale, en bordure de la Rivière du Nord, face à un petit rapide.  Avec tables de pique-nique, verdure, arbres matures.<br>Dans le village de St-André, en bordure de la Route Verte #1<br> Site visité le 6 octobre 2020, à notre dernier jour de voyage en 2020!<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1boi83uh78e8e0c5e906islf0c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5GwlmFk1_U2MFnLQbUAQG1B9cfx22OJ_iVnoNTyIsds3b6KUDK59U_wb-6ocWIalBxtr33-Abo5UezfCE9Tk5qlibkAgDLtwMTy7bkpXeq3xgVKCDxGNhM1Wm3lpA6ghl4t8w1hsauKD8TikqGJePF7Z3P5h6jIjuadIJ7TFgDIC7JOiYqfH5cWUuQVbAmgH6G?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Très jolie halte municipale, en bordure de la Rivière des Outaouais,.  Avec tables de pique-nique, verdure, arbres matures.<br>Un peu en retrait du village,  en bordure de la Route Verte #1<br> Site visité le 5 octobre 2020, à notre avant-dernier jour de voyage en 2020!<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ou02fetldi62l3rq129b9kqbbc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet744VdSZxitAigZOxbiCppGII1l58mCMX6flJFysXGWrcZG09GP_V_2albHhyw5uKWRNzPi58fIu0xTFesv5r6HaRDnCnr7VdEnuag6eZvxzVFbMKeDqYcyh2fzDiejEMRXLDMDYrShhSjjYbSwrGgO0DmUBhRqFoSiX2rw4Bp4YyUcdP9nSHcHzSRHY_vyVZg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Derrière l'église et la maison adjacente, le terrain délimité appartient au gouvernement (Parcs Canada) et fait partie du Lieu historique du Canal-de-Carillon. Le terrain est en pente descendante et assez bien caché à partir de la rue, donc idéal pour passer inaperçu.  J'ai jasé avec le résident de la maison le lendemain matin, il avait l'air habitué de voir du monde passer la nuit là. Casse-croûte à proximité. 22 août 2020.",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qc89qo1u08g0ilmrbi7vh87g38/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet77hAHwYYp2X0VPXjLPsngWxrlsL3603_6mtlASoV4zu9riuETX8U15Sa0wTicdmztVRB2cmTECPIvhDVbIgB4ZlSCL3rq_2XTJvThluFWEi3169nSvgiL3wr97QCP9q0KuHmj9Q1c7_rCjSHNo56Z-qLtjcnfZYooCQfYN-EZ8LK2PzF4y2lQrF5slxdZhCF99?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Si vous ne voulez pas payer le plein prix pour un terrain au camping (40$+ tax en 2020), une alternative ici: petit boisé sur terrain privé, mais non occupé (pas de maison). Facile de se trouver un spot discret dans le bois. Commodités à proximité au camping: douche, casse-croûte, etc. Juste à faire semblant que vous êtes un client du camping qui revient d'une ride de vélo! 21 août 2020.",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/n16j2mv8rnlhv13cqlu34r1qok/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5Ao5DvnVLbkff9vgx_HYAJkMoY4CNCXQiIWdq98lslbIZxhTTEpdW0C3NtiQQZOPCpT_cKd9SYo4piGSwBtSxlgAnesfwnHDJLQ1unxtlVa1HQyATw9j2IGYFdr9cGRtKImVjzowSuHuRrghJLMtmU_sLNvz1cpODttXAW5CRQOz-ertgnSHl1HcerodsgAwTq?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sur le Corridor aérobique, environs 1 km avant le village de Weir, cette halte cyclable en face du Lac des Rats serait un bon endroit pour le voyageur fatigué.  Table de pique-nique, toilette sèche, eau du lac à filtrer, espace plat sur petit gravier.  Secteur peu fréquenté par les cyclistes, car loin des villages plus achalandés.<br>Site visité le 12 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rom21cbvtib9iuqfoukm2etu3g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5jzpOgYov9yR2ErCzseH2BpWsrZbkOAeH1jyfazCPMmbgkE17ikodyC03Z95NYJvENc7wttwyVnlrlq4GZcI0rFPMbumYnMxb_NZMnJ45Urno2NIT6JWWKbg4YqxwBffV0-gLe5tAa-HDwbDwIYJEBlCFQ4ezFEeq6MOh_wg5x7Kge1FH1aucfNZz84dX0IWYr?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/sme6tfps8jp4oenf5h42ja38pk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5BJQTaQGLOSSLgYsaz32OaS-hcL1eAJbkfNXAt-PRKQ5AW-vJWMGwiaMovxYxMasaoigIZP61hd9phdzavb37DqNSOYVOjFbEP7IcVlQyFigp0V5NZ7gs7l_Vb2OXfu4V777qZwOiYa8shVFxh4WW1LFW0Bs4G3KSEeeyhDmCb7f3kfZ9Bbw4M76iElDOWfZUJ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Près de la croisée des routes 327 et 364,  le village expose quelques pièces de collection de l'époque ferroviaire, à l'extérieur de l'ancienne gare, qui est maintenant occupée par le Bureau de Postes local.<br>Il y a autour suffisamment de verdure et d'espaces  plats pour y monter discrètement votre tente en début de soirée, après  les heures d'affaires.<br>Site visité le 12 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/51di8bq80bdrvi8mr6ljfbglj0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7_gbxrmuqpX_xilgSIZjCTLZsb8kEVcM7kP6OfeebAo4nilNTM4ad0YwVWdXTBZQe7fNI8NfqfxlnbhVSlK2DT_DlzLO6_0u9eBu-HuO5_GO1F4LkR_Mb446qArD5Xob2ciPVPlsN2Uj-y44245fNtZ7aRK0_lSOlxtgVCqYZR8PU97d_WosVeTParLvqR7oTm?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/16rsth3tmu74ukrrio41ubdnq4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7-bl3mK3y15C2Jt7HiKALH01BGgIPKWorsNFuNwDkggJhGmBAj-Y-UuOEYfxXMicuemiLDvEYpZaLJOqDFhtGAZikjUqzrjcE0_c5KdGKpC3Wu4AXETzjgjiqZyiXfrhzX1XuzF44Of9iU1gmh3Mp9ylf2aaerWVfuXxBcAuoZ_0stxjI56lhKRqflJaP2QgwF?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lrmb2d2kat2rbbf0m0cs8a0sbo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6L0brIpzMC-tPfjizFlA2mH3ZqodWsnWryFsfyV_xB4ze8dnYCPAyAG-E11w0R-eIHV5g_92SsztCsqFLIio--zDBHT3whAA6btEPkznM6WahlMmBsNJIajchkXGE9-S6qjmnDfPH9I5bwjC2_VfQHwJBDyKxgurT3L8AseLkPX0fDA1ireBJ7OF0yhd2v7CJY?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ooibsfl4icpponec20800sjun0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6SNWtVq0q6_jfU2ziUo0Nb-5o-gSnnWawj18an8luZG9zs_Rb8qiWIrLhqsknvQBvqSVwRgG_L8DHuZjjEzFXQscbXZfIl8MOzCOmIG-8IZkBqiHEdukZnBWxh1Wwd4u5-xeWUs_zD4dQ1FVVl7qpwLTnZGvVA0YEK9SUaDTd2vIfxhyIEgH-D2932vHPmXwcl?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Ce parc municipal aménagé juste en face de la mairie est fort joli, en surplomb de la rivière Rouge.  Quelques tables de pique-nique, un peu d'espace plat sous les pins, gros arbres faisant ombrage.<br>L'endroit est public, il importe de ne pas y monter votre tente avant la brunante, ce qui ne vous empêche pas d'y préparer votre souper en attendant.<br>Il  y des toilettes publiques à 100 mètres de l'autre coté de la rue.  Un marché Richelieu est aussi tout près.<br>Le pont de la route 364 tout près pourrait être parfoisvbruyant, mais le bruit des rapides atténue grandement cet inconfort.<br>Nous y avons campé le 12 mai 2021, sans y être importuné ni questionné. Un bel endroit donc, avec un peu d'audace.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/hae5tholm4n7t5imm6ik4ftk7c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6qJzac4e59lJtZZVoUBEIrmtQ-MAV0uhO1PsPD2jdpBPymEP0EPdtAqaToWBKc_WGKNrL58zxU42S-tHL9-JyoiynlhThmJ7_qP-UTt2XxctIZ7xC-DdolzxJ4Z-DbhrDTZG7MjWKJcfONxH7r_0JMfO2hcilL1ZEhjMClrDxDgOkvAWuX6J-FdE5f0i3Dj2Ko?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/cufk24f05f7nevovjtdhavnb3s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5_PBIOy8svLZXqLaboRtlP7ODWdh9lDhjB_o7KMwac6NdTQ7ZlHruB-bUbqFM11cIc_Or6MY1keKP3ZzeAn25uLneHFy3PUtD4JK3_eDjRA9HehD6Zq2YjU7EL1kGUPLRHwMETqFMNgZ26CahTtbyW6U2zQwc8qJKJZQX7TZatd9Q3B5A-DFUB_9eWd3eQ5xNh?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/mko3ttpob4f49bhkpsimbns11c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6MKl7nPc5rav8eEpvfmqnRcNW06MfdrTntyaRdvoByXoCDSfRMmBJrPjUNHHozCBVMh7HYJrQAjru2NxYAeuIBL_FPc0fT3L5MzARa9YBZxuX0jyWmzGfuCHULyfQgoi0Y4nvJnDpOOuoY9j_mM86Ie8MrNuozrK02ya6MjgnjV7J_uIcIncTOcIOPR86sezVU?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/pajd519h0mo5f8j96qq4f0g4sg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6dMdTuptBIYAf_iZ0Kx_bsqazdUdkziL3MMAH2-5tgobMZFIDb9Tfbc-_TuStQRU0TCEtDB-VYqm5aoFzaScj3MIoHQSPXoiINrk4FZ3JffwJN5TICjA7H5LIxFtt-G-3Afk_TxOZKhejjrXXMDZFZYrXrJdF3P-XiiI1PTR7SuV1c1FZlC6u7VrulmC3R1MnX?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8e032ppaqhinon9vhqr0kfktd0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7TKHErjVhiMQe2gYkmhwT3KVP2_9ZFOC8efLww-snSQw2jXplvYLfb7Xc-p4L5SHQfEJKwyA4E6aI1yachMTghQXtJg0CF1WtrZOf-8LuiXMmmvHmVxtkdskEyZM00Z1W4Wy1irtU70DX6zabACDRhztta3f4kv0OP6zl63SGbOqrdgWquierfKx9s1MU3KDUd?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7faaaq82jue46re53aq1l70ngo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5PqPODxJkWYNZ7_NPtfeGoyzj07bgxoRjcMSaD9aQprvBijIWX7ONW9w1VkVJA0E7QyyqZaz9d4Lz915mglagIEV64367PCtyZmQoeHQJZZZDUHf41DyhL7OMWe3UfCDQHLdISiN4JvKTrrpk9k8VxFJZ7Xhpmx9dkMsoEoBY-JiZD4u6WMWAiE17nJwkIwjms?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>A la croisée des chemins vers le Lac-à-la-Loutre et celui de la Rivière Rouge, ce petit parc est équipé de quelques tables de pique-nique et de grands espaces assurant une certaine intimité si vous attendez la tombée de la nuit pour y monter votre tente. <br>A 1 km du village.  Pas d'eau, pas de toilette.<br>Site visité le 13 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/k78kegb7jtdrktb3lp33fj912c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet578LDlkb6H34q3JmKRrOlZq7GSCuQjhj4PjA1GFusy-3aOW7SZUVjMKjNdEuuK__EPuQjlBVW0Lypt3j13Ik6oOiw-ao0QnPdiR9feQPdUKOOizNTE8JDZcpRg12bYOiZHEzNVG2L6DoUV2TvLUYOR9Xth0RPANm5OYyReqaM5okHaSg6rZorWQcuFpmsCJdux?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Au milieu du village, en face du petit marché d'alimentation et voisin de la Caisse Pop.<br>Abreuvoir sur place, toilettes à proximité.<br>Quelques tables de pique-nique installées sous un gazebo avec toit, prise électrique, arbres matures et gazon sur terrain plat. Y monter votre tente discrètement à la tombée de la nuit.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>Site visité le 13 mai 2021<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/v4ghh2vu7bc3rufqvk0k5egqus/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7udqaMZey8nUixV_8FV95E9hP0TvaZDM1rCStovHdwafl81KpQpnTgX4nrA3ZCgr6p0QboF2eorQJshGiDvosGBTtTXvbeRbQAQX21qZiL3l_knp8nz4J7YECrThjSIBabqrR5NhxoT9CzN0Sa53Q3FoiBWiZQvpgLZdXJsLEiPf7NhkmnP-wGevr0eccnX4M-?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3p03j86nq8r8dl77a68g8ir7ro/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet52b4TFTnuAC4EXbuhxOOzXZ0yDiHkOQZgjmaqSQaUY4LdktK1Zt-N34LbpnBwUgdYi2HcGkNmub9E0iQEV7SQW4VHd5cUAqSlevASZ_3oAHO13jo-4BZGzt91YLtX5myeeX8kwr1P9d-wPuzVSZjcbKu2wJOHakb1bG6UyTNuYJoT4EbXHlXBlYByDwl6ETOVy?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/9p9pdp3puf19upcpdhipq77o0k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6kwYyEOGSpzMrt8zd54xdZzG3YMEwpg6j2OQHlYZ2-Ahy2VB1qLyKrWNvpKpxEcVRZEKxryLoMfVIptvzgGnsXWiIt8Rt3ZANGXd7bsnYbFVzPfu_ecxWi8ct6HrnOMWKyQyWmkxH11l_bgNxIlbJEijd_vKjHRRhamr-u9mpLzhFQdIIkRK-4jU7jDw1pBZ7G?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Joli parc aménagé à la campagne, en surplomb d'un méandre de la Rivière Rouge.  Très bel endroit pour camper en fin de journée, quand l'achalandage de la journée est terminé. Grands espaces, plusieurs tables de pique-nique, toilette sèche. Pas d'eau, mais possible de filtrer l'eau de la rivière. Assez d'espaces pour y mettre plusieurs tentes, tout en restant discrèts pour ne pas déranger les voisins et ne pas \"bruler \"le spot.  <br>Visite seulement faire le 13 mai 2021, mais nous planifions revenir ici pour y camper au débu octobre.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vh195kro8dcrce2st3maccud34/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4MZGGMynP0i9LQOgtMctla-4C1CR0Gn9rSsMXJrb5wMQBh0ZW_aabditRON-56riIoVqpdYPZTzmivin7KRRB2OdER_xHAsA_R0bzk80haO02NqqyZrgOTfMAOGTN2UMQbb-9dUFKAJ2nhaKR26idSq8ICY8fx3SQh_0e9V8uRc5R3Oq9dyea8Eql1j8N2DcTB?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/nh03hu7saqave94cnb2ai4igak/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6M6RJ2tpKs49XPVjxRN_MtoBBVecksLTTaEVmnDKwwFCLBKn4WMBUD4o9CQF-oqByZq7sNrZxtGSVbbUPfNVu08G5YaVLdQgJwiF71ezWI0tDQ2fmtkbVwYIJGYC1vOJAbmkavoPUNGIInzzX2D_3MR60hnUJameFeXppuP8qoGomPnvpnTSR0dYK7gFDk5nsM?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/bsk8opk1al5nrd9rt1ik2pucms/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet58ZX6cujIowJjfzPCw8fhlUqwg9lvNUmBgKB0vK9m-LG4LWI9urs45TldBcPMsQm9-hJHbDq9vXjnC80nhFtDYuINCxcwYFQ3CP4WZBNyFnEfCvRzJDgDyvSnpxaBMig3gg7GMmN6BIEvggY-uNFG6E71Pl8891GJO2TvIkBtzkCuo142WT8zsTb6H7j_lgYqY?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/v131h9ndo4s8b7ura0vpmu2n88/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5y-Pecy-ACu-kkMANbDVmP_-oGCO2nsHPnCMoU2Fw2SRBVREtLX__nrfIbDA-TqgefAejjQAgyhkCW1P7vuba9MmcCBLxGhE2vu2DwJgi-gAI9HhIrKppP-5Ifzhvy-iWvszeQaRMHF0ZYegbGPxHQYMaw9dGlyv1_000eYy_U0HMfwDTLP1jQNOvT8NMv7eUF?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ppd8p0khj90r265lmof6fjtvg8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4N5XYnM1j1zDeOI2m5K3nydGAaG0utw3WzbI288luWgSYg9OtTPHvbdyFNfmewZQF-mKGDOjk3QGpgvCsuQZt-nHXmuVgzzKDn6prtvyPRxQf6pIY9SVPj8dFmIkxflQOZkPWhQhhNrevMSQuhYnaJ-HpKzaSLAGZzXcqHM-1HSH0AXViqk8TyIrYmSgs27geN?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Ce n'est pas un spot officiel. Mais on peut se mettre un peu à l'abri derrière la haie d'arbres",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/visgfsbl1j2v1cscbkra71sijk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet72ZWwLxJ9rrJ0yyWv2DYfrbxHKaQ4jLGHTH76MdquNeFz21hdaf3HFBuk9KSpUKE8d59rlqZgB8sRH8FUwpud9Rb4pkmNOw1BvH8tgZ5vERq1Rl7b1q7pYNG6XiYmyBcHxJfJpDb7jgfTlcBatU7isRitorajzsZjbBXljBwwOAhNqdAuaWhYjYRdLseX7HYv3?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>En bordure de la riviere et à proximité immédiate des chûtes, joli parc aménagé à 2 km du village.  Vaste, plat, verdure et arbres; Toilettes sèches, tables de pique-nique.<br><br>Site visité lors de notre voyage à vélo dans Petite Nation le 15 mai 2021<br>Pion et Giguère, tandémistes et cyclo-voyageurs<br>Rikimiki@me.com<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/bu1idplcu0ljf91eaop5ojqt2c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7nvg9ueqdoIIEzE7ly3JHM2o_hMjFlSvbCB_UqFED5pNrlBD7rftRhU2qQrWNlRQY1PC_28JLQ8Qj3PdN9M2meNJrhc17yNY0jwsVXWNi9L4nQRAtynp5lLThGCchzhbPMbev9BpE28arbQZ_AT8TIQSEcrMLK_NGG4gAMD7Y7A6Ek-mEnEwc4GJWsc2UaVR3d?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/bed46k9bclisb3hp52cl1ce1gc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4mA7AjMlqz4fNF4AkFJMwUMhvMJu2xg4OiQcHaFx5KwNQiQRFgTAdvQ9zByrCZImBe7E2tI2xVJN52MvyLhSmSLgZ51dZ24zZbbm47ttH2ybwLUUWtQYAK7cKtG6yRUSeWVOweBlQxdi13wJbf6OUQB1fTkTu4OrFeAOiARkZoXqI8xQ-CYzam5SDg9BTodcla?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ajavirl06560k5rei250auaqp4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6XDRqpV7QYRdEhoTY4sxcz4n7HvFyAEW4uiChCI8Nhd4tJBXOJEvQZT5_2P60eLUW9qax1O_rsf41ypfjgGTHFSFeevj076rhK6mqhXAo_nQ6evIE5K9_VrDSoJJfBBBTLR17fcbs64Gw82uxXL9czm5Beetvhq50nXauK81ClQyCk3LSsbN8AbdGhfJFaWYx_?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/l7afdh3pp9u8ev95746pr4kja8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4Ld_GIu7Jl_kgP0SFqhvCvzh5meIGj2id83bA-U7GYTM4-ooKjW2X2wGqN1ZIQYKxqzf3tM7lOD0VZLgetsPjjJN_660GpIWKiqQ421q5O8793B4-Wxh7t3recpo2G6QAQDThE17KYCBhKt2VnRAWTOmdd3c5y4RmmGHs_qscG3Bkf-Oz6IrMnkD51Io4luJi9?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Environs 1 km avant l'entrée du village, sur la route 321.  Quelques tables de pique-nique, verdure, arbres matures. Pas d'eau, pas de toilettes<br>Site visité lors de notre voyage à vélo dans Petite Nation le 15 mai 2021<br>Pion et Giguère, tandémistes et cyclo-voyageurs<br>Rikimiki@me.com<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/sccmd1ftc19mkde1tc9cp4svdk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4TmKc48yy8g501SrenTtnPkhwgSdmVkdz4FcWvffsurYqdm_H2ZYhcDK3tw6KZwB0xpZdy0zJp9YMsoC6q-t2QMfGS64QvbWgpqQf6UYhPrGCOjUbmC-N52s-d0u0g36ODb0srhpNhs-gkWP-CXpD1lGYmv8336pwdx8BZmhRRpDaH7n3BDyjTI0k2wyFiODee?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Il y a une table sous un petit abri et beaucoup de moustiques!<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gd0lgg4qit4mcb91deupo9tsac/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6vWOmBsg4Wv-70vPS-40WHhX_dqw7iLmPd2QtpFPySutqHT5t7EkKu06FnDfrNlbf4OxMMcfxlM9r_KZOdSYHAMtrH_4sy2yiWLPGW7d6zrQFb7QtFpBene_N6AjDnAeXWpn_QHysgAsrQbxnxdc97jJcBt_tYfz7pU3EZK77EBN0mLpJJ58rts2LGs3VorcoH?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/k1qujhrokmri9dosbllpibmsdc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5QEwBbwl3KeFTO4PqJ2C16bWBlskmIIQM1Xc2AnyHQ9VKsM1I4UsUkARZOcSt2zKE3gygHgwQPvZoE1oLYbFbqpadxu1AZ6-vV90uPe0YB2pjVgka1fgj803JkXVj8gOH1KX9Bq4dr_AlICLAtjRY7VZRjxJV47gLCeF46Qi9LQA1DGKAAtVgNqu6aQbiMM7Fs?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7fjr21o4uj3gi6c3rgvsqi0eig/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4pgG6h2YOWCE9LOccXgvuXsfEKUAnyhZP9NoiAy86DAwdC2FSZT7pieOCWsQmUQ8zFr7K8R1MxrLlQygfoFNesvXrR3W82uGFu7koGbL-NlgIvOjC1eShckFk-YG4RZwQv1-e8voS6-bAkaolXfDvp7bzl0O-zU9G73VkO-_Yd_UI4sGslpzrGr-yTSnn0pgI6?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/07prfhvjf339mn4vnvdtgrjv90/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7ppKkSaM0IEnMDAYZzt9Fvnw8E4UDft2kS_RtFAFb8q40W6xRWAZjZiXyS6AmEVGsJsQSIFbN9WZ1TEvUTIUO6_uKgzw5TefSELMBP4HdAFp3m_o7flUFZEGlgIbNTIEj-4XoCzZkgFfD3XFobnHMriFN1R0sMNgrdCsXB-pdOVMNsRff2QoiHZPnM00MrSStt?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Un peu en retrait du village sur la concession #14, un parc de village avec quelques tables de pique-nique abritées par un toit, du gazon, quelques arbres maturs. Pas vu de toilettes ni eau potable , mais le village est tout près.<br><br>Site visité le 19 mai 2021<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ar9u4li8175ubevdh8c5v4lc1g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4MF3_G9yuRt_0MgFHUb-9zhbCCwoM-cN8azbJcLjkWuLkFpOkVs1kHi3UNa-Gy1z5yRj_nhVwl7bGRjGvcFerNMHqIbNK4haRPHzHyClq0khoJtXVS-rFVPd-7r183r8GCubHzAtIWb-xpKjplxSJwuQ5KCMxedFCMZ55vadtIdnpk4i3L2BnHzlGr-tz6gw7d?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6npiptepreac8eg999e53gq9ao/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4Vyp0euiPX2J58g3DwbHJVJ1HEX-POf27qZyZUQ01OBXI7pxEtOK29eso2d2fXXU1nAiYZJKxueztDu8GyYTQmCobCDtd1e5e6D0dI_V-X_Zls6c6tokM7f8D-PcCrdUxe-sjKltwqvDqWUrWSKHpe0t8he9QlfhzFHvOj93CTVnbvNwZ474nwOobJDoaJJcFf?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Nous avons une prédilection certaine pour les parcs municipaux des petits villages du Québec! Ici à Michaudville, le parc FX Desrosiers est joliment amenagé, avec 2 tables de pique-nique couvertes, des toilettes sèches, de la verdure et de gros arbres faisant ombrage. Site visité lors de notre passage à vélo le 24 mai 2021<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/tm33nlrtrh9jolbekaisb01880/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4L7xB4RYAv7IpRpHaqoOE5suWlN69wbHzmT1YXgdA3jDO4VqxWzcYadEOSkLU0qm8QPqVDIen8hN46xySNdgO7CG_gaz4FhNoyAC5k13XqunhHOcnELUauMYC67GoN0qQbh0iJoHvJVmxyx5A7nY1haY-Dvn4gApl6yAxcJE5IMam1XlQnltp7jNiL9WgdwMbo?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/dk20kvkqd0m03h505ng8ef540c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5blx8UxvWELyxK1Kd4clsz-JVvXHmVG_5fgZ3ik4OGU0c5tiX9uiozC-sWCibqVJ-ukz1cYQ2TpoaianMr0WUXaP12wPvt0hSXFn-6vArcuA6YBzpKaiGXcITs5xdH5vCw8QzyUCu9DMHvNwbeQzwPcMYwtXFkRftzgNO-cv_Ei8gvzbtR_btDvB9c1oJ_j1-n?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/irtcead621vp9a51r2qcs5cql0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5anv9NBuN-ebCs7ivtcuf0FpqvdxOUOEttOCEZR7-i2neyVSB-rRxnVVIp6zdu7AvESaovzb6yisB6SNp2rD1upW16jbyRkC21xoSo5zpyUSyX_Ds3C9S1MC_Zm0dUH4kyKaDJT48-CECFPtVoBuvZ9c5ELwS5XJPQhs1esAMaIoGY1PJ_lBZSyvQPo0A-ggF5?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Nous avons une prédilection certaine pour les parcs municipaux des petits villages du Québec! Ici à St-Hugues, le parc FX Desrosiers est joliment amenagé, avec plusieurs de pique-nique couvertes, des toilettes sèches, de la verdure et de gros arbres faisant ombrage. Site visité lors de notre passage à vélo le 24 mai 2021<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/g08v7qmbgjqo99t71r637ackrc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5ygY2Z6bnnedMZYmLcjCuRZxAQH5lsgM8pF5ydv5PE5sKrI3WCuvInYpjoqzdfNgRBp8iuSrnUdcDyLCHJAgFISgHOEXccdQdgjO4eiaVNiBJA63B7jeKqdNqAMympgdYRM6mUguE7bEPN1_GM7NCZOmpHYK8UHvD-mREIi9OHxg8L7NzM1zPt8KUNRop88I4D?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/40d4jp96s85gkc2ka1ib2so8fs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6yXJ8jEBnVZqSR4Gh35MV2iDTPj4Q7xb80VSycPY9BXHIxY0ssbkmRqoHPHh5hHaz3F8haSFKy9PfSvk2FoC89z41LiPf1ObAT9j8ZYJbnREN7N8qlGM8XJYjbdjKiiBEOJ90HXqqNb4AREbSPp-pF_ZPq-41msy-gSPal3pCc_bqEPxTMUugupgU59zDMZi91?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rpjrme5la4srnv5fs5mu5f3vq4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7zy2S3AeH3Aw2XpOLr9juYtdUkCeTEO31AholbCnGzMRxGktjysbVprsPOXSxurPPIDVsAWgTsapneCQ8il3OsHvdzRCpbjm8YEgvjK5EfjHCdSZqPsPeSVfk6ZGeS4txVI0_js7pznYzVRwul0RUq8BtH7fGC2-68DK1I02s0qDFfAdUNS4j4DEtDOtCa-owB?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>A l'entrée du joli village de Roxton Falls, une halte cycliste en bordure du sentier la Campagnarde, surplombant les rapides de la rivière en contrebas.<br>Amenagé, avec 2 tables de pique-nique couvertes, des toilettes sèches, de la verdure et de gros arbres faisant ombrage. Site visité lors de notre passage à vélo le 25 mai 2021<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://tandemetcie.com<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5vb0t7v97fmaj2h2bvmq8llhg0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5sLtJygKMoZscanik03kJdg1-L5T9H67bi7EtkDkLL2kbmenRV3eFYkdCwM0OZpAUvhWiEOz6TOC1elRbF01VwHeZKTfJZ8gN3nCRdKQogHicl-bJH8dLduWDNZj1tkpwNu9brg4paMVYssjuQjj9aGrNc6pimdcTeubUxHMQVJANaeEUEjrya7XORwWaJucpZ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gjrf47bm5b8mg9s0l1ohikbte0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7jf59N7UNp_PeyIIjBa8pvcYXbYlmoQhRviwptVv3bRmaddZBDkIalGTPWeNQ34iUzdxhMLDhBrWTcoGZO5NsGDxErOuMbwix9f0XO2zjrZ_ubJ0AeLnrNfMeF96oMjFPP_zviKrXv8ou_m4WfWEvg9dFKG4AduACyU7V5xswSLGM-89QWCr7ZCEafYaY7qOkb?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/of0q5rdro0kshfl48phg1lioa0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7-xdSeD12q4wF_I2iLuUCbAx-8yJv-ECEhOBrZsv333Lf77pEqvW-l12mFMM7FVtWrVlQVoHxdreZlaKOh9-hK8rFR_uP7ZY8E6LwAY5XgZCPXSj9rtLyET3tPdapuuT-6bLxUA40dfDb2oCanoA5xbLpUqMmGEMyMCXUwj2WWvxZ7NZxbYXJY_iU7tbZVZiL-?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>A l'entrée du joli village de Melbourne, une halte routière en bordure de la route 143,  surplombant  la rivière St-François en contrebas.<br>Amenagé, avec plusieurs tables de pique-nique couvertes, des toilettes sèches, de la verdure et de gros arbres faisant ombrage. Site visité lors de notre passage à vélo le 30 mai 2021<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/c9bei3nc1f3b3dn1nj5a585j0o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7fUImt1Fjw8p8V0IR7PK_IewOuM6zInRgwo31KaHpuH1rs-4_RDxVuHNuujPmUPvd-_gFNpDtHnwQOgVYwj4ckMgwaozFc6zkUhzMvhtYaHpjPtgk2AQ_cdOdWtrrLrUeanqdxYvbhnXgVcvKTVUTL2yt_NQ8aquNuzyZVDpezn0DzYnBBvL442KQN3Uk4SqHv?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>J'ai campé là en aout 2023. Il y a maintenant une belle toilette sèche!<br>Il y avait des pêcheurs en soirée et tôt le matin, mais assez loin sur les rochers. Il faut quand même marcher ou rouler 2 km du stationnement le plus proche, donc je n'ose pas imaginer qu'il y a toujours des gens ici.<br>-admin<br><br>******************<br><br>Dans un secteur isolé le long de la rivière St-François, un très joli parc, en bordure de la rivière.<br> 2 tables de pique-nique dont une couverte, de la verdure et de gros arbres faisant ombrage. Pas de toilette; Eau de la rivière, à filtrer au besoin.<br>Site visité lors de notre passage à vélo le 29 mai 2021.  <br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/h7rpucsdhigdbih4fln55e3j3s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6NDYqjCJel9nzZGeOMCM5OFsI4c30YN0nO8PSwGRBZNAQPVknEJ_506Ww7eD1pujhrW7oJ-9-rFxzGXzoKCSDmVXPuxa52IIrug2UzvcQCVbTPxPlYOhsJ1Msa1MdXpZAMB0vRSjmhMiBbOKBJA4vz8rsNs-tSxqL2EMxUOTVZajnp4_MTTgVjCMFCTpqlcApH?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/j4hu473gdp1oje8ef3ve40d7ik/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6fJZOozKLPv2R8DEHxpqw9wodtUk3vubIlSEZz8umJRiuaSaUSka6BYEAu3Vc47VJPfepMdWaNnmU8_mq4q_D0FIRvr_CwJtSgUHUjSdE5Ck4nDU_4AfxM_vFkJ7Nnt0FKFF_FEsJMBWjOwnT5Qd1gJ5t1-cT6kCB68bcCFHvoGRja7NyuJKFHOXa-W2pkmJE9?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/8ruqj2580b1ki9ps5raqpckleg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4_MNkrT1vyS_9Fjb81tP_jE-vGj9Yda3DHGZ28FS1FUA2oxoiNFGAjgtJJFHV1t9PSv8CbME25OyzPyKDW6viparOVBNoMMBuZW03473XmBavY4YWlskQ_5HVMafKZA2VjLl2lFOOiaF4-nZPTNZgxef4lNSuawkrv2gQ_fNaaHrPzVpf7wghdmshO3Or4LZir?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/2g1rfnmcm2bdqefn7g1510vsno/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5_eyoTq7IXD8tM9_fIS0giNI4ADMikHnqhyOzR_dXCwdg4jJYXnJVM7LN5A-haEpEYFNnWw4vU8ergK-TlHc0qAPkswYJBhKZa_cG4TuEaaT54puoSS2oN4akfxDz6DKE6r7LXZFmz4yRm54k1GAxpJvV2zEgCdgEiIJjEASHVS6hI-PWS2owuyMGjuaRwK5_I9T86J7ApRc-5-KDKngG6h5Kvxlsa4XjsqmFGYHPgP8RlFA?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/jialhat8ueqbjja06c50ndig9k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5DgtvHGt7hB6UMsoL7_u2f3s3CAH4UYEJarzxVUIdkGX7ne1W8IgLJg9h5ey2Jho3W3xzl3tjyqfG08zWoKNkKOdPPqH3hQXk_iVSTKbO0qmrjTAF0WVfQjV49Tea5FAj_Mv025wgOPlw2I_MXqzJkNYakaGMJR7F88JPfHQHxm0t74a5voTWNGDVKj-7HzWw3yTNPNR6r2E2e3n-S3g_TIPd75M2g_5VAawXLdNXm0uEsjQ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/unbfpnpebnrho7jig6sp00nj54/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet49nyzBnFYp3PnA6SdjPQJDpxcn5LcYQCso3FkE0lLWd8SxgtYnzUHUDvRMwTD3Ms1s3kRbp83keA2fLFbOBYdUfEELRGIiHRTv1hXqv2HUQo9qzdyqr-jzsJpsCKwQYWLMsnlFtVu2kf9BGw5pZkBrQ-GqDD1rSadKI_JVVAZOAqFtobtkXgQDJwU6aCN53lpHZ4ZmxMNHoHb2Z2-sGfUJ-Nv-rexMIksvjhVMBMQcwyigRA?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/n8he60u98ittmm8dhl2apgjh00/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet54bjxshCeSW2w0VhesxdRBPO1zJsISRV2XeZfrrvenSkWev1B03X7jK4p_xENogGmnm1r7bU6IWP0Ugu7YGMwos_UDkPFD4vU3aOm1tel-ueBIFAr80Ts_Cv8l85vP7Z5ZFdSOrX1BsyKQzXl7QkX_DcoDgwUu5fj-TSwRN4_x0LDQvrHr6XCMbAsF0zioljVB?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>en bordure de la piste cyclable, directement face à la rivière des Sables dans un secteur tranquille .<br>Site avec verdure, table de pique-nique, sans service. <br>Site visité lors de notre passage à vélo le 6 août 2020.<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/arj7q5o42gtvoao0fev3jk07bs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4WOkaGqxLRXAznujy-A7sbNfde0VS_hVElFYzDL2oJZUsx0KUdq6RXpgtvKjtLqbQIO3aYBTZHZT11MNtaMhlbUY8LfrpltC6GrRdZJlvl8gAi0eAFYEJx4T83pBblxqRvvN_xTuYEKSVJSe5pSUBCNZQGtec9jhWE8Ea5RqptaAAAetIP1jtJxmEcDbobmVGW?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/2hp349afm5fkhke0c5o3qd5rcc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6aUS3K3KGOxQy_hHJ6ofOGJBsbiI_BQgEOUn03iTRzOTHfAWOqNbWKtBv4q0h0Intw85SUQZl_69fl1XrS0PLZZ8bAkimALsm_DWlLJ6YZ7Ckle6vPj5i6GTRJYf8yDYIFl7qZ2noQ5tWq2uMYO7RrxsH5CJusxRi9Qy0WslGmE7_RaS7T7iJ_R4qMHZwqSC4D?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/iuh1fgajai1neubm0qqo57m6qc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6ImfIz7xZ4AJbraUlAYdwAhvwnEYxXTfzLRVAJFBUrh5LPPxtLwW7A5nurFKLr6Ff7CHP7k79bFUDBVDS1cgGwfZg5dOVFqR4j--FubHiZnr8eKpGy_SPYaXQLuE-HhVZRb2cr8FD9l8YgI224QavZHmwM6Sr1aWVI52eHqcPNF45gHBAeSGiWN2qD5JonQqWd?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/b9ajq7su088f65astcdasft104/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5lyW5pFu-ZA6cDnwxzYpB7Ci7ZYSh9Ra9ekvXSTk8sA7RBA8iJKkpAhkZeqGpryYDAdJ0CjdviEGXJTXGPHdPD7GJZSqhzQP6054HVWA3iPAJtl7y2GR-m4kH4zfNydGtdxSMRZf5byrvFtNV1VhaGGnhJ7N0zoWdH4oOlTkdXKsZQqNGY5u6JyKDdaRitHI_E?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/52atnel8prgvd1cimgbnk9h1fc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet70kNK9fzg8om2Eeye6n7wICe8OL-1ADVzIw6Xd-E6v-3dFC9kq7kyw3BU1rjFFfDyeK0_zhcjs2vXLLmf29RNMRnzFbc-6QXio3t5iaRezabGzzVIvxwXFk3g9sH3u0p08r7QQ8VYO7uMn_onKvo4vSqg-h_b9D1VEAY4_ZprYt8he0fXK8GhEzi1AdhXxnRXq?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Joli parc régional en bordure de la Rivière Chaudière, coté sud face à un rapide.<br>Quelques tables de pique-nique, toilette sèche, beaucoup de verdure.  Très vaste, incluant plusieurs endroits retirés et discrets, notamment sur la rive en contrebas.<br>Site visité le 11 juin 2021 lors de notre voyage à vélo 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/s2bh1groubk8ifga0bl6eed5o8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7-fWZzJ92H1Ddiwl1Dl8iaAN0OYCb4uQbYlSrYUVsAhTTfo7EERucn67CScPjAS4T2OZ6_QjD4SyHSHg0Y5Ro1kVpc5CrpLwkEA4m36A0rS9JS04Vh5gTFvpzmkJZcRd_tPsHbFxxF98M6SaC-YIivo3-dq0lkpYi0Q-DqUqK2uhBMUYuH4mJXCNlzZDczuX4P?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/4fd08s3bg0mf2jbj2a9vn9hdlc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5l3ISrYfKUhF1qyLWrz6OoVGdUVbHyg8zpE8Dzdi1TRTlIHeB_2qPddnEmNW7hdk4m12sLlemLAJ0WEVwPpRuEXQ6wzqYRyBzcbY1-7FK7D1CTzPphcAd_PZfeaFpdT4q5vG_lzIqOntKrvSbwW-QUHfQdSbJ69YSIXg51EPME4A-NjHLf0dWkgLbo95JrGgLE?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6ske0mk0uofgub3sf2lt7heg4k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7VIjWN6zHCGAhPsr79cHANOoBG_8dpin2HAoetOK30C0UOMljyMK8goNMiq4lNGRkB_eEfjR68Rw_jdntiJswyYp6GaXeKPp2yh4GfCB1QKfwFueTJzlvTMzxHK_VVGOCD5n7-DbilGs5AKYmn_l6rqrdUWmwV0nERdCyZruhoc-eU9Di-U6vL2UNEM2sJYXwr?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qae9s6ajb87jqdnqefhba5e1h0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7usBm4F5dKm3sfMysdMx6ZUQ72EvH3ZQT_GeVu7yHSMjYiLNGH8G5DPfY6gSfikqYzm_BHosl8UwKJgrISiCcwH53j5GtWEjEt_m2XIu91jzpCqn0UyKk3jhoEBbBJh9DDifGP8ytQYG_Kpz3YENj9K-3hVij5XQLUJwOLy8AqqKx15iy3yt0X-GdHdrliwYjU?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Jolie halte en bordure de la piste cyclable.<br>Quelques tables de pique-nique, pas mal de verdure, quelques arbres matures faisant ombrage.  Site assez joli, avec la rivière Chaudière en contrebas.<br>Site visité le 10 juin 2021 lors de notre voyage à vélo autour du Québec.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/iptv39vj8isuekss3bprbt1gbk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4YsuJWjjPOIy5P5_5nVBG4spzGNJrNN33I2RXvoPcwj_6wAN9q2894crkPsmFIYo8id70lGDv4Dk1T__x8MgtetaXD8LCGWKJYjwLov-l6KELYGjB84Z-8pD8-p8vFXLbS7IhTY9t8l_tFYNWc2GUrXgvYO7a-JPx6hY02UaoPtnUxKHgKZWwBqbSCKR_LxMN5?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/934r1eai32msbfbme4bk15hc68/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5dkVc7Aq8QWarXMTS1G5b3e7Gq_pnoG5KDUOlUBkohv5mnYrr58LK2TtsRDDFnSGbVqZe2hDYJvYn8kSJ8cevGGuAnwmIpUlL10YLsotrH8Kf9b-gzWUuJG4sgcAk5umY1vSu5uzuKhLBAU_lSqaRc2MWJ6p50BErBbsFcLrlN55maCjsHBCL06zudUqvS2Fg5?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/cui396l5l6k1fhhfi0lcl95l18/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6pbGw0Hexho80m0WnccFPL_Hqbv6uf3CA4xvch1aUlaubmTFyKzVwfOXRPQAfHDgQimBFfYHMbFmet47bSDeXr1Si7AC4M6_EaKzCW7mrRSS2J0fvhGuJLkupLRIKTQaEd_d7EjPGAI65EysdQ4c8nUXTzEm-rxY33hN_sWS8aS_SQUj9rqnWn8T4W73Sd-2b4?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/uh4041eoap59ieg3gp6pjg0poo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6cHpfyjHd-VgH89V_faIQKAKo3pAe37VLpvD3_BgIe08Ef3dMiQShJIE0JRNaa4xDgE9EpcWTvIx_Wo0i3NYBdmdGPm4of3qMABFkHHwT7ZpcspxcxO9dIjAp1sY15ZPK-11Rr1r4Tpi42v4rASPFUksYSQRMSmDu5njUF9Y6ePUij7YZGzjpD904VVPCdERkU?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte cyclable en bordure de la Rivière Chaudière, face au pont couvert, du coté sud de la rivière.<br>Comme le pont est maintenant fermé aux vélos, ce parc n'est plus fréquenté et est donc bien plus tranquille que le parc municipal à Notre-Dame des Pins.<br>Quelques tables de pique-nique, verdure, arbres matures faisant ombrage; Très bel endroit!<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lebu9f4titda6ru9ru09scabe0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7hcsK7JbDJqYkg5sbBkTYxQyiOKgWrpPacSteWth8hXDtCt7f5ODAfScrPgsDn5rYQUvhCFANUEh1m3LqgCyLmKWBW70b8ROZpJtzuf_aAMRRuAhTJuGLRDGCzRH8iF6nloFfrEuJhYpIAEhvwHxKkUyKpQXLHjY1HKC2-_VvWUcU1RjSxanshNh9hjq4tNMCf?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1s5add62hc7819p962ih1m4emc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7q7nW-QMPrVYsLznUtEjDJbEkCUNIl-oTAPz0KN_auSyfLuw10JVJd-N8SCXd0dgSBAUeSBba4Xgr-vWjF0dxQtNohYzLCTflxWAN6fkGAlMiaXs25xq9n0fA5v_j6YifwYlPXjYgE5YCz-mEZI_3LzNJalc-ejJBZaKQiL-CPqAd4yc8_h-8rkvnu-WQSB0qj?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Joli parc municipal du coté nord de la rivière Chaudière. Nombreuses tables de pique-nique, verdure, arbres matures, très vaste. En bordure de la piste cyclable.<br>Assez achalandé durant la journée, sans doute plus tranquille en soirée.<br>Voir aussi la halte de l'autre coté du pont couvert (coté sud de la rivière), aussi joli mais bien plus tranquille.<br>Site visité  le 10 juin 2021 lors de notre voyage à vélo au Québec<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3m76ubbk7064v2bl1jlhct9gbo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6nUIRfGqrNgFnPPjnkr9ozZVvrFkUhbmL_KzWFA76mNSCpBQ4994cMd5gg_uLaIaBok-Un5X5lL5Sa6lNfzox4CEqLePEgEz1o215HT4sLukrCgyb2oB1pGVTwEfjTSynKmkSvHBbxWLFGQSNfXsKrGuFmG2syVuiGinx9Fg_aJDdeh8oaIRpneIAvk09zXGfN?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/q8kh1nsf97rfmj1tl6fagmnb0k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7VfrKDwXYO7EwMjc9QcFqgQZqWvOUqTuIbxoT29Xzr-2TzN-Ga0YmBo2N6jVicOiTrRXMqorBIeqxz68eKRwgWGWf1xjhTqTFExG-zlGDp3CaCUkFJrRJ3oTJYXb0cmoqvSe4nRzvJ5TP9QNh7cjmbkZrEHvRE9mZjS1JjjG3ciYSWfIQD5kPxR3rutDthNZH3?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ndoe9qg1ou4cc65t97rjtqoe44/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6WwLBos9WkRJbGfOoTuBPsGuzCnUYRQFRZyyGm4vCVSwqg-kLq7XIYC0YIA3XoeSA9AOsfnkZcXocz_6BDVNx9Cc6HonFsge5ZltTxxeRqMKi9hfpwc-ZuRF7DEVkhkBdetlOJwcL1W0E9nXY7ipbxj1shoJ4_eV2s2cdidtVTgq9bOzC0orDiK_dMqkWkNQ5r?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/d1pqqmunltkdt38hp2hqfld25o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6j38i2xIFc1yQzt-Zws3Tl0YHx9t-l2VTG83O9sHqLaBX4YYvsFy6clTj3zY4bVto6k85EHSIOUksQfXou6aP93sxBGFw4P_XVMoQf2yVSHpg8J3vX6YbfMcwUOmXCouoMhjrp1pOMtgcWK3WF_7Gbw66h3SeJPRu91-T5wrillerLfsPVwJ-YRUtPiaE6NQPC?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Au coeur du village, voisin de l'épicerie, ce parc joliment aménagé: tables de pique-nique, verdure, ombrage des arbres matures;  Un coin plus discret à l'arrière permettrait d'y monter votre tente, si vous attendez la tombée de la nuit pour vous installer.<br>Site visité le 9 juin 2021 lors de notre voyage à vélo au Québec<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/2fbmbljl5cvb31949an5v5gc48/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4-msd_GGV6wTHCajOeqcGXn9oXQbgUDWbcw3dH95ejZ3_VmHsojI5YTs4IyF2sqy0EXewhASzGIKOfdhSycJzor8DPSLL6jwIRm7JFXiEWi4gMM9-lh16_eJ6vM8fYEsWuK3gOLTYReFEy4hEyPrj7TMWTXBrSM_Ixd89sy7iWzY66j0-R6go3l3XvZ4iWbMeP?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/67dvj5aicq6bd3lkt2d6vjmukc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7TXnjYLPRbdz4lf2-1xHtISEfFpogaMLlcq19VIsFhVkmwUsxxmmJBotm9Et0cBod5uOmeVqwGoW0eWPrnmu6NRjmfWA7Z29T8fhn31MI37ilOywD8wrn4P9V_rduhtq_ujmsKI7XsVtQvgL0K9E4OmacY874jCq-Xf4P1wsFZSBZ10Rw5na0IW5k0oakOgRS6?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/eoehrb04jnjbjs8uddoekus488/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7oqDkEjXnEr50YVGUZwCdOeNGTpAMdRsPgJmlcXLWxaHbO17w_fHfTlC-jQ6ujS8ZaU0J8WoBTNugMdvnIAvx-buyU5v9f_cJWUA_AFw-Vhwr2is5H_V3kMv5qo60w2WJIYE7uxPnFD0TlLu5cnH-vukNcl2WTY9j3QvtUo0DUZ990zY9QFCsSBUAkCYqIppuQ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>en bordure de la Rivière St-François, entre Drummondville et Pierreville sur la Route Verte #4.  Il faut quitter le sentier principal sur environs 800 mètres (aller-retour). Quelques tables, arbres matures, bord de rivière, jolies vues sur la rivière. Endroit isolé et tranquille, loin des villages.<br>Site visité lors de notre voyage à vélo au Québec, le 4 juin 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/f20m83vrah76qtuakh1qmnusf4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5kE8NdnkKbGZjGzVm6NnvDDet31fzzIRRYc3D5fWjcaZ6-V9pcT49SuULKEmei-D0hxiEGHq-gi5UpCxNnZCPmrGtlWOXiOJvUtnFMdb697NT5QkeGH6pqbzSOTqFzEee1roBy3pl-Vb3NbT2zmdT7GS6TUV1o_OtlHv6aKXd9vkEQDIS72m6wHOd3aC-1zFQr?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/2kdirlqle567eo3hnlqe2itnak/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet44tqQC6_ltTdEdbi_-jNyB8orj3Oj9A1vDFd6Mrk2oAAscSkkNzzfbOBkIXSGjx0qeCfdfkiu8c66kPA3-mDExWt5oc1GmdL2H6XP9spUcdkaEDdS2h_agDFOIH9lzVDyG1V2HUwd1qNjpHOI4LEuYoCAIY91IcYvZ2iaVEsuicGCPicY8AshYOr4z3cdVv6sR?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rvogvtuhh1p759a7ebdjvlftig/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6yMJcfUraNsPLQqDibUCyg3P7OfRNqnI2BlYF_JEyBYApfrqsJSj5gXYGTHt6kFvYuBBlrKnPWLHrGA22Vr7O3fTyAURSiqY7VMhmbscvX0sDmC7LkhbcYbRLJocGchAR4CzxRRNj71slaPOovAjXl5bEtHpO2nyxC_pPPZ-IfmaqRNdBxPz1Yqf1jFZfKHbUY?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/0o98jvgqqbb6s8urct12hh5v2c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4RYCGuDcUbF_QZFODylsO2lg6wouyEzf7Jktc4E0buDDJOmgiAz8gw6V7EfIjY2FO2-E4qkoLkipEoXxDpKCcWNvBiEmEDUIqZwl-V4KTM2qxyG9mbF6lzziGXlql-n2Uu08g2SzdmXoSum4xPRDqXo5yb-9Cbfnno60lSR7-h36heATwtUboXPft_nZWa5bED?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>S'y rendre par les rangs Sud-Est ou des Pionnier, selon que vous y arrivez depuis le Lac St-Jean ou depuis La Tuque.  Cette route magnifique et tranquille vous évitera une vingtaine de kilomètres sur la trop achalandée route 155, de l'autre coté de la rivière.<br>Sur la halte routière: quelques tables de pique-nique, verdure et arbres matures, et la rivière à vos pieds! Un site enchanteur et tranquille!<br><br>Site visité lors de notre passage à vélo le 25 juin 2021.Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/nrp0hev1u8s9nm4i21ddt19dvg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7zfPxBjknBeSFT6GOXzf1xpHcMIVvsF9aPphv-UzPONQqdpwzuJ2jodTQRvjFnRKMJ0rZToRF3i13zSL6jqkrk5XYnYZUKFMk0sqAbNZB8PCOIy3yhye_3zdccJQKpuN6_aOR4Fvt3SWj-WhnoAWiVinWzx4lP_-t3NdUkjh-oc1pkeJ3FGhtCsfVvTwVO58Jt?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ne61qbnl91pk9klj0v3tifin90/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet46OhS6nToU8DUpLEgQCLwDGicwmfYuwTtibw9pU9dfcmP-jWP7uH7qWoGySMkWeSRw_Fz5AG_b61r6khQTpiId5aPqlTrU3oi-NBJaAMHJ-mXG1OZXW2VgpjuNH1LC93mCRfmRop9qg-bnVGGMc2BeraAxlQlpUsUCkn9jzj-HmnY5tsxQFX8JiNH9XIOGNS6a?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rij3in4g3ne6g096q94d1du97o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6Rq4RBjAyO4z68ZzOncE87b8A0eJmM-pGGbCaI4e7GZZiajgMX0xK39J2EeqMX5SnHuJ0wStpRHLhGLNWHBqeQW5iUQAx931AGmhrdoSncsCXRrED2oZSXbmNmCunBAhani7uU9VwtgJZAqxPw-9EQ9qdyg1u6FGkBrvykKm8SqDsySZbQNzUU0lus8spmZGR-?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>La route qui relie le Lac Mékinac à la route 155 est un pur plaisir!  Pavage neuf, achalandage très limité, beaux paysages, et plusieurs beaux vallons qui rendent le trajet sportif.  L'aller-retour vaut la peine pour tout voyageur qui privilégie le plaisir de rouler à vélo avant tout.<br><br>Méki est un parc municipal en bordure du village.  Joliment aménagé: quelques tables de pique-nique, beaucoup de verdure et d'espace, et comble du bonheur, des toilettes et eau courante .  Le village est petit et tranquille, vous y aurez la sainte paix!<br>Site visité lors de notre passage à vélo les 23 et 24 juin 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/i9glgor6mpgorvoqe2cn0fbdsc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6yIuCb__35AFloiVku45dI8lqgHP_id_w4yH_EeDXMgIQ5bDQWhLuoKcS5VI7OQv49cyFKl1kGbdhWRv3S2WXFrOp9IJ0ayQ2l9-kcSebl1Dnx_N1qtF0RMEPfJ_mcM7jrWElM9KRyS721zj9ci7FmCP8s1f_Ix2QwOlcW8g9oQCdMVZHchnIQG6-oaT4M8Rpj?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3u0bq8ofdgrpo3bcfr52sqevgk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet753R5koVvt-cD-sCjKnRLKPJhroq_HobA8jUskWto3i9BBV0eLLTs1mrQZFlJxnMIkcmdru5cRU0gb2JYIlu94BwX79ibvkpQA0Fn0ks8gNt8051AfyIwoGT_mzRBcwy9COOIiKSo1Hmq4ELM0AaGxgNuFX3GW9obPFyKwtyG1EnyahE_9ZdssaDcbVHALM_bv?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/9d46n2h77ba7d0ii6mppu6npjo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet48R-UMayRYWXDo3pwkL-wpL5sXozPV0R9CeiV3D35BSYFJhqP8XLGZbCtyeM7DcRF3BZ_xA3g5XLHNZcr6sFqu-gYL6FTNeRBDz2YKm90ZKgBXB18BmEnay0sp93jkxqMFDRwD3gNK-ymT_jdXGb3aG9L2xk39KNuIho7DuSnx6Zjil5UpLSrVSIsphDkn1cia?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/hu6vljh3bps6a85r34a8pv3vt8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6bM5r9plZtdrWs0kOpavhfKbU84S5ehSjS2IZF84DnIHRK3iJJ7anL3RNQc89b28jfZhYvfiizsZ0TZyjZAjesoaRx67VXzTjazRlVxUpBYY9DkizhR8S44sj80DMIFURzNDSZA_QO5L1lltvipDPhD3O7_iqEh_mOYi8vjt4HJGnS45UsTrhk7e0KQd1SLECO?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Un peu passé une halte routière très achalandée de la route 155, quelques kilomètres au nord de Grandes Piles, vous trouverez ici 2 courtes routes en retrait de la 155, permettant au cycliste épuisé d'y passer la nuit.  La proximité de la route 155 rendra sans doute l'endroit bruyant jusqu'à tard en soirée, mais vous y serez à l'abri des regards.  Eau à filtrer sur le site; Pas de table, pas de toilette, mais la halte routière est disponible à quelques centaines de mètres vers Grandes Piles.<br>Vous verrez un 2e endroit juste un peu plus loin sur la droite, aussi en retrait; Le premier nous semblait plus joli.<br><br>Site visité lors de notre passage à vélo le 24 juin 2021.<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3d1c5nj5kkqt69o43fu0og0nao/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7rnYLoau5K1lwaUJhnmkKYgPoRaZSiW6BspbMDjT9XoLbos25G9h7-rpC8XjE9u23cRM3Ar4kkf8UxKvwPScE_sVmuB8Yfh3ytHt5dFi_75cvAdb_qrzIDjEJgt2KyPByZBLwAIh3-KW2KZaWAU880yU6fNY60aI6Fxo79SbBQ6JaXcLq8iWzsHWkc7iOu55U6?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/dbre1tmqub8jenshc3acpn6ff0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5O0Cexae4jjO4xRIdsirrMFloyZH1v7o83l6nsxe7XW95WuKDELffeV_BNX3w7k06qPvYyBJI7vS_o-YnXJQiqTTvoxuUfEJ4_O7LgdLJnehYy0zHIdHO48xOvCSyjGkuYP0AIpTcBOf9m391-kyyFiXZzUezc1PW6RYHtaQwX4YulsnkOV0zbkRc0R8WZn6qR?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/o4pvunch092hifiao7767lk31k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4yn7nN_SKTii5lIwVvVzd52KVw3toF0Bv4JbRKTxVRQyJkvo6eg46TQuOIWE_rTXKwJrEdi4LC6eqCzKS9dfvhRDln9trJ9yxT63vTWoasXYtNKwHJaGf8gg4fT-gjnp5m6-Lr6eSKnoVOFI8W5RHAQcY3nAUI-JCf5cuFv_Je3mZZ83fXlEQljkCRJcnvqpqP?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vbjcbq9cd709cuu7m57ic72joo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4VDrluGUBBWbyMzKr40CiN_MhrI0ekkAyVGIwkyVaG3ovddGdceuTeATYOVZBn042UBO7OkLtiQtmW4VyU-Yv6tKmpYHQhXCR-JdpeGhOOby9Zb8NGf806kuzH9tCvlC1ehGJFShM5jhce0Q-UvYHsiHovVK2xIT9HXIZANsONoye_ANC4JL8zN15bsTQ8vwrH?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Pas pu résister à vous partager ce petit bijou, au coeur du village de St-Boniface.  Magnifique parc tout en verdure et sous le couvert d'arbres matures;  Suffisamment vaste pour y monter votre tente à l'abri des regards une fois la nuit tombée.  <br>A éviter toutefois les soirs de fête, comme par exemple à la St-Jean-Baptiste ...<br><br>Site visité lors de notre passage à vélo le 23 juin 2021.<br><br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7l0pgdt21ddap482hogto9gcq4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet58ifnLx5_VzTlvdi4GstdW_7lUhLuglj9fnUKGrXSfnZoI3DyCw_HLjdGgAxhXF6DU59G9ztV_R_a1oPEYfPOebfHMqju7hYPxf3c1Vi0wbV6XbICtPbgOvwBFF0Xtc2nLWXEf2UcuZa8FP8CiInKkWEGqeVseIJe-YCzo02GN1KfTDWZG1KcTCnv9O3bNLLz4?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>En bordure de la route 113, sur un coteau la suplombant, clairière dégagée et plate assez grande pour plusieurs tentes.<br>Point d'eau (décharge du Lac Renault) à 300 mètres.<br>Attacher vos sacs de nourriture suspendue au pont au dessus de la rivière.<br><br>Nous avons campé ici le 21 août 2020, en compagnie des 5 de Echo Explora<br><br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br>49.89924, -74.35392<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/verfciv21t1ic842ccs3fv0g44/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7tePEHywKKWb8vd_-bwpsiwSbCaJUafN6uw7AVdFvxoqHwfX9SQxVM3nWnoXNXhauzNjM7WnT7XCU8MQAz-8ivVL3kpbZuYXzWN_qIIQFWO72ddqaD5waMwW-_nJ4ahGS_QnvvIor_a_86BKQqZ-Y-4MlnyOrYLYCo3_4ATsXbdPa_N0ao7vqdsbiwSUYzB_uP?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qdit559l18oqntccfi5lb2k3ss/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7ZT7U7FVfDmxeVslSwrf8EraYSNhEyr-SVuGsAKJFxI5cFuKrrHz3Yse7M83wN4RcH39_3IHbrI73AkiAaTHmhk_U7tg1fr2urZCyzyE0wHhqyFBZUwTvzHzwUQC1J_Z7ist6GR62RB_2znpNiCP9tutBFy5FUm1O1J0FJNafTnPboRI6F4FxqEBbjHcZDOV73?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rdhqk8cjl8s2o7u62deda6qtn0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4HpgWKP3yfuJywSVwSUZM9pMGmhRlmM1xA4N-VqYBLGDPtBWEugP-Zl0VBcMpdUvuhyuODmej4xNbFYBMKtJPW2tLvoUdVfzb1quUVi1VLCdDy_BeytrILAL9dMFOiayhWWc5jl1qLP9Z8Yu9JNgRUvHM5ydjRAKLXjY3KXI5C74_o7sBDZXBkn1UpMJXQ6XPD?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gq1jd6aqvjhsdpnaase3d6pt94/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4jANwL3Gl2XevYAFH5vvQ_uXShGktW2Hajh4ZxmcadcSJthoP5wAHGRSfnheXD3G_A44qasBUQUDkR-jQAdWkTaOP6JEs0JN0cPDq1QI9xEok1U--O22iT9S33mxzTCeBzBvjD-5FGBTIekcUAeZZG66ofdBimYjFV6zwTDOXMWBayxCU2hHHQqQFtmDQ1GFQJ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>En arrivant de Dégélis par le Petit Témis, la piste cyclable va longer la Rivière Madawaska en entrant à Edmunston. A cet endroit précis, vous trouverez une table de pique-nique, des arbres matures et suffisamment de gazon abrité des regards pour y monter votre tente pour la nuit. Un beau spot!<br>Site visité lors de notre passage à vélo le 7 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6p2ojp969jve2h21cuk8rmo2h4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4NSUlGkyQR9hMHYUncoFVSG1OoGvchv_bfjMLA4F3oh3sRLoUo6U-IUASvdc17WNr7I1ZCcTCswNWlW0NquslHAeyP2O1GCynMf1_c65S6DWcCBBJMMu3GNp1m-IC0TZ8KHWu_qukv0AY32k1dUlqVOPm-l0Q2paPQF0QnbnlTXhhYTxStQREvGRA9D-gnCpC4?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Beau spot avec verdure et terrain plat, en bordure de la petite rivière des Commissaires, juste un peu en retrait de la route 155.<br>Site visité lors de notre passage à vélo le 25 juin 2021.Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br><br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ramjjvt1ednuhhr38trthu9p9o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6mAeCN0XlBGD7Uvn08vJf7yVIfbbG5X23f8ZNR0lqI5pJfnzW2j_IgRi9hLmGTVDHQ80fx63ww0rFa1Yrfv8aVravnam6GmEzbCCY4jZ0bSvdvLJULx_xDy5yxXWu-y_4AuBscRNNL5HAvWTSC_ds36b2wdz8ZJboMf_JbhNtrYz9MwfitMHeKCfdKJb4Sth7q?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/4f640e17nnb1njn4pkabr79ih8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7nyx1NnfVryNEclVuNguEmD4apEb-YxDZA31XXe5WjmnH7IA--CzVDJuWWAw5oqXNXf5pKhLgTXBLVxhxFIltyHVNSA1R7njxbbEf466JyC_1jBaWzlHSgvKk6gSYSkgGpC50sWbShEkFM7rRIoGniliHl7yq4j4vXZJKvDueMZPYnF45XimXMWdRg1gtIjGVA?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sur une portion de l'ancienne route, où coule un ruisseau tonitruant, beau spot pour diner ou pour camper. Site visité lors de notre tour du Nouveau-Brunswick, le 12 juillet 2021<br><br>Site visité lors de notre passage à vélo le 25 juin 2021.Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/lgvnv4scdqbc1cpcr55kngbdpo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet71bZgd8fyK2hlFkYbEXtF6Euf9_7NGrGgSAzjMLyQDfhbXv9RcpTZzoLdAq_iHxu1G01n5HmRHthNGD6bLbYP-1-mUVov92I49Lb3RhVqgykE1SFPue8VO-Inxc9eMotUVfJUQ4-nYwMxp-fhXCqlgwLuZLul-eJ6l7OTzuyEJ2GGJIusDoPxoQ2CVW1GDmeye?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Table à pique-nique abritée, face à la rivière sur l'ancienne route, face au pont détruit.  Eau de la rivière accessible, un peu d'espace pour monter vos tentes (gravier, asphalte, peu de verdure). Tranquille, en retrait de la route 790.    Site visité lors de notre passage à vélo le 15 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1agg0hfvch9ji14418f83daj8g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet79d-Bv_2pF1RHjoGz3j8QJZerXqKIAP_XXbn5LisNPbmkDi8SVcoPHj3q0wgttp-FOWAX8xZVxbt6rOF5zZqIIe68QR2VdGEyoiv3Qhv78a4BYDLyOJnHrHvyRwJmQQviB1YYzj_CG8vxSJR9dm9AlzUxrlJLkYRdefan2ipN1iknyeOsQbswnVYfPqs4NL-pL?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Il y a 2 excellents spots de camping sauvage dans le village de St-Georges!  Le premier est à l'arrière du magasin coop (c'est aussi l'Information touristique), qui est aménagé avec quelques tables, une toilette (demander la clé au magasin) et un joli sentier dans les marais.  Face à la rivière.  Simplement demander la permission de camper sur le site, avant de monter votre tente.      Site visité lors de notre passage à vélo le 14 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/u4ctiee5bv83a778jckp1v72vs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6MB_qTIUtdLTIQqMeTnf_-DoQqrhTiv-KP5vOj4LAIlBfRW8Aq6KXV9rT80H9jr3eNr1Gzg5vALY585qhOqIFCc0NtbmrpNDbupn-8oSE56bLuoXs_uvvfvTtg90fjXwHUjXt9hdNjrjaHuJ3xAYkXUsTW6Wjgy1DQj8yvU6dfCQMVsIneCrKm1v4NvpZl66Vo?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Il y a 2 excellents spots de camping sauvage dans le village de St-Georges! Le 2e  est adjacent aux chûtes, en retrait de Brunswick St. ; c'est un petit parc avec quelques tables de pique-nique.  Tout au fond, belle verdure et arbres matures permettent d'y monter votre tente à l'abri des regards et du bruit.  Site visité lors de notre passage à vélo le 14 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5b22l1k38tprb2dstd0djq44ag/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5Sbs8fHc67Q96OJTiFaiXknvwBzQj9Ge9d9iypOpnnAstMQ1349aAy0KMSm52ZNg5Grmlr5Bw4XpDQdG4I0eQenLjQZz-yLXiAhNdPYRInH-APo-v_dB6VxnrZnf9ctrpVFR5cTdKRMeopyfPhrrergGzPU5Jp6VdCqc7hkIxdO5dbS-WsiFIVTZp7NI3_IBct?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sur un beau terrain gazonné sur le bord de la rivière, avec des arbres matures, des tables de pique-nique, et même un gazebo en cas de pluie.   Site visité lors de notre passage à vélo le 16 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/f65h8qosc4gvbfcm70n4bbhj7o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5E2KO41rtCkdZHhVnNPhsPF8NjEeHmledIla3rRbp7lV9M9M91hODdQNSOeDfXZ5OuoXmt7WzHqWZOSXH7F9OUuJFmq_NxKXGJy0rBy7Vy5Bim4y3sAebbQlLOmPjLOs2ix00KkuF5hSGxvOr-6nkxXTg6VmEsjx5r4-DjFIb3JZdGbEXwBTvb4ljGSngSbPIf?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3ikkf8m5l0dnl3g3j70u7j6i8k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet79HCJnr1Cr3mFW7zt0pLCS2OfvgnyMW7Lrnu6EbrmGwSLQznhdlZS6PZVzUel-I300uMIDT9rTlyHrZ19LT6VYP6Qdy--Ac3VRRtPXTky8x4UnABwVxQejyNTdesdd3TM_n4Lm-HdfeWYgoIrFVjRtMiCuaBTR7wayJF2Lit7IsLgS5SD44xiY4Y5L03-VAbh5?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Beau site, très facile à manquer, en haut de la piste cyclable, côté nord.<br>Aucun service, mais les toilettes ne sont vraiment pas loin (≈1 à 2 km) en direction de Granby. On peut percevoir le bruit de l'autoroute au loin, mais ce n'est pas très dérangeant.<br>Je n'ai vu aucun panneau d'interdiction.<br><br>J'ai campé là en juillet 2021, en route vers les Cantons-de-l'Est.<br>-Nicola, l'administrateur de la carte.<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/etpo4hf32edffn1cnst8t968d0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet79sMhkThgqOAdtNIVByldVh3kQ7nZ93-Ab6_uq1af59S3czizosyWQA-FjDCMJXhrSKzWAtxTMR7u37-qxSCDO8ATxyuF7JZOzEklmT5KPSY921q9XSdGmuXbze8C6Y6IcCtJiL0LeD31n1og9omdrga8jOZ5U7ZvDBIeKnHHPgIB7NLAH1jCTN-TR1N3wMgGs?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/klc4tahe1vb2lvun57sdi2ek5g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet44TGwNqEWg4aLNdgn1qASzCUGoPzMWk1zoR2f1zpNyWmkBTphdD9eoz4Gz8Nj7wh3MSNzUXZbfzuHdzfUvsGb_zMioZkQ5G2XkWKFjzdlD_L0YqE_8VehbWJ335upiKbZHi2T6jQ33dtXflqzhbETELF66r88Z3n5Ik3C7gmdtV16QnoOk1VpztoQ_hhkRFECe?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ktdfc7jce3f5krp0lqlrip10ns/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6tm4xgb6-MN2Tj64cTr9J9AJpUw_xhVRpSgZI92hMPMqHl9lQuJYramf4zoUvV_aeknkpFv2E6PTbr13nMV2ZT0--IA3AgMRFNQzPzR_fBY8_jGxBtZjP5mcflezkYM5EDu1skhR2Sde5R_ZoE9sGSs7H91SqlK7-X7O8TGso8RwLnZftL-poSdDZpeTwUxwI?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Il y a un lean to (abri 3 coté) sur le bord du parking de la montagne de marbre. Il y en aussi un 2 ei dans le bois (Voir photo), accessible par le parking, la rivieres est juste a coté pour filtrer de l'eau, Il y a aussi une toilette seche. Le parking est animer le jour, mais le soir ben tranquille. Pas de wifi, mais il y a du réseau cellulaire. pas de poubelle non plus.",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/imj8sb5utgm4pt59dvnm9947q0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4xNR-S7aUOmU7KKbVEgvM1DQP2Pah5YzuXyg4zTRqNUifl19zxW7TpvwBRKGVMOlX2KclxhLE3fVVA2WAfGUz25pe4NkMBsZGx_aji42Ov2kvBH0-hAQSMQNSWzX1kJt6XS2sZq-DUcs3l6MaMXiRkSkxZzeORfTEXCFxQkJkd7Ok_qU8At35ibsQ_cFe9B77G?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Je n'ai pas l'habitude de camper dans les parcs de village, mais j'ai tenté ma chance ici derrière ces arbres. Il y a manière de s'installer sans être trop visible, par contre la surface n'est pas plate à 100 %. Un samedi soir de juillet, c'était calme, mis à part un groupe de jeunes qui jouaient au basketball entre environ 21 h et 22 h. Il y a des toilettes sèches près de l'entrée du parc, mais pas d'eau.<br>Attention : le parc est officiellement fermé de nuit. Il faut donc être discret.<br><br>J'ai campé là en juillet 2021 sans problème.<br>-Nicola, l'administrateur de la carte.",
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
                "description": "<img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fk4o8h05a9c168btn6b8ugmmac/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6vy6JqsYgdaJ-35EN2y3PS-OR0HJ38PCh56t09ocKjjU3lh2xOiC5LvyhjKV8vKv0YR3W7UHEuLWN-FuuizZJxeNa0uATFz8SNQrBQ_o6syZfYnICQlTcAX_3L1SRaNKzy7lYyZfSOO3NM6wtO1LlmBqwnFt2refkkVOPpDNrmXCIASmNa-p3bQrh5tehfSLcY?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Site 5 étoiles près des cascades, en bas du sentier Tomifobia. Pas de toilettes, ni de poubelles. Il n'y a qu'un seul petit banc. Il y a juste assez d'espace pour installer sa tente et dormir paisiblement au son des cascades.<br>Officiellement, il est interdit de camper sur le bord de ce sentier.<br>Possibilité de se baigner, et de filtrer l'eau de la rivière.<br><br>J'ai campé ici sans problème en juillet 2021.<br>-Nicola, l'administrateur de la carte",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qn2lo2mge9f81snlvc2g538ppg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5xviOB1Za5z39jpHIT02YNz5_I34zOTGZ6pVooy0h7VHBKVkj7dJYOpLs4ycNcFfEiaHujHPJIryVxHpGApn795H1Lrwk4bQfsx1a8FmKYjhqEYM5kJhrxV4NI2YCCXRAm2Ch3hqNqyHvIe8KvjLOCZxlweESUteCHvWiwuw5BiEgYB4TkB_bqs064C7vyzAkl?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Site 5 étoiles isolé et à ma connaissance légal sur le bord des cascades / chutes de la rivière au Saumon. Aucun service, mais il y a une toilette sèche à quelques centaines de mètres au sud-est, au camping officiel pour les randonneurs.<br>Ici, on dort au son des cascades et il est possible de se baigner. Je n'ai pas vu personne de la nuit. Pas de réseau cellulaire.<br><br>Campé là en juillet 2021 et passé une très belle nuit.<br>-Nicola, l'administrateur de la carte<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/856ijg331mltkmh7s63cbncgvo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet52EwwXpbQ6XmMjreuG4ZD3Hraub_i2EQNC1qZa-TqS8-gbCyF5OXrZ747Pr0yqV9sATNYtCN9QCsE3vkFitkgip59tLUiM45LAazeUtfrUgUp51HrLrKVr-a30HVtXf1Dxs7UcYhwULUnCf8fJoeH_VKhwqD7AST4V_3XB54Ban7xBmkRXMUmbf59ktVwuU6Tk?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/f9tqipuk4fkk8hfinbfotq0hg4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6OA2kDzvGsql8pL0y9RdXx3UCRWqp0AmMwve8E4i5aRvGR8dDzL_mQ5HGiYAQboP4625LV4L_BYndiAJe87_esOf0c9XbFw3tY_j3-yQFwE9IY3lPdTkUt_rJ6T-t8eDkMySVDKjc6uR5aPxR5Peq_Pqg0AfyTEe6eREPUikioIPQzFltWU-EE04Zp8Pl33-FG?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ue9n5romj24h9jkpuee666k1v0/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet55ihSDnQT4Y6fJn9R-dtq0njMluVngCpVwquXB2_d5QPPT9mH0IJ8XCPrU46B3f-ij88zRbB5UUcoOZ9-tej488p3TXRpKNMjVUNdzGVJian9nk-M1Y9ql4Z5b-2Pbx7L3b_UwkglZUc79fg0a2k_OkfwjlTSUJ3xoMxWi1DRv54Ugdu5feCBw5IurtSShutCT?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte cycliste assez spacieuse avec de l'espace pour s'installer à l'abri du regards des automobilistes passant sur le chemin, et si les moustiques nous dérangent pas, à l'abri des utilisateurs de la piste cyclable aussi. Par contre, je n'ai pas vu de panneau d'interdiction, donc je ne me suis pas trop trop caché. Seuls quelques passants sympathiques sont venus durant l'heure du souper, et un couple fumant et écoutant de la musique à tue-tête sur leur cyclomoteur électrique, mais ils ne m'ont pas vraiment dérangé.<br>Toilettes sèches, poubelle et recyclage, tables, mais pas d'eau potable.<br><br>Campé là en juillet 2021 sans problème.<br>-Nicola, l'administrateur de la carte",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/phbk5vmthn64j8re7653lvjvvk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5XaD2np9CbFXq9yuS1qWpmdiRA0SyJHIaMKu-6anrujGj7fjTxsPZIzp3clRGKEL8weDaF4AjhjDQ63HI-RXzXNCpGSRGzfX68EW5B6MqpdCVgT2q7ctb0-qZhLiX77UK9AZ4KC-y1BBqcbX0KkQs14HapKyExx-FmhGgLocmFXcAHkWVO-Nuru049d0HPvCaQ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Site de dernier recours à déconseiller. Trop de moustiques, pas d'accès à l'eau (stagnante) de la rivière sans risque se casser les jambes, et surtout, juste en face d'une mine (de quartz?). Réveil brutal à l'aube, mais heureusement, la machinerie lourde est partie après 5 ou 10 longues minutes. C'était suivi par seulement du va-et-vient, mais au moins j'ai pu dormir. Pas vu de panneau d'interdiction.<br>Pas de services.<br><br>Campé là en juillet 2021.<br>-Nicola, l'administrateur de la carte.",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ev86deo49pndlk0rf585cgqrek/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6lx5YeEBeTZ7Fn_m2VJ4Br7EmKdUPQrhXn7OthYQvu9Xd5YuOJacwNFy6sfDpEVTVGIdhac6kt7EPQ71TuC-IHMUhqE1NcJ5wU5F8_baC7O8mLBU6a-HyyvwZ9DQKKaKY7_BVLh1Hl0cep-FBVumI3PeuSwNNJemSfKGOhWkXzUwQCmA6E8dJH0dXwBK2PPbpn?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Un superbe site de camping sauvage, sur un ancien phare aménagé en parc.  Au milieu des marais, tout près de la Baie de Fundy.  Site visité lors de notre passage à vélo le 18 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5uk5lkhoij64f6a3a7961a86e8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5hbM4e2fFVA2MmIeKVWoBFEV-2EegK40m5rogli5DUxPNlCsuRipO8hQBYlqYXLi08X7mFFIK__zHzfVp1M48YAseZEE63bNkcqpcERwXaBgRKGEbBqh1Tx4NSF4o5lHsK88M1LJKUiVeh7iYERuvOs3IbqrzrmkHdI1i1u-5uKa2spHjWrcsPW_jLL5tANCA7?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ji7e6sks0cqrj7assbbojvkalc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5ToJ57Yh22e0xgiYZuHlikdnPLtd0JMxDoygFFF5Sduzl0gw67cxfWS7gkbqzfIb5JzObE3XRKe-m0-5xJPcyGCXNrDnRDg80L7Lv8HQnFjcZh7QbNKRCI6KnN9L4K4EfpKYQhuv_KdeHcuoLBOScNKE1x09DQl3HkMa23DonzYcBzE-6TTTGfhFy7C3-QcyTb?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1jhr7l7000qmajqjiibfioovm4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5rxCMhp-4WVkDO_fzi2k-YvAo3BXM5BN45aFJiqvV_8xQuHlzgrKyOnn0OgXwjaIr_utRKH-60Lj9mShJXzLD8av55hhsG3fO8Im8hgf26GY3Uu12INtuEI08ekloPAom2_eq0lxLXxB5sM3eSiAcq8Ht3Nw_hkDTin67KauJjMO_eRwSPaB9nLHvX1EteoImt?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>En retrait de la piste cyclable, peu après avoir quitté Moncton et Dieppe en direction sud, cette halte cyclable dispose de tables de pique-nique, de toilette sèche, et de verdure suffisante pour y monter vos tentes. Pas d'eau courante, ,ais commerces à proximité Subway, Tim Horton, etc).  Moustiques présents, car voisin de la lagune en bordure de la rivière Petit Codiac.  Site assez joli et tranquille, néanmoins   Site visité lors de notre passage à vélo le 21 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ec13trppir69djv5240vggaihc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5UtnM1-7zuAZ85A3j_SXrKvbvQQSSgMEH7fjWnkBCIisYNpZh9dgsuhH5V_Tp2209SrdJpAGEspt6UdFiOE8xAh1_tmA8d9NOtmuVCiwVLf2a_V7sH2gyEm59X_0VedVrakwq2lEox1CinB1bUr110mmGxT0Z6T7QCXTKQhzQ1M55TKinhSEeg7YSWR0sxVnNp?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7o9rdih8q70ob5908f438v7qak/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet43MXfQfiwtAt51zh1GeeI1T-UPc_QQNxm-Kl-E6JBvW61KO5gvAv5Ys5jaynudzQ8FrItc-X4K7FKxc5_WVMMPv0ynqQjpa3vCF3DPrfm3prYTxf-_ZljGn0CRGecRAM6sMVP_jjxavLMeOm2wQbqVGtAgC_3Eejsjut5WvHlUfW4JrzPnGU0jIYLIM_3rucVD?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/obobcrkfng63aos577h9p892ok/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5WysnIJZZZB_S6XQ-vnLHTUvbai4FQQzMVb-1nC3k6hfdhT_6M6QoJQFbWEOlS_yGchgOwKAonXMdJ2NHInIr90sDf30-MoDGjM-pW6no-_DyVMp24Jo5l34SSYvLm8vDzP4ArBwYGcbtgamVoS8r1gPx6FQKh38cAt9sYAvy-M3D56DjndJTAjJSimm9KY1yT?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Plusieurs beaux emplacements avec accès à la rivière. Les chemins sont accidentés dans ce coin et prisés des quads et autres 4X4. Le spot commence à être connu mais tranquille et sympathique malgré tout. J'ai passé 2 nuits, soit un vendredi et samedi soir 17-18 juillet 2021. Possibilité de baignade et de faire un feu de camp. Guillaume F.",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/keil11hq4174rpcukb12lva5fo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5Sux9zSRbx4FidayO2T8uw6zyI1CALcD6fOQxx58DaTf-SrNibPyTxn4QSjJ1AZVF_9rTy_EAUfg2cnzaz2YUPebM5IoMVyCCbQAOnIm3FxM8JC7R9UDBfR10v5M3721S8T01geTSBlokK0h3uDD729tZfstNo0sAeNyd5bBT0tecjgLRvol2Yyr6dLnzQZSDi?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Pas d'eau - pas de toilette<br>Blocs sanitaires disponibles entre 10h et 19h à la plage de la grande échouerie à quelques km au nord, ainsi que près du port de Grande Entrée.<br>Plage bien à l'abri du vent ouest ou nord<br>Juste assez d'espace pour une tente au-dessus de la ligne de marée.<br>Accès par le chemin du Bassin Est<br>Plage connue mais relativement peu fréquentée (en pleine saison touristique, on n'a vu personne entre 20h et 8h du matin).",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/iq616ekmtk190m1f30ands5cf8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6cN4gegbnmEtld1ZLEYoQ0ncSfJdBS4VZw8l_uJgCS9VIST1HPFuo5QY0soeAUHE52-JxdgF-mM9Gw10AQUavWBM21oMcqFqSj6JlH_P1K40QURJ8j2ZnA-RPDhSh9Hl0B76tYMB7pukmxEtX7cEUac5JMnydoMHdV1DrOPemCab-cKyIWdtIqUxcBBfgFwzM?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Porte en métal avec un cadenas rouillé sur le côté Sud du Petit Train du Nord. La clôture juste à côté de la porte est enlevée et on peut y passer facilement avec les vélos. Une belle plage de sable à côté du lac et plein d'espace pour des tentes.<br><br>*****<br><br>Couché là le 20 août 2020. Vraiment un beau spot, tranquille et belle baignade dans le petit lac. Update avec photo.<br><br>*****<br><br>Couché là en 2021, exactement comme décrit. Un peu trop près de la route, on entend les voitures, mais avec des bouchons c'est correct. Endroit magnifique. Attention, cet endroit est sur un terrain privé, mais aucune maison dans les environs. Soyez discrets! :)<br>- admin",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vv7or3n3jjs2ur602r7ff64gp8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7Rb9OStxEQjIbK6OMcsDZiGaEjZ6kl5QPxkZzpxVdVBrCc1dItGA3oHhi7ObY-2lTgmQJ56wQdO-iYEQod731-mhBQwXUReoBLzcgM3-UrzbUF5YMpO2Xi3iJQKfsG3Ed4QapSb9micB75ECZBCnPFO_lRuSVXb4Qj12aBiFB7xX6c1aMHurZ4uURmealF0Cjk?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Très beau site avec toit, tables de picnic, bac de recyclage et poubelle. À l'entrée des sentiers des îles de Berthier.",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5emmh5lknu5o44cmc5rrsfklro/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet67Od7Bs-iA2t6yCT2scgAZoODc7kjKZQvC1yqxQSHImMHdPuu3bVDZyepPESZc9aNXFW56i1tWocVyGy2ueoSSKRHFdxHj_JymPcNkAEviKCFwMCXt3TjLCVZsy3SQWfrNtSjz9SntITRP3fYspQBeL3zBkJebxeUg4jMe4HZElJgyW8i7m-hFH5r266nWHHdL?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>J'ai passé une nuit de vendredi à samedi ici en aout 2022, sous les pins et au son des chutes (et des voisins). Aucune interdiction affichée. Pas d'eau potable. Toilette sèche « hors service » mais débarrée et assez propre à mon passage. Il y a des passants durant la journée (descente de kayaks et de tubes) mais sinon c'est plus tranquille quand on s'éloigne du stationnement. Accès facile à la rivière. Deux dépanneurs à proximité.<br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/i2k15ftqhbmh4n3ps2bktae5l4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet56ao3YYl8w1RaMgW390XB4NJLIc9beQXbQpVWkh2qfUQB_pdpofSQ78VdI5KuA9RvYalUz0neQHPeqQ0szMYXDMxWUG6cLAm6tchMJVDkcqduc2_Xe5n1_sDgkf-A-yPwhi0vT76h9aABQAKhof7iq6RYN3T3DRz_PywIpTyF7yobmRfLwv59-TAWy7X6DE2Bc?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3rpvh1jhi24rqdi9vcgbshdceg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4UyH1RCUjO6vf31X2XEQcSunFl7oqT_vBmoVQ0RV3yqcf33VApNmXVv8Qc2UvF0geQCMcpXrjtnBnoM6aLnMkgCboKYKdvxmskYbuuwFIb2t7-g_eZbhN9DXDwhUhgZzUXBHW_TwXturRT8_D30F0TTZMFMmmMcLpJ6F2PTNwPy3ebaBrag9yrq5zQLgAPGK1Q?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>À quelques pas de la piste cyclable, non accessible en voiture, il y a une halte cycliste sur le bord de l'eau. Je n'ai pas campé là, n'ayant pas vu l'emplacement sur la carte avant que j'étais déjà campé à la halte routière plus au sud.<br>Table à pique-nique. Pas de toilettes, ni d'eau potable, mais accès à la rivière. Un peu plus à l'est, un autre site, avec une grande table.<br>Pas de panneaux d'interdiction.<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/5mbeok0etbqbonj9thseh96u2c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4ZeOo1DSjcwUaLmcD1WaAnysTdbnVNrm3gBhISih2Qwv44Fa44wN2Ebj5WU97GXxDGdlhHyhijsfFLB5jnEbA5hF8gv03-pK4OcpRcSwKbugHLKQm6v8J6UwR3ra1y0eXtAIzYIqoVRNCKHbcCjuezJD5LZisuLg_HQOcDOB6mIrQIM0Ry6bHQxUm085WGXcJH?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/6o9j09gdn61jhhl1l3jci03bdo/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet62tM442VunGSA-QbRv0J7wTxPwkhvooaZTvrqBWVFu9uWowN_geGiUHA31m27Q_ek4PxuyXxeNaSnwWYKKmrWkg9OTASfGfVEYcDpDJXTba1L4kl2OFKYcJDCepKO7MDtLP34Uz4_KwJjsJqyoaCLSFELJwKuGhTDebN-uv6fjoYYDDxYc1HuYtw16bVV9SqTL?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Très bel endroit pour camper. Il y a plusieurs choix. Il y a l'emplacement principal, gazonné, tables à pique-nique, toilette sèche, entouré d'arbres, mais j'avais choisi lors de mes 2 passages en aout 2022 un petit emplacement sur le bord de l'eau près des rapides, immédiatement à l'est. Plus loin à l'est, il y a d'autres accès sous les arbres avec l'accès à l'eau aussi.<br>Lors de mon 2e passage un samedi soir, c'était assez achalandé. Mais bon, aucun panneau d'interdiction, et c'est un espace public.",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/pac2shf3shrk0ngs2fopg369dk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4QYHAdbB88_wIHiwB47w3hoRyb7OPrVt_Bd0TXn3XzzUb9TvzFLUCInRH3Ihn8Yh1IjcYUJOCuCMSBI5hzDytMo9aBbWPXtX3ODKt4XPYXNZpAdqSAfIi0yXh71vQsH5_OuqMHFvERdHpaEmc7APtxRG5mNJHHFDT9Y0BBWcMiJAhMLiTLlygo9ngVl6o7C5B1?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Campé là en juin 2022. Tranquille, puisque le stationnement principal est situé plus loin au nord. Quelques pêcheurs à mon passage. Aucun panneau d'interdiction. Pas de toilettes, pas d'eau potable, pas d'ombre!<br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3ssl7c6lpb7jsvjmp25h56juak/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet46NLuwApHQKmU8gTQ5t4tOmBEmT-mYhxxnApcBkO-1Uzb3DtevgR-wxXvFMWBV5C-zzlEE6x6X67LX_AuAknyAuMPmG5Ke6KFiOU9lX80B8CNySkEIgMAkKd62VR0xnyLQalgxebHUPfN6I4og98IRIZkxkBtnR7GguFWqSlzW4PB6C_f3yB2ZqCTxQzQ6H486?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rnn1jje19ulsjck9k5pcc27i3c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4TZPoU0sMGPHyhzbepp8oyLaA0dE2eRVnd0f4hK5scIMMmu38eLpR7-i3_RYJ4eCxc5nc_1YRHhHJeOzqJgF88eIy-XBzp_dOJoKKi8L4_KLpeLcotLVif5A8YCwc9nM_y-UxkYGRCryRiYX_tlyJUvvmIr0nl8eSSWoYb4Pe5OsI1njLVIWt4g5MXtnHhoCLt?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/b7n3d5k27l0tccpbn5mqe30jlk/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4SsWi02e7i5VGfgYbHxyxQtBwfnmJFE8tCTS7iMn4JpQ9g53EKgbrtVsPTtI-nppizlPxU_eXjAjW_T2vZWmq1fvRoXfpmcxZUxGX-Usw_yzPlrAz5TBUgwnZXMq8djaKMtsKtnBxzNCRIHzvv58cC1Toqep13H9NYB6GHRiuV-NuJLWMR0kBMFKDqX4Yz5OCXOMVOKRhGMf4MorA83CwiyVUhIn1InT8TWdqoUqJrAF4Y7A?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Joli spot de fin de journée, en bordure de Route Verte #2, entre St-Valentin et St-Blaise.<br><br>Il s'agit d'un parc municipal au milieu des champs, à la croisée du Rang St-Joseph et Montée du Petit Rang; Quelques bancs, mais pas de table de pique-nique, PAS DE TOILETTE, et pas d'eau courante.<br><br>Prévoir vos réserves d'eau pour la nuit dans le village de St-Blaise si vous arrivez par le nord (8 km avant), ou dans le village de St-Valentin si vous arrivez par le sud.  (4 km avant)<br><br>Pion et Giguère, tandémistes et Cyclo-Voyageurs<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br>http://www.crazyguyonabike.com/rikimiki<br><br><img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/o6j4cs6b0gt5eu5hl4c4nlkris/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4UFQH2qWeAS_7IRqiVn7lqYG5aXmA2AiWe2Tx4PQszPdBd6M5BBXiN5rc3dKwi9G7FgXCPx6pPlfZPrwgYIr7PZajln43tkeo427dArNAei8OTvrPVAHcskmAudB93de-MY6Fj9RB2FF0xg7RT_BlFlHlq3IDCpbGxD7Lm4zniSog3FmckHdvba2WgByG5HoNy-AXmwkOzADv27-D1n4OlYmhrstM_5XMKIIwS_7tagecl4g?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/euctocd76sbtp7222n7f5ahdig/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5jMR6rt191dlXzJB8gk3bx06bSBzuGvSASUrfDfi7yLWPJFth-wJ5wPCYp6Rv7XEn5SqlcQKra_TFFLB1Mi4OPUEQaHe16aczCratniEcCOaJv_KY9bfRzKXQUEgyzTC-f2wRMGwdg08FSpH32GB9xYLVGMba_67TVJFRjazKQX2BCGs3oVtVyAgPYULWUgx3iHfJWHUJ1pM2hzW80D8QCs2196xXC2lLijHC1QSumm_fjJQ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Entrée sud-est du Parc, dans un  secteur peu fréquenté.  Verdure, tables de pique-nique, toilette sèche.  Pas d'eau, mais commerces de proximité à 500 mètres.  <br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/a75il2oqj3uc20img6g52dj3jg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5dxyBvw1k-Q8skj2ZNbqYgRVKF37Lz4I5ECsienWfzE-whFDU7TLXGbdgsFJ1sdQAwsr3EyhDbb8EDYCnpRgd4W5fIM_6ksyuXqGR-HiDni2Y9x9iKuowFCKHt-vhgjS5RCRHZJyoGq6JKULAjXFdgFMBRGldwWNBNwUdXtGpdg7YpVrNLZewy5uj3eg1x8p55gKpe_RQ6l3fQOV3aZiMNbugd81Sofh19jcUbmRU4VgOe4w?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/1e3irjsta4r1kujoub9plqnu7k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5golrihkGobxMqdETZUa5hDmt0VGBusRvj_hHO-ZECQGy9R4bJscn0Tzsk5H8-zDXZ2M1gDuo5VSnlKkZBYqqb_bjOfimwQVG62O_y1NGqEj5GSwXxGTd_uh4bKjwMHFMzS7IUYTncdCAaPvrQ2AahV-naGJXXHISxt_am5gWMthciL19-KcrnooZGvAY-LvjIbCXXS3dA7dZirYedWooBmcTkRmgPy1jX103gQ2NSoMesdA?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fs29lcin10fbiu6fg96nfn3h1o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet799dfZD88wM0zdu-ODfxQSEZNArLbNH7warvR6CwK07rIWcv7nG1KMIv69-JrPAlIS5mlMjipjO7AUT7PDkbyF_bzAq0A4XxQo1pIjABdllT9aMbt4NhEaUtB0qWnlwEo7MWjOMAeh_sXTIGFYeHGDoKhwYLSTjTQO8N9eZrpN1LBAntGSeuLwf-lEtCPS1F1qGccw7eTanRgc2xPnlldpb1hEeh71Lw1Z3UBR8wX0lIPj_A?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Halte cycliste quelques km au nord d'Acton Vale. Pas de toilettes ni d'eau potable. Possibilité pour une petite tente (2 places) d'être montée sous l'abri, sinon un peu plus de place à côté. Un beau mur pour protéger des vents de l'ouest! Eau potable et toilettes à Acton Vale, à côté de l'information touristique.<br>On entend un peu la circulation automobile de la R139, mais c'est juste assez loin pour pas que ça devienne trop incommodant.<br>Aucun panneau d'interdiction sur place, par contre, il y a des panneaux discrets aux intersections, donc techniquement, le camping est illégal sur la piste dans sa portion de la MRC d'Acton.<br>-admin",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/dpt8i2efamvq9pjnltb2ijdlag/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4fH3yshC7nrJgc0e8V5k-5IH5qOmCHmpJRLC8yoBXVocJxvo84tcb3_e0rr8zsCObCjBEytzbJsHvxWzKUGhoHgyuLl0tzA-gMb7WX-MnkY0hDM9PW6DlmFE4ohQmE1ycR1oBuNqXGZ0w2MINky3tKq7Uoad7J8Z-qCelbwTojkzmxFVNl04qvfmw039Q5G525aBVmwlkhantTPcSTIpzjBJwJHr8hVGNVKkJyq1qgBah2Vg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Alternative pas mal identique à la halte un peu plus au sud. Je n'ai pas campé là, ayant campé à la halte plus au sud.<br>Aucun panneau d'interdiction sur place, par contre, il y a des panneaux discrets aux intersections, donc techniquement, le camping est illégal sur la piste dans sa portion de la MRC d'Acton.",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/p7krji15d3sqbejscr0uaj8f2g/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5Z7Ebk3QkgYOxeovcvBUNKlWNC6ddG4l9lrfRDAt1hn9-Dw6i5wwTrHcYCCl9qBqLAjzcLJUcdVLBMiEsVqD4Ny1PSAy_PH_o3uDTtT-XO-7sX2MZhwR5RECLGTGk1mVh7Hx2Cu_xAn3iCtgRSpC_jCWswWLnKP-wVV9UCVNfff6A-jZ1hV07iwLHNa0XNHzgSwneDkpCKsmS7flQZtG06-YmeNf1rWwjb7-ek06JPc5nBEQ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Sûrement un bel endroit pour installer sa tente. Je n'ai vu aucun panneau d'interdiction. Je n'ai pas campé là puisque j'y suis passé en matinée, malheureusement!<br>Pas de toilettes. Belle rivière avec de l'eau à filtrer. Par contre, quand même près de Wickham et Drummondville, donc ça risque d'être achalandé. Il faut toutefois noter que cet endroit est à une bonne centaine de mètres de la halte cyclistes, donc pas visible de la piste.<br>-admin<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/41ev0bfgifn0ni2od8cqv7do94/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7PY3G5zFLzMEVS6sG-gOW1Mfb0-OzngBe9Scy28Q8RruiPaoxWQUTe1xvDAWivNa8QSsoLhz1jo-a-BD3XHaRubUkFgJOzAtlUeacdxpXDi_6AMxW2bYZEcM05cR09YiTfDbdptyowgHfgVAJvHIenO1KiimRQpd2OvTFU-qwzsPPu_AqJ6QiqC8fBihsCy6OyBifwHEX7X6PO5oZoPopd4KrHk164Hk6KaDDRigEKlESj5Q?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/a9ldlpauas7uutvc7la2kudecs/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6wiCHjdxzBx_7JPIyhTTNpFRjYzc-PRORbG0RJJf2QPGXpVY15g5_AJN2gj3_vnSvFgyL204berOO3EheqxTQwc9IEC4THTqTYKLuPCHCwFzaHMXzG5MFd5CQPvHNt_7ArzJGaRYA2zLhK0PV-ESlusLcDiOzaIJEE4pYjHJZSc-iseV29VlKXDY3WUM0ZI8QEJZjn36EvB2zuuPFLvnkc7IcN2-h7jrE7n0-mao3RwbKcxA?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>C'est bien le nom du ruisseau. Il y aurait probablement moyen d'y camper sans problème sur un des deux bords des ponts, à cette halte le long de cette courte mais bucolique piste cyclable qui mène au village de l'Avenir.<br>J'y suis passé, mais je n'y ai pas campé, puisque c'était l'après-midi. Aucune toilette, pas d'eau, mais une rivière si on a un filtre.<br>-admin<br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/pthqbn53rv9ooaqot75m9kbma4/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6plTFiMMnmjkksm8Xn5tuPQ9QNvCz0T6PdJUQ-6KOGTGpDaAgToNSahitawYFr_OJmfRjnVouMj8ilcawC4t55HPpxraI1-XlmrnbTc0aTCGu1J1OGS885bzUgP-NyPMDc48aiuSnm0oPwuJI54w9JLe-wd4wtQg3GF2MuNJz3CPeVxEDIekvOXNyslO8YY0E6mVV54gplOUa-Bv9K0rx3jlcuW1naRXBRHkM6nNvMycrf3w?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ivq4e6c93gku54evmv554t4m6c/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5S-2-mJoSyjMUqd4UtjMpov4hqH7JEUrEEmbAEqe5TiNSr1TsrQSzpo6Cn1n8zWgyd6ZJj7tyualjaxLEKewVF1uRI6BMOOnEtBCHLmd69tq48ASJgxAIuJMkiy_17JlQA8cFJpU-0PCvM0FIN1gxHZSaUv8uLD5EQ5HN6vJw7Jmn6Iiv2tvmXLMgU3XnIibFbaTKr7Y1A_Rdojo-rGGfzEmFsJQnDU1A7AVZRUIiKwpFpAw?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Aire de gazon en contrebas du pont couvert de Grand Remous. Accès à la plateforme d'observation par des escaliers. Possibilité de descendre le talus.<br><br>PAS de toilette sur place. Poubelle au niveau de la route. Accès à la rivière (attention au courant) pour la vaisselle ou se rincer. Dépanneur ouvert tôt et tard à quelques kilomètres sur la 117 (toilettes). Possibilité de se mettre à l'abri sous le pont.<br><br>Lieu très tranquille. Quelques habitations à proximité.<br><br>Circulation sur le pont interdite aux véhicules à moteur, passage possible à vélo [août 2023].<br><br>La rivière fait beaucoup de bruit<br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/a92psa22jcm009q88o2u8cf138/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet60t4JJHxh-KC6K-zCmTLi5fBIARBgCXl58k5nXAs5lkwIcc0MQVFnUjInZFBoMOfOho51li-E93E4CCqTzKfC5r09WgjAmI8xcZyEPsoKphQixvHJyxexzCib6PaDuO3mMI__GXAW7LTsgBF0b2nQ5h6X-f3M8SiHYXPqWfedChZARZ2c_kAwlXPkcxgPKdiwT-ml9RYajraFmuRJIajXwpPQ8b2oYmRGOPMaeeOlyLDuyYQ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/o002gleq25tv4aipbjsmo1fsec/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4BHXyD_g0P35JVoihsvSQBVrCZVKzOjtnUmY06yl3WsXoX3RjcogCZo3U5_nZJX4x1Jel1jayriq1fCaynmtiuWQlp-zLWeBR3HvqEWGIdIkd9aFxsQS0CxA1ni2I8xA-r8wzxrHg6laOZbcLxGzLbDcaHxEd1xpkpP3UpSPdDA04iBchj9QDu_uVpquapuVFAsTnYYZmEkU7rEWKfaGXk6fmp8h_fA_IF6gLHeULYHyYRmw?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7f32h9p227j5iggrf3v0vm6qlc/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5QHraQAXpzN4s9gDlolDH4Pyg02ro87_ZwXdk3veGzw4vL4JqG8gYyWPSj5szzx6ZXrWwXHHKz7nyDZsOpP_2GCSc__vxufLWxex36ckqybqJoH8j8XDRGkthhQ1Af2cfCws-ZFV_9iRflmOAqfYrP5L1nLls7Mrisuo77BVniiLYl_aIfQpf3du7ZVGNSV4Kg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>https://www.petit-temis.ca/fr/services-<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/rkeof4moip8chpjot5c32f0b48/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4SIENtmVmO-iNBZ_EFGNGPgchMpVnsjAx659ie-6VRb6sfoi4KRUDLf2_M9Oeuvb3pygk0NVU-LOeXJsSRYwwiIbPH6jhJq5Kc7WpDUQOPw9JvYedRvPUb4lB_1FAbT58D8doWy0SbuV7XQ9hyFMqggbDqJ11gCR_8vfKAKC_YUmVLQJhIxV6RPDBBV6JgGDeT?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/eq6nudh0vb4rdk998gnuqi9bh4/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6WzKTybeMZwIk6GPCo9uXvFDKMteImq0DRZ2h-ARQGxIZqxTSipPW6Ybah40KNnlUMPz4cTu-VqlKcPcyO1fd6fDXbyePc711aRMHIjRP9mq1iWimpXqQdna0XypJalSBnsQP4JTu0dugGilECcJAkFeN49pkiIXkJeYd8sk1sMtM8gT8Lb-jxqMAxJe8rcjHt?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>https://www.petit-temis.ca/fr/services-",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/qu4r3qja5872bj4eml8airh144/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5u56WVsuTx2RAXjClnIEatugZg6n1bvSUjxFAM6PrtoTOXcara4MzPBw8Crmq3HGIHmAori7xjRTlAeSvgwCZ22crhE6IWKggAeY-3Jg0lINswLzQZyD-A3mUp0sGzptW-cihGDzI9mH4WHlLA5SQiroSxtGrRSJBIUA82xc-uzbwu2RwvZJGioNtwaf7oVudp?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Beau secteur boisé sommairement aménagé.<br>Belle piste cyclable pour s'y rendre.<br>Chaque site comprend suffisamment d'espace pour 2-3 tentes. Toilette sèche à proximité. Pas d'eau courante.  Village assez loin.<br>Alentours marécageux, donc beaucoup de maringouins à la fin mai !<br>Quelques sites ont des bancs avec dossiers, mais pas de table de pique-nique.<br><br>Nous y avons campé avec bonheur le 23 mai 2020<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionMaritimes2020<br><br><img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/j8p1c59et675ibgoni53d13g30/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6oM93EWCsQwuG_i_4juDxtrPR68GvUUB7beGu22fAZf9_9Wrk4PR0_UhrAHsVfRhMRhLQqYNuYIicaj-2x5ue8OcfP2B70pvhjhX-dm8GkZsSRZE0IbvD6GfpUYBn5XxreLNi-jjGXL1LiFekvNM6U0pUcxcEpRG9FSxtfQrWJVgibMWbUy5ypljgpralconjW?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/9ko7mqo8qmc1uckkk54n1v8to8/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet72qjSr8gFmQ5RKTXyjhTHi8pdzfdDCMVFiG6mK1jn9MbldzEn43eGaT-_ftcWWGhDm-aDrc9NMhGKcPV_Hau7ywqzrlCg5b7jhphgt-7DjDExUFjrhyKewEJYzM3Igv68vPOl5yv2FiE4tG_hcW2oPHxPI_EESVZnY0OXMycqiU4__mMYD8BubZ8oLLe3v3DyZ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/g5qj37aq1usg6l21nspv6h4rqk/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5uNCHLmF4QjVqRX3G_ADBQ0Ju2micPHYvasDgNxjdKZGIFCKAtzkykzzkSJ56I2XxjR_iMl8O7oxAzedGU7rWy9HGDXogGjn_i3_Q77N6lkmbqeF9M7_qtO-eEZBcB7yEB1JrFahCfM5liMkq5YAQG4UALcmofIhXLySXRhTqjmfZq1A4V7uHJ7he_ZJPe4x--?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/93eafg2fvajjbvos4642q1n20o/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6xuopSG9Zrd7-LhMdDwgEVtFImpj33cfySb1P67qWAilFoKuHU0zGEoH2AW5HlXkyop2hVJKy4EEJ4GtI1JLggOLor-i8mCxzlew3InRHk1tSQADJvebWYh9o8Ji0eQlwtg9tEU9HhNWyPWPMR4lb9PAPzDv9SdpNzG9BNjyymOgFjn_pDBbqRasOVpRBlKCiD?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ntke6nfg57g92mohfn0dpmcc2s/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7d_dz025msHeqXZCk5scTaZ77Wn7NE4MMpV-5qGfdf3h1ng-KpdTiMv_-uZKIalpD2cAcoiRq1gwBb6TrhKvCC15QlgFkB_g_ZBDzeeb2NclvbH9AoY7ior0aUXkGc0BvuIZa70L1Lr46Hk8rGXUGY0fWsCnuOsnX1nqALFBO1nZIWgmOV0RfrABDOk8mSO042?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>.Beau secteur boisé, en bordure de la Route Verte #1;<br>Comprend suffisamment d'espace pour 2-3 tentes. Toilette sèche à proximité. Pas d'eau courante, mais rivière à proximité si vous avez un filtre.  Village assez loin.<br>Nous y avons campé avec bonheur le 5 octobre  2020, à notre dernier jour de voyage en 2020!, puis une nouvelle fois le 18 mai 2021<br>Normand Pion et Hélène Giguère<br>rikimiki@me.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/pmfj3cjuiv73ul5fu3rpjokfgg/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4q8jvOIEhBH3tiljnCQAIfq-vcoRn-2sRG2HwooFjW5au3qdXY3xxobe6A92FJBYzq_bF1MGlf1Oe4eUYwFjZ2lSPaL0qEYetrMjGQw9xxHQ8xy2-TLP4B72gZjwCPgVkg4wTE8gEbKUHBhf-DSb16TG0lEyJpLbl_HVEzFOEnja3Oge72wyaU9rUuGlUwlOB4?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/bb5iiepk892d5vikhe2uni1uro/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4uj3sEN60XxgC41l0uDBOH6d34RuN_Zg8TGMMP9O_72izaoqvQlTqi37jQVH9Lym3w1lNPRVUsYIXduM-fQjkYu5YaeA3HZzOu2H_t9eZIxM5z4QBcc09laDoTaRKP6qJ0tmmDkjZlkEXOkjEEcUsX79M-DN4HkQh7nMpa5AqLaDTZsEo69VDw3830G0PF_SPp?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Note de l'administrateur : je l'ai changé de catégorie puisque le camping semble officiellement permis aux haltes cyclistes dotées d'un bloc sanitaire. Ce n'est donc pas des sites non officiels.<br><br>Il y a enntre Fort Coulonge et Luskville dans le ¨Pontiac, environs 5 haltes cyclistes aménagées en bordure de la Route Verte #1,  avec tables de pique-nique, abri pour la pluie, toilette; Toutes super tranquilles!<br>Sites visités lors de notre passage à vélo le 3 octobre 2020.<br>Hélène and Normand<br>Sainte-Anne des Lacs, Québec - Canada<br>rikimiki@me.com<br>tandemetcie.comhttps://www.crazyguyonabike.com/doc/?o=1ni&doc_id=15622&v=26l<br>+<br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/",
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
                "description": "<img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/fu64drjjes3g99t8ifcsk5iq9s/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7f2M4W1hA9PbqLWDrotys6xf2wGBcAF5bUL-ZjI7Rj3uklx_Is0Us1v7-De8C4WZroEDdNA7uwVjaL25bilhDy9_nPkCGztzo09QswXbAYk_qPEaoZge1yoPK-k3ZzcHHafJjQh9o7TKBj-g7RppaAbQeGgUhsyix_I-JNWGRc81xMx85P_n38EJyrY5337XAQ?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : magnifique vue sur la baie et le village. J'y ai campé sur l'aller et le retour. Il y a un sentier aussi à partir du belvédère. Une boîte à don est laissée par l'église pour réparer le toit! Toilette sèche.<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/kaa1m5t8ve3rjf6to0sqdepb34/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6D3sdK0QAK4hFiVv7gMh9oGDgtePV6jgJnFOI2XJRd4bqCXNBeXQ__zeskayaXuTd3lYG_qc9fZfa6WFORhDvq-HZ4Sz1KO2CkF54EtF-6N6QnYIVLcqzgmVb4o-2XyvrRWFDe4EE4eflZr5FVFdFeh0o9LmPpclRN1AINeYJ1GwKakbGBnRkX9nITD-JSAuMY?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/2b79bvffnfughfvj6ls2b51kn0/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7RDrZ0fzYG0nNprUNdIsS7dx46T9nDqqHgly2DqUqgaunoqj_eZiK5RiRmgHnMhPDV74WVtZI5otj1NVAGolxakiYd9e6R1D8lqfV9ve-e-FOTpEOOwwo-9GpTtm7Yh-MMLpu52-qcvYqe9aQqPT7w5YwKSr8eHv5O22fz0oAsDAAEAE6BX-7nvyXxYMlq88-X?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Caroline septembre 2020 : Endroit officiel et gratuit. Pas de services, sauf une table de pique-nique, mais il y a un dépanneur au village. La vue est sublime, on se sent au bout du monde, et on l'est presque! l'endroit est assez vaseux alors j'ai monté ma tente sur la passerelle en bois qui permet de monter au bateau échoué.<br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ba3uhimjkmcru9s6kmhvrjrbuc/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4HrbtlMrw0-nmsE2gfRq328jDN90MevOgNeh9ji5jzX5iBYZmWIkNEc1lPddaThhZVDZ45t8CpJCHkKLLXze9yiG7dQvyxIgU_Y9JPbbofQmIK5eqB2g-LTBoxflAv0lhcm1t32JgZ2EJYDi3zgjFKd_4Flf1SIR31ZLCxTK37nBXDQFt6RbphN1X_x5fbVOav?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/tqeb7g47o4kqrn0cta687aolk8/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6egVxKj3QskUmuj7EK3KJAG2s_-FXWohYK31IICvPmnbA9k26zb9Tq0UcEK-NDyGgVHJRLs7_HT_vqm-oM3xyposdLAhuVvH6Q9kYtzjGl18NuPSuABfaDX9lCHC0YUZFC1SCPcGuOOhlW_JW3Cqqg7msYs_gn_oOOPiHfcyv6jBJf7VrfiNtBv7wr1a19cwLa?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/7vs0nsd3hsmaot7gbud79rt5oo/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5iSxuOwEZ219FckyCCbrlhSeqOv6cDooFbQ-1ZxRwkqG7q113LzWAUDILpRyJC3n59Q_159On_V9t9BiVB2WMsrK8gt1OmTaukrr57FOr8TLy2A_BpmkpDLDBAoaB8_UxRkJCLXcgGh-BsSvzMSJ64T3GyI7iKbn25MHoPI53AajP_s2AXHSk-TU7WUe7h0oqU?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Toilette, eau, table de picnic.",
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
                "description": "<img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/i5cvun4ml48id6op2aojpm5cms/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4edNs9ivUwU16xv3cty1peKVFAV7NT3uGrhBlnYB1iiutULp0tzuvK6cMlDa2Xcj1QrJ2_dsp2-58cGpnnxCbVnqIP2SmOpuFVUoT-XdZL-fF6KEgx2QaAOsUFoMjAwjRQQar8fczXnQIMQnY033vyXy9YV71xU1fbp_L5ulycOM0VGW1yhLegdmQ0FFA4D2QF?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Spécial pour les cyclos: seulement $15 par tente.  Avec douche, toilette, abri pour cuisiner au sec, tables de pique-nique, eau courante, électricité.  A 5 minutes de la Dune de Bouctouche, magnifique aménagement de 13 km au milieu des dunes. Nous avons dormi sur ce  site  lors de notre passage à vélo le 24 juillet 2021.<br>Pion et Giguère, cyclo-voyageurs<br>Laurentides, Québec, Canada<br>Normand_Pion@yahoo.ca<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite ...\"<br><br>http://www.crazyguyonabike.com/doc/Canada-tandemTour2021<br><br>http://www.crazyguyonabike.com/rikimiki<br><br>http://tandemetcie.com<br><br>https://www.facebook.com/groups/Normand.et.Helene.en.tandem/<br><br><img src=\"https://doc-0c-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/vhb0bcbbog1o0ca8ri62eqo8mo/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet49Gr_blTFATdbs4F19Nnc2P33iqvC787tjUo6Uq74kcCa0zZTqssaQbCrwuUKNrlFl3BpbavwDY_CPSx_M4L59jV-2-vFFVdAfd5kO98ntRC3zFrXsdH9UkuYXhtPkDoliLe4XGe-vVl9fX5sWa-2lC2Ow21yUyfp6nr8mewqnb_NV_uJ90gzNxMJtnIYn9X4h?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-08-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/n9b8ihk8r2o32u0ta6qo8tanjc/1692479857250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5XY7UWp2HzDP8RKPmIY73uI7dEn_66Rn7lJxZOsvGIF40bUpus_qfQastnnBJaxTi50wY4d2XPN2QpJ3kJNNFaC3IEbz95_OBF-vS0m4A0Kj_1Hs7ymygsG3YeIRcAbbmZv9S2LKym-oIO2vgCrSKmv88tszhuqiUwScOm0j8Xk39cyBnvPiAzaZjvE6eMI5GR?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://lh3.googleusercontent.com/umsh/AOq6mzoIo6sUhsS1hypSGNfamjEewEW5sDQOt2fulLqAhDlCH6I84W-AUz-Y4wEXcP33eSkMGpC5zDLFMlSPTUPCT-hYgNdQgXVsU-6ttNbV1ELIs-N8TASuguQdaZIfzVtPHFL_XAoZqRKcjYyszbQN0ixwBwkKwJdY5FB0LuD-MBgKMt2V79H9qx0UaKcerUPIQ6dsfHia-JAxJA94R_rggZCWXnba0uZAGrMtI4zUH64HD36nm4JNG5q9p070CB2DuwKFX_2MrhfXiPcHH1Tdzcpi14EFJHyS_kLKFoBner-WNmdcgQbYBjDMcVanC-p5HozzY03OUVRoihN_NQVQwMKk_Az6lKzAENPybRjO5c2-KRjn8alL_Ql7i2xs51ucfjbs6APbYpWK7qX_dMbZyyc9nV_zIpDhO0GJUty5KqgAM7tTQEKVBpmkiG8stmv4V5Fd04PUtQOnJZ97FtE26P8nn5sJkYBdN9_AQygu69hJU2ZOqj8LXGnyykpHNrsk4TcZAYsipfJj7eMjKJBQ5W2BtXCGuBlXsaIbPPuh5uhoT2LQ0UHzXXQApK2_wRO-wPq6xSlFA-T1lYnLtBvDA95ga15VmEe9hYWePMnup8Rzeqr69aWacQUR9gQfnsl5gyrWymOubH_OLUuOD_oTUEqww3SvP0zxsqjJYlfm6trepbbLr0dnmtYJUdvWa9mVDolvnSmaaNW1UZKjBIm3efsSQevsNP3dtEkzirrQtVE820MFcxRYz0rHaBbdokmr4iFSOmDXT9eSedY56lywfftMT9-cF9qf1in3hwfGoE_Fvf1Z-ySu9AQqufGtRBdl7UwOqGug2MkVe2j3Ov2SMgGcZoXdj3AzpN4nL0irVkN31ZiizhQ3_nuM4uNBkvNSn0VoCKWfR_84wQ9NqEhWPvBwHgjA_2J7qy61vNFHKbZo3kx-90RdyB6nPF2I52J6Q01LESnUeEpa2NQXsEZMy34-qNj5gZI4akeLH3UjV411BUsIb_WQt8uKbuHVAUipoYRipFltOcOj1cvFGCKPDwfE61my6t75xAssov4\" height=\"200\" width=\"100%\" /><br><br>Le camping est fermé mais le proprio accepte que l'on s'installe pour une nuit. Table à pique-nique, emplacement pour feu. Il y a un abri avec table et toilette sèche habituellement mais ce n'était pas encore ouvert il y a 2 semaines.<br>***<br>Ancien camping de Saint-Malachie. Il y a une halte vélo avec abris, tables toilette.<br><br><img src=\"https://doc-0s-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/gtck8s25prgdmfs8is298eg5tg/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4Dpu4fBSqbm4PA6qSdnn4b__xRx519d6Rtei9BcQsVdCJglkxLF906QGg541vDVuYZYwz5SRqLUsl3Y7hLdW7xquLZgrxCrr5gR5tGMmpWtFCh05hsy9kaPj2tlixEvvu3Bo1ZN-tyAmXDUGXNt6zCyDwrPA_sc2CBk4zmxS5YbPBFU-o7eoAq5BNOrODEKhY?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://lh3.googleusercontent.com/umsh/AOq6mzoeipWAxwsbPcGhhUzYrbnOlbHx2vdKRpOBfLVqMKvyQH_6eM9bJs_6GPoaL86f5UuDM6HPjUhcTNk_VNxfqYWR2RjiU6mR0JdoJobHrhYkwG_0TaXTHp_cs1bV2Sb-905iOqnEu59Y91AFtg69-CkNJVrQoyv41D42WD_kTgPTZN7BEG4dbw6QFJJkngPU9q7jsOeIu7QHEkA-VhYMKVs1h1PizFiAXLret2oeH6DxAANmKnoHmR7Dq6YZKRCJ4cOEYGVOHB-t_mxLcAOqNulbwxsgun9qsCsI7sByNZLjFUNsNScxgI1ubuwuvmbRTX5oLUaeKm03NYMWkGKK10CSuEzb4HXDhgdYjeA3kVZbiqgnTbFAxZz6ij7Gqpzy8Zoj8foKuge_bYPt-00jsZAap8K61p2bR3sAjkQpdxyXo56HOol9QwIGdr7RQd2uVG9gmsY7JcLvhnVyBs7hgs_4uPulKDMoU0EshVat8TDBPPtSFhJMiB2ZjngDJsUeMIlATFScxJ14jEDi7PFhabV1VOiX-0_tsoXD4WTQIdI5rZ6YECrtGjttfJr5wviBBXUW1BckszDWvAa1FYXaKQ\" height=\"200\" width=\"100%\" /><br><br>Pourvoirie Miquelon, sur la pointe du Lac Pusticamica, dans le hameau de Miquelon<br><br>Le propriétaire permet gentiment aux cyclo-voyageurs de camper une nuit sur un terrain sous les arbres, à proximité du lac.  Espace plat, suffisamment grand pour plusieurs tentes.<br>Nous avons campé ici avec la gang de Echo Explora le 22 août 2020.<br><br>Normand Pion y Hélène Giguère<br>rikimiki@me.com<br>\" ... Plus tu pédales moins vite, moins tu avances plus vite …\"<br>http://tandemetcie.com<br>http://www.crazyguyonabike.com/doc/NPionQuebecNord2020<br><br><img src=\"https://lh3.googleusercontent.com/umsh/AOq6mzoRrq_ehYRrfVHXnWEJcYKV3gPq3V6xlbbdjGkvfCH3VTmb__B9QDw5voTTrYtLCp__YHEkG8DsIYMgnbGkvOp7zI153MgwLHpsKICqiTgeJfzVMmHoeWSHVBNgqMw7vcYLiVt8K1qRUvQ5uiIF4AQWyz8mT32zmjiAhX9DdJzWR3NIgCtMr5eOtbjARznhAg54HC201AwtK6eFtiEPPj0I0lCfE0JK_iaulWH6ovQdl9MxnXIZvpJPC1VPAvWIyfv1EtXoHjHa5wXrTk7M13tzGbUVI_mD5k3ARDMoQzAlap7U6-4J4sJXyb2Z4KOXoDjGnpc6l5dM_OwHokQ0LQvhF1JMclQlwmPCBpPUHY4qfmdd4EwD4WQSejNrI4YiWHHrdVOISnjaoOe0_C_PzosV3adVGDnZil-eRCkQjCD21yH6jDqBdo6-V6HpodiYPbGQkYr3Qh1872I11QKPT4XwYSUxmjQOnEmTJkYnK0lPGcfuRfWTIwg2hYcp-MX22T4YgOLbSzh-03k9RBOOVsSfl15B-wl6QFjwSMKzh1OXdsIl4_zH5MZxMtJLB00NxkwHtpvzwqr-vOo4HiXt\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://lh3.googleusercontent.com/umsh/AOq6mzqdY2h5uydpvQradFk4EPLIOlPJTa6-U0r7z8LHJRPzbORkk_p_oJOSKHsW4P3mx982BcE9RCqb39B1K5NsWuHzmm-8RpLa_8ySpqsDx2HG981Rqp0e5xdPsq_Us4iP3JVq4IFUg2-DlfQITLRbHtTn9awbDuI4BbCA_tYt7AG9TFHM2wng2bJRdi5Z_iV1ONsOHbam7Vi0Pi5WgiznceMvnehLK43O46O2C7AmnG5mZgr_Ybn6-J4lO9kh2MJHMMnASmHfvY4AuiCEVWRNklj02d224mKefUUT6prbWao5SK0FtMuXNZHiW1qs1mEIiOXvx8rdUBksFnalBwV6loxFIyQwNd1XNdADogT775jy-uEkR9kpbXQSVpJPHmRKYdYJ3xgEBgxscTRHedTfk1jhlzQucGMDf29QwZnotIEhwWcFiXyNIawQvDZXaYxD04sYwcgbzQu3r06dYq6xXx-uqUWBeuC8fcMvn1GQWJVQYKw1AGLVkJ1HTdlOevyP2EFnJLLLbI3g2r1JnwoWvA2fx-hWxuP_wr-Z2oosqpe9XZXfmHcuwgmHnnvBpdZYznCJ9VMxMSOgXTk73z2pTg\" height=\"200\" width=\"100%\" />",
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
                "description": "<img src=\"https://lh3.googleusercontent.com/umsh/AOq6mzqhqurkGfpKXlb6ttxbduRc01dsugygkFOs-m1rjxDJyHX3E3AA8bXRYUiKf5ElOjd_zw4_x9EhwCuO7ApPTM55Dvgyqx8HGYUKbzQwYwKdVHetOPSqRA0Va6tR9GJU0XhMPB-Wkg3UNIfPreyqPQmYXyI69JtetUHDuf3EXKHxTCVQIrC1VaP1ff5G6kVJSKYtql2UTlU2CttbPfJOVvAUa4L-8fwKcVcJ3pUx0d6PKLUthZICWdm_03zwxtss-M5qHWO_dcBuHL4rc92M1SZb27Z6i-YH3g_YCA-8HWDBPO5qeqvz2f3Of0Kvk_sBVzpvx33eWo5-BzgLzVQnAcwRRcOF5yMz77dblnnymE11EO2em7w_QlxVseJ3PsNPDAcPzGqh5mgah8bRYP6F4c9ZEZrVIx1Q1kSyItlVGS0H3TuAHdUY86CM9DqZl1bERqaiWbeVo_hQAdHsFMBukR-eep3MOjuSHiQPxU_SVWC3xxo6xy6JmwK7gFJYaM_8irvgG8QhgA5eRxHeO7NBeNse78CXkeF4aj3Q0FpQsHeZA6TI8xI5Q27QJ00hdDlbG48uqhDHnt4Pg7y8kylOpQ\" height=\"200\" width=\"100%\" /><br><br>812 rue Albert-Leal, McMasterville. <br>Contactez nous par notre page Facebook.<br>Bienvenues cyclotouristes! Résidence avec piscine, spa, douche, garage pour ranger les vélos, cabane pouvant coucher 4 personnes, terrain pouvant accueillir tente et bien sûr eau et hospitalité!",
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
                "description": "<img src=\"https://doc-00-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/blu8ubnpjn2a3vog92eehh3rho/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5qgSt5dngZoVPm6av5fFDx39_eIEcNwq0iKpgwPEdHnUYFKgdGKwm7rg7oD0h-Dom2u0Q0rACildBCgbJuI7eNhjdV2RJVuWfuYlKzOcwXEd4y67_JptmeGxzqtfyJLfLxkm7_5xIKmAN3ub6G8V04Dk_aIvnupMXkyOt7zdHl70domfvgtQ1GwFMAOisBUd8?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Voir image.",
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
                "description": "<img src=\"https://doc-0g-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/p239qcco78k5mgg4uiglstu4dc/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6J-k7I7FWEJJPwgkOHhBghW7amipSc0GGVc1yJTZ_Pp82e2NGjiCHBVH78entLU4BDIDSU_2A62CIf4xQStJ_MPhiBqDPK7a8q_Ttrsbh__C80eoMhQg-uTh8Vt2trIUQJFV-V2TBsVxdxaK2_kPbnYkMpRkdV9Dl8fsU0q_Yq3OIGtjXlrWYlGzLgJuFIzg-7?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>La ville de Saint-Paul-D'Abbotsford offre depuis 2020 des plaques de bois pour les cyclotouristes qui veulent y installer leur tente. En 2020, le projet avait été reporté, mais je crois que les plaques sont installés maintenant. Le parc est bien équipé pour le camping (point d'eau, toilettes, abri avec tables) et le dépanneur est juste sur la rue principale. Un bel endroit!",
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
                "description": "<img src=\"https://doc-0o-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/ehcki0nf4da8ds4g0cav134c3k/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4hKA_UWM3ZPw1bzTkuZbWlQ33KeDJhpkpD5alI_aPvkvj1Mfa--Db5x0pNM4Gtvy-PTI_1jdH34W-ISc-NsgtWTT1ZF5jadawhmGlx57sE4uXp44PNpLNcl0Dlz0L540XGyECb8KS1p11jYPjkq_4VQeeBaSlYixtwUKTiwQcIcJtNPCRSOG7djdlDz9Z7RDM7sEP8c30RB4aYnQDh1p0lJWdZNSPxBpTudS0msnGkiPCaSA?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>On a un beau site de camping (sans services, sans traces svp), chez nous à St-Vallier dans Bellechasse, sur la route verte. Site privé, ombragé, tranquilité assurée, toilette sèche, rond de feu, plage sur le fleuve et en bonus très peu ou pas de moustique!<br><br><img src=\"https://doc-04-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/dduvo9l1eve7e1tg7ddvrln6no/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet5F0CduDDFdJ5oca-rf7aT50iu-YRnnjLDMo75qIR-7SmEeNOtodUeO7v1lzM3at1IWamjJtLLmOXkTImsn5Q6GFHTZt1EUfgvMUPRTOezOrSOYF9ubw6nrs98ubqoRf43K1VSkyX9yX-ibs-45WmdkEbT6mOzdxAFsNCPaK4XB7-fC3Im2yKnVz1Tpv_HWQaBufEwXoHEFitgmEuEF6pop5GLeSAbvGeB0WbHCkrKx22RyVw?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/p8nj894c1njf77rptj2noao86o/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet4XcS2kLaoMHVsNPwZdQ_1gb3ptHagOJuVK-e4HzH1znYrY17lx_Bv4vgZGaHbUKtqIwSVw3PMT-PUeWb0TK9MP_g8d1enk-5QHl1Ci60c8rzfxBGGbs1FXKpM7Xsn7TEyhKSvyPln2e6oz2dpI6e9hM1JKL9Az-wOQF36xGf6wUS-7SIdb1m9TDDSyBXDMDZ8bBlwffnk5ipPuXK4yEO-NZLaYUYyRsWTgH0xBtI0nOt6gxg?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-0k-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/584d601anak5htoit1pnkk1fe8/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet57GouhvW9GFwGBSRUz1iQ6vm7bWEtJlgAUmPALT-KSCNoLsQNfSG98EW2_i6UkjJkt2Y6pcKhDT2dpztvgbhQMVj4JdzjPjSctvoDogL6xJWvkN9AQ0BU0r9xPOeagmkoxqVpcu6AmkkRUfO-ZWNl9FG_EYnPI5i1BuiMGet1VJtBSyxEvz5Xg1x2bkuvQbLpty6AS9dVCrfuZ8JIaC2t11IEGfA7sgH7cKLwMZEnTMPO-qw?session=0&fife\" height=\"200\" width=\"100%\" /><br><br><img src=\"https://doc-14-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/3gd2p2agra5qda5knalqlcc77s/1692480156250/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet7X6aY3533_TcJ5WyNu_fEcCRjWUqifCPJXdrj-Tux7Ks1-L43gaHZGg6JSWrdC0Go_3pGkfXND6fidv1ZJEbGT9gRgkl35-iVjza76e-yRaBSn7GPaln7ENRbBN0S7IAK2A6Tr83mmH8BnsgeFkFPu17gsNm48SSVNd-xdnOmR3jFCQampsPAb9yGVhqgIyetj0KVzHzOeINA-sLKgVKS0poNEcEHw2gsJV2db7unZ0E_56Q?session=0&fife\" height=\"200\" width=\"100%\" />",
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
                "type": "autre",
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
                "type": "autre",
                "description": "<img src=\"https://doc-10-bs-mymaps.googleusercontent.com/untrusted/hostedimage/vq0gjqshd206tslpv4624emae4/eh17fgvvkrne73ohi50nqoaadk/1691979181750/6AkfITAxHUEmmDX-OBtDbQQBk2PYpULQ/11313125914491486929/5ACnmet6G1_ibxbDZ4llq4Ul-26aYoKuJHqMwGP8CQFLpidIqdbgFILDX64M4sXs4DXs7Fexg7tbUaD9eAaYQV4JfBQwn7HbIt6DrzYFZ8CB92it4plVZhcbMI3tJxcS0GXxkRfVLvq9s7HcyXV6hfBOSNlsfeqywv9wOfk1B1PYyjeHRH22fHGZa8Gv5KTlzxfsUc-aV?session=0&fife\" height=\"200\" width=\"100%\" /><br><br>Chambre et dortoir, cuisine communautaire, possibilité de faire son lavage (demander à l'hôte). Hôtes très sympathiques. Odeur de moisi au dortoir.",
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
                "type": "autre",
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
                "type": "autre",
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
                "type": "autre",
                "description": "Douches à l'intérieur du bloc sanitaire derrière le resto Petit Taco. Utile quand on voyage en mode camping sauvage.<br>Utilisé en 2021.<br>https://ioverlander.com/places/95188-shower<br>-admin",
                "name": "Douche"
            },
            "type": "Feature"
        }
]

module.exports = {non_officiels, officiels, proprios, autres}