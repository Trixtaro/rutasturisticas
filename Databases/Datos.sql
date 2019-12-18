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
CALL INGRESAR_LUGAR_SUPER('0', '0', 'Ecuador', 'País');
CALL INGRESAR_LUGAR_SUPER('0', '0', 'Colombia', 'País');

CALL INGRESAR_LUGAR_SUB('0', '0', 'Manabí', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Esmeralda', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Guayas', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Azuay', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Bolívar', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Cañar', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Carchi', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Chimborazo', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Cotopaxi', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'El Oro', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Galápagos', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Imbabura', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Loja', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Los Ríos', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Morona Santiago', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Napo', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Orellana', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Pastaza', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Pichincha', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Santa Elena', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Santo Domingo de los Tsáchilas', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Sucumbíos', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Tungurahua', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Zamora Chinchipe', 'Provincia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Ecuador', 'País'));

CALL INGRESAR_LUGAR_SUB('0', '0', 'Portoviejo', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Manta', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Bolívar', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Chone', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'El Carmen', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Flavio Alfaro', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Jama', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Jaramijó', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Jipijapa', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Junín', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Montecristi', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Olmedo', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Paján', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Pedernales', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Pichincha', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Puerto López', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Rocafuerte', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'San Vicente', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Santa Ana', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Sucre', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Tosagua', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Veinticuatro de Mayo', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Manabí', 'Provincia'));

CALL INGRESAR_LUGAR_SUB('0', '0', 'Abdón Calderón', 'Parroquia Rural', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Alhajuela', 'Parroquia Rural', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Chirijos', 'Parroquia Rural', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Crucita', 'Parroquia Rural', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Pueblo Nuevo', 'Parroquia Rural', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'San Plácido', 'Parroquia Rural', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Riochico', 'Parroquia Rural', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', '12 de marzo', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', '18 de octubre', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Andrés de Vera', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Colón', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Francisco Pacheco', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'San Pablo', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Simón Bolívar', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Picoaza', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Portoviejo', 'Parroquia Urbana', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Portoviejo','Cantón'));

CALL INGRESAR_LUGAR_SUB('0', '0', 'Esmeralda', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Atacames', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Eloy Alfaro', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Muisne', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Quinindé', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Rioverde', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'San Lorenzo', 'Cantón', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Esmeralda','Provincia'));

CALL INGRESAR_LUGAR_SUB('0', '0', 'Galera', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'El Cabo de San Francisco', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Bolívar', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Sálima', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Quingue', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'San Gregorio', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Daule', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'San José de Chamanga', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));
CALL INGRESAR_LUGAR_SUB('0', '0', 'Muisne', 'Parroquia', GET_ID_LUGAR_POR_NOMBRE_Y_CARGO('Muisne','Cantón'));

-- ===================== Datos inciales de prueba =====================

CALL INGRESAR_PERSONA('Test','papi','mami','2222222222','2222222222','01-01-1900','Terrenal','M');
CALL INGRESAR_TELEFONO_POR_CEDULA_PERSONA('0987654321','Movistar','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','testito','fake@mail.dev','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','pruebita','fake2@mail.dev','2222222222');

CALL INGRESAR_TURISTA_POR_IDUSUARIO(1);
CALL INGRESAR_GUIA_POR_IDUSUARIO(2,NULL,NULL,NULL);