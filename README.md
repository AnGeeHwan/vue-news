# vue-news

- Hacker news Api
- 뷰 라우터 구현
- 컴포넌트 공통화 방법
- Vuex를 사용하여 API 호출
- Router transition 사용

## Vue CLI
### CLI 2.x vs CLI 3.x
 - 명령어
   - 2.x : vue init , npm run dev
   - 3.x : vue create , npm run serve
 - 웹팩 설정 파일
   - 2.x : 노출 O
   - 3.x : 노출 X
 - 프로젝트 구성
   - 2.x : 깃헙의 템플릿 다운로드 ( npm i 로 node_module 을 추가로 설치해 주어야 함 )
   - 3.x : 플러그인 기반으로 기능 추가
 - ES6 이해도
   - 2.x : 필요 X
   - 3.x : 필요 O

## ESLint
 - 자바스크립트에서 문법검사기 역할을 해주는 도구
 - 트레일링 콤마 (trailing comma) : 객체를 정의할 때 한 쌍만 정의 되면 콤마를 찍지않아도 되지만 찍기를 권유한다. 최대한 오류를 줄이기 위해
 - Vue CLI 3.x 에서 ESLint 설정 끄는 법
   - ESLint를 끄고싶은 컴포넌트의 script첫 줄에 /* eslint-disable */ 입력
   - 모든 공간에 적용시 최상위 폴더 (package.json과 같은 위치)에 vue.config.js 파일 생성 후 입력
   ```javascript
   module.exports = {
    lintOnSave: false
   }
   ```

