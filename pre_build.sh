mkdir -p dist
echo "Clearing previous build ..."
rm -fr dist/*
echo "Copying static files ..."
cp -r static/vendor dist
cp -r static/logo.png dist
cp static/index_prod.html dist/index.html
