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

## Project
**nest-survey**
: nest.js-based multiple choice questionnaire application


## Development environment
- os: mac M2 Pro
- npm: 10.2.0
- node: v21.1.0
- nest-cli: 10.2.1
- postgresql: 14.10 (Homebrew)

## ERD
<img width="677" alt="nestsurvey_erd" src="https://github.com/diane073/TIL/assets/127281732/14e36c81-af5f-4834-95f4-1a53379081e4">

## How to run
1. 프로젝트의 개발 환경과 버전을 맞춰주세요.
2. postgresql 유저와 사용할 데이터베이스를 생성합니다.
3. .env 파일의 postgresql 변수를 설정합니다.
4. 터미널에서 아래 명령어를 실행합니다.


## install dependency

```
$ npm install
```

## Running the app

* nest-survey는 개발 중인 어플리케이션으로 start:dev를 추천합니다

```
# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

## project tree

```
nest-survey
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
│  ├─ main.ts
│  ├─ my-logger.ts
│  ├─ common
│  │  ├─ base-handler.ts
│  │  └─ status-handler.ts
│  ├─ entity
│  │  ├─ base.entity.ts
│  │  ├─ option.entity.ts
│  │  ├─ question.entity.ts
│  │  ├─ survey.entity.ts
│  │  └─ user-survey.entity.ts
│  ├─ option
│  │  ├─ option.resolver.spec.ts
│  │  ├─ option.resolver.ts
│  │  ├─ option.dto.ts
│  │  ├─ option.module.ts
│  │  ├─ option.service.spec.ts
│  │  └─ option.service.ts
│  ├─ question
│  │  ├─ question.resolver.spec.ts
│  │  ├─ question.resolver.ts
│  │  ├─ question.dto.ts
│  │  ├─ question.graphql
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
│  ├─ user-outcome
│  │  ├─ user-outcome.dto.ts
│  │  ├─ user-outcome.graphql
│  │  ├─ user-outcome.module.ts
│  │  ├─ user-outcome.resolver.spec.ts
│  │  ├─ user-outcome.resolver.ts
│  │  ├─ user-outcome.service.spec.ts
│  │  └─ user-outcome.service.ts
│  ├─ user-survey
│  │  ├─ user-survey.dto.ts
│  │  ├─ user-survey.graphql
│  │  └─ user-survey.module.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```
