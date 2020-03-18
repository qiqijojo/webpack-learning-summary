import moment from 'moment';

moment.locale('zh-cn');
let date = moment("20111031", "YYYYMMDD").fromNow();
console.log(date);