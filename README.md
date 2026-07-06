# ViennaMap

Interaktive Web-App zur Darstellung und Filterung von Orten (Cafés, Bars, Restaurants, Einkaufsläden) auf einer Karte.

🚀 Tech Stack \
\
Backend: ASP.NET Core (.NET 10), Entity Framework Core, SQLite \
Frontend: React, TypeScript, React Leaflet \
Architektur: Clean Architecture (Domain / Application / Infrastructure / API) \
\
✨ Features \
\
Anzeige von Orten als GeoJSON auf einer Karte \
Filter nach Kategorien \
Synchronisation von Map & Liste (Marker ↔ Sidebar) \
REST API mit optionalen Query-Parametern \
\
🔌 API \
\
GET /api/places \
GET /api/places?category=cafe \
\
⚙️ Setup 
# Backend
dotnet ef database update \
dotnet run 

# Frontend
npm install \
npm run dev \
\
-> Nutzung von GeoJSON als Standardformat \
-> State-Synchronisation zwischen UI-Komponenten 

