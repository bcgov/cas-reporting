#!/usr/bin/env bash

set -euxo pipefail

# Check if ESLint is installed
if ! command -v eslint &> /dev/null; then
    echo "Error: ESLint is not installed. Please ensure ESLint is installed before running this script."
    exit 1
fi

pushd client || exit 1
files=("$@")
files=("${files[@]/#/../}") # add ../ to each element

yarn run eslint -c ./.eslintrc.js "${files[@]}"
