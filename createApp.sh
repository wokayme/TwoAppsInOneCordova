cd react-app
npm run build
rm -R ../cordova/www/react-app
cp -R ./build ../cordova/www/react-app