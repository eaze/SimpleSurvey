Steps to run:
```
1: npm install
2: npm run build
3: npm run server
4: navigate to http://localhost:3000/
5: enjoy
```
*
Database: I am currently just writing the survey to a file every time it is updated (creating new survey and when someone takes a survey).  I would and probably should have just set up a simply PostgreSQL DB and a simple schema defined to store all the info.  If this survey ever needed to have user login and is the surverys had questions that werent for everyone to see then an ACID compliant DB wouldve been my go to.
*