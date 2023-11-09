# Builder
FROM node:20.9.0-bookworm as builder

WORKDIR /app

COPY . ./

ENV NODE_OPTIONS=--max-old-space-size=4096

RUN npm -v \
    && npm config set registry https://registry.npmmirror.com/ \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry https://registry.npmmirror.com/ \
    && pnpm install \
    && pnpm build

# Nginx Server
FROM nginx:1.25.3-alpine3.18-slim

WORKDIR /usr/share/nginx/html/vuepress-frontend-notes/

COPY --from=builder /app/docs/.vuepress/dist/ ./

RUN echo "<script>window.location.href = '/vuepress-frontend-notes/'</script>" > /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
