/**
* hereMapa Module
*
* Description
*/
angular.module('hereMapa', ['ngGeolocation'])
.factory('mapaProvider',function () {
	
	var mapaProvider={};
	mapaProvider.platform = new H.service.Platform({
				  'app_id': 'EJiiwcESc8a3fX3YDAhK',
				  'app_code': 'lbdJ16arthEPwrA7nhmluA'
				});
/*
	mapaProvider.sacarDistancias = function () {
		var router = mapaProvider.platform.getRoutingService(),
	    routeRequestParams = {
	      mode: 'fastest;car',
	      representation: 'display',
	      routeattributes : 'waypoints,summary,shape,legs',
	      maneuverattributes: 'direction,action',
	      waypoint0: '52.5160,13.3779', // Brandenburg Gate
	      waypoint1: '52.5206,13.3862'  // Friedrichstraße Railway Station
	    };
		router.calculateRoute(
			routeRequestParams,
			onSuccess,
			onError
		);

		function onSuccess(result) {
		  var route = result.response.route[0].summary.distance;
		  return 
		}


	}







	







	//hubicar personas que den click a ubicame
	mapaProvider.mapaHubicame =function (posicion) {
		//obtenemos la plataforma
		var platform = new H.service.Platform({
		  app_id: 'EJiiwcESc8a3fX3YDAhK',
		  app_code: 'lbdJ16arthEPwrA7nhmluA',
		  useCIT: true,
		  useHTTPS: true
		});



		//creamos elementos para el mapa 
		var defaultLayers = platform.createDefaultLayers();




		//Step 2: initialize a map  - not specificing a location will give a whole world view.
		var map = new H.Map(document.getElementById('mapContainer'),
		  defaultLayers.normal.map);

		//Step 3: make the map interactive
		// MapEvents enables the event system
		// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
		var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

		// Create the default UI components
		var ui = H.ui.UI.createDefault(map, defaultLayers);

		// Now use the map as required..
		map.setCenter({lat:posicion.coords.latitude, lng:posicion.coords.longitude});
		map.setZoom(14);
	}




	mapaProvider.addEventsMap = function (map,event,eventFunction) {
		var mapEvents = new H.mapevents.MapEvents(map);

		map.addEventListener(event,eventFunction);

		var behavior = new H.mapevents.Behavior(mapEvents);
	}
	mapaProvider.addRoute = function (platform,routeRequestParams,succes,error) {
		var router = mapaProvider.platform.getRoutingService(),
		  routeRequestParams;


		router.calculateRoute(
		  routeRequestParams,
		  succes,error
		);
	}

*/

	mapaProvider.instanciarMapa = function (idElement,JSONFeatures) {
		var defaultLayers = mapaProvider.platform.createDefaultLayers();
		return new H.Map(//retornamos el mapa
		  document.getElementById(idElement),
		  defaultLayers.normal.map,	
		  JSONFeatures);
	}
	mapaProvider.lugares = function () {
		mapaProvider.instanciarMapa('mapContainer',{
			
		});
		var search = new H.places.Search(platform.getPlacesService()),
		  searchResult, error;

		// Define search parameters:
		var params = {
		  // Plain text search for places with the word "hotel"
		  // associated with them:
		  'q': 'hotel',
		  //  Search in the Chinatown district in San Francisco:
		  'at': '37.7942,-122.4070'
		};

		// Define a callback function to handle data on success:
		function onResult(data) {
		  searchResult = data;
		}

		// Define a callback function to handle errors:
		function onError(data) {
		  error = data;
		}

		// Run a search request with parameters, headers (empty), and
		// callback functions:
		search.request(params, {}, onResult, onError);



	}


	return mapaProvider;
})
.component('mapaHere',{
	templateUrl:'map/mapa.html',
	controller:function (queryCoordinates) {

		/*METODO PARA GENERAR UN MAPA Y GEOLOCALIZAR
		navigator.geolocation.getCurrentPosition(mapaProvider.mapaHubicame,
		function (errorCallback) {
			console.log("Algo se chingo");
		});
		mapaProvider.lugares();
		*/
		queryCoordinates.getCordenadasLugares();
		//search.cuadroBusqueda();


		


	}
})
;






