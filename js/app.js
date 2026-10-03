/* Scripted prototype. No network calls, no API keys. */
(function () {
  "use strict";

  var NOTICE = "https://platformazakupowa.pl/transakcja/1353639";

  var ui = {
    pl: {
      banner: "Prototyp 92 Logics · próbka możliwości · nie jest systemem uczelni ani ofertą w postępowaniu",
      eyebrow: "92 Logics · prototyp",
      title: "Wirtualny Asystent AI",
      subtitle: "Wydział Nauk Społecznych, Uniwersytet Wrocławski. Publiczny moduł dla kandydatów zagranicznych i zamknięty moduł dla studentów zagranicznych.",
      railTitle: "Co pokazuje ten prototyp",
      facts: [
        ["Architektura z ogłoszenia", "Asystent RAG: najpierw cytat z materiału uczelni, potem odpowiedź."],
        ["Moduł publiczny", "Dla zagranicznych kandydatów na studia na Uniwersytecie Wrocławskim."],
        ["Moduł zamknięty", "Dla zagranicznych studentów uczelni. W docelowym systemie — po koncie Microsoft 365."],
        ["Środowisko", "Ogłoszenie umieszcza asystenta we wspólnym Microsoft 365 / Azure zamawiającego."],
        ["Projekt", "(Re)connect with WNS — rekrutacja, wsparcie i (re)integracja obcokrajowców na WNS."]
      ],
      notice: "Postępowanie BZP.272.16.2026.ECS · 2026/BZP 00461387. Realizacja opisana w ogłoszeniu do 30.09.2027. Szczegółowy OPZ nie jest wklejony w ten prototyp.",
      publicName: "Moduł publiczny",
      publicHint: "Kandydaci zagraniczni · bez logowania",
      closedName: "Moduł zamknięty",
      closedHint: "Studenci zagraniczni · podgląd",
      kickerPublic: "Moduł publiczny",
      kickerClosed: "Moduł zamknięty",
      stagePublic: "Kandydat zagraniczny",
      stageClosed: "Student zagraniczny",
      statusPublic: "Otwarty podgląd",
      statusClosed: "Podgląd przykładowy",
      qLabel: "Pytanie do asystenta",
      placeholder: "Wybierz pytanie albo wpisz własne…",
      send: "Wyślij",
      hint: "Odpowiedzi są skryptem. Nic nie wychodzi z tej przeglądarki.",
      reset: "Wyczyść rozmowę",
      you: "Ty",
      bot: "Asystent",
      sample: "Przykładowe źródło · nie jest dokumentem uczelni",
      gateTitle: "Ten moduł jest zamknięty",
      gateBody: "W ogłoszeniu moduł zamknięty jest dla zagranicznych studentów Uniwersytetu Wrocławskiego i działa w środowisku Microsoft 365 zamawiającego. Ten prototyp nie loguje się do żadnego konta i nie łączy się z Azure.",
      gatePoints: [
        "Kandydat zostaje w module publicznym.",
        "Student w docelowym systemie wchodzi kontem uczelni.",
        "Tutaj możesz tylko otworzyć przykładową rozmowę."
      ],
      gateBtn: "Otwórz przykładową rozmowę",
      foot: "Przykładowy student w podglądzie nie jest osobą z uczelni. Treść odpowiedzi nie jest regulaminem UWr."
    },
    en: {
      banner: "92 Logics prototype · a sample of capability · not a university system and not a bid",
      eyebrow: "92 Logics · prototype",
      title: "Virtual AI Assistant",
      subtitle: "Faculty of Social Sciences, University of Wrocław. A public module for foreign candidates and a closed module for foreign students.",
      railTitle: "What this prototype shows",
      facts: [
        ["Architecture in the notice", "A RAG assistant: cite the university’s material first, then answer."],
        ["Public module", "For foreign candidates applying to study at the University of Wrocław."],
        ["Closed module", "For foreign students of the university. In the real system, after a Microsoft 365 sign-in."],
        ["Environment", "The notice places the assistant in the university’s shared Microsoft 365 / Azure."],
        ["Project", "(Re)connect with WNS — recruitment, support and (re)integration of foreigners at WNS."]
      ],
      notice: "Procedure BZP.272.16.2026.ECS · 2026/BZP 00461387. The notice describes delivery through 30 Sep 2027. The detailed specification is not pasted into this prototype.",
      publicName: "Public module",
      publicHint: "Foreign candidates · no sign-in",
      closedName: "Closed module",
      closedHint: "Foreign students · preview",
      kickerPublic: "Public module",
      kickerClosed: "Closed module",
      stagePublic: "Foreign candidate",
      stageClosed: "Foreign student",
      statusPublic: "Open preview",
      statusClosed: "Sample preview",
      qLabel: "Question for the assistant",
      placeholder: "Pick a question or type your own…",
      send: "Send",
      hint: "Answers are scripted. Nothing leaves this browser.",
      reset: "Clear conversation",
      you: "You",
      bot: "Assistant",
      sample: "Sample source · not a university document",
      gateTitle: "This module is closed",
      gateBody: "In the notice, the closed module is for foreign students of the University of Wrocław and runs in the university’s Microsoft 365 environment. This prototype signs in to nothing and does not connect to Azure.",
      gatePoints: [
        "An applicant stays in the public module.",
        "A student, in the real system, would use a university account.",
        "Here you can only open a sample conversation."
      ],
      gateBtn: "Open a sample conversation",
      foot: "The sample student in this preview is not a real university account. Answers are not University of Wrocław rules."
    }
  };

  function block(paragraphs, bullets, card) {
    return { paragraphs: paragraphs, bullets: bullets || null, card: card || null };
  }

  var scripts = {
    public: [
      {
        id: "help",
        keys: ["help", "what can", "pomoc", "pomóc", "w czym", "do what", "potraf"],
        q: {
          pl: "W czym możesz pomóc kandydatowi z zagranicy?",
          en: "What can you help a foreign applicant with?"
        },
        sources: {
          pl: ["Ogłoszenie: moduł publiczny dla kandydatów zagranicznych", "Wydział Nauk Społecznych"],
          en: ["Notice: public module for foreign candidates", "Faculty of Social Sciences"]
        },
        a: {
          pl: block(
            [
              "Jestem podglądem modułu publicznego. W systemie z ogłoszenia ten moduł odpowiada zagranicznym kandydatom na studia na Uniwersytecie Wrocławskim, z Wydziałem Nauk Społecznych jako wydziałem, dla którego asystent jest opisany.",
              "W docelowym rozwiązaniu pytasz własnymi słowami o rekrutację, dokumenty i kolejny oficjalny krok. Odpowiedź powstaje z fragmentu, który asystent znajdzie w materiałach uczelni, a nie z pamięci modelu."
            ],
            [
              "informacja o kierunkach WNS dla kandydatów z zagranicy",
              "lista dokumentów z aktualnego naboru — cytowana, nie wymyślona",
              "odesłanie do miejsca, w którym uczelnia każe złożyć aplikację"
            ]
          ),
          en: block(
            [
              "This is a preview of the public module. In the system described in the notice, that module answers foreign candidates applying to the University of Wrocław, for an assistant built for the Faculty of Social Sciences.",
              "In the real system you ask in your own words about admission, documents, and the official next step. The answer is built from a passage the assistant finds in university material, not from a model’s memory."
            ],
            [
              "programme information for foreign applicants to WNS",
              "the document list in the current call — quoted, not invented",
              "a pointer to where the university says to submit an application"
            ]
          )
        }
      },
      {
        id: "faculty",
        keys: ["faculty", "wydział", "social", "społecz", "wns", "only", "tylko", "uniwersytet", "university", "wrocław", "wroclaw"],
        q: {
          pl: "Czy to asystent tylko dla Wydziału Nauk Społecznych?",
          en: "Is this assistant only for the Faculty of Social Sciences?"
        },
        sources: {
          pl: ["Ogłoszenie: asystent dla Wydziału Nauk Społecznych", "Moduł publiczny obejmuje kandydatów na studia na UWr"],
          en: ["Notice: assistant for the Faculty of Social Sciences", "Public module covers candidates to study at UWr"]
        },
        a: {
          pl: block(
            [
              "Ogłoszenie opisuje wirtualnego asystenta dla Wydziału Nauk Społecznych. Moduł publiczny jest skierowany do zagranicznych kandydatów na studia na Uniwersytecie Wrocławskim, a nie do dowolnego tematu spoza materiałów uczelni.",
              "Jeśli pytanie dotyczy innego wydziału albo sprawy, której nie ma w dopuszczonym zbiorze, asystent ma to powiedzieć wprost zamiast zgadywać."
            ]
          ),
          en: block(
            [
              "The notice describes a virtual assistant for the Faculty of Social Sciences. The public module is aimed at foreign candidates for studies at the University of Wrocław, not at topics outside the university’s material.",
              "If a question is about another faculty, or about a fact that is not in the approved corpus, the assistant is supposed to say so instead of guessing."
            ]
          )
        }
      },
      {
        id: "documents",
        keys: ["document", "dokument", "paper", "załącz", "attachment", "what do i send", "akta", "papers"],
        q: {
          pl: "Jak zapytać o dokumenty aplikacyjne?",
          en: "How do I ask about application documents?"
        },
        sources: {
          pl: ["Wzór cytowania RAG", "Przykładowa karta · nie jest naborem UWr"],
          en: ["RAG citation pattern", "Sample card · not a UWr admissions notice"]
        },
        a: {
          pl: block(
            [
              "Wystarczy zwykłe zdanie, na przykład: „Jakie dokumenty składa kandydat z zagranicy na WNS?”. Asystent RAG szuka w zatwierdzonym zbiorze, pokazuje fragment i nazwę pliku.",
              "Poniżej jest tylko kształt takiej odpowiedzi. Tej listy nie ma w ogłoszeniu i nie wolno jej traktować jako wymagań uczelni."
            ],
            null,
            {
              title: { pl: "WNS — dokumenty kandydata (przykład)", en: "WNS — applicant documents (sample)" },
              body: {
                pl: "„Dołącz dokumenty wymienione w aktualnym ogłoszeniu o naborze. Jeśli ogłoszenie czegoś nie wymienia, nie dopisuj tego.”",
                en: "“Attach the documents named in the current recruitment notice. If the notice does not name something, do not add it.”"
              }
            }
          ),
          en: block(
            [
              "A plain sentence is enough, for example: “Which documents does a foreign candidate send for WNS?”. A RAG assistant searches the approved corpus and shows the passage and the file name.",
              "Below is only the shape of that answer. This list is not in the notice and must not be read as the university’s requirements."
            ],
            null,
            {
              title: { pl: "WNS — dokumenty kandydata (przykład)", en: "WNS — applicant documents (sample)" },
              body: {
                pl: "„Dołącz dokumenty wymienione w aktualnym ogłoszeniu o naborze. Jeśli ogłoszenie czegoś nie wymienia, nie dopisuj tego.”",
                en: "“Attach the documents named in the current recruitment notice. If the notice does not name something, do not add it.”"
              }
            }
          )
        }
      },
      {
        id: "steps",
        keys: ["step", "krok", "admission", "rekrut", "apply", "aplik", "process", "procedur"],
        q: {
          pl: "Pokaż, jak wygląda odpowiedź o krokach rekrutacji.",
          en: "Show what an answer about admission steps looks like."
        },
        sources: {
          pl: ["Moduł publiczny · rekrutacja", "Przykład rozmowy, nie kalendarz naboru"],
          en: ["Public module · recruitment", "A sample conversation, not an admissions calendar"]
        },
        a: {
          pl: block(
            [
              "Tak asystent prowadzi kandydata, gdy znajdzie właściwą stronę. Nie podaję dat, opłat ani zasad wizowych, bo tego nie ma w tym prototypie i nie ma tego w krótkim opisie zamówienia."
            ],
            [
              "Odczytaj aktualną informację dla kandydatów zagranicznych na Uniwersytet Wrocławski i na Wydział Nauk Społecznych.",
              "Zbierz tylko te dokumenty, które ta strona wymienia.",
              "Złóż aplikację kanałem nazwanym na tej stronie.",
              "Gdy czegoś brakuje, wskaż brak i biuro nazwane w źródle. Nie uzupełniaj luki."
            ]
          ),
          en: block(
            [
              "This is how the assistant walks an applicant through a page it has actually retrieved. I am not stating dates, fees, or visa rules: they are not in this prototype, and they are not in the short contract description."
            ],
            [
              "Read the current information for foreign candidates to the University of Wrocław and to the Faculty of Social Sciences.",
              "Collect only the documents that page names.",
              "Submit through the channel that page names.",
              "If something is missing, say what is missing and name the office in the source. Do not fill the gap."
            ]
          )
        }
      },
      {
        id: "gap",
        keys: ["not in", "nie ma", "brak", "invent", "zgad", "don't know", "nie wiesz", "missing", "gap", "pewny"],
        q: {
          pl: "Co jeśli w dokumencie nie ma odpowiedzi?",
          en: "What if the document does not contain the answer?"
        },
        sources: {
          pl: ["Zasada RAG z opisu zamówienia", "Odmowa zgadywania"],
          en: ["RAG rule from the contract description", "Refusal to guess"]
        },
        a: {
          pl: block(
            [
              "Mówię: „Tego nie ma w materiale, z którego mogę korzystać”. Potem wskazuję biuro albo stronę nazwaną w tym materiale. Nie dopowiadam „prawdopodobnej” daty, opłaty ani wykładni przepisu.",
              "To jest różnica, którą opisuje zamówienie: wirtualny asystent oparty na RAG, a nie otwarty czat, który brzmi pewnie bez źródła."
            ]
          ),
          en: block(
            [
              "I say: “That is not in the material I am allowed to use.” Then I point to the office or page named in that material. I do not add a “likely” date, fee, or reading of a rule.",
              "That is the difference the contract describes: a virtual assistant built on RAG, not an open chatbot that sounds sure without a source."
            ]
          )
        }
      },
      {
        id: "language",
        keys: ["language", "język", "jezyk", "english", "polish", "polsku", "angielsku", "bilingual", "dwujęzy"],
        q: {
          pl: "Czy odpowiadasz po polsku i po angielsku?",
          en: "Do you answer in Polish and in English?"
        },
        sources: {
          pl: ["Moduł dla kandydatów zagranicznych", "Dokumenty postępowania są po polsku"],
          en: ["Module for foreign candidates", "The procurement documents are in Polish"]
        },
        a: {
          pl: block(
            [
              "W tym prototypie przełącznik u góry zmienia cały interfejs i zapisane odpowiedzi. Moduł publiczny jest dla kandydatów z zagranicy, więc docelowy asystent powinien odpowiadać w języku pytania, jeśli źródło na to pozwala.",
              "Same ogłoszenie i specyfikacja postępowania są po polsku. Cytat, którego nie ma w języku pytania, trzeba pokazać w języku źródła, a nie przerabiać go na fakt, którego w tekście nie było."
            ]
          ),
          en: block(
            [
              "In this prototype the switch at the top changes the interface and the saved answers. The public module is for foreign candidates, so the live assistant should answer in the language of the question when the source supports it.",
              "The notice itself is in Polish. A passage that does not exist in the question’s language should be shown in the source language, not rewritten into a fact the text never stated."
            ]
          )
        }
      },
      {
        id: "generic",
        keys: ["generic", "zwykł", "różn", "rozn", "different", "chatgpt", "normal", "chatbot", "versus", "vs"],
        q: {
          pl: "Czym różnisz się od zwykłego czatbota?",
          en: "How are you different from a generic chatbot?"
        },
        sources: {
          pl: ["RAG w Microsoft 365 / Azure", "Dwa moduły: publiczny i zamknięty"],
          en: ["RAG on Microsoft 365 / Azure", "Two modules: public and closed"]
        },
        a: {
          pl: block(
            [
              "Zwykły czatbot układa płynną odpowiedź. Ten, według ogłoszenia, najpierw wyszukuje fragment w środowisku Microsoft 365 / Azure zamawiającego i dopiero z niego odpowiada.",
              "Są dwa obiegi. Moduł publiczny nie widzi materiałów modułu zamkniętego dla studentów. Zamówienie obejmuje też projekt, wdrożenie, wsparcie po starcie oraz zużycie tokenów, zapytań i usług Azure — ten ekran pokazuje tylko rozmowę."
            ]
          ),
          en: block(
            [
              "A generic chatbot composes a fluent answer. The one in the notice retrieves a passage in the university’s Microsoft 365 / Azure environment first, and only then answers from it.",
              "There are two paths. The public module does not see the closed module’s student material. The contract also covers design, implementation, post-go-live support, and the tokens, queries, and Azure consumption. This screen shows only the conversation."
            ]
          )
        }
      }
    ],
    closed: [
      {
        id: "student",
        keys: ["student", "enrolled", "zapis", "studiuj", "o co", "what can", "pomóc", "pomoc", "help"],
        q: {
          pl: "O co może pytać student zagraniczny?",
          en: "What can an enrolled international student ask?"
        },
        sources: {
          pl: ["Ogłoszenie: moduł zamknięty dla studentów zagranicznych", "Wydział Nauk Społecznych"],
          en: ["Notice: closed module for foreign students", "Faculty of Social Sciences"]
        },
        a: {
          pl: block(
            [
              "Moduł zamknięty nie jest dla kandydatów. Jest dla zagranicznych studentów Uniwersytetu Wrocławskiego. Po prawdziwym zalogowaniu Microsoft 365 student pyta o procedury i dokumenty, które uczelnia publikuje dla osób już studiujących na WNS.",
              "Pracownik dziekanatu nie ma w ogłoszeniu trzeciego, osobnego modułu. Widzi ten sam cytowany fragment, co student, i na nim opiera odpowiedź."
            ],
            [
              "formalności po przyjęciu na studia",
              "gdzie leży formularz nazwany w procedurze",
              "wsparcie i (re)integracja w projekcie (Re)connect with WNS — tylko z dokumentów"
            ]
          ),
          en: block(
            [
              "The closed module is not for applicants. It is for foreign students of the University of Wrocław. After a real Microsoft 365 sign-in, a student asks about procedures and documents the university publishes for people already studying at WNS.",
              "The notice does not describe a third module for staff. A dean’s-office colleague would see the same cited passage as the student and answer from that."
            ],
            [
              "formalities after admission",
              "where a form named in a procedure actually lives",
              "support and (re)integration under (Re)connect with WNS — only from documents"
            ]
          )
        }
      },
      {
        id: "form",
        keys: ["form", "formularz", "procedur", "procedure", "where", "gdzie", "znaleźć", "znalezc", "find"],
        q: {
          pl: "Jak znaleźć procedurę albo formularz?",
          en: "How do I find a procedure or a form?"
        },
        sources: {
          pl: ["Wyszukanie w zbiorze zamkniętym", "Nazwa pliku i fragment"],
          en: ["Search in the closed corpus", "File name and passage"]
        },
        a: {
          pl: block(
            [
              "Nazwij sprawę zwykłym językiem, na przykład: „Gdzie jest formularz do…” albo „Jaka jest procedura, gdy…”. Asystent szuka w zbiorze modułu zamkniętego i oddaje nazwę pliku, fragment i odnośnik, jeśli jest w tym fragmencie.",
              "Gdy dwa dokumenty mówią co innego, pokazuję oba. Nie wybieram „zwycięzcy” i nie sklejam z nich nowej zasady."
            ]
          ),
          en: block(
            [
              "Name the matter in ordinary language, for example: “Where is the form for…” or “What is the procedure when…”. The assistant searches the closed corpus and returns the file name, the passage, and the link if the passage contains one.",
              "If two documents disagree, I show both. I do not pick a winner or stitch them into a new rule."
            ]
          )
        }
      },
      {
        id: "reintegration",
        keys: ["reintegr", "wsparc", "support", "integrac", "reconnect", "projekt", "project", "nawa"],
        q: {
          pl: "Czy pomożesz też we wsparciu i reintegracji?",
          en: "Can you help with support and reintegration, not only paperwork?"
        },
        sources: {
          pl: ["Projekt (Re)connect with WNS", "nr BPI/WTP/2024/1/00073"],
          en: ["Project (Re)connect with WNS", "No. BPI/WTP/2024/1/00073"]
        },
        a: {
          pl: block(
            [
              "Tak jest opisane zamówienie. Powstaje w projekcie „(Re)connect with WNS. Kompleksowy program rekrutacji, wsparcia i (re)integracji obcokrajowców na Wydziale Nauk Społecznych Uniwersytetu Wrocławskiego” (BPI/WTP/2024/1/00073), współfinansowanym z Funduszy Europejskich dla Rozwoju Społecznego 2021–2027 i ze środków NAWA.",
              "Moduł zamknięty jest miejscem, w którym student pyta o to wsparcie. Nie wymieniam tu wydarzeń, dyżurów ani opiekunów: nie ma ich w ogłoszeniu i nie są wczytane do tego prototypu."
            ]
          ),
          en: block(
            [
              "That is how the contract is framed. It sits inside “(Re)connect with WNS. A comprehensive programme of recruitment, support and (re)integration of foreigners at the Faculty of Social Sciences of the University of Wrocław” (BPI/WTP/2024/1/00073), co-financed by European Funds for Social Development 2021–2027 and by NAWA.",
              "The closed module is where an enrolled student asks about that support. I am not listing events, office hours, or mentors: they are not in the notice and they are not loaded in this prototype."
            ]
          )
        }
      },
      {
        id: "citation",
        keys: ["cited", "cyt", "źród", "zrod", "source", "pokaż odpowiedź", "show me", "example answer", "przykład"],
        q: {
          pl: "Pokaż odpowiedź ze wskazanym źródłem.",
          en: "Show me an answer with a cited source."
        },
        sources: {
          pl: ["Karta przykładowa", "Ten sam cytat widzi student i pracownik"],
          en: ["Sample card", "Student and staff see the same citation"]
        },
        a: {
          pl: block(
            [
              "Pytanie: „Gdzie przeczytam procedurę, zanim przyjdę do dziekanatu?”. Odpowiedź poniżej jest ilustracją cytowania. Plik nie istnieje na uczelni."
            ],
            null,
            {
              title: { pl: "WNS — procedury studenta zagranicznego (przykład)", en: "WNS — international student procedures (sample)" },
              body: {
                pl: "„Najpierw przeczytaj procedurę w tym pliku. Do dziekanatu przynieś tylko to, o co procedura prosi. Jeśli Twojej sprawy nie ma na liście, napisz do biura wskazanego na końcu pliku.”",
                en: "“Read the procedure in this file first. Bring the dean’s office only what the procedure asks for. If your matter is not on the list, write to the office named at the end of the file.”"
              }
            }
          ),
          en: block(
            [
              "Question: “Where do I read the procedure before I go to the dean’s office?”. The answer below illustrates a citation. The file does not exist at the university."
            ],
            null,
            {
              title: { pl: "WNS — procedury studenta zagranicznego (przykład)", en: "WNS — international student procedures (sample)" },
              body: {
                pl: "„Najpierw przeczytaj procedurę w tym pliku. Do dziekanatu przynieś tylko to, o co procedura prosi. Jeśli Twojej sprawy nie ma na liście, napisz do biura wskazanego na końcu pliku.”",
                en: "“Read the procedure in this file first. Bring the dean’s office only what the procedure asks for. If your matter is not on the list, write to the office named at the end of the file.”"
              }
            }
          )
        }
      },
      {
        id: "guess",
        keys: ["guess", "zgad", "nie zgad", "grade", "ocen", "visa", "wiza", "fee", "czesne", "personal", "cudzy"],
        q: {
          pl: "Czego nie zgadujesz?",
          en: "What will you refuse to guess?"
        },
        sources: {
          pl: ["Granica modułu zamkniętego", "Brak odpowiedzi spoza zbioru"],
          en: ["Boundary of the closed module", "No answer from outside the corpus"]
        },
        a: {
          pl: block(
            [
              "Nie zgaduję opłat, wiz, statusu pobytu, ocen ani treści czyjejś sprawy. Nie odpowiadam też na podstawie „podobnego” kierunku albo zeszłorocznej praktyki, jeśli nie ma jej w otwartym dla mnie dokumencie.",
              "Sprawa osobista — ocena, decyzja w Twoich aktach, pilny termin — idzie do człowieka. Mogę tylko pomóc znaleźć procedurę, która mówi, do kogo napisać."
            ]
          ),
          en: block(
            [
              "I do not guess fees, visas, residence status, grades, or the contents of someone’s case. I also do not answer from a “similar” programme or last year’s habit if that text is not in a document open to me.",
              "A personal matter — a grade, a decision in your own file, an urgent deadline — goes to a person. I can only help you find the procedure that says whom to write to."
            ]
          )
        }
      },
      {
        id: "m365",
        keys: ["microsoft", "azure", "365", "m365", "cloud", "chmura", "token", "bezpiecz", "security", "data"],
        q: {
          pl: "Czy to działa w Microsoft 365?",
          en: "Does this run inside Microsoft 365?"
        },
        sources: {
          pl: ["Ogłoszenie: wspólne środowisko Microsoft 365 / Azure", "Zakup tokenów, zapytań i zużycia Azure"],
          en: ["Notice: shared Microsoft 365 / Azure environment", "Purchase of tokens, queries, and Azure consumption"]
        },
        a: {
          pl: block(
            [
              "Ogłoszenie mówi, że asystent działa we wspólnym środowisku Microsoft 365 / Azure zamawiającego. Przedmiotem zamówienia jest też zakup tokenów, zapytań i zużycia usług Azure Microsoft.",
              "Ta strona tego nie robi. Nie wywołuje Azure, OpenAI ani żadnego innego API. To, co wpiszesz, zostaje w przeglądarce."
            ]
          ),
          en: block(
            [
              "The notice says the assistant operates in the contracting authority’s shared Microsoft 365 / Azure environment. The contract also buys tokens, queries, and consumption of Azure Microsoft services.",
              "This page does none of that. It does not call Azure, OpenAI, or any other API. What you type stays in the browser."
            ]
          )
        }
      },
      {
        id: "human",
        keys: ["person", "człowiek", "czlowiek", "human", "dziekan", "dean", "office", "biuro", "urgent", "pilne", "contact", "kontakt"],
        q: {
          pl: "Kiedy mam napisać do człowieka?",
          en: "When should I contact a person instead?"
        },
        sources: {
          pl: ["Asystent nie zastępuje dziekanatu", "Kontakt z ogłoszenia dotyczy postępowania, nie studenta"],
          en: ["The assistant does not replace the dean’s office", "The notice contact is for the procurement, not for students"]
        },
        a: {
          pl: block(
            [
              "Napisz do człowieka, gdy odpowiedzi nie ma w dokumentach, gdy sprawa jest pilna albo gdy dotyczy Twoich akt: oceny, decyzji, indywidualnego terminu. Asystent pomaga znaleźć procedurę. Nie jest dziekanatem.",
              "Adres z ogłoszenia o zamówieniu służy wykonawcom w postępowaniu. Studentowi docelowy asystent podaje kontakt wpisany w dokumencie, który właśnie zacytował — a nie skrzynkę zamówień publicznych."
            ]
          ),
          en: block(
            [
              "Write to a person when the answer is not in the documents, when the matter is urgent, or when it is about your own file: a grade, a decision, an individual deadline. The assistant helps you find the procedure. It is not the dean’s office.",
              "The address on the procurement notice is for bidders in that procedure. For a student, the live assistant should give the contact written in the document it just cited — not the public-procurement mailbox."
            ]
          )
        }
      }
    ]
  };

  var welcome = {
    public: {
      pl: "Dzień dobry. Tu podgląd modułu publicznego dla kandydatów z zagranicy. Pytania poniżej są z zakresu ogłoszenia: rekrutacja, dokumenty i procedury Wydziału Nauk Społecznych. Nie podaję zasad, których nie ma w źródle.",
      en: "Hello. This is a preview of the public module for foreign applicants. The questions below stay inside the notice: recruitment, documents, and procedures for the Faculty of Social Sciences. I will not state a rule that is not in a source."
    },
    closed: {
      pl: "Dzień dobry. To przykładowa rozmowa modułu zamkniętego, bez prawdziwego konta. Mogę pokazać, jak student zagraniczny pyta o procedurę, formularz oraz wsparcie w projekcie (Re)connect with WNS.",
      en: "Hello. This is a sample conversation in the closed module, with no real account. I can show how a foreign student asks about a procedure, a form, and support under the (Re)connect with WNS project."
    }
  };

  var fallback = {
    pl: "W tym prototypie odpowiadam tylko na przygotowane pytania o moduł publiczny i zamknięty. Wybierz jedno z listy albo przełącz moduł. Nie dopytuję modelu na zewnątrz i nie wymyślam procedury uczelni.",
    en: "In this prototype I only answer the prepared questions about the public and closed modules. Pick one from the list, or switch module. I do not call an external model and I do not invent a university procedure."
  };

  var state = {
    lang: "pl",
    module: "public",
    closedOpen: false,
    threads: { public: [], closed: [] },
    busy: false
  };

  var logEl = document.getElementById("log");
  var chipsEl = document.getElementById("chips");
  var gateEl = document.getElementById("gate");
  var chatEl = document.getElementById("chat");
  var form = document.getElementById("form");
  var input = document.getElementById("q");

  function t() { return ui[state.lang]; }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function paintChrome() {
    var s = t();
    document.documentElement.lang = state.lang;
    document.getElementById("banner").textContent = s.banner;
    document.getElementById("eyebrow").textContent = s.eyebrow;
    document.getElementById("title").textContent = s.title;
    document.getElementById("subtitle").textContent = s.subtitle;
    document.getElementById("foot-local").textContent = s.foot;
    document.getElementById("q-label").textContent = s.qLabel;
    input.placeholder = s.placeholder;
    document.getElementById("send").textContent = s.send;
    document.getElementById("hint").textContent = s.hint;
    document.getElementById("reset").textContent = s.reset;
    document.title = state.lang === "pl"
      ? "Wirtualny Asystent WNS — prototyp 92 Logics"
      : "WNS Virtual Assistant — 92 Logics prototype";

    var langButtons = document.querySelectorAll("#lang button");
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].setAttribute("aria-pressed", langButtons[i].getAttribute("data-lang") === state.lang ? "true" : "false");
    }

    var rail = document.getElementById("rail");
    rail.textContent = "";
    rail.appendChild(el("h2", null, s.railTitle));
    var modes = el("div", "modes");
    modes.appendChild(modeButton("public", s.publicName, s.publicHint));
    modes.appendChild(modeButton("closed", s.closedName, s.closedHint));
    rail.appendChild(modes);
    var facts = el("ul", "facts");
    s.facts.forEach(function (pair) {
      var li = el("li");
      li.appendChild(el("b", null, pair[0]));
      li.appendChild(document.createTextNode(" " + pair[1]));
      facts.appendChild(li);
    });
    rail.appendChild(facts);
    var note = el("p", "notice");
    note.appendChild(document.createTextNode(s.notice + " "));
    var a = el("a", null, "platformazakupowa.pl");
    a.href = NOTICE;
    a.rel = "noopener";
    note.appendChild(a);
    rail.appendChild(note);

    var closed = state.module === "closed";
    document.getElementById("stage-kicker").textContent = closed ? s.kickerClosed : s.kickerPublic;
    document.getElementById("stage-name").textContent = closed ? s.stageClosed : s.stagePublic;
    document.getElementById("stage-status").textContent = closed ? s.statusClosed : s.statusPublic;

    paintGate();
    paintChips();
    paintLog();
  }

  function modeButton(id, name, hint) {
    var b = el("button", "mode");
    b.type = "button";
    b.setAttribute("aria-pressed", state.module === id ? "true" : "false");
    b.appendChild(el("strong", null, name));
    b.appendChild(el("small", null, hint));
    b.addEventListener("click", function () {
      state.module = id;
      paintChrome();
    });
    return b;
  }

  function paintGate() {
    var show = state.module === "closed" && !state.closedOpen;
    gateEl.hidden = !show;
    chatEl.hidden = show;
    if (!show) return;
    var s = t();
    gateEl.textContent = "";
    gateEl.appendChild(el("h3", null, s.gateTitle));
    gateEl.appendChild(el("p", null, s.gateBody));
    var ul = el("ul", "lock-list");
    s.gatePoints.forEach(function (line) { ul.appendChild(el("li", null, line)); });
    gateEl.appendChild(ul);
    var btn = el("button", "primary", s.gateBtn);
    btn.type = "button";
    btn.addEventListener("click", function () {
      state.closedOpen = true;
      ensureWelcome("closed");
      paintChrome();
    });
    gateEl.appendChild(btn);
  }

  function paintChips() {
    chipsEl.textContent = "";
    if (chatEl.hidden) return;
    scripts[state.module].forEach(function (item) {
      var b = el("button", null, item.q[state.lang]);
      b.type = "button";
      b.addEventListener("click", function () { ask(item.id, null); });
      chipsEl.appendChild(b);
    });
  }

  function paintLog() {
    logEl.textContent = "";
    if (chatEl.hidden) return;
    var thread = state.threads[state.module];
    thread.forEach(function (msg) { logEl.appendChild(renderMsg(msg)); });
    logEl.scrollTop = logEl.scrollHeight;
  }

  function renderMsg(msg) {
    var s = t();
    var wrap = el("article", "msg " + msg.role);
    var bubble = el("div", "bubble");
    if (msg.role === "user") {
      bubble.appendChild(el("p", null, msg.text[state.lang]));
    } else if (msg.kind === "welcome") {
      bubble.appendChild(el("p", null, welcome[msg.module][state.lang]));
    } else if (msg.kind === "fallback") {
      bubble.appendChild(el("p", null, fallback[state.lang]));
    } else {
      var item = findScript(msg.module, msg.id);
      var body = item.a[state.lang];
      body.paragraphs.forEach(function (p) { bubble.appendChild(el("p", null, p)); });
      if (body.bullets) {
        var ul = document.createElement("ul");
        body.bullets.forEach(function (line) { ul.appendChild(el("li", null, line)); });
        bubble.appendChild(ul);
      }
      if (body.card) {
        var card = el("div", "sample-card");
        card.appendChild(el("strong", null, s.sample));
        card.appendChild(el("p", null, body.card.title[state.lang]));
        card.appendChild(el("p", null, body.card.body[state.lang]));
        bubble.appendChild(card);
      }
      var sources = el("div", "sources");
      item.sources[state.lang].forEach(function (src) {
        sources.appendChild(el("span", "chip-src", src));
      });
      bubble.appendChild(sources);
    }
    wrap.appendChild(bubble);
    wrap.appendChild(el("div", "meta", msg.role === "user" ? s.you : s.bot));
    return wrap;
  }

  function findScript(moduleName, id) {
    var list = scripts[moduleName];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function ensureWelcome(moduleName) {
    var thread = state.threads[moduleName];
    if (thread.length) return;
    thread.push({ role: "assistant", kind: "welcome", module: moduleName });
  }

  function score(item, query) {
    var hay = query.toLowerCase();
    var n = 0;
    item.keys.forEach(function (key) {
      if (hay.indexOf(key) !== -1) n += key.length > 4 ? 2 : 1;
    });
    return n;
  }

  function match(query) {
    var best = null;
    var bestScore = 0;
    scripts[state.module].forEach(function (item) {
      var s = score(item, query);
      if (s > bestScore) {
        bestScore = s;
        best = item;
      }
    });
    return bestScore >= 2 ? best : null;
  }

  function ask(scriptId, rawText) {
    if (state.busy || chatEl.hidden) return;
    var item = scriptId ? findScript(state.module, scriptId) : match(rawText || "");
    var thread = state.threads[state.module];
    var userText = item
      ? item.q
      : { pl: rawText, en: rawText };
    thread.push({ role: "user", text: userText });
    state.busy = true;
    document.getElementById("send").disabled = true;
    input.value = "";
    paintLog();
    var typing = el("div", "typing");
    typing.appendChild(el("i"));
    typing.appendChild(el("i"));
    typing.appendChild(el("i"));
    logEl.appendChild(typing);
    logEl.scrollTop = logEl.scrollHeight;
    window.setTimeout(function () {
      if (item) thread.push({ role: "assistant", kind: "script", module: state.module, id: item.id });
      else thread.push({ role: "assistant", kind: "fallback" });
      state.busy = false;
      document.getElementById("send").disabled = false;
      paintLog();
      input.focus();
    }, 650);
  }

  document.querySelectorAll("#lang button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.lang = btn.getAttribute("data-lang");
      paintChrome();
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var text = input.value.trim();
    if (!text) return;
    ask(null, text);
  });

  document.getElementById("reset").addEventListener("click", function () {
    state.threads[state.module] = [];
    ensureWelcome(state.module);
    paintLog();
  });

  ensureWelcome("public");
  paintChrome();
})();
