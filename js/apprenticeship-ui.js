/* Mobile apprenticeship sheets. All displayed decisions come from simulation state. */
(function(G){'use strict';const U=G.UI,N=G.N,P=G.PATCH,A=U.A,E=U.esc,S=()=>G.S;
const dim=t=>'<div class="dim">'+t+'</div>',card=(t,h)=>'<section class="card"><h3>'+E(t)+'</h3>'+h+'</section>',row=h=>'<div class="item">'+h+'</div>';
const btn=(text,a,d={})=>'<button type="button" class="sm ap-action" data-a="'+a+'" '+Object.entries(d).map(([k,v])=>'data-'+k+'="'+E(v)+'"').join(' ')+'>'+E(text)+'</button>';
const sel=(id,list)=>'<select id="'+id+'">'+list.map(([v,t])=>'<option value="'+E(v)+'">'+E(t)+'</option>').join('')+'</select>';
const finish=r=>{G.save('auto');U.res(r)};
N.mentorSheet=c=>{
 const a=c.mx.apprentice,t=S().chars[c.master],b=N.mentorBenefit(c),students=N.disciples(c);
 return card('สายศิษย์–อาจารย์ของ '+c.name,
  (t?dim('อาจารย์: '+E(t.name)+' • ฝากตัววัน '+a.since)+dim('อาจารย์รับเพราะ '+E(a.teacherReason))+dim('ศิษย์เลือกเพราะ '+E(a.studentReason))+dim('บ่มเพาะเพิ่ม '+Math.round(b.training*100)+'% • โอกาสทะลวงเพิ่ม '+(b.breakthrough*100).toFixed(1)+' จุดเปอร์เซ็นต์')+dim(E(b.label))+dim('ฝึกด้วยกัน '+a.sessions+' ครั้ง • ดูแลศิษย์ '+a.helps+' ครั้ง'+(a.guidanceUntil>S().day?' • คำแนะนำเหลือ '+(a.guidanceUntil-S().day)+' วัน':''))+btn('ยุติสายสัมพันธ์','ap-leave',{id:c.id}):dim('ยังไม่มีอาจารย์ — ทั้งสองฝ่ายต้องเห็นชอบ'))+
  (students.length?dim('ศิษย์ที่ดูแล '+students.length+'/'+N.mentorCapacity(c)+' คน: '+E(students.map(x=>x.name).join(', '))):'')+
  (t?card('วิชาที่อาจารย์ถ่ายทอดส่วนตัวได้',dim('อาจารย์ต้องชำนาญอย่างน้อย 60% • ใช้ค่าเรียนและเวลา • ไม่เปิดวิชาให้ทั้งสำนัก')+N.personalArts(t,c).map(id=>{const err=N.artProblems(c,P.arts[id]);return row('<b>'+E(P.arts[id].name)+'</b>'+dim(E(err.join(' • ')||'ผ่านเงื่อนไขรับถ่ายทอด'))+btn('รายละเอียด / รับถ่ายทอด','ap-art',{id,person:c.id}))}).join('')+(N.personalArts(t,c).length?'':dim('ยังไม่มีวิชาใหม่ที่ตรงมรรคาและขอบเขตของศิษย์'))):'')+
  a.history.slice(0,3).map(e=>dim('วัน '+e.day+' • '+E(e.text))).join(''));
};
U.M.mentors=()=>{
 const people=G.home();
 return card('ศิษย์–อาจารย์',dim('รับศิษย์และขอฝากตัวได้ทั้งสองทาง ต่างฝ่ายตัดสินใจจากมรรคา พรสวรรค์ ความรู้ นิสัย ความสัมพันธ์ และภาระดูแล')+dim('เปิด/ปิดการหาอาจารย์อัตโนมัติได้ที่หน้าบริหารสำนัก')+
  '<label>สมาชิกที่จะเป็นศิษย์'+sel('ap-student',people.map(c=>[c.id,c.name+' • '+G.PATHS[c.path].n]))+'</label>'+
  '<label>สมาชิกที่จะเป็นอาจารย์'+sel('ap-teacher',people.filter(c=>c.rank>=2).map(c=>[c.id,c.name+' • '+G.PATHS[c.path].n+' • ศิษย์ '+N.disciples(c).length+'/'+N.mentorCapacity(c)]))+'</label>'+
  btn('ดูเหตุผลของทั้งสองฝ่าย','ap-preview')+btn('ให้ศิษย์ขอฝากตัว','ap-propose',{direction:'student'})+btn('ให้อาจารย์ชวนรับศิษย์','ap-propose',{direction:'teacher'}))+
  people.map(c=>N.mentorSheet(c)).join('')+
  card('การตอบรับและปฏิเสธล่าสุด',S().patch.mentorship.history.slice(0,20).map(e=>row('วัน '+e.day+' • '+E(e.text))).join('')||dim('ยังไม่มีข้อเสนอ'));
};
U.M.mentorPreview=({teacher,student})=>{const t=S().chars[teacher],c=S().chars[student];if(!t||!c)return dim('ไม่พบสมาชิก');const a=N.mentorAssessment(t,c);return card('พิจารณา '+t.name+' และ '+c.name,dim(a.problem?E(a.problem):'ผ่านเงื่อนไขพื้นฐาน')+dim('ฝ่ายอาจารย์: '+(a.teacherAccept?'พร้อมรับ':'ยังไม่รับ')+' • '+E(a.teacherReason))+dim(E(a.teacherDecline))+dim('ฝ่ายศิษย์: '+(a.studentAccept?'พร้อมฝากตัว':'ยังไม่ตกลง')+' • '+E(a.studentReason))+dim(E(a.studentDecline))+dim('การดูเหตุผลยังไม่เปลี่ยนสายสัมพันธ์'))};
A['ap-open']=()=>U.open('mentors');
A['ap-preview']=()=>U.open('mentorPreview',{teacher:document.getElementById('ap-teacher')?.value,student:document.getElementById('ap-student')?.value});
A['ap-propose']=d=>finish(N.proposeMentor(document.getElementById('ap-teacher')?.value,document.getElementById('ap-student')?.value,d.direction));
A['ap-leave']=d=>{const c=S().chars[d.id];if(c&&confirm('ยุติสายสัมพันธ์ของ '+c.name+'? วิชาที่เรียนสำเร็จยังอยู่'))finish(N.leaveMentor(c))};
A['ap-art']=d=>{U.artPerson=d.person;U.open('mxart',d.id)};
const art=U.M.mxart;U.M.mxart=id=>{
 const c=S().chars[U.artPerson]||G.home()[0],a=P.arts[id];
 if(a&&c&&N.privateTeacher(c,id)&&!S().patch.knownArts.includes(id))return U.M.privateArt(id)+dim('วิชาส่วนตัวของอาจารย์ ยังไม่ได้คัดลอกเข้าหอวิชา');
 return art(id);
};
const character=U.M.char;U.M.char=id=>{const c=S().chars[id];return character(id)+(c?N.mentorSheet(c):'')};
for(const key of ['lives','steward']){const view=N.views[key];N.views[key]=()=>card('สายสัมพันธ์ที่ช่วยพัฒนาจริง',btn('ศิษย์–อาจารย์ / รับถ่ายทอดวิชา','ap-open'))+view()}
const home=U.V.home;U.V.home=()=>home()+card('ศิษย์–อาจารย์',dim('ดูเหตุผลการฝากตัว การช่วยฝึก และวิชาที่อาจารย์ถ่ายทอดได้')+btn('เปิดสายศิษย์–อาจารย์','ap-open'));
const schedule=N.scheduleHtml;
N.scheduleHtml=c=>schedule(c).replace('ตารางวันนี้ของ','กิจกรรมล่าสุดของ').replace('ความหลากหลายวันนี้','ความหลากหลายล่าสุด').replace(/<\/b> /g,'</b> ');
})(window.G);
