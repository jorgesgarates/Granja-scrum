git branch
git fetch origin
git pull --rebase origin main

# si marca conflicto en sprint3.md:
#   1) abre sprint3.md, deja tu versión, borra marcadores
git add sprint3.md
git rebase --continue

# cuando termine:
git push origin main


