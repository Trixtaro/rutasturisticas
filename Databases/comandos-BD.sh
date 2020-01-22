echo Script para ingresar archivos SQL a la base de datos RutasTuristicas

USUARIO=root
HOST=localhost
CLAVE=CodeGeass
PORT=3306

mysql -u $USUARIO -h $HOST -p$CLAVE --port=$PORT < Fuente.sql
echo Base de datos creada...

mysql -u $USUARIO -h $HOST -p$CLAVE --port=$PORT RutasTuristicas < rutinas.sql
echo Rutinas actualizadas...

mysql -u $USUARIO -h $HOST -p$CLAVE --port=$PORT RutasTuristicas < disparadores.sql
echo Triggers actualizados...

mysql -u $USUARIO -h $HOST -p$CLAVE --port=$PORT RutasTuristicas < Datos.sql
echo Datos ingresados...
