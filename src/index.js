import Vue           from 'vue';
import $             from 'jquery';
import DialogExport  from './components/dialogExport'
import './removeCalendarDisabled';

$('<div id="yuan-app-container">').appendTo($('body'));
new Vue({
    el: '#yuan-app-container',
    template: `<DialogExport/>`,
    components: {DialogExport}
})



