### Atualizar

```bash
git add .
git commit -m "ATUALIZAÇÃO"
git push
```

### Na VM (AWS)

```bash
pm2 stop .
cd whatsapp-bot
git pull
pm2 start .
```

