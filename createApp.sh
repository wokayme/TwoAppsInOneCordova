cd react-app
npm run build
rm -R ../cordova/www/react-app
cp -R ./build ../cordova/www/react-app

cd ../next-app
npm run build
npm run export
rm -R ../cordova/www/next-app
cp -R ./out ../cordova/www/next-app

cd ../
node replacePaths.js