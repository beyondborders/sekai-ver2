# Configure the deployment to take only the backend folder.
git archive --format=zip HEAD:backend/ > deploy.zip;

case "${1}" in
  staging) eb deploy Sekai-stag
  ;;
  production) eb deploy Sekai-stag
  ;;
  *) eb deploy Sekai-stag
  ;;
esac;

rm -rf deploy.zip;