# Team - BoostWiz

<br/>

## 버전 정보

- **Node**: v22.12.0
- **pnpm**: v9
- **React**: v19
- **Next**: v15
- **TypeScript**: v5
- **tailwindcss**: v3.4.1

<br/>

## 실행 방법

```
  pnpm install
  pnpm dev
  pnpm storybook
```

<br/>

## commit, PR

커밋 메세지 title 작성 규칙을 PR title 작성 규칙과 일치시킨다.

husky로 git에서 commit 메시지를 작성할때, feat:, refactor:, chore:~~ 와 같이 소문자로 시작하는 형태로 작성을 해줘야 커밋메시지가 작성될수 있게 설정.

### 구분자 설명

| 구분자   | 설명                                          |
| -------- | --------------------------------------------- |
| feat     | 새로운 기능                                   |
| refactor | 코드 리팩토링                                 |
| fix      | 버그 수정                                     |
| hotfix   | 급한 버그 수정 (develop 브랜치에서 바로 작업) |
| perf     | 성능 개선과 관련된 수정                       |
| test     | 테스트 코드 수정                              |
| chore    | 그 외 자잘한 수정                             |

### branch 전략

(feature, refactor, fix, docs) - develop - main

main에서 develop이 분기.

각자, 맡은 기능과 UI를 develop에서 브랜치를 생성하여 작업 진행 (브랜치명은 feature/~~~, refactor/, fix/ ~~와 같은 형태로 만들기)

PR은 최소 3일 이하 단위로 병합 예정이며, 코드리뷰는 자유롭게 진행.

### 사용 예시

#### commit message (commit title에 작업에 대한 what과 how를 포함)

```
chore: 기본적인 환경셋팅 완료 (tailwind, typescript, axios 등 퐇마)
```

#### PR title (PR title에는 작업의 목적성과 가장 비슷한 구분자를 사용)

```
feat: 메인페이지 UI 진행
```

<br/>

## 디렉토리 구조

```
  boost-wiz/
  ├── .github/
  ├── .husky/
  ├── .storybook/
  ├── node_modules/
  ├── public/               # 정적 파일들이 위치하는 폴더
  ├── src/app/              # 모든 소스 코드가 위치하는 폴더
      ├── mocks
      ├── react-query
      ├── shared
      ├── store
      ├── styles
      ├── tests
  ├── .eslintrc.json
  ├── .gitignore
  ├── .prettierignore
  ├── .prettierrc.json
  ├── next-env.d.ts
  ├── next.config.ts
  ├── package.json
  ├── postcss.config.mjs
  ├── tsconfig.json
  ├── pnpm-lock.yaml
  └── README.md
```

<br/>

### 팀 협업 도구

1. figma: https://www.figma.com/design/eKGx0bT0BNEYpiGTPqfmSs/KT_BoostWiz?t=UE8ucMqno0g5G4EX-0

UI/UX 디자인 진행

2. Notion: https://print-ilikepenguin.notion.site/BoostWiz-KT-Wiz-14d82d67d3ef80bdb939db209855b567?pvs=4

![Notion Image](https://github.com/user-attachments/assets/4824ccf1-d377-42fd-bafd-e95727aed504)

회의록, 진행상황, 공유, 이슈 & 마일스톤 정리

3. Discord

매주 화: 8시, 금: 2시 정기회의 진행
