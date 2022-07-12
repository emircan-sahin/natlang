// url => https://www.limasollunaci.com/ingilizce-kelimeler-en-cok-kullanilan-1000-kelime-ve-cumle

// var arr = [];

// $('table:eq(0) tr').each(function(i){
//     var en = $(`table:eq(0) tr:eq(${i}) td:eq(1)`).text();
//     var tr = $(`table:eq(0) tr:eq(${i}) td:eq(2)`).text();

//     arr.push(tr + '|' + en);
// });

// console.log(arr);

const app = new Vue({
    el: '#app',
    data: {
        words: {
            colors: [
                "kırmızı|red",
                "mavi|blue",
                "sarı|yellow",
                "mor|purple",
                "pembe|pink",
                "kahverengi|brown",
                "koyu mavi|dark blue"
            ],
            vegetables: [
                "havuç|carrot",
                "salatalık|cacumber",
                "domates|tomato",
                "patates|potato",
                "soğan|onion",
                "ıspanak|spinach"
            ],
            days: [
                "pazartesi|monday",
                "salı|tuesday",
                "çarşamba|wednesday",
                "perşembe|thursday",
                "cuma|friday",
                "cumartesi|saturday",
                "pazar|sunday",
            ],
            adverbs: [
                "mükemmel|excellent",
                "nasıl?|how?",
                "ne zaman?|when?",
                "ne sıklıkla?|how often?",
                "ne zamandır?|how long?",
                "her zaman|always",
                "genellikle|usually",
                "sık sık|often",
                "bazen|sometimes",
                "nadiren|seldom",
                "asla|never",
            ],
            general: [
                "Merhaba|Hello",
                "Hoş geldiniz|Welcome",
                "Hoşça kalın|Goodbye",
                "Günaydın|Good morning",
                "İyi günler|Have a good day",
                "İyi akşamlar|Good evening",
                "İyi geceler|Good nights",
                "Güle güle|Goodbye",
                "Allahaısmarladık|Goodbye",
                "Bugün|Today",
                "Bu sabah|This morning",
                "Bu akşam|This evening",
                "Bu gece|Tonight",
                "Dün|Yesterday",
                "Önceki gün|One day before",
                "Dün gece|Yesterday night",
                "Sabah|Morning",
                "Öğlen|At noon",
                "Öğleden sonra|Afternoon",
                "Akşam|Evening",
                "Gece|Night",
                "Bay|Mr",
                "Bayan|Miss/ Mrs",
                "Bebek|Baby",
                "Çocuk|Child",
                "Genç|Young",
                "Yaşlı|Old",
                "Evli|Married",
                "Bekar|Single",
                "Boşanmış|Divorced",
                "Benim adım Ayşe|My name is Ayse",
                "Sizin adınız nedir?|What is your name?",
                "Memnun oldum|Nice to meet you",
                "Nasılsınız?|How do you do? / How are you?",
                "İyiyim, teşekkür ederim, ya siz?|Fine, thanks and you?",
                "Bekar mısınız?|Are you single?",
                "Ne iş yapıyorsunuz?|What is your job?",
                "Ne kadar süredir bu işi yapmaktasınız?|How long have you been doing this job?",
                "Nerede yaşıyorsunuz?|Where do you live?",
                "Kaç kardeşsiniz?|How many brothers or sisters have you got?",
                "Yaşınız?|How old are you?",
                "Hangi sporu yapıyorsunuz?|What sport do you do?",
                "Çok güzelsiniz.|You are very beautiful.",
                "Gözleriniz çok güzel.|Your eyes are very nice.",
                "Sizden hoşlandım.|I like you very much.",
                "Ben de sizden hoşlandım.|I like you, too.",
                "Benimle yemeğe çıkar mısınız?|Would you like to have a meal with me?",
                "Evet|Yes",
                "Hayır|No",
                "Tamam|Okey /all right",
                "Tabii ki|Sure",
                "Elbette|Of course",
                "Haklısınız|You are right",
                "Teşekkür ederim|Thank you",
                "Affedersiniz|Pardon / Excuse me",
                "Özür dilerim|Excuse me",
                "Rica ederim|You are welcome",
                "Yardım edin|Help me",
                "Çekiniz|Pull",
                "İtiniz|Push",
                "Otomatik kapı|Automatic door",
                "Yürüyen merdiven|Escalator",
                "Merdiven|Stairs",
                "Asansör|Elevator",
                "Ben Türküm.|I am Turkish.",
                "Nerelisiniz?|Where are you from?",
                "İsveçliyim.|I am Swedish.",
                "Alman|German",
                "İngiliz|English",
                "Fransız|French",
                "Amerikalı|American",
                "İspanyol|Spanish",
                "Belçikalı|Belgian",
                "Brezilyalı|Brazilian",
                "Norveçli|Norwegian",
                "Danimarkalı|Danish",
                "Rus|Russian",
                "Arjantinli|Argentinian",
                "Japon|Japanese",
                "Çinli|Chinese",
                "Mısırlı|Egyptian",
                "Kanadalı|Canadian",
                "Hollandalı|Dutch",
                "Bulgar|Bulgarian",
                "Yunanlı|Greek",
                "Burada|Here",
                "Orada|There",
                "Şurada|Over there",
                "Önünde|In front",
                "Arkasında|Behind",
                "Sağında|On the right",
                "Solunda|On the left",
                "Uzağında|Far",
                "Yakınında|Near",
                "Aşağıda|Down",
                "Yukarıda|Up",
                "Küçük|Small",
                "Büyük|Big",
                "Orta|Medium",
                "Uzun|Long",
                "Kısa|Short",
                "Geniş|Large",
                "Dar|Narrow",
                "İnce|Thin",
                "Ne?|What",
                "Neden?|Why?",
                "Nasıl?|How?",
                "Hangi?|Which",
                "Kim?|Who?",
                "Ne zaman?|When?",
                "Nerede?|Where?",
                "Ne kadar?|How much?",
                "Kaç tane?|How many?",
                "Kimin için?|For whom?",
                "Saat kaç?|What time is it?",
                "Saat 3.|It is three o’clock.",
                "Saat 3’ü çeyrek geçiyor.|It is a quarter past three.",
                "Saat 3 buçuk.|It is half-past three.",
                "Saat 3’e çeyrek var.|It is a quarter to three.",
                "Saat 2’den sonra.|After two o’clock.",
                "Saat 5’ten önce.|Before five o’clock.",
                "Bugün günlerden hangi gün?| What is the day today?",
                "Bugün 20 Nisan 2007.|Today is twentieth of April 2007.",
                "Mutlu yıllar|Happy years",
                "İyi bayramlar|Have a nice religious festival",
                "Doğum gününüz kutlu olsun.|Have a happy birthday.",
                "Evlilik yıl dönümüz kutlu olsun.|Have a happy marriage anniversary."
            ]
        },
        page: 'Anasayfa',
        questionIndex: 0,
        question: '',
        answers: [],
        category: '',
        mode: '', // tutorial | test
        nextAnswer: false,
        test_finished_answers: 0,
        askedQuestions: []
    },
    mounted: function () {
        if (this.param("mode")) {
            if (this.param("mode") === "test") this.page = "Test";
            if (this.param("mode") === "tutorial") this.page = "Öğretici";
        }

        this.words[this.param("category")] === undefined ? '' : this.category = this.param("category");

        this.param('mode') === undefined ? '' : this.mode = this.param('mode');

        if (this.mode === 'test') {
            const words = [];

            for(var i = 0; i < 10; i++) {
                const stateWordsLength = this.words[this.category].length;
                const word = this.words[this.category][Math.floor(Math.random() * stateWordsLength)];
                words.push(word);
            }

            this.words[this.category] = words;

            // this.words[category] = '';

            this.questionIndex = Math.floor(Math.random() * this.words[this.category].length);
            this.question = this.words[this.category][this.questionIndex].split('|')[0];
            this.refresh_answers();
        }
    },
    methods: {
        goTo: function (_page) {
            this.mode = _page
        },
        param: function (param) {
            let uri = document.documentURI;
            if (!uri.split('=')[1]) return undefined;
            let params = uri.split('=');
            params = params.toString().split('?');
            params = params.toString().split(',');
            if (!params.toString().includes(param)) return undefined;
            if (params[params.indexOf(param)] === param) {
                if (params.indexOf('%20') === -1) return params[params.indexOf(param) + 1];
                const _param = params[params.indexOf(param) + 1].replace(/%20/g, ' ');
                return _param;
            } else {
                return undefined;
            }
        },
        findWithAttr: function (array, attr, value) {
            for (var i = 0; i < array.length; i += 1) {
                if (array[i][attr] === value) {
                    return i;
                }
            }
            return -1;
        },
        speak: function (text) {
            var url = "./voices/" + text + ".mp3";
            $('audio').attr('src', url)[0].play();
        },
        select_answer: function (event) {
            event.target.innerText !== this.words[this.category][this.questionIndex].split("|")[1] ? this.wrong_answer(event) : this.correct_answer(event);
            console.log(event.target.innerText);
        },
        correct_answer: function (element) {
            // $('.answer').removeClass('btn-danger');
            // $('.answer').removeClass('g-bg-yellow');
            // $('.answer').addClass('btn-outline-dark');
            this.nextAnswer = true;

            $(element.target).addClass('g-bg-yellow g-text-dark');
        },
        wrong_answer: function (element) {
            // $(element.target).removeClass('btn-outline-dark');
            // $(element.target).addClass('btn-danger');
        },
        refresh_answers: function () {
            if (this.askedQuestions.length === this.words[this.category].length) return window.location.href = "./";

            this.nextAnswer = false;
            this.test_finished_answers++;

            $('.answer').removeClass('btn-danger');
            $('.answer').removeClass('g-bg-yellow');
            $('.answer').removeClass('g-text-dark');

            this.questionIndex = Math.floor(Math.random() * this.words[this.category].length);
            this.question = this.words[this.category][this.questionIndex].split('|')[0];

            if (this.askedQuestions.indexOf(this.question) === -1) {
                this.askedQuestions.push(this.question);
                console.log('geçti: ' + this.question);
            } else {
                for (var i = 0; i < 99; i++) {
                    this.questionIndex = Math.floor(Math.random() * this.words[this.category].length);
                    this.question = this.words[this.category][this.questionIndex].split('|')[0];
                    if (this.askedQuestions.indexOf(this.question) === -1) {
                        this.askedQuestions.push(this.question);
                        i = 100;
                        console.log("geçti -> " + this.question);
                    }
                }
            }


            if (this.answers.length > 0) {
                this.answers.splice(0, 4);
            }

            const answer_random = Math.floor(Math.random() * 4);
            for (var i = 0; i < 4; i++) {
                let random = Math.floor(Math.random() * this.words[this.category].length);
                if (i === answer_random) {
                    this.add_answer(this.questionIndex);
                } else if (random !== this.questionIndex && this.findWithAttr(this.answers, 'tr', this.words[this.category][random].split('|')[0]) === -1) {
                    this.add_answer(random);
                } else {
                    for (var j = 0; j < 99; j++) {
                        random = Math.floor(Math.random() * this.words[this.category].length);
                        if (random !== this.questionIndex && this.findWithAttr(this.answers, 'tr', this.words[this.category][random].split('|')[0]) === -1) {
                            this.add_answer(random);
                            j = 100;
                        }
                    }
                }
            }
        },
        add_answer: function (index) {
            this.answers.push({
                tr: this.words[this.category][index].split('|')[0],
                en: this.words[this.category][index].split('|')[1]
            });
        }

    }
});