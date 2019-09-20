# Shazamazon Product Q&A Backend

### About

The goal of this project was to take a [previously built e-commerce site MVP ](https://github.com/shazamazon/modules-qa) and refactor the backend to be "webscale".

This means it's able to perform effectively with a dramatically larger product portfolio (increasing 100 items and 650 questions/answers to 10 million items and 65 million questions/answers) and handle a large number of requests per second.

The goal of the Q&A component evaluation was to compare the efficacy of various deployment methods, database, and tools to accomplish scale and make other optimizations and enhancements.

Ultimately, I was able to deliver an API via Node, Express, and PostgreSQL that was performant with 10M primary records and 65 million secondary records.

### Tech Stack

Scale was accomplished primarily using Node and Postgres/MongoDB. Deployment was accomplished using AWS. Key technologies are listed below:

<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://cloud.mongodb.com/static/images/mdb_logo.svg" width='100'/>
<img src="https://s24255.pcdn.co/wp-content/uploads/2017/07/postgresql-logo.png" width='100'/>
<img src="https://cdn.worldvectorlogo.com/logos/new-relic.svg" width='100'/>

### Technical Challenges / Research
 
Some issue I ran into while building the service:
 
1. Generating 10M fake product records and 65 million question/answer records took a good deal of RAM and CPU, which stressed my computer significantly. Optimization strategies had to be developed.
2. Import/Exporting/Manipulating data at scale --- the rules and capabilities of technology, especially databases, are very different with 10M primary records and 65 million secondary records. Mongo and PSQL were not initially performant at that scale, and required indexing.
3. Decreasing query times and improving my server's RPS capabilities.
 
#### User Stories
 
- As a User, I should be able see related product questions and answers when a new product is requested, without much latency.
 
### Minimum Viable Product (MVP)
 
The MVP requirement was to be able to performantly serve 500 RPS(requests per second) and keep query times under 50ms, while deployed.