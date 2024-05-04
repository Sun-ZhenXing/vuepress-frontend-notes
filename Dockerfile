ARG NODE_VERSION=20.12.2
ARG NGINX_VERSION=1.25.5-alpine3.19-slim
ARG NPM_REGISTER=https://registry.npmjs.org

# Builder
FROM node:$NODE_VERSION-bookworm as builder
WORKDIR /app
ARG NPM_REGISTER
COPY . ./
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm -v \
    && npm config set registry $NPM_REGISTER \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry $NPM_REGISTER \
    && pnpm install \
    && pnpm build

# Nginx Server
FROM nginx:$NGINX_VERSION
WORKDIR /usr/share/nginx/html/vuepress-frontend-notes/
COPY --from=builder /app/src/.vuepress/dist/ ./
RUN echo "<script>window.location.href = '/vuepress-frontend-notes/'</script>" > /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
