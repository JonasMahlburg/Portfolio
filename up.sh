#makes git commit with messages
git pull 
git add .
git commit -m "$*"
git push

#builds project
ng build