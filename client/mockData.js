window.mockData = {"neighborhoods":[
{
"neighborhood":"SoMa",
"value":4,
"blurb":"SoMa is a good match for you. It has a highly rated result for boba and a highly rated result for gym.",
"img":"https://s3-media4.fl.yelpcdn.com/bphoto/QKY1aq9KUw5WzBambvxwlg/o.jpg"
},
{
"neighborhood":"Mission",
"value":4,
"blurb":"Mission is a good match for you. It has a highly rated result for boba and a highly rated result for indian%20food and a highly rated result for gym.",
"img":"https://s3-media3.fl.yelpcdn.com/bphoto/PuiC1WJFsI_Sq2pfNOUxvg/o.jpg"
},
{
"neighborhood":"Tenderloin",
"value":2,
"blurb":"Hayes Valley is a good match for you. It has a highly rated result for boba and a highly rated result for gym.",
"img":"https://s3-media2.fl.yelpcdn.com/bphoto/y9M92f_aKHsv8WzFt-m-3A/o.jpg"
}
],
"listings":{
"tenderloin":[
{
"link":"http://sfbay.craigslist.org/sfc/roo/5763435574.html",
"title":"Centrally located private furnished bed/bath",
"price":"$1900",
"lat":"37.783991",
"lon":"-122.408067",
"text":"blah blah blah...01"
},
{
"link":"http://sfbay.craigslist.org/sfc/roo/5763585478.html",
"title":"Hey guys! If you're Gay w/ Valid Pic ID & Cash in hand come live w/me.",
"price":"$420",
"text":"blah blah blah...02"
}
],
"nob hill":[
{
"link":"http://sfbay.craigslist.org/sfc/roo/5769398133.html",
"title":"Furnished, Spacious & Bright Bedroom -- Great location 5/5",
"price":"$2000",
"lat":"37.790116",
"lon":"-122.410612",
"text":"blah blah blah...11"
},
{
"link":"http://sfbay.craigslist.org/sfc/roo/5769398133.html",
"title":"Furnished, Spacious & Bright Bedroom -- Great location 5/5",
"price":"$2000",
"lat":"37.790116",
"lon":"-122.420612",
"text":"blah blah blah...12"},
],
"mission":[
{
"link":"http://sfbay.craigslist.org/sfc/roo/5769398133.html",
"title":"Furnished, Spacious & Bright Bedroom -- Great location 5/5",
"price":"$2000",
"lat":"37.790116",
"lon":"-122.410612",
"text":"blah blah blah...11"
},
{
"link":"http://sfbay.craigslist.org/sfc/roo/5769398133.html",
"title":"Furnished, Spacious & Bright Bedroom -- Great location 5/5",
"price":"$2000",
"lat":"37.790116",
"lon":"-122.420612",
"text":"blah blah blah...12"}
]}};
//var yelp = [{"name":"San Francisco Museum of Modern Art","rating":4.5,"reviewCount":141,"url":"http://www.yelp.com/biz/san-francisco-museum-of-modern-art-san-francisco-6?adjust_creative=xi_i5XExqHs6OjTO-t5tAw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=xi_i5XExqHs6OjTO-t5tAw","phone":"+1-415-357-4000","address":["151 3rd St","Financial District","San Francisco, CA 94103"],"neighborhoods":["Financial District","SoMa"]},{"name":"Exploratorium","rating":4.5,"reviewCount":663,"url":"http://www.yelp.com/biz/exploratorium-san-francisco-2?adjust_creative=xi_i5XExqHs6OjTO-t5tAw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=xi_i5XExqHs6OjTO-t5tAw","phone":"+1-415-528-4444","address":["Pier 15","Embarcadero","San Francisco, CA 94111"],"neighborhoods":["Embarcadero","North Beach/Telegraph Hill"]},{"name":"California Academy of Sciences","rating":4,"reviewCount":2568,"url":"http://www.yelp.com/biz/california-academy-of-sciences-san-francisco?adjust_creative=xi_i5XExqHs6OjTO-t5tAw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=xi_i5XExqHs6OjTO-t5tAw","phone":"+1-415-379-8000","address":["55 Music Concourse Dr","San Francisco, CA 94118"]},{"name":"The Walt Disney Family Museum","rating":4.5,"reviewCount":720,"url":"http://www.yelp.com/biz/the-walt-disney-family-museum-san-francisco?adjust_creative=xi_i5XExqHs6OjTO-t5tAw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=xi_i5XExqHs6OjTO-t5tAw","phone":"+1-415-345-6800","address":["Presidio of San Francisco","104 Montgomery St","Presidio","San Francisco, CA 94129"],"neighborhoods":["Presidio"]},{"name":"Asian Art Museum","rating":4.5,"reviewCount":641,"url":"http://www.yelp.com/biz/asian-art-museum-san-francisco?adjust_creative=xi_i5XExqHs6OjTO-t5tAw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=xi_i5XExqHs6OjTO-t5tAw","phone":"+1-415-581-3500","address":["200 Larkin St","Civic Center","San Francisco, CA 94102"],"neighborhoods":["Civic Center"]},{"name":"San Francisco Botanical Garden","rating":4.5,"reviewCount":433,"url":"http://www.yelp.com/biz/san-francisco-botanical-garden-san-francisco-2?adjust_creative=xi_i5XExqHs6OjTO-t5tAw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=xi_i5XExqHs6OjTO-t5tAw","phone":"+1-415-661-1316","address":["9th Ave & Lincoln Way","Golden Gate Park","San Francisco, CA 94122"]},{"name":"de Young","rating":4,"reviewCount":1417,"url":"http://www.yelp.com/biz/de-young-san-francisco?adjust_creative=xi_i5XExqHs6OjTO-t5tAw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=xi_i5XExqHs6OjTO-t5tAw","phone":"+1-415-750-3600","address":["Golden Gate Park","50 Hagiwara Tea Garden Dr","San Francisco, CA 94118"]},{"name":"Legion of Honor","rating":4.5,"reviewCount":701,"url":"http://www.yelp.com/biz/legion-of-honor-san-francisco?adjust_creative=xi_i5XExqHs6OjTO-t5tAw&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=xi_i5XExqHs6OjTO-t5tAw","phone":"+1-415-750-3600","address":["Lincoln Park","100 34th Avenue","Sea Cliff","San Francisco, CA 94121"],"neighborhoods":["Sea Cliff"]}];
//["Sea Cliff”]}];

//window.craigslist = craigslist;
//window.yelp = yelp;
