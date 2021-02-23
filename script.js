mapboxgl.accessToken =
  // Your token goes here. This will not work on your site. See more at https://scouti.tk/maptokens
  "pk.eyJ1IjoiYmVuamFtaW5tYWhlcmFsIiwiYSI6ImNrbGJnOWNtbTBienkydW1kYWI4ZGVxdWkifQ.XAk7YMTVhFC74EPm71BAQA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-streets-v11",
  center: [-76.469368, 44.77903],
  zoom: 7.61,
  hash:true
});

map.addControl(new mapboxgl.NavigationControl());

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
