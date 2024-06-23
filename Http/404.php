<?php

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://zenquotes.io/api/quotes");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($curl);
curl_close($curl);

$defaultQuotes = [
    (object) [
        "q" => "I should go",
        "a" => "Commander Shepard",
    ]
];

$quotes = json_decode($output) ?? $defaultQuotes;
$numQuotes = count($quotes);
$randomIndex = rand(0, $numQuotes - 1);

$randomMessage['quote'] = $quotes[$randomIndex]->q;
$randomMessage['from'] =  $quotes[$randomIndex]->a;
