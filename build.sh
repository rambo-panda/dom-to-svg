#!/bin/bash

npx rollup -c

sed -i '1,3d' index.js
sed -i 's/function requirePreviousMap () {/function requirePreviousMap () { return ;/g' index.js
sed -i 's/function requireInput () {/function requireInput () { return ;/g' index.js

npx terser --ecma esnext --module -b index.min.js index.js
