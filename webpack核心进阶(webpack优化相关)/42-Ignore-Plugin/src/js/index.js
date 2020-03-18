import moment from 'moment';
import 'moment/locale/zh-cn.js';

// moment.locale('zh-cn');
let date = moment("20111031", "YYYYMMDD").fromNow();
console.log(date);