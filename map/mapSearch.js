angular.module('hereMapa')
.service('search', function($http,mapaProvider){
	var search = {};
	//implementar un motor de busqueda 
	//hace falta ver en que formato recoger los datos
	search.addItinerario = function (element) {
		var array=[];
	    if(sessionStorage.getItem('itinerario')){//si ya esta
	        array = JSON.parse(sessionStorage.getItem("itinerario"));
	        array.push(objMin);
	        sessionStorage.setItem('itinerario',JSON.stringify(array));
	    }
	    else{//si no existe 
			array.push(objMin);
			sessionStorage.setItem("itinerario",JSON.stringify(array));
		}
	
	}

	search.cuadroBusqueda = function () {
		// body...

		var platform = new H.service.Platform({
		  app_id: 'DemoAppId01082013GAL',
		  app_code: 'AJKnXv84fjrb0KIHawS0Tg',
		  useCIT: true,
		  useHTTPS: true
		});


//añadiendo objetos al mapa

		var defaultLayers = mapaProvider.platform.createDefaultLayers();

		//Step 2: initialize a map  - not specificing a location will give a whole world view.
		var map = new H.Map(document.getElementById('mapContainer'),
		  defaultLayers.normal.map);

		//Step 3: make the map interactive
		// MapEvents enables the event system
		// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
		var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));



		var control = new H.ui.Control();
		H.ui.UI.addControl('hola',control);












		// Create the default UI components
		var ui = H.ui.UI.createDefault(map, defaultLayers);

		// Now use the map as required...
		map.setCenter({lat:52.5159, lng:13.3777});
		map.setZoom(14);




	}



	search.crearInput = function (){
		var input = document.createElement('input');
		input.type="text";
		
		return input;
	}



	

	




















	return search;
});