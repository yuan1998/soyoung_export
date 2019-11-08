export const LoadStyle = (url) => {
    var headID = document.getElementsByTagName('head')[ 0 ];
    var link   = document.createElement('link');
    link.type  = 'text/css';
    link.rel   = 'stylesheet';
    headID.appendChild(link);
    link.href = url;
};
