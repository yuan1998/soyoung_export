import Vue           from 'vue';
import $             from 'jquery';
import DialogExport  from './components/dialogExport'
import './removeCalendarDisabled';
import { LoadStyle } from "./utils/LoadStyle";

$('<div id="yuan-app-container">').appendTo($('body'));
LoadStyle('https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/theme-chalk/index.css');
new Vue({
    el: '#yuan-app-container',
    template: `<DialogExport/>`,
    components: {DialogExport}
});



