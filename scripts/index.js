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