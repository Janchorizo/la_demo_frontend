mkdir -p dist
echo "Clearing previous build ..."
rm -fr dist/*
echo "Copying static files ..."
cp -r static/vendor dist
cp static/logo.png dist
cp -r static/assets dist
cp static/index_prod.html dist/index.html
