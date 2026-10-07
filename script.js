'use strict';
const element=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
const {speakers,organizers,schedule}=window.workshop;
const personCard=person=>{
  const article=element('article','person');
  const portrait=element('div','person-portrait');
  if(person.image){
    const img=element('img');img.src=person.image;img.alt=`Portrait of ${person.name}`;img.loading='lazy';img.decoding='async';img.width=80;img.height=80;
    if(person.imagePosition)img.style.objectPosition=person.imagePosition;
    if(person.imageZoom){img.style.transform=`scale(${person.imageZoom})`;img.style.transformOrigin=person.imagePosition||'center 25%';}
    portrait.append(img);
  }else{portrait.classList.add('person-initials');portrait.textContent=person.name.split(' ').map(word=>word[0]).join('');portrait.setAttribute('aria-hidden','true');}
  const heading=element('h3');
  if(person.url){const link=element('a','person-name',person.name);link.href=person.url;heading.append(link);}else heading.textContent=person.name;
  article.append(portrait,heading,element('span','person-affiliation',person.affiliation));return article;
};
for(const speaker of speakers){
  document.getElementById('speaker-grid').append(personCard(speaker));
  const profile=element('article');profile.append(element('h3','',speaker.name),element('p','profile-topic',speaker.topic),element('p','profile-title',speaker.title),element('p','',speaker.bio));
  document.getElementById('speaker-profiles').append(profile);
}
for(const organizer of organizers){
  document.getElementById('organizer-grid').append(personCard(organizer));
  const role=element('div');role.append(element('dt','',organizer.name),element('dd','',organizer.role));document.getElementById('organizer-roles').append(role);
}
for(const session of schedule){
  const row=element('tr');row.dataset.type=session.type;
  const time=element('td','',session.time);const name=element('td');name.append(element('span','session-name',session.name));
  if(session.detail)name.append(element('span','session-detail',session.detail));
  row.append(time,name,element('td','',`${session.minutes} min`));document.getElementById('schedule-body').append(row);
}
for(const button of document.querySelectorAll('[data-filter]'))button.addEventListener('click',()=>{
  for(const sibling of document.querySelectorAll('[data-filter]'))sibling.setAttribute('aria-pressed',String(sibling===button));
  const selected=button.dataset.filter;
  for(const row of document.querySelectorAll('#schedule-body tr'))row.hidden=selected!=='all'&&row.dataset.type!==selected;
});
