const menu = (prefix, NomeDoBot, sender) => {

return `​────────────────────

*💫 LISTA DE MENUS 💫*


👥 *${prefix}menu2*
    ➤ Moderação para grupos. 

🧩 *${prefix}menu3*  
    ➤ Crie suas figurinhas.  

🔭 *${prefix}menu4*  
    ➤ Utilize ferramentas úteis.  

🎉 *${prefix}menu5*
    ➤ Comandos de diversão. 

👑 *${prefix}menu6*
    ➤ Comandos para o dono.
    
────────────────────`;
};

exports.menu = menu;


//MENU DE GRUPOS 👥

const adms = (prefix, sender) => { 


	return `​────────────────────

*⭐ MODERAÇÃO DE GRUPOS ⭐*


*${prefix}adicionar*
  ➤ Adiciona um usuário.
  
*${prefix}banir*
  ➤ Remove um usuário. 

*${prefix}promover*
  ➤ Promove um usuário. 
  
*${prefix}rebaixar*
  ➤ Rebaixa um usuário. 
  
*${prefix}adverter*
  ➤ Adverte um usuário. 
  
*${prefix}apenas-admin*
  ➤ Apenas admins usam comandos. 
  
*${prefix}nomegp*
  ➤ Muda o nome do grupo.
  
*${prefix}modobrincadeira*
  ➤ Ativa/desativa as brincadeiras. 
  
*${prefix}fotogp*
  ➤ Muda a fogo do grupo. 
  
*${prefix}antilink*
  ➤ Ativa/desativa o anti-link. 
  
*${prefix}grupo abrir*
  ➤ Abre o grupo.

*${prefix}grupo fechar*
  ➤ Fecha o grupo. 
  
*${prefix}boasvindas*
  ➤ Ativa/desativa as boas vindas. 

*${prefix}delete*
  ➤ Apaga uma mensagem. 

*${prefix}linkgp*
  ➤ Link do grupo. 
    
────────────────────`;
};

exports.adms = adms;



const menufigu = (prefix, sender) => {

return `────────────────────

*🧩 CRIAR FIGURINHAS 🧩*


*${prefix}s*
  ➤ Cria uma figurinha.
  
*${prefix}figurinha*
  ➤ Cria uma figurinha. 

*${prefix}toimg*
  ➤ Transforma figurinha em imagem. 
  
*${prefix}togif*
  ➤ Transforma figurinha em gif. 
    
────────────────────`;

};

exports.menufigu = menufigu;


//-----

const menuutil = (prefix, sender) => {
  
  return `────────────────────

*🔭 APENAS UTILIDADES 🔭*


*${prefix}ping*
  ➤ Informações do bot.
    
────────────────────
  
  
  `;
};

exports.menuutil = menuutil;



exports.menufigu = menufigu;


//-----

const menudive = (prefix, sender) => {
  
  return `────────────────────

*🎉 APENAS DIVERSÃO 🎉*


*${prefix}ppt*
  ➤ Pedra, papel e tesoura.
  
*${prefix}cassino*
  ➤ Maquina de slots.

────────────────────
  
  
  `;
};

exports.menudive = menudive;





const menudono = (prefix, sender) => {

return `​────────────────────

*👑 COMANDOS PARA DONO 👑*


*${prefix}reiniciar*
  ➤ Reinicia o sistema do bot.
  
*${prefix}puxarcase*
  ➤ Copia um comando.
  
*${prefix}visualizarmsg*
  ➤ Ativa/desativa os ticks azuis.

*${prefix}verificado-global*
  ➤ Ativa/desativa o verificado.
  
*${prefix}sairgp*
  ➤ Sai do grupo.
  
────────────────────​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
`;

};

exports.menudono = menudono;

////----------

const menulogos = (prefix, sender) => {
  
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒✰⃟⃟き
╭┤✰ ⋟ Usuário: @${sender.split("@")[0]}
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐕𝐈𝐃𝐄𝐎✰⃟⃟き
┃│✰ ⋟ ${prefix}Videolento (marca)
┃│✰ ⋟ ${prefix}Videorapido (marca)
┃│✰ ⋟ ${prefix}Videocontrario (marca)
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐀𝐔𝐃𝐈𝐎✰⃟⃟き
┃│✰ ⋟ ${prefix}Audiolento (marca)
┃│✰ ⋟ ${prefix}Audiorapido (marca)
┃│✰ ⋟ ${prefix}Grave (marca)
┃│✰ ⋟ ${prefix}Grave2 (marca)
┃│✰ ⋟ ${prefix}Esquilo (marca)
┃│✰ ⋟ ${prefix}Estourar (marca)
┃│✰ ⋟ ${prefix}Bass (marca)
┃│✰ ⋟ ${prefix}Bass2 (marca)
┃│✰ ⋟ ${prefix}Vozmenino (marca)
┃╰══ ⪨
╰═══════════════════ ⪨
`;
};

exports.alteradores = alteradores;

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐏𝐑𝐄𝐌𝐈𝐔𝐌✰⃟⃟き
╭┤✰ ⋟ Usuário: @${sender.split("@")[0]}
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤✰ ⋟ ${prefix}Destrava
┃│✰ ⋟ ${prefix}Destrava2
┃│✰ ⋟ ${prefix}Ddd (DDD)
┃│✰ ⋟ ${prefix}GerarCPF
┃│✰ ⋟ ${prefix}PremiumList
┃│✰ ⋟ ${prefix}Tinyurl (Link)
┃│✰ ⋟ ${prefix}Cuttly (Link)
┃│✰ ⋟ ${prefix}Bitly (Link)
┃│✰ ⋟ ${prefix}Celular (Nome)
┃│✰ ⋟ ${prefix}Scep (Número)
┃│✰ ⋟ ${prefix}Cotacao (Moeda)
┃│✰ ⋟ ${prefix}Sip (Número)
┃│✰ ⋟ ${prefix}Igstalk (@usuário)
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}Nome
┃│✰ ⋟ ${prefix}Nome2
┃│✰ ⋟ ${prefix}Cpf (Número)
┃│✰ ⋟ ${prefix}Cpf2 (Número)
┃│✰ ⋟ ${prefix}Cpf3 (Número)
┃│✰ ⋟ ${prefix}Cpf4 (Número)
┃│✰ ⋟ ${prefix}Tel (Número)
┃│✰ ⋟ ${prefix}Tel2 (Número)
┃│✰ ⋟ ${prefix}Tel3 (Número)
┃│✰ ⋟ ${prefix}Parentes (Cpf)
┃│✰ ⋟ ${prefix}Beneficios (Cpf)
┃│✰ ⋟ ${prefix}Score (Cpf)
┃│✰ ⋟ ${prefix}Placa (Placa)
┃│✰ ⋟ ${prefix}Placa2 (Placa)
┃│✰ ⋟ ${prefix}Cnpj (Número)
┃│✰ ⋟ ${prefix}Site (Domínio)
┃│✰ ⋟ ${prefix}Email 
┃│✰ ⋟ ${prefix}Bin (Número)
┃│✰ ⋟ ${prefix}Rg (Número)
┃╰══ ⪨
╰═══════════════════ ⪨
`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════ ⪩
╰╮き⃟✰𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒✰⃟⃟き
╭┤✰ ⋟ Usuário: @${sender.split("@")[0]}
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐉𝐎𝐆𝐎𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}Jogodavelha (@Marcar) 
┃│✰ ⋟ ${prefix}Anagrama (1/0)
┃│✰ ⋟ ${prefix}Gartic (1/0)
┃│✰ ⋟ ${prefix}Quizanimal (1/0)
┃│✰ ⋟ ${prefix}Enigma (1/0)
┃│✰ ⋟ ${prefix}R-forca (Letra)
┃│✰ ⋟ ${prefix}Resetforca (Resetar)
┃│✰ ⋟ ${prefix}Jogodaforca (Iniciar)
┃│✰ ⋟ ${prefix}Vab (Você prefere?)
┃│✰ ⋟ ${prefix}Eununca (Eu nunca, eu já)
┃│✰ ⋟ ${prefix}Ppt (Pedra/Papel/Tesoura) 
┃│✰ ⋟ ${prefix}Cassino
┃│✰ ⋟ ${prefix}Apostar (Valor)
┃│✰ ⋟ ${prefix}Pescar
┃│✰ ⋟ ${prefix}Churrasco
┃│✰ ⋟ ${prefix}Steal (marca (@))
┃│✰ ⋟ ${prefix}1xbcbets (Valor)
┃│✰ ⋟ ${prefix}Hackear (marca (@))
┃│✰ ⋟ ${prefix}Mina (coordenada(s))
┃│✰ ⋟ ${prefix}Minado (dificuldade)
┃│✰ ⋟ ${prefix}Minareset (resetar)
┃│✰ ⋟ ${prefix}Mineshelp (info)
┃│✰ ⋟ ${prefix}Minatips (dicas)
┃│✰ ⋟ ${prefix}Akinator (iniciar jogo)
┃│✰ ⋟ ${prefix}Respaki (0/1/2/3/4)
┃│✰ ⋟ ${prefix}Finaki (sim ou não)
┃│✰ ⋟ ${prefix}Resetaki (resetar akinator)
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤✰ ⋟ ${prefix}Gay (marca (@))
┃│✰ ⋟ ${prefix}Feio (marca (@))
┃│✰ ⋟ ${prefix}Corno (marca (@))
┃│✰ ⋟ ${prefix}Vesgo (marca (@))
┃│✰ ⋟ ${prefix}Bebado (marca (@))
┃│✰ ⋟ ${prefix}Gostoso (marca (@))
┃│✰ ⋟ ${prefix}Gostosa (marca (@))
┃│✰ ⋟ ${prefix}Beijo (marca (@))
┃│✰ ⋟ ${prefix}Matar (marca (@))
┃│✰ ⋟ ${prefix}Tapa (marca (@))
┃│✰ ⋟ ${prefix}Chute (marca (@))
┃│✰ ⋟ ${prefix}Dogolpe (marca (@))   
┃│✰ ⋟ ${prefix}Nazista (marca (@))
┃│✰ ⋟ ${prefix}Chance (fale algo) 
┃│✰ ⋟ ${prefix}Surubao (Quantidade) 
┃│✰ ⋟ ${prefix}Casal (Casal do grupo)
┃│✰ ⋟ ${prefix}Quando (Perguntar)
┃│✰ ⋟ ${prefix}Rankgay (5 gays)
┃│✰ ⋟ ${prefix}Rankgado (5 gados)
┃│✰ ⋟ ${prefix}Rankcorno (5 cornos)
┃│✰ ⋟ ${prefix}Rankgostoso (5 gostosos)
┃│✰ ⋟ ${prefix}Rankgostosa (5 gostosas)
┃│✰ ⋟ ${prefix}Ranknazista (5 nazistas)
┃│✰ ⋟ ${prefix}Rankotakus (5 otakus)
┃│✰ ⋟ ${prefix}Rankpau (5 pauzudos)
┃│✰ ⋟ ${prefix}Mencionar (fale algo)
┃│✰ ⋟ ${prefix}Death (Nome)
┃╰══ ⪨
╰═══════════════════ ⪨
`;
};

exports.brincadeiras = brincadeiras;

// MENU DE EFEITOS DE IMAGEM

const efeitos = (prefix, sender) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐃𝐄-𝐄𝐅𝐄𝐈𝐓𝐎𝐒✰⃟⃟き
╭┤✰ ⋟ Usuário: @${sender.split("@")[0]}
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤✰ ⋟ ${prefix}Comunismo (marcar)-(img)
┃│✰ ⋟ ${prefix}Bolsonaro (marcar)-(img)
┃│✰ ⋟ ${prefix}Bnw (marcar)-(img)
┃│✰ ⋟ ${prefix}Beautiful (marcar)-(img)
┃│✰ ⋟ ${prefix}Blur (marcar)-(img)
┃│✰ ⋟ ${prefix}Affect (marcar)-(img)
┃│✰ ⋟ ${prefix}Del (marcar)-(img)
┃│✰ ⋟ ${prefix}Circle (marcar)-(img)
┃│✰ ⋟ ${prefix}Beautiful (marcar)-(img)
┃│✰ ⋟ ${prefix}Dither (marcar)-(img)
┃│✰ ⋟ ${prefix}Facepalm (marcar)-(img)
┃│✰ ⋟ ${prefix}Invert (marcar)-(img)
┃│✰ ⋟ ${prefix}Lgbt (marcar)-(img)
┃│✰ ⋟ ${prefix}Magik (marcar)-(img)
┃│✰ ⋟ ${prefix}Rotate (marcar)-(img)
┃│✰ ⋟ ${prefix}Rip (marcar)-(img)
┃│✰ ⋟ ${prefix}Jail (marcar)-(img)
┃│✰ ⋟ ${prefix}Trash (marcar)-(img)
┃│✰ ⋟ ${prefix}Pixelate (marcar)-(img)
┃│✰ ⋟ ${prefix}Sepia (marcar)-(img)
┃│✰ ⋟ ${prefix}Wanted (marcar)-(img) 
┃│✰ ⋟ ${prefix}Wasted (marcar)-(img) 
┃│✰ ⋟ ${prefix}Animeia (marcar)-(img)
┃│✰ ⋟ ${prefix}Zombieia (marcar)-(img)
┃╰══ ⪨
╰═══════════════════ ⪨
`;
};

exports.efeitos = efeitos;

const animes = (prefix, sender) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐃𝐄-𝐀𝐍𝐈𝐌𝐄𝐒✰⃟⃟き
╭┤✰ ⋟ Usuário: @${sender.split("@")[0]}
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐍𝐈𝐌𝐄𝐒-𝐄𝐃𝐈𝐓𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}Editanime -random
┃│✰ ⋟ ${prefix}Editanime -bleach
┃│✰ ⋟ ${prefix}Editanime -chainsaw
┃│✰ ⋟ ${prefix}Editanime -dragonball
┃│✰ ⋟ ${prefix}Editanime -kimetsu
┃│✰ ⋟ ${prefix}Editanime -jujutsu
┃│✰ ⋟ ${prefix}Editanime -naruto
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐍𝐈𝐌𝐄𝐒-𝐈𝐌𝐀𝐆𝐄𝐌✰⃟⃟き
┃│✰ ⋟ ${prefix}Animeimage -cosplay
┃│✰ ⋟ ${prefix}Animeimage -waifu
┃│✰ ⋟ ${prefix}Animeimage -loli
┃│✰ ⋟ ${prefix}Animeimage -shota
┃│✰ ⋟ ${prefix}Animeimage -shinomiya
┃│✰ ⋟ ${prefix}Animeimage -yotsuba
┃│✰ ⋟ ${prefix}Animeimage -yumeko
┃│✰ ⋟ ${prefix}Animeimage -tejina
┃│✰ ⋟ ${prefix}Animeimage -chiho
┃│✰ ⋟ ${prefix}Animeimage -kaori
┃│✰ ⋟ ${prefix}Animeimage -boruto
┃│✰ ⋟ ${prefix}Animeimage -shizuka
┃│✰ ⋟ ${prefix}Animeimage -kaga
┃│✰ ⋟ ${prefix}Animeimage -kotori
┃│✰ ⋟ ${prefix}Animeimage -mikasa
┃│✰ ⋟ ${prefix}Animeimage -akiyama
┃│✰ ⋟ ${prefix}Animeimage -gremory
┃│✰ ⋟ ${prefix}Animeimage -izuku
┃│✰ ⋟ ${prefix}Animeimage -shina
┃│✰ ⋟ ${prefix}Animeimage -shinka
┃│✰ ⋟ ${prefix}Animeimage -yuri
┃│✰ ⋟ ${prefix}Animeimage -eba
┃│✰ ⋟ ${prefix}Animeimage -erza
┃│✰ ⋟ ${prefix}Animeimage -elaina
┃│✰ ⋟ ${prefix}Animeimage -hinata
┃│✰ ⋟ ${prefix}Animeimage -naruto
┃│✰ ⋟ ${prefix}Animeimage -minato
┃│✰ ⋟ ${prefix}Animeimage -sagari
┃│✰ ⋟ ${prefix}Animeimage -nezuko
┃│✰ ⋟ ${prefix}Animeimage -rize
┃│✰ ⋟ ${prefix}Animeimage -anna
┃│✰ ⋟ ${prefix}Animeimage -deidara
┃│✰ ⋟ ${prefix}Animeimage -asuna
┃│✰ ⋟ ${prefix}Animeimage -ayuzawa
┃│✰ ⋟ ${prefix}Animeimage -emilia
┃│✰ ⋟ ${prefix}Animeimage -chitoge
┃│✰ ⋟ ${prefix}Animeimage -hestia
┃│✰ ⋟ ${prefix}Animeimage -inori
┃│✰ ⋟ ${prefix}Animeimage -itachi
┃│✰ ⋟ ${prefix}Animeimage -madara
┃│✰ ⋟ ${prefix}Animeimage -sakura
┃│✰ ⋟ ${prefix}Animeimage -sasuke
┃│✰ ⋟ ${prefix}Animeimage -tsunade
┃│✰ ⋟ ${prefix}Animeimage -onepiece
┃│✰ ⋟ ${prefix}Animeimage -mobil
┃│✰ ⋟ ${prefix}Animeimage -montor
┃│✰ ⋟ ${prefix}Animeimage -keneki
┃│✰ ⋟ ${prefix}Animeimage -megumin
┃│✰ ⋟ ${prefix}Animeimage -toukachan
┃╰══ ⪨
╰═══════════════════ ⪨
`;
};

exports.animes = animes;