----- Country Table -----
id | name
---------------------------
1 Cameroon 
2 Canada 
3 Cuba 
4 Sweden 
5 United States 


----- State Table -----
id | name | country_id
-----------------------
101 Adamaoua 1 
102 Centre 1 
103 Est 1 
104 Extreme-Nord 1 
105 Littoral 1 
106 Nord 1 
107 Nord-Ouest 1 
108 Ouest 1 
109 Sud 1 
110 Sud-Ouest 1 
201 Alberta 2 
202 British Columbia 2 
203 Manitoba 2 
204 New Brunswick 2 
205 Newfoundland and Labrador 2 
206 Northwest Territories 2 
207 Nova Scotia 2 
208 Nunavut 2 
209 Ontario 2 
210 Prince Edward Island 2 
211 Quebec 2 
212 Saskatchewan 2 
213 Yukon Territory 2 
301 Camaguey 3 
302 Ciego de Avila 3 
303 Cienfuegos 3 
304 Ciudad de La Habana 3 
305 Granma 3 
306 Guantanamo 3 
307 Holguin 3 
308 Isla de la Juventud 3 
309 La Habana 3 
310 Las Tunas 3 
311 Matanzas 3 
312 Pinar del Rio 3 
313 Sancti Spiritus 3 
314 Santiago de Cuba 3 
315 Villa Clara 3 
401 Blekinge 4 
402 Dalarnas 4 
403 Gavleborgs 4 
404 Gotlands 4 
405 Hallands 4 
406 Jamtlands 4 
407 Jonkopings 4 
408 Kalmar 4 
409 Kronobergs 4 
410 Norrbottens 4 
411 Orebro 4 
412 Ostergotlands 4 
413 Skane 4 
414 Sodermanlands 4 
415 Stockholms 4 
416 Uppsala 4 
417 Varmlands 4 
418 Vasterbottens 4 
419{-truncated-}

----- state_weather_stats table ---------------
state_id | record_date | temperature | humidity
------------------------------------------------

101 2018-10-15 28 53 
101 2018-10-16 -2 26 
101 2018-10-17 6 28 
101 2018-10-18 32 52 
101 2018-10-19 45 49 
101 2018-10-20 45 55 
101 2018-10-21 38 44 
101 2018-10-22 30 37 
101 2018-10-23 32 48 
101 2018-10-24 9 23 
101 2018-10-25 26 46 
101 2018-10-26 23 38 
101 2018-10-27 30 56 
101 2018-10-28 27 34 
101 2018-10-29 18 22 
101 2018-10-30 37 16 
101 2018-10-31 -2 14 
101 2018-11-01 26 18 
101 2018-11-02 15 29 
101 2018-11-03 43 34 
101 2018-11-04 41 44 
101 2018-11-05 41 50 
101 2018-11-06 39 31 
101 2018-11-07 45 26 
101 2018-11-08 6 55 
101 2018-11-09 24 51 
101 2018-11-10 40 50 
101 2018-11-11 23 45 
101 2018-11-12 34 45 
101 2018-11-13 0 51 
101 2018-11-14 1 36 
101 2018-11-15 36 31 
101 2018-11-16 0 44 
101 2018-11-17 -4 12 
101 2018-11-18 38 44 
101 2018-11-19 14 28 
101 2018-11-20 -2 25 
101 2018-11-21 10 41 
101 2018-11-22 24 50 
101 2018-11-23 0 36 
101 2018-11-24 37 58 
101 2018-11-25 42 48 
101 2018-11-26 10 44 
101 2018-11-27 -3 49 
101 2018-11-28 0 51 
101 2018-11-29 18 52 
101 2018-11-30 17 56 {-truncated-}


SELECT 
    state.name, country.name
FROM state
    INNER JOIN country ON state.country_id = country.id

    ***results***
    (State, Country)
Adamaoua Cameroon 
Centre Cameroon 
Est Cameroon 
Extreme-Nord Cameroon 
Littoral Cameroon 
Nord Cameroon 
Nord-Ouest Cameroon 
Ouest Cameroon 
Sud Cameroon 
Sud-Ouest Cameroon 
Alberta Canada 
British Columbia Canada 
Manitoba Canada 
New Brunswick Canada 
Newfoundland and Labrador Canada 
Northwest Territories Canada 
Nova Scotia Canada 
Nunavut Canada 
Ontario Canada 
Prince Edward Island Canada 
Quebec Canada 
Saskatchewan Canada 
Yukon Territory Canada 
Camaguey Cuba 
Ciego de Avila Cuba 
Cienfuegos Cuba 
Ciudad de La Habana Cuba 
Granma Cuba 
Guantanamo Cuba 
Holguin Cuba 
Isla de la Juventud Cuba 
La Habana Cuba 
Las Tunas Cuba 
Matanzas Cuba 
Pinar del Rio Cuba 
Sancti Spiritus Cuba 
Santiago de Cuba Cuba 
Villa Clara Cuba 
Blekinge Sweden 
Dalarnas Sweden 
Gavleborgs Sweden 
Gotlands Sweden 
Hallands Sweden 
Jamtlands Sweden 
Jonkopings Sweden 
Kalmar Sweden 
Kronobergs Sweden 
Norrbottens Sweden 
Orebro Sweden 
Ostergotlands Sweden 
Skane Sweden 
Sodermanlands Sweden 
Stockholms Sweden 
Uppsala Swede{-truncated-}


SELECT 
    state_weather_stats.temperature,
    state.name,
    country.name
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id

    ***results*** it worked

temp, state, country



SELECT 
    state.name,
    country.name,
    state_weather_stats.humidity
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id

Adamaoua Cameroon 53 
Adamaoua Cameroon 26 
Adamaoua Cameroon 28 
Adamaoua Cameroon 52 
Adamaoua Cameroon 49 
Adamaoua Cameroon 55 
Adamaoua Cameroon 44 
Adamaoua Cameroon 37 
Adamaoua Cameroon 48 
Adamaoua Cameroon 23 
Adamaoua Cameroon 46 
Adamaoua Cameroon 38 
Adamaoua Cameroon 56 
Adamaoua Cameroon 34 
Adamaoua Cameroon 22 
Adamaoua Cameroon 16 
Adamaoua Cameroon 14 
Adamaoua Cameroon 18 
Adamaoua Cameroon 29 
Adamaoua Cameroon 34 
Adamaoua Cameroon 44 
Adamaoua Cameroon 50 
Adamaoua Cameroon 31 
Adamaoua Cameroon 26 
Adamaoua Cameroon 55 
Adamaoua Cameroon 51 
Adamaoua Cameroon 50 
Adamaoua Cameroon 45 
Adamaoua Cameroon 45 
Adamaoua Cameroon 51 
Adamaoua Cameroon 36 
Adamaoua Cameroon 31 
Adamaoua Cameroon 44 
Adamaoua Cameroon 12 
Adamaoua Cameroon 44 
Adamaoua Cameroon 28 
Adamaoua Cameroon 25 
Adamaoua Cameroon 41 
Adamaoua Cameroon 50 
Adamaoua Cameroon 36 
Adamaoua Cameroon 58 
Adamaoua Cameroon 48 
Adamaoua Cameroon 44 
Adamaoua Cameroon 49 
Adamaoua Cameroon 51 
Adamaoua Cameroon 52 
Adamaoua Came{-truncated-}

So it appears that this one finds the humidity each day.


SELECT 
    state.name,
    country.name,
    state_weather_stats.record_date,
    state_weather_stats.humidity
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id

    Adamaoua Cameroon 2018-10-15 53 
Adamaoua Cameroon 2018-10-16 26 
Adamaoua Cameroon 2018-10-17 28 
Adamaoua Cameroon 2018-10-18 52 
Adamaoua Cameroon 2018-10-19 49 
Adamaoua Cameroon 2018-10-20 55 
Adamaoua Cameroon 2018-10-21 44 
Adamaoua Cameroon 2018-10-22 37 
Adamaoua Cameroon 2018-10-23 48 
Adamaoua Cameroon 2018-10-24 23 
Adamaoua Cameroon 2018-10-25 46 
Adamaoua Cameroon 2018-10-26 38 
Adamaoua Cameroon 2018-10-27 56 
Adamaoua Cameroon 2018-10-28 34 
Adamaoua Cameroon 2018-10-29 22 
Adamaoua Cameroon 2018-10-30 16 
Adamaoua Cameroon 2018-10-31 14 
Adamaoua Cameroon 2018-11-01 18 
Adamaoua Cameroon 2018-11-02 29 
Adamaoua Cameroon 2018-11-03 34 
Adamaoua Cameroon 2018-11-04 44 
Adamaoua Cameroon 2018-11-05 50 
Adamaoua Cameroon 2018-11-06 31 
Adamaoua Cameroon 2018-11-07 26 
Adamaoua Cameroon 2018-11-08 55 
Adamaoua Cameroon 2018-11-09 51 
Adamaoua Cameroon 2018-11-10 50 
Adamaoua Cameroon 2018-11-11 45 
Adamaoua Cameroon 2018-11-12 45 
Adamaoua Cameroon 2018-11-13 51 
Adamaoua Cameroon 2018-11-14 36 
Ad{-truncated-}


SELECT 
    state.name,
    -- country.name,
    AVG(state_weather_stats.humidity)
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id
WHERE 
    state_weather_stats.record_date >= '2018-11-01' AND state_weather_stats.record_date <= '2018-11-30'
GROUP BY state.name

This one threw an error if I included the country.name, but when commented out, I get the average humidity of almost each state. These are out of order, so I added an ORDER BY tag in the next query. 

Adamaoua 41.1333 
Alabama 36.2333 
Alaska 39.2333 
Alberta 37.5000 
Arizona 33.2667 
Arkansas 38.0667 
Blekinge 33.7667 
British Columbia 36.3667 
California 34.6333 
Camaguey 39.1000 
Centre 31.3667 
Ciego de Avila 38.6000 
Cienfuegos 35.3667 
Ciudad de La Habana 37.2333 
Colorado 36.0333 
Connecticut 37.3000 
Dalarnas 37.8333 
Delaware 33.5667 
District of Columbia 36.3333 
Est 33.2333 
Extreme-Nord 36.6333 
Florida 36.7000 
Gavleborgs 34.4333 
Georgia 33.0333 
Gotlands 37.1000 
Granma 33.4333 
Guantanamo 34.2333 
Hallands 38.6000 
Hawaii 34.6000 
Holguin 26.8333 
Idaho 43.0333 
Illinois 36.5000 
Indiana 36.2000 
Iowa 39.3667 
Isla de la Juventud 35.9333 
Jamtlands 37.9667 
Jonkopings 37.5667 
Kalmar 39.2333 
Kansas 40.3333 
Kentucky 36.7000 
Kronobergs 35.9000 
La Habana 38.2333 
Las Tunas 35.8000 
Littoral 36.1000 
Louisiana 37.2667 
Maine 33.0667 
Manitoba 38.6000 
Maryland 35.3000 
Massachusetts 33.8000 
Matanzas 37.4000 
Michigan 33.1333 
Minnesota 36.2667 
Mississippi 34.9000 
Missouri 33.9667 
Montana{-truncated-}



SELECT 
    state.name,
    -- country.name,
    AVG(state_weather_stats.humidity) AS AvgHumidity
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id
WHERE 
    state_weather_stats.record_date >= '2018-11-01' AND state_weather_stats.record_date <= '2018-11-30'
GROUP BY state.name
ORDER BY AvgHumidity DESC

Idaho 43.0333 
South Dakota 42.6333 
Nord 41.5333 
Adamaoua 41.1333 
Sud-Ouest 40.5000 
Kansas 40.3333 
North Dakota 40.1667 
Saskatchewan 39.7000 
North Carolina 39.5333 
Virginia 39.4000 
Ontario 39.4000 
Iowa 39.3667 
Vastmanlands 39.3000 
Alaska 39.2333 
Kalmar 39.2333 
Camaguey 39.1000 
Nord-Ouest 38.8000 
Ohio 38.8000 
New Mexico 38.7667 
Montana 38.7333 
West Virginia 38.6667 
Hallands 38.6000 
Ciego de Avila 38.6000 
Manitoba 38.6000 
Ostergotlands 38.5667 
Rhode Island 38.5333 
Nevada 38.5333 
La Habana 38.2333 
Oregon 38.2000 
Arkansas 38.0667 
Vasternorrlands 38.0333 
Jamtlands 37.9667 
New York 37.9333 
New Hampshire 37.8333 
Dalarnas 37.8333 
Sud 37.8000 
Jonkopings 37.5667 
Northwest Territories 37.5333 
Ouest 37.5333 
Alberta 37.5000 
Nunavut 37.4667 
Matanzas 37.4000 
Connecticut 37.3000 
Louisiana 37.2667 
Ciudad de La Habana 37.2333 
Sodermanlands 37.1667 
Gotlands 37.1000 
Varmlands 37.0333 
Pennsylvania 36.7667 
Texas 36.7333 
Kentucky 36.7000 
Florida 36.7000 
Extreme-Nord 36.6333 
Villa C{-truncated-}


SELECT 
    state.name,
    country.name,
    AVG(state_weather_stats.humidity) AS AvgHumidity
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id
WHERE 
    state_weather_stats.record_date >= '2018-11-01' AND state_weather_stats.record_date <= '2018-11-30'
GROUP BY state.name, country.name
ORDER BY AvgHumidity DESC

Very close, now I just have to worry about the WARM/COLD tags

Idaho United States 43.0333 
South Dakota United States 42.6333 
Nord Cameroon 41.5333 
Adamaoua Cameroon 41.1333 
Sud-Ouest Cameroon 40.5000 
Kansas United States 40.3333 
North Dakota United States 40.1667 
Saskatchewan Canada 39.7000 
North Carolina United States 39.5333 
Virginia United States 39.4000 
Ontario Canada 39.4000 
Iowa United States 39.3667 
Vastmanlands Sweden 39.3000 
Kalmar Sweden 39.2333 
Alaska United States 39.2333 
Camaguey Cuba 39.1000 
Ohio United States 38.8000 
Nord-Ouest Cameroon 38.8000 
New Mexico United States 38.7667 
Montana United States 38.7333 
West Virginia United States 38.6667 
Manitoba Canada 38.6000 
Ciego de Avila Cuba 38.6000 
Hallands Sweden 38.6000 
Ostergotlands Sweden 38.5667 
Nevada United States 38.5333 
Rhode Island United States 38.5333 
La Habana Cuba 38.2333 
Oregon United States 38.2000 
Arkansas United States 38.0667 
Vasternorrlands Sweden 38.0333 
Jamtlands Sweden 37.9667 
New York United States 37.9333 
New Hampshire United States 37.8333 
Dalarnas Swed{-truncated-}

SELECT 
    state.name,
    country.name,
    AVG(state_weather_stats.humidity) AS AvgHumidity,
    AVG(state_weather_stats.temperature) AS AvgTemp
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id
WHERE 
    state_weather_stats.record_date >= '2018-11-01' AND state_weather_stats.record_date <= '2018-11-30'
GROUP BY state.name, country.name
ORDER BY AvgHumidity DESC

Idaho United States 43.0333 23.6667 
South Dakota United States 42.6333 19.6333 
Nord Cameroon 41.5333 15.3667 
Adamaoua Cameroon 41.1333 20.5000 
Sud-Ouest Cameroon 40.5000 22.9667 
Kansas United States 40.3333 17.4667 
North Dakota United States 40.1667 21.0333 
Saskatchewan Canada 39.7000 21.3333 
North Carolina United States 39.5333 20.1000 
Virginia United States 39.4000 14.9000 
Ontario Canada 39.4000 22.4000 
Iowa United States 39.3667 20.7000 
Vastmanlands Sweden 39.3000 22.9333 
Kalmar Sweden 39.2333 25.9000 
Alaska United States 39.2333 21.1333 
Camaguey Cuba 39.1000 18.7667 
Nord-Ouest Cameroon 38.8000 22.0000 
Ohio United States 38.8000 17.0667 
New Mexico United States 38.7667 18.3667 
Montana United States 38.7333 17.3667 
West Virginia United States 38.6667 20.8000 
Ciego de Avila Cuba 38.6000 16.3333 
Manitoba Canada 38.6000 22.1333 
Hallands Sweden 38.6000 19.1000 
Ostergotlands Sweden 38.5667 17.4667 
Nevada United States 38.5333 21.7000 
Rhode Island United States 38.5333 21.0333 
La Habana {-truncated-}


SELECT 
    state.name,
    country.name,
    AVG(state_weather_stats.humidity) AS AvgHumidity,
    CASE
        WHEN 0 <= AVG(state_weather_stats.temperature) < 15 THEN 'COLD'
        WHEN AVG(state_weather_stats.temperature) >= 15 AND AVG(state_weather_stats.temperature) < 30 THEN 'WARM'
        WHEN AVG(state_weather_stats.temperature) >= 30 THEN 'HOT'
        ELSE 'TEMP IS WEIRD'
    END as weather_type
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id
WHERE 
    state_weather_stats.record_date >= '2018-11-01' AND state_weather_stats.record_date <= '2018-11-30'
GROUP BY state.name, country.name
ORDER BY AvgHumidity DESC

Ok I think I have it. Something is up with the syntax, but my results appear to be identical to the expected output

Idaho United States 43.0333 WARM 
South Dakota United States 42.6333 WARM 
Nord Cameroon 41.5333 WARM 
Adamaoua Cameroon 41.1333 WARM 
Sud-Ouest Cameroon 40.5000 WARM 
Kansas United States 40.3333 WARM 
North Dakota United States 40.1667 WARM 
Saskatchewan Canada 39.7000 WARM 
North Carolina United States 39.5333 WARM 
Ontario Canada 39.4000 WARM 
Virginia United States 39.4000 COLD 
Iowa United States 39.3667 WARM 
Vastmanlands Sweden 39.3000 WARM 
Alaska United States 39.2333 WARM 
Kalmar Sweden 39.2333 WARM 
Camaguey Cuba 39.1000 WARM 
Ohio United States 38.8000 WARM 
Nord-Ouest Cameroon 38.8000 WARM 
New Mexico United States 38.7667 WARM 
Montana United States 38.7333 WARM 
West Virginia United States 38.6667 WARM 
Hallands Sweden 38.6000 WARM 
Ciego de Avila Cuba 38.6000 WARM 
Manitoba Canada 38.6000 WARM 
Ostergotlands Sweden 38.5667 WARM 
Nevada United States 38.5333 WARM 
Rhode Island United States 38.5333 WARM 
La Habana Cuba 38.2333 WARM 
Oregon United States 38.2000 WARM 
Arkansas United States 38.0{-truncated-}

SELECT 
    state.name,
    country.name,
    AVG(state_weather_stats.humidity) AS AvgHumidity,
    CASE
        WHEN AVG(state_weather_stats.temperature) < 15 THEN 'COLD'
        WHEN AVG(state_weather_stats.temperature) >= 15 AND AVG(state_weather_stats.temperature) < 30 THEN 'WARM'
        WHEN AVG(state_weather_stats.temperature) >= 30 THEN 'HOT'
        ELSE 'TEMP IS WEIRD'
    END as weather_type
FROM state_weather_stats
    INNER JOIN state ON state_weather_stats.state_id = state.id
    INNER JOIN country ON state.country_id = country.id
WHERE 
    state_weather_stats.record_date >= '2018-11-01' AND state_weather_stats.record_date <= '2018-11-30'
GROUP BY state.name, country.name
ORDER BY AvgHumidity DESC, state.name ASC

Final answer, passed the test!