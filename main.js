function _0x2e00(_0x128067,_0x28fc59){const _0x211019=_0x2110();return _0x2e00=function(_0x2e00c1,_0x3a24f1){_0x2e00c1=_0x2e00c1-0x105;let _0x48588d=_0x211019[_0x2e00c1];return _0x48588d;},_0x2e00(_0x128067,_0x28fc59);}const _0x56923a=_0x2e00;function _0x2110(){const _0x5eac9b=['\x20Thank\x20You\x20For\x20Using\x20','split','createInterface','✅Connected\x20to\x20=>\x20','chalk','public','loadMessage','Enter\x20Your\x20WhatsApp\x20Number\x20With\x20Your\x20Contry\x20Code,\x20📌Example\x20:\x20+916238768108','greenBright','\x20INSTAGRAM:\x20@mr.z_ninja\x20','remoteJid','open','verifiedName','ext','user','resolve','requestPairingCode','./lib/myfunc','author','Chrome\x20(Linux)','pino','concat','@s.whatsapp.net','readFileSync','base64','from','serializeM','type','rate-overlimit','existsSync','libphonenumber-js','WhatsApp','fromMe','exit','getNumber','silent','3101814OzXOsC','test','startsWith','./settings','sendText','bind','585500zXnJpB','length','Enter\x20Your\x20WhatsApp\x20Number\x20With\x20Your\x20County\x20Code\x20😊\x0a📌Example:\x20+916238768108\x20:\x20','stdout','creds.update','map','some','close','48DWivhS','fatal','bgBlack','yellow','child','messages.upsert','./MONK-MD','name','redBright','contacts','10FMNJnn','creds','247541dpqNoy','output','message','default','1586271ctpxpg','0@s.whatsapp.net','916238768108','fromBuffer','4049765cWhSwt','bold','matchAll','notify','cache','magenta','BAE5','alloc','decodeJid','contacts.update','writeFileSync','status@broadcast','black','Connection\x20Closed','4OiQQMd','getName','downloadMediaMessage','includes','international','@whiskeysockets/baileys','argv','Caught\x20exception:\x20','item-not-found','Update\x20','@hapi/boom','./lib/exif','subject','mimetype','connection.update','sendVideoAsSticker','registered','976275vkVjEL','log','<\x20==================================================\x20>','sendMessage','endsWith','isBuffer','ephemeralMessage','awesome-phonenumber','replace','file-type','--pairing-code','1522240tGJVSV','axios','downloadAndSaveMediaMessage','match','readline','key','Value\x20not\x20found','\x20GITHUB:\x20AbhishekSuresh2\x20','cyan','bgGreen','join','./database/owner.json','mtype','groupMetadata','statusCode','@g.us','packname','msg','Socket\x20connection\x20timeout','withoutContact','Your\x20Pairing\x20Code\x20Is\x20:\x20','keys'];_0x2110=function(){return _0x5eac9b;};return _0x2110();}(function(_0x1d881b,_0x3e4336){const _0x1113d8=_0x2e00,_0x2f178b=_0x1d881b();while(!![]){try{const _0x3718eb=parseInt(_0x1113d8(0x108))/0x1+parseInt(_0x1113d8(0x14e))/0x2+-parseInt(_0x1113d8(0x120))/0x3+parseInt(_0x1113d8(0x132))/0x4*(-parseInt(_0x1113d8(0x124))/0x5)+parseInt(_0x1113d8(0x188))/0x6+parseInt(_0x1113d8(0x11c))/0x7*(-parseInt(_0x1113d8(0x110))/0x8)+parseInt(_0x1113d8(0x143))/0x9*(parseInt(_0x1113d8(0x11a))/0xa);if(_0x3718eb===_0x3e4336)break;else _0x2f178b['push'](_0x2f178b['shift']());}catch(_0x383798){_0x2f178b['push'](_0x2f178b['shift']());}}}(_0x2110,0x66d38),require(_0x56923a(0x105)));const pino=require(_0x56923a(0x178)),{Boom}=require(_0x56923a(0x13c)),fs=require('fs'),chalk=require(_0x56923a(0x168)),FileType=require(_0x56923a(0x14c)),path=require('path'),axios=require(_0x56923a(0x14f)),PhoneNumber=require(_0x56923a(0x14a)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x56923a(0x13d)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require(_0x56923a(0x175)),{default:XeonBotIncConnect,delay,PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@whiskeysockets/baileys'),NodeCache=require('node-cache'),Pino=require(_0x56923a(0x178)),readline=require(_0x56923a(0x152)),{parsePhoneNumber}=require(_0x56923a(0x182)),makeWASocket=require(_0x56923a(0x137))[_0x56923a(0x11f)],store=makeInMemoryStore({'logger':pino()[_0x56923a(0x114)]({'level':'silent','stream':'store'})});let phoneNumber=_0x56923a(0x122),owner=JSON['parse'](fs[_0x56923a(0x17b)](_0x56923a(0x159)));const pairingCode=!!phoneNumber||process['argv'][_0x56923a(0x135)](_0x56923a(0x14d)),useMobile=process[_0x56923a(0x138)][_0x56923a(0x135)]('--mobile'),rl=readline[_0x56923a(0x166)]({'input':process['stdin'],'output':process[_0x56923a(0x10b)]}),question=_0x192315=>new Promise(_0xc0250f=>rl['question'](_0x192315,_0xc0250f));async function startXeonBotInc(){const _0x132668=_0x56923a;let {version:_0x5e06a0,isLatest:_0x56284a}=await fetchLatestBaileysVersion();const {state:_0xf1ece2,saveCreds:_0x22d333}=await useMultiFileAuthState('./session'),_0x4f62e8=new NodeCache(),_0x4163a7=makeWASocket({'logger':pino({'level':_0x132668(0x187)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'browser':[_0x132668(0x177),'',''],'auth':{'creds':_0xf1ece2[_0x132668(0x11b)],'keys':makeCacheableSignalKeyStore(_0xf1ece2[_0x132668(0x163)],Pino({'level':_0x132668(0x111)})[_0x132668(0x114)]({'level':_0x132668(0x111)}))},'browser':[_0x132668(0x177),'',''],'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x1a529f=>{const _0x1f2aae=_0x132668;let _0x308ccc=jidNormalizedUser(_0x1a529f['remoteJid']),_0x164fcf=await store[_0x1f2aae(0x16a)](_0x308ccc,_0x1a529f['id']);return _0x164fcf?.[_0x1f2aae(0x11e)]||'';},'msgRetryCounterCache':_0x4f62e8,'defaultQueryTimeoutMs':undefined});store[_0x132668(0x107)](_0x4163a7['ev']);if(pairingCode&&!_0x4163a7['authState'][_0x132668(0x11b)][_0x132668(0x142)]){if(useMobile)throw new Error('Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api');let _0x51cea6;!!_0x51cea6?(_0x51cea6=_0x51cea6['replace'](/[^0-9]/g,''),!Object[_0x132668(0x163)](PHONENUMBER_MCC)[_0x132668(0x10e)](_0x1a8425=>_0x51cea6['startsWith'](_0x1a8425))&&(console[_0x132668(0x144)](chalk[_0x132668(0x112)](chalk[_0x132668(0x118)](_0x132668(0x16b)))),process[_0x132668(0x185)](0x0))):(_0x51cea6=await question(chalk[_0x132668(0x112)](chalk[_0x132668(0x16c)]('Enter\x20Your\x20WhatsApp\x20Number\x20With\x20Your\x20County\x20Code\x20😊\x0a📌Example:\x20+916238768108\x20:\x20'))),_0x51cea6=_0x51cea6[_0x132668(0x14b)](/[^0-9]/g,''),!Object[_0x132668(0x163)](PHONENUMBER_MCC)[_0x132668(0x10e)](_0xff609c=>_0x51cea6[_0x132668(0x18a)](_0xff609c))&&(console[_0x132668(0x144)](chalk[_0x132668(0x112)](chalk['redBright'](_0x132668(0x16b)))),_0x51cea6=await question(chalk[_0x132668(0x112)](chalk[_0x132668(0x16c)](_0x132668(0x10a)))),_0x51cea6=_0x51cea6[_0x132668(0x14b)](/[^0-9]/g,''),rl['close']())),setTimeout(async()=>{const _0x1381aa=_0x132668;let _0x169c15=await _0x4163a7[_0x1381aa(0x174)](_0x51cea6);_0x169c15=_0x169c15?.[_0x1381aa(0x151)](/.{1,4}/g)?.[_0x1381aa(0x158)]('-')||_0x169c15,console['log'](chalk[_0x1381aa(0x130)](chalk[_0x1381aa(0x157)](_0x1381aa(0x162))),chalk[_0x1381aa(0x130)](chalk['white'](_0x169c15)));},0xbb8);}_0x4163a7['ev']['on'](_0x132668(0x115),async _0x5623bb=>{const _0x9d395d=_0x132668;try{const _0x562810=_0x5623bb['messages'][0x0];if(!_0x562810[_0x9d395d(0x11e)])return;_0x562810[_0x9d395d(0x11e)]=Object[_0x9d395d(0x163)](_0x562810[_0x9d395d(0x11e)])[0x0]===_0x9d395d(0x149)?_0x562810[_0x9d395d(0x11e)][_0x9d395d(0x149)][_0x9d395d(0x11e)]:_0x562810['message'];_0x562810['key']&&_0x562810['key'][_0x9d395d(0x16e)]===_0x9d395d(0x12f)&&(autoread_status&&await _0x4163a7['readMessages']([_0x562810[_0x9d395d(0x153)]]));if(!_0x4163a7['public']&&!_0x562810[_0x9d395d(0x153)][_0x9d395d(0x184)]&&_0x5623bb[_0x9d395d(0x17f)]===_0x9d395d(0x127))return;if(_0x562810[_0x9d395d(0x153)]['id'][_0x9d395d(0x18a)](_0x9d395d(0x12a))&&_0x562810[_0x9d395d(0x153)]['id'][_0x9d395d(0x109)]===0x10)return;const _0x58e294=smsg(_0x4163a7,_0x562810,store);require(_0x9d395d(0x116))(_0x4163a7,_0x58e294,_0x5623bb,store);}catch(_0x5bdf4d){console[_0x9d395d(0x144)](_0x5bdf4d);}}),_0x4163a7[_0x132668(0x12c)]=_0x4bbe2d=>{const _0x124a75=_0x132668;if(!_0x4bbe2d)return _0x4bbe2d;if(/:\d+@/gi[_0x124a75(0x189)](_0x4bbe2d)){let _0x79d0f2=jidDecode(_0x4bbe2d)||{};return _0x79d0f2[_0x124a75(0x172)]&&_0x79d0f2['server']&&_0x79d0f2[_0x124a75(0x172)]+'@'+_0x79d0f2['server']||_0x4bbe2d;}else return _0x4bbe2d;},_0x4163a7['ev']['on'](_0x132668(0x12d),_0x1c0add=>{const _0x3ca823=_0x132668;for(let _0x46d82d of _0x1c0add){let _0x5d4af4=_0x4163a7[_0x3ca823(0x12c)](_0x46d82d['id']);if(store&&store[_0x3ca823(0x119)])store['contacts'][_0x5d4af4]={'id':_0x5d4af4,'name':_0x46d82d[_0x3ca823(0x127)]};}}),_0x4163a7[_0x132668(0x133)]=(_0x3d9eec,_0x2b3875=![])=>{const _0x528040=_0x132668;id=_0x4163a7[_0x528040(0x12c)](_0x3d9eec),_0x2b3875=_0x4163a7[_0x528040(0x161)]||_0x2b3875;let _0x881e7e;if(id[_0x528040(0x147)](_0x528040(0x15d)))return new Promise(async _0x2a83ef=>{const _0x194df2=_0x528040;_0x881e7e=store[_0x194df2(0x119)][id]||{};if(!(_0x881e7e[_0x194df2(0x117)]||_0x881e7e[_0x194df2(0x13e)]))_0x881e7e=_0x4163a7[_0x194df2(0x15b)](id)||{};_0x2a83ef(_0x881e7e[_0x194df2(0x117)]||_0x881e7e[_0x194df2(0x13e)]||PhoneNumber('+'+id['replace']('@s.whatsapp.net',''))[_0x194df2(0x186)](_0x194df2(0x136)));});else _0x881e7e=id===_0x528040(0x121)?{'id':id,'name':_0x528040(0x183)}:id===_0x4163a7[_0x528040(0x12c)](_0x4163a7['user']['id'])?_0x4163a7[_0x528040(0x172)]:store[_0x528040(0x119)][id]||{};return(_0x2b3875?'':_0x881e7e[_0x528040(0x117)])||_0x881e7e[_0x528040(0x13e)]||_0x881e7e[_0x528040(0x170)]||PhoneNumber('+'+_0x3d9eec[_0x528040(0x14b)]('@s.whatsapp.net',''))['getNumber'](_0x528040(0x136));},_0x4163a7[_0x132668(0x169)]=!![],_0x4163a7[_0x132668(0x17e)]=_0x46809e=>smsg(_0x4163a7,_0x46809e,store),_0x4163a7['ev']['on'](_0x132668(0x140),async _0x32e5ec=>{const _0x2edb32=_0x132668,{connection:_0x17fc6f,lastDisconnect:_0x430700}=_0x32e5ec;_0x17fc6f==_0x2edb32(0x16f)&&(console['log'](chalk[_0x2edb32(0x129)]('\x20')),console[_0x2edb32(0x144)](chalk['yellow'](_0x2edb32(0x167)+JSON['stringify'](_0x4163a7['user'],null,0x2))),await delay(0x7cf),console['log'](chalk[_0x2edb32(0x113)]('\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+chalk[_0x2edb32(0x125)]['blue']('[\x20'+botname+'\x20]')+'\x0a\x0a')),console[_0x2edb32(0x144)](chalk[_0x2edb32(0x156)](_0x2edb32(0x145))),console[_0x2edb32(0x144)](chalk[_0x2edb32(0x129)]('\x0a'+themeemoji+'\x20YT\x20CHANNEL:\x20Comedy\x20Melody\x20CH')),console[_0x2edb32(0x144)](chalk['magenta'](themeemoji+_0x2edb32(0x155))),console[_0x2edb32(0x144)](chalk[_0x2edb32(0x129)](themeemoji+_0x2edb32(0x16d))),console['log'](chalk[_0x2edb32(0x129)](themeemoji+'\x20WA\x20NUMBER:\x20'+owner)),console[_0x2edb32(0x144)](chalk['magenta'](themeemoji+_0x2edb32(0x164)+botname+'\x0a'))),_0x17fc6f===_0x2edb32(0x10f)&&_0x430700&&_0x430700['error']&&_0x430700['error'][_0x2edb32(0x11d)][_0x2edb32(0x15c)]!=0x191&&startXeonBotInc();}),_0x4163a7['ev']['on'](_0x132668(0x10c),_0x22d333),_0x4163a7['ev']['on'](_0x132668(0x115),()=>{}),_0x4163a7[_0x132668(0x106)]=(_0x4282bd,_0x1586eb,_0xe4378='',_0x48a75a)=>_0x4163a7['sendMessage'](_0x4282bd,{'text':_0x1586eb,..._0x48a75a},{'quoted':_0xe4378,..._0x48a75a}),_0x4163a7['sendTextWithMentions']=async(_0x2ec0ea,_0x51b54f,_0x4d5a15,_0x60ea72={})=>_0x4163a7[_0x132668(0x146)](_0x2ec0ea,{'text':_0x51b54f,'mentions':[..._0x51b54f[_0x132668(0x126)](/@(\d{0,16})/g)][_0x132668(0x10d)](_0x2aba03=>_0x2aba03[0x1]+_0x132668(0x17a)),..._0x60ea72},{'quoted':_0x4d5a15}),_0x4163a7['sendImageAsSticker']=async(_0x42d994,_0x25462a,_0x201bff,_0x21c70c={})=>{const _0xa4af5a=_0x132668;let _0x1922a2=Buffer['isBuffer'](_0x25462a)?_0x25462a:/^data:.*?\/.*?;base64,/i[_0xa4af5a(0x189)](_0x25462a)?Buffer['from'](_0x25462a[_0xa4af5a(0x165)]`,`[0x1],_0xa4af5a(0x17c)):/^https?:\/\//[_0xa4af5a(0x189)](_0x25462a)?await await getBuffer(_0x25462a):fs[_0xa4af5a(0x181)](_0x25462a)?fs[_0xa4af5a(0x17b)](_0x25462a):Buffer[_0xa4af5a(0x12b)](0x0),_0x155d5f;return _0x21c70c&&(_0x21c70c[_0xa4af5a(0x15e)]||_0x21c70c['author'])?_0x155d5f=await writeExifImg(_0x1922a2,_0x21c70c):_0x155d5f=await imageToWebp(_0x1922a2),await _0x4163a7[_0xa4af5a(0x146)](_0x42d994,{'sticker':{'url':_0x155d5f},..._0x21c70c},{'quoted':_0x201bff}),_0x155d5f;},_0x4163a7[_0x132668(0x141)]=async(_0x181ba6,_0x18a0c4,_0x8c35a0,_0x3b13be={})=>{const _0x32c4bd=_0x132668;let _0x3a0282=Buffer[_0x32c4bd(0x148)](_0x18a0c4)?_0x18a0c4:/^data:.*?\/.*?;base64,/i[_0x32c4bd(0x189)](_0x18a0c4)?Buffer['from'](_0x18a0c4[_0x32c4bd(0x165)]`,`[0x1],_0x32c4bd(0x17c)):/^https?:\/\//[_0x32c4bd(0x189)](_0x18a0c4)?await await getBuffer(_0x18a0c4):fs[_0x32c4bd(0x181)](_0x18a0c4)?fs['readFileSync'](_0x18a0c4):Buffer[_0x32c4bd(0x12b)](0x0),_0x5d53e6;return _0x3b13be&&(_0x3b13be[_0x32c4bd(0x15e)]||_0x3b13be[_0x32c4bd(0x176)])?_0x5d53e6=await writeExifVid(_0x3a0282,_0x3b13be):_0x5d53e6=await videoToWebp(_0x3a0282),await _0x4163a7[_0x32c4bd(0x146)](_0x181ba6,{'sticker':{'url':_0x5d53e6},..._0x3b13be},{'quoted':_0x8c35a0}),_0x5d53e6;},_0x4163a7[_0x132668(0x150)]=async(_0x338f84,_0x456324,_0x41430d=!![])=>{const _0x5335bb=_0x132668;let _0x41a512=_0x338f84[_0x5335bb(0x15f)]?_0x338f84[_0x5335bb(0x15f)]:_0x338f84,_0x42638d=(_0x338f84[_0x5335bb(0x15f)]||_0x338f84)[_0x5335bb(0x13f)]||'',_0x313fbe=_0x338f84['mtype']?_0x338f84['mtype'][_0x5335bb(0x14b)](/Message/gi,''):_0x42638d['split']('/')[0x0];const _0x148824=await downloadContentFromMessage(_0x41a512,_0x313fbe);let _0x3e5bbf=Buffer[_0x5335bb(0x17d)]([]);for await(const _0x2fa3c1 of _0x148824){_0x3e5bbf=Buffer[_0x5335bb(0x179)]([_0x3e5bbf,_0x2fa3c1]);}let _0x2d2f50=await FileType[_0x5335bb(0x123)](_0x3e5bbf);return trueFileName=_0x41430d?_0x456324+'.'+_0x2d2f50[_0x5335bb(0x171)]:_0x456324,await fs[_0x5335bb(0x12e)](trueFileName,_0x3e5bbf),trueFileName;},_0x4163a7[_0x132668(0x134)]=async _0x89df89=>{const _0x447ee8=_0x132668;let _0x339bb6=(_0x89df89[_0x447ee8(0x15f)]||_0x89df89)[_0x447ee8(0x13f)]||'',_0x168e81=_0x89df89['mtype']?_0x89df89[_0x447ee8(0x15a)][_0x447ee8(0x14b)](/Message/gi,''):_0x339bb6[_0x447ee8(0x165)]('/')[0x0];const _0x5c9c99=await downloadContentFromMessage(_0x89df89,_0x168e81);let _0x1d1825=Buffer[_0x447ee8(0x17d)]([]);for await(const _0x42270e of _0x5c9c99){_0x1d1825=Buffer['concat']([_0x1d1825,_0x42270e]);}return _0x1d1825;};}return startXeonBotInc();let file=require[_0x56923a(0x173)](__filename);fs['watchFile'](file,()=>{const _0x5bcacd=_0x56923a;fs['unwatchFile'](file),console[_0x5bcacd(0x144)](chalk[_0x5bcacd(0x118)](_0x5bcacd(0x13b)+__filename)),delete require[_0x5bcacd(0x128)][file],require(file);}),process['on']('uncaughtException',function(_0x215a40){const _0x4e5050=_0x56923a;let _0x10c9c9=String(_0x215a40);if(_0x10c9c9[_0x4e5050(0x135)](_0x4e5050(0x160)))return;if(_0x10c9c9[_0x4e5050(0x135)](_0x4e5050(0x13a)))return;if(_0x10c9c9[_0x4e5050(0x135)](_0x4e5050(0x180)))return;if(_0x10c9c9['includes'](_0x4e5050(0x131)))return;if(_0x10c9c9[_0x4e5050(0x135)]('Timed\x20Out'))return;if(_0x10c9c9[_0x4e5050(0x135)](_0x4e5050(0x154)))return;console[_0x4e5050(0x144)](_0x4e5050(0x139),_0x215a40);});
