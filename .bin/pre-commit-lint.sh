#!/usr/bin/env bash

set -euxo pipefail

# Check if ESLint is installed
if ! command -v eslint &> /dev/null; then
    echo "ESLint is not installed. Installing ESLint..."
    yarn add eslint --dev
fi

pushd client || exit 1
files=("$@")
files=("${files[@]/#/../}") # add ../ to each element

yarn run eslint -c ./.eslintrc.js "${files[@]}"
