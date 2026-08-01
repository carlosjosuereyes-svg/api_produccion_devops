# Plan de Respaldo y Recuperacion (BACKUP_PLAIN)

**Proyecto:** api-produccion-devops
**Base de Datos:** PostgreSQL

---

## 1. Comandos de Respaldo en Texto Plano (SQL)

### Exportar la base de datos completa:
`ash
pg_dump -U tu_usuario -h tu_host -d nombre_bd > backup.sql
``n
---

## 2. Comandos de Restauracion

### Restaurar la base de datos:
`ash
psql -U tu_usuario -h tu_host -d nombre_bd < backup.sql
``n
---

## 3. Respaldo de Codigo y Configuracion

1. **Codigo fuente:**
   `ash
   git add .
   git commit -m 'docs: backup plan'
   git push origin main
   ``n
2. **Variables de entorno:** Guardar copia segura de .env fuera del repositorio.