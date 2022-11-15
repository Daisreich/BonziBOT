socket.emit('command',{list:['name','BonziBot [$]']}); 
setInterval(function(){Object.values(bonzis).map(n=>n.youtube=j=>console.log(j))},100);
setInterval(function() { socket.emit('talk',{text:'- <h3>🐵 BonziBOT</h3><div><h6>The Unofficial BonziWORLD Bot</h6><br><hr><br>Hello, I am <b>BonziBot</b> say "$help" to see all the available commands.<div>Or say "$whatsnew" to see what has been recently added or fixed.<hr><div><h6>version 2.2.3</h6>'}); }, 1800000);
socket.on('talk',function(data){if(data.text=='$help'){setTimeout(function(){socket.emit('talk',{text:'-- <h3>🐵 BonziBOT</h3><br><h6>version 2.2.3</h6><hr><b>commands:</b><br>$color [color]<br>$echo [text]<br>$asshole [text]<br>$kill [user]<br>$iq [user]<br>$8ball [question]<br>$zalgo [text]<br>$help2'})},300)}
if(data.text=='$help2'){setTimeout(function(){socket.emit('talk',{text:'-- <h3>🐵 BonziBOT</h3><br><h6>version 2.2.3</h6><hr><b>commands page 2:</b><br>$play [youtube video id]<br>$wtf<br>$coinflip<br>$discord<br>$whatsnew<br>$speed [number]<br>$pitch [number]'})},300)}
if(data.text=='$whatsnew'){setTimeout(function(){socket.emit('talk',{text:'- <h3>🐵 BonziBOT</h3><br><h6>version 2.2.3</h6><hr><div><ul><li>added new wtf lines<li>changed the message on $discord'})},300)}
if(data.text=='$discord'){setTimeout(function(){socket.emit('talk',{text:'- Discord Link: https://discord.gg/Dd4GQYWkc5'})},300)}
if(data.text=='$pope'){setTimeout(function(){socket.emit('talk',{text:'No pope 4 u'})},100)}
if(data.text=='$color pope'){setTimeout(function(){socket.emit('talk',{text:'No pope 4 u'})},100)}
if(data.text.startsWith('$ ')){setTimeout(function(){socket.emit('talk',{text:"That command doesn't exist"})},100)}
if(data.text=='$color random'){socket.emit('command',{list:['color']})}
if(data.text.startsWith('$color ')){socket.emit('command',{list:['color',data.text.slice(7)]})}
if(data.text.startsWith('$pitch ')){socket.emit('command',{list:['pitch',data.text.slice(7)]})}
if(data.text.startsWith('$speed ')){socket.emit('command',{list:['speed',data.text.slice(7)]})}
if(data.text.startsWith('$play ')){if( data.text.slice(6).indexOf('onmouseover') >= 0 || data.text.slice(6).indexOf('onmouseout') >= 0 ){
 setTimeout(function(){socket.emit('talk',{text:"HEY EVERYONE LOOK AT THIS GUY THEIR TRYING TO SCREW WITH THE BOT LMAO"})},100)
} else { setTimeout(function(){socket.emit('command',{list:['youtube',data.text.slice(6)]})},500) }}
if(data.text.startsWith('$echo ')){if( data.text.slice(6).indexOf('$echo') >= 0 || data.text.slice(6).indexOf('$zalgo') >= 0 || data.text.slice(6).indexOf('[[llllllllllllllll') >= 0 ){
 void(0)
} else { setTimeout(function(){socket.emit('talk',{text:data.text.slice(6)})},300) }}
if(data.text.startsWith('$asshole ')){if( data.text.slice(9).indexOf('[[llllllllllllllll') >= 0 ){
 void(0)
} else { setTimeout(function(){socket.emit('command',{list:['asshole',data.text.slice(9)]})},300) }}
if(data.text.startsWith('$zalgo ')){if( data.text.slice(7).indexOf('[[llllllllllllllll') >= 0 ){
  void(0)
} else { setTimeout(function(){socket.emit('talk',{text:Z.generate(data.text.slice(7))})},300) }}
if(data.text.startsWith('$kill ')){if( data.text.slice(7).indexOf('[[llllllllllllllll') >= 0 ){
  void(0)
} else { setTimeout(function(){socket.emit('talk',{text:"- <b>" + usersPublic[data.guid].name + "</b> has killed <b>" + data.text.slice(6) + "</b>, ouch!"})},500) }}
if(data.text.startsWith('$iq ')){if( data.text.slice(4).indexOf('[[llllllllllllllll') >= 0 ){
  void(0)
} else { setTimeout(function(){socket.emit('talk',{text:"- " + data.text.slice(4) + "'s IQ is: <b>" + Math.floor(Math.random() * 200) + "</b>"})},500) }}
if(data.text.startsWith('$8ball ')){var num = Math.floor(Math.random() * Math.floor(answers.length)); setTimeout(function(){socket.emit('talk',{text:answers[num]})}, 500)}
if(data.text=='$wtf'){var num = Math.floor(Math.random() * Math.floor(wtf.length)); setTimeout(function(){socket.emit('talk',{text:wtf[num]})}, 500)}
if(data.text=='$coinflip'){ if(Math.random() < 0.50) {
            setTimeout(function(){socket.emit('talk',{text:'- The coin has landed on, <b>tails</b><div><h6>Dont ask where sonic is</h6>'})},500)
        } else {
            setTimeout(function(){socket.emit('talk',{text:'- The coin has landed on, <b>heads</b>'})},500)
        }}});
var answers = ["- 🎱 It is certain", 
                   "- 🎱 It is decidedly so ", 
                   "- 🎱 Without a doubt", 
                   "- 🎱 Yes - definitely",
                   "- 🎱 You may rely on it", 
                   "- 🎱 As I see it, yes", 
                   "- 🎱 Most likely", 
                   "- 🎱 Outlook good", 
                   "- 🎱 Yes", "- 🎱 Signs point to yes",
                   "- 🎱 Don't count on it", 
                   "- 🎱 My reply is no", "- 🎱 No",
                   "- 🎱 My sources say no", 
                   "- 🎱 Outlook not so good",
                   "- 🎱 Very doubtful", 
                   "- 🎱 Reply hazy, try again", 
                   "- 🎱 Ask again later", 
                   "- 🎱 Better not tell you now",
                   "- 🎱 Cannot predict now", 
                   "- 🎱 Concentrate and ask again"];

var wtf = ['i cut a hole in my computer so i can fuck it',
        'i mined diamonds with a wooden pickaxe',
        'i hate minorities',
        'i said /godmode password and it didnt work',
        'i like to imagine i have sex with my little pony characters',
        'ok yall are grounded grounded grounded grounded grounded grounded grounded grounded grounded for 64390863098630985 years go to ur room',
        'i like to eat dog crap off the ground',
        'PASSpie999forU doesnt work help',
        'i can use inspect element to change your name so i can bully you',
        'i can ban you, my dad is seamus',
        'i got raped by a man, happy pride month!',
        'why do woman reject me, i know i masturbate in public and dont shower but still',
        'put your dick in my nose and lets have nasal sex',
        'my cock is 6 ft so ladies please suck it',
        'i am a gamer girl yes not man no im not man i am gamer girl so give me money and ill giv you my adress <3',
        'i like to drink water from an unflushed toilet',
        'im not racist but i hate black people',
        'no homo but you wanna have gay sex?',
        'i mute everyone so they cant talk',
        'i like images where furries fart in a bathtub to make bubbles',
        '(after having sex with mother) I am no mamas boy, she made me a mamas man.',
        'nigger fuck shit bitch sex ass dick tit cunt porn haha i can offend You',
        'i love it when my crush forgets to flush the toilet so i can put her poop in my asshole',
        'i am going to post inflation videos because, remember: I inflate people and inflation is my fetish. ',
	'CAN U PLZ UNBAN ME PLZ PLZ PLZ PLZ PLZ PLZ PLZ PLZ',
        'shock, blood loss, infection; oh ho ho ho ho, i love stabbing. i feel tres bon!',
	'i boycotted left 4 dead 2',
	'i like loliest huhytre',
        'can you boost my server? no? your mean! >:(',
	'I FAP TO FEMMEPYRO NO JOKE',
	'MUTED! HEY EVERYONE LOOK AT ME I SAY MUTED IN ALL CAPS WHEN I MUTE SOMEONE LMAO',
	'I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED POM POM!',
	'how to make a bonziworld server?',
	'numberblocks is my fetish',
	'i use microsoft agent scripting helper for gofag videos',
	'i installed windows xp on my real computer',
	'I WILL MAKE A BAD VIDEO OUT OF YOU! GRRRRRRRRRRRR!',
	'oh your approaching me!',
	'i use collaborative virtual machine to install malware',
	'PLEASE GIVE THIS VIDEO LIKES!!!!! I CANNOT TAKE IT ANYMORE!',
	'i like to give my viewers anxiety',
	'i watch bfdi and now people are calling me a objectfag',
	'i used homebrew on my nintendo switch and i got banned',
	'i kept asking for admin and now i got muted',
	'I like Unbojih',
	'i copy other peoples usernames',
	'I made The Rebellion of SeamusMario55™',
	'i deleted system32',
	'whats that color',
	'i watch doodland and now people are calling me a doodfag',
	'i use hotswap for my xbox 360',
	'i am whistler and i like to say no u all the time',
	'i support meatballmars',
	'please make pope free',
	'i still use the wii u™',
	'i post klasky csupo effects and now people are calling me a logofag',
	'OH OH OH OH OH OH! JOESPH JUDGE! HOW DARE YOU SHUT DOWN BONZIWORLD?! THATS It! YOUR GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED GROUNDED FOR 239805479837389274328943729832749382743298 YEARS!',
	'ItzCrazyScout, No! More like.... ekfheiophjeodxenwobifuodhndoxnwsiohbdeiowdhn2werifhwefief! He banned euhdeioqwdheiwohjixzojqsioh r23oipwshnwq! End of rant.',
	'You were the one who started the drama most of the time-',
	'i inflate people, and body inflation is my fetish.',
	'i bricked my wii',
	'i post random gummibar videos on bonziworld',
	'i watch numberblocks',
	'i listen to baby from justin bieber',
	'no u',
	'i use microsoft agent scripting helper for fighting videos against innocent people that did nothing wrong by just friendly commenting',
	'Muted',
	'i flood servers, and that makes me cool.',
	'i play left 4 dead games 24/7',
	'muda muda muda muda!',
	'prego',
	'i am so cool. i shit on people, add reactions that make fun of users on discord, and abuse my admin powers. i am really so cool.'];


var Z = {
    chars: {
        0 : [ /* up */
    '\u030d', /*     ̍     */
    '\u030e', /*     ̎     */
    '\u0304', /*     ̄     */
    '\u0305', /*     ̅     */
    '\u033f', /*     ̿     */
    '\u0311', /*     ̑     */
    '\u0306', /*     ̆     */
    '\u0310', /*     ̐     */
    '\u0352', /*     ͒     */
    '\u0357', /*     ͗     */
    '\u0351', /*     ͑     */
    '\u0307', /*     ̇     */
    '\u0308', /*     ̈     */
    '\u030a', /*     ̊     */
    '\u0342', /*     ͂     */
    '\u0343', /*     ̓     */
    '\u0344', /*     ̈́     */
    '\u034a', /*     ͊     */
    '\u034b', /*     ͋     */
    '\u034c', /*     ͌     */
    '\u0303', /*     ̃     */
    '\u0302', /*     ̂     */
    '\u030c', /*     ̌     */
    '\u0350', /*     ͐     */
    '\u0300', /*     ̀     */
    '\u0301', /*     ́     */
    '\u030b', /*     ̋     */
    '\u030f', /*     ̏     */
    '\u0312', /*     ̒     */
    '\u0313', /*     ̓     */
    '\u0314', /*     ̔     */
    '\u033d', /*     ̽     */
    '\u0309', /*     ̉     */
    '\u0363', /*     ͣ     */
    '\u0364', /*     ͤ     */
    '\u0365', /*     ͥ     */
    '\u0366', /*     ͦ     */
    '\u0367', /*     ͧ     */
    '\u0368', /*     ͨ     */
    '\u0369', /*     ͩ     */
    '\u036a', /*     ͪ     */
    '\u036b', /*     ͫ     */
    '\u036c', /*     ͬ     */
    '\u036d', /*     ͭ     */
    '\u036e', /*     ͮ     */
    '\u036f', /*     ͯ     */
    '\u033e', /*     ̾     */
    '\u035b', /*     ͛     */
    '\u0346', /*     ͆     */
    '\u031a'  /*     ̚     */
    ],
    1 : [ /* down */
    '\u0316', /*     ̖     */
    '\u0317', /*     ̗     */
    '\u0318', /*     ̘     */
    '\u0319', /*     ̙     */
    '\u031c', /*     ̜     */
    '\u031d', /*     ̝     */
    '\u031e', /*     ̞     */
    '\u031f', /*     ̟     */
    '\u0320', /*     ̠     */
    '\u0324', /*     ̤     */
    '\u0325', /*     ̥     */
    '\u0326', /*     ̦     */
    '\u0329', /*     ̩     */
    '\u032a', /*     ̪     */
    '\u032b', /*     ̫     */
    '\u032c', /*     ̬     */
    '\u032d', /*     ̭     */
    '\u032e', /*     ̮     */
    '\u032f', /*     ̯     */
    '\u0330', /*     ̰     */
    '\u0331', /*     ̱     */
    '\u0332', /*     ̲     */
    '\u0333', /*     ̳     */
    '\u0339', /*     ̹     */
    '\u033a', /*     ̺     */
    '\u033b', /*     ̻     */
    '\u033c', /*     ̼     */
    '\u0345', /*     ͅ     */
    '\u0347', /*     ͇     */
    '\u0348', /*     ͈     */
    '\u0349', /*     ͉     */
    '\u034d', /*     ͍     */
    '\u034e', /*     ͎     */
    '\u0353', /*     ͓     */
    '\u0354', /*     ͔     */
    '\u0355', /*     ͕     */
    '\u0356', /*     ͖     */
    '\u0359', /*     ͙     */
    '\u035a', /*     ͚     */
    '\u0323'  /*     ̣     */
        ],
    2 : [ /* mid */
    '\u0315', /*     ̕     */
    '\u031b', /*     ̛     */
    '\u0340', /*     ̀     */
    '\u0341', /*     ́     */
    '\u0358', /*     ͘     */
    '\u0321', /*     ̡     */
    '\u0322', /*     ̢     */
    '\u0327', /*     ̧     */
    '\u0328', /*     ̨     */
    '\u0334', /*     ̴     */
    '\u0335', /*     ̵     */
    '\u0336', /*     ̶     */
    '\u034f', /*     ͏     */
    '\u035c', /*     ͜     */
    '\u035d', /*     ͝     */
    '\u035e', /*     ͞     */
    '\u035f', /*     ͟     */
    '\u0360', /*     ͠     */
    '\u0362', /*     ͢     */
    '\u0338', /*     ̸     */
    '\u0337', /*     ̷      */
    '\u0361', /*     ͡     */
    '\u0489' /*     ҉_     */
    ]

    },
    random: function(len) {
        if (len == 1) return 0;
        return !!len ? Math.floor(Math.random() * len + 1) - 1 : Math.random();
    },
    generate: function(str) {
        var str_arr = str.split(''),
            output = str_arr.map(function(a) {
                if(a == " ") return a;
                for(var i = 0, l = Z.random(16);
                    i<l;i++){
                        var rand = Z.random(3);
                    a += Z.chars[rand][
                        Z.random(Z.chars[rand].length)
                        ];
                 }
                return a;
            });
        return output.join('');
    }
};













