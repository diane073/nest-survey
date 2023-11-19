<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

```
nest-survey
├─ .eslintrc.js
├─ .git
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 02
│  │  │  └─ 5e4a3e74ab91117f8670586ca1617b62f4b8bc
│  │  ├─ 22
│  │  │  └─ f55adc5647206db11558139164c3deb77f5c01
│  │  ├─ 25
│  │  │  └─ 9de13c733a7284a352a5cba1e9fd57e97e431d
│  │  ├─ 2b
│  │  │  └─ 4b80d6b61109a34fd2fc8cd802c693dfd02737
│  │  ├─ d6
│  │  │  └─ 9a7ab9009d2d3850cf941a0ce611ea85dbb420
│  │  ├─ dc
│  │  │  └─ b72794f5300a3e0ccd2ad0669d802b62f3d370
│  │  ├─ ec
│  │  │  └─ 32d6efc9b533c1ae88e5e7280146574135b265
│  │  ├─ f9
│  │  │  └─ aa683b1ad5cffc76da9ad4b77c562ac4c2b399
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ configuration.ts
│  ├─ main.ts
│  ├─ survey
│  │  ├─ survey.controller.spec.ts
│  │  ├─ survey.controller.ts
│  │  ├─ survey.module.ts
│  │  ├─ survey.service.spec.ts
│  │  └─ survey.service.ts
│  └─ users
│     ├─ entity
│     │  └─ user.entity.ts
│     ├─ users.controller.spec.ts
│     ├─ users.controller.ts
│     ├─ users.module.ts
│     ├─ users.service.spec.ts
│     └─ users.service.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```
```
nest-survey
├─ .eslintrc.js
├─ .prettierrc
├─ README.md
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ configuration.ts
│  ├─ main.ts
│  ├─ survey
│  │  ├─ survey.controller.spec.ts
│  │  ├─ survey.controller.ts
│  │  ├─ survey.module.ts
│  │  ├─ survey.service.spec.ts
│  │  └─ survey.service.ts
│  └─ users
│     ├─ entity
│     │  └─ user.entity.ts
│     ├─ users.controller.spec.ts
│     ├─ users.controller.ts
│     ├─ users.module.ts
│     ├─ users.service.spec.ts
│     └─ users.service.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```
```
nest-survey
├─ .eslintrc.js
├─ .prettierrc
├─ README.md
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ main.ts
│  ├─ status
│  │  ├─ response-handler.ts
│  │  └─ status-handler.ts
│  ├─ survey
│  │  ├─ survey.controller.spec.ts
│  │  ├─ survey.controller.ts
│  │  ├─ survey.module.ts
│  │  ├─ survey.service.spec.ts
│  │  └─ survey.service.ts
│  └─ users
│     ├─ entity
│     │  └─ user.entity.ts
│     ├─ users.controller.spec.ts
│     ├─ users.controller.ts
│     ├─ users.module.ts
│     ├─ users.service.spec.ts
│     └─ users.service.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```
```
nest-survey
├─ .eslintrc.js
├─ .prettierrc
├─ README.md
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ common
│  │  ├─ base-handler.ts
│  │  └─ status-handler.ts
│  ├─ entity
│  │  ├─ base.entity.ts
│  │  ├─ option.entity.ts
│  │  ├─ question.entity.ts
│  │  ├─ survey.entity.ts
│  │  └─ user-survey.entity.ts
│  ├─ main.ts
│  ├─ option
│  │  ├─ option.controller.spec.ts
│  │  ├─ option.controller.ts
│  │  ├─ option.dto.ts
│  │  ├─ option.module.ts
│  │  ├─ option.service.spec.ts
│  │  └─ option.service.ts
│  ├─ ormconfig.json
│  ├─ question
│  │  ├─ question.controller.spec.ts
│  │  ├─ question.controller.ts
│  │  ├─ question.dto.ts
│  │  ├─ question.module.ts
│  │  ├─ question.service.spec.ts
│  │  └─ question.service.ts
│  ├─ survey
│  │  ├─ survey.dto.ts
│  │  ├─ survey.graphql
│  │  ├─ survey.module.ts
│  │  ├─ survey.resolver.spec.ts
│  │  ├─ survey.resolver.ts
│  │  ├─ survey.service.spec.ts
│  │  └─ survey.service.ts
│  ├─ user-survey
│  │  ├─ user-survey.controller.spec.ts
│  │  ├─ user-survey.controller.ts
│  │  ├─ user-survey.dto.ts
│  │  ├─ user-survey.module.ts
│  │  ├─ user-survey.service.spec.ts
│  │  └─ user-survey.service.ts
│  └─ users-practice
│     ├─ entity
│     │  └─ user.entity.ts
│     ├─ users.controller.spec.ts
│     ├─ users.controller.ts
│     ├─ users.module.ts
│     ├─ users.service.spec.ts
│     └─ users.service.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```