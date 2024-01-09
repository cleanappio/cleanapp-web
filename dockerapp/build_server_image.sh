echo "Buiding docker image..."
# Docker images label.
export DOCKER_LABEL="1.6"
# Dockerhub images prefix.
export DOCKER_PREFIX="ibnazer"

if [ ! -f Dockerfile ]
then
     echo 'Please, run this script in the dockerapp folder, not GIT root.'
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

docker build . -t ${DOCKER_PREFIX}/cleanappapp:${DOCKER_LABEL}
# docker push ${DOCKER_PREFIX}/cleanappapp

rm -f -d -R src
rm -f -d -R public
rm -f package.json
