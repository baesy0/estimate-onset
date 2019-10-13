var ACCOUNTID = process.env.ACCOUNTID;
var SNSTOPIC = process.env.SNSTOPIC;
var AWS = require("aws-sdk");

function numberWithCommas(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.handler = function(event, context) {
    let responseBody = {
        message: `${event}`,
        input: event
    };
    let response = {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    };

    let msg = "";
    msg += "작성일 : " + event.date +"\n";
    msg += "작성자 : " + event.author +"\n";
    msg += "프로젝트정보 : " + event.project + "\n";
    msg += "예상시작일 : " + event.startdate + "\n";
    msg += "예상마감일 : " + event.enddate + "\n";
    msg += "이메일 : " + event.email + "\n";
    msg += "코맨트 : " + event.description + "\n";
    msg += "모델 : " + event.model + "\n";
    msg += "URL : " + event.url + "\n";
    msg += "국내촬영 : " + event.domestic + "\n";
    msg += "\n";

    var params = {
        Message: msg,
        Subject: `Onset-pricing Notification - Send : ` + event.date,
        TopicArn: `arn:aws:sns:ap-northeast-2:${ACCOUNTID}:${SNSTOPIC}`
    };
    var sns = new AWS.SNS();
    sns.publish(params, context.done);
    return response;
};
