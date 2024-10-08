cd ~/web/advanced-frontend-course
npm run build:prod

rm -rf ~/../var/www/production_project/html
mv ~/web/advanced-frontend-course/build ~/../var/www/production_project/html