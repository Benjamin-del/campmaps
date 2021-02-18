mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVuamFtaW5tYWhlcmFsIiwiYSI6ImNrbGJnOWNtbTBienkydW1kYWI4ZGVxdWkifQ.XAk7YMTVhFC74EPm71BAQA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-76.469368, 44.77903],
  zoom: 6
});
var geojson = {
  type: "FeatureCollection",

  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.469368, 44.77903]
      },
      properties: {
        title: " Camp Opemikon",
        description:
          '<a href="https://community.scouti.tk/topic/opemikon">Community topic</a>'
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.299994, 44.609999]
      },
      properties: {
        title: "Camp Folly",
        description:
          '<a href="https://community.scouti.tk/topic/folly">Community topic</a>'
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.65238, 45.398295]
      },
      properties: {
        title: "Camp Legewade",
        description:
          '<a href="https://community.scouti.tk/topic/legwade">Community topic</a> '
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.74926, 45.23034]
      },
      properties: {
        title: "Apple Hill Scout Reserve",
        description:
          '<a href="https://community.scouti.tk/topic/applehill">Communitytopic</a>'
      }
    }
  ]
};
// add markers to map
geojson.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map

  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          "<h3>" +
            marker.properties.title +
            "</h3><p>" +
            marker.properties.description +
            "</p>"
        )
    )
    .addTo(map);
  // only one .addto(map)
});
