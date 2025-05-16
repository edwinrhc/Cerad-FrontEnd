# CeradFrontEnd 🚀

Frontend del sistema **CERAD** desarrollado con **Angular 19**, siguiendo arquitectura modular (Core, Shared, Features) y buenas prácticas.

Este proyecto se comunica con el backend **CeradSystem API REST** (Spring Boot) para gestionar la carga y procesamiento de archivos.

---

## 📦 Tecnologías usadas

- ✅ Angular 19 (CLI 19.2.12)
- ✅ TypeScript
- ✅ Tailwind CSS 3.3.5 with PostCSS a (estilización rápida y profesional)
- ✅ Husky + Commitlint + Commitizen (convención de commits automatizada)
- ✅ Comunicación con API REST (Spring Boot Backend)

---

## 🏁 Instalación y ejecución

### 1️⃣ Clonar el proyecto
```bash
git clone https://github.com/tu-usuario/cerad-frontend.git
cd cerad-frontend
```

### 2️⃣ Instalar dependencias
````
npm install
````
### 3️⃣ Levantar servidor de desarrollo
````
ng serve -o
````
Accede en tu navegador a http://localhost:4200/.

### 🌐 Conexión al Backend
Este frontend se comunica con el backend CeradSystem API REST que debe estar ejecutándose en:
````
http://localhost:8080/api/
````

### 🎨 Configuración Tailwind CSS
Tailwind está integrado en este proyecto.
Si deseas personalizar el diseño:
 - Edita tailwind.config.js para extender temas, colores, breakpoints, etc.
 - Usa clases utilitarias directamente en los componentes.
 - 
### ✅ Estructura del Proyecto
````
src/
└── app/
├── core/        # Servicios base, guards, interceptors
├── shared/      # Componentes reutilizables (Header, Footer, Navbar)
└── features/    # Módulos funcionales (auth, dashboard, uploads, usuarios)
````


## ✅ Convención de Commits (automatizada)
### 1️⃣ Configurar mensaje de commit automático

````
git config commit.template .gitmessage
````

---

## ✅ ¿Qué logras con esto?
✔️ Profesional, claro y práctico  
✔️ Comunicas que es un frontend que se conecta a tu backend Spring Boot  
✔️ Tienes los comandos para commits automatizados  
✔️ Documentas Tailwind, estructura, flujos

