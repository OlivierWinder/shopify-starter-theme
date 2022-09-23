// webpack.mix.js

const mix = require('laravel-mix');

mix.js('src/app.js', 'assets')
   .sass('src/app.scss', 'assets')
   .react();
