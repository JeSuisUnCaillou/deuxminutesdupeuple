(function(e){function t(t){for(var s,a,o=t[0],u=t[1],l=t[2],c=0,p=[];c<o.length;c++)a=o[c],r[a]&&p.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,o=1;o<i.length;o++){var u=i[o];0!==r[u]&&(s=!1)}s&&(n.splice(t--,1),e=a(a.s=i[0]))}return e}var s={},r={app:0},n=[];function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=s,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/deuxminutesdupeuple/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=u;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0085":function(e,t,i){},"29bc":function(e,t,i){"use strict";var s=i("de31"),r=i.n(s);r.a},"2c11":function(e,t,i){"use strict";var s=i("d1aa"),r=i.n(s);r.a},"2f98":function(e,t,i){"use strict";var s=i("0085"),r=i.n(s);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],a=(i("5c0b"),i("2877")),o={},u=Object(a["a"])(o,r,n,!1,null,null,null),l=u.exports,d=i("8c4f"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("side-panel"),i("audio-player",{attrs:{episodeId:e.episodeId}})],1)},p=[],m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"audio-player"},[i("episodes",{ref:"episodes",staticClass:"bot-marged",attrs:{currentEpisode:e.currentEpisode},on:{selectEpisode:e.selectEpisode}}),i("div",{staticClass:"fixed"},[i("div",{staticClass:"shadow"}),i("audio-controls",{attrs:{episode:e.currentEpisode},on:{next:e.next,previous:e.previous}})],1)],1)},h=[],f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"top"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],ref:"filter",staticClass:"filter",attrs:{placeholder:"Filtrer les épisodes"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}}),i("div",{staticClass:"icon-search",on:{click:e.searchEvent}},[i("svg",{directives:[{name:"show",rawName:"v-show",value:0===e.filter.length,expression:"filter.length === 0"}],staticStyle:{"margin-right":"0px"},attrs:{"aria-hidden":"true",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"black",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}})]),i("svg",{directives:[{name:"show",rawName:"v-show",value:e.filter.length>0,expression:"filter.length > 0"}],staticStyle:{"margin-right":"5px"},attrs:{"aria-hidden":"true",viewBox:"0 0 352 512"}},[i("path",{attrs:{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}})])])]),i("ul",{staticClass:"episodes"},e._l(e.filteredEpisodes,function(t,s){return i("li",{key:t.id,ref:t.id,refInFor:!0,staticClass:"episode",attrs:{"data-pair":s%2===0,"data-current":t===e.currentEpisode,id:t.id},on:{click:function(i){return e.addEpisode(t,!0)}}},[e._v("\n      "+e._s(t.name)+"\n      "),t.category?i("span",{staticClass:"category"},[e._v(e._s(t.category))]):e._e()])}),0),0===e.filteredEpisodes.length?i("div",{staticClass:"no-episodes"},[e._v("\n    Aucun épisode trouvé."),i("br"),e._v("\n    Veuillez vider le filtre pour continuer.\n  ")]):e._e()])},v=[],g=(i("7f7f"),i("7514"),function(e){var t=document.getElementById(e).offsetTop,i=window.innerHeight-45-145,s=46;window.scrollTo(0,t-i/2-s/2)}),b=(i("4917"),i("a481"),["2000 licenciements locaux (Columbo du peuple)","Abonnement au magazine (Vente par téléphone)","Abonnement au service de livraison (Vente par téléphone)","Accordéon au boulot","Accueillir les JO","Achat d'un Musicbox","Acte de succession (Columbo du peuple)","Agence de pub","Aiguisage de couteaux (Vente par téléphone)","Albert Einstein","Alcool, drogue ou quelque chose","Aléas du direct","Alexandre consolé par Monsieur Bonheur","Ambiance détestable (La maison  Slangster)","Anniversaire du patron","Annonce avec bonne humeur (Ca se dispute)","Annonceur embêtant le perchiste (Ca se dispute)","Appel à 7h du matin","Appel à toute heure (Urgences du peuple)","Appel au directeur du FBI (X-files du peuple)","Approche des côtes américaines (Jacques Cartier)","Arthur chanteur","Arthur chanteur - le retour","Artistes amateurs","Artistes face aux fans","Assurance automobile (Vente par téléphone)","Attente de l'escouade des artificiers (Série policière)","Audition d'un saxophoniste-chanteur","Audition de Robert Vol.1","Audition de Robert Vol.2","Auto-immolation (X-files du peuple)","Autopsie (X-files du peuple)","Autopsie","Autoradio","Avalanche","Avant braquage de banque","Avion pour un congrès","Avocats aux toilettes","Avoir sa propre entreprise","Bain de champagne (Columbo du peuple)","Bar d'extra-terrestres (X-files du peuple)","Bichdui VS Bouchkui (Informations quiz)","Bidru VS Drubi (Informations quiz)","Billet de loterie gagnant (Columbo du peuple)","Bonbons super-pétouche","Bordua VS Dubois (Informations quiz)","Bouche sans sourire (X-files du peuple)","Bouillon de culture","Boutique HiFi-vidéo-informatique","Boutique New Age","Brian de Palma","Bug de l'an 2000","C'est beau","C'est belle une fille","C'est Fabrice","C'est la vie","C'est le type qui sprrr (Star Trek du peuple)","C'est une autre journée","Ça va être ta fête","Ça va mal aller dans un instant (Columbo du peuple)","Cadavre décapité","Cadeau de Saint-Valentin","Caméraman viré","Cap droit devant (Jacques Cartier)","Carole au bout du fil","Caroline a rappelé","Carrière de chanteur","Cassette de répondeur","Cassette sur le chariot","Censure","Cette petite chose qui te sort du nez","Changement d'heure","Chanson romantique","Chanteur de grivois","Chantier de construction","Charlie et ses oeillères","Chaussures pour Nathalie","Chercher un copain","Chiasson VS Dupré (Informations quiz)","Chirurgie magique (Vente par téléphone)","Choc électrique sur le coude","Christopher amoché sur la plage","City Zoiseaux","Club vidéo (Vente par téléphone)","Cocktail avec un fournisseur","Comédies et dramatiques musicales (Cours de musique du peuple)","Comité de visionnage","Commande d'Airbus annulée (Columbo du peuple)","Commentaires de F1","Commentateurs de foot en retard","Concentration","Conférence pour désigner le président","Consultation d'avocats au cas ou","Consultation du répondeur","Consulter un psychologue de couple","Contourner la zone (Star Trek du peuple)","Contrat de rénovation (Vente par téléphone)","Contrats d'assurance (Vente par téléphone)","Contrôleur aérien","Conversation en taxi","Copie du testament de sa femme (Columbo du peuple)","Copine bizarre (Urgences du peuple)","Corps carbonisé dans une ferme","Corps dans le potager de la ferme","Corps dans une malle dans le jardin","Coucou Caroline","Cricket sauve le monde","Critique de journal","Culture","Dames de France Télécom","Dans le couloir","Dans un bistrot complètement saoul","Débarquement (Jacques Cartier)","Débranchement des facultés cervicales (Urgences du peuple)","Défaitisme","Défilé du 14 juillet","Déguiser en Robocop et Lewinsky","Demande d'emprunt à la banque","Départ de France (Jacques Cartier)","Déposer des brevets","Destin du mois","Détournement via Internet","Dictée de Bernard Pivot","Didier et le grand argentier","Dieu fait sa pub","Diner d'affaires","Discours présidentiel de Noël","Discussion de couple","Disque à domicile (Vente par téléphone)","Distraite par un doute","Distributeur médical","Don Juan","Dossiers mélangés (Urgences du peuple)","Dossiers secrets télévisés (X-files du peuple)","Douze opérations (Urgences du peuple)","Drague sur Internet","Duca VS Cadu (Informations quiz)","Dur-dur mon CD","Échasses et ballons remplis d'eau","Émotivité VS Raison","Employé à la sueur de mon front","Empreintes très relevées (Série policière)","Emprunter une agrafeuse","En panne à Halloween","Encercler le secteur","Enduire de marinade","Enfants abandonnés (Ca se dispute)","Enlèvement du fils Dupont","Enlever un morceau des intestins (Urgences du peuple)","Enregistrement de pub","Enterrement","Entretien d'embauche","Entretien d'embauche d'une femme","Entretien paysager (Vente par téléphone)","Envoyer en mission (Jacques cartier)","Espion à bord (Star Trek du peuple)","Et pourtant","Faire appel à un détective privé","Fan de Georges Biburli","Fanny et Pipi","Faut pas","Femme machiavélique (Columbo du peuple)","Femme partie avec une valise (Urgences du peuple)","Feuilleton américain","Film avec effets spéciaux (X-files du peuple)","Film catastrophe - Partie 1","Film catastrophe - Partie 2","Finale en musique jazz (Cours de musique du peuple)","Finales en chanson","Formules de politesse","Fréquence Bled","Fréquence en branle","Fréquence en foule","Fréquence solitaire","Gagner 12 millions","Gagner au loto","Gardien d'un condamné","Gardien de sécurité","Georges et Robert jouent au crocket (Columbo du peuple)","Georges, Robert et leur chanson (Columbo du peuple)","Gestion des stocks","Grand manitou","Gueule de bois","Héritage (La maison Slangster)","Heure de la retraite pour Étienne","Histoire américaine","Histoire de la langue française","Histoire sur répondeur","Historique des jeux vidéos","Hommage à Jacques Martin","Homme trompé","Hôpital complètement engorgé (Urgences du peuple)","Il ne fumait pas la pipe","Ils peuvent remettre leur pantalon (Urgences du peuple)","Infirmière favorite de Malcolm (Urgences du peuple)","Inspecteur de police","Inspiration","Interrogateur peu confiant (Série policière)","Interruptions de conversation","Interview d'un ministre","Interview de Bill Gates","Interview de criminels","Interview de Jeff Bretelles","Interview politique par Delarive","Interviewer interviewé","Introduction aux 2 minutes du peuple","Inventions","Invités divisés (Ca se dispute)","J'aime pas ça","J'me casse la gueule en direct","J'suis un raté","Jacques Cartier chez les Incas","Jamais touché un ordinateur","Je bricole","Je passe mon temps","Je t'aime, tu m'aimes","Jeu de phrases, jeu de nazes","Jeux vidéos en 3D","John Glen","Jouer aux médias (Série policière)","Journal télévisé","Jumeaux triplés (Ca se dispute)","Kerbout VS Berkout (Informations quiz)","L'accordéon (Cours de musique du peuple)","L'arnaque automobile","L'arrivée d'Internet","L'émotion dans les messages","L'ennui porte conseil","L'exorciste (La maison Slangster)","L'impresario","L'interphone","L'oiseau Sophie (Série policière)","L'orgue (Cours de musique du peuple)","La banque","La batterie (Cours de musique du peuple)","La contrebasse (Cours de musique du peuple)","La culture et vous","La fête de Noël","La fréquence du peuple","La fureur","La guitare (Cours de musique du peuple)","La messe","La modernisation","La musique japonaise (Cours de musique du peuple)","La potiche","La première d'un groupe","La radio à l'époque de la guerre","La rentrée des classes","La santé de nos parents","La science et vous - Annonceur sans assurance","La technologie","La télé en direct","La vie en sous-marin","La voix humaine (Cours de musique du peuple)","Laisser un message à la porte","Laps 2","Laver la vaisselle dans un bar","Le blues (Cours de musique du peuple)","Le CD","Le cinéma d'époque","Le gaffeur","Le langage des films américains","Le mari vient de sortir","Le métro","Le Morgan Show","Le nouveau des nouvelles","Le paradis","Le père Noël","Le petit menuisier moustachu (Vente par téléphone)","Le piano (Cours de musique du peuple)","Le président appelle le père Noël","Le producteur","Le psychiatre","Le psychologue","Le retour du courrier","Le réveil sonne tôt","Le temps des fêtes","Le type se retrouve dans le bar","Le VTT","Leçons de théâtre","Léon et Dieu","Léonard de Vinci","Les amateurs et les pros","Les appareils modernes","Les besoins du chien du voisin dans le jardin","Les cerveaux qui fleurissent","Les crottes de chien à Paris","Les cuivres (Cours de musique du peuple)","Les débuts","Les dérangeants Vol.1","Les dérangeants Vol.2","Les enfers","Les espaces verts","Les esprit-se-rencontrenttateurs","Les gens spéciaux (Ca se dispute)","Les gîtes","Les grosses têtes","Les imperfections surprises","Les mystères","Les ordures","Les p'tits trucs","Les percussions (Cours de musique du peuple)","Les petites bêtes","Les petites poussières dans le nombril","Les petits dauphins","Les petits dromadaires","Les petits esprits","Les petits hamsters","Les petits hippocampes","Les petits rodactiles","Les studios d'enregistrement (Cours de musique du peuple)","Les westerns","Licenciement","Lire le journal, c'est horrible","Logisexe","Louis XIV","Ludwig Von Beethoven","Ma petite scandinave","Ma voisine","Machine à café problématique","Madame tumeur et Monsieur cerveau (Urgences du peuple)","Madeleine ne boit que du thé (Columbo du peuple)","Maison à vendre (La maison Slangster)","Maîtriser le texte et le rythme","Malcolm fait des mots croisés (Urgences du peuple)","Manager de groupe","Manque de confiance en soi","Maria est la bonne femme","Marionnette électronique","Match de foot","Matelot jardinier (Columbo du peuple)","Matin difficile","Matin difficile putain !","Mauvaise nouvelle sur scène","Mauvaises nouvelles par téléphone","Meeting et 4 sièges en cuir","Melanum malin de type A (Urgences du peuple)","Menaces de l'Irak (Urgences du peuple)","Message sur internet","Meurtre très décidé (Columbo du peuple)","Meute de journalistes (Série policière)","Michael Jackson","Michel Nostradamus","Ministre avec l'avocat de Bardot","Mission à Disneyland","Monsieur et Madame Sète","Montrer son talent lors d'une soirée","Mort du chien","Morte dans le garage","Morte sur le piano","Musicien du roi","Musique d'ouverture plaisante (Star Trek du peuple)","Musique et audition","Naissance d'un groupe","Navette l'Intrépide","Négocier avec le Japon","Nettoyeur Super-Cleaner","Nez qui tombe (Série policière)","Nos amis les animaux","Nous irons dans la joie","Nouveau dossier du FBI (X-files du peuple)","Nouveau père","Nouveaux officiers du FBI","Nouvelle association (Columbo du peuple)","Nouvelle chaîne HiFi","Offrir des fleurs","Opération d'un ministre (Urgences du peuple)","Opération loupée (Urgences du peuple)","Opérations gratuites en cachette (Urgences du peuple)","Ordinateurs de la banque plantés","Par derrière","Parler à moitié (La maison Slangster)","Paroles et...","Partie de Monopoly","Partie de Scrabble","Partir un jour","Patient amputé des deux jambes (Urgences du peuple)","Patinage artistique","Patineuse russe disqualifiée","Perceuse un peu forcée","Perdu en forêt","Permis de porc (Série policière)","Petite maison perdue dans les bois (Columbo du peuple)","Petite partition d'un musicien","Photos pour passeports (X-files du peuple)","Pianiste à un doigt","Plaisir-Express","Plaques de cire","Pléonasmes","Poésie","Portable au théâtre","Portrait d'artiste","Possibilité d'être enceinte","Pouvoir suggestif (X-files du peuple)","Premier vol en avion","Premières visites (La maison Slangster)","Présentateur aux WC (Ca se dispute)","Présentation d'un artiste","Présentation des 2 minutes du peuple","Président des USA","Prêter 5000 balles à Paul (Urgences du peuple)","Prêts à taux élevés (Vente par téléphone)","Prix de mérites","Professionnel presse","Programme jeunesse","Psychologue déguisé en femme","Pub comparative","Pub dans laquelle je joue","Pub mal cadrée","Pub pour des vitamines","Quand je chante comme ça","Quatrième ouh là ! (Urgences du peuple)","Quelqu'un qui vous veut du bien","Questions-réponses","Radio associative","Radio avec Michel","Radio Poil d'Oreille","Réceptionniste dans un 5 étoiles","Recette du feuilleton","Recherche de Parlà (Série policière)","Réclamation à l'assurance","Reconstitution d'un visage","Rédacteur en chef","Règlement de comptes (Série policière)","Relations extra-conjugales","Remise des palmes","Rencontre d'un vieil ami","Rencontre de deux présidents opposés","Rendez-vous sur Internet","Rendre visite à l'hôpital","Rentrée du boulot","Répétition de théâtre","Répliques dans l'ordinateur","Répondeur à afficheur digital","Réponse d'experte en un clin d'oeil","Représentante en salle d'opération (Urgences du peuple)","Restaurant diététique","Restaurant pour la Saint-Valentin","Restauration de façade","Résultat des analyses (Urgences du peuple)","Retire l'affaire à cause du général (X-files du peuple)","Retraite au grand air (Columbo du peuple)","Réunion présidentielle sur les taxes","Réunion sur les portes","Rien ne va plus avec sa femme (Urgences du peuple)","Roger reçoit Caroline","Rupture sur solo de guitare","Salon funéraire","Sam revient passer le weekend (Columbo du peuple )","Scandale au gouvernement","Service impec'","Si jolie sérénade (Columbo du peuple)","Situation financière catastrophique","Situations gênantes","Ski","Snack-bar chez Léon","Solo de Jimmy Page","Sondage sur Noël","Sonde odyssée perdue","Sons Tchécoslovaques","Sophie Marceau chanteuse","Soudoiement","Spielberg et De Niro","Spock a des écouteurs (Star Trek du peuple)","Spock a un problème de volume (Star Trek du peuple)","Sports et loisirs","Stade de France","Station Mir","Succès mondial pour les chanteurs","Suicide à coups de claques (Columbo du peuple)","Super Chaussette FM","Super Sport Plus pour tous","Systèmes solaires","Table doute","Technologie musicale","Télé en fond sonore","Télé-Achats","Téléphone arabe","Thomas Edison","Tombé dans l'escalier","Toto le crétin","Toujours en train de boire","Tourner sans décor","Tout le monde s'en fout","Tout le monde se couche","Travailler comme espion","Trois premiers appels","Trompé avec un aspirateur","Trompé avec un fermier","Trouver le dossier avant que l'inspecteur n'arrive","Tumeur au cerveau (Urgences du Peuple)","Un cygne sur l'étang (La maison Slangster)","Un invité de Marc","Un jeune premier ministre","Un monde sans hypocrisie","Un mort par balle, un noyé (Série policière)","Un Noël dans tous les styles","Un vieil ami","Une dette c'est une dette","Une foule qui dégage","Une tradition des souvenirs","Vacances au Mexique","Vaisseau et demi (Star Trek du peuple)","Vaste opération en Russie","Vendeur de HiFi collant","Vendeur de voitures souriant","Vente d'encyclopédies (Vente par téléphone)","Vente de batterie de cuisine (Vente par téléphone)","Venu pour te voir","Victor Hugo","Vie en apesanteur","Vieillir de 60 ans","Vieux clichés de films d'horreur","Vincent plaqué par Jacinthe","Visite du neveu Nouveaune","Visite du patron (Columbo du peuple)","Visite inattendue","Visite indésirable","Vive l'amour","Voir Serge Lama après concert","Voiture impressionnante","Voix déguisée","Vous de rêvez plus","Vrais musiciens accoustiques","Yves gagne 10 000 francs (Columbo du peuple)","Zorro"]),C=function(e){var t=e.normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t=t.replace(/[()',.:;]/g,""),t=t.replace(/[ -]+/g,"-"),t.toLowerCase()},L={list:function(){var e=b.map(function(e){var t=null,i=e,s=e.match(/\((.+?)\)/);s&&(t=s[1],i=e.replace(/ \(.+?\)/,""));var r=C(e);return{id:r,name:i,fullname:e,category:t,path:"episodes/".concat(e,".mp3")}});return e}},y={name:"episodes",props:["currentEpisode"],data:function(){return{episodes:L.list(),filter:"",formerEpisodes:[]}},computed:{filteredEpisodes:function(){var e=this.filter.toLowerCase();return this.episodes.filter(function(t){return t.fullname.toLowerCase().indexOf(e)>-1})},routeId:function(){return this.$route.params.episodeId}},methods:{searchEvent:function(){this.filter.length>0?this.filter="":this.$refs.filter.focus()},initWithEpisodeId:function(e){var t=this.episodes.find(function(t){return t.id===e});t&&this.addEpisode(t)},addEpisode:function(e,t){this.selectEpisode(e,t),this.formerEpisodes.push(e)},selectEpisode:function(e,t){0!==this.filteredEpisodes.length&&(this.$emit("selectEpisode",e),t||setTimeout(function(){g(e.id)},0),this.$router.push({name:"episode",params:{episodeId:e.id}}),document.title="".concat(e.name," | Les deux minutes du peuple"))},next:function(e){if(e){var t=this.randomNext();this.formerEpisodes.push(t)}else if(this.currentEpisode){var i=this.filteredEpisodes.indexOf(this.currentEpisode),s=i+1;s>this.filteredEpisodes.length-1&&(s-=this.filteredEpisodes.length),this.addEpisode(this.filteredEpisodes[s])}else this.addEpisode(this.filteredEpisodes[0])},previous:function(e){if(e&&this.formerEpisodes.length>1||this.formerEpisodes.length>1)this.formerEpisodes.pop(),this.selectEpisode(this.formerEpisodes[this.formerEpisodes.length-1]);else if(this.currentEpisode){var t=this.filteredEpisodes.indexOf(this.currentEpisode),i=t-1;i<0&&(i=this.filteredEpisodes.length+i),this.selectEpisode(this.filteredEpisodes[i])}else this.selectEpisode(this.filteredEpisodes[this.filteredEpisodes.length-1])},randomNext:function(){var e=Math.floor(Math.random()*this.filteredEpisodes.length),t=this.filteredEpisodes[e];return this.selectEpisode(t),t}},mounted:function(){var e=this;this.$refs.filter.addEventListener("focus",function(t){e.$store.commit("enableKeyboardControls",!1)}),this.$refs.filter.addEventListener("focusout",function(t){e.$store.commit("enableKeyboardControls",!0)})},watch:{routeId:function(e){if(e!==this.currentEpisode.id){var t=this.episodes.find(function(t){return t.id===e});t&&this.selectEpisode(t)}}}},E=y,x=(i("2f98"),Object(a["a"])(E,f,v,!1,null,"3318cb01",null)),S=x.exports,q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"controls-container"},[i("div",{ref:"progress",staticClass:"progress",on:{click:e.goTo}},[i("div",{staticClass:"bar",style:{transform:"scaleX("+e.barWidth+")"}})]),i("div",{staticClass:"controls"},[i("audio",{ref:"audio",staticClass:"audio",attrs:{src:e.currentSrc}}),i("div",{staticClass:"top-infos"},[i("div",{staticClass:"time"},[e._v(e._s(e.fomattedCurrentTime))]),i("div",{staticClass:"name",on:{click:e.focus}},[e._v("\n        "+e._s(e.currentName)+"\n        "),e.currentCategory?i("span",{staticClass:"category"},[e._v(e._s(e.currentCategory))]):e._e()]),i("div",{staticClass:"time"},[e._v(e._s(e.fomattedDuration))])]),i("div",{staticClass:"buttons"},[i("button",{staticClass:"control toggleable",attrs:{"data-active":e.isRepeat},on:{click:e.toggleRepeat}},[i("svg",{attrs:{"aria-hidden":"true",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"white",d:"M481.162 164.326c19.478 25.678 30.997 57.709 30.836 92.388C511.61 340.638 442.361 408 358.436 408H176v64c-.001 10.683-12.949 16.021-20.485 8.485l-88-87.995c-4.686-4.686-4.687-12.284 0-16.971l88-88.005c7.58-7.58 20.485-2.14 20.485 8.485v64h182.668C415.933 360 464.06 313.154 464 255.889c-.023-22.372-7.149-43.111-19.237-60.082-3.431-4.817-2.962-11.387 1.223-15.564 8.269-8.255 13.592-13.545 17.137-17.104 5.131-5.152 13.645-4.605 18.039 1.187zM48 256.111C47.94 198.846 96.067 152 153.332 152H336v64c0 10.625 12.905 16.066 20.485 8.485l88-88.005c4.687-4.686 4.686-12.285 0-16.971l-88-87.995C348.949 23.979 336.001 29.317 336 40v64H153.564C69.639 104 .389 171.362.002 255.286c-.16 34.679 11.358 66.71 30.836 92.388 4.394 5.792 12.908 6.339 18.039 1.188 3.545-3.559 8.867-8.849 17.137-17.105 4.185-4.178 4.653-10.748 1.223-15.564-12.088-16.971-19.213-37.71-19.237-60.082zm179.263 43.416c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.9z"}})])]),i("button",{staticClass:"control",on:{click:e.previous}},[i("svg",{attrs:{"aria-hidden":"true",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"white",d:"M267.5 281.2l192 159.4c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6L267.5 232c-15.3 12.8-15.3 36.4 0 49.2zM464 130.3V382L313 256.6l151-126.3zM11.5 281.2l192 159.4c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6L11.5 232c-15.3 12.8-15.3 36.4 0 49.2zM208 130.3V382L57 256.6l151-126.3z"}})])]),i("button",{staticClass:"control",on:{click:e.playpause}},[i("svg",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],attrs:{"aria-hidden":"true",viewBox:"0 0 448 512"}},[i("path",{attrs:{fill:"white",d:"M192 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-48 346V85c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6zM448 79v352c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-48 346V85c0-3.3-2.7-6-6-6h-84c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6z"}})]),i("svg",{directives:[{name:"show",rawName:"v-show",value:!e.isPlaying,expression:"!isPlaying"}],attrs:{"aria-hidden":"true",viewBox:"0 0 448 512"}},[i("path",{attrs:{fill:"white",d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zM48 453.5v-395c0-4.6 5.1-7.5 9.1-5.2l334.2 197.5c3.9 2.3 3.9 8 0 10.3L57.1 458.7c-4 2.3-9.1-.6-9.1-5.2z"}})])]),i("button",{staticClass:"control",on:{click:e.next}},[i("svg",{attrs:{"aria-hidden":"true",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"white",d:"M244.5 230.8L52.5 71.4C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160.6c15.3-12.8 15.3-36.4 0-49.2zM48 381.7V130.1l151 125.4L48 381.7zm452.5-150.9l-192-159.4C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160.6c15.3-12.8 15.3-36.4 0-49.2zM304 381.7V130.1l151 125.4-151 126.2z"}})])]),i("button",{staticClass:"control toggleable",attrs:{"data-active":e.isRandom},on:{click:e.toggleRandom}},[i("svg",{attrs:{"aria-hidden":"true",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"white",d:"M505 400l-79.2 72.9c-15.1 15.1-41.8 4.4-41.8-17v-40h-31c-3.3 0-6.5-1.4-8.8-3.9l-89.8-97.2 38.1-41.3 79.8 86.3H384v-48c0-21.4 26.7-32.1 41.8-17l79.2 71c9.3 9.6 9.3 24.8 0 34.2zM12 152h91.8l79.8 86.3 38.1-41.3-89.8-97.2c-2.3-2.5-5.5-3.9-8.8-3.9H12c-6.6 0-12 5.4-12 12v32c0 6.7 5.4 12.1 12 12.1zm493-41.9l-79.2-71C410.7 24 384 34.7 384 56v40h-31c-3.3 0-6.5 1.4-8.8 3.9L103.8 360H12c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h111c3.3 0 6.5-1.4 8.8-3.9L372.2 152H384v48c0 21.4 26.7 32.1 41.8 17l79.2-73c9.3-9.4 9.3-24.6 0-33.9z"}})])])])])])},w=[],M=(i("96cf"),i("3b8d")),P={name:"audio-controls",props:["episode"],data:function(){return{isPlaying:!1,duration:0,currentTime:0,isRandom:!1,isRepeat:!1}},computed:{audio:function(){return this.$refs.audio},currentSrc:function(){return this.episode?this.episode.path:null},currentName:function(){return this.episode?this.episode.name:"Choisis un épisode, là !"},currentCategory:function(){return this.episode?this.episode.category:null},fomattedDuration:function(){return this.formatDuration(this.duration)},fomattedCurrentTime:function(){return this.formatDuration(this.currentTime)},barWidth:function(){return this.duration&&this.currentTime?this.currentTime/this.duration:0}},methods:{focus:function(){this.episode&&g(this.episode.id)},toggleRandom:function(){this.isRandom=!this.isRandom},toggleRepeat:function(){this.isRepeat=!this.isRepeat},playpause:function(){this.isPlaying?this.pause():this.play()},play:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.episode){e.next=5;break}return e.next=3,this.audio.play();case 3:e.next=6;break;case 5:this.next();case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),pause:function(){this.audio.pause()},goTo:function(e){var t=this.$refs.progress.getBoundingClientRect(),i=t.width,s=t.left,r=e.clientX,n=r-s,a=n/i;this.audio.currentTime=a*this.duration},formatDuration:function(e){var t=Math.floor(e/60),i=Math.floor(e%60);return i<10&&(i="0".concat(i)),"".concat(t,":").concat(i)},next:function(){this.$emit("next",this.isRandom)},previous:function(){this.$emit("previous",this.isRandom)}},mounted:function(){var e=this;this.audio.addEventListener("play",function(t){e.isPlaying=!0}),this.audio.addEventListener("pause",function(t){e.isPlaying=!1}),this.audio.addEventListener("durationchange",function(t){e.duration=t.target.duration}),this.audio.addEventListener("canplay",function(t){e.play()}),this.audio.addEventListener("timeupdate",function(t){e.currentTime=t.target.currentTime}),this.audio.addEventListener("ended",function(t){e.isRepeat?e.play():e.next()}),document.addEventListener("keydown",function(t){var i=e.$store.getters.enabledKeyboardControls;i&&(" "===t.key||"Enter"===t.key?(t.preventDefault(),e.playpause()):"ArrowRight"===t.key||"ArrowDown"===t.key?(t.preventDefault(),e.next()):"ArrowLeft"!==t.key&&"ArrowUp"!==t.key||(t.preventDefault(),e.previous()))})}},V=P,R=(i("5ed3"),Object(a["a"])(V,q,w,!1,null,"0cc8c42c",null)),_=R.exports,k={name:"audio-player",components:{Episodes:S,AudioControls:_},props:["episodeId"],data:function(){return{currentEpisode:null}},methods:{selectEpisode:function(e){this.currentEpisode=e},next:function(e){this.$refs.episodes.next(e)},previous:function(e){this.$refs.episodes.previous(e)}},mounted:function(){this.$refs.episodes.initWithEpisodeId(this.episodeId)}},A=k,D=(i("2c11"),Object(a["a"])(A,m,h,!1,null,"448a3eb0",null)),I=D.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"side-panel"},[i("h1",[e._v("Les deux minutes du peuple")]),i("p",[e._v("de "),i("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Fran%C3%A7ois_P%C3%A9russe",target:"_blank"}},[e._v("François Pérusse")])]),i("p",[e._v("\n    Tu es sur un lecteur web "),i("em",[e._v("non-officiel")]),e._v(" de deux minutes du peuple. Pour soutenir directement l'artiste, il y a :\n  ")]),i("ul",[i("li",[i("a",{attrs:{href:"http://francoisperusse.ca/",target:"_blank"}},[e._v("Son site officiel")])]),i("li",[i("a",{attrs:{href:"https://www.youtube.com/user/LeFrancoisPerusse",target:"_blank"}},[e._v("Sa chaîne Youtube")])]),i("li",[i("a",{attrs:{href:"https://www.facebook.com/francois.perusse",target:"_blank"}},[e._v("Son facebook")])]),i("li",[i("a",{attrs:{href:"https://twitter.com/Franpeuple",target:"_blank"}},[e._v("Son oaseau")])])])])}],j={name:"side-panel"},B=j,F=(i("29bc"),Object(a["a"])(B,T,z,!1,null,"9e211b54",null)),U=F.exports,N={name:"home",components:{AudioPlayer:I,SidePanel:U},computed:{episodeId:function(){return this.$route.params.episodeId}}},J=N,O=(i("cd21"),Object(a["a"])(J,c,p,!1,null,"31cb0f6a",null)),H=O.exports;s["a"].use(d["a"]);var $=new d["a"]({routes:[{path:"/",name:"home",component:H},{path:"/:episodeId",name:"episode",component:H}]}),X=i("2f62");s["a"].use(X["a"]);var G=new X["a"].Store({state:{enabledKeyboardControls:!0},getters:{enabledKeyboardControls:function(e){return e.enabledKeyboardControls}},mutations:{enableKeyboardControls:function(e,t){e.enabledKeyboardControls=t}},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:$,store:G,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var s=i("5e27"),r=i.n(s);r.a},"5e27":function(e,t,i){},"5ed3":function(e,t,i){"use strict";var s=i("ad9b"),r=i.n(s);r.a},a20e:function(e,t,i){},ad9b:function(e,t,i){},cd21:function(e,t,i){"use strict";var s=i("a20e"),r=i.n(s);r.a},d1aa:function(e,t,i){},de31:function(e,t,i){}});
//# sourceMappingURL=app.d9414640.js.map