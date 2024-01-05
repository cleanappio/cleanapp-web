echo "Buiding docker image..."

if [ ! -f Dockerfile ]
then
     echo 'Please, run in the dockerapp folder, not GIT root.'
     exit
fi

if [ -f package.json ]
then
    rm -f -d -R src
    rm -f -d -R public
    rm -f package.json
fi

cp -R ../src ./
cp -R ../public ./
cp ../package.json ./

docker build . -t ibnazer/cleanappapp:1.6
# docker push ibnazer/cleanappapp

rm -f -d -R src
rm -f -d -R public
rm -f package.json
