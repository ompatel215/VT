# Server-Side Authentication Setup

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```

The server will run at `http://localhost:3000`

### 3. Access Your Site
Open your browser and go to: `http://localhost:3000`

## 🔐 How It Works

- **Server-side authentication**: Password checking happens on the server (not in browser)
- **Session management**: Uses secure cookies to track logged-in users
- **24-hour sessions**: Login expires after 24 hours
- **Protected pages**: All HTML pages (except login) require authentication

## 📝 Credentials

- **Username**: `bri`
- **Password**: `love`

## 🛠️ To Change Password

1. Edit `server.js`
2. Find `PASSWORD_HASH` 
3. Generate new hash:
   ```javascript
   const crypto = require('crypto');
   console.log(crypto.createHash('sha256').update('yournewpassword').digest('hex'));
   ```
4. Replace the hash value

## 🌐 Deploying

### Option 1: Heroku (Free)
1. Create account at heroku.com
2. Install Heroku CLI
3. Run:
   ```bash
   heroku create
   git push heroku main
   ```

### Option 2: Railway (Free tier)
1. Go to railway.app
2. Connect GitHub repo
3. Deploy automatically

### Option 3: Render (Free tier)
1. Go to render.com
2. Create new Web Service
3. Connect your repo
4. Deploy

## 🔒 Security Notes

- ✅ Password is hashed (SHA-256)
- ✅ Password never appears in source code
- ✅ Authentication happens on server
- ✅ Uses HTTP-only cookies
- ⚠️ For production, enable HTTPS and set `secure: true` in cookie settings

## 📁 Files

- `server.js` - Main server file
- `package.json` - Dependencies
- `login.html` - Updated to use server API
- `index.html` - Updated to use server logout
