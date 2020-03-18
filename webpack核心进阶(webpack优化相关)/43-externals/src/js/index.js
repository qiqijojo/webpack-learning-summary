import $ from 'jquery1';
import _ from 'lodash1';

const $div = $('<div></div>');
$div.text(_.join(['1', '2', '3'], '+'));
$('body').append($div);
