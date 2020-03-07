FROM node
WORKDIR /app
COPY . /app
CMD ["npm", "start"]
