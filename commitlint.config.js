module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새로운 기능 추가
        'fix', // 버그 수정
        'docs', // 문서 수정
        'style', // 코드 스타일 수정
        'refactor', // 코드 리팩토링
        'test', // 테스트 코드 추가
        'chore', // 기타 변경사항
        'design', // UI 관련 코드 추가 및 수정
      ],
    ],
    'type-empty': [2, 'never'], // type이 비어 있으면 안 됨
    'subject-empty': [2, 'never'], // 제목이 비어 있으면 안 됨
    'subject-case': [2, 'always', 'lower-case'], // 제목 소문자 강제
  },
};
