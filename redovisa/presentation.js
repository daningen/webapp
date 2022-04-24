'use strict';
/* global menu*/

var presentation = (   function () {
    //topMenu

    var showMenu = (function (selected) {
        console.log("in presentation.showMenu and selected is " +selected);
        menu.showMenu("people");


        window.mainContainer.innerHTML = "";
        //window.navigation.innerHTML = "";

        var title = document.createElement("h1");


        title.className = "title";
        title.textContent = "Redovisning";

        var greeting = document.createElement("p");

        greeting.textContent = "Välj rätt länk nedan";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        //var btn = document.createElement("BUTTON");

        //btn.innerHTML = "KMOM01";
        console.log("in redovisning");

        var navElements = [
            {name: "kmom01", class: "redov", nav: showKmom01},
            {name: "kmom02", class: "redov", nav: showKmom02},
            {name: "kmom03", class: "redov", nav: showKmom03},
            {name: "kmom04", class: "redov", nav: showKmom04},
            {name: "kmom05", class: "redov", nav: showKmom05},
            {name: "kmom06", class: "redov", nav: showKmom06}];

        navElements.forEach(function (element) {
            var btn = document.createElement("BUTTON");

            btn.className = "button blue-button";

            btn.innerHTML = element.name;

            window.mainContainer.appendChild(btn);
            window.rootElement.appendChild(window.mainContainer);

            console.log("skapa lyssnare för varje element i navigeringen längst ner");
            btn.addEventListener("click", element.nav);
        });
        // console.log("before appendChild in menu.showNavBar");
        // window.rootElement.appendChild(window.topNavigation);
        // window.rootElement.appendChild(window.navigation);
        //
    });

    var showKmom01 = (function () {
        console.log("in presentation.showKmom01 selected is ");
        //window.navigation.innerHTML ="";
        menu.showMenu("people");
        window.mainContainer.innerHTML ="";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "KMOM01";
        window.mainContainer.appendChild(title);

        var question1 = document.createElement("h4");
        var question2 = document.createElement("h4");
        var question3 = document.createElement("h4");
        //var question4 = document.createElement("h4");
        var answer1 = document.createElement("p");
        var answer2 = document.createElement("p");
        var answer3 = document.createElement("p");
        //var answer4 = document.createElement("p");

        question1.textContent = "Är du sedan tidigare bekant med utveckling av mobila appar? ";
        window.mainContainer.appendChild(question1);

        answer1.textContent = "Nej, detta är första gången. Är endast bekant med " +
        "javasceript, html och css så det ska bli spännande att sätta ihop " +
        "detta till en app. Jag har kommit i kontakt med nodejs och gissar " +
        " att detta jag får fördjupa mig i detta under Denna kurs. ";
        window.mainContainer.appendChild(answer1);

        question2.textContent = "Vilket är den viktigaste lärdomen du gjort om " +
        "typografi för mobila enheter?";
        window.mainContainer.appendChild(question2);

        answer2.textContent = "Lite smått och gott från allt möjligt, just det där " +
        " med radhöjd och avstånd är intressant och något som jag tänker på " +
        "när jag gör andra typer av presentationer i tex powerpoint.";
        window.mainContainer.appendChild(answer2);

        question3.textContent = "Du har i kursmomentet hämtat data från två  " +
        "stycken API. Hur kändes detta?";
        window.mainContainer.appendChild(question3);

        answer3.textContent = "jag fokuserade främst på fetch då detta verkar " +
        "vara det som rekommenderas just nu. Den biten fungerade bra. Jag hade" +
        " andra typer av problem, tex renderingen av min sida och själva " +
        " aktiveringen av valda menyer. I skrivande stund undrar jag också " +
        "hur jag lämpligast får in detta i min prestation.js. Om det går att " +
        " baka in innehållet från denna sida i mitt javascript";
        window.mainContainer.appendChild(answer3);
        //menu.showMenu("people");
    });

    var showKmom02 = (function () {
        console.log("in presentation.showKmom02 selected is ");
        menu.showMenu("people");
        window.mainContainer.innerHTML ="";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "KMOM02";
        window.mainContainer.appendChild(title);

        var question1 = document.createElement("h4");
        var question2 = document.createElement("h4");
        var question3 = document.createElement("h4");
        var question4 = document.createElement("h4");
        var question5 = document.createElement("h4");
        //var question4 = document.createElement("h4");
        var answer1 = document.createElement("p");
        var answer2 = document.createElement("p");
        var answer3 = document.createElement("p");
        var answer4 = document.createElement("p");
        var answer5 = document.createElement("p");

        question1.textContent = "Vilka fördelar ser du med verktyg som Postman, curl och jq? ";


        answer1.textContent = "Postman gillar jag direkt framför allt är det lättanvänt och" +
        "det hjälper mig att förstå innehållet för de apier jag använder. " +
        "Dessutom gillar jag att mina frågor sparas undan för " +
        " återanvändning. Jag inser att jag " +
        "än så länge bara nosar lite på ytan.  " +
        " Curl har jag inte använt i detta moment men ser definitivt fördelar med att enkelt " +
        "kunna hämta hem innehållet och gör något med det." +
        " jq var framförallt roligt att jobba med, som alltid med dessa typer av script " +
        "går det snabbt att komma igång och göra kraftfulla saker. Med verktyget fick jag bra " +
        "kunskap om innehåll och struktur på det data jag hämtade. Skulle vara bra att använda " +
        "det tillsammans med javascript-";

        window.mainContainer.appendChild(question1);
        window.mainContainer.appendChild(answer1);

        question2.textContent = "Fick du till en bra struktur i din CSS/SASS kod? ";

        answer2.textContent =  "Absolut bättre än innan. Jag följde exemplet och det funkade " +
        "bra. Behöver dock praktisera mera innan jag behärskar det.";
        window.mainContainer.appendChild(question2);
        window.mainContainer.appendChild(answer2);



        question3.textContent = "Vilka fördelar ser du med verktyg som webpack och SASS? ";

        answer3.textContent = "Ovant men bra med lite struktur, återigen behöver jag vänja mig." +
        "och få rätt på kompileringen. När dettta väl blev rätt tycker jag att det känns bra. " +
        "Möjligen lite svårare med felsökningen. Gillade också iden med att kunna lägga " +
        "till egna " +
        "variabler, denna gång blev det lite copypaste men jag förstår principen";
        window.mainContainer.appendChild(question3);
        window.mainContainer.appendChild(answer3);

        question4.textContent = "Valda du flat design eller ej för dina knappar? Varför? ";
        answer4.textContent = "Valde flat, gillar det enkla men lade inte så mycket energi på " +
        "detta då jag hade fullt upp med att få ordning." +
        "Tycker d,ock inte att min design är snygg och hoppas få tillfälle att bättre på under " +
        "kursen.";
        window.mainContainer.appendChild(question4);
        window.mainContainer.appendChild(answer4);


        question5.textContent = "Vilken är din TIL för detta kmom? ";
        answer5.textContent = "Jag missade vad TIL betyder men utmaningarna har varit flera." +
        "Bla fick jag lära mig lite om att inte skriva över variabler och att det blir mycket" +
        "svårt att hitta detta fel när det inträffar. Här fick jag bra hjälp när jag väl " +
        " frågade gitter. tack för det.  " +
        "Blev lite bättre på callback, det klickade när jag förstod det." +
        "Postman och get av data, här trodde jag att jag skulle kunna selektera ut genom att " +
        " vilkora datat ungefär som man gör i en vanlig sqlsats. Jag försökte kontrollera mina " +
        "ändringar från uppdaterad plocklista här. Men kom runt på annat sätt";
        window.mainContainer.appendChild(question5);
        window.mainContainer.appendChild(answer5);
    });

    var showKmom03 = (function () {
        console.log("in presentation.showKmom03 selected is ");
        menu.showMenu("people");
        window.mainContainer.innerHTML ="";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "KMOM03";
        window.mainContainer.appendChild(title);

        var question1 = document.createElement("h4");
        // var question2 = document.createElement("h4");
        // var question3 = document.createElement("h4");
        // var question4 = document.createElement("h4");
        // var question5 = document.createElement("h4");
        //var question4 = document.createElement("h4");
        var answer1 = document.createElement("p");
        // var answer2 = document.createElement("p");
        // var answer3 = document.createElement("p");
        // var answer4 = document.createElement("p");
        // var answer5 = document.createElement("p");

        question1.textContent = "Kort reflektion om kursmomentet, såg inga frågor i uppgiften ";

        answer1.textContent = "En riktigt bra övning där jag nu fått bättre förståelse " +
        "för ramverket mithril, hur modeller och vyer samverkar och hur man bygger formulär. " +
        "Som vanligt är det lätt att köra fast men när jag vågar be om hjälp har jag fått snabb " +
        " hjälp, detta är verkligen kul. Mycket av min kod är kopierat men för att få ihop " +
        "det bra har jag ägnat många timmar till att förstå hur allt hänger ihop. Även om mitt " +
        " formulär ännu inte är så vackert, har jag blivit mycket bättre på att använda det " +
        "stöd som finns i webbläsaren till att justera min layout. Fortfarande har jag en del " +
        "space som jag inte vill ha i mitt formulär och jag vet inte hur jag ska ta bort " +
        " det men det klarnar kanske i nästa moment. Formuläret funkar men det tog " +
        "tid innan jag lyckades få ihop min insert och uppdateringen av stock. " +
        "Tror att jag blandade ihop put och post. Postman blir mer och mer användbart till " +
        " att verifiera och felsöka. Mitt TIL är nog helheten hur man sätter ihop hela " +
        "appen och just det där med att dela upp i flerq filer. Just min css styling känns " +
        "inte längre bara som en stor okontrollerad massa. ";


        window.mainContainer.appendChild(question1);
        window.mainContainer.appendChild(answer1);
    });

    var showKmom04 = (function () {
        console.log("in presentation.showKmom04 selected is ");
        menu.showMenu("people");
        window.mainContainer.innerHTML ="";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "KMOM04";
        window.mainContainer.appendChild(title);

        var question1 = document.createElement("h4");
        var question2 = document.createElement("h4");
        var question3 = document.createElement("h4");
        var question4 = document.createElement("h4");
        // var question5 = document.createElement("h4");
        //var question4 = document.createElement("h4");
        var answer1 = document.createElement("p");
        var answer2 = document.createElement("p");
        var answer3 = document.createElement("p");
        var answer4 = document.createElement("p");
        // var answer5 = document.createElement("p");

        question1.textContent = "Vilka utmaningar finns med tabeller i mobila enheter? : ";
        question2.textContent = "Vilka fördelar finns med JWT i jämförelse med " +
        "sessions inloggning? : ";
        question3.textContent = "Hur använde du din kunskap från tidigare kursmoment för " +
        " att göra inloggningsformuläret? : ";
        question4.textContent = "Vilken är din TIL för detta kmom? : ";

        answer1.textContent = "Det blir en hel del kolumner som ska rymmas " +
        "   si tabellen  då vilket gör" +
        " att man behöver scrolla för att se allt data (ej så användarvänligt), " +
        "här passade table-stacked " +
        " bra då jag fick allamina kolumner på rad. Jag tycker dessutom att " +
        "detta blev snyggt och lätt att " +
        " läsa. Försökte få till olika färger på mellan varje rad när jag " +
        "visar enskild faktura mha" +
        " .table-striped tr:nth-of-type(2n)men lyckades ej där. Antar att allt " +
        "ligger i en rad. Annars " +
        "är det generellt en utmaning att få det att se likadant ut på varje " +
        "enhet. Jag hittade bra exempel " +
        "att kopiera och gillar resultatet utan att göra om så mycket.";

        answer2.textContent = "Teoretiskt dvs något som inte aktualiserats i " +
        "denna övning förstår jag att man med " +
        "sessioner kan få problem med skalning. Eftersom sessionen lagras på "+
        "servern (i minnet) kan det bli trångt " +
        "om det finns många samtidiga användare. Detta är ej ett problem med " +
        "JWT då token sparas på klient-sidan. " +
        "Med sessioner lagras information i cookies som kan vara avslaget " +
        "(disabled) i webb-läsaren. JWT använder " +
        "inga cookies, istället skickas token med i varje request. Även om JWT " +
        "rekommenderas är det en större " +
        "mängd data som lagras i token jämfört med det sessionsdata som " +
        "lagras i en cookie ";
        answer3.textContent = "Formuläret från inloggningen gick att återvända " +
        "från tidigare kursmoment, knapparna " +
        "var det bara att kopiera rakt av. Sedan kunde jag återanvända delar av " +
        "navigeringen och det som rör " +
        "routing. Börjar få lite bättre koll på hur routing fungerar nu. Annars " +
        "har jag haft mycket användning " +
        " av att kunna se filmer  som behandlar de olika delarna i momentet " +
        "samt gitter med både direkt " +
        "hjälp samt värdefulla frågor och kodsnuttar från andra deltagare.";
        answer4.textContent = "Att försöka dela upp arbetet i små delar, ta en bit " +
        "i taget och låta det sjunka in. " +
        " Postman blir bara bättre och bättre, den hjälpte mig att förstå och " +
        "verifiera att jag gör rätt. " +
        "Mycket har jag kopierat men jag tror att jag har rätt bra koll på det " +
        "mesta jag gjort nu under detta moment. " +
        " Ibland är det frustrerande när jag upplever att det som nyss funkade " +
        "inte funkar alls och får svårt " +
        "att se om min reloads verkligen tar. Jag har fått lägga mycket tid på " +
        "felsökning i min kod. " +
        "Jag har lärt mig lite nytt i varje steg i denna övning, allt från att skapa en token " +
        "till att verifiera att den finns. ";


        window.mainContainer.appendChild(question1);
        window.mainContainer.appendChild(answer1);
        window.mainContainer.appendChild(question2);
        window.mainContainer.appendChild(answer2);
        window.mainContainer.appendChild(question3);
        window.mainContainer.appendChild(answer3);
        window.mainContainer.appendChild(question4);
        window.mainContainer.appendChild(answer4);
    });

    var showKmom05 = (function () {
        console.log("in presentation.showKmom05 selected is ");
        menu.showMenu("people");
        window.mainContainer.innerHTML ="";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "KMOM05";
        window.mainContainer.appendChild(title);

        var question1 = document.createElement("h4");
        var question2 = document.createElement("h4");
        var question3 = document.createElement("h4");
        var question4 = document.createElement("h4");
        var question5 = document.createElement("h4");
        //var question4 = document.createElement("h4");
        var answer1 = document.createElement("p");
        var answer2 = document.createElement("p");
        var answer3 = document.createElement("p");
        var answer4 = document.createElement("p");
        var answer5 = document.createElement("p");
        // var answer5 = document.createElement("p");

        question1.textContent = "Vilka fördelar ser du med att göra appar med " +
        "Cordova om du jämför med rena webbapplikationer? : ";
        question2.textContent = "Har du möjligheten att köra dina appar på en " +
        "fysisk enhet? Vilka testmöjligheter ger detta? ";

        question3.textContent = "Gick det bra att skapa en logga och " +
        "splashscreen? ";

        question4.textContent = "Beskriv designprocessen för att efterlikna " +
        "den mobila plattformen du bygger din app för? : ";

        question5.textContent = "Vilken är din TIL för detta kmom? ";


        answer1.textContent = "Det verkar vara ett enkelt ramverk om "+
        "man vill börja utveckla sina webb-applikationer så att dessa " +
        "fungerar bra oavsett vilken mobil enhet man nu föredrar. " +
        "Jag behöver inte ändra min kod utan kan kopiera rakt av det " +
        "som är html, css och " +
        "javascript. Jag fick igång min app ganska snabbt där allt verka" +
        "fungera som innan. Undantag, mina hämtade ikoner som jag inte" +
        "lyckades få fram. Vet ej vad detta beror på men nöjde mig" +
        "med att övrigt fungerade";

        answer2.textContent = "Nej, jag simulerade den som i en ios med " +
        "emulatorn och verktyget xcode som fungerade utmärkt. Det tog dock ett" +
        "tag att få igång applikationen men det berodde nog främst på att" +
        "jag inte läste dokumentationen ordentligt.";

        answer3.textContent = "Så där, jag testade att skapa en med " +
        "föreslaget verktyg. Först förstod jag inte skillnaden mellan ikon " +
        "och splash (använde samma bild för båda i slutet)." +
        "Abiro PhoneGap Image Generator, fungerade bra men jag fick problem" +
        "med att hitta mina bilder i som jag pekade ut i index.html. Fick" +
        "prefixa med www i sökvägen för att få det att fungera. ";

        answer4.textContent = "Jag har inte ändrat mycket för den mobila " +
        "enheten, den ser ut som innan. Ändå en överväldigande känsla" +
        "att få fram den som en app i en simulerad enhet.";

        answer5.textContent = "Jag lärde mig både vad splashscreen " +
        "är för något och att jag behöver en ikon. Funderade på" +
        "om jag skulle köra enligt android-exemplet då mest fokus i" +
        "lektionsmaterialet handlade om denna. Men som mac-användare" +
        "fick det ändå bli IOS. Det är ganska många bitar, olika" +
        "ramverk som behövs och det behövs en del praktik för att förstå" +
        "hur dessa samverkar. Det sista jag lärde mig var att jag behövde" +
        "komplilera om min kod för IOS när jag var klar. Får se om" +
        "allt klarnar ytterligare i nästa övning. Jag behöver få" +
        "bättre kontroll på filstruktur, var jag ska lägga min css " +
         "osv. Risken finns att jag dubblerar för att få det att funka" +
         "istället för att lägga allt på rätt ställe.";


        window.mainContainer.appendChild(question1);
        window.mainContainer.appendChild(answer1);
        window.mainContainer.appendChild(question2);
        window.mainContainer.appendChild(answer2);
        window.mainContainer.appendChild(question3);
        window.mainContainer.appendChild(answer3);
        window.mainContainer.appendChild(question4);
        window.mainContainer.appendChild(answer4);
        window.mainContainer.appendChild(question5);
        window.mainContainer.appendChild(answer5);
    });

    var showKmom06 = (function () {
        console.log("in presentation.showKmom05 selected is ");
        menu.showMenu("people");
        window.mainContainer.innerHTML ="";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "KMOM06";
        window.mainContainer.appendChild(title);

        var question1 = document.createElement("h4");
        var question2 = document.createElement("h4");
        var question3 = document.createElement("h4");
        var question4 = document.createElement("h4");

        //var question4 = document.createElement("h4");
        var answer1 = document.createElement("p");
        var answer2 = document.createElement("p");
        var answer3 = document.createElement("p");
        var answer4 = document.createElement("p");

        // var answer5 = document.createElement("p");

        question1.textContent = "VVilka fördelar ger Cordova plugins?";

        question2.textContent = "Fick du till ett bra gränssnitt med kartan? ";

        question3.textContent = "Vilka effekter gav animationer och övergångar? ";

        question4.textContent = "Vilken är din TIL för detta kmom?";



        answer1.textContent = "Det finns många fördelar där jag nu endast " +
        "känt lite på ytan. Det är ganska enkelt att använda sig av olika " +
        "plugins. GPS är ju ett exempel, kameran som jag inte testat ett annat.";

        answer2.textContent = `Ja, till slut blev det ganska bra, jag fick det
         att se likadant ut både i min IOS emulator och när jag körde den med
         cordova. Gitter tillsammans med kodexempel både från kursen och
         från gitter har varit ovärderligt. Märker att jag fuskar i början
         med det slutar ändå alltid med att jag får granska varje kod-rad
         och konfiguration för att få det att bli rätt.`;

        answer3.textContent = `Tanken är väl att det ska ge ett mera native
        intryck. Men för egen del blev det en hel del felsökning. Det är
        ju häftigt och inspirerande när det funkar och det ser lite
        proffsigt ut. Men jag lekte lite med css där jag både ändrar
        färg och storlek vid hovring. Ganska roligt men sidan blir kanske
        inte så snygg. Själva animationen lyckades delvis, dvs den
        flyttar sig rätt åt ena hållet men går inte tillbaka när jag
        byter vy. Jag ägnade massor av timmar med att försöka få till
        det och förstår från gitter att många har slitit hårt för att
        få till det med delade resultat. Testade med att ändra i
        routingen enligt förslag men det blev inte bättre. Verkar
        vara lite så där synk mellan mithril och animationer. Nåja, jag
        låter animationen vara kvar med en karta som hamnar fel men som
        blir rätt när jag swipar. Den får ligga som den är ifall jag
        får tillfälle att laborera vidare.`;

        answer4.textContent = `Jag fick lägga ner massor av tid på en massa
        runt-omkring-funktionalitet. Css var trixigt när jag kompilerade,
        till slut bytte jag helt namn på min motagar css och då funkade det.
        Funderade på om ändringarna inte tog för att jag hade filen öppnad.
        xCode var också en utmaning att få till, fastän det funkat i tidigare
        övning. Det slutade med att jag fick ladda ner en beta-version för att
        få ordning på det.Det sista jag gjorde var att validera och där
        krånglade min html-fil. Jag hade problem att få till hämtade
        ikoner, nu fick jag till slut till det och är rätt nöjd över det.`;




        window.mainContainer.appendChild(question1);
        window.mainContainer.appendChild(answer1);
        window.mainContainer.appendChild(question2);
        window.mainContainer.appendChild(answer2);
        window.mainContainer.appendChild(question3);
        window.mainContainer.appendChild(answer3);
        window.mainContainer.appendChild(question4);
        window.mainContainer.appendChild(answer4);
    });

    return {
        showMenu: showMenu,
        //showMenu: showMenu,
        showKmom01: showKmom01,
        showKmom02: showKmom02,
        showKmom03: showKmom03,
        showKmom04: showKmom04,
        showKmom05: showKmom05,
        showKmom06: showKmom06,
    };
}   ) (presentation);
