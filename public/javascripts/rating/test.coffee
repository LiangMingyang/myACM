teamName = [
  "TheWaySoFar"
, "Damocles"
, "undetermined"
, "TDL"
, "LovelyDonuts"
, "NewBeer"
, "TheThreeMusketeers"
, "I-PPPei+"
, "Prometheus"
, "Nostalgia"
, "Time After Time"
, "TriMusketeers"
, "null"
, "Unknown"
]
contests = [
  [0,1,2,3,4,5,6,7,8,9,10,11,12]
,
  [0,1,3,2,4,5,6,7,8,9,10,11,12]
,
  [0,1,3,2,4,5,6,7,8,9,10,11,12]
,
  [13,0,3,1,2,4,5,6,7,8,9,10,11,12]
,
  [0,3,1,2,4,5,6,7,8,9,10,11,12]
,
  [3,1,2,4,5,6,7,8,9,10,11,12]
,
  [0,3,1,2,4,5,6,7,8,9,10,11,12]
,
  [0,13,3,1,2,4,5,6,7,8,9,10,11,12]
,
  [0,3,1,2,4,5,6,7,8,9,10,11,12]
,
  [0,3,1,2,4,5,6,7,8,9,10,11,12]
,
  [0,3,1,2,4,5,6,7,8,9,10,11,12]
,
  [0,3,1,2,4,5,6,7,8,9,10,11,12]
,
  [0,3,1,2,4,5,6,7,8,9,10,11,12]
]

build = require('./main')
console.log build(contests,teamName)