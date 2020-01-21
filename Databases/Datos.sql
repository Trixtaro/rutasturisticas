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
CALL INGRESAR_ZONA_SUPER('0', '0', 'Ecuador', 'País','Es un país muy bonito');
CALL INGRESAR_ZONA_SUPER('0', '0', 'Colombia', 'País','Es un país de café');

CALL INGRESAR_ZONA_SUB('0', '0', 'Manabí', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Esmeralda', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Guayas', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Azuay', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Bolívar', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Cañar', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Carchi', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Chimborazo', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Cotopaxi', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'El Oro', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Galápagos', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Imbabura', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Loja', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Los Ríos', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Morona Santiago', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Napo', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Orellana', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pastaza', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pichincha', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Santa Elena', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Santo Domingo de los Tsáchilas', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Sucumbíos', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Tungurahua', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Zamora Chinchipe', 'Provincia','Provincia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Portoviejo', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Manta', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Bolívar', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Chone', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'El Carmen', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Flavio Alfaro', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Jama', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Jaramijó', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Jipijapa', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Junín', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Montecristi', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Olmedo', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Paján', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pedernales', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pichincha', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Puerto López', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Rocafuerte', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Vicente', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Santa Ana', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Sucre', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Tosagua', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Veinticuatro de Mayo', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Abdón Calderón', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Alhajuela', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Chirijos', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Crucita', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Pueblo Nuevo', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Plácido', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Riochico', 'Parroquia Rural', 'Parroquia muy bonita',GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', '12 de marzo', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', '18 de octubre', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Andrés de Vera', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Colón', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Francisco Pacheco', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Pablo', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Simón Bolívar', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Picoaza', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Portoviejo', 'Parroquia Urbana','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Esmeralda', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Atacames', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Eloy Alfaro', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Muisne', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Quinindé', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Rioverde', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Lorenzo', 'Cantón','Cantón muy bonito', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));

CALL INGRESAR_ZONA_SUB('0', '0', 'Galera', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'El Cabo de San Francisco', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Bolívar', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Sálima', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Quingue', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San Gregorio', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Daule', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'San José de Chamanga', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_ZONA_SUB('0', '0', 'Muisne', 'Parroquia','Parroquia muy bonita', GET_ID_ZONA_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));

-- ===================== Datos inciales de prueba =====================

CALL INGRESAR_PERSONA('Test','papi','mami','2222222222','2222222222','1900-01-01','Terrenal','M');
CALL INGRESAR_TELEFONO_POR_CEDULA_PERSONA('0987654321','Movistar','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','testito','fake@mail.dev','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','pruebita','fake2@mail.dev','2222222222');

CALL INGRESAR_TURISTA_POR_IDUSUARIO(1);
CALL INGRESAR_GUIA_POR_IDUSUARIO(2,NULL,NULL,NULL);