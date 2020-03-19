import '../css/detail.css';
import $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn.js';

const time = moment('20111031', 'YYYYMMDD').fromNow();
console.log(time);

const $div = $('<div></div>');
$div.text(_.join(['4', '5', '6'], '+'));
$('body').append($div);

