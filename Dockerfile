FROM mhart/alpine-node:16

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./

# Copy all local files into the image.
COPY . .

RUN npm ci

RUN npm run build

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
FROM mhart/alpine-node:slim-16

WORKDIR /app
COPY --from=0 /app .

EXPOSE 3000
CMD ["node", "./build"]
