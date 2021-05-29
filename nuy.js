/**
* Originally created by Hafizh
* Recoded by nuyfaa
**/
const {
   WAConnection,
   MessageType,
   Mimetype,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const { color, bgcolor } = require('./lib/color')
const fetch = require('node-fetch')
const { fetchJson } = require('./lib/fetcher')
const { wait, getBuffer, h2k, generateMessageID, getRandom, banner, start, info, success, close } = require('./lib/functions')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { exec } = require("child_process")
const lolis = require('lolis.life')
const loli = new lolis()
const nuy = new WAConnection()
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

nuy.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready`)
})

nuy.on('credentials-updated', () => {
   const authInfo = nuy.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && nuy.loadAuthInfo('./session.json')

nuy.connect();

fakeimagecuy = fs.readFileSync('me.jpg')
const mek2 =  {key: { fromMe: false,remoteJid: "0@s.whatsapp.net", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 99, status: 200, thumbnail: fakeimagecuy, surface: 200, message: fakereply, orderTitle: fakereply1, sellerJid: '0@s.whatsapp.net'} } }
nuy.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const fgclink = {key: { fromMe: false,remoteJid: "0@s.whatsapp.net", participant: '0@s.whatsapp.net'}, message: {groupInviteMessage: {groupJid: "6283815956151-1616169743@g.us", inviteCode: "mancanihbos", groupName: fakereply, caption: fakereply1, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const fdocs = {key : {participant : '0@s.whatsapp.net'}, message: {documentMessage: {title: fakereply, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const flokasi = {key : {participant : '0@s.whatsapp.net'}, message: {locationMessage: { name: fakereply, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const fvideo = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: fakereply, seconds: 999, caption: fakereply1, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const { text, extendedText, contact, image, video, sticker, document, audio, product } = MessageType
            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === content.includes('imageMessage')
			const isQuotedVideo = type === content.includes('videoMessage')
			const isQuotedSticker = type === content.includes('stickerMessage')
		   // AUTO STICKER
           if (mek.key.fromMe) return
		   var Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()
            var stickerWm = (media, packname, author) => {
            ran = getRandom('.webp')
            exif.create(packname, author, from.split("@")[0])
            exec(`webpmux -set exif ./temp/${from.split("@")[0]}.exif ./${media} -o ./${ran}`, (err, stderr, stdout) => {
            if (err) return nuy.sendMessage(from, String(err), text, { quoted: mek })
            nuy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
        })
    }
    if (messagesC.includes('stiker')){
    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
               var mediaEncrypt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var mediaFinalys = await nuy.downloadAndSaveMediaMessage(mediaEncrypt, 'dlstikerwm')
			   var has = 'MancaBot' // Author Name
			   var kas = 'By NuyFaa' // Pack Name
               var packageName = `${has}`
               var packageAuthor = `${kas}`
               var exifName = 'stikerwm.exif',
                   webpName = `${from.split(/@/)[0]}.webp`
               try {
                   exec(`cwebp -q 50 dlstikerwm.jpeg -o ${webpName}`, (e, stderr, stdout) => {
                       if (e) return nuy.sendMessage(from, String(stderr), text)
                           stickerWm(webpName, packageName, packageAuthor)
                   })
               } catch (e) {
                   throw e
               }
           }
         }
	       // FOR VIDEO OR GIF
           if (messagesC.includes('sgif')){
		   if ((isMedia & !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nuy.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								nuy.sendMessage(from, 'error', text)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								nuy.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
				     }
	  if (messagesC.includes('assalamualaikum')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/waalaikumsalam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Waalaikumsalam","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('tesmanca')){
	  client.updatePresence(from, Presence.composing)
	  client.sendMessage(from, 'Oke Online...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  }
	  if (messagesC.includes('@6283815956151')){
	  client.updatePresence(from, Presence.composing)
	  client.sendMessage(from, 'Ada Apa Tag Owner Manca...?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  }
	  if (messagesC.includes('@994408781140')){
	  client.updatePresence(from, Presence.composing)
	  client.sendMessage(from, 'Ada Apa Tag Manca...?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  }
      if (messagesC.includes('sholawat1')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/maulaya.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fgclink, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('manca')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/manca.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fdocs, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
	  if (messagesC.includes('gatelsa')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/gatelsa.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('magic')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/magic.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('jamet')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/jamet.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('nana')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/nana.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('bam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/bam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('malam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/malam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Malam","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('pagi')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pagi.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Pagi","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('bangkit')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/bangkit.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Pagi","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('makasih')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/mksh.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Iyah Sama Dua:v","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('tqs')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/mksh.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Iyah Sama Dua:v","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('sayang')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('beb')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('cayang')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pale')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pale.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pala')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pala.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('sensei')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/sensei.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('roti')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/sariroti.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('tante')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/tante.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('kuntul')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/kuntul.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fdocs, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('why')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/why.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/endak.webp')
      client.sendMessage(from, d, sticker, {quoted: flokasi})
      }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
