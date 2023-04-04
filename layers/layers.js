var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Ville_F_0 = new ol.format.GeoJSON();
var features_Ville_F_0 = format_Ville_F_0.readFeatures(json_Ville_F_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ville_F_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ville_F_0.addFeatures(features_Ville_F_0);var lyr_Ville_F_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ville_F_0, 
                style: style_Ville_F_0,
                title: '<img src="styles/legend/Ville_F_0.png" /> Ville_F'
            });var format_Ville_D_1 = new ol.format.GeoJSON();
var features_Ville_D_1 = format_Ville_D_1.readFeatures(json_Ville_D_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ville_D_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ville_D_1.addFeatures(features_Ville_D_1);var lyr_Ville_D_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ville_D_1, 
                style: style_Ville_D_1,
                title: '<img src="styles/legend/Ville_D_1.png" /> Ville_D'
            });var format_coles_2 = new ol.format.GeoJSON();
var features_coles_2 = format_coles_2.readFeatures(json_coles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coles_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_coles_2.addFeatures(features_coles_2);var lyr_coles_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coles_2, 
                style: style_coles_2,
                title: '<img src="styles/legend/coles_2.png" /> Écoles'
            });var format_Centredesant_3 = new ol.format.GeoJSON();
var features_Centredesant_3 = format_Centredesant_3.readFeatures(json_Centredesant_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centredesant_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centredesant_3.addFeatures(features_Centredesant_3);var lyr_Centredesant_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centredesant_3, 
                style: style_Centredesant_3,
                title: '<img src="styles/legend/Centredesant_3.png" /> Centre de santé'
            });var format_Centresreligieux_4 = new ol.format.GeoJSON();
var features_Centresreligieux_4 = format_Centresreligieux_4.readFeatures(json_Centresreligieux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centresreligieux_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centresreligieux_4.addFeatures(features_Centresreligieux_4);var lyr_Centresreligieux_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centresreligieux_4, 
                style: style_Centresreligieux_4,
                title: '<img src="styles/legend/Centresreligieux_4.png" /> Centres religieux'
            });

lyr_Ville_F_0.setVisible(true);lyr_Ville_D_1.setVisible(true);lyr_coles_2.setVisible(true);lyr_Centredesant_3.setVisible(true);lyr_Centresreligieux_4.setVisible(true);
var layersList = [baseLayer,lyr_Ville_F_0,lyr_Ville_D_1,lyr_coles_2,lyr_Centredesant_3,lyr_Centresreligieux_4];
lyr_Ville_F_0.set('fieldAliases', {'x_fin': 'x_fin', 'y_fin': 'y_fin', 'OBJECTID': 'OBJECTID', 'regions': 'regions', 'FIN_1': 'FIN_1', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Lengh': 'Lengh', 'longueur': 'longueur', });
lyr_Ville_D_1.set('fieldAliases', {'x': 'x', 'y': 'y', 'OBJECTID': 'OBJECTID', 'regions': 'regions', 'DEBUT': 'DEBUT', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Shape': 'Shape', 'longueur': 'longueur', });
lyr_coles_2.set('fieldAliases', {'Lat': 'Lat', 'Lon': 'Lon', 'Écoles': 'Écoles', });
lyr_Centredesant_3.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', 'changese_3': 'changese_3', });
lyr_Centresreligieux_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ISO3': 'ISO3', 'ADM0_NAME': 'ADM0_NAME', 'NAME': 'NAME', 'TYPE': 'TYPE', 'CITY': 'CITY', 'SPA_ACC': 'SPA_ACC', 'SOURCE_DT': 'SOURCE_DT', 'SOURCE': 'SOURCE', 'SOURCE2_DT': 'SOURCE2_DT', 'SOURCE2': 'SOURCE2', 'GLOBALID': 'GLOBALID', });
lyr_Ville_F_0.set('fieldImages', {'x_fin': 'TextEdit', 'y_fin': 'TextEdit', 'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'FIN_1': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Lengh': 'TextEdit', 'longueur': 'TextEdit', });
lyr_Ville_D_1.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'DEBUT': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Shape': 'TextEdit', 'longueur': 'TextEdit', });
lyr_coles_2.set('fieldImages', {'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Écoles': 'TextEdit', });
lyr_Centredesant_3.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', 'changese_3': 'TextEdit', });
lyr_Centresreligieux_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ISO3': 'TextEdit', 'ADM0_NAME': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'CITY': 'TextEdit', 'SPA_ACC': 'TextEdit', 'SOURCE_DT': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCE2_DT': 'TextEdit', 'SOURCE2': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_Ville_F_0.set('fieldLabels', {'x_fin': 'inline label', 'y_fin': 'inline label', 'OBJECTID': 'header label', 'regions': 'inline label', 'FIN_1': 'inline label', 'Departemen': 'inline label', 'DISTRICT': 'inline label', 'OBSERVATIO': 'inline label', 'Lengh': 'inline label', 'longueur': 'inline label', });
lyr_Ville_D_1.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'OBJECTID': 'inline label', 'regions': 'inline label', 'DEBUT': 'inline label', 'Departemen': 'inline label', 'DISTRICT': 'inline label', 'OBSERVATIO': 'inline label', 'Shape': 'inline label', 'longueur': 'inline label', });
lyr_coles_2.set('fieldLabels', {'Lat': 'inline label', 'Lon': 'inline label', 'Écoles': 'inline label', });
lyr_Centredesant_3.set('fieldLabels', {'amenity': 'inline label', 'name': 'inline label', 'changese_3': 'inline label', });
lyr_Centresreligieux_4.set('fieldLabels', {'OBJECTID': 'inline label', 'ISO3': 'inline label', 'ADM0_NAME': 'inline label', 'NAME': 'inline label', 'TYPE': 'inline label', 'CITY': 'inline label', 'SPA_ACC': 'inline label', 'SOURCE_DT': 'inline label', 'SOURCE': 'inline label', 'SOURCE2_DT': 'no label', 'SOURCE2': 'inline label', 'GLOBALID': 'inline label', });
lyr_Centresreligieux_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});