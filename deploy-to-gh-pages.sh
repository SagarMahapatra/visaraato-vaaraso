#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

rm -rf dist
mkdir dist

# config
git config --global user.email "sagarmahapatra@gmail.com"
git config --global user.name "sagarmahapatra"

# build (CHANGE THIS)
npm run build

# deploy
cd dist
git pull https://SagarMahapatra:W3lc0m3%40123@github.com/SagarMahapatra/visaraato-vaaraso.git master:gh-pages
git init
git add .
git commit -m "Deploy to Github Pages"
echo "Pushing"
echo ${GITHUB_REPO}
git push https://SagarMahapatra:W3lc0m3%40123@github.com/SagarMahapatra/visaraato-vaaraso.git master:gh-pages > /dev/null 2>&1