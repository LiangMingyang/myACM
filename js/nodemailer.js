// Generated by CoffeeScript 1.10.0
(function() {
  var Name, Pass, Team, To, i, j, k, mailOptions, nodemailer, record, ref, ref1, send, smtpTransport;

  nodemailer = require("nodemailer");

  smtpTransport = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true,
    auth: {
      user: "1012004860@qq.com",
      pass: ""
    }
  });

  To = ["450978053@qq.com", "lizhenplus@foxmail.com", "280835372@qq.com", "constroy@163.com", "keepit_lch@163.com", "superheyueaaa@163.com", "linziyi@buaa.edu.cn", "fate_wheel@126.com", "1440634039@qq.com", "1023964019@qq.com"];

  Name = ["TheWaySoFar", "Damocles", "undetermined", "TDL", "LovelyDonuts", "NewBeer", "TheThreeMusketeers", "I-PPPei+", "Prometheus", "null"];

  Team = [];

  Pass = [];

  record = 0;

  mailOptions = [];

  send = function(i) {
    return setTimeout(function() {
      return smtpTransport.sendMail(mailOptions[i], function(err, res) {
        if (err) {
          console.log(err, res);
        } else {
          console.log(res);
        }
        return ++record;
      });
    }, i * 1000);
  };

  for (i = j = 0, ref = Name.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    mailOptions.push({
      from: "梁明阳<1012004860@qq.com>",
      to: Name[i] + "<" + To[i] + ">",
      subject: "ACM-ICPC:合肥网络赛账号和密码",
      html: "Hi，" + Name[i] + "，这是你们队的合肥网络赛的账号和密码<br><br><b>账号：" + Team[i] + "</b><br><b>密码：" + Pass[i] + "</b><br><br>合肥网络赛将于2015-09-27 12:00:00在HDU上进行。<br><br>不要作弊，会有监察的。<br>注意保管账号和密码，<b>预祝你们取得好成绩，收到请回复</b><br><br>------------------<br>发送自：梁明阳<br>手机：13146014364<br>邮箱：1012004860@qq.com<br>QQ：1012004860<br>"
    });
  }

  for (i = k = 0, ref1 = Name.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
    send(i);
  }

  setInterval(function() {
    if (record >= To.length) {
      return console.log("Done");
    } else {
      return console.log("Waiting");
    }
  }, 2000);

}).call(this);

//# sourceMappingURL=nodemailer.js.map