title: "Vláda má rozhodnout o novém reaktoru. Po německém odklonu od jádra jsou další bloky nesmysl, říká expert"
perex: "Česko jde proti evropskému proudu – Německo a Francie reaktory zavírají, stavba nových se 2× až 3× prodraží a protáhne. Nové Dukovany by vstoupily na trh, kde už nebudou konkurenceschopné."
published: "16. dubna 2018"
# autoři se zadávají až v redakčním systému
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/jaderna_elektrarna_d_171230-120652_haf.jpg?itok=iAiylFfI
coverimg_note: "Jaderná elektrárna Dukovany. Foto Informační centrum JE Dukovany"
styles: ['https://unpkg.com/leaflet@1.3.0/dist/leaflet.css']
libraries: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.js', jquery, highcharts] # jquery-csv, d3, datatables
options: [] #wide, noheader (, nopic)
---

Dukovany a Temelín dnes vyrobí necelou třetinu české elektřiny. V roce 2040 to má být víc než polovina. Očekává to [státní energetická koncepce](https://www.mpo.cz/dokument158059.html), schválená Sobotkovou vládou.

<div class="chart" id="koncepce" style="max-width: 100%"></div>

Ke splnění tohoto cíle je třeba rozšířit jadernou elektrárnu Dukovany. Předchozí snahy státem kontrolovaného koncernu ČEZ postavit dva nové reaktory v jaderné elektrárně Temelín přitom ztroskotaly. Tendr byl zrušen v roce 2014 mimo jiné kvůli nejasným státním zárukám.

Babišova vláda nyní znovu [hledá cesty](https://www.respekt.cz/spolecnost/babis-rozdeleni-cez-posoudi-experti-na-jadro-bude-soutez), jak nové reaktory postavit. [Plán rozvoje jaderné energetiky](https://www.mpo.cz/cz/energetika/elektroenergetika/jaderna-energetika/narodni-akcni-plan-rozvoje-jaderne-energeticky-v-ceske-republice--166679/) počítá s investicí 250 až 300 miliard a preferuje ČEZ jako jediného investora.

To ovšem odmítají jeho menšinoví akcionáři, kvůli riziku ekonomického fiaska dokonce pohrozili managementu žalobou. Vláda tak zvažuje rozdělení ČEZu na „čistou“ část s obnovitelnými zdroji a „špinavý“ uhelný a jaderný ČEZ, kde by měl stát stoprocentní podíl. Rozdělení by státu umožnilo investovat do jádra. Rozhodnout se má podle ministra průmyslu Tomáše Hünera ještě na jaře.

Data Mezinárodní agentury pro atomovou energii ukazují, že hledání investora nejspíš nebude snadné. V Evropě a Spojených státech je jaderná energetika na ústupu, investice do stavby reaktoru jsou v téhle části světa v posledních desetiletích vzácné.

## Kdy se stavěly a odstavovaly jaderné reaktory
_Zelená značí začátek stavby, oranžovaná plánovanou stavbu, červená odstavení reaktoru. Velikost kruhu udává výkon reaktoru._

<wide>
	<div id="sel">
		<select id="selector">
			<option value="1955,1986">Období 1955 - 1986</option>
			<option value="1987,2000">Období 1987 - 2000</option>
			<option value="2001,2200">Období 2000 a později</option>
		</select>
	</div>
	<div id="map"></div>
	<div id="ttip">Kliknutím vyberte elektrárnu.</div>
</wide>

_Data: postavené a odstavené reaktory z [IAEA](https://www.iaea.org/PRIS/WorldStatistics/OperationalReactorsByCountry.aspx) via [Rosamund Pearce](https://rospearce.carto.com/tables/nuclear_power_stations_around_the_world/public), plánované reaktory [WNA](http://www.world-nuclear.org/information-library/current-and-future-generation/plans-for-new-reactors-worldwide.aspx)_

_Plánované reaktory jsou v mapě pouze v případě, že je známé datum začátku stavby, i kdyby nebylo definitivní. Očekávaný rok začátku konstrukce je orientační údaj, v řadě zemí jsou plány výstavby v rané fázi nebo se mohou změnit. Z toho důvodu na mapě nenajdete připravované nové bloky jaderné elektrárny v Dukovanech._

Západní svět zažíval boom jaderné energetiky v šedesátých a sedmdesátých letech dvacátého století. V té době Spojené státy a země západní Evropy rozestavěly téměř tři stovky civilních reaktorů. Po havárii v Černobylu se ale rozvoj mírového využití jádra téměř zastavil: v devadesátých letech se mezi západními zeměmi pustila do stavby reaktoru pouze Francie. V následujícím desetiletí rozestavělo po jednom nukleárním bloku Finsko (2005), Francie (2007) a Slovensko (2009). Všechny tři jsou zatím nedostavěné.

Dnes prožívá atomovou horečku, srovnatelnou s šedesátými léty na Západě, Asie. Mezi velmocemi jaderné energetiky – Ruskem, Indií, Jižní Koreou a Čínou – začíná ta poslední dominovat. V současnosti má v provozu čtyři desítky reaktorů a staví nebo se chystá stavět dalších sedmdesát jaderných bloků.

„Jaderné elektrárny dnes staví převážně státy, které se rychle industrializují, mají dostatek kapitálu a jejich elektroenergetika zvládne spuštění takto velkého zdroje energie,“ vysvětluje Jan Osička z Mezinárodního politologického ústavu Masarykovy univerzity.

„Vedle nainstalovaného výkonu jsou klíčové multiplikační efekty,“ pokračuje Osička. „Ze stavby reaktoru totiž těží například vědecké instituce nebo těžký průmysl, který se tak dostane na vyšší úroveň.“

## Tři krize: Three Mile Island, Černobyl a Fukušima

Do poloviny osmdesátých let se celosvětový výkon jaderných elektráren každoročně zvedl přibližně o desetinu. Po havárii Černobylu se na dvě desetiletí růst jaderné kapacity téměř zastavil.

Černobyl je nicméně jen jednou z příčin. Na Západě známější a pro atomový průmysl podstatnější byla vážná havárie americké elektrárny Three Mile Island z roku 1979. Po ní se zpřísnily bezpečnostní regulace, což nastartovalo trend, který trvá dodnes: vysoké investiční náklady a průtahy stavby.

Zkušenosti ze sedmdesátých let, kdy se do provozu dostaly první velké jaderné elektrárny, navíc ukázaly, že se ekonomicky příliš nevyplatí. Vlivem konstrukčních a designových chyb docházelo k častým odstávkám. Generační obměna u jaderných technologií trvá přibližně dvacet let, takže se další generace měla stavět v devadesátých letech. Po zkušenostech s tou předchozí ale většina zemí od stavby upustila.

Mimochodem, jediné dvě elektrárny ve východním bloku, které se začaly stavět po Černobylu, jsou český Temelín a slovenské Mochovce. Konstrukce Temelína začala v roce 1987; první blok začal dodávat elektřinu v roce 2000, druhý o dva roky později.

<wide>
	<div><img src="https://dev.datarozhlas.cz/jadro-love/fotky/clanek/globalni-vykon.jpg" style="max-width: 100%"></div>
</wide>

_Zdroj: [CarbonBrief](https://www.carbonbrief.org/mapped-the-worlds-nuclear-power-plants) pod licencí [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode). Data: [IAEA](https://www.iaea.org)_

Téma bezpečnosti jaderné energetiky se vrátilo v roce 2011 po katastrofě v japonské Fukušimě. Tentokrát ovšem havárie neznamenala jen omezení výstavby, vedla k předčasnému odstavení řady reaktorů.

Ve stejném roce spustili Němci _[energiewende](http://oenergetice.cz/elektrina/energiewende-a-jeji-cile/)_, energetický obrat. Rozhodli, že do roku 2022 budou odstaveny všechny reaktory, stornovali plány na ty budoucí a přeorientovali se na obnovitelné zdroje. Ty mají do roku 2050 vyrábět osmdesát procent německé elektřiny.

Fukušima Němcům posloužila jako startovní výstřel pro změny, které připravovali od devadesátých let. Klíčovou roli hrála dohoda vlády a provozovatelů atomových elektráren o jejich postupném konci už z roku 2002, známá jako _atomkonsens_. Fukušimská havárie nicméně přidala ambicióznější cíle, včetně rychlého odstavení jádra.

Podle odpůrce jádra Mycle Schneidera se orientace na obnovitelné zdroje vyplatí už teď. „V USA, kde jsou k dispozici nejlepší data, stojí výroba z jaderných reaktorů v průměru 35 dolarů za megawatthodinu,“ uvedl v rozhovoru pro týdeník Respekt. „To je jen provoz, tedy náklady na výrobu a údržbu již hotového a zaplaceného reaktoru. U nových bloků by cena byla samozřejmě mnohem vyšší, aby se zaplatila stavba. Kvůli tomu se také u dvou ze čtyř nově chystaných amerických reaktorů stavba zastavila – náklady se vymkly kontrole a dodavatel, firma Westinghouse, vyhlásil bankrot.“

„Vedle toho máte solární zdroje, kde se investoři spokojí i s 20 dolary za megawatthodinu. Pravda, to se týká velkých parků v arabské poušti, ale tyto náklady rok od roku klesají. V USA už se dostávají pod 35 dolarů, tedy pod úroveň, o níž jsem mluvil u existujících jaderných bloků, které tím pádem už ztrácejí konkurenceschopnost,“ dodává Schneider.

Reakce na havárie a ekonomické komplikace je vidět také na podílu jádra na celosvětové produkci elektřiny. Jádro bylo na vrcholu polovině devadesátých let – v době, kdy se do sítě připojily jaderné elektrárny rozestavěné před Černobylem a většina reaktorů byla ve středních letech. Tehdy z jádra pocházela téměř pětina celosvětové produkce. Od té doby jeho podíl vytrvale klesá.

<wide>
	<div><img src="https://dev.datarozhlas.cz/jadro-love/fotky/clanek/podil-jadra.jpg" style="max-width: 100%"></div>
</wide>

_Zdroj: [CarbonBrief](https://www.carbonbrief.org/mapped-the-worlds-nuclear-power-plants) pod licencí [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode). Data: [IAEA](https://www.iaea.org)_

## Francie, Spojené státy, Spojené království: napodobí Německo?

Podobné rozhodnutí jako Německo čeká řadu dalších zemí. Především ty, které se v šedesátých a sedmdesátých letech spolehly na jádro. Při obvyklé padesátileté životnosti reaktoru to znamená, že teď začínají dosluhovat a musejí přemýšlet, jak získávat elektřinu v dalších desetiletích.

Celosvětově největší a také nejstarší jaderný park mají Spojené státy. Francie zase z jádra donedávna získávala tři čtvrtiny vyrobené elektřiny. Jenže právě Francie v minulých letech odstavila velkou část své atomové kapacity a s výjimkou problematického Flamanville nestaví nové.

„Ve srovnání s tím německým je francouzský jaderný průmysl více podporován veřejností a žije v mnohem větší symbióze se státními orgány. Německou cestu tak Francouzi zvolí pravděpodobně až v okamžiku, kdy to bude finančně výhodné.“

Zmíněná Areva po havárii ve Fukušimě přerušila práce na rozestavěných reaktorech, dodnes se jí nepodařilo žádný z nich zprovoznit. Následné finanční problémy firmu přivedly téměř ke krachu, zachránila ji francouzská vláda integrací s dalším energetickým gigantem Électricité de France. Další konstruktér atomových zařízení, americký Westinghouse, takové štěstí neměl: při stavbě šesti nových amerických reaktorů se vyčerpal a zkrachoval.

<wide>
	<div><img src="https://dev.datarozhlas.cz/jadro-love/fotky/clanek/stari-reaktoru.jpg" style="max-width: 100%"></div>
</wide>

## Česko: kam po uhlí?

Podobné rozhodnutí čeká také Česko. Nejprve po roce 2022 doslouží většina uhelných elektráren.

„Zavřené uhelné elektrárny nám jádro nahradit nepomůže, na to je to příliš brzy,“ říká Jan Osička z Mezinárodního politologického ústavu Masarykovy univerzity. „V tomhle období ale bude kapacita elektráren ve střední Evropě stále dostatečná. Propojení přenosové soustavy a propojený trh znamená, že můžeme krátkodobě dovézt elektřinu z okolních zemí.“

V současné době navíc Česko elektřiny vyrábí nadbytek, téměř pětinu energie vyveze.

Další potíž nastane v roce 2035, kdy s největší pravděpodobností doslouží Dukovany. A právě k tomuhle datu požaduje energetická koncepce spuštění nových reaktorů, které by je dokázaly přinejmenším nahradit.

Pokud ovšem mají nové bloky skutečně dodávat elektřinu „už“ za sedmnáct let, je třeba začít je připravovat co nejdříve. Celý proces – od počátku schvalování po zapojení do sítě – totiž běžně zabere dvě desetiletí. Příklady tří evropských zemí ukazují, že v posledních letech se navíc podstatně prodlužují.

Třetí blok severofrancouzské elektrárny Flamanville se začal stavět v roce 2007, dokončený měl být o pět let později a stát měl 3,3 miliardy eur. Po sérii komplikací a výrobních vad bylo spuštění několikrát odloženo. Aktuální termín je konec roku 2018, cena vyrostla na 10,5 miliardy eur.

Také u finské elektrárny Olkiluoto se náklady zvedly trojnásobně. Třikrát se protáhla i stavba, z pěti na současných čtrnáct let, a na spuštění se stále čeká.

Poslední rozestavěnou atomovou elektrárnou v Evropě jsou slovenské Mochovce: zakonzervovanou stavbu z osmdesátých let vláda oživila v roce 2008 a energii mělo dodávat do pěti let. Zatím se stavba protáhla na deset let a cena se zvedla na dvojnásobek.

Prodražování a prodlužování konstrukce není u nukleárních konstrukcí nic výjimečného: data Mezinárodní agentury pro atomovou energii ukazují, jak se v západních zemích délka stavby postupně zvyšovala.

<wide>
	<div><img src="https://dev.datarozhlas.cz/jadro-love/fotky/clanek/doba-konstrukce.jpg" style="max-width: 100%"></div>
</wide>

_Zdroj: [CarbonBrief](https://www.carbonbrief.org/mapped-the-worlds-nuclear-power-plants) pod licencí [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode). Data: [IAEA](https://www.iaea.org)_

Prvnímu výkopu navíc předchází ještě licenční proces a hledání investora, takže celkem proces obvykle zabere 15 až 25 let. Demokratické země navíc řeší řadu problémů, které autokracie nemusejí: mají větší potíže se sháněním investičního kapitálu, obhájení ekonomické návratnosti projektu, dodržením pravidel pro veřejné zakázky, přísnými bezpečnostními opatřeními nebo veřejnou kontrolou.

„U většiny lidských činností je učící křivka taková, že každý další kus je lepší nebo levnější,“ vysvětluje Osička. „U jádra je tomu kvůli neexistenci _economies of scale_ (česky _úspory z rozsahu_, pozn. red.) a stále přísnějším bezpečnostním regulacím naopak. Každý další reaktor je dražší.“

Vychází přitom ze [studie](https://www.researchgate.net/figure/Overnight-Construction-Cost-of-US-Nuclear-Power-Reactors-by-Construction-Start-Date_fig8_292964046), která srovnává náklady na stavbu atomových elektráren ve Spojených státech před havárií v Three Mile Island a po ní.

Těžkosti demokratického rozhodování o jádru ilustruje čtyřicet let stará příhoda ze střední Evropy. Figuruje v ní Rakousko, dnešní odpůrce atomové energie. Země v roce 1978 dostavěla reaktor Zwentendorf, ale nikdy jej nezprovoznila. Pod tlakem veřejnosti vláda vyhlásila referendum, ve kterém 50,47 procenta Rakušanů hlasovalo proti spuštění. Projekt za 1,4 miliardy dnešních eur (35 miliard korun) tak rakouská vláda musela dát k ledu.

## Jádro nebo plyn? Experti se neshodnou

„Pokud budeme hledat ekonomickou návratnost, tak se v Evropě ani u nás v současnosti nevyplatí stavět jakýkoliv zdroj, a to nejen jaderný,“ prohlásil loni ředitel jaderné divize ČEZu Bohdan Zronek.

„Elektřina je dnes skutečně tak levná, že se investice do její výroby nevyplatí,“ potvrzuje Osička. „Je ale otázka, jestli stavět zdroj, který se nevyplatí ani za pět, ani za deset, ani za patnáct let.“

Současné nízké ceny elektřiny jsou podle Osičky anomální situace. Přebytek výrobní kapacity elektráren nad spotřebou, který je hlavní příčinou levné elektřiny, je jen dočasný.

„Pro uhelné zdroje totiž platí společná evropská pravidla,“ [vysvětluje důvody](http://oenergetice.cz/energetika-v-cr/mozne-scenare-rizika-vyvoje-elektroenergetiky-cesku/) Vladimír Wagner z Ústavu jaderné fyziky Akademie věd. „V Německu dojde k uzavření všech jaderných elektráren a také řady uhelných zdrojů. Uhelné zdroje se odstavily nebo se vyřadí i v celé řadě dalších evropských zemí.“

„Všude po Evropě panovalo v posledních letech období útlumu výstavby zdrojů jiných, než obnovitelných, závislých na počasí,“ dodává Wagner. „Po roce 2022 tak sice budou přebytky produkce v době, kdy intenzivně fouká a svítí, ale pravděpodobně bude problém dovézt elektřinu například v době zimní inverze, kdy bude v Evropě vysoká spotřeba elektřiny a nebude foukat a svítit.“

A právě v tom, jak reagovat na snížení kapacity, se experti neshodnou.

„Český trh není regulovaný státem, takže jakmile klesne kapacita a vyroste cena, soukromí investoři začnou stavět kapitálově nenáročné projekty, pravděpodobně hlavně plynové elektrárny,“ tvrdí Jan Osička.

„Plyn posiluje závislost na Rusku,“ brání se téhle variantě Radek Škoda ze strojní fakulty ČVUT. Doporučuje naopak jádro. „Je čisté, levné a na rozdíl od obnovitelných zdrojů i řiditelné. Při plánované životnosti je oproti jiným alternativám i levnější.“

Jenže závislost na Rusku může způsobovat i stavba reaktoru. Tu dokáže postavit jen několik společností a jen některé mohou stavět v Česku.

„Westinghouse je bankrot, Areva také,“ řekl týdeníku Respekt odpůrce jádra Mycle Schneider. „Číňané ani Korejci nemají k dispozici takový typ technologie, který by měl v Evropě licenci. Takže v podstatě v tuto chvíli nezbývá nikdo jiný než Rusové.“

## Obnovitelné zdroje mění trh. Jádro na něm může mít problém

Rozhodnutí o orientaci české energetiky musejí počítat také s rozvojem obnovitelných zdrojů v Německu. Oba trhy jsou úzce propojené, ten německý je přitom osmkrát větší. Vývoj cen elektřiny v Česku se tak řídí gravitací Německa. [Podle studie o české energetické bezpečnosti](https://www.muni.cz/vyzkum/publikace/1376861) změny cen energie na obou trzích silně korelují.

Německou _energiewende_ doprovází rychlý rozvoj energetických technologií. Část z nich se snaží odstranit hlavní nevýhodu slunečních a větrných elektráren – závislost na počasí. Rozvoj akumulátorů má umožnit skladování velkého množství energie, rozvoj chytrých sítí, které umožní zpětnou vazbu, zase zvýšit efektivitu výroby elektřiny. Ta se zároveň decentralizuje, roste podíl elektřiny z malých zdrojů.

Mění se i rychlost obchodování: dříve se energie obchodovala v dlouhých, například půldenních blocích. Obnovitelné zdroje podporují obchod v krátkých úsecích, v současnosti i čtvrthodinách. Její cena se mění například na základě krátkodobé předpovědi počasí. Jaderné energetice vyhovují dlouhé bloky a pomalé obchodování.

„Nový reaktor by vstoupil na tenhle proměněný trh,“ předpovídá Osička. „Je to obrovské riziko: netušíme, jak ten trh bude vypadat. S jadernou energetikou pravděpodobně nebude příliš kompatibilní.“

„Je to investice na desítky let,“ obhajuje vyšší riziko Škoda. „Proto je potřeba mít investora s dlouhým horizontem, tedy stát. Nikoliv spekulanty – viz solární elektrárny – či privátní korporace.“

Okopírovat německý model podle Vladimíra Wagnera nestačí. „Česká republika má relativně velmi omezené možnosti pro všechny nízkoemisní zdroje, kromě jádra. Jak ve větru, slunci, biomase i vodě jde u každého z nich vždy jen o potenciál několika procent požadované produkce elektřiny. Celkově tak těžko dosáhnou i jen poloviny potřeb. Pokud by Česká republika chtěla relativně rychle nahradit fosilní zdroje a intenzivně přispět k nízkým emisím v Evropě, musela by postavit několik nových jaderných bloků.“

„Pokud bychom využili našich zkušeností a tradice v oblasti jaderné energetiky pro její rozšíření například v Polsku, mohli bychom velmi významně přispět ke snížení emisí v regionu,“ dodává Wagner.“

Šance, že se skutečně podaří nové jaderné bloky v Česku postavit, je podle Škody spojená s osobou, která výsledek garantuje. „Pokud vláda jmenuje ministra, který bude za stavbu elektrárny přímo odpovědný, tak věřím, že se stavět bude. Různé výbory a zmocněnci v posledních deseti letech se ukázali jako marnost nad marnost.“