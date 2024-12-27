![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&text=같이%20달램%20프로젝트&fontAlign=50)

# 😀 Together Dallaem Team Project

## 📌 목차

1. [📝 프로젝트 설명](#📝-프로젝트-설명)
2. [🍃 배포 주소](#🍃-배포-주소)
3. [⚒️ 기술 스택](#⚒️-기술-스택)
4. [🙌🏻 협업 레퍼지토리](#🙌🏻-협업-레퍼지토리)
5. [👻 역할](#👻-역할)
6. [🎥 시연](#🎥-시연)

## 📝 프로젝트 설명

**프로젝트명: 같이 달램**

    다양한 모임을 탐색하고 참여할 수 있으며 사용자가 직접 모임을 개설하고 리뷰를 생성할 수 있는 서비스를 개발하는 프로젝트를 진행하였습니다
    Next.js와 TypeScript 기반으로 REST API를 활용한 다양한 기능을 구현한 프로젝트입니다

## 🍃 배포 주소

https://together-project-navy.vercel.app/gatherings

**테스트용 아이디**

    ID : test1@test.com
    PW : test1234*

## ⚒️ 기술 스택

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

## 🙌🏻 협업 레퍼지토리

https://github.com/fesi-05-01/frontend

## 👻 역할

### 회원가입 / 로그인

    회원가입/로그인 폼: React Hook Form과 Zod를 사용하여 폼 상태 및 유효성 검사를 관리
    인증 처리: JWT 기반 인증을 사용하여 로그인 및 회원가입 시 토큰을 발급받고 쿠키에 저장하여 관리
    유저 정보 최적화: API 서버의 특성상 유저의 정보는 별도의 엔드포인트를 통해 호출해야 하므로 유저 정보와 인증 토큰을 Jotai와 쿠키로 관리하여 불필요한 API 호출을 줄이고 성능을 최적화

### 유저 프로필 수정

    프로필 수정 시 이미지와 함께 텍스트 데이터를 FormData로 보내며 서버에서는 multipart/form-data 방식으로 파일을 처리하였습니다.

    프로필 수정 후 쿠키 Jotai에서 관리중인 유저의 정보를 전역 상태를 업데이트하고 UI에 즉시 반영하도록 하였습니다.

    이미지 파일 크기가 2MB 이상일 경우 자동으로 압축하여 업로드.
    browser-image-compression 라이브러리를 설치하여 이미지 압축 처리.

### 플로팅바 컴포넌트

    로그인 상태 및 참여 여부에 따라 동적으로 API 호출 훅을 다르게 분기 처리하였습니다.

### GNB

    usePathname 훅을 사용하여 현재 활성화된 링크를 추적하고 해당 링크에 스타일을 동적으로 적용하여
    사용자가 어떤 페이지에 있는지 명확하게 구분할 수 있도록 하였습니다.

### API 호출 관리

    커스텀 훅: API 호출을 처리하는 공통 훅을 분리하여 재사용 가능하도록 구현
    React Query: API 통신 최적화
    모든 API 호출을 처리하는 커스텀 훅을 분리하여 다양한 엔드포인트 로직을 재사용 가능하게 하여 유지보수 및 확장성을 높였습니다.
    jest 테스트 코드
    공통 컴포넌트 테스트 재사용 가능한 UI 컴포넌트를 테스트하여 모든 컴포넌트가 예상대로 동작하는지 테스트하였습니다

## 🎥 시연

### 회원가입 페이지 

https://github.com/user-attachments/assets/486166f3-def9-477b-a139-b047325f0431

### 로그인 페이지 

https://github.com/user-attachments/assets/d0013a30-d993-43a9-9820-6d099765dd85

### GNB & 유저 프로필 수정 & 로그아웃 


https://github.com/user-attachments/assets/3f659c49-624f-49d1-86fb-eb6d8f69e329









