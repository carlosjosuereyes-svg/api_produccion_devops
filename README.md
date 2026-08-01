# 🚀 API Producción DevOps

API REST desarrollada con Node.js, Express y PostgreSQL para el entorno de producción y despliegue automatizado con CI/CD.

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalado:
* **Node.js** (versión 18 o superior)
* **npm** (gestor de paquetes de Node)
* **PostgreSQL** (base de datos local o instancia en la nube)
* **Git**

---

## 📥 Instalación del Proyecto

Sigue estos pasos para clonar e instalar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   \\\ash
   git clone https://github.com/carlosjosuereyes-svg/api_produccion_devops.git
   cd api_produccion_devops
   \\\

2. **Instalar dependencias:**
   \\\ash
   npm install
   \\\

---

## ⚙️ Configuración de Variables de Entorno

Crea un archivo \.env\ en la raíz del proyecto basándote en la siguiente estructura:

\\\env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://usuario:password@localhost:5432/nombre_bd
\\\

> ⚠️ **Nota:** No subas el archivo \.env\ a control de versiones (Git).

---

## 🏃‍♂️ Ejecución

* **Modo Desarrollo (con auto-recarga):**
  \\\ash
  npm run dev
  \\\

* **Modo Producción:**
  \\\ash
  npm start
  \\\

---

## 🤖 CI/CD y Despliegue

Este proyecto cuenta con un Pipeline de integración y despliegue continuo configurado con **GitHub Actions** hacia **Render**. Cada cambio enviado a la rama \main\ activará el despliegue automático.
