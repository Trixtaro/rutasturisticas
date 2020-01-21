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

-- ===================== Datos inciales de prueba =====================

CALL INGRESAR_PERSONA('Test','papi','mami','2222222222','2222222222','1900-01-01','Terrenal','M');
CALL INGRESAR_TELEFONO_POR_CEDULA_PERSONA('0987654321','Movistar','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','testito','fake@mail.dev','2222222222');
CALL INGRESAR_USUARIO_POR_CEDULA_PERSONA('1234','pruebita','fake2@mail.dev','2222222222');

CALL INGRESAR_TURISTA_POR_IDUSUARIO(1);
CALL INGRESAR_GUIA_POR_IDUSUARIO(2,NULL,NULL,NULL);