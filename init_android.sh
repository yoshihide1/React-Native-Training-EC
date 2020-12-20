#!/bin/bash

echo ----------initialize----------

yarn install

cd android

./gradlew

cd ..

yarn android

echo ----------finish----------