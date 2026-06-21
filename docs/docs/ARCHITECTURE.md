# System Architecture

## Actors

1. Customer
2. Kitchen Staff
3. Admin

---

## Flow

Customer
→ Scan QR
→ View Menu
→ Place Order
→ Token Generated

Backend
→ Store Order
→ Send Order to Kitchen Dashboard

Kitchen Staff
→ View Orders
→ Mark Preparing
→ Mark Ready

Customer
→ Collect Food

---

## Components

Frontend
- Customer App
- Kitchen Dashboard
- Admin Dashboard

Backend
- Order Service
- Menu Service
- Authentication Service

Database
- PostgreSQL

Realtime Layer
- WebSockets
