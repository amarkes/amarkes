#!/bin/bash

# Função para verificar se um arquivo contém JSX
contains_jsx() {
    grep -q "<[a-zA-Z]" "$1"
}

# Percorrer recursivamente os arquivos .js dentro da pasta src
find ./src -name "*.js" | while read -r file; do
    if contains_jsx "$file"; then
        # Renomear o arquivo para .jsx
        mv "$file" "${file%.js}.jsx"
        echo "Renomeado $file para ${file%.js}.jsx"
    fi
done

echo "Todos os arquivos contendo JSX na pasta src foram renomeados para .jsx"
