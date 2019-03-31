# STO
## Developer
* Beomsu Lim (lbs1163)
* Minjae Mun (mmj4594, seagull4594)

## Development Environment
### Basic
* web server: nginx
* middleware: uwsgi
* backend framework: django
* frontend framework: react.js
* database: sqlite

### pip list
* django==2.1.5
* django-webpack-loader==0.6.0
* djangorestframework==3.9.0
* markdown==3.0.1
* django-filter ==2.0.0

## How to run it
* 프로젝트 클론
  `git clone git@bitbucket.org:lbs1163/sto.git`

* 가상환경 생성(프로젝트 내에서 'myvenv'라는 이름으로 만들거나 프로젝트 외부에 가상환경 생성)
  `python3 -m venv myvenv`

* `pip install -r requirements.txt`
  다른 pip 설치가 필요하다면 requirements.txt에 추가하고 readme에 추가

* `npm install`