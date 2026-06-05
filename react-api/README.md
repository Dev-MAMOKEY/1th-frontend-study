## 환경 변수 설정

이 프로젝트는 TMDB API를 사용하기 때문에 실행 전에 환경 변수 설정이 필요합니다.

보안상 실제 API 키가 들어 있는 `.env` 파일은 GitHub에 업로드하지 않습니다.
대신 프로젝트에 포함된 `.env.example` 파일을 참고하여 직접 `.env` 파일을 생성해야 합니다.

### 1. `.env` 파일 생성

프로젝트 루트 경로에 `.env` 파일을 생성합니다.

```bash
.env
```

### 2. `.env.example` 참고하여 값 입력

`.env.example` 파일에는 필요한 환경 변수 형식이 작성되어 있습니다.

```env
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_ACCESS_TOKEN=your_api_key_here
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

위 내용을 참고하여 `.env` 파일에 본인의 TMDB Access Token을 입력합니다.

```env
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_ACCESS_TOKEN=본인의_TMDB_ACCESS_TOKEN
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

### 3. 주의사항

`.env` 파일에는 개인 API 키와 같은 민감한 정보가 포함될 수 있으므로 GitHub에 업로드하면 안 됩니다.

따라서 `.env` 파일은 `.gitignore`에 추가하여 관리하고, 다른 사용자는 `.env.example` 파일을 참고해 각자 환경 변수를 설정해야 합니다.
