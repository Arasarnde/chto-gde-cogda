#!/bin/bash

# Сборка приложения
npm run build

# Создание архива
tar -czf build.tar.gz build/

# Копирование на сервер (замените на ваши данные)
scp build.tar.gz user@your-server:/var/www/chto-gde-cogda/

# Выполнение команд на сервере
ssh user@your-server << 'ENDSSH'
cd /var/www/chto-gde-cogda
tar -xzf build.tar.gz
rm build.tar.gz
sudo systemctl restart nginx
ENDSSH 