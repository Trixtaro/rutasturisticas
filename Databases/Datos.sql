-- Tiempo de generación de este archivo: viernes, 13 de dicimebre de 2019 a las 08:30:53
-- 
-- Proyecto MC&FC
-- Ingeniería de Interfaces
-- Noveno Semestre / Paralelo "A" 
-- Docente Guía
-- 		Ing. Veloz Zambrano Jorge Luis
-- Periodo Aacadémico
-- 		Octubre  2019 - Febrero 2020
-- Equipo Responsable
-- 		Briones Cedeño Cinthya Stephanie
-- 		Cedeño Mendoza Wilmer David
-- 		Giler Velásquez Gema Briggite
-- 		Marcillo Delgado Bryan Steeven
-- 		Suárez Aragundy José Luis

-- ===================== Datos inciales para que funcione correctamente el sistema =====================

-- ===================== Datos inciales para que funcione correctamente el sistema =====================
CALL INGRESAR_ZONA_SUPER('0', '0', 'Ecuador', 'Pais','Es un Pais muy bonito');
CALL INGRESAR_ZONA_SUPER('0', '0', 'Colombia', 'Pais','Es un Pais de café');

CALL INGRESAR_ZONA_SUB('0', '0', 'Manabí', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Esmeralda', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Guayas', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Azuay', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Bolívar', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Cañar', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Carchi', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Chimborazo', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Cotopaxi', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'El Oro', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Galápagos', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Imbabura', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Loja', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Los Ríos', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Morona Santiago', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Napo', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Orellana', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pastaza', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pichincha', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Santa Elena', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Santo Domingo de los Tsáchilas', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Sucumbíos', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Tungurahua', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Zamora Chinchipe', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'Pais'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Portoviejo', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Manta', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Bolívar', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Chone', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'El Carmen', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Flavio Alfaro', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Jama', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Jaramijó', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Jipijapa', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Junín', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Montecristi', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Olmedo', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Paján', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pedernales', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pichincha', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Puerto López', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Rocafuerte', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Vicente', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Santa Ana', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Sucre', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Tosagua', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Veinticuatro de Mayo', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Quito','Canton','Capital del Ecuador', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Pichincha', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Guayaquil','Canton','Perla del Pacífico', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Guayas', 'Provincia'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Abdón Calderón', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Alhajuela', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Chirijos', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Crucita', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pueblo Nuevo', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Plácido', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Riochico', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', '12 de marzo', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', '18 de octubre', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Andrés de Vera', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Colón', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Francisco Pacheco', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Pablo', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Simón Bolívar', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Picoaza', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Portoviejo', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Canton'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Esmeralda', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Atacames', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Eloy Alfaro', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Muisne', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Quinindé', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Rioverde', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Lorenzo', 'Canton','Canton muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Galera', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'El Cabo de San Francisco', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Bolívar', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Sálima', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Quingue', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Gregorio', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Daule', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San José de Chamanga', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Muisne', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Canton'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Guayaquil', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Guayaquil','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Quito', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Quito','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Manta', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manta','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Tarqui', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manta','Canton'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Mateo', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manta','Canton'));

INSERT INTO Lugar (nombre, descripcion, altura_sobre_nivel_del_mar, latitud, longitud, URL_img, ID_zona) values
('Catedral Metropolitana de Portoviejo Jesús El Buen Pastor', 'Es una edificación moderna de formas históricas con bóveda de crucería, las naves laterales, arcos formados de medio punto y bóveda de media en la nave central.
La fachada está formada por un conjunto de dos cuputín y linterna rodeada por ventanas de arcos. Un rosetón con vitral de acrílico y tres puertas, dos laterales y una central con archivoltas columnas laterales de fuste acanalado en tambores, con campanas de bronce con carillón', 91, '-1.052353', '-80.45379', 'http://i.eldiario.com.ec/fotos-manabi-ecuador/2019/03/20190311110000_hoy-es-asueto-por-fundacia-n.jpg',64),
('Parque Vicente Amador Flor', 'Cuando visites Portoviejo, no puedes dejar de visitar el parque Central, lleno de historia y cerca de las instituciones publicas, al igual que un Museo frente al mismo, centro comercial y lugares de interés. Hermoso.', 91, '-1.057656', '-80.450906', 'https://c2.staticflickr.com/8/7144/6474535063_a016238dc7_b.jpg',64),
('El Museo Portoviejo y Archivo Histórico ', 'El Museo Portoviejo y Archivo Histórico es parte de la Red Nacional de Museos del Ministerio de Cultura y Patrimonio y su objetivo es salvaguardar y estudiar los fondos arqueológicos, artísticos y documentales de la región para sustentar con ellos exposiciones de historia y arte que promueven la reflexión sobre Manabí y el Pais, y de esta manera fortalecer la Identidad Nacional.', 91, '-1.057141', '-80.451001', 'http://www.forosecuador.ec/imgfe/xlugares-turisticos-provincia-manabi-12.jpg.pagespeed.ic.PcpprMs0DA.jpg',64),
('Parque Las Vegas', 'El Parque Las Vegas es un parque de la capital Manabita. Es considerado como el pulmón de la capital manabita Portoviejo. Las Vegas comprende una extensión de 10,5 hectáreas, posee un imponente teatro al aire libre, una glorieta, y locales comerciales.', 91, '-1.060658', '-80.449181', 'https://www.eldiario.ec/especial/parque-las-vegas/img/17_opt.jpg',64),
('Arqueo-Museo Hojas Jaboncillo', 'El Arqueo-Museo Hojas Jaboncillo presenta en su exposición museográfica la puesta en valor de los resultados de cinco años de investigaciones arqueológicas realizadas en el área patrimonial de los Cerros de Hojas y Jaboncillo.', 120, '-1.043901', '-80.52877', 'https://www.hojas-jaboncillo.gob.ec/wp-content/uploads/wp-banners-lite/banner_c7379c519a212925de7c253d9e6fe59c.jpg',63),
('Teleférico', 'Con un recorrido de 18 minutos, contemplarás la ciudad de Quito en las cabinas del Teleférico, llegando a la base en la que podrás realizar diversas actividades acorde a tus gustos y preferencias. A unos minutos de la ciudad, puedes presenciar y vivir un verdadero lugar mágico e incomparable.', 3269, '-0.192303', '-78.519371', 'https://teleferico.com.ec/wp-content/uploads/2019/04/imagen_inicio3.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Quito','Parroquia')),
('Mitad del Mundo', 'En la Mitad del Mundo en Quito se construyó un obelisco y un complejo monumental alusivos a la línea equinoccial, se levantan tesoros del arte, la arquitectura y la ciencia, en medio de paisajes que confrontan el verdor de la naturaleza y los matices de la modernidad. El monumento está coronado por una esfera metálica que representa a la Tierra.', 2645, '-1.260702', '-78.609894', 'https://cdn.getyourguide.com/img/tour_img-478848-146.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Quito','Parroquia')),
('Parque Metropolitano de Quito Guanguiltagua', 'El parque ha sido estrategicamente ubicado para conectarlo con el Qhapaq Ñan o Camino del Inca, uno de los sitios de interés de Quito pues era una antigua ruta que unificaba de norte a sur todo el imperio incaico y que hoy es patrimonio cultural de la Región Andina del Ecuador.', 2800, '-0.178296', '-78.463485', 'https://image.routeyou.com/shrink/fit/400x300/e59b34645e45f7929cfccbd0da313455_d7507176353e8b3a35854f9651bb471bf8a6a123.jpeg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Quito','Parroquia')),
('Monumental Plaza de Toros', 'La Monumental Plaza de Toros Quito es un escenario privado de la ciudad de Quito dedicado a la tauromaquia.', 2833, '-0.163199', '-78.484078', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/PLAZA_TOROS_QUITO_%2814847885289%29.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Quito','Parroquia')),
('Malecón Simón Bolívar (2000)', 'Este parque urbano, lleno de naturaleza, historia, tradición, modernismo y belleza es un atractivo turístico que posee una extensión de 2.5 kilómetros (26 cuadras), en el que se encuentran: jardines, lagunas artificiales, fuentes de agua, miradores, muelles plazas, monumentos históricos como La Rotonda, la Torre Morisca, la Aurora Gloriosa y la estatua a  Olmedo;  museos, cine, centros comerciales, restaurantes, bares, patios de comida, juegos infantiles y todos los atractivos, servicios y comodidades que necesita un turista. Además se ofrecen recorridos por el río Guayas.', 8, '-2.186745', '-79.877435', 'https://i.pinimg.com/originals/8a/c2/83/8ac2832c190b2a084179f931b74d3834.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Guayaquil','Parroquia')),
('Las Peñas', 'A los pies del Cerro Santa Ana y a pocos metros del Malecón 2000, se encuentra este emblemático barrio histórico, conocido como el lugar fundacional de la ciudad, conservando aún su apariencia colonial, con estrechas calles empedradas y coloridas arquitecturas en madera.', 8, '-2.181686', '-79.875375', 'https://elcomercio.pe/resizer/5Roq0U0zTo4cF0F5X2QWGvj-2xY=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KUXVSPHKIRGQ5ECYLXJA7PZT2Q.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Guayaquil','Parroquia')),
('Malecón El Salado', 'A orillas del estero del mismo nombre, se encuentra este encantador Malecón de aproximadamente 400 metros de extensión, conformado por dos explanadas unidas a través de un puente peatonal colgante, de 55 metros de longitud, en un entorno de jardines, miradores a la ciudad y locales de comida.', 8, '-2.187459', '-79.898332', 'https://www.guayaquilesmidestino.com/sites/default/files/header/puente-el-velero-portada.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Guayaquil','Parroquia')),
('Parque Histórico', 'El parque acerca al turista al contexto geopolítico de antaño, pues recrea los diferentes ámbitos en que se desarrollaban los habitantes de la entonces provincia de Guayaquil con su modo de  vida en el bosque, el campo y la ciudad, lo que guarda una estrecha relación con la denominada Edad de Oro del puerto principal del Ecuador cuya principal actividad era el cultivo y comercialización del cacao.', 2, '-2.145159', '-79.869692', 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6b/b5/43.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Guayaquil','Parroquia')),
('Parque Seminario', 'También conocido como el Parque de las Iguanas, corresponde a la antigua Plaza de Armas de la ciudad, un bello rincón urbano para descansar entre jardines, glorietas y monumentos, disfrutando del espectáculo que brindan las exóticas iguanas que suelen pasear entre sus prados.', 8, '-2.194686', '-79.88318', 'https://www.guayaquilesmidestino.com/sites/default/files/7._parque_seminario_cj_gonzalez.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Guayaquil','Canton')),
('Playa de Tarqui', 'Es en numerosos sentidos una ribera más atmosférica, donde los marineros y arquitectos de barcos aún practican su oficio. De individual interés es el sencillo astillero que se encuentra al aire libre justo en la ribera, justo en la zona este del Río Manta, desde allí  se consigue ver como formidables arrastreros productivos de pesca de madera se encuentran edificadas por artesanos competentes.', 0, '-0.949751', '-80.714236', 'https://i.ytimg.com/vi/cAiA67wd_Co/maxresdefault.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Tarqui','Parroquia')),
('Playa Barbasquillo', 'Hacia la zona Oeste desde Ribera Murciélago se localiza Playa Barbasquillo, que está mucho menos desenvuelto, sin embargo es muy peñascosa en varios lugares igualmente podrá conocer este término turístico de Ecuador.', 0, '-0.944054', '-80.741921', 'https://pbs.twimg.com/media/DBzWaoXXYAAmLTx.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('San Mateo','Parroquia')),
('Museo Municipal Etnográfico Cancebi', 'El museo cuenta con una recopilación de aparatos indígenas precolombinos pertenecientes a numerosas tribus de la ribera de Manabí.', 0, '-0.947613', '-80.721712', 'https://revistademanabi.files.wordpress.com/2018/10/reapertura-museo-cancebc3ad-manta-pc3bablico.jpg?w=1024',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manta','Parroquia')),
('Playa Murciélago', 'Es una de las más visitadas de Manta, cuenta con el Malecón Escénico, compuesto por restaurantes, áreas para deportes recreacionales, mercados de artesanías, bares y otros lugares para la diversión y relajación.', 0, '-0.939814', '-80.730674', 'https://i.ytimg.com/vi/9X5KLTnFrmg/maxresdefault.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manta','Parroquia')),
('Museo Centro Cultural Manta', 'El Museo Centro Cultural Manta presenta un recorrido por el acervo cultural de la antigua provincia de Manabí, que comprende las culturas Valdivia, Machalilla, Chorrera, Jama Coaque, Bahía, Guangala y Manteño, a la que la ciudad debe su nombre. De esta cultura se pueden observar durante el recorrido las sillas en forma de U y varios artefactos que permiten vincular el pasado con la identidad manteña contemporánea. Otros servicios que oferta son salas de exposiciones temporales que acogen propuestas de arte y talleres artesanales de la zona, auditorio, sala de lectura, área de investigadores y tienda de publicaciones y artesanías.', 0, '-0.941895', '-80.730346', 'https://st2.depositphotos.com/1017187/7291/i/450/depositphotos_72918945-stock-photo-exteriors-of-cultural-center-musem.jpg',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manta','Parroquia'));

-- ===================== Datos inciales de prueba =====================

CALL INGRESAR_PERSONA('Test','papi','mami','2222222222','2222222222','1900-01-01','Terrenal','M');
CALL INGRESAR_TELEFONO_POR_CEDULA_PERSONA('0987654321','Movistar','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','testito','fake@mail.dev','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','pruebita','fake2@mail.dev','2222222222');

CALL INGRESAR_TURISTA_POR_IDUSUARIO(1);
CALL INGRESAR_GUIA_POR_IDUSUARIO(2,NULL,NULL,NULL);