Ext.define('AddressBook.view.workorder.Map', {
    extend: 'Ext.Panel',
    xtype: 'map-show',
    requires: [
        'Ext.Map'
    ],
    config: {
        title: 'Information',
        layout: 'card',
        items: [
            {
                xtype: 'map',
                mapOptions : {
                    zoom : 15,
                    mapTypeId : google.maps.MapTypeId.ROADMAP,
                    navigationControl: true,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.DEFAULT
                    }
                }
            }
        ]
    },

    centerMap: function(newRecord) {
        if (newRecord) {
            this.down('map').setMapCenter({
                latitude: newRecord.data.latitude,
                longitude: newRecord.data.longitude
            });
        }
    },

    setMarkers: function(markers) {
        var mapPanel = this;
        var map = this.down("map")._map;
        mapPanel.markerDataDict = {};
        mapPanel.markerDict = {};


        if(!mapPanel.infowindow) {
            mapPanel.infowindow = new google.maps.InfoWindow({
                content: 'Sencha HQ'
            });
        }
        for(var i = 0 ;i < markers.length; i++) {
            var markerData = markers[i];
            map.setZoom(15);
            var latitude = Number(markerData.data.latitude);
            var longitude = Number(markerData.data.longitude);
            var position = new google.maps.LatLng(latitude, longitude);
            mapPanel.markerDataDict[position] = markerData;
            var marker = new google.maps.Marker({
                position: position,
                title : markerData.data.id,
                map: map
            });
            mapPanel.markerDict[position] = marker;

            google.maps.event.addListener(marker, 'click', function(mouseEvent) {
                var lat = Math.round(mouseEvent.latLng.lat() * 1000000)/1000000;
                var lng = Math.round(mouseEvent.latLng.lng() * 1000000)/1000000;
                var id = mapPanel.markerDataDict[mouseEvent.latLng].data.id;
                mapPanel.infowindow = new google.maps.InfoWindow();
                mapPanel.infowindow.setContent(['Werkorder: '+ id +'<br/>',
                        'lat.:' + lat + '<br/>',
                        'long.:' + lng ].join(""));
                if(mapPanel.oldInfowindow)
                    mapPanel.oldInfowindow.close();
                mapPanel.oldInfowindow = mapPanel.infowindow;
                mapPanel.infowindow.open(map, mapPanel.markerDict[mouseEvent.latLng]);
                mapPanel.infowindow.setPosition(mouseEvent.latLng);
                mapPanel.fireEvent('markerClicked', mapPanel.markerDataDict[mouseEvent.latLng])
            });
        }
    }
});