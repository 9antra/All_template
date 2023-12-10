FROM node:18

# Create app directory
WORKDIR /usr/src/app


COPY . .
RUN npm install  --production
RUN npm run build
CMD ["npm", "start"]

