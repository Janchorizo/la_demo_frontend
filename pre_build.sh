echo "Clearing previous build ..."
rm -fr dist/*
echo "Copying static files ..."
cp -r static/vendor/* dist
cp static/index_prod.html dist/index.html
