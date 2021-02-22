// INSERT YOUR TOKEN HERE!
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVuamFtaW5tYWhlcmFsIiwiYSI6ImNrbGJnOWNtbTBienkydW1kYWI4ZGVxdWkifQ.XAk7YMTVhFC74EPm71BAQA";

var map = new mapboxgl.Map({
  container: "map",
  // FOR SATILITE REPLACE /light-v10 with /satellite-v9
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
          '<a href="http://voy.scouts.ca/ca/camp-opemikon">Website</a> <p> Campbuz'
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
          '<a href="https://www.loyalistscouts.ca/camps">Website</a> <p> Campbuz'
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
          '<a href="https://sites.google.com/site/camplegewade1/home">Website</a> <p> Campbuz'
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
          '<a href="applehillscoutreserve.ca">Website</a> <p> Campbuz'
      }
    }
  ]
};
// add markers to map
