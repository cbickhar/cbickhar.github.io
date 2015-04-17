{"filter":false,"title":"script.js","tooltip":"/catalog/script.js","undoManager":{"mark":70,"position":70,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":103,"column":2},"action":"remove","lines":["[","    {","        \"featureType\": \"administrative\",","        \"elementType\": \"labels.text.fill\",","        \"stylers\": [","            {","                \"color\": \"#444444\"","            }","        ]","    },","    {","        \"featureType\": \"landscape\",","        \"elementType\": \"all\",","        \"stylers\": [","            {","                \"color\": \"#f2f2f2\"","            }","        ]","    },","    {","        \"featureType\": \"landscape\",","        \"elementType\": \"labels.text.fill\",","        \"stylers\": [","            {","                \"saturation\": \"-0\"","            },","            {","                \"lightness\": \"0\"","            }","        ]","    },","    {","        \"featureType\": \"poi\",","        \"elementType\": \"all\",","        \"stylers\": [","            {","                \"visibility\": \"off\"","            }","        ]","    },","    {","        \"featureType\": \"poi\",","        \"elementType\": \"labels.text.fill\",","        \"stylers\": [","            {","                \"saturation\": \"0\"","            },","            {","                \"lightness\": \"0\"","            }","        ]","    },","    {","        \"featureType\": \"road\",","        \"elementType\": \"all\",","        \"stylers\": [","            {","                \"saturation\": -100","            },","            {","                \"lightness\": 45","            }","        ]","    },","    {","        \"featureType\": \"road.highway\",","        \"elementType\": \"all\",","        \"stylers\": [","            {","                \"visibility\": \"simplified\"","            }","        ]","    },","    {","        \"featureType\": \"road.arterial\",","        \"elementType\": \"labels.icon\",","        \"stylers\": [","            {","                \"visibility\": \"off\"","            }","        ]","    },","    {","        \"featureType\": \"transit\",","        \"elementType\": \"all\",","        \"stylers\": [","            {","                \"visibility\": \"off\"","            }","        ]","    },","    {","        \"featureType\": \"water\",","        \"elementType\": \"all\",","        \"stylers\": [","            {","                \"color\": \"#603913\"","            },","            {","                \"visibility\": \"on\"","            }","        ]","    }","];"]},{"start":{"row":0,"column":0},"end":{"row":10,"column":61},"action":"insert","lines":["var map;","function initialize() {","  var mapOptions = {","    zoom: 8,","    center: new google.maps.LatLng(-34.397, 150.644)","  };","  map = new google.maps.Map(document.getElementById('map-canvas'),","      mapOptions);","}","","google.maps.event.addDomListener(window, 'load', initialize);"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":[">"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["<!-- MAP -->",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":61},"end":{"row":11,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":31,"column":61},"action":"insert","lines":["function initialize() {","  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);","  var mapOptions = {","    zoom: 4,","    center: myLatlng","  }","  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);","","  var marker = new google.maps.Marker({","      position: myLatlng,","      map: map,","      title: 'Hello World!'","  });","}","","google.maps.event.addDomListener(window, 'load', initialize);"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":31,"column":61},"action":"remove","lines":["function initialize() {","  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);","  var mapOptions = {","    zoom: 4,","    center: myLatlng","  }","  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);","","  var marker = new google.maps.Marker({","      position: myLatlng,","      map: map,","      title: 'Hello World!'","  });","}","","google.maps.event.addDomListener(window, 'load', initialize);"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":0},"end":{"row":69,"column":1},"action":"insert","lines":["// First, create an object containing LatLng and population for each city.","var citymap = {};","citymap['chicago'] = {","  center: new google.maps.LatLng(41.878113, -87.629798),","  population: 2714856","};","citymap['newyork'] = {","  center: new google.maps.LatLng(40.714352, -74.005973),","  population: 8405837","};","citymap['losangeles'] = {","  center: new google.maps.LatLng(34.052234, -118.243684),","  population: 3857799","};","citymap['vancouver'] = {","  center: new google.maps.LatLng(49.25, -123.1),","  population: 603502","};","","var cityCircle;","","function initialize() {","  // Create the map.","  var mapOptions = {","    zoom: 4,","    center: new google.maps.LatLng(37.09024, -95.712891),","    mapTypeId: google.maps.MapTypeId.TERRAIN","  };","","  var map = new google.maps.Map(document.getElementById('map-canvas'),","      mapOptions);","","  // Construct the circle for each value in citymap.","  // Note: We scale the area of the circle based on the population.","  for (var city in citymap) {","    var populationOptions = {","      strokeColor: '#FF0000',","      strokeOpacity: 0.8,","      strokeWeight: 2,","      fillColor: '#FF0000',","      fillOpacity: 0.35,","      map: map,","      center: citymap[city].center,","      radius: Math.sqrt(citymap[city].population) * 100","    };","    // Add the circle for this city to the map.","    cityCircle = new google.maps.Circle(populationOptions);","  }","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":0},"end":{"row":69,"column":1},"action":"remove","lines":["// First, create an object containing LatLng and population for each city.","var citymap = {};","citymap['chicago'] = {","  center: new google.maps.LatLng(41.878113, -87.629798),","  population: 2714856","};","citymap['newyork'] = {","  center: new google.maps.LatLng(40.714352, -74.005973),","  population: 8405837","};","citymap['losangeles'] = {","  center: new google.maps.LatLng(34.052234, -118.243684),","  population: 3857799","};","citymap['vancouver'] = {","  center: new google.maps.LatLng(49.25, -123.1),","  population: 603502","};","","var cityCircle;","","function initialize() {","  // Create the map.","  var mapOptions = {","    zoom: 4,","    center: new google.maps.LatLng(37.09024, -95.712891),","    mapTypeId: google.maps.MapTypeId.TERRAIN","  };","","  var map = new google.maps.Map(document.getElementById('map-canvas'),","      mapOptions);","","  // Construct the circle for each value in citymap.","  // Note: We scale the area of the circle based on the population.","  for (var city in citymap) {","    var populationOptions = {","      strokeColor: '#FF0000',","      strokeOpacity: 0.8,","      strokeWeight: 2,","      fillColor: '#FF0000',","      fillOpacity: 0.35,","      map: map,","      center: citymap[city].center,","      radius: Math.sqrt(citymap[city].population) * 100","    };","    // Add the circle for this city to the map.","    cityCircle = new google.maps.Circle(populationOptions);","  }","}"]},{"start":{"row":21,"column":0},"end":{"row":73,"column":13},"action":"insert","lines":["// First, create an object containing LatLng and population for each city.","var citymap = {};","citymap['chicago'] = {","  center: new google.maps.LatLng(41.878113, -87.629798),","  population: 2714856","};","citymap['newyork'] = {","  center: new google.maps.LatLng(40.714352, -74.005973),","  population: 8405837","};","citymap['losangeles'] = {","  center: new google.maps.LatLng(34.052234, -118.243684),","  population: 3857799","};","citymap['vancouver'] = {","  center: new google.maps.LatLng(49.25, -123.1),","  population: 603502","};","","var cityCircle;","","function initialize() {","  // Create the map.","  var mapOptions = {","    zoom: 4,","    center: new google.maps.LatLng(37.09024, -95.712891),","    mapTypeId: google.maps.MapTypeId.TERRAIN","  };","","  var map = new google.maps.Map(document.getElementById('map-canvas'),","      mapOptions);","","  // Construct the circle for each value in citymap.","  // Note: We scale the area of the circle based on the population.","  for (var city in citymap) {","    var populationOptions = {","      strokeColor: '#FF0000',","      strokeOpacity: 0.8,","      strokeWeight: 2,","      fillColor: '#FF0000',","      fillOpacity: 0.35,","      map: map,","      center: citymap[city].center,","      radius: Math.sqrt(citymap[city].population) * 100","    };","    // Add the circle for this city to the map.","    cityCircle = new google.maps.Circle(populationOptions);","  }","}","","google.maps.event.addDomListener(window, 'load', initialize);","","    </script>"]}]}],[{"group":"doc","deltas":[{"start":{"row":73,"column":0},"end":{"row":73,"column":13},"action":"remove","lines":["    </script>"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":73,"column":0},"action":"remove","lines":["","","// First, create an object containing LatLng and population for each city.","var citymap = {};","citymap['chicago'] = {","  center: new google.maps.LatLng(41.878113, -87.629798),","  population: 2714856","};","citymap['newyork'] = {","  center: new google.maps.LatLng(40.714352, -74.005973),","  population: 8405837","};","citymap['losangeles'] = {","  center: new google.maps.LatLng(34.052234, -118.243684),","  population: 3857799","};","citymap['vancouver'] = {","  center: new google.maps.LatLng(49.25, -123.1),","  population: 603502","};","","var cityCircle;","","function initialize() {","  // Create the map.","  var mapOptions = {","    zoom: 4,","    center: new google.maps.LatLng(37.09024, -95.712891),","    mapTypeId: google.maps.MapTypeId.TERRAIN","  };","","  var map = new google.maps.Map(document.getElementById('map-canvas'),","      mapOptions);","","  // Construct the circle for each value in citymap.","  // Note: We scale the area of the circle based on the population.","  for (var city in citymap) {","    var populationOptions = {","      strokeColor: '#FF0000',","      strokeOpacity: 0.8,","      strokeWeight: 2,","      fillColor: '#FF0000',","      fillOpacity: 0.35,","      map: map,","      center: citymap[city].center,","      radius: Math.sqrt(citymap[city].population) * 100","    };","    // Add the circle for this city to the map.","    cityCircle = new google.maps.Circle(populationOptions);","  }","}","","google.maps.event.addDomListener(window, 'load', initialize);","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":36,"column":13},"action":"insert","lines":["function initialize() {","  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);","  var mapOptions = {","    zoom: 4,","    center: myLatlng","  }","  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);","","  var marker = new google.maps.Marker({","      position: myLatlng,","      map: map,","      title: 'Hello World!'","  });","}","","google.maps.event.addDomListener(window, 'load', initialize);","","    </script>"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":36,"column":13},"action":"remove","lines":["    </script>"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":0},"end":{"row":38,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":38,"column":0},"action":"remove","lines":["function initialize() {","  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);","  var mapOptions = {","    zoom: 4,","    center: myLatlng","  }","  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);","","  var marker = new google.maps.Marker({","      position: myLatlng,","      map: map,","      title: 'Hello World!'","  });","}","","google.maps.event.addDomListener(window, 'load', initialize);","","","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":61},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["function initialize() {","  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);","  var mapOptions = {","    zoom: 4,","    center: myLatlng","  }","  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);","","  var marker = new google.maps.Marker({","      position: myLatlng,","      map: map,","      title: 'Hello World!'","  });","}","","google.maps.event.addDomListener(window, 'load', initialize);","","","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":0},"end":{"row":32,"column":61},"action":"remove","lines":["var map;","function initialize() {","  var mapOptions = {","    zoom: 8,","    center: new google.maps.LatLng(-34.397, 150.644)","  };","  map = new google.maps.Map(document.getElementById('map-canvas'),","      mapOptions);","}","","google.maps.event.addDomListener(window, 'load', initialize);"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":61},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":31,"column":7},"action":"insert","lines":["directionsService = new google.maps.DirectionsService();","directionsDisplay = new google.maps.DirectionsRenderer();","","var UK = new google.maps.LatLng(53.409532, -2.010498);","var IT = new google.maps.LatLng(42.745334, 12.738430);","","var noStreetNames = [{","    featureType: \"road\",","    elementType: \"labels\",","    stylers: [{","        visibility: \"off\"}]}];","","hideLabels = new google.maps.StyledMapType(noStreetNames, {","    name: \"hideLabels\"","});","","","var myOptions = {","    zoom: 1,","    mapTypeId: google.maps.MapTypeId.ROADMAP,","    center: UK","}","","var showPosition = function(position) {","    var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);","","    var marker = new google.maps.Marker({","        position: userLatLng,","        title: 'Your Location',","        draggable: true,","        map: map","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["n"]}]}]]},"ace":{"folds":[],"scrolltop":280.5,"scrollleft":0,"selection":{"start":{"row":13,"column":16},"end":{"row":13,"column":16},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":15,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1429231005151,"hash":"ca3dc2f3f2c62df33c6c737beb614b8a7d3feae2"}