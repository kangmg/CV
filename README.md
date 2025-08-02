# Reactive CV

이 프로젝트는 YAML/JSON 데이터를 기반으로 구축된 반응형 온라인 CV(이력서)입니다. GitHub Pages를 통해 쉽게 배포할 수 있도록 설계되었습니다.

## 🚀 주요 기능

*   **반응형 디자인**: 다양한 화면 크기(데스크톱, 태블릿, 모바일)에 최적화된 레이아웃.
*   **테마 토글**: 다크/라이트 모드 전환 기능.
*   **탭 내비게이션**: CV, PDF 버전, 프로젝트 갤러리 간의 쉬운 전환.
*   **스크롤 진행률 표시기**: 현재 보고 있는 섹션을 시각적으로 표시.
*   **데이터 기반**: 모든 CV 정보는 JSON 파일에서 관리되어 업데이트가 용이합니다.
*   **GitHub Pages 배포**: GitHub Actions를 통한 자동 배포 설정.

## 📂 프로젝트 구조

```
reactive-cv/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 배포 워크플로우
├── app/
│   ├── layout.tsx          # 전역 레이아웃 및 테마 설정
│   └── page.tsx            # 메인 CV 페이지 (섹션 구성 및 데이터 로드)
├── components/
│   ├── cv/                 # CV 섹션별 컴포넌트
│   │   ├── additional-info.tsx
│   │   ├── awards-scholarships.tsx
│   │   ├── contact-info.tsx
│   │   ├── presentations.tsx
│   │   ├── project-gallery.tsx # 프로젝트 갤러리 (이전 highlights)
│   │   ├── projects.tsx
│   │   ├── research-experience.tsx
│   │   ├── research-interest.tsx
│   │   └── skills.tsx
│   ├── page-header.tsx     # 페이지 상단 헤더 (이름, 직함, 업데이트 날짜)
│   ├── pdf-viewer.tsx      # PDF 뷰어 컴포넌트
│   ├── scroll-progress.tsx # 좌측 스크롤 진행률 표시기
│   ├── top-navigation.tsx  # 상단 탭 내비게이션 바
│   └── ui/                 # shadcn/ui 컴포넌트 (자동 생성)
├── data/
│   ├── cv-data.json        # 개인 정보, 경험, 학력 등 CV의 주요 데이터
│   └── project-highlights.json # 프로젝트 갤러리 데이터
├── public/
│   ├── data/
│   │   └── cv.pdf          # CV의 PDF 버전 (선택 사항)
│   └── placeholder.svg     # 이미지 플레이스홀더
├── types/
│   └── cv.ts               # CV 데이터 구조를 위한 TypeScript 타입 정의
├── .gitignore
├── next.config.mjs         # Next.js 설정 (정적 내보내기 및 basePath)
├── package.json
├── tailwind.config.ts      # Tailwind CSS 설정
├── tsconfig.json
└── README.md               # 이 파일
```

## 🛠️ 사용법

### 1. 로컬에서 실행하기

프로젝트를 로컬 개발 환경에서 실행하려면 다음 단계를 따르세요:

1.  저장소를 클론합니다:
    ```bash
    git clone https://github.com/kangmg/CV.git
    cd CV
    ```
2.  종속성을 설치합니다:
    ```bash
    npm install
    ```
3.  개발 서버를 시작합니다:
    ```bash
    npm run dev
    ```
    이제 `http://localhost:3000`에서 CV를 확인할 수 있습니다.

### 2. CV 데이터 수정하기

모든 CV 정보는 `data/cv-data.json` 및 `data/project-highlights.json` 파일에 저장되어 있습니다. 이 파일들을 직접 수정하여 CV 내용을 업데이트할 수 있습니다.

*   `data/cv-data.json`: 개인 정보, 연구 관심사, 기술 스택, 연구 경험, 프로젝트, 발표, 학력, 군 복무, 추가 활동, 수상 및 장학금 정보.
*   `data/project-highlights.json`: 프로젝트 갤러리에 표시될 각 프로젝트의 상세 정보 (제목, 이미지, 기간, 설명 등).

## 🚀 GitHub Pages에 배포하기

이 프로젝트는 Next.js의 정적 내보내기(`output: 'export'`) 기능을 사용하여 GitHub Pages에 배포할 수 있도록 설정되어 있습니다. GitHub Actions 워크플로우를 통해 자동 배포가 가능합니다.

### 1. `next.config.mjs` 설정 확인

프로젝트가 GitHub Pages의 하위 경로(`https://kangmg.github.io/CV/`)에서 호스팅되므로, `next.config.mjs` 파일에 `basePath`가 올바르게 설정되어 있는지 확인해야 합니다.

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  basePath: '/CV', // 여기에 GitHub 저장소 이름을 입력하세요.
};

export default nextConfig;
```

### 2. GitHub Actions 워크플로우 설정

프로젝트의 `.github/workflows/deploy.yml` 경로에 다음 내용을 가진 파일을 생성합니다. 이 워크플로우는 `main` 브랜치에 푸시될 때마다 프로젝트를 빌드하고 `gh-pages` 브랜치에 배포합니다.

```yaml
# .github/workflows/deploy.yml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches:
      - main # 또는 master, 기본 브랜치 이름에 따라 변경하세요.

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20' # 프로젝트에 맞는 Node.js 버전을 지정하세요.

      - name: Install dependencies
        run: npm ci

      - name: Build Next.js project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          publish_branch: gh-pages # 정적 파일을 배포할 브랜치
```

### 3. 배포 과정

1.  **`main` 브랜치에 커밋 및 푸시**: 프로젝트 소스 코드를 `main` 브랜치에 커밋하고 GitHub에 푸시합니다.
2.  **GitHub Actions 실행**: 푸시 이벤트가 발생하면 GitHub Actions 워크플로우가 자동으로 시작됩니다.
3.  **자동 브랜치 생성 및 배포**: `peaceiris/actions-gh-pages@v3` 액션은 `gh-pages` 브랜치가 없으면 자동으로 생성하고, `out` 디렉토리의 빌드 결과물을 해당 브랜치에 푸시합니다.
4.  **GitHub Pages 활성화**: GitHub 저장소 설정(Settings -> Pages)에서 'Branch'를 `gh-pages`로 설정하고, 폴더를 `/ (root)`로 설정하여 GitHub Pages를 활성화합니다.

배포가 완료되면 `https://kangmg.github.io/CV/` (또는 설정한 URL)에서 CV를 확인할 수 있습니다.
