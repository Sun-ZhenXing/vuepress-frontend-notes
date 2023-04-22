# Builder
FROM node:18.16.0-bullseye-slim as builder

WORKDIR /app

COPY *.* ./
COPY Dockerfile ./
COPY docs/ ./docs/

ENV NODE_OPTIONS=--max-old-space-size=4096

RUN npm install -g pnpm && \
    pnpm install && \
    pnpm build

# Nginx Server
FROM nginx:1.24.0-alpine3.17-slim

ENV TZ=Asia/Shanghai \
    LANG=C.UTF-8 \
    LANGUAGE=C.UTF-8 \
    LC_ALL=C.UTF-8

WORKDIR /usr/share/nginx/html/vuepress-frontend-notes/

RUN echo "<script>window.location.href = '/vuepress-frontend-notes/'</script>" > /usr/share/nginx/html/index.html
COPY --from=builder /app/docs/.vuepress/dist/ ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
