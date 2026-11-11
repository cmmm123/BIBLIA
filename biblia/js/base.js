const $=s=>document.querySelector(s);
const sv=p=>'<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+p+'</svg>';
const ICO={
home:sv('<path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-5h4v5"/>'),
book:sv('<path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13C17 4 14 4.5 12 6zM12 6v13"/>'),
mark:sv('<path d="M7 3h10v18l-5-4-5 4z"/>'),
moon:sv('<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>'),
shuffle:sv('<path d="M4 7h4l8 10h4M4 17h4l2-2.5M14 9.5L16 7h4M18 5l2 2-2 2M18 15l2 2-2 2"/>'),
sound:sv('<path d="M4 10v4h4l5 4V6l-5 4H4zM16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>'),
share:sv('<path d="M12 15V4M8 8l4-4 4 4M5 13v6h14v-6"/>'),
play:sv('<path d="M8 5l11 7-11 7z" fill="currentColor"/>'),
pause:sv('<path d="M8 5v14M16 5v14" stroke-width="3"/>'),
search:sv('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'),
explore:sv('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>'),
up:sv('<path d="M6 15l6-6 6 6"/>'),
crossm:sv('<path d="M12 3v18M7 9h10"/>'),
note:sv('<path d="M9 18V6l10-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>'),
down:sv('<path d="M6 9l6 6 6-6"/>'),
next:sv('<path d="M9 6l6 6-6 6"/>'),
cross:'<svg class="ic cross" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M6 8h12"/></svg>'
};
ICO.fe=sv('<path d="M12 3v18M7 9h10"/>');
Object.assign(ICO,{
cal:sv('<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>'),
heart:sv('<path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z"/>'),
habit:sv('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>'),
check:sv('<path d="M5 12l5 5 9-10"/>'),
sun:sv('<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'),
target:sv('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
leaf:sv('<path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14zM5 19l8-8"/>'),
bell:sv('<path d="M6 17v-6a6 6 0 0 1 12 0v6l1.5 2h-15zM10 21h4"/>'),
route:sv('<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7"/>'),
cap:sv('<path d="M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>'),
chat:sv('<path d="M4 5h16v11H9l-5 4z"/>'),
star:sv('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),
pen:sv('<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3"/>'),
quiz:sv('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17v.5"/>'),
map:sv('<circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M12 7v5M12 12l-6 4M12 12l6 4"/>'),
church:sv('<path d="M12 2v5M10 4.5h4M6 21V12l6-5 6 5v9zM10 21v-5h4v5"/>'),
smile:sv('<circle cx="12" cy="12" r="9"/><path d="M8 14c1 2 2.5 3 4 3s3-1 4-3M9 9.5v.5M15 9.5v.5"/>'),
qr:sv('<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h3v3h-3zM19 14v6h-3M14 20h1"/>')
});
