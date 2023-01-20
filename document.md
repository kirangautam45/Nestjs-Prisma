nest new codeCamp
code .
yarn start:dev

//git Setup
git init
gaa
git commit -m "Rest api prisma Nest"
git remote add origin https://github.com/kirangautam45/Nestjs-Prisma.git
gco -b backend

//nest module added

nest g module user
nest g module bookmark
nest g service auth
docker ps
docker logs 112f615b3d28
clear

//Dependency added
yarn add -D prism
yarn add @prisma/client
npx prisma init

//git commit
gaa
git commit -m "prisma added"
ggpush

//restart service
npx prisma migrate dev

//dependency added
yarn add --save-dev prisma@latest @prisma/client@latest class-validator class-transformer argon2
npx prisma studio @nestjs/config @nestjs/passport passport @nestjs/jwt passport-jwt -D @types/passport-jwt

//prisma service and module added
yarn
nest g module prisma
clear
nest g service prisma --no-spec

//all Service restart
npx prisma migrate dev
npx prisma studio
yarn start:dev
npx prisma studio

//all Service restart
npx prisma migrate dev
npx prisma studio
yarn start:dev

docker compose up dev-db -d
npx prisma studio

// Service restart
yarn db:dev:restart
yarn start:dev
