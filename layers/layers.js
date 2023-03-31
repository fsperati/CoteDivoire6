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
var format_RESEAU_ROUTIER_WEB_0 = new ol.format.GeoJSON();
var features_RESEAU_ROUTIER_WEB_0 = format_RESEAU_ROUTIER_WEB_0.readFeatures(json_RESEAU_ROUTIER_WEB_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESEAU_ROUTIER_WEB_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RESEAU_ROUTIER_WEB_0.addFeatures(features_RESEAU_ROUTIER_WEB_0);var lyr_RESEAU_ROUTIER_WEB_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESEAU_ROUTIER_WEB_0, 
                style: style_RESEAU_ROUTIER_WEB_0,
    title: 'RESEAU_ROUTIER_WEB<br />\
    <img src="styles/legend/RESEAU_ROUTIER_WEB_0_0.png" /> Bitume<br />\
    <img src="styles/legend/RESEAU_ROUTIER_WEB_0_1.png" /> Non bitumée<br />'
        });var format_Mission4_Entretien_classique_1 = new ol.format.GeoJSON();
var features_Mission4_Entretien_classique_1 = format_Mission4_Entretien_classique_1.readFeatures(json_Mission4_Entretien_classique_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mission4_Entretien_classique_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mission4_Entretien_classique_1.addFeatures(features_Mission4_Entretien_classique_1);var lyr_Mission4_Entretien_classique_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mission4_Entretien_classique_1, 
                style: style_Mission4_Entretien_classique_1,
                title: '<img src="styles/legend/Mission4_Entretien_classique_1.png" /> Mission4_Entretien_classique'
            });var format_Ville_F_2 = new ol.format.GeoJSON();
var features_Ville_F_2 = format_Ville_F_2.readFeatures(json_Ville_F_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ville_F_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ville_F_2.addFeatures(features_Ville_F_2);var lyr_Ville_F_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ville_F_2, 
                style: style_Ville_F_2,
                title: '<img src="styles/legend/Ville_F_2.png" /> Ville_F'
            });var format_Ville_D_3 = new ol.format.GeoJSON();
var features_Ville_D_3 = format_Ville_D_3.readFeatures(json_Ville_D_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ville_D_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ville_D_3.addFeatures(features_Ville_D_3);var lyr_Ville_D_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ville_D_3, 
                style: style_Ville_D_3,
                title: '<img src="styles/legend/Ville_D_3.png" /> Ville_D'
            });var format_Centredesant_4 = new ol.format.GeoJSON();
var features_Centredesant_4 = format_Centredesant_4.readFeatures(json_Centredesant_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centredesant_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centredesant_4.addFeatures(features_Centredesant_4);var lyr_Centredesant_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centredesant_4, 
                style: style_Centredesant_4,
                title: '<img src="styles/legend/Centredesant_4.png" /> Centre de santé '
            });

lyr_RESEAU_ROUTIER_WEB_0.setVisible(true);lyr_Mission4_Entretien_classique_1.setVisible(true);lyr_Ville_F_2.setVisible(true);lyr_Ville_D_3.setVisible(true);lyr_Centredesant_4.setVisible(true);
var layersList = [baseLayer,lyr_RESEAU_ROUTIER_WEB_0,lyr_Mission4_Entretien_classique_1,lyr_Ville_F_2,lyr_Ville_D_3,lyr_Centredesant_4];
lyr_RESEAU_ROUTIER_WEB_0.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'NOM': 'NOM', 'NATURE': 'NATURE', 'ETAT_1': 'ETAT_1', 'PAYS': 'PAYS', 'AUTEUR': 'AUTEUR', 'DATE_DE_CR': 'DATE_DE_CR', });
lyr_Mission4_Entretien_classique_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'regions': 'regions', 'DEBUT': 'DEBUT', 'FIN_1': 'FIN_1', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Shape_Leng': 'Shape_Leng', 'longueur': 'longueur', 'x': 'x', 'y': 'y', 'x_fin': 'x_fin', 'y_fin': 'y_fin', });
lyr_Ville_F_2.set('fieldAliases', {'x_fin': 'x_fin', 'y_fin': 'y_fin', 'OBJECTID': 'OBJECTID', 'regions': 'regions', 'FIN_1': 'FIN_1', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Lengh': 'Lengh', 'longueur': 'longueur', });
lyr_Ville_D_3.set('fieldAliases', {'x': 'x', 'y': 'y', 'OBJECTID': 'OBJECTID', 'regions': 'regions', 'DEBUT': 'DEBUT', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Shape': '', 'longueur': 'longueur', });
lyr_Centredesant_4.set('fieldAliases', {'amenity': 'amenity', 'speciality': 'speciality', 'operator': 'operator', 'contact': '', 'source': 'source', 'addr_city': 'addr_city', 'name': 'name', 'changese_3': 'changese_3', 'operator_t': 'operator_t', });
lyr_RESEAU_ROUTIER_WEB_0.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'NOM': 'TextEdit', 'NATURE': 'TextEdit', 'ETAT_1': 'TextEdit', 'PAYS': 'TextEdit', 'AUTEUR': 'TextEdit', 'DATE_DE_CR': 'TextEdit', });
lyr_Mission4_Entretien_classique_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'DEBUT': 'TextEdit', 'FIN_1': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'longueur': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'x_fin': 'TextEdit', 'y_fin': 'TextEdit', });
lyr_Ville_F_2.set('fieldImages', {'x_fin': 'TextEdit', 'y_fin': 'TextEdit', 'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'FIN_1': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Lengh': 'TextEdit', 'longueur': 'TextEdit', });
lyr_Ville_D_3.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'DEBUT': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Shape': 'TextEdit', 'longueur': 'TextEdit', });
lyr_Centredesant_4.set('fieldImages', {'amenity': 'TextEdit', 'speciality': 'TextEdit', 'operator': 'TextEdit', 'contact': 'TextEdit', 'source': 'TextEdit', 'addr_city': 'TextEdit', 'name': 'TextEdit', 'changese_3': 'TextEdit', 'operator_t': 'TextEdit', });
lyr_RESEAU_ROUTIER_WEB_0.set('fieldLabels', {'FNODE_': 'inline label', 'TNODE_': 'inline label', 'LPOLY_': 'inline label', 'RPOLY_': 'inline label', 'LENGTH': 'inline label', 'NOM': 'inline label', 'NATURE': 'inline label', 'ETAT_1': 'inline label', 'PAYS': 'inline label', 'AUTEUR': 'inline label', 'DATE_DE_CR': 'inline label', });
lyr_Mission4_Entretien_classique_1.set('fieldLabels', {'OBJECTID': 'inline label', 'regions': 'inline label', 'DEBUT': 'inline label', 'FIN_1': 'inline label', 'Departemen': 'inline label', 'DISTRICT': 'no label', 'OBSERVATIO': 'inline label', 'Shape_Leng': 'inline label', 'longueur': 'inline label', 'x': 'inline label', 'y': 'inline label', 'x_fin': 'no label', 'y_fin': 'no label', });
lyr_Ville_F_2.set('fieldLabels', {'x_fin': 'inline label', 'y_fin': 'inline label', 'OBJECTID': 'header label', 'regions': 'inline label', 'FIN_1': 'inline label', 'Departemen': 'inline label', 'DISTRICT': 'inline label', 'OBSERVATIO': 'inline label', 'Lengh': 'inline label', 'longueur': 'inline label', });
lyr_Ville_D_3.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'OBJECTID': 'inline label', 'regions': 'inline label', 'DEBUT': 'inline label', 'Departemen': 'inline label', 'DISTRICT': 'inline label', 'OBSERVATIO': 'inline label', 'Shape': 'inline label', 'longueur': 'inline label', });
lyr_Centredesant_4.set('fieldLabels', {'amenity': 'inline label', 'speciality': 'inline label', 'operator': 'inline label', 'contact': 'no label', 'source': 'inline label', 'addr_city': 'inline label', 'name': 'inline label', 'changese_3': 'inline label', 'operator_t': 'inline label', });
lyr_Centredesant_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});