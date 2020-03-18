import moment from 'moment';
import 'moment/locale/zh-cn.js';

// moment.locale('zh-cn'); // 配置IgnorePlugin将local语言包文件忽略掉之后，这种方式就不生效了，只能用上面import方式引入语言包，webpack只会将引入的语言包打包进去，所以包也不是很大。
let date = moment("20111031", "YYYYMMDD").fromNow();
console.log(date);