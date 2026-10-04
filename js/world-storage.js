/* Lossless local-save compression. Exported/imported files remain ordinary checksummed JSON. */
(function(G){'use strict';const PREFIX='MEKHA-LZ1:',LIMIT=55295;
G.packLocalSave=text=>{
 const bytes=unescape(encodeURIComponent(text));if(!bytes.length)return PREFIX;
 const dict=new Map();for(let i=0;i<256;i++)dict.set(String.fromCharCode(i),i);
 let next=256,w=bytes[0],codes=[],parts=[];
 const emit=n=>{codes.push(n);if(codes.length>=4096){parts.push(String.fromCharCode(...codes));codes=[];}};
 for(let i=1;i<bytes.length;i++){const c=bytes[i],wc=w+c;if(dict.has(wc))w=wc;else{emit(dict.get(w));if(next<LIMIT)dict.set(wc,next++);w=c;}}
 emit(dict.get(w));if(codes.length)parts.push(String.fromCharCode(...codes));return PREFIX+parts.join('');
};
G.unpackLocalSave=text=>{
 if(!text?.startsWith(PREFIX))return text;const data=text.slice(PREFIX.length);if(!data)return '';
 const dict=Array.from({length:256},(_,i)=>String.fromCharCode(i));let next=256,w=dict[data.charCodeAt(0)];
 if(w===undefined)throw Error('ข้อมูลเซฟบีบอัดเสียหาย');const out=[w];let size=w.length;
 for(let i=1;i<data.length;i++){const code=data.charCodeAt(i),entry=dict[code]??(code===next?w+w[0]:null);if(entry===null)throw Error('ข้อมูลเซฟบีบอัดเสียหาย');out.push(entry);size+=entry.length;if(size>32*1024*1024)throw Error('เซฟบีบอัดใหญ่เกินขีดจำกัด');if(next<LIMIT)dict[next++]=w+entry[0];w=entry;}
 return decodeURIComponent(escape(out.join('')));
};
const put=G.store.put,get=G.store.get;
G.store.put=(key,value)=>{if(!key.startsWith('mekha_patch_'))return put(key,value);try{return put(key,G.packLocalSave(value))}catch(e){return false}};
G.store.get=key=>{const value=get(key);try{return G.unpackLocalSave(value)}catch(e){return null}};
})(window.G);
