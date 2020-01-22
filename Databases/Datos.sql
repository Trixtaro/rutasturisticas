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

INSERT INTO Lugar (nombre, descripcion, altura_sobre_nivel_del_mar, latitud, longitud, URL_img, ID_zona) values
('Catedral Metropolitana de Portoviejo Jesús El Buen Pastor', 'Es una edificación moderna de formas históricas con bóveda de crucería, las naves laterales, arcos formados de medio punto y bóveda de media en la nave central.
La fachada está formada por un conjunto de dos cuputín y linterna rodeada por ventanas de arcos. Un rosetón con vitral de acrílico y tres puertas, dos laterales y una central con archivoltas columnas laterales de fuste acanalado en tambores, con campanas de bronce con carillón', 91, '-1.052353', '-80.45379', 'http://i.eldiario.com.ec/fotos-manabi-ecuador/2019/03/20190311110000_hoy-es-asueto-por-fundacia-n.jpg',64),
('Parque Vicente Amador Flor', 'Cuando visites Portoviejo, no puedes dejar de visitar el parque Central, lleno de historia y cerca de las instituciones publicas, al igual que un Museo frente al mismo, centro comercial y lugares de interés. Hermoso.', 91, '-1.057656', '-80.450906', 'https://c2.staticflickr.com/8/7144/6474535063_a016238dc7_b.jpg',64),
('El Museo Portoviejo y Archivo Histórico ', 'El Museo Portoviejo y Archivo Histórico es parte de la Red Nacional de Museos del Ministerio de Cultura y Patrimonio y su objetivo es salvaguardar y estudiar los fondos arqueológicos, artísticos y documentales de la región para sustentar con ellos exposiciones de historia y arte que promueven la reflexión sobre Manabí y el Pais, y de esta manera fortalecer la Identidad Nacional.', 91, '-1.057141', '-80.451001', 'http://www.forosecuador.ec/imgfe/xlugares-turisticos-provincia-manabi-12.jpg.pagespeed.ic.PcpprMs0DA.jpg',64),
('Parque Las Vegas', 'El Parque Las Vegas es un parque de la capital Manabita. Es considerado como el pulmón de la capital manabita Portoviejo. Las Vegas comprende una extensión de 10,5 hectáreas, posee un imponente teatro al aire libre, una glorieta, y locales comerciales.', 91, '-1.060658', '-80.449181', 'https://www.eldiario.ec/especial/parque-las-vegas/img/17_opt.jpg',64),
('Arqueo-Museo Hojas Jaboncillo', 'El Arqueo-Museo Hojas Jaboncillo presenta en su exposición museográfica la puesta en valor de los resultados de cinco años de investigaciones arqueológicas realizadas en el área patrimonial de los Cerros de Hojas y Jaboncillo.', 120, '-1.043901', '-80.52877', 'https://www.hojas-jaboncillo.gob.ec/wp-content/uploads/wp-banners-lite/banner_c7379c519a212925de7c253d9e6fe59c.jpg',63);

-- ===================== Datos inciales de prueba =====================

CALL INGRESAR_PERSONA('Test','papi','mami','2222222222','2222222222','1900-01-01','Terrenal','M');
CALL INGRESAR_TELEFONO_POR_CEDULA_PERSONA('0987654321','Movistar','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','testito','fake@mail.dev','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','pruebita','fake2@mail.dev','2222222222');

CALL INGRESAR_TURISTA_POR_IDUSUARIO(1);
CALL INGRESAR_GUIA_POR_IDUSUARIO(2,NULL,NULL,NULL);