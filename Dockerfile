
FROM node:20

WORKDIR /Microgreens

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React app (if using Vite, Next.js, or Create React App)
RUN npm run build

# Expose port (change 3000 to your app's port if different)
EXPOSE 3000

# Start the app (adjust if using a different start command)
CMD ["npm", "start"]