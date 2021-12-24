## git add .

- 현재 git 디렉토리에 대해 수정된 파일을 staging area에 올려주는 명령어
- git status로 staging area 및 파일들의 상태를 체크할 수 있다.

## git commit

- git add 까지 마친 staging area의 파일을 스냅샷으로 저장하는 명령어
- 프로젝트에서 commit은 최소 기능 구현 단위로 해주는 것이 좋으며 ADD, FIX, Refactoring, REMOVE등 어떤 수정사항이 발생했는지 같이 작성토록 한다.
- commit 이후 사항은 git log 명령어를 통해 확인할 수 있다.

## git remote

- clone을 받아 오지 않은 local git과 github 간의 연결을 관리하는 명령어
- git remote -v 로 연결된 원격 저장소의 URL확인 가능
- git remote add github_URL로 해당 github과 연결

## git push

- 현재 branch에 대해 수정된 스냅샷을 원격 저장소의 같은 브랜치로 추가하는 명령어
- github에 브랜치가 없는 경우 새로 만들어 진다.

## git branch

- 현재 브랜치를 기준으로 새로운 브랜치를 생성하는 명령어
- 생성만 될 뿐 checkout 명령어로 직접 이동해야 한다.
