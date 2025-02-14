.PHONY: install build deploy

install:
	npm install

build:
	npm run build

deploy: build
	npx gh-pages -d out