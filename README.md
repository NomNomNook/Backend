# Backend
This is the backend for NomNomNook. Build using Express and Node.js to fulfil your hunger needs

# Dev Guidelines
## Setting Project Locally

Make sure you have `node.js` installed
```cmd
nvm install && nvm use
```

Install Dependency 
```cmd 
npm i
```
# API Spec

## User Spec

| Api | Payload | Response |
| ---- | ----- | ------ |
| ``` /user/login ``` | ```{}``` | ```{}``` |
| ``` /user/signup ``` | ```{}``` | ```{}``` |
| ``` /user/reservations ``` | ```{}``` | ```{}``` |
| ``` /user/reservation/:id ``` | ```{}``` | ```{}``` |
| ``` /user/reservation/new ``` | ```{ date: Time, restaurant_id: int, persons: int, order: Object<item_id: qty>  }``` | ```{ status: 200 OK}``` |
| ``` /user/reservation/update/:id ``` | ```{ id: Reservation Id }``` | ```{ status: 200 OK }``` |
| ``` /user/reservation/cancel/:id ``` | ```{ id: Reservation Id }``` | ```{ status: 200 OK }``` |
| ``` /user/provide-rating/:res_id ``` | ```{ stars: int, desc: text }``` | ```{}``` |


## Admin Spec

| Api | Payload | Response |
| ---- | ----- | ------ |
| ``` /admin/login ``` | ```{ username: text, password: text }``` | ```{}``` |
| ``` /admin/signup ``` | ```{ name: text, password: text, email: email, phone: text }``` | ```{}``` |
| ``` /admin/restaurants/:id``` | ```{ admin_id: int}``` | ```{ restaurants: [ restaurant{} ] }``` |
| ``` /admin/restaurant/menu/:id ``` | ```{}``` | ```{}``` |
| ``` /admin/restaurant/new ``` | ```{}``` | ```{ status: OK}``` |
| ``` /admin/restaurant/update/:id ``` | ```{ restaurant: Object }``` | ```{}``` |
| ``` /admin/restaurant/mark-offline/:id ``` | ```{}``` | ```{}``` |
| ``` /admin/restaurant/reservations ``` | ```{}``` | ```{}``` |
| ``` /admin/restaurant/reservation/cancel ``` | ```{ id: reservation_id}``` | ```{}``` |
| ``` /admin/restaurant/reservations/update``` | ```{ reservation: Object }``` | ```{}``` |

## Analytics Spec

| Api | Payload | Response |
| ---- | ----- | ------ |
| ``` /analytics/footfall/avg/:restraunt_id ``` | ```{ restaurant_id: int}``` | ```{ avg_footfall_per_day: int }``` |
| ``` /analytics/ctr ``` | ```{ restaurant_id: int}``` | ```{ ctr_percentage: int }``` |
| ``` /analytics/search_rate ``` | ```{ restaurant_id: int}``` | ```{ searchRatePercent: int} ``` |


