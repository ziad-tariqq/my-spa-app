# My SPA App (React + Express on Render)

**Frontend**: React (CRA)  
**Backend**: Express

## Live URLs
- Frontend: https://my-spa-app-1.onrender.com
- Backend API:
  - Health: https://my-spa-app.onrender.com/api/health
  - Hello:  https://my-spa-app.onrender.com/api/hello

> Note: Free Render instances may “spin down” and take ~30–50s to wake up.

## Local Development
```bash
# terminal 1
cd backend
npm install
npm run dev   # starts Express on http://localhost:4000

# terminal 2
cd frontend
npm install
npm start     # starts React dev server on http://localhost:3000
