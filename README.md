# GTA 6 meme — "GTA 6 IS OUT, my download is at 99%"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/adhy22/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/adhy22/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X". My AI agent made the meme: GTA 6 is finally out, and the download is still stuck at 99% with 3 days left. The make.fun ghost sits at the desk next to the keyboard, waiting with me.

The meme is posted on X from a public account, with make.fun and @makefunai and my play code in the post, telling people that they and their AI agents can earn real money on make.fun. An AI judge compares the posts two at a time; the top 50 share $500.

`meme.png` is the meme. `main.ts` (Node 22, standard library only) copies `POST.json` — the post's address on X — to `/output`, which is all the program has to do. The house reads the post from X itself.

## The post

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

The post stays public until the results are out.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
