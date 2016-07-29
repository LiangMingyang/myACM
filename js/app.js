// Generated by CoffeeScript 1.10.0
(function() {
  var PS, global;

  PS = 2;

  global = this;

  this.series = [];

  angular.module('bcpc-rating', ['as.sortable']).controller('main', function($scope) {
    var fileExport, series, team, update;
    $scope.currentRanks = [];
    $scope.PS = PS;
    series = [];
    $scope.teamNames = ["TDL", "LovelyDonuts", "ACMakeMeHappier", "null", "sto orz", "QAQ", "ResuscitatedHope", "Veleno", "deticxe", "GG", "firebug", "The South China Sea"];
    $scope.teamList = (function() {
      var k, len, ref, results;
      ref = $scope.teamNames;
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        team = ref[k];
        results.push(team);
      }
      return results;
    })();
    $scope.result = (function() {
      var k, len, ref, results;
      ref = $scope.teamNames;
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        team = ref[k];
        results.push({
          name: team,
          rating: 1000
        });
      }
      return results;
    })();
    $scope.problemCount = (function() {
      var k, len, ref, results;
      ref = $scope.teamNames;
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        team = ref[k];
        results.push(0);
      }
      return results;
    })();
    $scope.dragControlListeners = {
      itemMoved: function(event) {
        return console.log(event);
      },
      orderChanged: function(event) {
        return console.log(event);
      }
    };
    $scope.calc = function() {
      var i, k, len, rank, rankDic, ref;
      rankDic = {};
      ref = $scope.teamList;
      for (i = k = 0, len = ref.length; k < len; i = ++k) {
        team = ref[i];
        rankDic[team] = i + 1;
      }
      rank = (function() {
        var l, len1, ref1, results;
        ref1 = $scope.teamNames;
        results = [];
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          team = ref1[l];
          results.push(rankDic[team]);
        }
        return results;
      })();
      $scope.currentRanks.push(rank);
      return update();
    };
    update = function() {
      var i, j, k, l, len, len1, rating, ref, ref1, res;
      if ($scope.currentRanks == null) {
        $scope.currentRanks = [];
      }
      series = (function() {
        var k, len, ref, results;
        ref = $scope.teamNames;
        results = [];
        for (k = 0, len = ref.length; k < len; k++) {
          team = ref[k];
          results.push({
            name: team,
            data: []
          });
        }
        return results;
      })();
      res = global.calc($scope.currentRanks, series, $scope.teamNames.length);
      $scope.result = (function() {
        var k, len, ref, results;
        ref = $scope.teamNames;
        results = [];
        for (i = k = 0, len = ref.length; k < len; i = ++k) {
          team = ref[i];
          results.push({
            name: team,
            rating: parseInt(res[i])
          });
        }
        return results;
      })();
      ref = $scope.result;
      for (i = k = 0, len = ref.length; k < len; i = ++k) {
        team = ref[i];
        team.rating += $scope.problemCount[i] * PS;
        ref1 = series[i].data;
        for (j = l = 0, len1 = ref1.length; l < len1; j = ++l) {
          rating = ref1[j];
          series[i].data[j] += $scope.problemCount[i] * PS;
        }
      }
      $scope.result.sort(function(a, b) {
        if (a.rating < b.rating) {
          return 1;
        }
        return -1;
      });
      $scope.drawChart();
    };
    $scope.update = update;
    $scope.showNow = function() {
      $scope.currentRanks = [[4, 9, 2, 1, 10, 6, 3, 8, 5, 7, 11, 12], [2, 4, 3, 1, 10, 5, 6, 7, 8, 12, 11, 9]];
      return update();
    };
    $scope.drawChart = function() {
      var k, results;
      if (global.series == null) {
        global.series = [];
      }
      $("#panel").highcharts({
        title: {
          text: "Rating变化图",
          x: -20
        },
        subtitle: {
          text: "Source: 北航ACM集训队",
          x: -20
        },
        xAxis: {
          categories: (function() {
            results = [];
            for (k = 1; k <= 100; k++){ results.push(k); }
            return results;
          }).apply(this)
        },
        yAxis: {
          title: {
            text: "Rating"
          },
          plotLines: [
            {
              value: 0,
              width: 1,
              color: "#808080"
            }
          ]
        },
        tooltip: {
          valueSuffix: "",
          pointFormatter: function() {
            var delta, sign;
            if (this.x === 0) {
              return "<span style='color:" + this.color + "'>\u25CF</span> " + this.series.name + ": <b>" + this.y + "</b><br/>";
            } else {
              delta = this.y - this.series.data[this.x - 1].y;
              sign = '+';
              if (delta < 0) {
                sign = '';
              }
              return "<span style='color:" + this.color + "'>\u25CF</span> " + this.series.name + ": <b>" + this.y + "</b><br/><b>" + sign + delta + "</b>";
            }
          }
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
          borderWidth: 0
        },
        series: series
      });
    };
    $scope.drawChart();
    fileExport = function(data, fileName, extension) {
      var aLink, blob, evt;
      aLink = document.createElement("a");
      blob = new Blob([data]);
      evt = document.createEvent("MouseEvents");
      evt.initEvent("click", false, false);
      aLink.download = fileName + "." + extension;
      aLink.href = URL.createObjectURL(blob);
      return aLink.dispatchEvent(evt);
    };
    $scope.downloadRank = function() {
      fileExport(JSON.stringify($scope.currentRanks), "rank_" + (new Date()), "txt");
      return fileExport(JSON.stringify($scope.problemCount), "problemCount_" + (new Date()), "txt");
    };
    return $scope.color = function(rank) {
      if (rank <= 2) {
        return "gold";
      }
      if (rank <= 5) {
        return "silver";
      }
      if (rank <= 8) {
        return "brown";
      }
      return "white";
    };
  });

}).call(this);

//# sourceMappingURL=app.js.map