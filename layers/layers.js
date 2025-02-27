var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIStandard_1 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DivisionBoundary_3 = new ol.format.GeoJSON();
var features_DivisionBoundary_3 = format_DivisionBoundary_3.readFeatures(json_DivisionBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivisionBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivisionBoundary_3.addFeatures(features_DivisionBoundary_3);
var lyr_DivisionBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DivisionBoundary_3, 
                style: style_DivisionBoundary_3,
                popuplayertitle: 'Division Boundary',
                interactive: true,
                title: '<img src="styles/legend/DivisionBoundary_3.png" /> Division Boundary'
            });
var format_AssetsinDivisionIX_4 = new ol.format.GeoJSON();
var features_AssetsinDivisionIX_4 = format_AssetsinDivisionIX_4.readFeatures(json_AssetsinDivisionIX_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssetsinDivisionIX_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssetsinDivisionIX_4.addFeatures(features_AssetsinDivisionIX_4);
var lyr_AssetsinDivisionIX_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssetsinDivisionIX_4, 
                style: style_AssetsinDivisionIX_4,
                popuplayertitle: 'Assets in Division IX',
                interactive: true,
                title: '<img src="styles/legend/AssetsinDivisionIX_4.png" /> Assets in Division IX'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIStandard_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_DivisionBoundary_3.setVisible(true);lyr_AssetsinDivisionIX_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIStandard_1,lyr_OSMStandard_2,lyr_DivisionBoundary_3,lyr_AssetsinDivisionIX_4];
lyr_DivisionBoundary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Name_1': 'Name of Division', });
lyr_AssetsinDivisionIX_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Sl_NO': 'Sl No.', 'Section': 'Section', 'District': 'District', 'Mandal': 'Mandal', 'Vill': 'Village/Town/City', 'Division': 'Division', 'Survey_No': 'Survey No.', 'Area': 'Area', 'Area_1': 'Area', 'Market_Value': 'Market Value', });
lyr_DivisionBoundary_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name_1': 'TextEdit', });
lyr_AssetsinDivisionIX_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Sl_NO': 'Range', 'Section': 'TextEdit', 'District': 'TextEdit', 'Mandal': 'TextEdit', 'Vill': 'TextEdit', 'Division': 'TextEdit', 'Survey_No': 'TextEdit', 'Area': 'TextEdit', 'Area_1': 'TextEdit', 'Market_Value': 'TextEdit', });
lyr_DivisionBoundary_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Name_1': 'inline label - visible with data', });
lyr_AssetsinDivisionIX_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Sl_NO': 'inline label - visible with data', 'Section': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Mandal': 'inline label - visible with data', 'Vill': 'inline label - visible with data', 'Division': 'inline label - visible with data', 'Survey_No': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Area_1': 'inline label - visible with data', 'Market_Value': 'inline label - visible with data', });
lyr_AssetsinDivisionIX_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});