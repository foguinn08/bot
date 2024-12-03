/* =================================== \\
 * Direitos Autorais © [2023] Sabrina Conteúdos
 * Todos os direitos reservados do início a Nueva Generacón - Aleatory Conteúdos, por motivo de desde sua primeira versão é usada a base do "Bot Aleatory", que nunca será ocultada, sempre está presente e sou grato por tudo ao desenvolvedor do Ale.
  * Leia o arquivo "LICENSE" para saber mais, sobre os termos de garantia e o que não pode ou pode fazer em sua construção.
// =================================== */

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger } = require('@whiskeysockets/baileys');

// ========[ MÓDULOS E FUNÇÕES ]======= \\

const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, quizanimais, garticArchives, enigmaArchive, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, botoff, colors, comand, RSM_FUNC, os, arcloud, EmojiAPI, emoji, infoClima, insert, response, addFilter, isFiltered, mines, getMinesPositions, MinesHelp, ytdl, psycatgames, MultiDownload, AssemblyAI } = require('./exports.js');

// ======[ JS-MENUS/INFORMAÇÕES ]====== \\

const { linguagem, mess, getInfo, nescessario, setting, logoslink, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, antispam, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, sabrpg, bcbet } = require('./exports.js');
//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var { forwarding, crtt, visualizarmsg, dono1, dono2, dono3, dono4, dono5, dono6 } = require("./settings/nescessario.json");
var { fundo1, fundo2, thumbnail } = require("./settings/links_img.json");
var { NomeDoBot, NickDono, prefix, API_KEY_SABRINA, TOKEN_CONSULTAS } = require("./settings/settings.json");
const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./settings/media/audios.json')

const mensagensAleatorias = require('./database/mensagens.js');
const mensagensAleatoriasD = require('./database/mensagensD.js');
const mensagensAleatoriasDV = require('./database/mensagensDV.js');
const mensagensAleatoriasG = require('./database/mensagensG.js');
const mensagensAleatoriasF = require('./database/mensagensF.js');
const mensagensAleatoriasU = require('./database/mensagensU.js');


const { Aki } = require('aki-api')
const jogo = {jogador: "", now: true}

//====================≠≠===============\\
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function reiniciarSAB() {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

// ABAIXO: INÍCIO DE CONEXÃO

async function iniciarSabrina() {

module.exports = sabrina = async(sabrina, folderUserAuth) => {
module.exports = upsert = async(upsert, sabrina) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(sabrina, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

if(fs.existsSync(`./database/grupos/activation_gp/${from}.json`)) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}



  
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(visualizarmsg) {
await sabrina.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}
global.prefix;
global.blocked;
const speed = require('performance-now');
var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};
var isCmd = body.trim().startsWith(prefix);
const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;
const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');
const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");


//======================================\\

try {var groupMetadata = isGroup ?  await sabrina.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await sabrina.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 


const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`, `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`, `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`]

//========(Mensagem/Sorteio)===========\\

const { enviar, sortear } = require('./settings/message.js'); 

const selobb = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `UnieBOT `, 'jpegThumbnail': fs.readFileSync('./foto/selo.png')} } }	

//=================> Funções de Grupo 🥋

const dirGroup = `./database/grupos/activation_gp/${from}.json`
const nescj = "./settings/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,


antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
advertir: [], prefixos: [`${setting.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}], ausentes: [],  
antipalavrao: {
active: false,
},
wellcome: [{
bemvindo1: false,
legendabv1: "👋 Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "👋 Adeus, #numerodele#"
},
{
bemvindo2: false,
legendabv: "👋 Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "👋 Adeus, #numerodele#"
}],

}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//FUNÇÕES - CONSTS 🎉


const quoted = info.quoted ? info.quoted : info
const isBot = info.key.fromMe ? true : false
const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt
dfndofc = setting.numerodono+"@s.whatsapp.net"
const DonoOficial = dfndofc.includes(sender) 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial

const isVisualizar = nescessario.visualizarmsg
const isVerificado = nescessario.verificado
const isWelcomePrivate = nescessario.welcomepv

const isConsole = nescessario.consoleoff
const isBotoff = nescessario.botoff


const TOKEN_GPT = nescessario.TOKEN_GPT
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined
const isAntifake = isGroup ? dataGp[0].antifake : undefined
const IS_DELETE = nescessario.Odelete
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const ADVT = isGroup ? dataGp[0].advertir: undefined
const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined
const isModobn =  isGroup ? dataGp[0].jogos : undefined


//=======================================\\

//==========(VERIFICADO)===============\\

if(!isVerificado) {
var sasah = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "557999398421-1625944593@g.us" } : {}) }, message: { "liveLocationMessage": { "caption": `UnieBOT` } } }
} else {
var sasah = info
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//if(info.key.fromMe) return

const reply = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return sabrina.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

const replyPeR = (texto) => {
  return new Promise((resolve) => {
setTimeout(() => {
sabrina.sendMessage(from, { text: texto }, { quoted: info }).then(() => resolve()).catch((error) => {
console.log(JSON.stringify(error, null, 2));
resolve();
});
}, 1000);
});
};

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return sabrina.sendMessage(from, options).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const sendSticker = (from, filename, info) => {
sabrina.sendMessage(from, {sticker: {url: fileName}}, {quoted: sasah})
}

const sendImage = (ytb) => {
sabrina.sendMessage(from, {image: {url: ytb}}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
sabrina.sendMessage(hehe, {text: ytb})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sabrina.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sabrina.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sabrina.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mentionSemQuoted = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sabrina.sendMessage(from, {text: teks.trim(), mentions: memberr}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
sabrina.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
sabrina.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await sabrina.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

var sendlistA = async (id, txt1, txt2, title1, btext, but, vr) => {
var sections = but
var listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
sabrina.sendMessage(id, listMessage, {quoted: vr})  
}

const EnvLista = async(IDG, TXT1, TXT2, TTL, TTB, TTB2, ENVLRW) => {
listMessage = {
text: TXT1, footer: TXT2,
title: TTL, buttonText: TTB,
sections: [{
title: TTB2, rows: ENVLRW
}]};
sabrina.sendMessage(IDG, listMessage).catch(e => {
console.log(e);
});
};

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
sabrina.sendMessage(from, {text: markingAllMember()})
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
sabrina.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
sabrina.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}


var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if(isGroup && fs.existsSync(`./database/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./database/func/afk/afk-@${nmrdnofc1}.json`));  
sabrina.sendMessage(from, {text: mess.absenceRecordOwner(NickDono, tabelin)}, {quoted: sasah})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}

mention(mess.absenceRecordAdmin(blak))
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-sab") || info.key.fromMe && budy.includes("reiniciar-sab")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

 



//========================================\\

//BAN GRUPO & BOT OFF


if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('Enviando sticker..');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
sabrina.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: sasah}).catch(e => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('Comando bloqueado.')

////FIMMMMMMMMM/////

///// SISTEMA DE DINHEIRO /////

///// FIMMMMMMMMMMMMM /////

const { color, bgcolor } = require('./armor/js/color.js')
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' ? 'Enquete' : 'pollCreationMessage' : 'Mensagem'
 if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"));  

if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));
if (!isCmd && isGroup && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));
 if (!isGroup && !isCmd && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))
if(isGroup && info.message?.reactionMessage?.text) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m REAÇÃO \x1b[1;37m]', color(`Emoji: " ${info.message.reactionMessage.text} "`, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))


function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}



var minesId = []
for(let obj of mines) minesId.push(obj.id)
const isPlayMines = (await mines.find(obj => obj.id == from)) ? true : false
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await sabrina.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
sabrina.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO 


if (isCmd) {
if (isFiltered(sender)) {
return reply(mess.floodCommands())
} else {
addFilter(sender)
}
}

//========(CONTADOR-DE-MENSAGENS)========\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
figus: figus
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
}]
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//============(EVAL-EXECUÇÕES)===========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return sabrina.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return sabrina.sendMessage(from, {text: bang}, {quoted: sasah})
}

sabrina.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\


//======================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
sabrina.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}


function reactMessage(emoji) {
sabrina.sendMessage(from, {react: {text: emoji, key: info.key}})
}


 

///INICO DOS COMANDOS ✅✅
switch(command){
 

//MENUS DE COMANDOS ✅




case 'menu': 
    const mensagemAleatoria = mensagensAleatorias[Math.floor(Math.random() * mensagensAleatorias.length)];
    
    sabrina.sendMessage(from, {
        image: { url: './foto/menu.png' },
        caption: `👋 Olá @${sender.split("@")[0]}!\nEspero que esteja bem.\n\n${mensagemAleatoria}\n\n${linguagem.menu(prefix, NomeDoBot, sender)}`,
        mentions: [sender]
    }, { quoted: selobb }); // Usando o selobb aqui
    break;


case 'menu2': 
    const mensagemAleatoriaG = mensagensAleatoriasG[Math.floor(Math.random() * mensagensAleatoriasG.length)];

    sabrina.sendMessage(from, {
        image: { url: './foto/menu.png' },
        caption: `👋 Olá @${sender.split("@")[0]}!\n\n${mensagemAleatoriaG}\n\n${linguagem.adms(prefix, sender)}`,
        mentions: [sender]
    }, { quoted: selobb });
    break;

case 'menu3': 
    const mensagemAleatoriaF = mensagensAleatoriasF[Math.floor(Math.random() * mensagensAleatoriasF.length)];

    sabrina.sendMessage(from, {
        image: { url: './foto/menu.png' },
        caption: `👋 Olá @${sender.split("@")[0]}!\n\n${mensagemAleatoriaF}\n\n${linguagem.menufigu(prefix, sender)}`,
        mentions: [sender]
    }, { quoted: selobb });
    break;
    
case 'menu4': 
    const mensagemAleatoriaU = mensagensAleatoriasU[Math.floor(Math.random() * mensagensAleatoriasU.length)];

    sabrina.sendMessage(from, {
        image: { url: './foto/menu.png' },
        caption: `👋 Olá @${sender.split("@")[0]}!\n\n${mensagemAleatoriaU}\n\n${linguagem.menuutil(prefix, sender)}`,
        mentions: [sender]
    }, { quoted: selobb });
    break;    
    
case 'menu5': 
    const mensagemAleatoriaDV = mensagensAleatoriasDV[Math.floor(Math.random() * mensagensAleatoriasDV.length)];

    sabrina.sendMessage(from, {
        image: { url: './foto/menu.png' },
        caption: `👋 Olá @${sender.split("@")[0]}!\n\n${mensagemAleatoriaDV}\n\n${linguagem.menudive(prefix, sender)}`,
        mentions: [sender]
    }, { quoted: selobb });
    break;
    
case 'menu6': 
    const mensagemAleatoriaD = mensagensAleatoriasD[Math.floor(Math.random() * mensagensAleatoriasD.length)];

    sabrina.sendMessage(from, {
        image: { url: './foto/menu.png' },
        caption: `👋 Olá @${sender.split("@")[0]}!\n\n${mensagemAleatoriaD}\n\n${linguagem.menudono(prefix, NomeDoBot, sender)}`,
        mentions: [sender]
    }, { quoted: selobb });
    break;
case 'alteradores':
sabrina.sendMessage(from, {image: {url: logoslink.logo}, caption: linguagem.alteradores(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(enviar.msg.modobn)  
sabrina.sendMessage(from, {image: {url: logoslink.logo}, caption: linguagem.brincadeiras(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'animes':
case 'menuanimes':
sabrina.sendMessage(from, {image: {url: logoslink.logo}, caption: linguagem.animes(prefix, sender), mentions: [sender]}, {quoted: sasah})
break 

//FIM DOS MENUS ❗




//PARA GRUPOS 👥
    

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)

const blat = args.join(" ")

try {
  // Alterar o nome do grupo
  await sabrina.groupUpdateSubject(from, `${blat}`)
  // Enviar mensagem de sucesso
  sabrina.sendMessage(from, { text: '✅ Sucesso, o nome do grupo foi alterado.' }, { quoted: sasah })
} catch (error) {
  console.error("Erro ao tentar alterar o nome do grupo:", error)
  return reply("⚠️ Ocorreu um erro ao tentar alterar o nome do grupo. Tente novamente.")
}
break


case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
sabrina.groupUpdateDescription(from, `${blabla}`)
sabrina.sendMessage(from, {text: '✅ Sucesso, a descrição do grupo foi alterada.'}, {quoted: sasah})
break

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
sabrina.updateProfilePicture(from, {url: medipp})
reply(`✅ Sucesso, a foto do grupo foi alterada.`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await sabrina.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'advertir':
case 'adverter':
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
if (menc_os2 == botNumber) return reply("❕ Não é possível advertir o próprio bot.");
if (menc_os2 == nmrdn) return reply("❗ Não é permitido advertir o proprietário do bot.");
if (groupAdmins.includes(menc_os2)) return reply("❕ Não é possível advertir um administrador do grupo.");
if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("❕ O usuário não está mais no grupo e não pode ser advertido.");

// Adiciona advertência e atualiza os dados
ADVT.push(menc_os2); 
setGp(dataGp);

// Conta as advertências do usuário
const advertCount = ADVT.filter(x => x === menc_os2).length;

// Verifica quantidade de advertências
if (advertCount < 3) {
    const warningMsg = mess.warningAdvertencia(menc_os2, advertCount);
    mentions(warningMsg, [menc_os2]); // Envia mensagem de advertência
} else {
    const banMsg = mess.finishAdvertencia(menc_os2);
    sabrina.sendMessage(from, { text: banMsg, mentions: [menc_os2] }); // Envia mensagem de banimento
    sabrina.groupParticipantsUpdate(from, [menc_os2], "remove"); // Remove o usuário do grupo
    ADVT = ADVT.filter(x => x !== menc_os2); // Remove as advertências do usuário
    setGp(dataGp); // Atualiza os dados
}
break;

case 'grupo': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === 'a') {
reply(`✅ O grupo foi aberto por ordem de um administrador.`)
sabrina.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
reply(`✅ O grupo foi fechado por ordem de um administrador.`)
sabrina.groupSettingUpdate(from, 'announcement')
}				 
break 



case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `🎉 Mencionando todos os membros comuns... ${!q ? "" : `\n${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❗ No grupo não existe nenhum membro comum, apenas administradores.`)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'marcar2':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("❕ Não é possível utilizar comandos dentro deste comando.")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `°• https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
sabrina.sendMessage(from, {text: teks}, {quoted: sasah})
} catch {
reply('❌ Ocorreu um erro, tente novamente.')
}
break

//FIM DOS COMANDOS DE GRUPO 👥


case 'verificado-global': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break



case 'console':   
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isConsole) {
nescessario.consoleoff = true
setNes(nescessario)
reply(`❗ Atenção! Agora não verá mais os comandos nem mensagem dadas no console.`)
} else if(isConsole) {
nescessario.consoleoff = false
setNes(nescessario)
reply(`- O comando de tirar o console foi desativado com sucesso. Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser ativar - Só digitar o comando novamente`) 
}
break





case 'configurar-bot':
sabrina.sendMessage(from, {text: getInfo.configbot(prefix)}, {quoted: sasah})
break



case 'infobv':
case 'infowelcome':
case 'infobemvindo':
sabrina.sendMessage(from, {text: getInfo.bemvindo(prefix)}, {quoted: sasah})
break






case 'quando':  
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break



case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
sabrina.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
sabrina.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
sabrina.groupParticipantsUpdate(from, [sender], "demote")
break



//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await sabrina.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
sabrina.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
sabrina.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break



case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do bot foi alterado com sucesso para: ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nick do dono foi configurado para: ${q}`)
break

case 'numero-dono':
  if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt);
  if (q.match(/[a-z]/i)) return reply("É apenas números..");
  
  reply(`O número dono foi configurado com sucesso para: ${q}`);
  
  setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
  
  let numerodono = setting.numerodono; // Alterado para 'let'
  let numerodn = setting.numerodono;   // Alterado para 'let'
  let numerodono_ofc = setting.numerodono; // Alterado para 'let'
  
  fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2));
  break;
case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
setting.prefix = q
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`- Calma ae amigo(a), já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.logo.splice([])
fs.writeFileSync('./settings/logos.json', JSON.stringify(logoslink, null, 2))
setTimeout(() => {
logoslink.logo.push(res)
fs.writeFileSync('./settings/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
}, 1000)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
}
break



case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
sabrina.groupUpdateSubject(from, `${body.slice(9)}`)
sabrina.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: sasah})
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
sabrina.sendMessage(tx1, {text: tx2})
break


case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break


case 'deletar': 
case 'delete': 
case 'del':  
case 'd':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!menc_prt) return reply("❕ Mencione a mensagem que deseja apagar.")
sabrina.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
setNes(nescessario)
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
setNes(nescessario)
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break



case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
sabrina.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break


case 'infocmd': {
const comandoEscolhido = args[0];
const caminhoArquivo = `./database/comandos/${comandoEscolhido}.txt`;

if (fs.existsSync(caminhoArquivo)) {
const infoComando = fs.readFileSync(caminhoArquivo, 'utf-8');
const texto = `${infoComando}`;
await sabrina.sendMessage(from, { text: texto, mentions: [sender] });
} else {
const texto = `❎ Desculpe, não encontrei informações sobre o comando *${comandoEscolhido}*`;
await sabrina.sendMessage(from, { text: texto, mentions: [sender] });
}
}
break;



case 'ping': {
  // React rapidamente sem bloqueio
  sabrina.sendMessage(from, { react: { text: ``, key: info.key } })
  
  r = (Date.now() / 1000) - info.messageTimestamp
  uptime = process.uptime()
  const uptimeHoras = Math.floor(uptime / 3600)
  const uptimeMinutos = Math.floor((uptime % 3600) / 60)
  const uptimeSegundos = (uptime % 60).toFixed(0)
  const totalMemoria = (os.totalmem() / (1024 ** 3)).toFixed(2)
  const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2)

  const texto = `*INFORMAÇÕES DO SISTEMA 💻*

⚡ *Velocidade:* 
    ➤ ${r.toFixed(3)}s

⏳ *Tempo de atividade:*
    ➤ ${uptimeHoras}h ${uptimeMinutos}m ${uptimeSegundos}s

💾 *RAM total:* 
    ➤ ${totalMemoria}GB

💾 *RAM em uso:*
    ➤ ${memoriaLivre}GB

❕ *Versão do NPM:*
    ➤ ${process.version}`

  const path = './foto/ping.png'

  // Enviar a imagem e texto sem bloquear o fluxo
  Promise.all([
    sabrina.sendMessage(from, { 
      image: { url: path }, 
      caption: `${texto}`, 
      mentions: [sender] 
    })
  ])
  break
}
case 'avalie':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if(args.length >= 400) return sabrina.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: sasah})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
sabrina.sendMessage(nmrdn, {text: tdptls}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return sabrina.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: sasah})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
sabrina.sendMessage(nmrdn, {text: teks1}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer Isso.."`)
if(args.length >= 800) return sabrina.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: sasah})
sug = `[ Sugestões de Novos Comandos ]\n@${sender.split("@s.whatsapp.net")[0]}\n${sugestao}`
sabrina.sendMessage(nmrdn, {text: sug, mentions: sender}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break






case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('O recurso de antilink de grupo já está ativado.')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink de grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('O recurso de antilink de grupo já está desativado.')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink de grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'visualizarmsg':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'so_adm':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break




case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de bem vindo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de bemvindo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply(enviar.msg.donosmt)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('O recurso foi ativado.')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('O recurso foi desativado.')
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break



case 'legendabv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'legendabv2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break








case 'modobrincadeira':
case 'modobrincadeiras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isModobn) return reply('O modo brincadeira já está ativo.')
dataGp[0].jogos = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('O modo brincadeira já está desativado.')
dataGp[0].jogos = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break







case 'boton':
case 'botoff':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break






case 'reiniciar':
if(!SoDono) return reply(enviar.msg.donosmt)
setTimeout(async () => {
reply("⏳ Reiniciando o sistema, aguarde...")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break



//==========(Sticker-Stickers)===========\\





case 'figurinha':
case 'sticker':
case 's':
    try {
        var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;
        var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;

        const pack = `UnieBOT`;
        const author2 = `${pushname}`;

        if (boij2) {
            // Criar sticker a partir de imagem
            const owgi = await getFileBuffer(boij2, 'image');
            const encmediaa = await sendImageAsSticker2(sabrina, from, owgi, info, { packname: pack, author: author2 });
            await DLT_FL(encmediaa);
        } else if (boij && boij.seconds < 11) {
            // Criar sticker a partir de vídeo (máximo de 8 segundos)
            const owgi = await getFileBuffer(boij, 'video');
            const encmedia = await sendVideoAsSticker2(sabrina, from, owgi, info, { packname: pack, author: author2 });
            await DLT_FL(encmedia);
        } else {
            return reply(`❕ Mencione uma imagem, um vídeo (de até 8 segundos) ou uma visualização única para fazer figurinha.`);
        }
    } catch (error) {
        console.error("Erro ao criar figurinha:", error);
        return reply(`❕ Ocorreu um erro ao tentar criar a figurinha. Tente novamente.`);
    }
    break;

case 'toimg':
if(!isQuotedSticker) return reply('❕ É nescessário que você memcione uma figurinha.')
try {
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
sabrina.sendMessage(from, {image: buff}, {quoted: sasah}).catch(e => {
console.log(e);
reply('❗ Ocorreu um erro ao converter figurinha para imagem, tente novamente.')
})
} catch {
reply(mess.error())
}
break

//=====================================\\



//========(SORTEIO-VOTAR-CASES)=========\\



case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(enviar.msg.donosmt)
reply('⏳ Aguarde um momento, irei enviar o comando...')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
console.log("❗ Comando não encontrado!")
reply('❗ Comando não encontrado!')
}
break





case 'add':
case 'adicionar':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('❕ Mencione a mensagem ou digite o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`❗ Número inválido.`)
let [result] = await sabrina.onWhatsApp(id)
if(!result) return reply(`❗ Este número não está registrado no WhatsApp.`)
let response = await sabrina.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
sabrina.sendMessage(from, {text: `❕ Este número já está no grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
sabrina.sendMessage(from, {text: `❕ Não foi possível adicionar o usuário @${result.jid.split("@")[0]}, as configurações de privacidade dele não permitem.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
sabrina.sendMessage(from, {text: `❕ Não foi possível adicionar o usuário @${result.jid.split("@")[0]}, pois ele deixou recentemente o grupo`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
sabrina.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
sabrina.sendMessage(from, {text: `✅ Sucesso! o usuário foi adicionado.`, mentions: [result.jid, sender]})
} else {
reply("❌ Ocorreu um erro! Tente novamente.")
}
} catch(e) {
console.log("[ERROR]:"+ e)
}
break

case 'ban':
case 'banir':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("❕ Marque a mensagem ou o @ do usuário.")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("❕ Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('❗ Atenção! você está tentando banir o bot do grupo, isto não é possível.')
sabrina.sendMessage(from, {text: `✅ O usuário @${menc_os2.split("@")[0]} foi removido do grupo.`, mentions: [menc_os2]})
sabrina.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("❕ Marque a mensagem ou o @ do usuário.")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("❕ Este usuário foi removido do grupo ou saiu, não será possível promove-lo.")
sabrina.sendMessage(from, {text: `✅ O usuário @${menc_os2.split("@")[0]} foi promovido a administrador do gropo.`, mentions: [menc_os2]})
sabrina.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("❕ Marque a mensagem ou o @ do usuário.")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("❕ Este usuário foi removido do grupo ou saiu, não será possível rebaixá-lo")
sabrina.sendMessage(from, {text: `✅ O usuário @${menc_os2.split("@")[0]} foi rebaixado e não faz mais parte da administração.`, mentions: [menc_os2]})
sabrina.groupParticipantsUpdate(from, [menc_os2], "demote")  
break



//==========(TTPS/ATTP)============\\




case "ppt":
if(args.length < 1) return reply(`❕ Você deve digitar ${prefix}ppt pedra ,${prefix}ppt papel ou ${prefix}ppt tesoura.`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "Você ganhou! 🎉"
}
if(vit == "derrota") {
var tes = "Eu ganhei! 🤣🫵"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate. 😒"
}
reply(`Eu escolhi: ${pptb}\nVocê escolheu: ${args}\n\n${tes}`)
break





case 'cassino':
reply(`Olá ${pushname} - Aguarde 9 segundos para sair o resultado da roleta..`)
const soto = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍇 : 🍇 : 🍇', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🍊', '🍐 : 🍒 : 🍋', '🍐 : 🍐 : 🍐', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇', '🔔 : 🔔 : 🔔', '🍒 : 🍒 : 🍒', '🍌 : 🍌 : 🍌']		  
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Canta comigo é o brazzino... *Você ganhou! Parabéns amigo!*"
} else {
var Vitória = "*Você perdeu..* Que pena! Não desista, tente novamente."
}
setTimeout(async function () {
const cassino = `Depois de 9 segundos passados, aqui está o resultado da roleta, vamos ver?
*➬ Resultado da Roleta -* ${somtoy2}

${Vitória}`
msgSemQuoted(cassino)
}, 9000)
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\


//=======================================\\

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\




//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('Marque a figurinha animada!')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('Aguarde, estou convertendo a figurinha para o formato gif.')
a = await webp_mp4(buff)
sabrina.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: sasah}).catch(e => {
reply("Erro ao realizar o envio do sticker!") 
})
DLT_FL(buff)
}
} catch {
reply(mess.error())
}
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sabrina.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: info})
break

case 'recusar':
if(!SoDono) return reply(enviar.msg.donosmt)
sabrina.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`})
break

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
sabrina.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break



default:

//FIM DOS COMANDOS ✅✅

//===(CRÉDITOS : SABRINA CONTEÚDOS)==\\




//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}




if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}



hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');


//========================================\\
}
}
}
msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(API_KEY_SABRINA)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})
}
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})

iniciarSabrina().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './index.js' - Error: "+e))
})