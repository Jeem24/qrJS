# 🎫 QR Generador

Herramienta web para generar códigos QR personalizados. Aplicación desarrollada con Node.js y Express que permite crear y descargar códigos QR a partir de cualquier texto o URL.

## 📋 Características

- ✅ Generación de códigos QR en tiempo real
- ✅ API REST para generar códigos QR
- ✅ Interfaz web intuitiva
- ✅ Códigos QR en formato PNG
- ✅ Corrección de errores nivel alto (H)
- ✅ Containerización con Docker
- ✅ Servidor Express de desarrollo con hot-reload

## 🛠️ Requisitos Previos

- **Node.js** 18+ o superior
- **npm** 8+
- **Docker** (opcional, para ejecutar en container)

## 📦 Instalación

### Opción 1: Instalación Local

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd qr
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor**
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### Opción 2: Ejecución con Docker

1. **Construir la imagen Docker**
```bash
docker build -t qr-generador .
```

2. **Ejecutar el container**
```bash
docker run -p 3000:3000 qr-generador
```

El servidor estará disponible en `http://localhost:3000`

## 🚀 Uso

### Endpoints Disponibles

#### 1. **GET `/`**
Página de inicio.
```
http://localhost:3000/
```

#### 2. **GET `/test`**
Página de prueba que muestra un código QR generado con el texto "Hola mundo esto es un texto".
```
http://localhost:3000/test
```

#### 3. **GET `/QRCode?data=<texto>`**
Genera un código QR en formato PNG basado en el parámetro `data`.

**Parámetros:**
- `data` (opcional): Texto o URL a codificar. Por defecto: "texto no enviado"

**Ejemplos:**
```
http://localhost:3000/QRCode?data=Hola%20Mundo
http://localhost:3000/QRCode?data=https://example.com
http://localhost:3000/QRCode?data={"nombre":"John","edad":30}
```

**Respuesta:** Imagen PNG con el código QR

### Ejemplo de Uso en HTML

```html
<img src="http://localhost:3000/QRCode?data=Mi%20Texto" alt="QR Code">
```

### Ejemplo de Uso desde cURL

```bash
curl "http://localhost:3000/QRCode?data=Hello%20World" --output qrcode.png
```

## 📁 Estructura del Proyecto

```
qr/
├── server/
│   └── app.js              # Servidor Express principal
├── qrGenerador.js          # Lógica de generación de códigos QR
├── index.html              # Interfaz web
├── package.json            # Dependencias del proyecto
├── Dockerfile              # Configuración para Docker
└── README.md               # Este archivo
```

## 📚 Detalles Técnicos

### Dependencias

- **express** (5.1.0): Framework web minimalista de Node.js
- **qrcode** (1.5.4): Biblioteca para generar códigos QR

### Configuración de QR

Los códigos QR se generan con las siguientes opciones:
- **Corrección de errores**: Nivel H (30% de recuperación)
- **Margen**: 0 píxeles

### Scripts Disponibles

```bash
npm run dev    # Inicia el servidor en modo desarrollo con hot-reload
```

## 🐳 Docker

### Archivo Dockerfile

El proyecto incluye un `Dockerfile` basado en Node.js Alpine (20) que:
- Establece el directorio de trabajo en `/app`
- Instala las dependencias necesarias
- Expone el puerto 3000
- Ejecuta el servidor con `node ./server/app.js`

### Construcción y Ejecución

```bash
# Construir imagen
docker build -t qr-generador .

# Ejecutar container
docker run -p 3000:3000 qr-generador

# Ejecutar con bind mount para desarrollo
docker run -p 3000:3000 -v $(pwd):/app qr-generador
```

## 🔧 Desarrollo

Para desarrollar con hot-reload:

```bash
npm run dev
```

Esto iniciará el servidor con `--watch`, que reiniciará automáticamente cuando detecte cambios en los archivos.

## 📝 Autor

- **Jesus Escalante**

## 📄 Licencia

ISC

## 📞 Soporte

Para reportar problemas o sugerencias, por favor contactar al autor o abrir un issue en el repositorio.

---

**Última actualización**: Febrero 2026
