let TITLE = "Roman Around";
let size = {
	width: window.innerWidth || document.body.clientWidth,
	height: window.innerHeight || document.body.clientHeight
}
let scene = "intro";
let clicked = false;
let t = 0;
/*intro variables*/
let greetX = size.width + 200, greets = ["Hello", "Salve", "Welcome to " + TITLE, "By Dhruv, Andrew, Jing, and Daniel"], greetNum = 0, greetSize = [50, 50, 50, 30];
/*home variables*/
let sideX = size.width + 200;
let buttons = [];
let bX = [size.width+200, size.width+200, size.width+200];
let input;
/*search variables*/
let find = "", results = [];
let searchX = size.width+200;
let sX = [size.width+200, size.width+200];
let sentenceButton;
let termKey;
let sentenceX = size.width+200;
/*sentence search variables*/
let sentences = [], translations = [];
let locs = [];
/*about variables*/
let profiles = [];
let profX = size.width+200;
let profileX = [size.width+200, size.width+200, size.width+200, size.width+200, size.width+200];
let hover = [0, 0, 0, 0];
/*help variables*/
let helpX = size.width+200;
let hX = [size.width+200];
let words = [];
let back;
function setup() {
	createCanvas(size.width, size.height);
	buttons = [new Button("search", 75, "Go", 0.3, 255),
						 new Button("help", 75, "Help", 0.3, 255),
						 new Button("about", 75, "About", 0.3, 255),
					 	 new Button("home", 75, "Back", 0.3, 255)];
	sentenceButton = new Button("sentence", 75, "Examples", 0.25, 255);
	input = createInput();
	input.size(200, 20);
	input.attribute("placeholder", "Input Latin term");
	profiles = [
		{
			name: "Jing Liu",
			pfp: loadImage("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/38999899_294649831268859_4209346019147644928_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=f98e94c1d31c453f742bea11a9a77175&oe=5D4BE070"),
			bio: "I am a current sophomore at Thomas Jefferson High School for Science and Technology taking AP Computer Science Data Structures A+. I enjoy subjects such as computer science, biology, and Latin. During my free time, I like to play violin, sing, and look at cute animals on Facebook."
		},
		{
			name: "Dhruv Batra",
			pfp: loadImage("https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/56476787_2311466825845000_5993519551810109440_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=81d5404488dd8e1e17e9e881271e1b25&oe=5D08A13E"),
			bio: "I am a current junior at Fairfax High School. I am interested in robotics and aerospace engineering but also like 3D modeling and coding. My hobbies include Tae Kwon Do, video games, and reading."
		},
		{
			name: "Daniel Zeng",
			pfp: loadImage("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/42268507_266249110681323_7717756747137417216_n.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=4e7305ac21082e5fe5743d53b28f07e1&oe=5D378D36"),
			bio: "I am currently sophomore at Thomas Jefferson High School for Science and Technology "
		},
		{
			name: "Andrew Hadikusumo",
			pfp: loadImage("https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/p2048x2048/56372210_574271196413421_5806223363835691008_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=8b5f5d605750c34b620bc181e07fa26a&oe=5D09EB80"),
			bio: "I am a current sophomore at Thomas Jefferson High School for Science and Technology. I will be taking AP Computer Science Data Structures A+ next year and enjoy classes such as Latin, chemistry, and computer science. Outside of school, I do Tae Kwon Do, play the violin, and play video games."
		}
	];
	step = 8;
	noStroke();
	for (let x = 0; x < size.width; x += step) {
		for (let y = 0; y < size.height; y += step) {
			fill(lerpColor(color(223, 136, 247), color(247, 228, 54), abs(x / size.width - y / size.height)));
			rect(x, y, step, step);
		}
	}
	back = get(0, 0, size.width, size.height);
	words = [new Verb("to accuse", "accus", "accusav", "accusat", 1),
					 new Verb("to help", "adiuv", "adiuv", "adiut", 1),
					 new Verb("to build", "aedific", "aedificav", "aedificat", 1),
					 new Verb("to walk", "ambul", "ambulav", "ambulat", 1),
					 new Verb("to love", "am", "amav", "amat", 1),
					 new Verb("to name", "appell", "appellav", "appellat", 1),
					 new Verb("to approach", "appropinqu", "appropinquav", "appropinquat", 1),
					 new Verb("to sing", "cant", "cantav", "cantat", 1),
					 new Verb("to hide", "cel", "celav", "celat", 1),
					 new Verb("to dine", "cen", "cenav", "cenat", 1),
					 new Verb("to delay", "cess", "cessav", "cessat", 1),
					 new Verb("to shout", "clam", "clamav", "clamat", 1),
					 new Verb("to think", "cogit", "cogitav", "cogitat", 1),
					 new Verb("to assemble", "convoc", "convocav", "convocat", 1),
					 new Verb("to take care of", "cur", "curav", "curat", 1),
					 new Verb("to please", "delect", "delectav", "delectat", 1),
					 new Verb("to show", "demonstr", "demonstrav", "demonstrat", 1),
					 new Verb("to desire", "desider", "desiderav", "desiderat", 1),
					 new Verb("to consume", "devor", "devorav", "devorat", 1),
					 new Verb("to give", "d", "ded", "dat", 1),
					 new Verb("to wander", "err", "errav", "errat", 1),
					 new Verb("to rouse", "excit", "excitav", "excitat", 1),
					 new Verb("to shoud", "exclam", "exclamav", "exclamat", 1),
					 new Verb("to unfold", "explic", "explicav", "explicat", 1),
					 new Verb("to await", "expect", "expectav", "expectat", 1),
					 new Verb("to hurry", "festin", "festinav", "festinat", 1),
					 new Verb("to live", "habit", "habitav", "habitat", 1),
					 new Verb("to urge", "incit", "incitav", "incitat", 1),
					 new Verb("to hinder", "interpell", "interpellav", "interpellat", 1),
					 new Verb("to enter", "intr", "intrav", "intrat", 1),
					 new Verb("to work", "labor", "laborav", "laborat", 1),
					 new Verb("to cry", "lacrim", "lacrimav", "lacrimat", 1),
					 new Verb("to bark", "latr", "latrav", "latrat", 1),
					 new Verb("to praise", "laud", "laudav", "laudat", 1),
					 new Verb("to wash", "lav", "lav", "laut", 1),
					 new Verb("to show", "monstr", "monstrav", "monstrat", 1),
					 new Verb("to mutter", "muss", "mussav", "mussat", 1),
					 new Verb("to narrate", "narr", "narrav", "narrat", 1),
					 new Verb("to sail", "navig", "navigav", "navigat", 1),
					 new Verb("to kill", "nec", "necav", "necat", 1),
					 new Verb("to observe", "observ", "observav", "observat", 1),
					 new Verb("to prepare", "par", "parav", "parat", 1),
					 new Verb("to carry", "port", "portav", "portat", 1),
					 new Verb("to fight", "pugn", "pugnav", "pugnat", 1),
					 new Verb("to cleanse", "purg", "purgav", "purgat", 1),
					 new Verb("to restore", "recuper", "recuperav", "recuperat", 1),
					 new Verb("to recall", "revoc", "revocav", "revocat", 1),
					 new Verb("to ask", "rog", "rogav", "rogat", 1),
					 new Verb("to dance", "salt", "saltav", "saltat", 1),
					 new Verb("to greet", "salut", "salutav", "salutat", 1),
					 new Verb("to protect", "serv", "servav", "servat", 1),
					 new Verb("to imitate", "simul", "simulav", "simulat", 1),
					 new Verb("to watch", "spect", "spectav", "spectat", 1),
					 new Verb("to stand", "st", "stet", "stat", 1),
					 new Verb("to test", "tempt", "temptav", "temptat", 1),
					 new Verb("to beat", "verber", "verberav", "verberat", 1),
					 new Verb("to forbid", "vet", "vetu", "vetit", 1),
					 new Verb("to annoy", "vex", "vexav", "vexat", 1),
					 new Verb("to be awake", "vigil", "vigilav", "vigilat", 1),
					 new Verb("to visit", "visit", "visitav", "visitat", 1),
					 new Verb("to avoid", "vit", "vitav", "vitat", 1),
					 new Verb("to move up", "admov", "admov", "admot", 2),
					 new Verb("to appear", "appar", "apparu", "", 2),
					 new Verb("to increase", "aug", "aux", "auct", 2),
					 new Verb("to beware", "cav", "cav", "caut", 2),
					 new Verb("to think", "cens", "censu", "cens", 2),
					 new Verb("to owe", "deb", "debu", "debit", 2),
					 new Verb("to teach", "doc", "docu", "doct", 2),
					 new Verb("to suffer", "dol", "dolu", "", 2),
					 new Verb("to favor", "fav", "fav", "", 2),
					 new Verb("to have", "hab", "habu", "habit", 2),
					 new Verb("to stick", "haer", "haes", "", 2),
					 new Verb("to lie down", "iac", "iacu", "", 2),
					 new Verb("to order", "iub", "iuss", "iuss", 2),
					 new Verb("to shine", "luc", "lux", "", 2),
					 new Verb("to stay", "man", "mans", "mans", 2),
					 new Verb("to move", "mov", "mov", "mot", 2),
					 new Verb("to harm", "noc", "nocu", "", 2),
					 new Verb("to besiege", "obsid", "obsed", "obsess", 2),
					 new Verb("to move back", "remov", "remov", "remot", 2),
					 new Verb("to respond", "respond", "respond", "respons", 2),
					 new Verb("to laugh", "rid", "ris", "ris", 2),
					 new Verb("to sit", "sed", "sed", "sess", 2),
					 new Verb("to be astounded", "stup", "stupu", "", 2),
					 new Verb("to be quiet", "tac", "tacu", "tacit", 2),
					 new Verb("to hold", "ten", "tenu", "tent", 2),
					 new Verb("to frighten", "terr", "terru", "territ", 2),
					 new Verb("to fear", "tim", "timu", "", 2),
					 new Verb("to see", "vid", "vid", "vis", 2),
					 new Verb("to fall upon", "accid", "accid", "", 3),
					 new Verb("to recognize", "agnosc", "agnov", "agnit", 3),
					 new Verb("to do", "ag", "eg", "act", 3),
					 new Verb("to feed", "al", "alu", "alit", 3),
					 new Verb("to ascend", "ascend", "ascend", "ascens", 3),
					 new Verb("to fall", "cad", "cecid", "cas", 3),
					 new Verb("to close", "claud", "claus", "claus", 3),
					 new Verb("to inhabit, cultivate", "col", "colu", "cult", 3),
					 new Verb("to fall down", "concid", "concid", "", 3),
					 new Verb("to put", "condo", "condid", "condit", 3),
					 new Verb("to assemble", "conduc", "condux", "conduct", 3),
					 new Verb("to sit down", "consid", "consed", "consess", 3),
					 new Verb("to advise", "consul", "consulu", "consult", 3),
					 new Verb("to decide", "constitu", "constitu", "constitut", 3),
					 new Verb("to cook", "coqu", "cox", "coct", 3),
					 new Verb("to run", "curr", "cucurr", "curs", 3),
					 new Verb("to defend", "defend", "defens", "defens", 3),
					 new Verb("to descend", "descend", "descens", "descens", 3),
					 new Verb("to turn down from", "devert", "devers", "devers", 3),
					 new Verb("to speak", "dic", "dix", "dict", 3),
					 new Verb("to leave", "disced", "discess", "discess", 3),
					 new Verb("to buy", "em", "em", "empt", 3),
					 new Verb("to extend", "extend", "extend", "extens", 3),
					 new Verb("to drag out", "extraho", "extraxi", "extract", 3),
					 new Verb("to groan", "gem", "gemu", "gemit", 3),
					 new Verb("to wear", "ger", "gess", "gess", 3),
					 new Verb("to put on", "indu", "indu", "indutus", 3),
					 new Verb("to burn", "inur", "inuss", "inust", 3),
					 new Verb("to lick", "lamb", "lamb", "lambit", 3),
					 new Verb("to read, select", "leg", "leg", "lect", 3),
					 new Verb("to send", "mitt", "mis", "miss", 3),
					 new Verb("to run into", "occur", "occurr", "occurs", 3),
					 new Verb("to seek", "pet", "petiv", "petit", 3),
					 new Verb("to place", "pon", "posu", "posit", 3),
					 new Verb("to run before", "praecurr", "praecucurr", "praecurs", 3),
					 new Verb("to promise", "promitt", "promis", "promiss", 3),
					 new Verb("to rest", "quiesc", "quiev", "quiet", 3),
					 new Verb("to rule", "reg", "rex", "rect", 3),
					 new Verb("to leave behind", "relinqu", "reliqu", "relict", 3),
					 new Verb("to drive away", "repell", "reppul", "repuls", 3),
					 new Verb("to seize", "reprehend", "reprehend", "reprehens", 3),
					 new Verb("to write", "scrib", "scrips", "script", 3),
					 new Verb("to snore", "stert", "stertu", "", 3),
					 new Verb("to draw tight", "string", "strinx", "strinct", 3),
					 new Verb("to take up", "sum", "sumps", "sumpt", 3),
					 new Verb("to rise", "surg", "surrex", "surrect", 3),
					 new Verb("to hand over", "trad", "tradid", "tradit", 3),
					 new Verb("to drag", "trah", "trax", "tract", 3),
					 new Verb("to shake", "tremu", "tremu", "", 3),
					 new Verb("to turn", "vert", "vert", "vers", 3),
					 new Verb("to win", "vinc", "vic", "vict", 3),
					 new Verb("to snatch", "arrip", "arripu", "arrept", 4),
					 new Verb("to take", "cap", "cep", "capt", 4),
					 new Verb("to construct", "confic", "confec", "confect", 4),
					 new Verb("to throw together", "conic", "coniec", "coniect", 4),
					 new Verb("to catch sight of", "conspic", "conspex", "conspect", 4),
					 new Verb("to escape", "effug", "effug", "effugit", 4),
					 new Verb("to remove", "excip", "excep", "except", 4),
					 new Verb("to do/make", "fac", "fec", "fact", 4),
					 new Verb("to flee", "fug", "fug", "fugit", 4),
					 new Verb("to throw", "iac", "iec", "iact", 4),
					 new Verb("to examine", "inspic", "inspex", "inspect", 4),
					 new Verb("to smell", "olfac", "olfec", "olfact", 4),
					 new Verb("to finish", "perfic", "perfec", "perfect", 4),
					 new Verb("to arrive", "adven", "adven", "advent", 5),
					 new Verb("to open", "aper", "aperu", "apert", 5),
					 new Verb("to hear", "aud", "audiv", "audit", 5),
					 new Verb("to guard", "custod", "custodiv", "custodit", 5),
					 new Verb("to sleep", "dorm", "dormiv", "dormit", 5),
					 new Verb("to be hungry", "esur", "esuriv", "", 5),
					 new Verb("to end", "fin", "finiv", "finit", 5),
					 new Verb("to hinder", "imped", "impediv", "impedit", 5),
					 new Verb("to find", "inven", "inven", "invent", 5),
					 new Verb("to not know", "nesc", "nesciv", "nescit", 5),
					 new Verb("to fall asleep", "obdorm", "obdormiv", "obdormit", 5),
					 new Verb("to punish", "pun", "puniv", "punit", 5),
					 new Verb("to know", "sc", "sciv", "scit", 5),
					 new Verb("to come", "ven", "ven", "vent", 5),
					 new Noun("knee", "genu", "gen", 3, 4),
					 new Noun("Italy", "Italia", "Itali", 1, 1),
					 new Noun("picture", "pictura", "pictur", 1, 1),
					 new Noun("girl", "puella", "puell", 1, 1),
					 new Noun("country house, villa", "villa", "vill", 1, 1),
					 new Noun("friend (female)", "amica", "amic", 1, 1),
					 new Noun("woman", "femina", "femin", 1, 1),
					 new Noun("friend (male)", "amicus", "amic", 2, 2),
					 new Noun("statue", "statua", "statuae", 1, 1),
					 new Noun("boy", "puer", "puer", 2, 2),
					 new Noun("slave", "servus", "serv", 2, 2),
					 new Noun("man, husband", "vir", "vir", 2, 2),
					 new Noun("branch", "ramus", "ram", 2, 2),
					 new Noun("crash", "fragor", "fragor", 2, 2),
					 new Noun("voice", "vox", "voc", 1, 3),
					 new Noun("tree", "arbor", "arbor", 1, 3),
					 new Noun("wolf", "lupus", "lup", 2, 2),
					 new Noun("river", "rivus", "riv", 2, 2),
					 new Noun("shout, clamor", "clamor", "clamor", 2, 3),
					 new Noun("slave-woman", "ancilla", "ancill", 1, 1),
					 new Noun("water", "aqua", "aqu", 1, 1),
					 new Noun("food", "cibus", "cib", 2, 2),
					 new Noun("mother", "mater", "matr", 1, 3),
					 new Noun("father", "pater", "patr", 2, 3),
					 new Noun("summer", "aestas", "aestat", 1, 3),
					 new Noun("day", "dies", "die", 1, 5),
					 new Noun("letter", "epistula", "epistul", 1, 1),
					 new Noun("messenger", "nuntius", "nunti", 2, 2),
					 new Noun("emperor", "princeps", "princip", 2, 3),
					 new Noun("senator", "senator", "senator", 2, 3),
					 new Noun("city", "urbs", "urb", 1, 3),
					 new Noun("Britain", "Britannica", "Britannic", 1, 1),
					 new Noun("toga", "toga", "tog", 1, 1),
					 new Noun("tunic", "tunica", "tunic", 1, 1),
					 new Noun("narrator", "narrator", "narrator", 2, 3),
					 new Noun("door", "ianua", "ianu", 1, 1),
					 new Noun("doorkeeper", "ianitor", "ianitor", 2, 3),
					 new Noun("chest", "cista", "cist", 1, 1),
					 new Noun("shawl", "palla", "pall", 1, 1),
					 new Noun("carriage", "raeda", "raed", 1, 1),
					 new Noun("dress", "stola", "stol", 1, 1),
					 new Noun("road", "via", "vi" ,1 ,1),
					 new Noun("horse", "equus", "equ", 2, 2),
					 new Noun("children", "liberus", "liber", 2, 2),
					 new Noun("area", "area", "are", 1, 1),
					 new Noun("daughter", "filia", "fili", 1, 1),
					 new Noun("anger", "ira", "ir", 1, 1),
					 new Noun("gate", "porta", "port", 1, 1),
					 new Noun("master", "dominus", "domin", 2, 2),
					 new Noun("son", "filius", "fili", 2, 2),
					 new Noun("number", "numerus", "numer", 2, 2),
					 new Noun("overseer", "vilicus", "vilic", 2, 2),
					 new Noun("night", "nox", "noct", 1, 3),
					 new Noun("parent", "parens", "parent", 2, 3),
					 new Noun("sister", "soror", "soror", 1, 3),
					 new Noun("wife", "uxor", "uxor", 1, 3),
					 new Noun("hour", "hora", "hor", 1, 1),
					 new Noun("wool", "lana", "lan", 1, 1),
					 new Noun("fishpond", "piscina", "piscin", 1, 1),
					 new Noun("forest, woods", "silva", "silv", 1, 1),
					 new Noun("Rome", "Roma", "Rom", 1, 1),
					 new Noun("The Appian Way", "Via Appia", "Viae Appi", 1, 1),
					 new Noun("field", "ager", "agr", 2, 2),
					 new Noun("garden", "hortus", "hort", 2, 2),
					 new Noun("coachman", "raedarius", "raedari", 2, 2),
					 new Noun("ditch", "fossa", "foss", 1, 1),
					 new Noun("vineyard", "vinea", "vine", 1, 1),
					 new Noun("dog", "canis", "can", 2, 3),
					 new Noun("charioteer", "auriga", "aurigae", 2, 1),
					 new Noun("stick", "virga", "virg", 1, 1),
					 new Noun("peasant", "rusticus", "rustic", 2, 2),
					 new Noun("courier", "tabellarius", "tabellari", 2, 2),
					 new Noun("citizen", "civis", "civ", 2, 3),
					 new Noun("part", "pars", "part", 1, 3),
					 new Noun("foot", "pes", "ped", 2, 3),
					 new Noun("fault, blame", "culpa", "culp", 1, 1),
					 new Noun("art, skill", "ars", "art", 1, 3),
					 new Noun("wheel", "rota", "rot", 1, 1),
					 new Noun("wagon, cart", "plaustrum", "plaustr", 3, 2),
					 new Noun("silence", "silentium", "silenti", 3, 2),
					 new Noun("help, aid", "auxilium", "auxili", 3, 2),
					 new Noun("stick", "baculum", "bacul", 3, 2),
					 new Noun("light two-wheeled carriage", "cisium", "cisi", 3, 2),
					 new Noun("bedroom", "cubiculum", "cubicul", 3, 2),
					 new Noun("olive grove", "olivetum", "olivet", 3, 2),
					 new Noun("danger", "periculum", "pericul", 3, 2),
					 new Noun("vehicle", "vehiculum", "vehicul", 3, 2),
					 new Noun("track, footprint, trace", "vestigium", "vestigi", 3, 2),
					 new Noun("ox, cow", "bos", "bov", 2, 3),
					 new Noun("man", "homo", "homin", 2, 3),
					 new Noun("cloud", "nubes", "nub", 1, 3),
					 new Noun("dust", "pulvis", "pulver", 2, 3),
					 new Noun("murmur", "murmur", "murmur", 3, 3),
					 new Noun("load, burden", "onus", "oner", 3, 3),
					 new Noun("journey", "iter", "itern", 3, 3),
					 new Noun("name", "nomen", "nomin", 3, 3),
					 new Noun("time", "tempus", "tempor", 3, 3),
					 new Noun("ball", "pila", "pil", 1, 1),
					 new Noun("spirit, soul, mind", "animus", "anim", 2, 2),
					 new Noun("joke", "iocus", "ioc", 2, 2),
					 new Noun("guest", "hospes", "hospit", 2, 3),
					 new Noun("inn", "caupona", "caupon", 1, 1),
					 new Noun("mistress", "domina", "domin", 1, 1),
					 new Noun("building", "aedificium", "aedifici", 3, 2),
					 new Noun("sky", "caelum", "cael", 3, 2),
					 new Noun("innkeeper", "caupo", "caupon", 2, 3),
					 new Noun("tail", "cauda", "caud", 1, 1),
					 new Noun("legate, envoy", "legatus", "legat", 2, 2),
					 new Noun("bone", "os", "oss", 3, 3),
					 new Noun("traveler", "viator", "viator", 2, 3),
					 new Noun("dinner", "cena", "cen", 1, 1),
					 new Noun("bed", "lectus", "lect", 2, 2),
					 new Noun("story", "fabula", "fabul", 1, 1),
					 new Noun("soldier", "miles", "milit", 2, 3),
					 new Noun("Asia", "Asia", "Asi", 1, 1),
					 new Noun("kitchen", "culina", "culin", 1, 1),
					 new Noun("Greece", "Graecia", "Graeci", 1, 1),
					 new Noun("innocence", "innocentia", "innocenti", 1, 1),
					 new Noun("money", "pecunia", "pecuni", 1, 1),
					 new Noun("pirate", "pirata", "piratae", 2, 1),
					 new Noun("gold", "aurum", "aur", 3, 2),
					 new Noun("castanet", "crotalum", "crotal", 3, 2),
					 new Noun("sleep", "somnus", "somn", 2, 2),
					 new Noun("dream", "somnium", "somni", 3, 2),
					 new Noun("body", "corpus", "corporis", 3, 3),
					 new Noun("cat", "felis", "fel", 1, 3),
					 new Noun("freedom", "libertas", "libertat", 1, 3),
					 new Noun("light", "lux", "luc", 1, 3),
					 new Noun("death", "mors", "mort", 1, 3),
					 new Noun("mouse", "mus", "mur", 2, 3),
					 new Noun("dancer", "saltatrix", "saltatric", 1, 3),
					 new Noun("dung, manure", "stercus", "stercor", 3, 3),
					 new Noun("reins", "habena", "habenae", 1, 1),
					 new Noun("order, instruction", "mandatum", "mandat", 3, 2),
					 new Noun("uncle", "patruus", "patru", 2, 2),
					 new Noun("tomb", "sepulcrum", "sepulcr", 3, 2),
					 new Noun("merchant", "mercator", "mercator", 2, 3),
					 new Noun("orator, speaker", "orator", "orator", 2, 3),
					 new Noun("terror", "terror", "terror", 2, 3),
					 new Noun("senate house", "Curia", "Curi", 1, 1),
					 new Noun("litter", "lectica", "lectic", 1, 1),
					 new Noun("crowd", "turba", "turb", 1, 1),
					 new Noun("joy", "gaudium", "gaudi", 3, 2),
					 new Noun("litter-bearer", "lecticarius", "lecticari", 2, 2),
					 new Noun("wall", "murus", "mur", 2, 2),
					 new Noun("rain", "imber", "imbr", 2, 3),
					 new Noun("crowd", "multitudo", "multitudin", 1, 3),
					 new Noun("bridge", "pons", "pont", 2, 3),
					 new Noun("rest, sleep", "quies", "quiet", 1, 3),
					 new Noun("book", "liber", "libr", 2, 2),
					 new Noun("school, game", "ludus", "lud", 2, 2),
					 new Noun("work, labor", "labor", "labor", 2, 3),
					 new Noun("mass", "moles", "molis", 1, 3),
					 new Noun("hill, mountain", "mons", "mont", 2, 3),
					 new Noun("reason, cause", "causa", "caus", 1, 1),
					 new Noun("poet", "poeta", "poet", 2, 1),
					 new Noun("shop", "taberna", "tabern", 1, 1),
					 new Noun("ampitheater", "ampitheatrum", "ampitheatr", 3, 2),
					 new Noun("Forum", "Forum", "For", 3, 2),
					 new Noun("patron", "patronus", "patron", 2, 2),
					 new Noun("pen", "stilus", "stil", 2, 2),
					 new Noun("wine", "vinum", "vin", 3, 2),
					 new Noun("head", "caput", "capit", 3, 3),
					 new Noun("client", "cliens", "client", 2, 3),
					 new Noun("stone, milestone", "lapis", "lapid", 2, 3),
					 new Noun("doorpost", "postis", "post", 2, 3),
					 new Noun("day", "dies", "di", 2, 5),
					 new Noun("thing", "res", "r", 1, 5),
					 new Noun("heat", "aestus", "aest", 2, 4),
					 new Noun("aqueduct", "aquaeductus", "aquaeduct", 2, 4),
					 new Noun("arch", "arcus", "arc", 2, 4),
					 new Noun("embrace", "complexus", "complex", 2, 4),
					 new Noun("home, house", "domus", "dom", 1, 4),
					 new Noun("hand", "manus", "man", 1, 4),
					 new Noun("return", "reditus", "redit", 2, 4),
					 new Noun("smile", "risus", "ris", 2, 4),
					 new Noun("senate", "senatus", "senat", 2, 4),
					 new Noun("sound", "sonitus", "sonit", 2, 4),
					 new Noun("noise, clattering", "strepitus", "strepit", 2, 4),
					 new Noun("uproar, tumult", "tumultus", "tumult", 2, 4),
					 new Noun("land, earth", "terra", "terrae", 1, 1),
					 new Noun("atrium, front hall", "atrium", "atri", 3, 2),
					 new Noun("prisoner, captive", "captivus", "captiv", 2, 2),
					 new Noun("talk, chat, conversation", "colloquium", "colloqui", 3, 2),
					 new Noun("sword", "gladius", "gladi", 2, 2),
					 new Noun("mud", "lutum", "lut", 3, 2),
					 new Noun("eye", "oculus", "ocul", 3, 2),
					 new Noun("study room", "tablinum", "tablin", 3, 2),
					 new Noun("spouse", "coniunx", "coniugis", 2, 3),
					 new Noun("guard", "custos", "custod", 2, 3),
					 new Noun("speech", "oratio", "oration", 1, 3),
					 new Noun("robber", "praedo", "praedon", 2, 3),
					 new Noun("fear", "metus", "met", 2, 4),
					 new Noun("napkin, white cloth", "mappa", "mapp", 1, 1),
					 new Noun("turning post", "meta", "met", 1, 1),
					 new Noun("four horse chariot", "quadriga", "quadrig", 1, 1),
					 new Noun("barrier", "spina", "spin", 1, 1),
					 new Noun("race track, lap", "curriculum", "curricul", 3, 2),
					 new Noun("sign, signal", "signum", "sign", 3, 2),
					 new Noun("Caesar, emperor", "Caesar", "Caesaris", 2, 3),
					 new Noun("faction, team", "factio", "faction", 1, 3),
					 new Noun("woman", "mulier", "mulier", 1, 3),
					 new Noun("spectator, watcher", "spectator", "spectator", 2, 3),
					 new Noun("victor, conqueror", "victor", "victor", 2, 3),
					 new Adjective("happy", "laetus", "laeta", "laetum", "laet", 0),
					 new Adjective("a second", "alter", "altera", "alterum", "alter", 0),
					 new Adjective("neighboring", "vicinus", "vicina", "vicinum", "vicin", 0),
					 new Adjective("tired", "defessus", "defessa", "defessum", "defess", 0),
					 new Adjective("active, energetic", "strenuus", "strenua", "strenuum", "strenu", 0),
					 new Adjective("many, much", "multus", "multa", "multum", "mult", 0),
					 new Adjective("alone", "solus", "sola", "solum", "sol", 0),
					 new Adjective("angry", "iratus", "irata", "iratum", "irat", 0),
					 new Adjective("annoying, troublesome", "molestus", "molesta", "molestum", "molest", 0),
					 new Adjective("big, great", "magnus", "magna", "magnum", "magn", 0),
					 new Adjective("anxious", "sollicitus", "sollicita", "sollicitum", "sollicit", 0),
					 new Adjective("weak", "infirmus", "infirma", "infirmum", "infirm", 0),
					 new Adjective("hot", "calidus", "calida", "calidum", "calid", 0),
					 new Adjective("cold", "frigidus", "frigida", "frigidum", "frigid", 0),
					 new Adjective("lazy", "ignavus", "ignava", "ignavum", "ignav", 0),
					 new Adjective("reckless", "temerarius", "temeraria", "temerarium", "temerari", 0),
					 new Adjective("frightened", "perterritus", "perterrita", "perterritum", "perterrit", 0),
					 new Adjective("safe", "salvus", "salva", "salvum", "salv", 0),
					 new Adjective("all, every", "omnis", "omnis", "omne", "omn", 1),
					 new Adjective("busy", "occupatus", "occupata", "occupatum", "occupat", 0),
					 new Adjective("my", "meus", "mea", "meum", "me", 0),
					 new Adjective("slow", "tardus", "tarda", "tardum", "tard", 0),
					 new Adjective("quick", "celer", "celeris", "celere", "celer", 1),
					 new Adjective("pretty", "pulcher", "pulchra", "pulchrum", "pulchr", 0),
					 new Adjective("good", "bonus", "bona", "bonum", "bon", 0),
					 new Other("etiam", "also"),
					 new Other("hodie", "today"),
					 new Other("iam", "now"),
					 new Other("lente", "slowly"),
					 new Other("non", "not"),
					 new Other("quoque", "also"),
					 new Other("saepe", "often"),
					 new Other("tandem", "at last"),
					 new Other("minime", "no"),
					 new Other("subito", "suddenly"),
					 new Other("furtim", "stealthily"),
					 new Other("semper", "always"),
					 new Other("tum", "then"),
					 new Other("adhuc", "still"),
					 new Other("ibi", "there"),
					 new Other("statim", "immediately"),
					 new Other("mox", "soon"),
					 new Other("nondum", "not yet"),
					 new Other("nunc", "now"),
					 new Other("strenue", "strenuously"),
					 new Other("tamen", "however"),
					 new Other("celeriter", "quickly"),
					 new Other("deinde", "then"),
					 new Other("iterum", "again"),
					 new Other("hic", "here"),
					 new Other("simul", "together"),
					 new Other("tacite", "silently"),
					 new Other("cras", "tomorrow"),
					 new Other("interea", "meanwhile"),
					 new Other("identidem", "again and again"),
					 new Other("ferociter", "fiercely"),
					 new Other("celerrime", "very fast"),
					 new Other("frustra", "in vain"),
					 new Other("placide", "gently"),
					 new Other("diu", "for a long time"),
					 new Other("fortasse", "perhaps"),
					 new Other("praeterea", "besides"),
					 new Other("procul", "in the distance"),
					 new Other("tantum", "only"),
					 new Other("modo", "only"),
					 new Other("olim", "once"),
					 new Other("certe", "certainly"),
					 new Other("valde", "very"),
					 new Other("vehementer", "very much"),
					 new Other("antea", "before"),
					 new Other("attente", "closely"),
					 new Other("heri", "yesterday"),
					 new Other("numquam", "never"),
					 new Other("paulisper", "for a short time"),
					 new Other("ita", "thus"),
					 new Other("mane", "early"),
					 new Other("sero", "late"),
					 new Other("supra", "above"),
					 new Other("eo", "there"),
					 new Other("illuc", "there"),
					 new Other("interdiu", "during the day"),
					 new Other("primum", "first"),
					 new Other("satis", "enough"),
					 new Other("undique", "on all sides"),
					 new Other("aliter", "otherwise"),
					 new Other("nonnumquam", "sometimes"),
					 new Other("postridie", "the next day")
	];
	sentences = [
		"amo canem",
		"Spectamus ludos",
		"Laudas hominem",
		"amatis canes",
		"Cantat carmen",
		"amant canes",
		"Sedeo sub arbore",
		"Manemus sub arboribus",
		"Sedes sub arbore",
		"Sedetis sub arboribus",
		"Ridet sub arbore",
		"Sedent sub arboribus",
		"Duc canes domum!",
		"Dic bonum!",
		"Fac bonum!",
		"Fer cibum!",
		"Ducite canes domum!",
		"Dicite bona!",
		"Facite bona!",
		"Ferte cibum!",
		"ama puerum!",
		"amate pueros!",
		"Tango canes in agro",
		"Currimus in agris",
		"Scribis in agro",
		"Curritis in agris",
		"Currit in agro",
		"Legunt in agris",
		"audio verbum",
		"audimus verba",
		"audis verba Sexti",
		"auditis verba puerorum",
		"audit verbum",
		"audiunt verba",
		"Dico Cornelio",
		"Dicimus Cornelio",
		"Dicis Cornelio",
		"Dicitis Cornelio",
		"Dicit Cornelio",
		"Dicunt Cornelio",
		"Facio gladium",
		"Facimus gladios",
		"Facis gladium",
		"Facitis gladios",
		"Facit gladium",
		"Faciunt gladios",
		"Monstro librum Sexto",
		"Monstramus libros Sexto",
		"Monstras librum Sexto",
		"Monstratis libros Sexto",
		"Monstrat librum Sexto",
		"Monstrant libros Sexto",
		"Do baculum Marco",
		"Damus bacula Marco",
		"Das baculum Marco",
		"Datis bacula Marco",
		"Dat baculum Marco",
		"Dant bacula Marco",
		"Porto aqua domum",
		"Portamus cibos Sexti",
		"Portas aqua domum",
		"Portatis cibos Sexti",
		"Portat aqua domum",
		"Portant cibos Sexti",
		"Video librum pueri",
		"Videmus libros puerorum",
		"Vides magnum librum",
		"Videtis magnos libros",
		"Videt magnum librum pueri",
		"Vident magnos libros puerorum",
		"Facio librum",
		"Facimus libros",
		"Facis librum",
		"Facitis libros",
		"Facit librum",
		"Faciunt libros",
		"Venio ab villa",
		"Venimus ab villis",
		"Venis ad villam",
		"Venitis ad villas",
		"Venit sine aqua",
		"Veniunt sine aquis",
		"Curro ex villa",
		"Curro e villa",
		"Curro ex villis",
		"Curro e villis",
		"Dico de agricola",
		"Dico de agricolis",
		"ambulo in villam",
		"Curro in villa",
		"Curro in villis",
		"Curro pro amico",
		"Curro pro amicis",
		"Curro cum amico",
		"Curro cum amicis",
		"unus puer celat",
		"Liber unius pueri est in villa",
		"Do librum uni puero",
		"Conspicio unum puerum",
		"una puella dormit",
		"Lectus unius puellae est in cubiculo",
		"Video unam puellam",
		"Duo pueri currunt",
		"Bacula duorum puerorum erant in agris",
		"ambulo cum duobus pueris",
		"Vexo duos pueros",
		"Duae puellae sedent in triclinio",
		"Tunicae duarum puellarum sunt sordidae",
		"Currit sine duabus puellis",
		"Spectant duas puellas",
		"Duo templa",
		"Duorum templorum",
		"Duobus templis",
		"Tres pueri",
		"Trium puerorum",
		"Tribus pueris",
		"Tres pueros",
		"Tres puellae sunt pulchrae",
		"Soleae trium puellarum humi sunt",
		"Curro de tribus puellis",
		"Conspiciunt tres puellas",
		"Tria bacula sunt in agro",
		"Trium baculorum",
		"Tribus baculis",
		"Bonus puer ambulat",
		"Boni pueri non currunt",
		"Do optimum librum bono puero",
		"Video bonum puerum",
		"Togae bonorum puerorum sunt candidae",
		"ambulo cum bonis pueris",
		"Petit bonos pueros",
		"Bona puella non dormit in agro",
		"Bonae puellae non celant",
		"Conspicit bonam puellam",
		"Video pallas bonarum puellarum",
		"Curro a bonis puellis",
		"Petunt bonas puellas",
		"Bona templa",
		"Celeres pueri",
		"Celer puella",
		"ingente vulnus",
		"ingentis vulneris",
		"ingenti vulneri",
		"ingentia vulnera",
		"ingentium vulnerum",
		"ingentibus vulneribus",
		"Volo amare puerum",
		"Vis sedere sub arbore",
		"Vult facere librum",
		"Volumus venire domum",
		"Vultis dare dona pueris",
		"Volunt necare hostes",
		"Sum puer",
		"es puella",
		"est raeda",
		"Sumus senatores",
		"estis cives",
		"Sunt stulti",
		"Raeda in fossa est",
		"Pulchrae puellae Romam ierunt",
		"Cibus dabitur laeto puero",
		"terra infirma",
		"Clarus senator ambulat ad Curiam",
		"temeraria felis",
		"parvi mures",
		"fortis murus",
		"calida aestas",
		"magnus princeps",
		"magnus Caesar",
		"nuntius misit epistulas",
		"mater coquit cibum",
		"pater magnus est",
		"Cornelia discedit a villa rustica",
		"raedam e fossa trahebant",
		"Marcus et Sextus amici sunt"
	];
	translations = [
		"I love the dog",
		"We watch the games",
		"You praise the man",
		"Y'all love the dogs",
		"She sings a song",
		"They love dogs",
		"I sit under a tree",
		"We stay under trees",
		"You sit under a tree",
		"Y'all sit under trees",
		"He laughs under the tree",
		"They sit under the trees",
		"Lead the dogs home!",
		"Say a good thing!",
		"Do a good thing!",
		"Bring the food!",
		"Lead the dogs home!",
		"Say good things!",
		"Do good things!",
		"Bring the food!",
		"Love the boy!",
		"Love the boys!",
		"I tough the doges in the field",
		"We run in the fields",
		"You write in the field",
		"Y'all run in the fields",
		"He runs in the field",
		"They write in the fields",
		"I hear a word",
		"We hear words",
		"You hear the words of Sextus",
		"Y'all hear the words of the boys",
		"He hears the word",
		"They hear words",
		"Talk to Cornelius",
		"We talk to Cornelius",
		"You talk to Cornelius",
		"Y'all talk to Cornelius",
		"She talks to Cornelius",
		"They talk to Cornelius",
		"I make a sword",
		"We make swords",
		"You make a sword",
		"Y'all make swords",
		"He makes a sword",
		"They make swords",
		"I show the book to Sextus",
		"We show the books to Sextus",
		"You show the book to Sextus",
		"Y'all show the books to Sextus",
		"He shows the book to Sextus",
		"They show books to Sextus",
		"I give the stick to Marcus",
		"We give the sticks to Marcus",
		"You give the stick to Marcus",
		"Y'all give sticks to Marcus",
		"She gives a stick to Marcus",
		"They give sticks to Marcus",
		"I carry water home",
		"We carry the food of Sextus",
		"You carry water home",
		"Y'all carry the food of sextus",
		"She carries water home",
		"They carry the food of Sextus",
		"I see the book of the boy",
		"We see the books of the boys",
		"You see a large book",
		"Y'all see the large books",
		"He sees the large book of the boy",
		"They see the large books of the boys",
		"I make a book",
		"We make books",
		"You make a book",
		"Y'all make books",
		"She makes a book",
		"They make books",
		"I come from home",
		"We come from the homes",
		"You come to the home",
		"Y'all come to the homes",
		"He comes without water",
		"They come without water",
		"I run out of the house",
		"I run out of the house",
		"I run out of the houses",
		"I run out of the houses",
		"I talk about the farmer",
		"I talk about the farmers",
		"I walk into the house",
		"I run in the house",
		"I run in the houses",
		"I run for the friend",
		"I run for the friends",
		"I run with a friend",
		"I run with friends",
		"One boy hides",
		"The book of one boy is in the house",
		"Give the book to the one boy",
		"I catch sight of one boy",
		"One girl sleeps",
		"The bed of one girl is in the bedroom",
		"I see one girl",
		"Two boys run",
		"The sticks of two girls were in the fields",
		"I walk with two boys",
		"I annoy two boys",
		"Two girls sit in the dining room",
		"The tunics of two girls are dirty",
		"He runs without two girls",
		"They watch two girls",
		"Two temples",
		"of two temples",
		"to/for/by/with/from/on two temples",
		"three boys",
		"of three boys",
		"to/for/by/with/from/on three boys",
		"three boys",
		"three girls are beautiful",
		"sandals of the three girls are on the ground",
		"I run from three girls",
		"they catch sight of three girls",
		"three branches are in the field",
		"of three branches",
		"to/for/by/with/from/on three branches",
		"The good boy walks",
		"Good boys do not run",
		"I give the best book to the good boy",
		"I see the good boy",
		"the togas of the good boys are bright ",
		"I walk with the good boys",
		"he/she/it seeks the good boys",
		"the good girl does not sleep in the field",
		"the good girls do not hide",
		"he/she/it catches sight of the good girl",
		"I see the shawls of the good girls",
		"I run from the good girls",
		"they seek the good girls",
		"the good temples",
		"the quick boys",
		"the quick girl",
		"the huge wound",
		"of the huge wound",
		"to/for the huge wound",
		"the huge wounds",
		"of the huge wounds",
		"to/for/by/with/from/on the huge wounds",
		"I want to love the boy",
		"you want to sit under the tree",
		"he/she/it wants to make a book",
		"we want to come home",
		"you (pl.) want to give gifts to the boys",
		"they want to kill the enemies",
		"I am a boy",
		"you are a girl",
		"it is a carriage",
		"we are senators",
		"you (pl.) are citizens",
		"they are stupid",
		"the carriage is in the ditch",
		"the beautiful girls went to Rome",
		"food will be given to the happy boy",
		"weak land",
		"the famous senator walks to the senate house",
		"the reckless cat",
		"small mice",
		"a strong wall",
		"the hot summer",
		"the great emperor",
		"the great Caesar",
		"the messenger sent letters",
		"the mother cooks food",
		"the father is great",
		"Cornelia leaves from the country house",
		"they were dragging the carriage out of the ditch",
		"Marcus and Sextus are friends"
	];
	tokenizer();
}
function tokenizer(){
	let toToken = []; //avoid repeat tokenizers for same words
	locs = [];
	for(let i = 0; i < sentences.length; i++){
		let tokens = sentences[i].toLowerCase().split(" ");
		for(let j = 0; j < tokens.length; j ++){
			if(toToken[tokens[j]]){ //we've already found the root...
				continue;
			}
			//...otherwise find the root
			let temp = null;
			for(let k = 0; k < irregulars.length && temp === null; k ++){
				let tempDir = findIrregular(tokens[j], irregulars[k], true);
				if(typeof tempDir === "string"){
					temp = tempDir;
				}
			}
			for(let k = 0; k < words.length && temp === null; k ++){
				let tempDir = words[k].search(tokens[j], true); //fast mode
				if(typeof tempDir === "string"){
					temp = tempDir;
				}
			}
			toToken[tokens[j]] = temp;
			if(!locs[toToken[tokens[j]]]){
              locs[toToken[tokens[j]]] = [];
            }
			locs[toToken[tokens[j]]].push(i);
		}
	}
}
/*mouse interactions*/
function mouseClicked(){
	clicked = true;
}
function diamond(x, y, w) {
	let d = w / sqrt(2);
	quad(x - d, y, x, y - d, x + d, y, x, y + d);
}
function overDiamond(x, y, w) {
	let aX = (mouseX - x) * cos(45) - (mouseY - y) * sin(45) + x;
	let aY = (mouseX - x) * sin(45) + (mouseY - y) * cos(45) + y;
	return aX > x - w / 2 && aX < x + w / 2 && aY > y - w / 2 && aY < y + w / 2;
}
class Button {
	constructor(dest, w, txt, txtScale, r, g=r, b=r) {
		this.w = w;
		this.txt = txt;
		this.textSize = w*txtScale;
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = 50;
		this.over = false;
		this.dest = dest;
	}
	display(x, y){
		this.over = this.hover(x, y);
		textAlign(CENTER, CENTER);
		textSize(this.textSize);
		strokeWeight(1);
		stroke(this.r, this.g, this.b);
		fill(this.r, this.g, this.b, this.a);
		diamond(x, y, this.w);
		noFill();
		stroke(this.r, this.g, this.b, 100);
		diamond(x, y, this.w + 2);
		diamond(x, y, this.w - 2);
		noStroke();
		fill(255);
		text(this.txt, x, y);
		if(clicked && this.over){
			this.click();
		}
	}
	hover(x, y){
		if(overDiamond(x, y, this.w)){
			cursor(HAND);
			this.a = min(100, this.a+10);
			return true;
		}
		this.a = max(50, this.a-10);
		return false;
	}
	click(){
		if(this.dest === "search"){
			find = input.value().toLowerCase();
			results = findForms(find);
			termKey = results[0][0];
		}
		t = 0;
		sideX = profX = helpX = searchX = sentenceX = size.width + 200;
		for(let i = 0; i < bX.length; i ++){
			bX[i] = size.width+200;
		}
		for(let i = 0; i < profileX.length; i ++){
			profileX[i] = size.width+200;
		}
		for(let i = 0; i < hX.length; i ++){
			hX[i] = size.width+200;
		}
		for(let i = 0; i < sX.length; i ++){
			sX[i] = size.width+200;
		}
		scene = this.dest;
	}
}
function intro(){
	input.hide();
	fill(255);
	textFont("Calibri");
	textStyle(BOLD);
	textAlign(CENTER, CENTER);
	textSize(greetSize[greetNum]);
	text(greets[greetNum], greetX, size.height/2);
	if(t < 90){
		greetX += (size.width/2 - greetX)/10;
	}else{
		greetX += (-300 - greetX)/10;
		if(greetX <= -295){
			t = 0;
			greetX = size.width + 200;
			if(++greetNum >= greets.length){
				scene = "home";
			}
		}
	}
	textStyle(NORMAL);
	textSize(15);
	textAlign(LEFT, LEFT);
	text("(Click to skip)", 45, 45);
	if(clicked){
		t = 0;
		scene = "home";
	}
	t ++;
}
function home(){
	input.show();
	fill(255);
	input.position(sideX-65, 190);
	buttons[0].display(bX[0], 200);
	buttons[1].display(bX[1], size.height-100);
	buttons[2].display(bX[2], size.height-100);
	if(t < 120){
		sideX += (size.width/2 - sideX)/10;
		bX[0] += (size.width/2-125 - bX[0])/10;
		bX[1] += (100 - bX[1])/10;
		bX[2] += (225 - bX[2])/10;
	}
	textAlign(CENTER, CENTER);
	textSize(60);
	textStyle(NORMAL);
	text(TITLE, sideX, 90);
	t ++;
}
function search(){
	input.hide();
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(50);
	text("Results for '" + find + "'", searchX, 100);
	if(t < 120){
		searchX += (size.width/2 - searchX)/10;
		sX[0] += (100 - sX[0])/10;
		sX[1] += (225 - sX[1])/10;
	}
	textSize(20);
	textAlign(LEFT, CENTER);
	let h = 5;
	for(let i = 0; i < results.length/3; i++){
		for(let j = 6; j < results[i*3].length; j ++){
        text(results[i*3][j], sX[0], 100 + 20*h);
        h ++;
      }
			text(results[i*3+1], sX[0], 100 + 20*h);
			h ++;
			text(results[i*3+2], sX[0], 100 + 20*h);
			h += 2;
	}
	buttons[3].display(sX[0], size.height-75);
	sentenceButton.display(sX[1], size.height-75);
	t ++;
}
function sentence(){
	input.hide();
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(50);
	text("Example Sentences with '" + (termKey||find) + "'", sentenceX, 100);
	if(t < 120){
		sentenceX += (size.width/2 - sentenceX)/10;
		sX[0] += (100 - sX[0])/10;
	}
	textSize(20);
	textAlign(LEFT, CENTER);
	if(locs[termKey]){
		for(let i = 0; i < locs[termKey].length; i ++){
			textStyle(BOLD);
			text(sentences[locs[termKey][i]], sX[0], 150 + 50*i);
			textStyle(NORMAL);
			text(translations[locs[termKey][i]], sX[0] + 10, 170 + 50*i);
		}
	}else{
		text("There are no sample sentences containing '" + find + "'", sX[0], 200);
	}
	buttons[3].display(sX[0], size.height-75);
	t ++;
}
function findForms(value){
	let out = [];
	for(let i = 0; i < words.length; i ++){
		let temp = words[i].search(value);
		if(temp && temp.length > 6){
			out.push(temp);
			out.push(principleParts(temp));
			out.push(temp[5]);
		}
	}
	for(let i = 0; i < irregulars.length; i++){
		let temp = findIrregular(find, irregulars[i]);
		if(temp && temp.length > 6){
			out.push(temp);
			out.push(principleParts(temp, true));
			out.push(temp[5]);
		}
	}
	return out.length === 0 ? ["", "No forms found"] : out;
}
function detectMouse(x, y, w, h, r1=0, r2=r1, r3=r1, r4=r1){
    if(dist(x+r1, y+r1, mouseX, mouseY) <= r1 || dist(x+w-r2, y+r2, mouseX, mouseY) <= r2 || dist(x+w-r3, y+h-r3, mouseX, mouseY) <= r3 || dist(x+r4, y+h-r4, mouseX, mouseY) <= r4){
        return true;
    }
    if(mouseX >= x+r1 && mouseX <= x+w-r2 && mouseY >= y && mouseY <= y+r1){
        return true;
    }
    if(mouseX >= x+r4 && mouseX <= x+w-r3 && mouseY >= y+h-r3 && mouseY <= y+h){
        return true;
    }
    if(mouseX >= x+w-r2 && mouseX <= x+w && mouseY >= y+r2 && mouseY <= y+h-r3){
        return true;
    }
    if(mouseX >= x && mouseX <= x+r4 && mouseY >= y+r1 && mouseY <= y+h-r4){
        return true;
    }
    if(mouseX >= x+r4 && mouseX <= x+w-r2 && mouseY >= y+r1 && mouseY <= y+h-r3){
        return true;
    }
    return false;
};
function about(){
	input.hide();
	fill(255);
	if(t < 120){
		profX += (size.width/2 - profX)/10;
		profileX[0] += (size.width/2-475 - profileX[0])/10;
		profileX[1] += (size.width/2-225 - profileX[1])/10;
		profileX[2] += (size.width/2+25 - profileX[2])/10;
		profileX[3] += (size.width/2+275 - profileX[3])/10;
		profileX[4] += (100 - profileX[4])/10;
	}
	for(let i = 0; i < profiles.length; i ++){
		(fill)(255, 100);
		rect(profileX[i], 150, 200, 250+hover[i], 5);
		let img = profiles[i].pfp;
		image(img, profileX[i]+5, 155, 190, 190);
		fill(255);
		textAlign(CENTER, CENTER);
		textSize(20);
		text(profiles[i].name, profileX[i] + 100, 375);
		if(detectMouse(profileX[i], 150, 200, 250+hover[i], 5)){
			hover[i] = min(120, hover[i] + 20);
		}else{
			hover[i] = max(0, hover[i] - 20);
		}
		if(hover[i] === 120){
			textAlign(LEFT, LEFT);
			textSize(11);
			text(profiles[i].bio, profileX[i] + 10, 400, 180, 120);
		}
	}
	textAlign(CENTER, CENTER);
	fill(255);
	textSize(50);
	text("The Team", profX, 100);
	buttons[3].display(profileX[4], size.height-75);
	t ++;
}
function help(){
	input.hide();
	fill(255);
	if(t < 120){
		helpX += (size.width/2 - helpX)/10;
		hX[0] += (100 - hX[0])/10;
	}
	textAlign(CENTER, CENTER);
	textSize(50);
	text("How to Use This Application", helpX, 100);
	textSize(20);
	textAlign(LEFT, LEFT);
	text("Simply enter in a Latin word, and this application will tell you the construction of it. " +
       "Discover sample sentences containing different forms of the word you searched, to help you understand " +
		   "how to use the word", hX[0], 150, size.width-200, size.height);
	buttons[3].display(hX[0], size.height-75);
	t ++;
}
/*Nouns*/
let nounEndings = [
	["ae", "ae", "am", "a", "ae", "arum", "is", "as", "is"],
	["i", "o", "um", "o", "i", "orum", "is", "os", "is"],
	["is", "i", "em", "e", "es", "um", "ibus", "es", "ibus"],
	["us", "ui", "um", "u", "us", "uum", "ibus", "us", "ibus"],
	["ei", "ei", "em", "e", "es", "erum", "ebus", "es", "ebus"]
];
let nounCases = ["NOM", "GEN", "DAT", "ACC", "ABL"];
let genders = "FMN";
class Noun {
	constructor(def, nom, stem, g, decl, istem = false){
		this.def = def;
		this.nom = nom;
		this.stem = stem;
		this.g = g-1;
		this.decl = decl-1;
		this.istem = istem && (this.decl === 2);
	}
	search(str, endFirst = false){
		let out = [this.nom, this.stem, this.decl, this.g, null, this.def];
		if(str === this.nom){
			out.push("NOM SING");
			if(endFirst){
				return this.nom;
			}
		}
		if(str.length < this.stem.length){
			if(endFirst){
				return out.length > 6 ? this.nom : null;
			}
			return out;
		}
		for(let i = 0; i < this.stem.length; i ++){
			if(this.stem[i] !== str[i]){
				if(endFirst){
					return out.length > 6 ? this.nom : null;
				}
				return out;
			}
		}
		let sub = str.substring(this.stem.length);
		for(let i = 0; i < nounEndings[this.decl].length; i ++){
			if(this.g === 2){
				if(i === 2 && str === this.nom){
					out.push("ACC SING");
					continue;
				}
				if((i === 4 || i === 7) && sub === (this.istem ? "ia" : this.decl === 3 ? "ua" : "a")){
					out.push(nounCases[(i+1)%5] + " PL");
					continue;
				}
				if(this.decl === 3 && i > 0 && i <= 3 && sub === "u"){
					out.push(nounCases[(i+1)%5] + " SING");
					continue;
				}
			}
			if((this.g !== 2 || i !== 4 && i !== 7) && (this.istem && (i === 3 || i === 5) ? "i" : "") + nounEndings[this.decl][i] === sub){
					out.push(nounCases[(i+1)%5] + " " + (i < 4 ? "SING" : "PL"));
			}
			if(out.length > 6 && endFirst){
				return this.nom;
			}
		}
		return out;
	}
	getStem(str){
		return this.search(str, true);
	}
}
/*Adjectives*/
class Adjective {
	constructor(def, nom1, nom2, nom3, stem, type){ //type 0 = 2-1-2, type 1 = 3
		this.adj = [
			new Noun(def, nom2, stem, 1, type ? 3 : 1, type),
			new Noun(def, nom1, stem, 2, type ? 3 : 2, type),
			new Noun(def, nom3, stem, 3, type ? 3 : 2, type)
		];
	}
	search(str, endFirst = false){
		let out = [this.adj[0].nom, this.adj[1].nom, this.adj[2].nom, null, null, this.adj[0].def];
		for(let i = 0; i < 3; i ++){
			let temp = this.adj[i].search(str, endFirst);
			if(!temp){
				continue;
			}
			if(endFirst && typeof temp === "string"){
				return this.adj[0].nom;
			}
			for(let j = 6; j < temp.length; j++){
				out.push(temp[j] + " " + genders[i]);
			}
		}
		return out;
	}
}
/*Adverbs, etc.*/
class Other {
	constructor(latin, def){
		this.latin = latin;
		this.def = def;
	}
	search(str, endFirst){
		let out = [this.latin, null, null, null, null, this.def];
		if(str === this.latin){
			out.push("");
			if(endFirst){
				return this.latin;
			}
		}
		return out;
	}
}
/*Verbs*/
let verbLetters = ["aaaaaa", "eeeeee", "oiiiiu", ["io","i","i","i","i","iu"]];
let presInf = ["are", "ere", "ere", "ere", "ire", "ari", "eri", "i", "i", "iri"];
let preVowels = ["a", "e", "e", "ie", "ie"];
let subjVowels = ["e", "ea", "a", "ia", "ia"];
let presActEndings = ["m", "s", "t", "mus", "tis", "nt"];
let presPasEndings = ["r", "ris", "tur", "mur", "mini", "ntur"];
let perfEndings = ["i", "isti", "it", "imus", "istis", "erunt"];
let fpEndings = ["ero", "eris", "erit", "erimus", "eritis", "erint"];
let persons = ["FIRST", "SECOND", "THIRD"];
//irregulars
let BE = [
	["sum", "es", "est", "sumus", "estis", "sunt"],
	["eram", "eras", "erat", "eramus", "eratis", "erant"],
	["ero", "eris", "erit", "erimus", "eritis", "erunt"],
	"fu",
	"futur",
	"esse",
	"to be",
	["es", "este"],
	["sim", "sis", "sit", "simus", "sitis", "sint"]
];
let ABLE = [
	["possum", "potes", "potest", "possumus", "potestis", "possunt"],
	["poteram", "poteras", "poterat", "poteramus", "poteratis", "poterant"],
	["potero", "poteris", "poterit", "poterimus", "poteritis", "poterunt"],
	"potu",
	"",
	"posse",
	"to be able",
	[null, null],
	["possim", "possis", "possit", "possimus", "possitis", "possint"]
];
let WANT = [
	["volo", "vis", "vult", "volumus", "vultis", "volunt"],
	["volebam", "volebas", "volebat", "volebamus", "volebatis", "volebant"],
	["volam", "voles", "volet", "volemus", "voletis", "volent"],
	"volu",
	"",
	"volle",
	"to want",
	[null, null],
	["velim", "velis", "velit", "velimus", "velitis", "velint"]
];
let NOTWANT = [
	["nolo", "non vis", "non vult", "nolumus", "non vultis", "nolunt"],
	["nolebam", "nolebas", "nolebat", "nolebamus", "nolebatis", "nolebant"],
	["nolam", "noles", "nolet", "nolemus", "noletis", "nolent"],
	"nolu",
	"",
	"nolle",
	"to not want",
	["noli", "nolite"],
	["nolim", "nolis", "nolit", "nolimus", "nolitis", "nolint"]
];
let GO = [
	["eo", "is", "it", "imus", "itis", "eunt"],
	["ibam", "ibas", "ibat", "ibamus", "ibatis", "ibant"],
	["ibo", "ibis", "ibit", "ibimus", "ibitis", "ibunt"],
	"i",
	"it",
	"ire",
	"to go",
	["i", "ite"],
	["eam", "eas", "eat", "eamus", "eatis", "eant"]
];
let BRING = [
	["fero", "fers", "fert", "ferimus", "fertis", "ferunt"],
	["ferebam", "ferebas", "ferebat", "ferebamus", "ferebatis", "ferebant"],
	["feram", "feres", "feret", "feremus", "feretis", "ferent"],
	"tul",
	"lat",
	"ferre",
	"to bring",
	["fer", "ferte"],
	["feram", "feras", "ferat", "feramus", "feratis", "ferant"]
];
let irregulars = [BE, ABLE, WANT, NOTWANT, GO, BRING];
function findIrregular(str, irreg, endFirst = false){
	let out = [irreg[0][0], irreg[5], irreg[3] + "i", irreg[4] === "" ? "" : irreg[4] + "us", null, irreg[6]];
	if(str.includes(" ")){
		if(irreg[4] !== ""){
			let parts = str.split(" ");
			let ppp = [new Noun(null, irreg[4]+"us", irreg[4], 2, 2),
			 						new Noun(null, irreg[4]+"a", irreg[4], 1, 1),
									new Noun(null, irreg[4]+"um", irreg[4], 3, 2)];
			if(ppp[0].getStem(parts[0]) || ppp[1].getStem(parts[0]) || ppp[2].getStem(parts[0])){
				for(let i = 0; i < 6; i++){
					if(BE[0][i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PERF PASS IND");
					}else
					if(BE[1][i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PLUP PASS IND");
					}else
					if(BE[2][i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUTP PASS IND");
					}else
					if(BE[8][i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PERF PASS SUBJ");
					}else
					if(BE[5]+presActEndings[i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PLUP PASS SUBJ");
					}
					if(out.length > 6 && endFirst){
						return irreg[0][0];
					}
				}
			}
		}
		return out;
	}
	if(str === irreg[7][0]){
		out.push("PRES ACT SING IMP");
	}else
	if(str === irreg[7][1]){
		out.push("PRES ACT PL IMP");
	}
	if(str === irreg[5]){
		out.push("PRES ACT INF");
	}
	if(str === irreg[3] + "isse"){
		out.push("PERF ACT INF");
	}
	for(let i = 0; i < 6; i ++){
		if(irreg[0][i] === str){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PRES ACT");
		}else
		if(irreg[1][i] === str){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " IMP ACT");
		}else
		if(irreg[2][i] === str){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUT ACT");
		}
		if(out.length > 6 && endFirst){
			return irreg[0][0];
		}
	}
	for(let i = 0; i < 6; i ++){
		if(str === irreg[3] + perfEndings[i]){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PERF ACT IND");
		}else
		if(str === irreg[3] + BE[1][i]){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PLUP ACT IND");
		}else
		if(str === irreg[3] + fpEndings[i]){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUTP ACT IND");
		}
		if(out.length > 6 && endFirst){
			return irreg[0][0];
		}
	}
	for(let i = 0; i < 6; i ++){
		if(str === irreg[8][i]){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PRES ACT SUBJ");
		}
		if(str === irreg[5] + presActEndings[i]){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " IMP ACT SUBJ");
		}
		if(str === irreg[5] + presPasEndings[i]){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " IMP PASS SUBJ");
		}
		if(str === irreg[3] + "eri" + presActEndings[i]){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PERF ACT SUBJ");
		}
		if(str === irreg[3] + "isse" + presActEndings[i]){
			out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PLUP ACT SUBJ");
		}
		if(out.length > 6 && endFirst){
			return irreg[0][0];
		}
	}
	return out;
}
class Verb {
	constructor(def, pres, perf, ppp, conj, dep = false){
		this.def = def;
		this.pres = pres;
		this.perf = perf;
		this.ppp = [new Noun(null, ppp+"us", ppp, 2, 2),
		 						new Noun(null, ppp+"a", ppp, 1, 1),
								new Noun(null, ppp+"um", ppp, 3, 2)]; //fpp => ppp + "ur"
		this.fpp = [new Noun(null, ppp+"urus", ppp+"ur", 2, 2),
			 					new Noun(null, ppp+"ura", ppp+"ur", 1, 1),
								new Noun(null, ppp+"urum", ppp+"ur", 3, 2)
		];
		this.conj = conj-1;
		this.dep = dep;
	}
	search(str, firstEnd = false){
		let out = [this.pres, this.perf, this.ppp[0].stem, this.conj, this.dep, this.def];
		if(str.includes(" ")){
			let parts = str.split(" ");
			if(typeof this.ppp[0].getStem(parts[0]) === "string" ||
			   typeof this.ppp[1].getStem(parts[0]) === "string" ||
				 typeof this.ppp[2].getStem(parts[0]) === "string"){
				if(parts[1] === "esse"){
					out.push("PERF " + (this.dep ? "ACT" : "PASS") + " INF");
				}
				if(parts[0] === this.ppp[2].nom && parts[1] === "iri"){
					out.push("FUT " + (this.dep ? "ACT" : "PASS") + " INF");
				}
				for(let i = 0; i < 6; i++){
					if(BE[0][i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PERF " + (this.dep ? "ACT" : "PASS") + " IND");
					}else
					if(BE[1][i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PLUP " + (this.dep ? "ACT" : "PASS") + " IND");
					}else
					if(BE[2][i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUTP " + (this.dep ? "ACT" : "PASS") + " IND");
					}else
					if(BE[8][i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PERF " + (this.dep ? "ACT" : "PASS") + " SUBJ");
					}else
					if(BE[5]+presActEndings[i] === parts[1]){
						out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PLUP " + (this.dep ? "ACT" : "PASS") + " SUBJ");
					}
					if(out.length > 6 && firstEnd){
						return this.pres;
					}
				}
			}else if(typeof this.fpp[0].getStem(parts[0]) === "string" ||
			   			 typeof this.fpp[1].getStem(parts[0]) === "string" ||
				 		 	 typeof this.fpp[2].getStem(parts[0]) === "string"){
				if(!this.dep && parts[1] === "esse"){
					out.push("FUT ACT INF");
					if(firstEnd){
						return this.pres;
					}
				}
			}
			return out;
		}
		if(str === this.pres + presInf[this.conj]){
			if(this.dep){
				out.push("PRES ACT SING IMP");
			}else{
				out.push("PRES PASS SING IMP");
				out.push("PRES ACT INF");
			}
		}
		if(str === this.pres + presInf[this.conj+5]){
			out.push("PRES " + (this.dep ? "ACT" : "PASS" ) + " INF");
		}
		if(!this.dep && str === this.perf + "isse"){
			out.push("PERF ACT INF");
		}
		if(str === this.pres + (this.conj >= 3 ? "io" : (this.conj === 1 ? "eo" : "o")) && !this.dep){
			out.push("FIRST SING PRES ACT IND");
		}
		if(str === this.pres + subjVowels[this.conj] + "m" && !this.dep){
			out.push("FIRST SING PRES ACT SUBJ");
		}
		if(str === this.pres + (this.conj >= 3 ? "ior" : this.conj === 1 ? "eor" : "or")){
			out.push("FIRST SING PRES " + (this.dep ? "ACT" : "PASS") + " IND");
		}
		if(str === this.pres + subjVowels[this.conj] + "r"){
			out.push("FIRST SING PRES " + (this.dep ? "ACT" : "PASS") + " SUBJ");
		}
		//exceptions: dic duc fac fer, but fer is irregular
		if(this.pres.match("(fac|dic|duc)")){
			if(str === this.pres){
				out.push("PERF ACT SING IMP");
			}
		}else
		if(!this.dep && str === this.pres + presInf[this.conj][0]){
			out.push("PERF ACT SING IMP");
		}
		if(out.length > 6 && firstEnd){
			return this.pres;
		}
		let vowels = verbLetters[min(3, this.conj)];
		if(str === this.pres + vowels[1] + "te"){
			out.push("PRES ACT PL IMP");
		}
		//check present
		for(let i = 1; i < 6; i ++){
			if(str === this.pres + vowels[i] + presActEndings[i] && !this.dep){
				out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PRES ACT IND");
			}else
			if(str === this.pres + (i === 1 && vowels[i] === "i" ? "e" : vowels[i]) + presPasEndings[i]){
				out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PRES " + (this.dep ? "ACT" : "PASS") + " IND");
				if(i === 4){
					out.push("PRES " + (this.dep ? "ACT" : "PASS") + " PL IMP");
				}
			}
			if(str === this.pres + subjVowels[this.conj] + presActEndings[i] && !this.dep){
				out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PRES ACT SUBJ");
			}else
			if(str === this.pres + subjVowels[this.conj] + presPasEndings[i]){
				out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PRES " + (this.dep ? "ACT" : "PASS") + " SUBJ");
			}
			if(out.length > 6 && firstEnd){
				return this.pres;
			}
		}
		//check imp
		let newStem = this.pres + preVowels[this.conj];
		for(let i = 0; i < 6; i ++){
			if(str === newStem + "ba" + presActEndings[i] && !this.dep){
				out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " IMP ACT IND");
			}else
			if(str === newStem + "ba" + presPasEndings[i]){
				out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " IMP " + (this.dep ? "ACT" : "PASS") + " IND");
			}
			if(str === this.pres + presInf[this.conj] + presActEndings[i] && !this.dep){
				out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " IMP ACT SUBJ");
			}else
			if(str === this.pres + presInf[this.conj] + presPasEndings[i]){
				out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " IMP " + (this.dep ? "ACT" : "PASS") + " SUBJ");
			}
			if(out.length > 6 && firstEnd){
				return this.pres;
			}
		}
		//check fut
		if(this.conj <= 1){
			if(str === newStem + "bo" && !this.dep){
				out.push("FIRST SING FUT ACT IND");
			}
			if(str === newStem + "bor"){
				out.push("FIRST SING FUT " + (this.dep ? "ACT" : "PASS") + " IND");
			}
			for(let i = 1; i < 5; i ++){
				if(str === newStem + "bi" + presActEndings[i] && !this.dep){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUT ACT IND");
				}else
				if(str === newStem + "b" + (i === 1 ? "e" : "i") + presPasEndings[i]){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUT " + (this.dep ? "ACT" : "PASS") + " IND");
				}
				if(out.length > 6 && firstEnd){
					return this.pres;
				}
			}
			if(str === newStem + "bunt" && !this.dep){
				out.push("THIRD PL FUT ACT IND");
			}
			if(str === newStem + "buntur"){
				out.push("THIRD PL FUT " + (this.dep ? "ACT" : "PASS") + " IND");
			}
			if(out.length > 6 && firstEnd){
				return this.pres;
			}
		}else{
			newStem = this.pres + (this.conj === 2 ? "" : "i");
			for(let i = 0; i < 6; i ++){
				if(str === newStem + (i === 0 ? "a" : "e") + presActEndings[i] && !this.dep){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUT ACT IND");
				}else
				if(str === newStem + (i === 0 ? "a" : "e") + presPasEndings[i]){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUT " + (this.dep ? "ACT" : "PASS") + " IND");
				}
				if(out.length > 6 && firstEnd){
					return this.pres;
				}
			}
		}
		//check perfect, pp, and fp active
		if(!this.dep){
			for(let i = 0; i < 6; i ++){
				if(str === this.perf + perfEndings[i]){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PERF ACT IND");
				}else
				if(str === this.perf + BE[1][i]){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PLUP ACT IND");
				}else
				if(str === this.perf + fpEndings[i]){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " FUTP ACT IND");
				}
				if(str === this.perf + "eri" + presActEndings[i]){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PERF ACT SUBJ");
				}else
				if(str === this.perf + "isse" + presActEndings[i]){
					out.push(persons[i%3] + (i < 3 ? " SING" : " PL") + " PLUP ACT SUBJ");
				}
				if(out.length > 6 && firstEnd){
					return this.pres;
				}
			}
		}
		return out;
	}
}
function principleParts(stems, irreg){
	if(irreg){
		return [stems[0], stems[1], stems[2], stems[3]];
	}
	if(stems[1] === null){
		return stems[0];
	}
	if(stems[3] === null){
		return [stems[1], stems[0], stems[2]];
	}
	if(stems[4] === null){
		return [stems[0], stems[1] + nounEndings[stems[2]][0], genders[stems[3]]];
	}
	if(stems[4]){
		return [stems[0] + (stems[3] > 3 ? "ior" : stems[3] === 1 ? "eor" : "or"), stems[0] + presInf[stems[3]+5], stems[2] === "" ? "--" : stems[2] + "us sum"];
	}
	return [stems[0] + (stems[3] >= 3 ? "io" : stems[3] === 1 ? "eo" : "o"), stems[0] + presInf[stems[3]], stems[1] + "i", stems[2] === "" ? "--" : stems[2] + "us"];
}
function draw() {
	cursor(ARROW);
  image(back, 0, 0);
	switch (scene){
		case "intro":
			intro();
			break;
		case "home":
			home();
			break;
		case "search":
			search();
			break;
		case "about":
			about();
			break;
		case "help":
			help();
			break;
		case "sentence":
			sentence();
			break;
	}
	clicked = false;
	/*Logo*/
	fill(255);
	textSize(25);
	textAlign(RIGHT, RIGHT);
	text("Luneborn Technologies", size.width-30, size.height-30);
}
