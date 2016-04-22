angular.module('frontendApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Ultimate Team</h2> </div> <div class=\"mdl-card__supporting-text\"> <div>Ultimate Team is a CS 411 project created in Spring 2016 at the University of Illinois by Samir Chaudhry, Akhil Chhugani, Jenny Ho, and Nathan Marasigam.</div> <!--NOTE: Needs to be looked at again --> </div> </div>"
  );


  $templateCache.put('views/create_player.html',
    "<div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Create a Player</h2> </div> <div class=\"mdl-card__supporting-text\"> <!-- Name --> <md-input-container> <label>Name</label> <input ng-model=\"player.name\" required> </md-input-container> <!-- Team --> <md-input-container> <label>Team</label> <md-select ng-model=\"player.team\" md-on-close=\"clearSearchTerm()\" class=\"selectdemoSelectHeader\" id=\"selectdemoSelectHeaderId\"> <md-select-header class=\"demo-select-header\"> <input ng-model=\"searchTerm\" type=\"search\" placeholder=\"Search for teams...\" class=\"demo-header-searchbox _md-text\"> </md-select-header> <md-optgroup label=\"teams\"> <md-option ng-value=\"team.url\" ng-repeat=\"team in teams | filter:searchTerm\">{{team.name}}</md-option> </md-optgroup> </md-select> </md-input-container> <!-- Year --> <md-input-container> <label>Year</label> <input ng-model=\"player.year\" required> </md-input-container> <!-- Position --> <md-input-container> <label>Position</label> <input ng-model=\"player.position\" required> </md-input-container> <!-- Age --> <md-input-container> <label>Age</label> <input ng-model=\"player.age\" required> </md-input-container> <!-- Height --> <md-input-container> <label>Height</label> <input ng-model=\"player.height\" required> </md-input-container> <!-- Weight --> <md-input-container> <label>Weight</label> <input ng-model=\"player.weight\" required> </md-input-container> <!-- Appearances --> <md-input-container> <label>Appearances</label> <input ng-model=\"player.appearances\" required> </md-input-container> <!-- Goals --> <md-input-container> <label>Goals</label> <input ng-model=\"player.goals\" required> </md-input-container> <!-- Assists --> <md-input-container> <label>Assists</label> <input ng-model=\"player.assists\" required> </md-input-container> <!-- Yellow --> <md-input-container> <label>Yellow Cards</label> <input ng-model=\"player.yellow\" required> </md-input-container> <!-- Red --> <md-input-container> <label>Red Cards</label> <input ng-model=\"player.red\" required> </md-input-container> <!-- Shots Per Game --> <md-input-container> <label>Shots per Game</label> <input ng-model=\"player.shots_per_game\" required> </md-input-container> <!-- Pass Percentage --> <md-input-container> <label>Pass Percentage</label> <input ng-model=\"player.ps\" required> </md-input-container> <!-- Aerials Won --> <md-input-container> <label>Aerials Won</label> <input ng-model=\"player.aerials_won\" required> </md-input-container> <!-- Man of the Match --> <md-input-container> <label>Man of the Match</label> <input ng-model=\"player.motm\" required> </md-input-container> <!-- Rating --> <md-input-container> <label>Rating</label> <input ng-model=\"player.rating\" required> </md-input-container> <!-- Skills --> <md-input-container> <label>Skills (Scoring, Defending, Passing, Goalkeeping)</label> <input ng-model=\"player.skills\" required> </md-input-container> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"createPlayer()\"> Submit </a> </div> </div>"
  );


  $templateCache.put('views/create_team.html',
    "<div layout=\"row\" layout-align=\"center\"> <div class=\"demo-card mdl-card mdl-shadow--2dp\" layout-margin=\"50px\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Players</h2> </div> <div class=\"mdl-card__supporting-text\"> <div> <fieldset class=\"standard\"> <div layout=\"row\" layout-wrap flex> <div ng-repeat=\"player in team.players\" class=\"standard\" flex=\"50\"> <label> {{ player.name }} </label> </div> </div> </fieldset> </div> </div> </div> <div class=\"demo-card mdl-card mdl-shadow--2dp\" layout-margin=\"50px\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Create a team</h2> </div> <div class=\"mdl-card__supporting-text\"> <!-- Name --> <md-input-container> <label>Team</label> <input ng-model=\"team.name\" required> </md-input-container> <!-- League --> <md-input-container> <label>League</label> <input ng-model=\"team.league\" required> </md-input-container> <!-- Team --> <md-input-container> <label>Players</label> <md-select ng-model=\"team.players\" md-on-close=\"clearSearchTerm()\" class=\"selectdemoSelectHeader\" id=\"selectdemoSelectHeaderId\" multiple> <md-select-header class=\"demo-select-header\"> <input ng-model=\"searchTerm\" type=\"search\" placeholder=\"Search for teams...\" class=\"demo-header-searchbox _md-text\"> </md-select-header> <md-optgroup label=\"players\"> <md-option ng-value=\"player\" ng-repeat=\"player in players | filter:searchTerm\">{{player.name}}</md-option> </md-optgroup> </md-select> </md-input-container> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"createTeam()\"> Submit </a> </div> </div> <div class=\"demo-card mdl-card mdl-shadow--2dp\" layout-margin=\"50px\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Suggested Players</h2> </div> <div class=\"mdl-card__supporting-text\"> <div> <fieldset class=\"standard\"> <div layout=\"row\" layout-wrap flex> <div ng-repeat=\"player in players | filter:recommendType | filter:filterAlreadyAdded\" class=\"standard\" flex=\"50\"> <label> {{ player.name }} </label> </div> </div> </fieldset> </div> </div> </div> <!-- End of card --> </div>"
  );


  $templateCache.put('views/edit_house.html',
    "<div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Edit House</h2> </div> <div class=\"mdl-card__supporting-text\"> <md-input-container> <label>Location</label> <input ng-model=\"house.location\"> </md-input-container> <md-input-container> <label>Cost</label> <input ng-model=\"house.cost\" type=\"number\"> </md-input-container> <md-input-container> <label># of roommates</label> <input ng-model=\"house.roommates\" type=\"number\"> </md-input-container> <label>Style</label> <md-select ng-model=\"house.style\" aria-label=\"style\"> <md-option value=\"Art Deco\">Art Deco</md-option> <md-option value=\"Igloo\">Igloo</md-option> <md-option value=\"Modern\">Modern</md-option> <md-option value=\"Post Modern\">Post-modern</md-option> <md-option value=\"Rustic\">Rustic</md-option> <md-option value=\"Ranch\">Ranch</md-option> <md-option value=\"Urban\">Urban</md-option> </md-select> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"saveHouse(house)\"> Edit Listing </a> </div> </div>"
  );


  $templateCache.put('views/edit_profile.html',
    "<div> <div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Edit Profile</h2> </div> <div class=\"mdl-card__supporting-text\"> <h6>User Preferences</h6> <md-input-container> <label>Favorite Team</label> <md-select ng-model=\"user.gender\" aria-label=\"style\" required> <md-option value=\"Male\">Male</md-option> <md-option value=\"Female\">Female</md-option> <md-option value=\"Other\">Other</md-option> </md-select> </md-input-container> <md-input-container> <label>Budget</label> <input ng-model=\"user.budget\" type=\"number\" min=\"0\" required> </md-input-container> <md-input-container> <label># of Roommates</label> <input ng-model=\"user.number_of_roommates\" type=\"number\" min=\"0\" required> </md-input-container> <md-input-container> <label>Style</label> <md-select ng-model=\"user.style\" aria-label=\"style\" required> <md-option value=\"Studio\">Studio</md-option> <md-option value=\"One Bedroom\">One Bedroom</md-option> <md-option value=\"Two Bedroom\">Two Bedroom</md-option> <md-option value=\"Three Bedroom\">Three Bedroom</md-option> <md-option value=\"Four Bedroom\">Four Bedroom</md-option> <md-option value=\"Five Bedroom\">Five Bedroom</md-option> <md-option value=\"Duplex/Triplex\">Duplex/Triplex</md-option> <md-option value=\"Condomium\">Condomium</md-option> </md-select> </md-input-container> <md-input-container> <label>Location</label> <input ng-model=\"user.location\" required> </md-input-container> <md-input-container> <label>Length of Stay (days)</label> <input ng-model=\"user.length_of_stay\" type=\"number\" min=\"0\" required> </md-input-container> <md-input-container> <label>Company</label> <input ng-model=\"user.company\" required> </md-input-container> <h6>Roommate Preferences</h6> <div> <div>Would you be willing to live with a smoker? (1-No, 5-Yes)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.smoking\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"smoking\" class=\"md-primary\"> </md-slider> </div> <div> <div>What is your desired sleeping environment? (1-Quiet, 5-Noisy)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.environment\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"environment\" class=\"md-primary\"> </md-slider> </div> <div> <div>What is your cleanliness standards? (1-Clean, 5-Cluttered)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.condition\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"condition\" class=\"md-primary\"> </md-slider> </div> <div> <div>How do you feel about sharing your belongings? (1-Yes, 5-No)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.belongings\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"belongings\" class=\"md-primary\"> </md-slider> </div> <div> <div>How do you feel about guests? (1-Anytime, 5-Never)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.guests\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"guests\" class=\"md-primary\"> </md-slider> </div> <div> <div>What is your sleep schedule? (1-Early bird, 5-Late riser)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.sleep\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"sleep\" class=\"md-primary\"> </md-slider> </div> <h6>Haüs Preferences</h6> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.garden_backyard\">Garden/Backyard</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.pool\">Pool</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.gym\">Gym</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.shopping_mall\">Shopping Mall</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.beach\">Beach</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.movie_theater\">Movie Theater</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.amusement_park\">Amusement Park</md-checkbox> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"updateUser()\"> Submit </a> </div> </div> </div>"
  );


  $templateCache.put('views/home.html',
    "<!--   <md-content class=\"md-padding\" layout-xs=\"column\" layout=\"row\" layout-align=\"right center\">\n" +
    "    <div flex-xs flex-gt-xs=\"40\" layout=\"column\" layout-align=\"center center\">\n" +
    "        <md-card class=\"card-40-center\">\n" +
    "            <md-card-title>\n" +
    "                <md-card-title-text>\n" +
    "                    <span class=\"md-headline\">Sign Up</span>\n" +
    "                </md-card-title-text>\n" +
    "            </md-card-title>\n" +
    "            <form action=\"<?php echo $_SERVER['PHP_SELF']; ?>\" method=\"post\" class=\"signup_form\">\n" +
    "            <div class=\"md-padding\" layout-align=\"center\">\n" +
    "                <div layout=\"row\">\n" +
    "            <md-input-container flex=\"100\">\n" +
    "                <label>First name</label>\n" +
    "                <input>\n" +
    "            </md-input-container>\n" +
    "                <md-input-container flex=\"100\">\n" +
    "                    <label>Last name</label>\n" +
    "                    <input>\n" +
    "                </md-input-container>\n" +
    "                    </div>\n" +
    "                <div layout=\"row\">\n" +
    "                <md-input-container flex=\"100\">\n" +
    "                    <label>Username</label>\n" +
    "                    <input>\n" +
    "                </md-input-container>\n" +
    "                <md-input-container flex=\"100\">\n" +
    "                    <label>Email</label>\n" +
    "                    <input type=\"email\">\n" +
    "                </md-input-container>\n" +
    "                    </div>\n" +
    "                <div layout=\"row\">\n" +
    "                <md-input-container flex=\"100\">\n" +
    "                    <label>Password</label>\n" +
    "                    <input type=\"password\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container flex=\"100\">\n" +
    "                    <label>Repeat Password</label>\n" +
    "                    <input type=\"password\">\n" +
    "                </md-input-container>\n" +
    "                    </div>\n" +
    "                \n" +
    "\n" +
    "            <md-card-actions layout=\"row\" layout-align=\"center\">\n" +
    "                <br>\n" +
    "                <center>\n" +
    "                    <md-button class=\"md-primary md-raised signup_button\" type=\"submit\">Sign Up</md-button>\n" +
    "\n" +
    "                </center>\n" +
    "                </form>\n" +
    "            </md-card-actions>\n" +
    "            <md-card-content>\n" +
    "\n" +
    "            </md-card-content>\n" +
    "\n" +
    "        </md-card>\n" +
    "    </div>\n" +
    "</md-content>\n" +
    "</div> --> <md-card><h1 align=\"center\"> Welcome to this thing</h1></md-card>"
  );


  $templateCache.put('views/house_search.html',
    "<div> <div class=\"demo-card-wide mdl-card mdl-shadow--2dp search-box\"> <div class=\"mdl-card__supporting-text\"> <md-input-container> <label>Min Price</label> <input ng-model=\"search.min_price\" type=\"number\" min=\"0\" ng-disabled=\"disableFilters\"> </md-input-container> <md-input-container> <label>Max Price</label> <input ng-model=\"search.max_price\" type=\"number\" min=\"0\" ng-disabled=\"disableFilters\"> </md-input-container> <md-input-container> <label>City</label> <input ng-model=\"search.city\" ng-disabled=\"disableFilters\"> </md-input-container> <md-input-container> <label>Style</label> <md-select ng-model=\"search.style\" aria-label=\"style\" ng-disabled=\"disableFilters\"> <md-option value=\"Studio\">Studio</md-option> <md-option value=\"One Bedroom\">One Bedroom</md-option> <md-option value=\"Two Bedroom\">Two Bedroom</md-option> <md-option value=\"Three Bedroom\">Three Bedroom</md-option> <md-option value=\"Four Bedroom\">Four Bedroom</md-option> <md-option value=\"Five Bedroom\">Five Bedroom</md-option> <md-option value=\"Duplex/Triplex\">Duplex/Triplex</md-option> <md-option value=\"Condomium\">Condomium</md-option> </md-select> </md-input-container> <md-checkbox class=\"md-primary\" ng-disabled=\"disableFilters\" ng-model=\"amenity.garden_backyard\">Garden/Backyard</md-checkbox> <md-checkbox class=\"md-primary\" ng-disabled=\"disableFilters\" ng-model=\"amenity.pool\">Pool</md-checkbox> <md-checkbox class=\"md-primary\" ng-disabled=\"disableFilters\" ng-model=\"amenity.gym\">Gym</md-checkbox> <md-checkbox class=\"md-primary\" ng-disabled=\"disableFilters\" ng-model=\"amenity.shopping_mall\">Shopping Mall</md-checkbox> <md-checkbox class=\"md-primary\" ng-disabled=\"disableFilters\" ng-model=\"amenity.beach\">Beach</md-checkbox> <md-checkbox class=\"md-primary\" ng-disabled=\"disableFilters\" ng-model=\"amenity.movie_theater\">Movie Theater</md-checkbox> <md-checkbox class=\"md-primary\" ng-disabled=\"disableFilters\" ng-model=\"amenity.amusement_park\">Amusement Park</md-checkbox> <div>Expected Price</div> <md-input-container> <label>Month</label> <md-select ng-model=\"expected.month\" aria-label=\"month\"> <md-option value=\"January\">January</md-option> <md-option value=\"February\">February</md-option> <md-option value=\"March\">March</md-option> <md-option value=\"April\">April</md-option> <md-option value=\"May\">May</md-option> <md-option value=\"June\">June</md-option> <md-option value=\"July\">July</md-option> <md-option value=\"August\">August</md-option> <md-option value=\"September\">September</md-option> <md-option value=\"October\">October</md-option> <md-option value=\"November\">November</md-option> <md-option value=\"December\">December</md-option> </md-select> </md-input-container> <md-input-container> <label>Year</label> <input ng-model=\"expected.year\" type=\"number\" min=\"2015\"> </md-input-container> </div> </div> <md-progress-circular class=\"md-background centered-card\" md-mode=\"indeterminate\" ng-if=\"loading\" md-diameter=\"40\"></md-progress-circular> <div class=\"centered-card demo-card image mdl-card mdl-shadow--2dp\" ng-repeat=\"house in houses\" ng-if=\"!loading\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">{{house.address}}, {{house.city}}, {{house.state}}</h2> </div> <div class=\"mdl-card__supporting-text\"> <div>Rent: {{house.rent | currency}}/month</div> <div>Style: {{house.style}}</div> <div>Number of people: {{house.number_of_people}}</div> <h6>Amenities</h6> <div>Garden/Backyard: {{house.amenity.garden_backyard ? 'Yes': 'No'}}</div> <div>Pool: {{house.amenity.pool ? 'Yes': 'No'}}</div> <div>Gym: {{house.amenity.gym ? 'Yes': 'No'}}</div> <div>Shopping: {{house.amenity.shopping_mall ? 'Yes': 'No'}}</div> <div>Beach: {{house.amenity.beach ? 'Yes': 'No'}}</div> <div>Movie Theater: {{house.amenity.movie_theater ? 'Yes': 'No'}}</div> <div>Amusement Park: {{house.amenity.amusement_park ? 'Yes': 'No'}}</div> <br> <div>{{ house.expectedPrice ? (house.expectedPrice > 0 ? 'Expected Price: $' + house.expectedPrice : 'Expected Price: N/A') : ''}}</div> </div> </div> </div>"
  );


  $templateCache.put('views/login.html',
    "<div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Welcome</h2> </div> <div class=\"mdl-card__supporting-text\"> <md-input-container> <label>Name</label> <input ng-model=\"user.name\" required> </md-input-container> <md-input-container> <label>Password</label> <input ng-model=\"user.password\" type=\"password\"> </md-input-container> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"login()\"> Login </a> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"signup()\"> Sign Up </a> </div> </div>"
  );


  $templateCache.put('views/myteams.html',
    "<div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">MyTeams</h2> </div> <div class=\"mdl-card__supporting-text\"> <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\" align=\"center\"> <thead> <tr> <th class=\"mdl-data-table__cell--non-numeric\">Team</th> <th class=\"mdl-data-table__cell--non-numeric\">League</th> </tr> </thead> <tbody> <tr ng-repeat=\"team in teams | filter: user\"> <td class=\"mdl-data-table__cell--non-numeric\"> <a ng-href=\"#/teams/{{team.id}}\">{{team.name}}</a> </td> <td class=\"mdl-data-table__cell--non-numeric\"> <span>{{team.league}}</span> </td> </tr> </tbody> </table> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"createteam()\"> Create a team </a> </div> </div>"
  );


  $templateCache.put('views/overview.html',
    "<div class=\"centered-card demo-card-wide image mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Welcome to Ultimate Team</h2> </div> <div class=\"mdl-card__supporting-text\"> <div><b>MyTeams</b> - View your teams, and create new teams.</div> <div><b>Simulate A Game</b> - Simulate games between your favorite teams.</div> <div><b>Players</b> - View all players around the world in different leagues.</div> <div><b>Teams</b> - View all teams around the world.</div> </div> </div>"
  );


  $templateCache.put('views/player-detail.html',
    "<div layout=\"row\" layout-align=\"center center\"> <div class=\"left-card demo-card mdl-card mdl-shadow--2dp\" align=\"center center\"> <div class=\"mdl-card__title\" align=\"center\"> <h2 class=\"mdl-card__title-text\">{{player.name}}</h2> </div> <!-- <div class=\"mdl-card__supporting-text\">\n" +
    "\t\t<p>Team: {{player.team_name}}</p>\n" +
    "\t\t<p>Position: {{player.position}}</p>\n" +
    "\t\t<p>Season: {{player.year}}</p>\n" +
    "\t\t<p>Age: {{player.age}}</p>\n" +
    "\t</div> --> <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\" align=\"center center\"> <thead> <tr> <th class=\"mdl-data-table__cell--non-numeric\">Team</th> <th class=\"mdl-data-table__cell--non-numeric\">Position</th> <th class=\"mdl-data-table__cell--non-numeric\">Season</th> <th class=\"mdl-data-table__cell--non-numeric\">Age</th> </tr> </thead> <tbody> <td class=\"mdl-data-table__cell--non-numeric\"> <a ng-href=\"#/teams/{{team.id}}\">{{player.team_name}}</a> </td> <td class=\"mdl-data-table__cell--non-numeric\"> {{player.position}} </td> <td class=\"mdl-data-table__cell--non-numeric\"> {{player.year}} </td> <td class=\"mdl-data-table__cell--non-numeric\"> {{player.age}} </td> </tbody> </table> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"deletePlayer()\"> Delete </a> </div> </div> </div>"
  );


  $templateCache.put('views/player-list.html',
    "<div style=\"margin-left: 100px\"> <h1>All Football Players</h1> </div> <div align=\"center\"> <form action=\"#\"> <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"> <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample3\" placeholder=\"Search For Players\" ng-model=\"query\"> </div> </form> </div> <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\" align=\"center\"> <thead> <tr> <th class=\"mdl-data-table__cell--non-numeric\">Player Name</th> <th class=\"mdl-data-table__cell--non-numeric\">Position</th> <th class=\"mdl-data-table__cell--non-numeric\">Team</th> <th class=\"mdl-data-table__cell--non-numeric\">League</th> </tr> </thead> <tbody> <tr ng-repeat=\"player in players | filter:query\" class=\"player\"> <td class=\"mdl-data-table__cell--non-numeric\"> <a ng-href=\"#/players/{{player.id}}\">{{player.name}}</a> </td> <td class=\"mdl-data-table__cell--non-numeric\"> <a>{{player.position}}</a> </td> <td class=\"mdl-data-table__cell--non-numeric\"> <a>{{player.team_name}}</a> </td> <td class=\"mdl-data-table__cell--non-numeric\"> <a>{{player.player_league}}</a> </td> </tr> </tbody> </table> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"createplayer()\"> Submit </a> </div>"
  );


  $templateCache.put('views/roommates.html',
    "<div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Compatible Roommates for {{$root.user.name}}</h2> </div> <md-progress-circular class=\"md-background centered-card\" md-mode=\"indeterminate\" ng-if=\"loading\" md-diameter=\"40\"></md-progress-circular> <div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\" ng-repeat=\"roommate in roommates\" ng-if=\"!loading\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">#{{$index + 1}}: {{roommate.name}}</h2> </div> <div class=\"mdl-card__supporting-text\"> <div>Age: {{roommate.age}}</div> <div>Gender: {{roommate.gender}}</div> <div>Location: {{roommate.location}}</div> <br> <div>Budget: {{roommate.budget | currency}}/month</div> <div>Style: {{roommate.style}}</div> <div>Number of Roommates: {{roommate.number_of_roommates}}</div> <div>Length of Stay: {{roommate.length_of_stay}}</div> <div>Company: {{roommate.company}}</div> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"match(roommate.id)\"> Match </a> </div> </div>"
  );


  $templateCache.put('views/signup-pref.html',
    "<div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Create Profile</h2> </div> <div class=\"mdl-card__supporting-text\"> <h6>Roommate Preferences</h6> <div> <div>Would you be willing to live with a smoker? (1-No, 5-Yes)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.smoking\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"smoking\" class=\"md-primary\"> </md-slider> </div> <div> <div>What is your desired sleeping environment? (1-Quiet, 5-Noisy)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.environment\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"environment\" class=\"md-primary\"> </md-slider> </div> <div> <div>What is your cleanliness standards? (1-Clean, 5-Cluttered)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.condition\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"condition\" class=\"md-primary\"> </md-slider> </div> <div> <div>How do you feel about sharing your belongings? (1-Yes, 5-No)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.belongings\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"belongings\" class=\"md-primary\"> </md-slider> </div> <div> <div>How do you feel about guests? (1-Anytime, 5-Never)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.guests\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"guests\" class=\"md-primary\"> </md-slider> </div> <div> <div>What is your sleep schedule? (1-Early bird, 5-Late riser)</div> <md-slider flex=\"\" md-discrete=\"\" ng-model=\"user.sleep\" step=\"1\" min=\"1\" max=\"5\" aria-label=\"sleep\" class=\"md-primary\"> </md-slider> </div> <h6>Haüs Preferences</h6> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.garden_backyard\">Garden/Backyard</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.pool\">Pool</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.gym\">Gym</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.shopping_mall\">Shopping Mall</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.beach\">Beach</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.movie_theater\">Movie Theater</md-checkbox> <md-checkbox class=\"md-primary\" ng-model=\"user.user_amenity.amusement_park\">Amusement Park</md-checkbox> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"updateUser()\"> Submit </a> </div> </div>"
  );


  $templateCache.put('views/signup.html',
    "<div> <div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Create Profile</h2> </div> <div class=\"mdl-card__supporting-text\"> <md-input-container> <label>Age</label> <input ng-model=\"user.age\" type=\"number\" min=\"0\" required> </md-input-container> <md-input-container> <label>Zipcode</label> <input ng-model=\"user.zipcode\" md-maxlength=\"5\" required> </md-input-container> <md-input-container> <label>Gender</label> <md-select ng-model=\"user.gender\" aria-label=\"style\" required> <md-option value=\"Male\">Male</md-option> <md-option value=\"Female\">Female</md-option> <md-option value=\"Other\">Other</md-option> </md-select> </md-input-container> <md-input-container> <label>Budget</label> <input ng-model=\"user.budget\" type=\"number\" min=\"0\" required> </md-input-container> <md-input-container> <label># of Roommates</label> <input ng-model=\"user.number_of_roommates\" type=\"number\" min=\"0\" required> </md-input-container> <md-input-container> <label>Style</label> <md-select ng-model=\"user.style\" aria-label=\"style\" required> <md-option value=\"Studio\">Studio</md-option> <md-option value=\"One Bedroom\">One Bedroom</md-option> <md-option value=\"Two Bedroom\">Two Bedroom</md-option> <md-option value=\"Three Bedroom\">Three Bedroom</md-option> <md-option value=\"Four Bedroom\">Four Bedroom</md-option> <md-option value=\"Five Bedroom\">Five Bedroom</md-option> <md-option value=\"Duplex/Triplex\">Duplex/Triplex</md-option> <md-option value=\"Condomium\">Condomium</md-option> </md-select> </md-input-container> <md-input-container> <label>Location</label> <input ng-model=\"user.location\" required> </md-input-container> <md-input-container> <label>Length of Stay (days)</label> <input ng-model=\"user.length_of_stay\" type=\"number\" min=\"0\" required> </md-input-container> <md-input-container> <label>Company</label> <input ng-model=\"user.company\" required> </md-input-container> </div> <div class=\"mdl-card__actions mdl-card--border\"> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"updateUser()\"> Next </a> </div> </div> </div>"
  );


  $templateCache.put('views/simulator.html',
    "<div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Simulate a Game</h2> </div> <div class=\"mdl-card__supporting-text\"> <!-- Team --> <!--     <md-input-container>\n" +
    "      <label>Team</label>\n" +
    "      <md-select ng-model=\"team1\"\n" +
    "                 md-on-close=\"clearSearchTerm()\"\n" +
    "                 class=\"selectdemoSelectHeader\"\n" +
    "                 id='selectdemoSelectHeaderId'>\n" +
    "        <md-select-header class=\"demo-select-header\">\n" +
    "          <input ng-model=\"searchTerm\"\n" +
    "                 type=\"search\"\n" +
    "                 placeholder=\"Search for teams...\"\n" +
    "                 class=\"demo-header-searchbox _md-text\">\n" +
    "        </md-select-header>\n" +
    "        <md-optgroup label=\"teams\">\n" +
    "          <md-option ng-repeat=\"team in teams | filter:searchTerm\">{{team.name}}</md-option>\n" +
    "        </md-optgroup>\n" +
    "      </md-select>\n" +
    "    </md-input-container> --> <!-- Team 1 --> <md-input-container> <label>Team 1</label> <md-select ng-model=\"team1\" md-on-close=\"clearSearchTerm()\" class=\"selectdemoSelectHeader\" id=\"selectdemoSelectHeaderId\"> <md-select-header class=\"demo-select-header\"> <input ng-model=\"searchTerm1\" type=\"search\" placeholder=\"Search for teams...\" class=\"demo-header-searchbox _md-text\"> </md-select-header> <md-optgroup label=\"teams\"> <md-option ng-value=\"team\" ng-repeat=\"team in teams | filter:searchTerm1\">{{team.name}}</md-option> </md-optgroup> </md-select> </md-input-container> <!-- Team 2 --> <md-input-container> <label>Team 2</label> <md-select ng-model=\"team2\" md-on-close=\"clearSearchTerm()\" class=\"selectdemoSelectHeader\" id=\"selectdemoSelectHeaderId\"> <md-select-header class=\"demo-select-header\"> <input ng-model=\"searchTerm2\" type=\"search\" placeholder=\"Search for teams...\" class=\"demo-header-searchbox _md-text\"> </md-select-header> <md-optgroup label=\"teams\"> <md-option ng-value=\"team\" ng-repeat=\"team in teams | filter:searchTerm2\">{{team.name}}</md-option> </md-optgroup> </md-select> </md-input-container> <!-- <md-input-container>\n" +
    "      <label>Team 2</label>\n" +
    "      <md-select ng-model=\"team2\"\n" +
    "                 md-on-close=\"clearSearchTerm()\"\n" +
    "                 class=\"selectdemoSelectHeader\"\n" +
    "                 id='selectdemoSelectHeaderId'>\n" +
    "        <md-select-header class=\"demo-select-header\">\n" +
    "          <input ng-model=\"searchTerm2\"\n" +
    "                 type=\"search\"\n" +
    "                 placeholder=\"Search for teams...\"\n" +
    "                 class=\"demo-header-searchbox _md-text\">\n" +
    "        </md-select-header>\n" +
    "        <md-optgroup label=\"teams\">\n" +
    "          <md-option ng-repeat=\"team in teams | filter:searchTerm2\">{{team.name}}</md-option>\n" +
    "        </md-optgroup>\n" +
    "      </md-select>\n" +
    "    </md-input-container> --> <!--\n" +
    "      <md-input-container>\n" +
    "        <label>Players</label>\n" +
    "        <md-select ng-model=\"players_selected\" md-on-close=\"clearSearchTerm()\" data-md-container-class=\"selectdemoSelectHeader\" multiple>\n" +
    "          <md-select-header class=\"demo-select-header\">\n" +
    "            <input ng-model=\"searchTerm\" type=\"search\" placeholder=\"Search for player\" class=\"demo-header-searchbox _md-text\" id=\"playersearch\">\n" +
    "          </md-select-header>\n" +
    "          <md-optgroup label=\"players\">\n" +
    "            <md-option ng-value=\"player\" ng-repeat=\"player in players | filter:searchTerm\">{{player.name}}</md-option>\n" +
    "          </md-optgroup>\n" +
    "        </md-select>\n" +
    "      </md-input-container> --> <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"simulate(team1, team2)\"> Simulate </a> </div> </div> <div class=\"centered-card demo-card mdl-card mdl-shadow--2dp\"> <div class=\"mdl-card__title\"> <h2 class=\"mdl-card__title-text\">Results</h2> </div> <div class=\"mdl-card__supporting-text\"> <p class=\"text-center\" ng-hide=\"dataLoaded\"> <i class=\"fa fa-spinner fa-spin\"></i> </p> <div ng-show=\"dataLoaded\"> {{ winning_team }} beats {{ losing_team }} by a score of {{ winning_score }} to {{ losing_score }}. Goals scored by {{ winning_team }}: <ul> <li ng-repeat=\"player in winning_scoring_players\">{{ player }} - {{ winning_scorers[player] }}</li> </ul> Goals scored by {{ losing_team }} <ul> <li ng-repeat=\"player in losing_scoring_players\">{{ player }} - {{ losing_scorers[player] }}</li> </ul> </div> </div></div>"
  );


  $templateCache.put('views/team-detail.html',
    "<!-- <ul>\n" +
    "\t<li ng-repeat=\"player in team.players\">\n" +
    "\t\t<a ng-href=\"#/players/{{player['id']}}\">{{player[\"player_name\"]}}</a>\n" +
    "\t</li>\n" +
    "</ul> --> <div layout=\"row\" layout-align=\"center center\"> <div class=\"left-card demo-card mdl-card mdl-shadow--2dp\" align=\"center\"> <div class=\"mdl-card__title\" align=\"center\"> <h2 class=\"mdl-card__title-text\">{{team.name}}</h2> </div> <div class=\"mdl-card__supporting-text\"> <p>Team: {{team.name}}</p> <p>League: {{team.league}}</p> </div> <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\" align=\"center\"> <thead> <tr> <th class=\"mdl-data-table__cell--non-numeric\">Name</th> <th class=\"mdl-data-table__cell--non-numeric\">Position</th> <th class=\"mdl-data-table__cell--non-numeric\">Age</th> </tr> </thead> <tbody> <tr ng-repeat=\"player in players\"> <td class=\"mdl-data-table__cell--non-numeric\"> <a ng-href=\"#/players/{{player.id}}\">{{player.name}}</a> </td> <td class=\"mdl-data-table__cell--non-numeric\"> <span>{{player.position}}</span> </td> <td class=\"mdl-data-table__cell--non-numeric\"> <span>{{player.age}}</span> </td> </tr> </tbody> </table> </div></div>"
  );


  $templateCache.put('views/team-list.html',
    "<div style=\"margin-left: 100px\"> <h2>Teams</h2> </div> <div align=\"center\"> <form action=\"#\"> <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"> <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample3\" placeholder=\"Search For Teams\" ng-model=\"query\"> </div> </form> </div> <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\" align=\"center\"> <thead> <tr> <th class=\"mdl-data-table__cell--non-numeric\">Team</th> <th class=\"mdl-data-table__cell--non-numeric\">League</th> <th class=\"mdl-data-table__cell--non-numeric\">Roster Size</th> </tr> </thead> <tbody> <tr ng-repeat=\"team in teams | filter: owner\"> <td class=\"mdl-data-table__cell--non-numeric\"> <a ng-href=\"#/teams/{{team.id}}\">{{team.name}}</a> </td> <td class=\"mdl-data-table__cell--non-numeric\"> <span>{{team.league}}</span> </td> <td class=\"mdl-data-table__cell--non-numeric\"> <span>{{team.players.length}}</span> </td> </tr> </tbody> </table>"
  );

}]);
