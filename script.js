'use strict';
const element=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
const {speakers,organizers,schedule}=window.workshop;
for(const speaker of speakers){
  const article=element('article','speaker');
  const identity=element('div','speaker-identity');
  if(speaker.image){const img=element('img');img.src=speaker.image;img.alt=`Portrait of ${speaker.name}`;img.loading='lazy';img.width=88;img.height=88;identity.append(img);}
  else{const initials=element('div','portrait-initials',speaker.name.split(' ').map(word=>word[0]).join(''));initials.setAttribute('aria-hidden','true');identity.append(initials);}
  const link=element('a','speaker-name',speaker.name);link.href=speaker.url;identity.append(link,element('span','speaker-affiliation',speaker.affiliation));
  const copy=element('div','speaker-copy');copy.append(element('h3','',speaker.topic),element('p','speaker-title',speaker.title),element('p','',speaker.bio));
  article.append(identity,copy);document.getElementById('speaker-grid').append(article);
}
for(const organizer of organizers){
  const article=element('article','organizer');
  if(organizer.image){
    const portrait=element('div','organizer-portrait');
    const img=element('img');
    img.src=organizer.image;img.alt=`Portrait of ${organizer.name}`;
    img.loading='lazy';img.decoding='async';img.width=96;img.height=96;
    if(organizer.imagePosition)img.style.objectPosition=organizer.imagePosition;
    if(organizer.imageZoom){img.style.transform=`scale(${organizer.imageZoom})`;img.style.transformOrigin=organizer.imagePosition||'center 25%';}
    portrait.append(img);article.append(portrait);
  }else{
    const initials=element('div','organizer-portrait organizer-initials',organizer.name.split(' ').map(word=>word[0]).join(''));
    initials.setAttribute('aria-hidden','true');article.append(initials);
  }
  const heading=element('h3');
  if(organizer.url){const link=element('a','',organizer.name);link.href=organizer.url;heading.append(link);}
  else heading.textContent=organizer.name;
  article.append(heading,element('p','',organizer.affiliation),element('p','organizer-role',organizer.role));
  document.getElementById('organizer-grid').append(article);
}
for(const session of schedule){
  const row=element('tr');row.dataset.type=session.type;
  const time=element('td','',session.time);const name=element('td');name.append(element('span','session-name',session.name));
  if(session.type==='interactive')name.append(element('span','session-type','Discussion'));
  if(session.detail)name.append(element('span','session-detail',session.detail));
  row.append(time,name,element('td','',`${session.minutes} min`));document.getElementById('schedule-body').append(row);
}
for(const button of document.querySelectorAll('[data-filter]'))button.addEventListener('click',()=>{
  for(const sibling of document.querySelectorAll('[data-filter]'))sibling.setAttribute('aria-pressed',String(sibling===button));
  const selected=button.dataset.filter;
  for(const row of document.querySelectorAll('#schedule-body tr'))row.hidden=selected!=='all'&&row.dataset.type!==selected;
});
