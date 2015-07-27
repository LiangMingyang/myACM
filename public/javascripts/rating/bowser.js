// Generated by CoffeeScript 1.9.3
(function() {
  this.solve = function() {
    var array, dic, ele, form, i, j, k, l, len, len1, ref, res, res_rating, res_team, t, team, teams;
    teams = ["TheWaySoFar", "Damocles", "undetermined", "TDL", "LovelyDonuts", "NewBeer", "TheThreeMusketeers", "I-PPPei+", "Prometheus", "Nostalgia", "Time After Time", "TriMusketeers", "null", "Unknown"];
    dic = {};
    for (i = j = 0, len = teams.length; j < len; i = ++j) {
      team = teams[i];
      dic[team] = i;
    }
    array = $('.list>li');
    array = (function() {
      var k, len1, results;
      results = [];
      for (k = 0, len1 = array.length; k < len1; k++) {
        ele = array[k];
        results.push(ele.innerText);
      }
      return results;
    })();
    form = [];
    for (k = 0, len1 = array.length; k < len1; k++) {
      t = array[k];
      form.push(dic[t]);
    }
    if (this.table == null) {
      this.table = [];
    }
    if (this.contest_num == null) {
      this.contest_num = 1;
    }
    table.push(form);
    res = this.build(table, teams);
    res_team = $('.team>li');
    res_rating = $('.rating>li');
    for (i = l = 0, ref = teams.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
      res_team[i].innerHTML = res[i].teamName;
      res_rating[i].innerHTML = parseInt(res[i].rating);
    }
    ++this.contest_num;
    return $('#contest')[0].innerHTML = "Contest " + this.contest_num;
  };

}).call(this);

//# sourceMappingURL=bowser.js.map