// banner3.js
const script1 = document.createElement('script');
script1.type = 'text/javascript';
script1.innerHTML = `
    atOptions = {
        'key' : '167448249ab9b43cbf7246d6e19dc9aa',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
    };
`;
document.body.appendChild(script1);

const script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.src = '//www.highperformanceformat.com/167448249ab9b43cbf7246d6e19dc9aa/invoke.js';
document.body.appendChild(script2);
