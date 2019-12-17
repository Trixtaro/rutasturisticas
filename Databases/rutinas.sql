-- Tiempo de generación de este archivo: 29-11-2019 a las 07:19:05
-- 
-- Proyecto
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

-- ========================================================
-- =                                                      =
-- =  PROCEDMIENTOS ALMACENADOS                           =
-- =                                                      =
-- ========================================================

-- ========================================================

--
-- Definición del procedimiento INGRESAR_PERSONA
--

DROP PROCEDURE IF EXISTS INGRESAR_PERSONA;

DELIMITER $$

CREATE PROCEDURE INGRESAR_PERSONA (
	IN NOMBRES VARCHAR(50),
	IN APELLIDO_PATERNO VARCHAR(15),
	IN APELLIDO_MATERNO VARCHAR(15),
	IN CEDULA VARCHAR(10),
	IN PASAPORTE VARCHAR(15),
	IN F_NACIMIENTO DATE,
	IN NACIONALIDAD VARCHAR(20),
	IN GENERO CHAR(1)
)
BEGIN
	INSERT INTO Persona (
		f_ingreso,
		nombres,
		apellido_paterno,
		apellido_materno,
		cedula,
		pasaporte,
		f_nacimiento,
		nacionalidad,
		genero
	) VALUES (
		NOW(),
		NOMBRES,
		APELLIDO_PATERNO,
		APELLIDO_MATERNO,
		CEDULA,
		PASAPORTE,
		F_NACIMIENTO,
		NACIONALIDAD,
		GENERO
	);
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento INGRESAR_TELEFONO_POR_ID_PERSONA
--

DROP PROCEDURE IF EXISTS INGRESAR_TELEFONO_POR_ID_PERSONA;

DELIMITER $$

CREATE PROCEDURE INGRESAR_TELEFONO_POR_ID_PERSONA (
	IN NUMERO VARCHAR(10),
	IN OPERADORA VARCHAR(25),
	IN ID_PERSONA INT
)
BEGIN
	INSERT INTO Telefono (
		numero,
		operadora,
		f_ingreso,
		ID_persona
	) VALUES (
		NUMERO,
		OPERADORA,
		NOW(),
		ID_PERSONA
	);
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento INGRESAR_TELEFONO_POR_CEDULA_PERSONA
--

DROP PROCEDURE IF EXISTS INGRESAR_TELEFONO_POR_CEDULA_PERSONA;

DELIMITER $$

CREATE PROCEDURE INGRESAR_TELEFONO_POR_CEDULA_PERSONA (
	IN NUMERO VARCHAR(10),
	IN OPERADORA VARCHAR(25),
	IN CEDULA VARCHAR(10)
)
BEGIN
	IF ( GET_ID_PERSONA_POR_CEDULA(CEDULA) = 0 ) THEN
		SELECT '0' AS RESULTADO;
	ELSE
		INSERT INTO Telefono (
			numero,
			operadora,
			f_ingreso,
			ID_persona
		) VALUES (
			NUMERO,
			OPERADORA,
			NOW(),
			GET_ID_PERSONA_POR_CEDULA(CEDULA)
		);
	END IF;
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento INGRESAR_USUARIO_POR_CEDULA_PERSONA
--

DROP PROCEDURE IF EXISTS INGRESAR_USUARIO_POR_CEDULA_PERSONA;

DELIMITER $$

CREATE PROCEDURE INGRESAR_USUARIO_POR_CEDULA_PERSONA (
	IN CLAVE CHAR(64),
	IN NICKNAME VARCHAR(25),
	IN CORREO VARCHAR(100),
	IN CEDULA VARCHAR(10)
)
BEGIN
	IF ( GET_ID_PERSONA_POR_CEDULA(CEDULA) = 0 ) THEN
		SELECT '0' AS RESULTADO;
	ELSE
		INSERT INTO Usuario (
			f_ingreso,
			clave,
			nickname,
			correo,
			ID_persona
		) VALUES (
			NOW(),
			CLAVE,
			NICKNAME,
			CORREO,
			GET_ID_PERSONA_POR_CEDULA(CEDULA)
		);
	END IF;
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento INGRESAR_LUGAR_SUPER
--

DROP PROCEDURE IF EXISTS INGRESAR_LUGAR_SUPER;

DELIMITER $$

CREATE PROCEDURE INGRESAR_LUGAR_SUPER (
	IN LATITUD VARCHAR(10),
	IN LONGITUD VARCHAR(10),
	IN NOMBRE VARCHAR(50),
	IN CARGO VARCHAR(25)
)
BEGIN
	INSERT INTO Lugar (
		f_ingreso,
		latitud,
		longitud,
		nombre,
		cargo,
		ID_lugar_super
	) VALUES (
		NOW(),
		LATITUD,
		LONGITUD,
		NOMBRE,
		CARGO,
		NULL
	);
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento INGRESAR_LUGAR_SUB
--

DROP PROCEDURE IF EXISTS INGRESAR_LUGAR_SUB;

DELIMITER $$

CREATE PROCEDURE INGRESAR_LUGAR_SUB (
	IN LATITUD VARCHAR(10),
	IN LONGITUD VARCHAR(10),
	IN NOMBRE VARCHAR(50),
	IN CARGO VARCHAR(25),
	IN ID_SUPER INT
)
BEGIN
	INSERT INTO Lugar (
		f_ingreso,
		latitud,
		longitud,
		nombre,
		cargo,
		ID_lugar_super
	) VALUES (
		NOW(),
		LATITUD,
		LONGITUD,
		NOMBRE,
		CARGO,
		ID_SUPER
	);
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento INGRESAR_TURISTA_POR_IDUSUARIO
--

DROP PROCEDURE IF EXISTS INGRESAR_TURISTA_POR_IDUSUARIO;

DELIMITER $$

CREATE PROCEDURE INGRESAR_TURISTA_POR_IDUSUARIO (
	IN ID_USUARIO INT
)
BEGIN
	INSERT INTO Turista (
		f_ingreso,
		ID_usuario
	) VALUES (
		NOW(),
		ID_USUARIO
	);
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento INGRESAR_GUIA_POR_IDUSUARIO
--

DROP PROCEDURE IF EXISTS INGRESAR_GUIA_POR_IDUSUARIO;

DELIMITER $$

CREATE PROCEDURE INGRESAR_GUIA_POR_IDUSUARIO (
	IN ID_USUARIO INT,
	IN ESTADO CHAR(1),
	IN FOTO_IDENTIFICACION BLOB,
	IN CERTIFICADO BLOB
)
BEGIN
	INSERT INTO Guia (
		f_ingreso,
		ID_usuario,
		estado,
		foto_identificacion,
		certificado
	) VALUES (
		NOW(),
		ID_USUARIO,
		ESTADO,
		FOTO_IDENTIFICACION,
		CERTIFICADO
	);
END$$

DELIMITER ;

-- ========================================================

--
-- Definición del procedimiento MOSTRAR_LUGARES
--

DROP PROCEDURE IF EXISTS MOSTRAR_LUGARES;

DELIMITER $$

CREATE PROCEDURE MOSTRAR_LUGARES (
)
BEGIN
	SELECT CONCAT(sub.nombre,' (',sub.cargo,')') AS 'Nombre del lugar', CONCAT(super.nombre,' (',super.cargo,')') AS 'Nivel Administrativo Superior' 
	FROM lugar AS sub LEFT JOIN lugar AS super ON ( super.ID_lugar = sub.ID_lugar_super );
END$$

DELIMITER ;

-- ========================================================
-- =                                                      =
-- =  FUNCIONES                                           =
-- =                                                      =
-- ========================================================

-- ========================================================

--
-- Definición de la función GET_ID_PERSONA_POR_CEDULA
--

DROP FUNCTION IF EXISTS GET_ID_PERSONA_POR_CEDULA;

DELIMITER $$

CREATE FUNCTION GET_ID_PERSONA_POR_CEDULA (
  CEDULA VARCHAR(10)
) RETURNS INT
BEGIN
  DECLARE ID_RESULTADO INT DEFAULT 0;
  SET ID_RESULTADO = ( SELECT Persona.ID_persona FROM Persona WHERE Persona.cedula = CEDULA );
  IF ( ID_RESULTADO IS NOT NULL ) THEN
    RETURN ID_RESULTADO;
  ELSE
    RETURN '0';
  END IF;
END$$

DELIMITER ;

-- ========================================================

--
-- Definición de la función GET_ID_LUGAR_POR_NOMBRE_Y_CARGO
--

DROP FUNCTION IF EXISTS GET_ID_LUGAR_POR_NOMBRE_Y_CARGO;

DELIMITER $$

CREATE FUNCTION GET_ID_LUGAR_POR_NOMBRE_Y_CARGO (
  NOMBRE VARCHAR(50),
	CARGO VARCHAR(25)
) RETURNS INT
BEGIN
  DECLARE ID_RESULTADO INT DEFAULT 0;
  SET ID_RESULTADO = ( SELECT Lugar.ID_lugar FROM Lugar WHERE Lugar.cargo = CARGO AND Lugar.nombre = NOMBRE );
  IF ( ID_RESULTADO IS NOT NULL ) THEN
    RETURN ID_RESULTADO;
  ELSE
    RETURN '0';
  END IF;
END$$

DELIMITER ;