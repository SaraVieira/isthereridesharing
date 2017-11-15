# DB of cities with uber, lyft or cabify

## List all cities:
https://isthereuber-db.now.sh/cities

## List all cities with uber:
https://isthereuber-db.now.sh/uber

## List all cities with cabify:
https://isthereuber-db.now.sh/cabify

## List all cities with lyft:
https://isthereuber-db.now.sh/lyft

## All the next ones can be done in any of the endpoints

## Search for company
https://isthereuber-db.now.sh/cities?company=cabify
## Seach for something
https://isthereuber-db.now.sh/cities?q=lisbon

## Sort by name
https://isthereuber-db.now.sh/cities?sort=name

## Limit Results
https://isthereuber-db.now.sh/cities?_limit=10

## Pagination
https://isthereuber-db.now.sh/cities?_limit=10&_page=2

## Slice
https://isthereuber-db.now.sh/cities?_start=20&_end=30

## Update DB

```
yarn
yarn seed
```

MIT
