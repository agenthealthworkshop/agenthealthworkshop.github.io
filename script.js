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
  const card=personCard(speaker);
  card.append(element('p','person-topic',speaker.topic));
  document.getElementById('speaker-grid').append(card);
}
for(const organizer of organizers){
  const card=personCard(organizer);
  document.getElementById('organizer-grid').append(card);
}
for(const session of schedule){
  const row=element('tr');row.dataset.type=session.type;
  const time=element('td','',session.time);const name=element('td');name.append(element('span','session-name',session.name));
  if(session.detail)name.append(element('span','session-detail',session.detail));
  row.append(time,name);
  const target=Number(session.time.slice(0,2))<13?'morning-schedule':'afternoon-schedule';
  document.getElementById(target).append(row);
}
