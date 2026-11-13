/* Independently authored curriculum; see course-source.json. */
export const UNITS = [
  {
    "id": "U01",
    "title": "营地初见",
    "goal": "能打招呼、介绍名字，辨认颜色并数到六。",
    "checkpoint": "听懂一种问候、辨认两种颜色、点数六以内的物品；愿意尝试介绍自己的名字。",
    "lessons": [
      {
        "id": "U01-L01",
        "title": "你好，新朋友",
        "objective": "在营地见面时打招呼，并用固定句型介绍名字。",
        "core": [
          [
            "hello",
            "你好"
          ],
          [
            "goodbye",
            "再见"
          ],
          [
            "yes",
            "是；对"
          ],
          [
            "no",
            "不；不是"
          ],
          [
            "friend",
            "朋友"
          ],
          [
            "name",
            "名字"
          ]
        ],
        "review": [],
        "frames": [
          "Hello! My name is ...",
          "What's your name?",
          "Nice to meet you."
        ],
        "scene": "两个原创像素角色在营地入口见面，旁边有可输入名字的空白名牌；不使用任何已有游戏角色。",
        "dialogue": [
          [
            "向导",
            "Hello! My name is Nori.",
            "你好！我叫 Nori。"
          ],
          [
            "玩家",
            "Hello, Nori! My name is Alex.",
            "你好，Nori！我叫 Alex。"
          ],
          [
            "向导",
            "Nice to meet you, Alex.",
            "很高兴认识你，Alex。"
          ],
          [
            "玩家",
            "Nice to meet you too!",
            "我也很高兴认识你！"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听录音，选择意思对应的气泡。",
            "audio": "Hello!",
            "options": [
              "见面问候",
              "离开告别",
              "表示不同意"
            ],
            "answer": "见面问候",
            "why": "Hello 用于打招呼；Goodbye 用于告别。",
            "id": "U01-L01-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "见面问候"
              },
              {
                "id": "o1",
                "text": "离开告别"
              },
              {
                "id": "o2",
                "text": "表示不同意"
              }
            ],
            "correct": "o0",
            "audioId": "09126bf48beead33"
          },
          {
            "type": "read-choice",
            "prompt": "名牌上写着 My name is Alex. 哪个词表示“名字”？",
            "options": [
              "friend",
              "name",
              "no"
            ],
            "answer": "name",
            "why": "name 表示名字。名字可替换为学习者想用的称呼，不必提供真实姓名。",
            "id": "U01-L01-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "friend"
              },
              {
                "id": "o1",
                "text": "name"
              },
              {
                "id": "o2",
                "text": "no"
              }
            ],
            "correct": "o1"
          },
          {
            "type": "listen-choice",
            "prompt": "听录音，选择对应的回答意思。",
            "audio": "Yes.",
            "options": [
              "是；对",
              "不；不是",
              "再见"
            ],
            "answer": "是；对",
            "why": "Yes 是肯定回答；No 是否定回答。",
            "id": "U01-L01-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "是；对"
              },
              {
                "id": "o1",
                "text": "不；不是"
              },
              {
                "id": "o2",
                "text": "再见"
              }
            ],
            "correct": "o0",
            "audioId": "5acc079c0d1cf5d2"
          }
        ],
        "say": {
          "prompt": "向营地朋友介绍一个你想用的名字。",
          "model": "Hello! My name is Alex.",
          "note": "名字可以自由替换；只记录是否尝试，不自动评分。"
        },
        "note": "零基础先听完整问候并模仿，不要求分析 my、is 等语法。friend 配合角色图学习；结束时一起说 Goodbye。",
        "number": 1,
        "withinUnit": 1,
        "unitId": "U01",
        "unitTitle": "营地初见",
        "shortTitle": "打招呼",
        "sceneId": "U01-L01",
        "words": [
          {
            "en": "hello",
            "zh": "你好",
            "audio": "8bafbefc1b3645a6"
          },
          {
            "en": "goodbye",
            "zh": "再见",
            "audio": "f1853dc23ff40bd2"
          },
          {
            "en": "yes",
            "zh": "是；对",
            "audio": "57cc6748df6298cc"
          },
          {
            "en": "no",
            "zh": "不；不是",
            "audio": "ac04591bf0eadc7e"
          },
          {
            "en": "friend",
            "zh": "朋友",
            "audio": "d6ad8bfd725db068"
          },
          {
            "en": "name",
            "zh": "名字",
            "audio": "e4eb99a680e73586"
          }
        ],
        "reviewWords": [],
        "lines": [
          {
            "speaker": "向导",
            "en": "Hello! My name is Nori.",
            "zh": "你好！我叫 Nori。",
            "audio": "fac9213f4e899b9f"
          },
          {
            "speaker": "玩家",
            "en": "Hello, Nori! My name is Alex.",
            "zh": "你好，Nori！我叫 Alex。",
            "audio": "3468028b1b343b86"
          },
          {
            "speaker": "向导",
            "en": "Nice to meet you, Alex.",
            "zh": "很高兴认识你，Alex。",
            "audio": "4362c51bcd349e80"
          },
          {
            "speaker": "玩家",
            "en": "Nice to meet you too!",
            "zh": "我也很高兴认识你！",
            "audio": "84d2396154d57461"
          }
        ],
        "frameAudio": [
          "505a76654c288d08",
          "236ee054ab093bb1",
          "a279a14299ff1cad"
        ],
        "modelAudio": "a1339e3b7ac20c3d"
      },
      {
        "id": "U01-L02",
        "title": "给营地选颜色",
        "objective": "听懂并指出六种颜色，用短句说明看到的颜色。",
        "core": [
          [
            "red",
            "红色"
          ],
          [
            "blue",
            "蓝色"
          ],
          [
            "green",
            "绿色"
          ],
          [
            "yellow",
            "黄色"
          ],
          [
            "black",
            "黑色"
          ],
          [
            "white",
            "白色"
          ]
        ],
        "review": [
          "hello",
          "yes",
          "no"
        ],
        "frames": [
          "What color is it?",
          "It's blue.",
          "Is it red? No. It's blue."
        ],
        "scene": "六块纯色色牌，各有不同的小符号辅助辨识；颜色不能是唯一识别线索。",
        "dialogue": [
          [
            "向导",
            "What color is it?",
            "它是什么颜色？"
          ],
          [
            "玩家",
            "It's blue.",
            "它是蓝色的。"
          ],
          [
            "向导",
            "Is it red?",
            "它是红色的吗？"
          ],
          [
            "玩家",
            "No. It's blue.",
            "不是。它是蓝色的。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听录音，选对应色牌。",
            "audio": "Green.",
            "options": [
              "绿色树叶符号色牌",
              "红色圆点符号色牌",
              "蓝色水滴符号色牌"
            ],
            "answer": "绿色树叶符号色牌",
            "why": "green 是绿色。符号只辅助辨识，不代替颜色词学习。",
            "id": "U01-L02-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "绿色树叶符号色牌"
              },
              {
                "id": "o1",
                "text": "红色圆点符号色牌"
              },
              {
                "id": "o2",
                "text": "蓝色水滴符号色牌"
              }
            ],
            "correct": "o0",
            "audioId": "51faa8241ef9866d"
          },
          {
            "type": "read-choice",
            "prompt": "图中是带太阳符号的黄色色牌。应选哪个词？",
            "options": [
              "yellow",
              "black",
              "white"
            ],
            "answer": "yellow",
            "why": "yellow 表示黄色。",
            "id": "U01-L02-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "yellow"
              },
              {
                "id": "o1",
                "text": "black"
              },
              {
                "id": "o2",
                "text": "white"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "listen-choice",
            "prompt": "听短句，选择被否定的颜色。",
            "audio": "No. It's not red. It's blue.",
            "options": [
              "red",
              "blue",
              "green"
            ],
            "answer": "red",
            "why": "not red 表示不是红色；实际颜色是 blue。",
            "id": "U01-L02-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "red"
              },
              {
                "id": "o1",
                "text": "blue"
              },
              {
                "id": "o2",
                "text": "green"
              }
            ],
            "correct": "o0",
            "audioId": "752dffb4f52e1af7"
          }
        ],
        "say": {
          "prompt": "选一块喜欢的色牌，用 It's ... 说颜色。",
          "model": "It's yellow.",
          "note": "六种颜色中任何与所选色牌一致的回答都可接受。"
        },
        "note": "采用美式拼写 color。首次练习可以只选两种颜色，再逐步增加到六种；不计时。",
        "number": 2,
        "withinUnit": 2,
        "unitId": "U01",
        "unitTitle": "营地初见",
        "shortTitle": "认颜色",
        "sceneId": "U01-L02",
        "words": [
          {
            "en": "red",
            "zh": "红色",
            "audio": "47c8ac9b39c2f171"
          },
          {
            "en": "blue",
            "zh": "蓝色",
            "audio": "ee13203b244711d5"
          },
          {
            "en": "green",
            "zh": "绿色",
            "audio": "b5ff9f5a8975e2fc"
          },
          {
            "en": "yellow",
            "zh": "黄色",
            "audio": "033d1f5812a6ffd6"
          },
          {
            "en": "black",
            "zh": "黑色",
            "audio": "ea8f7361a54130ad"
          },
          {
            "en": "white",
            "zh": "白色",
            "audio": "cf30df996a7b80c9"
          }
        ],
        "reviewWords": [
          {
            "en": "hello",
            "zh": "你好",
            "audio": "8bafbefc1b3645a6"
          },
          {
            "en": "yes",
            "zh": "是；对",
            "audio": "57cc6748df6298cc"
          },
          {
            "en": "no",
            "zh": "不；不是",
            "audio": "ac04591bf0eadc7e"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "What color is it?",
            "zh": "它是什么颜色？",
            "audio": "96218d5368494432"
          },
          {
            "speaker": "玩家",
            "en": "It's blue.",
            "zh": "它是蓝色的。",
            "audio": "c8d64ef0c9a527ef"
          },
          {
            "speaker": "向导",
            "en": "Is it red?",
            "zh": "它是红色的吗？",
            "audio": "04ce7092a2c415a2"
          },
          {
            "speaker": "玩家",
            "en": "No. It's blue.",
            "zh": "不是。它是蓝色的。",
            "audio": "fb4a5a666f73f815"
          }
        ],
        "frameAudio": [
          "96218d5368494432",
          "47894efe599d33d1",
          "1d49304ed1fb3434"
        ],
        "modelAudio": "10a3c0939f7f5efe"
      },
      {
        "id": "U01-L03",
        "title": "数一数营地物品",
        "objective": "在图上逐一点数六以内的物品，听到数字后选出对应数量。",
        "core": [
          [
            "one",
            "一"
          ],
          [
            "two",
            "二"
          ],
          [
            "three",
            "三"
          ],
          [
            "four",
            "四"
          ],
          [
            "five",
            "五"
          ],
          [
            "six",
            "六"
          ]
        ],
        "review": [
          "blue",
          "red",
          "yes"
        ],
        "frames": [
          "How many?",
          "Three.",
          "One, two, three."
        ],
        "scene": "若干可点按的中性像素小方片；只要求数量与颜色，不把方片的英文名称作为考点。",
        "dialogue": [
          [
            "向导",
            "How many?",
            "有几个？"
          ],
          [
            "玩家",
            "Three.",
            "三个。"
          ],
          [
            "向导",
            "One, two, three. Yes!",
            "一、二、三。对！"
          ],
          [
            "玩家",
            "Three!",
            "三个！"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听数字，选对应数量。",
            "audio": "Four.",
            "options": [
              "四个小方片",
              "两个小方片",
              "六个小方片"
            ],
            "answer": "四个小方片",
            "why": "four 对应数量四。",
            "id": "U01-L03-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "四个小方片"
              },
              {
                "id": "o1",
                "text": "两个小方片"
              },
              {
                "id": "o2",
                "text": "六个小方片"
              }
            ],
            "correct": "o0",
            "audioId": "18f46d1a2f65a29c"
          },
          {
            "type": "read-choice",
            "prompt": "图中有五个蓝色小方片。选择对应数字词。",
            "options": [
              "three",
              "five",
              "one"
            ],
            "answer": "five",
            "why": "逐一点数后是五个，对应 five。",
            "id": "U01-L03-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "three"
              },
              {
                "id": "o1",
                "text": "five"
              },
              {
                "id": "o2",
                "text": "one"
              }
            ],
            "correct": "o1"
          },
          {
            "type": "listen-choice",
            "prompt": "听录音，选择数量和颜色都一致的一组。",
            "audio": "Two. Blue.",
            "options": [
              "两个蓝色小方片",
              "两个红色小方片",
              "三个蓝色小方片"
            ],
            "answer": "两个蓝色小方片",
            "why": "同时听懂 two 和 blue，不能只看数量或只看颜色。",
            "id": "U01-L03-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "两个蓝色小方片"
              },
              {
                "id": "o1",
                "text": "两个红色小方片"
              },
              {
                "id": "o2",
                "text": "三个蓝色小方片"
              }
            ],
            "correct": "o0",
            "audioId": "5aefdb7fd499cab7"
          }
        ],
        "say": {
          "prompt": "自己指着一组小方片，边点边数到六以内。",
          "model": "One, two, three, four.",
          "note": "数量与图一致即可；不要求完整问答句。"
        },
        "note": "How many 作为整体问句输入。允许听音完成，不以是否会拼写数字词判断理解。",
        "number": 3,
        "withinUnit": 3,
        "unitId": "U01",
        "unitTitle": "营地初见",
        "shortTitle": "数一数",
        "sceneId": "U01-L03",
        "words": [
          {
            "en": "one",
            "zh": "一",
            "audio": "b71c3d31071c2bf3"
          },
          {
            "en": "two",
            "zh": "二",
            "audio": "89288bf10ca207ec"
          },
          {
            "en": "three",
            "zh": "三",
            "audio": "9d0bdd41b4515a37"
          },
          {
            "en": "four",
            "zh": "四",
            "audio": "ccf39785a9c2a05f"
          },
          {
            "en": "five",
            "zh": "五",
            "audio": "2a67658ab85be651"
          },
          {
            "en": "six",
            "zh": "六",
            "audio": "62c10b2fd6bf1002"
          }
        ],
        "reviewWords": [
          {
            "en": "blue",
            "zh": "蓝色",
            "audio": "ee13203b244711d5"
          },
          {
            "en": "red",
            "zh": "红色",
            "audio": "47c8ac9b39c2f171"
          },
          {
            "en": "yes",
            "zh": "是；对",
            "audio": "57cc6748df6298cc"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "How many?",
            "zh": "有几个？",
            "audio": "ff6bc55520af49c3"
          },
          {
            "speaker": "玩家",
            "en": "Three.",
            "zh": "三个。",
            "audio": "5de42e79e75a8287"
          },
          {
            "speaker": "向导",
            "en": "One, two, three. Yes!",
            "zh": "一、二、三。对！",
            "audio": "df59fbb885f7f6b3"
          },
          {
            "speaker": "玩家",
            "en": "Three!",
            "zh": "三个！",
            "audio": "5664d4c8e5c84858"
          }
        ],
        "frameAudio": [
          "ff6bc55520af49c3",
          "1bd932b481bf5164",
          "8722c291a3308288"
        ],
        "modelAudio": "52feebab81720ea1"
      },
      {
        "id": "U01-L04",
        "title": "领取我的营地名牌",
        "objective": "综合使用问候、名字、颜色和数量完成名牌任务。",
        "core": [],
        "review": [
          "hello",
          "name",
          "red",
          "blue",
          "three",
          "four"
        ],
        "frames": [
          "Hello! My name is ...",
          "It's blue.",
          "How many? Three."
        ],
        "scene": "一张空白名牌与三枚蓝色标记；候选名牌分别改变颜色或数量，不能同时出现两个正确答案。",
        "reading": "Name: Alex.\nColor: blue.\nNumber: three.",
        "dialogue": [
          [
            "向导",
            "Hello! What's your name?",
            "你好！你叫什么名字？"
          ],
          [
            "玩家",
            "My name is Alex.",
            "我叫 Alex。"
          ],
          [
            "向导",
            "What color is it?",
            "它是什么颜色？"
          ],
          [
            "玩家",
            "It's blue.",
            "它是蓝色的。"
          ],
          [
            "向导",
            "How many?",
            "有几个？"
          ],
          [
            "玩家",
            "Three!",
            "三个！"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "根据录音领取正确的标记组合。",
            "audio": "Blue. Three.",
            "options": [
              "三枚蓝色标记",
              "四枚蓝色标记",
              "三枚红色标记"
            ],
            "answer": "三枚蓝色标记",
            "why": "需要同时匹配颜色 blue 和数量 three。",
            "id": "U01-L04-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "三枚蓝色标记"
              },
              {
                "id": "o1",
                "text": "四枚蓝色标记"
              },
              {
                "id": "o2",
                "text": "三枚红色标记"
              }
            ],
            "correct": "o0",
            "audioId": "d3fe1721e1757c21"
          },
          {
            "type": "read-choice",
            "prompt": "按照本课名牌标签，选择应显示的名字。",
            "options": [
              "Alex",
              "Nori",
              "Blue"
            ],
            "answer": "Alex",
            "why": "Name: Alex 表示名牌的名字是 Alex；blue 是颜色。",
            "id": "U01-L04-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "Alex"
              },
              {
                "id": "o1",
                "text": "Nori"
              },
              {
                "id": "o2",
                "text": "Blue"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "order",
            "prompt": "按见面到离开的顺序排列三句话。",
            "options": [
              "Goodbye!",
              "Hello!",
              "My name is Alex."
            ],
            "answer": [
              "Hello!",
              "My name is Alex.",
              "Goodbye!"
            ],
            "why": "先打招呼，再介绍名字，离开时告别。",
            "id": "U01-L04-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "Goodbye!"
              },
              {
                "id": "o1",
                "text": "Hello!"
              },
              {
                "id": "o2",
                "text": "My name is Alex."
              }
            ],
            "correct": [
              "o1",
              "o2",
              "o0"
            ]
          }
        ],
        "say": {
          "prompt": "用自己的名牌完成一次介绍，并说出颜色或数量。",
          "model": "Hello! My name is Alex. Blue. Three.",
          "note": "单词回答可以接受，不强求三句连续完整输出。"
        },
        "note": "本课不新增核心词。Name、Color、Number 的标签可同时配中文与图标；不把标签阅读作为额外词汇测验。",
        "number": 4,
        "withinUnit": 4,
        "unitId": "U01",
        "unitTitle": "营地初见",
        "shortTitle": "做名牌",
        "sceneId": "U01-L04",
        "words": [
          {
            "en": "hello",
            "zh": "你好",
            "audio": "8bafbefc1b3645a6"
          },
          {
            "en": "name",
            "zh": "名字",
            "audio": "e4eb99a680e73586"
          },
          {
            "en": "red",
            "zh": "红色",
            "audio": "47c8ac9b39c2f171"
          },
          {
            "en": "blue",
            "zh": "蓝色",
            "audio": "ee13203b244711d5"
          },
          {
            "en": "three",
            "zh": "三",
            "audio": "9d0bdd41b4515a37"
          },
          {
            "en": "four",
            "zh": "四",
            "audio": "ccf39785a9c2a05f"
          }
        ],
        "reviewWords": [
          {
            "en": "hello",
            "zh": "你好",
            "audio": "8bafbefc1b3645a6"
          },
          {
            "en": "name",
            "zh": "名字",
            "audio": "e4eb99a680e73586"
          },
          {
            "en": "red",
            "zh": "红色",
            "audio": "47c8ac9b39c2f171"
          },
          {
            "en": "blue",
            "zh": "蓝色",
            "audio": "ee13203b244711d5"
          },
          {
            "en": "three",
            "zh": "三",
            "audio": "9d0bdd41b4515a37"
          },
          {
            "en": "four",
            "zh": "四",
            "audio": "ccf39785a9c2a05f"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Hello! What's your name?",
            "zh": "你好！你叫什么名字？",
            "audio": "7b4b6deecdbf12b1"
          },
          {
            "speaker": "玩家",
            "en": "My name is Alex.",
            "zh": "我叫 Alex。",
            "audio": "d0e60928fc76f89a"
          },
          {
            "speaker": "向导",
            "en": "What color is it?",
            "zh": "它是什么颜色？",
            "audio": "96218d5368494432"
          },
          {
            "speaker": "玩家",
            "en": "It's blue.",
            "zh": "它是蓝色的。",
            "audio": "c8d64ef0c9a527ef"
          },
          {
            "speaker": "向导",
            "en": "How many?",
            "zh": "有几个？",
            "audio": "ff6bc55520af49c3"
          },
          {
            "speaker": "玩家",
            "en": "Three!",
            "zh": "三个！",
            "audio": "5664d4c8e5c84858"
          }
        ],
        "frameAudio": [
          "505a76654c288d08",
          "47894efe599d33d1",
          "59901ddb183d468d"
        ],
        "modelAudio": "aeaefa3250462aed",
        "readingAudio": "ae001e0c07907a71",
        "readingZH": [
          "名字：Alex。",
          "颜色：蓝色。",
          "数量：三。"
        ]
      }
    ],
    "number": 1
  },
  {
    "id": "U02",
    "title": "整理背包",
    "goal": "能说出常见随身物品与基本补给，使用 have / need，数到十并区分大小。",
    "checkpoint": "按一张短清单选物品，辨认数量或大小，并尝试表达自己需要什么。",
    "lessons": [
      {
        "id": "U02-L01",
        "title": "背包里有什么",
        "objective": "辨认六种常见物品，并用 I have ... 表达拥有。",
        "core": [
          [
            "bag",
            "包；背包"
          ],
          [
            "map",
            "地图"
          ],
          [
            "book",
            "书"
          ],
          [
            "pen",
            "笔"
          ],
          [
            "key",
            "钥匙"
          ],
          [
            "box",
            "盒子；箱子"
          ]
        ],
        "review": [
          "one",
          "two",
          "blue"
        ],
        "frames": [
          "What's in your bag?",
          "I have a map.",
          "Do you have a pen? Yes."
        ],
        "scene": "可打开的像素背包及地图、书、笔、钥匙、箱子图卡；物品的形状和标签保持一致。",
        "dialogue": [
          [
            "向导",
            "What's in your bag?",
            "你的包里有什么？"
          ],
          [
            "玩家",
            "A map and a book.",
            "一张地图和一本书。"
          ],
          [
            "向导",
            "Do you have a pen?",
            "你有笔吗？"
          ],
          [
            "玩家",
            "Yes. I have a pen.",
            "有。我有一支笔。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听录音，把对应物品放进背包。",
            "audio": "A map.",
            "options": [
              "地图图卡",
              "书本图卡",
              "钥匙图卡"
            ],
            "answer": "地图图卡",
            "why": "map 是地图。",
            "id": "U02-L01-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "地图图卡"
              },
              {
                "id": "o1",
                "text": "书本图卡"
              },
              {
                "id": "o2",
                "text": "钥匙图卡"
              }
            ],
            "correct": "o0",
            "audioId": "b48a7e79a4681b1f"
          },
          {
            "type": "read-choice",
            "prompt": "根据 I have a key. 选择物品。",
            "options": [
              "钥匙图卡",
              "笔图卡",
              "盒子图卡"
            ],
            "answer": "钥匙图卡",
            "why": "key 表示钥匙。",
            "id": "U02-L01-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "钥匙图卡"
              },
              {
                "id": "o1",
                "text": "笔图卡"
              },
              {
                "id": "o2",
                "text": "盒子图卡"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "用词块说“我有一本书”。",
            "tokens": [
              "book",
              "I",
              "a",
              "have"
            ],
            "answer": "I have a book.",
            "why": "固定句型为 I have a ...，名词放在最后。",
            "id": "U02-L01-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "book"
              },
              {
                "id": "o1",
                "text": "I"
              },
              {
                "id": "o2",
                "text": "a"
              },
              {
                "id": "o3",
                "text": "have"
              }
            ],
            "correct": "I have a book.",
            "answerAudio": "000d2ab893d883e4"
          }
        ],
        "say": {
          "prompt": "选一样你要带的物品，用 I have ... 说出来。",
          "model": "I have a map.",
          "note": "可换成 a book、a pen、a key、a box 或 a bag。"
        },
        "note": "先听词与看图，再看拼写。a 和 and 在短语中自然输入，不单独设置抽象语法题。",
        "number": 5,
        "withinUnit": 1,
        "unitId": "U02",
        "unitTitle": "整理背包",
        "shortTitle": "装背包",
        "sceneId": "U02-L01",
        "words": [
          {
            "en": "bag",
            "zh": "包；背包",
            "audio": "f4de5a4ad12e1ae7"
          },
          {
            "en": "map",
            "zh": "地图",
            "audio": "505881157bdaa6e8"
          },
          {
            "en": "book",
            "zh": "书",
            "audio": "8dc69907b847d246"
          },
          {
            "en": "pen",
            "zh": "笔",
            "audio": "533f642ff644effe"
          },
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "box",
            "zh": "盒子；箱子",
            "audio": "6ddf405619257c0d"
          }
        ],
        "reviewWords": [
          {
            "en": "one",
            "zh": "一",
            "audio": "b71c3d31071c2bf3"
          },
          {
            "en": "two",
            "zh": "二",
            "audio": "89288bf10ca207ec"
          },
          {
            "en": "blue",
            "zh": "蓝色",
            "audio": "ee13203b244711d5"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "What's in your bag?",
            "zh": "你的包里有什么？",
            "audio": "96759cf20a3847c3"
          },
          {
            "speaker": "玩家",
            "en": "A map and a book.",
            "zh": "一张地图和一本书。",
            "audio": "6a74a6175023dd07"
          },
          {
            "speaker": "向导",
            "en": "Do you have a pen?",
            "zh": "你有笔吗？",
            "audio": "98554306c835fb20"
          },
          {
            "speaker": "玩家",
            "en": "Yes. I have a pen.",
            "zh": "有。我有一支笔。",
            "audio": "1ed1943db02cae8a"
          }
        ],
        "frameAudio": [
          "96759cf20a3847c3",
          "94e75342d03b8708",
          "4cc215e21abea2ab"
        ],
        "modelAudio": "f998d4dac7416ff4"
      },
      {
        "id": "U02-L02",
        "title": "补给站的小请求",
        "objective": "辨认基本食物饮料，并用 I need ... 表达需要。",
        "core": [
          [
            "water",
            "水"
          ],
          [
            "bread",
            "面包"
          ],
          [
            "apple",
            "苹果"
          ],
          [
            "milk",
            "牛奶"
          ],
          [
            "rice",
            "米饭；大米"
          ],
          [
            "egg",
            "鸡蛋"
          ]
        ],
        "review": [
          "bag",
          "book",
          "yes"
        ],
        "frames": [
          "I need water, please.",
          "Here you are.",
          "Thank you."
        ],
        "scene": "水杯、面包、苹果、牛奶、米饭、鸡蛋的原创图卡；水与牛奶应从容器内容和标识共同区分。",
        "dialogue": [
          [
            "玩家",
            "I need water, please.",
            "请给我一些水。"
          ],
          [
            "向导",
            "Here you are.",
            "给你。"
          ],
          [
            "玩家",
            "Thank you.",
            "谢谢。"
          ],
          [
            "向导",
            "You're welcome.",
            "不客气。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听请求，选择对应补给。",
            "audio": "I need water, please.",
            "options": [
              "水图卡",
              "面包图卡",
              "苹果图卡"
            ],
            "answer": "水图卡",
            "why": "water 是水；请求中需要的是水。",
            "id": "U02-L02-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "水图卡"
              },
              {
                "id": "o1",
                "text": "面包图卡"
              },
              {
                "id": "o2",
                "text": "苹果图卡"
              }
            ],
            "correct": "o0",
            "audioId": "60737fc3a9120a5d"
          },
          {
            "type": "read-choice",
            "prompt": "哪幅图对应 milk？",
            "options": [
              "牛奶图卡",
              "米饭图卡",
              "鸡蛋图卡"
            ],
            "answer": "牛奶图卡",
            "why": "milk 是牛奶。",
            "id": "U02-L02-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "牛奶图卡"
              },
              {
                "id": "o1",
                "text": "米饭图卡"
              },
              {
                "id": "o2",
                "text": "鸡蛋图卡"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "用词块表达“我需要面包”。",
            "tokens": [
              "bread",
              "need",
              "I"
            ],
            "answer": "I need bread.",
            "why": "这里 bread 是不可数名词，不添加 a。",
            "id": "U02-L02-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "bread"
              },
              {
                "id": "o1",
                "text": "need"
              },
              {
                "id": "o2",
                "text": "I"
              }
            ],
            "correct": "I need bread.",
            "answerAudio": "0eeba4b6f3866e25"
          }
        ],
        "say": {
          "prompt": "为背包选择一种补给，并礼貌提出请求。",
          "model": "I need an apple, please.",
          "note": "water、bread、milk、rice 前不机械加 a；apple 和 egg 用 an。示范正确短语即可，不要求背术语。"
        },
        "note": "本课是语言游戏，不是饮食建议；避免把虚构补给清单当作现实中的均衡饮食指导。",
        "number": 6,
        "withinUnit": 2,
        "unitId": "U02",
        "unitTitle": "整理背包",
        "shortTitle": "找补给",
        "sceneId": "U02-L02",
        "words": [
          {
            "en": "water",
            "zh": "水",
            "audio": "9a792197f5d0d983"
          },
          {
            "en": "bread",
            "zh": "面包",
            "audio": "0f4be29385999b46"
          },
          {
            "en": "apple",
            "zh": "苹果",
            "audio": "77a792627de7e5e0"
          },
          {
            "en": "milk",
            "zh": "牛奶",
            "audio": "f52648682d138a9d"
          },
          {
            "en": "rice",
            "zh": "米饭；大米",
            "audio": "c4263b91389f3606"
          },
          {
            "en": "egg",
            "zh": "鸡蛋",
            "audio": "3d6c11fff16dfca8"
          }
        ],
        "reviewWords": [
          {
            "en": "bag",
            "zh": "包；背包",
            "audio": "f4de5a4ad12e1ae7"
          },
          {
            "en": "book",
            "zh": "书",
            "audio": "8dc69907b847d246"
          },
          {
            "en": "yes",
            "zh": "是；对",
            "audio": "57cc6748df6298cc"
          }
        ],
        "lines": [
          {
            "speaker": "玩家",
            "en": "I need water, please.",
            "zh": "请给我一些水。",
            "audio": "ccdb489db0a60f5e"
          },
          {
            "speaker": "向导",
            "en": "Here you are.",
            "zh": "给你。",
            "audio": "fba17f87058894d3"
          },
          {
            "speaker": "玩家",
            "en": "Thank you.",
            "zh": "谢谢。",
            "audio": "7628b27f5c5ab542"
          },
          {
            "speaker": "向导",
            "en": "You're welcome.",
            "zh": "不客气。",
            "audio": "26472581ec770240"
          }
        ],
        "frameAudio": [
          "60737fc3a9120a5d",
          "fba17f87058894d3",
          "0be4516bfcc35f72"
        ],
        "modelAudio": "31c3074499d44329"
      },
      {
        "id": "U02-L03",
        "title": "大小背包与十把钥匙",
        "objective": "数七到十，并听懂 small / big 来选择合适的包。",
        "core": [
          [
            "seven",
            "七"
          ],
          [
            "eight",
            "八"
          ],
          [
            "nine",
            "九"
          ],
          [
            "ten",
            "十"
          ],
          [
            "small",
            "小的"
          ],
          [
            "big",
            "大的"
          ]
        ],
        "review": [
          "bag",
          "key",
          "six"
        ],
        "frames": [
          "How many keys? Eight keys.",
          "It's a big bag.",
          "It's a small bag."
        ],
        "scene": "大小明显不同的两个背包，及七至十把可逐一点击的钥匙；不用透视或远近造成大小歧义。",
        "dialogue": [
          [
            "向导",
            "How many keys?",
            "有几把钥匙？"
          ],
          [
            "玩家",
            "Eight keys.",
            "八把钥匙。"
          ],
          [
            "向导",
            "Is your bag big?",
            "你的包大吗？"
          ],
          [
            "玩家",
            "Yes. It's a big bag.",
            "大。它是一个大包。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听录音，选对应数量。",
            "audio": "Nine keys.",
            "options": [
              "九把钥匙",
              "七把钥匙",
              "十把钥匙"
            ],
            "answer": "九把钥匙",
            "why": "nine 对应九。",
            "id": "U02-L03-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "九把钥匙"
              },
              {
                "id": "o1",
                "text": "七把钥匙"
              },
              {
                "id": "o2",
                "text": "十把钥匙"
              }
            ],
            "correct": "o0",
            "audioId": "a3c1c28911f3b965"
          },
          {
            "type": "read-choice",
            "prompt": "按 a small bag 选图。",
            "options": [
              "小背包",
              "大背包",
              "大箱子"
            ],
            "answer": "小背包",
            "why": "small 表示小；bag 表示包。",
            "id": "U02-L03-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "小背包"
              },
              {
                "id": "o1",
                "text": "大背包"
              },
              {
                "id": "o2",
                "text": "大箱子"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "listen-choice",
            "prompt": "听录音，选大小和数量都正确的组合。",
            "audio": "A big bag. Ten keys.",
            "options": [
              "大背包与十把钥匙",
              "小背包与十把钥匙",
              "大背包与八把钥匙"
            ],
            "answer": "大背包与十把钥匙",
            "why": "同时匹配 big 和 ten。",
            "id": "U02-L03-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "大背包与十把钥匙"
              },
              {
                "id": "o1",
                "text": "小背包与十把钥匙"
              },
              {
                "id": "o2",
                "text": "大背包与八把钥匙"
              }
            ],
            "correct": "o0",
            "audioId": "8425bfa4f3dcb7c9"
          }
        ],
        "say": {
          "prompt": "说一说你选的背包大小，再说钥匙数量。",
          "model": "A big bag. Eight keys.",
          "note": "允许使用短语，不要求连成复杂句。"
        },
        "note": "keys 的复数形式随数量短语输入；不同时要求掌握所有名词的复数规则。",
        "number": 7,
        "withinUnit": 3,
        "unitId": "U02",
        "unitTitle": "整理背包",
        "shortTitle": "数钥匙",
        "sceneId": "U02-L03",
        "words": [
          {
            "en": "seven",
            "zh": "七",
            "audio": "dfda5994a4847988"
          },
          {
            "en": "eight",
            "zh": "八",
            "audio": "954787be320b2a83"
          },
          {
            "en": "nine",
            "zh": "九",
            "audio": "ff019cc81b945138"
          },
          {
            "en": "ten",
            "zh": "十",
            "audio": "d069be4de5ae1fa6"
          },
          {
            "en": "small",
            "zh": "小的",
            "audio": "0c96b5ec5d0cee26"
          },
          {
            "en": "big",
            "zh": "大的",
            "audio": "2c27da96e8bea238"
          }
        ],
        "reviewWords": [
          {
            "en": "bag",
            "zh": "包；背包",
            "audio": "f4de5a4ad12e1ae7"
          },
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "six",
            "zh": "六",
            "audio": "62c10b2fd6bf1002"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "How many keys?",
            "zh": "有几把钥匙？",
            "audio": "2352a16b8d51406d"
          },
          {
            "speaker": "玩家",
            "en": "Eight keys.",
            "zh": "八把钥匙。",
            "audio": "da8ee33f5b7ca54e"
          },
          {
            "speaker": "向导",
            "en": "Is your bag big?",
            "zh": "你的包大吗？",
            "audio": "176676da7ab9060a"
          },
          {
            "speaker": "玩家",
            "en": "Yes. It's a big bag.",
            "zh": "大。它是一个大包。",
            "audio": "de9a96a42eb19844"
          }
        ],
        "frameAudio": [
          "9b021f30de42ae73",
          "b17af02a2d3bbecf",
          "f807d712897dba3b"
        ],
        "modelAudio": "e5e6a58bede6c1cd"
      },
      {
        "id": "U02-L04",
        "title": "照清单出发",
        "objective": "根据简短清单选物品，并用 need / have 说明准备情况。",
        "core": [],
        "review": [
          "bag",
          "map",
          "key",
          "water",
          "apple",
          "two"
        ],
        "frames": [
          "I need water.",
          "I have a map.",
          "Two apples."
        ],
        "scene": "三只已装好的背包，每只显示所有内容，只有一只与清单完全一致；不让物品被遮挡。",
        "reading": "My bag: a map, two apples and water.",
        "dialogue": [
          [
            "向导",
            "Do you have a map?",
            "你有地图吗？"
          ],
          [
            "玩家",
            "Yes. I have a map.",
            "有。我有一张地图。"
          ],
          [
            "向导",
            "How many apples?",
            "有几个苹果？"
          ],
          [
            "玩家",
            "Two apples. I need water too.",
            "两个苹果。我还需要水。"
          ]
        ],
        "tasks": [
          {
            "type": "read-choice",
            "prompt": "按照本课清单选择背包。",
            "options": [
              "地图、两个苹果、水",
              "地图、一个苹果、水",
              "书、两个苹果、水"
            ],
            "answer": "地图、两个苹果、水",
            "why": "清单要求 a map、two apples 和 water，三项都要一致。",
            "id": "U02-L04-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "地图、两个苹果、水"
              },
              {
                "id": "o1",
                "text": "地图、一个苹果、水"
              },
              {
                "id": "o2",
                "text": "书、两个苹果、水"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "listen-choice",
            "prompt": "听录音，选择还需要的补给。",
            "audio": "I need water too.",
            "options": [
              "水",
              "牛奶",
              "米饭"
            ],
            "answer": "水",
            "why": "录音明确说需要 water。",
            "id": "U02-L04-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "水"
              },
              {
                "id": "o1",
                "text": "牛奶"
              },
              {
                "id": "o2",
                "text": "米饭"
              }
            ],
            "correct": "o0",
            "audioId": "e2fbea73f6e71378"
          },
          {
            "type": "build",
            "prompt": "告诉向导“我有一张地图”。",
            "tokens": [
              "a",
              "have",
              "map",
              "I"
            ],
            "answer": "I have a map.",
            "why": "使用 I have a ... 表达已经有的物品。",
            "id": "U02-L04-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "a"
              },
              {
                "id": "o1",
                "text": "have"
              },
              {
                "id": "o2",
                "text": "map"
              },
              {
                "id": "o3",
                "text": "I"
              }
            ],
            "correct": "I have a map.",
            "answerAudio": "94e75342d03b8708"
          }
        ],
        "say": {
          "prompt": "说出一样已经有的物品和一样还需要的补给。",
          "model": "I have a map. I need water.",
          "note": "接受任何符合所选清单、且表达自然的已学词替换。"
        },
        "note": "本课不新增核心词；先允许中文辅助理解清单格式，再减少中文提示。",
        "number": 8,
        "withinUnit": 4,
        "unitId": "U02",
        "unitTitle": "整理背包",
        "shortTitle": "照清单",
        "sceneId": "U02-L04",
        "words": [
          {
            "en": "bag",
            "zh": "包；背包",
            "audio": "f4de5a4ad12e1ae7"
          },
          {
            "en": "map",
            "zh": "地图",
            "audio": "505881157bdaa6e8"
          },
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "water",
            "zh": "水",
            "audio": "9a792197f5d0d983"
          },
          {
            "en": "apple",
            "zh": "苹果",
            "audio": "77a792627de7e5e0"
          },
          {
            "en": "two",
            "zh": "二",
            "audio": "89288bf10ca207ec"
          }
        ],
        "reviewWords": [
          {
            "en": "bag",
            "zh": "包；背包",
            "audio": "f4de5a4ad12e1ae7"
          },
          {
            "en": "map",
            "zh": "地图",
            "audio": "505881157bdaa6e8"
          },
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "water",
            "zh": "水",
            "audio": "9a792197f5d0d983"
          },
          {
            "en": "apple",
            "zh": "苹果",
            "audio": "77a792627de7e5e0"
          },
          {
            "en": "two",
            "zh": "二",
            "audio": "89288bf10ca207ec"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Do you have a map?",
            "zh": "你有地图吗？",
            "audio": "a0105f29d3354e51"
          },
          {
            "speaker": "玩家",
            "en": "Yes. I have a map.",
            "zh": "有。我有一张地图。",
            "audio": "580ec819b6c6f873"
          },
          {
            "speaker": "向导",
            "en": "How many apples?",
            "zh": "有几个苹果？",
            "audio": "b02faffcf8a6702a"
          },
          {
            "speaker": "玩家",
            "en": "Two apples. I need water too.",
            "zh": "两个苹果。我还需要水。",
            "audio": "d2a904d278115241"
          }
        ],
        "frameAudio": [
          "843eb5d3e4b87442",
          "94e75342d03b8708",
          "ebef5583b61ee3c5"
        ],
        "modelAudio": "2082738378fde296",
        "readingAudio": "00f520c8c67ce9b2",
        "readingZH": [
          "我的背包：一张地图、两个苹果和水。"
        ]
      }
    ],
    "number": 2
  },
  {
    "id": "U03",
    "title": "我的像素小屋",
    "goal": "认识屋内物品，理解位置词和简单行动指令。",
    "checkpoint": "根据一句位置提示找到钥匙，完成开门或坐下的指令，并尝试描述物品位置。",
    "lessons": [
      {
        "id": "U03-L01",
        "title": "我的第一个房间",
        "objective": "辨认房屋与家具，用简单句指出房间里有什么。",
        "core": [
          [
            "house",
            "房子"
          ],
          [
            "room",
            "房间"
          ],
          [
            "door",
            "门"
          ],
          [
            "window",
            "窗户"
          ],
          [
            "bed",
            "床"
          ],
          [
            "chair",
            "椅子"
          ]
        ],
        "review": [
          "big",
          "small",
          "blue"
        ],
        "frames": [
          "This is my house.",
          "There is a bed.",
          "There is a chair too."
        ],
        "scene": "房屋外观图与可切换的室内图，清楚呈现门、窗、床、椅子；house 与 room 不用同一张图混淆。",
        "dialogue": [
          [
            "向导",
            "This is your room.",
            "这是你的房间。"
          ],
          [
            "玩家",
            "There is a bed.",
            "里面有一张床。"
          ],
          [
            "向导",
            "Yes, and a chair.",
            "对，还有一把椅子。"
          ],
          [
            "玩家",
            "There is a window too.",
            "还有一扇窗户。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听录音，找到对应家具。",
            "audio": "A chair.",
            "options": [
              "椅子图卡",
              "床图卡",
              "窗户图卡"
            ],
            "answer": "椅子图卡",
            "why": "chair 是椅子。",
            "id": "U03-L01-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "椅子图卡"
              },
              {
                "id": "o1",
                "text": "床图卡"
              },
              {
                "id": "o2",
                "text": "窗户图卡"
              }
            ],
            "correct": "o0",
            "audioId": "c5666ecd8da428f3"
          },
          {
            "type": "read-choice",
            "prompt": "选择与 There is a bed. 一致的图。",
            "options": [
              "有一张床的房间",
              "只有箱子的房间",
              "只有椅子的房间"
            ],
            "answer": "有一张床的房间",
            "why": "句子说房间里有一张床；不代表房间里只能有床。",
            "id": "U03-L01-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "有一张床的房间"
              },
              {
                "id": "o1",
                "text": "只有箱子的房间"
              },
              {
                "id": "o2",
                "text": "只有椅子的房间"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "用词块说“这里有一扇窗户”。",
            "tokens": [
              "a",
              "window",
              "There",
              "is"
            ],
            "answer": "There is a window.",
            "why": "There is a ... 用于介绍一个存在的物品。",
            "id": "U03-L01-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "a"
              },
              {
                "id": "o1",
                "text": "window"
              },
              {
                "id": "o2",
                "text": "There"
              },
              {
                "id": "o3",
                "text": "is"
              }
            ],
            "correct": "There is a window.",
            "answerAudio": "092e976072d663cb"
          }
        ],
        "say": {
          "prompt": "指着房间里的一个物品，介绍它。",
          "model": "There is a chair.",
          "note": "也接受 This is a chair.；不因句型不同而判错。"
        },
        "note": "首次只处理单数 There is，不把 There are 和复杂复数一起加入。",
        "number": 9,
        "withinUnit": 1,
        "unitId": "U03",
        "unitTitle": "我的像素小屋",
        "shortTitle": "看房间",
        "sceneId": "U03-L01",
        "words": [
          {
            "en": "house",
            "zh": "房子",
            "audio": "ea12a9d29e129848"
          },
          {
            "en": "room",
            "zh": "房间",
            "audio": "e629190093215210"
          },
          {
            "en": "door",
            "zh": "门",
            "audio": "ffdc982cd77d6b8f"
          },
          {
            "en": "window",
            "zh": "窗户",
            "audio": "7b118234600e0bed"
          },
          {
            "en": "bed",
            "zh": "床",
            "audio": "1dee24ac4087dad4"
          },
          {
            "en": "chair",
            "zh": "椅子",
            "audio": "c214134070f22dbe"
          }
        ],
        "reviewWords": [
          {
            "en": "big",
            "zh": "大的",
            "audio": "2c27da96e8bea238"
          },
          {
            "en": "small",
            "zh": "小的",
            "audio": "0c96b5ec5d0cee26"
          },
          {
            "en": "blue",
            "zh": "蓝色",
            "audio": "ee13203b244711d5"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "This is your room.",
            "zh": "这是你的房间。",
            "audio": "e681522b05ae4c48"
          },
          {
            "speaker": "玩家",
            "en": "There is a bed.",
            "zh": "里面有一张床。",
            "audio": "d04cce351f82aa79"
          },
          {
            "speaker": "向导",
            "en": "Yes, and a chair.",
            "zh": "对，还有一把椅子。",
            "audio": "6bbeeb5e70e3df9f"
          },
          {
            "speaker": "玩家",
            "en": "There is a window too.",
            "zh": "还有一扇窗户。",
            "audio": "93532d1471c42a9d"
          }
        ],
        "frameAudio": [
          "1e515a108b549586",
          "8e0fea4aae7ed0a8",
          "a0e99fac08489906"
        ],
        "modelAudio": "09459ae9386e9340"
      },
      {
        "id": "U03-L02",
        "title": "钥匙藏在哪里",
        "objective": "理解 in、on、under、near，能根据位置句找到物品。",
        "core": [
          [
            "in",
            "在……里面"
          ],
          [
            "on",
            "在……上面"
          ],
          [
            "under",
            "在……下面"
          ],
          [
            "near",
            "在……附近"
          ],
          [
            "table",
            "桌子"
          ],
          [
            "lamp",
            "灯；台灯"
          ]
        ],
        "review": [
          "key",
          "box",
          "door"
        ],
        "frames": [
          "Where is the key?",
          "It's under the table.",
          "The lamp is on the table."
        ],
        "scene": "钥匙在桌子下面，灯在桌子上面，书在箱子里面，箱子在门附近；图中各位置必须清晰无重叠。",
        "dialogue": [
          [
            "向导",
            "Where is the key?",
            "钥匙在哪里？"
          ],
          [
            "玩家",
            "It's under the table.",
            "它在桌子下面。"
          ],
          [
            "向导",
            "Where is the lamp?",
            "灯在哪里？"
          ],
          [
            "玩家",
            "It's on the table.",
            "它在桌子上面。"
          ]
        ],
        "tasks": [
          {
            "type": "scene-choice",
            "prompt": "听提示，在三幅独立场景图中选正确的一幅。",
            "audio": "The key is under the table.",
            "options": [
              "钥匙在桌子下面",
              "钥匙在桌子上面",
              "钥匙在箱子里面"
            ],
            "answer": "钥匙在桌子下面",
            "why": "under 表示在下面，不能与 on 混淆。",
            "id": "U03-L02-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "钥匙在桌子下面"
              },
              {
                "id": "o1",
                "text": "钥匙在桌子上面"
              },
              {
                "id": "o2",
                "text": "钥匙在箱子里面"
              }
            ],
            "correct": "o0",
            "audioId": "41c28576cde03cc3"
          },
          {
            "type": "read-choice",
            "prompt": "书放在箱子里面。哪个词应填入 The book is ___ the box.？",
            "options": [
              "in",
              "under",
              "on"
            ],
            "answer": "in",
            "why": "本题明确是箱子内部，所以用 in。",
            "id": "U03-L02-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "in"
              },
              {
                "id": "o1",
                "text": "under"
              },
              {
                "id": "o2",
                "text": "on"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "根据场景图说“灯在桌子上”。",
            "tokens": [
              "on",
              "The",
              "table",
              "is",
              "lamp",
              "the"
            ],
            "answer": "The lamp is on the table.",
            "why": "先说物品，再用 is on the table 说明位置。",
            "id": "U03-L02-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "on"
              },
              {
                "id": "o1",
                "text": "The"
              },
              {
                "id": "o2",
                "text": "table"
              },
              {
                "id": "o3",
                "text": "is"
              },
              {
                "id": "o4",
                "text": "lamp"
              },
              {
                "id": "o5",
                "text": "the"
              }
            ],
            "correct": "The lamp is on the table.",
            "answerAudio": "c69a65bfad9bfb51"
          }
        ],
        "say": {
          "prompt": "选择一件物品并说位置。",
          "model": "The box is near the door.",
          "note": "可按新摆放的场景自由替换，答案必须与图一致。"
        },
        "note": "on 此处表示空间位置；不要在本课顺便测试灯的 on/off 状态含义。",
        "number": 10,
        "withinUnit": 2,
        "unitId": "U03",
        "unitTitle": "我的像素小屋",
        "shortTitle": "找位置",
        "sceneId": "U03-L02",
        "words": [
          {
            "en": "in",
            "zh": "在……里面",
            "audio": "37db36375fe42c46"
          },
          {
            "en": "on",
            "zh": "在……上面",
            "audio": "00c390d622b4b4da"
          },
          {
            "en": "under",
            "zh": "在……下面",
            "audio": "763ba1b9fa510c05"
          },
          {
            "en": "near",
            "zh": "在……附近",
            "audio": "e831f2c0b96ef031"
          },
          {
            "en": "table",
            "zh": "桌子",
            "audio": "2e7a4ee0f9742dc2"
          },
          {
            "en": "lamp",
            "zh": "灯；台灯",
            "audio": "9b88bbffb29306a2"
          }
        ],
        "reviewWords": [
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "box",
            "zh": "盒子；箱子",
            "audio": "6ddf405619257c0d"
          },
          {
            "en": "door",
            "zh": "门",
            "audio": "ffdc982cd77d6b8f"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Where is the key?",
            "zh": "钥匙在哪里？",
            "audio": "9a58a528c6e44222"
          },
          {
            "speaker": "玩家",
            "en": "It's under the table.",
            "zh": "它在桌子下面。",
            "audio": "de4be097022500e6"
          },
          {
            "speaker": "向导",
            "en": "Where is the lamp?",
            "zh": "灯在哪里？",
            "audio": "90afd6d40f0c2d23"
          },
          {
            "speaker": "玩家",
            "en": "It's on the table.",
            "zh": "它在桌子上面。",
            "audio": "e285d74c9b15f52a"
          }
        ],
        "frameAudio": [
          "9a58a528c6e44222",
          "0aa725c035243e08",
          "c69a65bfad9bfb51"
        ],
        "modelAudio": "2519196ce1b837c3"
      },
      {
        "id": "U03-L03",
        "title": "小屋行动口令",
        "objective": "听懂六个常见动作，按礼貌指令操作屏幕角色。",
        "core": [
          [
            "open",
            "打开"
          ],
          [
            "close",
            "关上"
          ],
          [
            "sit",
            "坐"
          ],
          [
            "stand",
            "站立"
          ],
          [
            "look",
            "看"
          ],
          [
            "stop",
            "停止"
          ]
        ],
        "review": [
          "door",
          "chair",
          "window"
        ],
        "frames": [
          "Open the door, please.",
          "Close the door.",
          "Sit down. Stand up."
        ],
        "scene": "角色、椅子与可开合的门；只要求操作屏幕角色，不要求孩子现实中跑动或操作门窗。",
        "dialogue": [
          [
            "向导",
            "Look! A chair.",
            "看！一把椅子。"
          ],
          [
            "玩家",
            "A blue chair!",
            "一把蓝色椅子！"
          ],
          [
            "向导",
            "Sit down, please.",
            "请坐下。"
          ],
          [
            "玩家",
            "Thank you.",
            "谢谢。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听指令，选择相应动作图解。",
            "audio": "Close the door.",
            "options": [
              "关门动作",
              "开门动作",
              "坐下动作"
            ],
            "answer": "关门动作",
            "why": "close 是关上；open 是打开。",
            "id": "U03-L03-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "关门动作"
              },
              {
                "id": "o1",
                "text": "开门动作"
              },
              {
                "id": "o2",
                "text": "坐下动作"
              }
            ],
            "correct": "o0",
            "audioId": "74cbd957a6d3ca63"
          },
          {
            "type": "listen-choice",
            "prompt": "角色正在行走。听指令，选择接下来应做的动作。",
            "audio": "Stop!",
            "options": [
              "停止动作",
              "站起动作",
              "看窗户的动作"
            ],
            "answer": "停止动作",
            "why": "Stop 要求停止当前动作。",
            "id": "U03-L03-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "停止动作"
              },
              {
                "id": "o1",
                "text": "站起动作"
              },
              {
                "id": "o2",
                "text": "看窗户的动作"
              }
            ],
            "correct": "o0",
            "audioId": "b63a8a896902c353"
          },
          {
            "type": "read-choice",
            "prompt": "看到 Stand up, please. 时，应选择哪个动作？",
            "options": [
              "角色从椅子上站起来",
              "角色坐到椅子上",
              "角色打开门"
            ],
            "answer": "角色从椅子上站起来",
            "why": "stand up 是站起来，与 sit down 相对。",
            "id": "U03-L03-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "角色从椅子上站起来"
              },
              {
                "id": "o1",
                "text": "角色坐到椅子上"
              },
              {
                "id": "o2",
                "text": "角色打开门"
              }
            ],
            "correct": "o0"
          }
        ],
        "say": {
          "prompt": "给屏幕里的向导一个礼貌口令。",
          "model": "Open the door, please.",
          "note": "接受使用已学动作与对应物品构成的自然指令。"
        },
        "note": "sit down 和 stand up 作为完整表达学习，不把 down/up 强行拆为额外词汇考点。",
        "number": 11,
        "withinUnit": 3,
        "unitId": "U03",
        "unitTitle": "我的像素小屋",
        "shortTitle": "做动作",
        "sceneId": "U03-L03",
        "words": [
          {
            "en": "open",
            "zh": "打开",
            "audio": "694cc008c13b3ebf"
          },
          {
            "en": "close",
            "zh": "关上",
            "audio": "4004be9154567e53"
          },
          {
            "en": "sit",
            "zh": "坐",
            "audio": "7567ec4b37d36714"
          },
          {
            "en": "stand",
            "zh": "站立",
            "audio": "805c7e9b653e425a"
          },
          {
            "en": "look",
            "zh": "看",
            "audio": "fc048eb767f89b11"
          },
          {
            "en": "stop",
            "zh": "停止",
            "audio": "bf161ba524dcb163"
          }
        ],
        "reviewWords": [
          {
            "en": "door",
            "zh": "门",
            "audio": "ffdc982cd77d6b8f"
          },
          {
            "en": "chair",
            "zh": "椅子",
            "audio": "c214134070f22dbe"
          },
          {
            "en": "window",
            "zh": "窗户",
            "audio": "7b118234600e0bed"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Look! A chair.",
            "zh": "看！一把椅子。",
            "audio": "0e00997a60475fe7"
          },
          {
            "speaker": "玩家",
            "en": "A blue chair!",
            "zh": "一把蓝色椅子！",
            "audio": "a20e590951b1b497"
          },
          {
            "speaker": "向导",
            "en": "Sit down, please.",
            "zh": "请坐下。",
            "audio": "ee8bdd4697b87333"
          },
          {
            "speaker": "玩家",
            "en": "Thank you.",
            "zh": "谢谢。",
            "audio": "7628b27f5c5ab542"
          }
        ],
        "frameAudio": [
          "9369d76c64d6e2ec",
          "74cbd957a6d3ca63",
          "481f55f15edcf25f"
        ],
        "modelAudio": "a5196ef273dc0086"
      },
      {
        "id": "U03-L04",
        "title": "找到钥匙，打开小屋",
        "objective": "把位置理解和动作指令连起来完成小屋任务。",
        "core": [],
        "review": [
          "key",
          "door",
          "chair",
          "under",
          "open",
          "sit"
        ],
        "frames": [
          "The key is under the chair.",
          "Open the door.",
          "Sit down, please."
        ],
        "scene": "一把钥匙位于椅子下方，桌面上没有钥匙；取得钥匙后可以打开小屋门。",
        "reading": "The key is under the chair.\nOpen the door.\nSit down, please.",
        "dialogue": [
          [
            "向导",
            "Where is the key?",
            "钥匙在哪里？"
          ],
          [
            "玩家",
            "It's under the chair.",
            "它在椅子下面。"
          ],
          [
            "向导",
            "Open the door, please.",
            "请打开门。"
          ],
          [
            "玩家",
            "Yes. Thank you!",
            "好的。谢谢！"
          ]
        ],
        "tasks": [
          {
            "type": "read-choice",
            "prompt": "根据本课便条，钥匙在哪里？",
            "options": [
              "椅子下面",
              "椅子上面",
              "箱子里面"
            ],
            "answer": "椅子下面",
            "why": "便条明确写着 under the chair。",
            "id": "U03-L04-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "椅子下面"
              },
              {
                "id": "o1",
                "text": "椅子上面"
              },
              {
                "id": "o2",
                "text": "箱子里面"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "order",
            "prompt": "按照任务流程排列操作。",
            "options": [
              "Sit down.",
              "Open the door.",
              "Look under the chair."
            ],
            "answer": [
              "Look under the chair.",
              "Open the door.",
              "Sit down."
            ],
            "why": "先根据位置找到钥匙，再打开门，最后坐下；任务不要求现实操作。",
            "id": "U03-L04-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "Sit down."
              },
              {
                "id": "o1",
                "text": "Open the door."
              },
              {
                "id": "o2",
                "text": "Look under the chair."
              }
            ],
            "correct": [
              "o2",
              "o1",
              "o0"
            ]
          },
          {
            "type": "build",
            "prompt": "把钥匙的位置告诉朋友。",
            "tokens": [
              "chair",
              "The",
              "under",
              "is",
              "key",
              "the"
            ],
            "answer": "The key is under the chair.",
            "why": "under the chair 是本课要求的位置。",
            "id": "U03-L04-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "chair"
              },
              {
                "id": "o1",
                "text": "The"
              },
              {
                "id": "o2",
                "text": "under"
              },
              {
                "id": "o3",
                "text": "is"
              },
              {
                "id": "o4",
                "text": "key"
              },
              {
                "id": "o5",
                "text": "the"
              }
            ],
            "correct": "The key is under the chair.",
            "answerAudio": "3e84afaa2618ddf6"
          }
        ],
        "say": {
          "prompt": "用一句话说钥匙位置，再给一个行动口令。",
          "model": "The key is under the chair. Open the door, please.",
          "note": "允许先听示范再跟读；表达尝试不自动算作已经掌握。"
        },
        "note": "复习关不新增核心词；读不出便条时允许先听录音，记录使用了提示。",
        "number": 12,
        "withinUnit": 4,
        "unitId": "U03",
        "unitTitle": "我的像素小屋",
        "shortTitle": "开小屋",
        "sceneId": "U03-L04",
        "words": [
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "door",
            "zh": "门",
            "audio": "ffdc982cd77d6b8f"
          },
          {
            "en": "chair",
            "zh": "椅子",
            "audio": "c214134070f22dbe"
          },
          {
            "en": "under",
            "zh": "在……下面",
            "audio": "763ba1b9fa510c05"
          },
          {
            "en": "open",
            "zh": "打开",
            "audio": "694cc008c13b3ebf"
          },
          {
            "en": "sit",
            "zh": "坐",
            "audio": "7567ec4b37d36714"
          }
        ],
        "reviewWords": [
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "door",
            "zh": "门",
            "audio": "ffdc982cd77d6b8f"
          },
          {
            "en": "chair",
            "zh": "椅子",
            "audio": "c214134070f22dbe"
          },
          {
            "en": "under",
            "zh": "在……下面",
            "audio": "763ba1b9fa510c05"
          },
          {
            "en": "open",
            "zh": "打开",
            "audio": "694cc008c13b3ebf"
          },
          {
            "en": "sit",
            "zh": "坐",
            "audio": "7567ec4b37d36714"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Where is the key?",
            "zh": "钥匙在哪里？",
            "audio": "9a58a528c6e44222"
          },
          {
            "speaker": "玩家",
            "en": "It's under the chair.",
            "zh": "它在椅子下面。",
            "audio": "c570ad7115b84cb0"
          },
          {
            "speaker": "向导",
            "en": "Open the door, please.",
            "zh": "请打开门。",
            "audio": "9369d76c64d6e2ec"
          },
          {
            "speaker": "玩家",
            "en": "Yes. Thank you!",
            "zh": "好的。谢谢！",
            "audio": "2e2ebf2f40af4028"
          }
        ],
        "frameAudio": [
          "3e84afaa2618ddf6",
          "c84f5578e6552f37",
          "ee8bdd4697b87333"
        ],
        "modelAudio": "06a33ae8469bf6dc",
        "readingAudio": "0aa78d2681432577",
        "readingZH": [
          "钥匙在椅子下面。",
          "打开门。",
          "请坐下。"
        ]
      }
    ],
    "number": 3
  },
  {
    "id": "U04",
    "title": "农场与伙伴",
    "goal": "认识常见动物与动作，理解 can / can't，并用简单请求协作。",
    "checkpoint": "辨认动物，根据明确场景理解能力或动作，听懂一条帮助请求。",
    "lessons": [
      {
        "id": "U04-L01",
        "title": "认识六位动物伙伴",
        "objective": "辨认六种动物，并用 It's a ... 说明看到的动物。",
        "core": [
          [
            "cat",
            "猫"
          ],
          [
            "dog",
            "狗"
          ],
          [
            "cow",
            "奶牛；牛"
          ],
          [
            "pig",
            "猪"
          ],
          [
            "hen",
            "母鸡"
          ],
          [
            "duck",
            "鸭子"
          ]
        ],
        "review": [
          "white",
          "black",
          "three"
        ],
        "frames": [
          "What's this?",
          "It's a duck.",
          "Is it a duck? No. It's a hen."
        ],
        "scene": "六种外形明显不同的原创像素动物；母鸡与鸭子分别展示，不用只有颜色不同的近似图。",
        "dialogue": [
          [
            "向导",
            "What's this?",
            "这是什么？"
          ],
          [
            "玩家",
            "It's a duck.",
            "它是一只鸭子。"
          ],
          [
            "向导",
            "Is it a hen?",
            "它是一只母鸡吗？"
          ],
          [
            "玩家",
            "No. It's a duck.",
            "不是。它是一只鸭子。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听录音选择动物。",
            "audio": "A cow.",
            "options": [
              "奶牛图卡",
              "猪图卡",
              "狗图卡"
            ],
            "answer": "奶牛图卡",
            "why": "cow 是牛；本图展示奶牛。",
            "id": "U04-L01-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "奶牛图卡"
              },
              {
                "id": "o1",
                "text": "猪图卡"
              },
              {
                "id": "o2",
                "text": "狗图卡"
              }
            ],
            "correct": "o0",
            "audioId": "746d9d5f6fd47715"
          },
          {
            "type": "read-choice",
            "prompt": "图中是母鸡，选择对应词。",
            "options": [
              "hen",
              "duck",
              "cat"
            ],
            "answer": "hen",
            "why": "hen 指母鸡；duck 是鸭子。",
            "id": "U04-L01-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "hen"
              },
              {
                "id": "o1",
                "text": "duck"
              },
              {
                "id": "o2",
                "text": "cat"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "介绍图中的猫。",
            "tokens": [
              "cat",
              "a",
              "It",
              "is"
            ],
            "answer": "It is a cat.",
            "why": "用 It is a ... 介绍一个动物。",
            "id": "U04-L01-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "cat"
              },
              {
                "id": "o1",
                "text": "a"
              },
              {
                "id": "o2",
                "text": "It"
              },
              {
                "id": "o3",
                "text": "is"
              }
            ],
            "correct": "It is a cat.",
            "answerAudio": "6a8d89888250b6d9"
          }
        ],
        "say": {
          "prompt": "选一个动物，介绍它的名称或颜色。",
          "model": "It's a dog. It's black.",
          "note": "实际颜色须与图一致；不要求额外介绍习性。"
        },
        "note": "不把动物能力或饮食常识隐藏成词汇题；当前目标只是名称与简单描述。",
        "number": 13,
        "withinUnit": 1,
        "unitId": "U04",
        "unitTitle": "农场与伙伴",
        "shortTitle": "认动物",
        "sceneId": "U04-L01",
        "words": [
          {
            "en": "cat",
            "zh": "猫",
            "audio": "1d37a5fd6f6915d3"
          },
          {
            "en": "dog",
            "zh": "狗",
            "audio": "7652172ad6b77e3f"
          },
          {
            "en": "cow",
            "zh": "奶牛；牛",
            "audio": "5d322ddd6609057d"
          },
          {
            "en": "pig",
            "zh": "猪",
            "audio": "07db2393fe948a5a"
          },
          {
            "en": "hen",
            "zh": "母鸡",
            "audio": "af05adb3fa20a49c"
          },
          {
            "en": "duck",
            "zh": "鸭子",
            "audio": "ea018b94fe024258"
          }
        ],
        "reviewWords": [
          {
            "en": "white",
            "zh": "白色",
            "audio": "cf30df996a7b80c9"
          },
          {
            "en": "black",
            "zh": "黑色",
            "audio": "ea8f7361a54130ad"
          },
          {
            "en": "three",
            "zh": "三",
            "audio": "9d0bdd41b4515a37"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "What's this?",
            "zh": "这是什么？",
            "audio": "1cb1dacc3a329720"
          },
          {
            "speaker": "玩家",
            "en": "It's a duck.",
            "zh": "它是一只鸭子。",
            "audio": "f6a91fe7d45a0cc8"
          },
          {
            "speaker": "向导",
            "en": "Is it a hen?",
            "zh": "它是一只母鸡吗？",
            "audio": "53c4e289781fce75"
          },
          {
            "speaker": "玩家",
            "en": "No. It's a duck.",
            "zh": "不是。它是一只鸭子。",
            "audio": "cc980c0a7f4efb49"
          }
        ],
        "frameAudio": [
          "1cb1dacc3a329720",
          "c9e2f74f48984d8d",
          "57661f4a2b3689b7"
        ],
        "modelAudio": "ac4a575b5a02b360"
      },
      {
        "id": "U04-L02",
        "title": "谁会游泳",
        "objective": "辨认六种动作，并用 can / can't 表达能做或不能做。",
        "core": [
          [
            "run",
            "跑"
          ],
          [
            "jump",
            "跳"
          ],
          [
            "swim",
            "游泳"
          ],
          [
            "walk",
            "走路"
          ],
          [
            "fly",
            "飞"
          ],
          [
            "sleep",
            "睡觉"
          ]
        ],
        "review": [
          "duck",
          "cow",
          "dog"
        ],
        "frames": [
          "Can a duck swim?",
          "Yes, it can.",
          "Can a cow fly? No, it can't."
        ],
        "scene": "鸭子游泳、狗跳跃、角色走路等清晰动作动画；题目依据明确动画或无歧义事实，不以刻板印象推测所有动物能力。",
        "dialogue": [
          [
            "向导",
            "Can a duck swim?",
            "鸭子会游泳吗？"
          ],
          [
            "玩家",
            "Yes, it can.",
            "会。"
          ],
          [
            "向导",
            "Can a cow fly?",
            "牛会飞吗？"
          ],
          [
            "玩家",
            "No, it can't.",
            "不会。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听动作词，选对应动作图。",
            "audio": "Jump.",
            "options": [
              "跳跃动画",
              "睡觉动画",
              "走路动画"
            ],
            "answer": "跳跃动画",
            "why": "jump 表示跳。",
            "id": "U04-L02-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "跳跃动画"
              },
              {
                "id": "o1",
                "text": "睡觉动画"
              },
              {
                "id": "o2",
                "text": "走路动画"
              }
            ],
            "correct": "o0",
            "audioId": "114653d4abf45466"
          },
          {
            "type": "read-choice",
            "prompt": "图解中鸭子正在水里游泳。选择图解所表现的动作词。",
            "options": [
              "swim",
              "fly",
              "sleep"
            ],
            "answer": "swim",
            "why": "图解展示的是 swim。本题不推断鸭子还会不会其他动作，也不把 can 和正在做某动作混为一谈。",
            "id": "U04-L02-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "swim"
              },
              {
                "id": "o1",
                "text": "fly"
              },
              {
                "id": "o2",
                "text": "sleep"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "说“我会跑”。",
            "tokens": [
              "run",
              "can",
              "I"
            ],
            "answer": "I can run.",
            "why": "can 后使用动作原形 run。",
            "id": "U04-L02-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "run"
              },
              {
                "id": "o1",
                "text": "can"
              },
              {
                "id": "o2",
                "text": "I"
              }
            ],
            "correct": "I can run.",
            "answerAudio": "542a54efcb326c7c"
          }
        ],
        "say": {
          "prompt": "说一种自己或屏幕角色会做的动作。",
          "model": "I can jump.",
          "note": "按个人情况选择，不要求孩子现实表演或做有风险的动作。"
        },
        "note": "不要出“牛不会游泳”“母鸡绝对不会飞”等容易出错的常识题。can 与 can't 先用肯定/否定图示对照。",
        "number": 14,
        "withinUnit": 2,
        "unitId": "U04",
        "unitTitle": "农场与伙伴",
        "shortTitle": "看动作",
        "sceneId": "U04-L02",
        "words": [
          {
            "en": "run",
            "zh": "跑",
            "audio": "d6b85baa593deb1f"
          },
          {
            "en": "jump",
            "zh": "跳",
            "audio": "6047c59837021bce"
          },
          {
            "en": "swim",
            "zh": "游泳",
            "audio": "8b5b206291c3b5f3"
          },
          {
            "en": "walk",
            "zh": "走路",
            "audio": "f8fe598a1b9ef8b6"
          },
          {
            "en": "fly",
            "zh": "飞",
            "audio": "a5d1ffb09ca6ef48"
          },
          {
            "en": "sleep",
            "zh": "睡觉",
            "audio": "8859b88ffda5d25f"
          }
        ],
        "reviewWords": [
          {
            "en": "duck",
            "zh": "鸭子",
            "audio": "ea018b94fe024258"
          },
          {
            "en": "cow",
            "zh": "奶牛；牛",
            "audio": "5d322ddd6609057d"
          },
          {
            "en": "dog",
            "zh": "狗",
            "audio": "7652172ad6b77e3f"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Can a duck swim?",
            "zh": "鸭子会游泳吗？",
            "audio": "aa7e588035f505a6"
          },
          {
            "speaker": "玩家",
            "en": "Yes, it can.",
            "zh": "会。",
            "audio": "915f54111201193a"
          },
          {
            "speaker": "向导",
            "en": "Can a cow fly?",
            "zh": "牛会飞吗？",
            "audio": "9936c200b20ba9f1"
          },
          {
            "speaker": "玩家",
            "en": "No, it can't.",
            "zh": "不会。",
            "audio": "06163abc6cad8fa3"
          }
        ],
        "frameAudio": [
          "aa7e588035f505a6",
          "fa40b05ca723219e",
          "6a931062fbec2193"
        ],
        "modelAudio": "f39f44eb2f14f1c3"
      },
      {
        "id": "U04-L03",
        "title": "一起找回鸭子",
        "objective": "听懂帮助与协作指令，用 Can you help me? 提出简单请求。",
        "core": [
          [
            "feed",
            "喂养"
          ],
          [
            "help",
            "帮助"
          ],
          [
            "find",
            "找到；寻找"
          ],
          [
            "give",
            "给"
          ],
          [
            "come",
            "来"
          ],
          [
            "follow",
            "跟随"
          ]
        ],
        "review": [
          "duck",
          "map",
          "key"
        ],
        "frames": [
          "Can you help me?",
          "Follow me, please.",
          "Let's find the duck.",
          "Give me the key, please."
        ],
        "scene": "向导与玩家寻找一只鸭子；给出跟随、找鸭子、递钥匙的独立动作图。喂养只作虚拟动画，不给现实动物饮食建议。",
        "dialogue": [
          [
            "向导",
            "Can you help me?",
            "你能帮我吗？"
          ],
          [
            "玩家",
            "Yes.",
            "能。"
          ],
          [
            "向导",
            "Come here. Follow me.",
            "来这里。跟我来。"
          ],
          [
            "玩家",
            "Let's find the duck.",
            "我们一起找鸭子吧。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听指令，选对应动作。",
            "audio": "Follow me, please.",
            "options": [
              "玩家跟着向导走",
              "玩家原地睡觉",
              "玩家关门"
            ],
            "answer": "玩家跟着向导走",
            "why": "follow 表示跟随；me 指说话的向导。",
            "id": "U04-L03-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "玩家跟着向导走"
              },
              {
                "id": "o1",
                "text": "玩家原地睡觉"
              },
              {
                "id": "o2",
                "text": "玩家关门"
              }
            ],
            "correct": "o0",
            "audioId": "1bac659002ac7073"
          },
          {
            "type": "read-choice",
            "prompt": "Give me the key, please. 要求递出什么？",
            "options": [
              "钥匙",
              "地图",
              "书"
            ],
            "answer": "钥匙",
            "why": "key 是钥匙；give me 表示给我。",
            "id": "U04-L03-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "钥匙"
              },
              {
                "id": "o1",
                "text": "地图"
              },
              {
                "id": "o2",
                "text": "书"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "提出“你能帮我吗”的请求。",
            "tokens": [
              "you",
              "me",
              "Can",
              "help"
            ],
            "answer": "Can you help me?",
            "why": "请求句的顺序是 Can you help me?，结尾使用问号。",
            "id": "U04-L03-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "you"
              },
              {
                "id": "o1",
                "text": "me"
              },
              {
                "id": "o2",
                "text": "Can"
              },
              {
                "id": "o3",
                "text": "help"
              }
            ],
            "correct": "Can you help me?",
            "answerAudio": "386355a3e9824dd9"
          }
        ],
        "say": {
          "prompt": "向同伴提出一个帮助请求，并尝试回应。",
          "model": "Can you help me? Yes.",
          "note": "可由家长扮演一方，也可轮流模仿两个角色。"
        },
        "note": "feed、come 等词可用动作卡练，不要求每个词都塞进同一段对话。",
        "number": 15,
        "withinUnit": 3,
        "unitId": "U04",
        "unitTitle": "农场与伙伴",
        "shortTitle": "来帮忙",
        "sceneId": "U04-L03",
        "words": [
          {
            "en": "feed",
            "zh": "喂养",
            "audio": "a498c8fede7a9be4"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          },
          {
            "en": "find",
            "zh": "找到；寻找",
            "audio": "6e9e1662fc9b774c"
          },
          {
            "en": "give",
            "zh": "给",
            "audio": "981dcc231b338760"
          },
          {
            "en": "come",
            "zh": "来",
            "audio": "c7910b86508c92d5"
          },
          {
            "en": "follow",
            "zh": "跟随",
            "audio": "91cfc6673c2cc8f3"
          }
        ],
        "reviewWords": [
          {
            "en": "duck",
            "zh": "鸭子",
            "audio": "ea018b94fe024258"
          },
          {
            "en": "map",
            "zh": "地图",
            "audio": "505881157bdaa6e8"
          },
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Can you help me?",
            "zh": "你能帮我吗？",
            "audio": "386355a3e9824dd9"
          },
          {
            "speaker": "玩家",
            "en": "Yes.",
            "zh": "能。",
            "audio": "d16b90fdbef1962e"
          },
          {
            "speaker": "向导",
            "en": "Come here. Follow me.",
            "zh": "来这里。跟我来。",
            "audio": "ef9b048d0b228592"
          },
          {
            "speaker": "玩家",
            "en": "Let's find the duck.",
            "zh": "我们一起找鸭子吧。",
            "audio": "bc35e82a2cfec46f"
          }
        ],
        "frameAudio": [
          "386355a3e9824dd9",
          "1bac659002ac7073",
          "0249e0d48adab97d",
          "041e7bf2bfa0dabc"
        ],
        "modelAudio": "3534288b4f64722e"
      },
      {
        "id": "U04-L04",
        "title": "把鸭子带回营地",
        "objective": "根据动物、动作和位置线索完成协作任务。",
        "core": [],
        "review": [
          "duck",
          "hen",
          "walk",
          "swim",
          "help",
          "follow"
        ],
        "frames": [
          "Follow me.",
          "The duck is near the water.",
          "Can you help?"
        ],
        "scene": "虚拟农场里鸭子在水旁，母鸡在箱子旁；只在屏幕里选择路线，不让孩子靠近现实水域。",
        "reading": "Follow me.\nWalk to the water.\nThe duck is near the water.\nCan you help?",
        "dialogue": [
          [
            "向导",
            "Can you help me find the duck?",
            "你能帮我找鸭子吗？"
          ],
          [
            "玩家",
            "Yes. Where is it?",
            "能。它在哪里？"
          ],
          [
            "向导",
            "It's near the water.",
            "它在水旁边。"
          ],
          [
            "玩家",
            "I can see the duck!",
            "我看到鸭子了！"
          ]
        ],
        "tasks": [
          {
            "type": "read-choice",
            "prompt": "按照本课便条，鸭子在哪里？",
            "options": [
              "水旁边",
              "箱子里面",
              "桌子下面"
            ],
            "answer": "水旁边",
            "why": "便条说 near the water。",
            "id": "U04-L04-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "水旁边"
              },
              {
                "id": "o1",
                "text": "箱子里面"
              },
              {
                "id": "o2",
                "text": "桌子下面"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "listen-choice",
            "prompt": "听录音，选角色要做的动作。",
            "audio": "Walk. Follow me.",
            "options": [
              "走着跟随向导",
              "跳到桌子上",
              "原地睡觉"
            ],
            "answer": "走着跟随向导",
            "why": "先听懂 walk，再结合 follow me 判断行动。",
            "id": "U04-L04-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "走着跟随向导"
              },
              {
                "id": "o1",
                "text": "跳到桌子上"
              },
              {
                "id": "o2",
                "text": "原地睡觉"
              }
            ],
            "correct": "o0",
            "audioId": "3d0ce84cf5de1e83"
          },
          {
            "type": "build",
            "prompt": "用词块说“鸭子会游泳”。",
            "tokens": [
              "swim",
              "duck",
              "The",
              "can"
            ],
            "answer": "The duck can swim.",
            "why": "动物名称放在 can 前，动作 swim 放在 can 后。",
            "id": "U04-L04-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "swim"
              },
              {
                "id": "o1",
                "text": "duck"
              },
              {
                "id": "o2",
                "text": "The"
              },
              {
                "id": "o3",
                "text": "can"
              }
            ],
            "correct": "The duck can swim.",
            "answerAudio": "a8410e68020b4702"
          }
        ],
        "say": {
          "prompt": "向同伴请求帮助，或说明鸭子的位置。",
          "model": "Can you help me? The duck is near the water.",
          "note": "任选一句先说；可使用图示和已学表达，不要求背诵整段。"
        },
        "note": "本关不新增核心词。位置理解与动物名称分别记录，避免一次答错就把两种能力都标记为不会。",
        "number": 16,
        "withinUnit": 4,
        "unitId": "U04",
        "unitTitle": "农场与伙伴",
        "shortTitle": "找鸭子",
        "sceneId": "U04-L04",
        "words": [
          {
            "en": "duck",
            "zh": "鸭子",
            "audio": "ea018b94fe024258"
          },
          {
            "en": "hen",
            "zh": "母鸡",
            "audio": "af05adb3fa20a49c"
          },
          {
            "en": "walk",
            "zh": "走路",
            "audio": "f8fe598a1b9ef8b6"
          },
          {
            "en": "swim",
            "zh": "游泳",
            "audio": "8b5b206291c3b5f3"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          },
          {
            "en": "follow",
            "zh": "跟随",
            "audio": "91cfc6673c2cc8f3"
          }
        ],
        "reviewWords": [
          {
            "en": "duck",
            "zh": "鸭子",
            "audio": "ea018b94fe024258"
          },
          {
            "en": "hen",
            "zh": "母鸡",
            "audio": "af05adb3fa20a49c"
          },
          {
            "en": "walk",
            "zh": "走路",
            "audio": "f8fe598a1b9ef8b6"
          },
          {
            "en": "swim",
            "zh": "游泳",
            "audio": "8b5b206291c3b5f3"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          },
          {
            "en": "follow",
            "zh": "跟随",
            "audio": "91cfc6673c2cc8f3"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Can you help me find the duck?",
            "zh": "你能帮我找鸭子吗？",
            "audio": "49a47ceaf8a54c49"
          },
          {
            "speaker": "玩家",
            "en": "Yes. Where is it?",
            "zh": "能。它在哪里？",
            "audio": "46cf9aa88ff27de0"
          },
          {
            "speaker": "向导",
            "en": "It's near the water.",
            "zh": "它在水旁边。",
            "audio": "367c309d1e6d5d22"
          },
          {
            "speaker": "玩家",
            "en": "I can see the duck!",
            "zh": "我看到鸭子了！",
            "audio": "fcd31b9b27287710"
          }
        ],
        "frameAudio": [
          "8b15de6ef5e13366",
          "e89793c734c35ab5",
          "487ef6aa53eb8476"
        ],
        "modelAudio": "1c428cbd544ec6ae",
        "readingAudio": "17887b5300786782",
        "readingZH": [
          "跟我来。",
          "走到水边。",
          "鸭子在水旁边。",
          "你能帮忙吗？"
        ]
      }
    ],
    "number": 4
  },
  {
    "id": "U05",
    "title": "食物与补给",
    "goal": "表达食物喜好，提出礼貌请求，并在虚拟小店完成简单交易。",
    "checkpoint": "读懂一项价目，按请求选择食物，使用 please / thanks；个人口味不设标准答案。",
    "lessons": [
      {
        "id": "U05-L01",
        "title": "你喜欢什么食物",
        "objective": "认识更多食物，并用 I like / I don't like 表达自己的喜好。",
        "core": [
          [
            "banana",
            "香蕉"
          ],
          [
            "orange",
            "橙子；本课指水果"
          ],
          [
            "carrot",
            "胡萝卜"
          ],
          [
            "potato",
            "土豆"
          ],
          [
            "fish",
            "鱼；本课食物场景指鱼肉"
          ],
          [
            "juice",
            "果汁"
          ]
        ],
        "review": [
          "apple",
          "rice",
          "milk"
        ],
        "frames": [
          "Do you like bananas?",
          "Yes, I do.",
          "I like carrots.",
          "I don't like carrots."
        ],
        "scene": "六种食物图卡与一张虚构角色口味卡，清楚区分角色偏好和学习者自己的偏好。",
        "dialogue": [
          [
            "向导",
            "Do you like bananas?",
            "你喜欢香蕉吗？"
          ],
          [
            "玩家",
            "Yes, I do.",
            "喜欢。"
          ],
          [
            "向导",
            "Do you like carrots?",
            "你喜欢胡萝卜吗？"
          ],
          [
            "玩家",
            "No, I don't.",
            "不喜欢。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听食物名称，选择图卡。",
            "audio": "An orange.",
            "options": [
              "橙子图卡",
              "胡萝卜图卡",
              "果汁图卡"
            ],
            "answer": "橙子图卡",
            "why": "本课 orange 指水果橙子，不是颜色。",
            "id": "U05-L01-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "橙子图卡"
              },
              {
                "id": "o1",
                "text": "胡萝卜图卡"
              },
              {
                "id": "o2",
                "text": "果汁图卡"
              }
            ],
            "correct": "o0",
            "audioId": "1cdd0e0ad15e1d0b"
          },
          {
            "type": "read-choice",
            "prompt": "角色口味卡写着 I like bananas. I don't like carrots. 哪样是这个角色喜欢的？",
            "options": [
              "香蕉",
              "胡萝卜",
              "土豆"
            ],
            "answer": "香蕉",
            "why": "答案根据给定角色口味卡判断，不代表孩子必须喜欢同一种食物。",
            "id": "U05-L01-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "香蕉"
              },
              {
                "id": "o1",
                "text": "胡萝卜"
              },
              {
                "id": "o2",
                "text": "土豆"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "拼出“我喜欢香蕉”。",
            "tokens": [
              "bananas",
              "I",
              "like"
            ],
            "answer": "I like bananas.",
            "why": "表达一般喜好时，这里使用 bananas 的复数形式。",
            "id": "U05-L01-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "bananas"
              },
              {
                "id": "o1",
                "text": "I"
              },
              {
                "id": "o2",
                "text": "like"
              }
            ],
            "correct": "I like bananas.",
            "answerAudio": "de64d9eeb6fe91f7"
          }
        ],
        "say": {
          "prompt": "选择一种食物，说自己喜欢或不喜欢它。",
          "model": "I like bananas. I don't like carrots.",
          "note": "个人喜好没有对错。也接受选择已学的 rice、milk 等不可数食物来表达。"
        },
        "note": "用 bananas、carrots、potatoes 的自然短语示范复数，不要求一次记住全部变化。尊重不同饮食习惯，不用口味给孩子打分。",
        "number": 17,
        "withinUnit": 1,
        "unitId": "U05",
        "unitTitle": "食物与补给",
        "shortTitle": "选食物",
        "sceneId": "U05-L01",
        "words": [
          {
            "en": "banana",
            "zh": "香蕉",
            "audio": "3c5c0a6f8970ef17"
          },
          {
            "en": "orange",
            "zh": "橙子；本课指水果",
            "audio": "c9dff55bbf9ec93e"
          },
          {
            "en": "carrot",
            "zh": "胡萝卜",
            "audio": "9a558ee673fbaa43"
          },
          {
            "en": "potato",
            "zh": "土豆",
            "audio": "35944aed24f26c73"
          },
          {
            "en": "fish",
            "zh": "鱼；本课食物场景指鱼肉",
            "audio": "42fefc17086a22b5"
          },
          {
            "en": "juice",
            "zh": "果汁",
            "audio": "1b497206948f8805"
          }
        ],
        "reviewWords": [
          {
            "en": "apple",
            "zh": "苹果",
            "audio": "77a792627de7e5e0"
          },
          {
            "en": "rice",
            "zh": "米饭；大米",
            "audio": "c4263b91389f3606"
          },
          {
            "en": "milk",
            "zh": "牛奶",
            "audio": "f52648682d138a9d"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Do you like bananas?",
            "zh": "你喜欢香蕉吗？",
            "audio": "6651972bffd8bb96"
          },
          {
            "speaker": "玩家",
            "en": "Yes, I do.",
            "zh": "喜欢。",
            "audio": "954df6c5c768c976"
          },
          {
            "speaker": "向导",
            "en": "Do you like carrots?",
            "zh": "你喜欢胡萝卜吗？",
            "audio": "ca9a169aa0d80279"
          },
          {
            "speaker": "玩家",
            "en": "No, I don't.",
            "zh": "不喜欢。",
            "audio": "37e832acc6839027"
          }
        ],
        "frameAudio": [
          "6651972bffd8bb96",
          "bab2c27aeb02c883",
          "c68001671258dcae",
          "d046626f720eeb66"
        ],
        "modelAudio": "5c15c1a8d9ae3c79"
      },
      {
        "id": "U05-L02",
        "title": "再来一点水，谢谢",
        "objective": "表达饥饿与需求，理解 some / more，并使用礼貌表达。",
        "core": [
          [
            "want",
            "想要"
          ],
          [
            "some",
            "一些"
          ],
          [
            "more",
            "更多；再一些"
          ],
          [
            "please",
            "请"
          ],
          [
            "thanks",
            "谢谢"
          ],
          [
            "hungry",
            "饿的"
          ]
        ],
        "review": [
          "water",
          "bread",
          "apple"
        ],
        "frames": [
          "I'm hungry.",
          "I want some bread, please.",
          "Some more water, please.",
          "Thanks!"
        ],
        "scene": "虚拟补给桌与空杯、装水杯两种状态；more 表示追加，不能仅用一个孤立物品图解释。",
        "dialogue": [
          [
            "玩家",
            "I'm hungry.",
            "我饿了。"
          ],
          [
            "向导",
            "Do you want some bread?",
            "你想要一些面包吗？"
          ],
          [
            "玩家",
            "Yes, please.",
            "想要，谢谢。"
          ],
          [
            "向导",
            "Here you are.",
            "给你。"
          ],
          [
            "玩家",
            "Thanks!",
            "谢谢！"
          ],
          [
            "向导",
            "You're welcome.",
            "不客气。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "杯子里的水已经喝完，听请求选择下一步。",
            "audio": "Some more water, please.",
            "options": [
              "再添一些水",
              "递一本书",
              "把面包收走"
            ],
            "answer": "再添一些水",
            "why": "more water 表示再来一些水，please 使请求更礼貌。",
            "id": "U05-L02-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "再添一些水"
              },
              {
                "id": "o1",
                "text": "递一本书"
              },
              {
                "id": "o2",
                "text": "把面包收走"
              }
            ],
            "correct": "o0",
            "audioId": "48aef1c8e2285f5a"
          },
          {
            "type": "read-choice",
            "prompt": "收到补给后，哪句话适合表示感谢？",
            "options": [
              "Thanks!",
              "I'm hungry.",
              "Close the door."
            ],
            "answer": "Thanks!",
            "why": "Thanks 是感谢表达；另外两句不是感谢。",
            "id": "U05-L02-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "Thanks!"
              },
              {
                "id": "o1",
                "text": "I'm hungry."
              },
              {
                "id": "o2",
                "text": "Close the door."
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "礼貌表达“我想要一些面包”。",
            "tokens": [
              "some",
              "please",
              "bread",
              "I",
              "want"
            ],
            "answer": "I want some bread, please.",
            "why": "some bread 是自然表达，please 可放句末；不说 a bread。",
            "id": "U05-L02-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "some"
              },
              {
                "id": "o1",
                "text": "please"
              },
              {
                "id": "o2",
                "text": "bread"
              },
              {
                "id": "o3",
                "text": "I"
              },
              {
                "id": "o4",
                "text": "want"
              }
            ],
            "correct": "I want some bread, please.",
            "answerAudio": "7e6d81ea33bf3d8d"
          }
        ],
        "say": {
          "prompt": "向补给员提出一个礼貌请求，再表示感谢。",
          "model": "I want some water, please. Thanks!",
          "note": "也接受 Can I have some water, please? 等自然表达；不强制只有一个句型。"
        },
        "note": "some、more、please 等可能在前面的整句输入中出现过；本课是首次作为核心词明确讲解，不声称它们都是第一次见到。",
        "number": 18,
        "withinUnit": 2,
        "unitId": "U05",
        "unitTitle": "食物与补给",
        "shortTitle": "再来点",
        "sceneId": "U05-L02",
        "words": [
          {
            "en": "want",
            "zh": "想要",
            "audio": "340dd38d071fccfc"
          },
          {
            "en": "some",
            "zh": "一些",
            "audio": "b63accee75c5092c"
          },
          {
            "en": "more",
            "zh": "更多；再一些",
            "audio": "266f5dfcfcb3505a"
          },
          {
            "en": "please",
            "zh": "请",
            "audio": "c2047e15b463cc57"
          },
          {
            "en": "thanks",
            "zh": "谢谢",
            "audio": "9adcaac8c62c3820"
          },
          {
            "en": "hungry",
            "zh": "饿的",
            "audio": "b26ede72b5fd2724"
          }
        ],
        "reviewWords": [
          {
            "en": "water",
            "zh": "水",
            "audio": "9a792197f5d0d983"
          },
          {
            "en": "bread",
            "zh": "面包",
            "audio": "0f4be29385999b46"
          },
          {
            "en": "apple",
            "zh": "苹果",
            "audio": "77a792627de7e5e0"
          }
        ],
        "lines": [
          {
            "speaker": "玩家",
            "en": "I'm hungry.",
            "zh": "我饿了。",
            "audio": "b3240cc4625ea6e1"
          },
          {
            "speaker": "向导",
            "en": "Do you want some bread?",
            "zh": "你想要一些面包吗？",
            "audio": "90c60cf263e5e8d3"
          },
          {
            "speaker": "玩家",
            "en": "Yes, please.",
            "zh": "想要，谢谢。",
            "audio": "33f1c369a43bbf9a"
          },
          {
            "speaker": "向导",
            "en": "Here you are.",
            "zh": "给你。",
            "audio": "fba17f87058894d3"
          },
          {
            "speaker": "玩家",
            "en": "Thanks!",
            "zh": "谢谢！",
            "audio": "63b66f9b40302f9d"
          },
          {
            "speaker": "向导",
            "en": "You're welcome.",
            "zh": "不客气。",
            "audio": "26472581ec770240"
          }
        ],
        "frameAudio": [
          "c4aabb36ea8e96ac",
          "7e6d81ea33bf3d8d",
          "48aef1c8e2285f5a",
          "693cc986541427aa"
        ],
        "modelAudio": "55f3bf447f2643eb"
      },
      {
        "id": "U05-L03",
        "title": "营地小店开门啦",
        "objective": "理解虚拟小店的物品与价格，并用礼貌请求完成一次购买对话。",
        "core": [
          [
            "buy",
            "买"
          ],
          [
            "pay",
            "付钱"
          ],
          [
            "coin",
            "硬币；游戏币"
          ],
          [
            "shop",
            "商店"
          ],
          [
            "basket",
            "篮子"
          ],
          [
            "food",
            "食物"
          ]
        ],
        "review": [
          "apple",
          "two",
          "please"
        ],
        "frames": [
          "Can I have an apple, please?",
          "Two coins, please.",
          "Here you are.",
          "I can pay with coins."
        ],
        "scene": "只使用不可兑换的虚拟游戏币；苹果价目明确为两枚币，书与果汁使用不同价格作为区分。没有真实付款入口。",
        "dialogue": [
          [
            "玩家",
            "Can I have an apple, please?",
            "请给我一个苹果，好吗？"
          ],
          [
            "店员",
            "Two coins, please.",
            "请付两枚游戏币。"
          ],
          [
            "玩家",
            "Here you are.",
            "给你。"
          ],
          [
            "店员",
            "Thank you.",
            "谢谢。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听请求，选择要购买的物品。",
            "audio": "Can I have an apple, please?",
            "options": [
              "苹果",
              "果汁",
              "书"
            ],
            "answer": "苹果",
            "why": "请求里说的是 an apple。",
            "id": "U05-L03-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "苹果"
              },
              {
                "id": "o1",
                "text": "果汁"
              },
              {
                "id": "o2",
                "text": "书"
              }
            ],
            "correct": "o0",
            "audioId": "4816194c76bc0dfe"
          },
          {
            "type": "read-choice",
            "prompt": "价目表写着 Apple: two coins. 应付几枚游戏币？",
            "options": [
              "两枚",
              "三枚",
              "一枚"
            ],
            "answer": "两枚",
            "why": "two coins 表示两枚；这里只考读懂单项价格，不额外考复杂计算。",
            "id": "U05-L03-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "两枚"
              },
              {
                "id": "o1",
                "text": "三枚"
              },
              {
                "id": "o2",
                "text": "一枚"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "用词块说“我可以买食物”。",
            "tokens": [
              "food",
              "buy",
              "I",
              "can"
            ],
            "answer": "I can buy food.",
            "why": "can 后用动作原形 buy，food 表示食物。",
            "id": "U05-L03-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "food"
              },
              {
                "id": "o1",
                "text": "buy"
              },
              {
                "id": "o2",
                "text": "I"
              },
              {
                "id": "o3",
                "text": "can"
              }
            ],
            "correct": "I can buy food.",
            "answerAudio": "b3393aa2d7b2486b"
          }
        ],
        "say": {
          "prompt": "扮演顾客提出请求，再扮演店员说出已知价格。",
          "model": "Can I have an apple, please? Two coins, please.",
          "note": "可参照明确的价目卡替换，不根据孩子是否愿意买某种食物判分。"
        },
        "note": "shop 和后续的 store 都可表示商店；不人为制造两者完全不同的语义。此课只描述虚拟交易，不涉及真实消费。",
        "number": 19,
        "withinUnit": 3,
        "unitId": "U05",
        "unitTitle": "食物与补给",
        "shortTitle": "逛小店",
        "sceneId": "U05-L03",
        "words": [
          {
            "en": "buy",
            "zh": "买",
            "audio": "b937bf60c9b9f99a"
          },
          {
            "en": "pay",
            "zh": "付钱",
            "audio": "589063c48dba533c"
          },
          {
            "en": "coin",
            "zh": "硬币；游戏币",
            "audio": "4915d03db047b7f5"
          },
          {
            "en": "shop",
            "zh": "商店",
            "audio": "2c6acb15d46bbdfd"
          },
          {
            "en": "basket",
            "zh": "篮子",
            "audio": "c8168234fbf113f3"
          },
          {
            "en": "food",
            "zh": "食物",
            "audio": "866640ea281cd71c"
          }
        ],
        "reviewWords": [
          {
            "en": "apple",
            "zh": "苹果",
            "audio": "77a792627de7e5e0"
          },
          {
            "en": "two",
            "zh": "二",
            "audio": "89288bf10ca207ec"
          },
          {
            "en": "please",
            "zh": "请",
            "audio": "c2047e15b463cc57"
          }
        ],
        "lines": [
          {
            "speaker": "玩家",
            "en": "Can I have an apple, please?",
            "zh": "请给我一个苹果，好吗？",
            "audio": "e49070d15599e82d"
          },
          {
            "speaker": "店员",
            "en": "Two coins, please.",
            "zh": "请付两枚游戏币。",
            "audio": "216645409f0b9bc8"
          },
          {
            "speaker": "玩家",
            "en": "Here you are.",
            "zh": "给你。",
            "audio": "caf3f9b4fe07f347"
          },
          {
            "speaker": "店员",
            "en": "Thank you.",
            "zh": "谢谢。",
            "audio": "0be4516bfcc35f72"
          }
        ],
        "frameAudio": [
          "4816194c76bc0dfe",
          "216645409f0b9bc8",
          "fba17f87058894d3",
          "8e0767619446bec8"
        ],
        "modelAudio": "b890dcef247791f1"
      },
      {
        "id": "U05-L04",
        "title": "准备一次小野餐",
        "objective": "综合阅读价目、听懂请求，选择正确补给并礼貌交流。",
        "core": [],
        "review": [
          "bread",
          "juice",
          "apple",
          "some",
          "please",
          "coin"
        ],
        "frames": [
          "Can I have some juice, please?",
          "Three coins, please.",
          "Thanks!"
        ],
        "scene": "两项清晰价目：面包两枚币、果汁三枚币；场景只用已学物品与一至十的数量。",
        "reading": "Shop\nBread: two coins.\nJuice: three coins.",
        "dialogue": [
          [
            "玩家",
            "Can I have some juice, please?",
            "请给我一些果汁，好吗？"
          ],
          [
            "店员",
            "Three coins, please.",
            "请付三枚游戏币。"
          ],
          [
            "玩家",
            "Here you are. Thanks!",
            "给你。谢谢！"
          ],
          [
            "店员",
            "You're welcome.",
            "不客气。"
          ]
        ],
        "tasks": [
          {
            "type": "read-choice",
            "prompt": "根据本课价目表，果汁需要几枚游戏币？",
            "options": [
              "三枚",
              "两枚",
              "五枚"
            ],
            "answer": "三枚",
            "why": "Juice: three coins. 明确给出了果汁的价格。",
            "id": "U05-L04-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "三枚"
              },
              {
                "id": "o1",
                "text": "两枚"
              },
              {
                "id": "o2",
                "text": "五枚"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "listen-choice",
            "prompt": "听顾客的话，选该递出的补给。",
            "audio": "Some bread, please.",
            "options": [
              "面包",
              "牛奶",
              "苹果"
            ],
            "answer": "面包",
            "why": "bread 是面包；some 表示一些。",
            "id": "U05-L04-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "面包"
              },
              {
                "id": "o1",
                "text": "牛奶"
              },
              {
                "id": "o2",
                "text": "苹果"
              }
            ],
            "correct": "o0",
            "audioId": "29e48360f594d735"
          },
          {
            "type": "order",
            "prompt": "将一次礼貌购买的对话按顺序排列。",
            "options": [
              "Thanks!",
              "Can I have some juice, please?",
              "Three coins, please."
            ],
            "answer": [
              "Can I have some juice, please?",
              "Three coins, please.",
              "Thanks!"
            ],
            "why": "先提出请求，店员说明价格，完成后表示感谢；实际操作中还可以说 Here you are。",
            "id": "U05-L04-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "Thanks!"
              },
              {
                "id": "o1",
                "text": "Can I have some juice, please?"
              },
              {
                "id": "o2",
                "text": "Three coins, please."
              }
            ],
            "correct": [
              "o1",
              "o2",
              "o0"
            ]
          }
        ],
        "say": {
          "prompt": "说出你的野餐选择，并完成一句礼貌请求。",
          "model": "I like apples. Can I have an apple, please?",
          "note": "选择已学食物即可，没有唯一正确口味。"
        },
        "note": "本关不新增核心词，不把价格计算或饮食常识混进语言过关标准。",
        "number": 20,
        "withinUnit": 4,
        "unitId": "U05",
        "unitTitle": "食物与补给",
        "shortTitle": "去野餐",
        "sceneId": "U05-L04",
        "words": [
          {
            "en": "bread",
            "zh": "面包",
            "audio": "0f4be29385999b46"
          },
          {
            "en": "juice",
            "zh": "果汁",
            "audio": "1b497206948f8805"
          },
          {
            "en": "apple",
            "zh": "苹果",
            "audio": "77a792627de7e5e0"
          },
          {
            "en": "some",
            "zh": "一些",
            "audio": "b63accee75c5092c"
          },
          {
            "en": "please",
            "zh": "请",
            "audio": "c2047e15b463cc57"
          },
          {
            "en": "coin",
            "zh": "硬币；游戏币",
            "audio": "4915d03db047b7f5"
          }
        ],
        "reviewWords": [
          {
            "en": "bread",
            "zh": "面包",
            "audio": "0f4be29385999b46"
          },
          {
            "en": "juice",
            "zh": "果汁",
            "audio": "1b497206948f8805"
          },
          {
            "en": "apple",
            "zh": "苹果",
            "audio": "77a792627de7e5e0"
          },
          {
            "en": "some",
            "zh": "一些",
            "audio": "b63accee75c5092c"
          },
          {
            "en": "please",
            "zh": "请",
            "audio": "c2047e15b463cc57"
          },
          {
            "en": "coin",
            "zh": "硬币；游戏币",
            "audio": "4915d03db047b7f5"
          }
        ],
        "lines": [
          {
            "speaker": "玩家",
            "en": "Can I have some juice, please?",
            "zh": "请给我一些果汁，好吗？",
            "audio": "1ad095509cee8a37"
          },
          {
            "speaker": "店员",
            "en": "Three coins, please.",
            "zh": "请付三枚游戏币。",
            "audio": "a62b557240d2f990"
          },
          {
            "speaker": "玩家",
            "en": "Here you are. Thanks!",
            "zh": "给你。谢谢！",
            "audio": "059eda64c0bb619a"
          },
          {
            "speaker": "店员",
            "en": "You're welcome.",
            "zh": "不客气。",
            "audio": "26472581ec770240"
          }
        ],
        "frameAudio": [
          "9a7129f85962461f",
          "a62b557240d2f990",
          "693cc986541427aa"
        ],
        "modelAudio": "9443e466695ebf02",
        "readingAudio": "add3b3ad12008d50",
        "readingZH": [
          "小店",
          "面包：两枚游戏币。",
          "果汁：三枚游戏币。"
        ]
      }
    ],
    "number": 5
  },
  {
    "id": "U06",
    "title": "森林与天气",
    "goal": "理解基本天气与衣物表达，辨认自然地标并读懂出行提示。",
    "checkpoint": "根据一张短提示选出指定衣物，在虚拟场景中识别路径或桥；不依赖现实户外行动。",
    "lessons": [
      {
        "id": "U06-L01",
        "title": "今天冷还是热",
        "objective": "认识天气相关事物，用 hot / cold 描述场景。",
        "core": [
          [
            "sun",
            "太阳"
          ],
          [
            "rain",
            "雨"
          ],
          [
            "wind",
            "风"
          ],
          [
            "cloud",
            "云"
          ],
          [
            "hot",
            "热的"
          ],
          [
            "cold",
            "冷的"
          ]
        ],
        "review": [
          "yes",
          "no",
          "white"
        ],
        "frames": [
          "It's hot.",
          "It's cold.",
          "I can see a cloud.",
          "Can you see the sun?"
        ],
        "scene": "热与冷分别使用角色感受图标和温度图示辅助说明；有云不必然等于冷，题目须提供具体场景信息。",
        "dialogue": [
          [
            "向导",
            "Is it hot?",
            "天气热吗？"
          ],
          [
            "玩家",
            "No. It's cold.",
            "不热。天气冷。"
          ],
          [
            "向导",
            "Can you see the sun?",
            "你能看到太阳吗？"
          ],
          [
            "玩家",
            "No. I can see a cloud.",
            "看不到。我看到一朵云。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听录音，选择对应场景。",
            "audio": "It's cold.",
            "options": [
              "标明寒冷的场景图",
              "标明炎热的场景图",
              "普通书本图"
            ],
            "answer": "标明寒冷的场景图",
            "why": "cold 表示冷；不能仅凭云或太阳推断温度。",
            "id": "U06-L01-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "标明寒冷的场景图"
              },
              {
                "id": "o1",
                "text": "标明炎热的场景图"
              },
              {
                "id": "o2",
                "text": "普通书本图"
              }
            ],
            "correct": "o0",
            "audioId": "a30de5164e6f4d68"
          },
          {
            "type": "read-choice",
            "prompt": "哪幅图对应 cloud？",
            "options": [
              "云朵图",
              "雨滴图",
              "太阳图"
            ],
            "answer": "云朵图",
            "why": "cloud 是云；rain 是雨。",
            "id": "U06-L01-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "云朵图"
              },
              {
                "id": "o1",
                "text": "雨滴图"
              },
              {
                "id": "o2",
                "text": "太阳图"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "用词块说“我能看见太阳”。",
            "tokens": [
              "sun",
              "I",
              "the",
              "see",
              "can"
            ],
            "answer": "I can see the sun.",
            "why": "can see 表示能看见，the sun 指太阳。",
            "id": "U06-L01-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "sun"
              },
              {
                "id": "o1",
                "text": "I"
              },
              {
                "id": "o2",
                "text": "the"
              },
              {
                "id": "o3",
                "text": "see"
              },
              {
                "id": "o4",
                "text": "can"
              }
            ],
            "correct": "I can see the sun.",
            "answerAudio": "769288ba7d393276"
          }
        ],
        "say": {
          "prompt": "选择一张天气图，说温度或看见的事物。",
          "model": "It's cold. I can see a cloud.",
          "note": "回答以图示信息为准，不要求学习者报告真实天气。"
        },
        "note": "sun、rain、wind、cloud 是名词，不能机械套成 It's rain.；本课不要求 rainy / windy 等派生词。",
        "number": 21,
        "withinUnit": 1,
        "unitId": "U06",
        "unitTitle": "森林与天气",
        "shortTitle": "看天气",
        "sceneId": "U06-L01",
        "words": [
          {
            "en": "sun",
            "zh": "太阳",
            "audio": "5e44e0c8e0b3c051"
          },
          {
            "en": "rain",
            "zh": "雨",
            "audio": "40930ff5c3db686b"
          },
          {
            "en": "wind",
            "zh": "风",
            "audio": "ea5ea9f607a9b489"
          },
          {
            "en": "cloud",
            "zh": "云",
            "audio": "4c6cb4d14a5f9504"
          },
          {
            "en": "hot",
            "zh": "热的",
            "audio": "be16dbfd400096a6"
          },
          {
            "en": "cold",
            "zh": "冷的",
            "audio": "88d1b68add913e37"
          }
        ],
        "reviewWords": [
          {
            "en": "yes",
            "zh": "是；对",
            "audio": "57cc6748df6298cc"
          },
          {
            "en": "no",
            "zh": "不；不是",
            "audio": "ac04591bf0eadc7e"
          },
          {
            "en": "white",
            "zh": "白色",
            "audio": "cf30df996a7b80c9"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Is it hot?",
            "zh": "天气热吗？",
            "audio": "6ada8cffa40b76b0"
          },
          {
            "speaker": "玩家",
            "en": "No. It's cold.",
            "zh": "不热。天气冷。",
            "audio": "10d3c5de4da1eadf"
          },
          {
            "speaker": "向导",
            "en": "Can you see the sun?",
            "zh": "你能看到太阳吗？",
            "audio": "2fbbe4d607bac2b4"
          },
          {
            "speaker": "玩家",
            "en": "No. I can see a cloud.",
            "zh": "看不到。我看到一朵云。",
            "audio": "08b97486a76a9ebf"
          }
        ],
        "frameAudio": [
          "86dbd6206e85f2ff",
          "a30de5164e6f4d68",
          "69e7446cb8c260db",
          "2fbbe4d607bac2b4"
        ],
        "modelAudio": "27ae2d8ebfcd4964"
      },
      {
        "id": "U06-L02",
        "title": "给角色穿好衣服",
        "objective": "辨认六类衣物，听懂 Put on your ... 指令。",
        "core": [
          [
            "coat",
            "外套"
          ],
          [
            "hat",
            "帽子"
          ],
          [
            "shirt",
            "衬衫"
          ],
          [
            "shoes",
            "鞋；此处为复数"
          ],
          [
            "boots",
            "靴子；此处为复数"
          ],
          [
            "socks",
            "袜子；此处为复数"
          ]
        ],
        "review": [
          "cold",
          "blue",
          "red"
        ],
        "frames": [
          "I need my coat.",
          "Put on your hat.",
          "Put on your boots."
        ],
        "scene": "可以为原创屏幕角色选衣服，鞋、靴子、袜子成对显示；角色穿着依题目提示，不直接要求孩子现实换装。",
        "dialogue": [
          [
            "向导",
            "It's cold.",
            "天气冷。"
          ],
          [
            "玩家",
            "I need my coat.",
            "我需要我的外套。"
          ],
          [
            "向导",
            "Put on your hat too.",
            "也戴上帽子。"
          ],
          [
            "玩家",
            "Yes. My coat and my hat!",
            "好。我的外套和帽子！"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听指令，为屏幕角色选择物品。",
            "audio": "Put on your boots.",
            "options": [
              "一双靴子",
              "一双袜子",
              "一顶帽子"
            ],
            "answer": "一双靴子",
            "why": "boots 是靴子。",
            "id": "U06-L02-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "一双靴子"
              },
              {
                "id": "o1",
                "text": "一双袜子"
              },
              {
                "id": "o2",
                "text": "一顶帽子"
              }
            ],
            "correct": "o0",
            "audioId": "261b56ebf1aa3ddd"
          },
          {
            "type": "read-choice",
            "prompt": "图中是一件衬衫，应选哪个词？",
            "options": [
              "shirt",
              "coat",
              "shoes"
            ],
            "answer": "shirt",
            "why": "shirt 是衬衫，不是外套或鞋。",
            "id": "U06-L02-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "shirt"
              },
              {
                "id": "o1",
                "text": "coat"
              },
              {
                "id": "o2",
                "text": "shoes"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "表达“我需要我的外套”。",
            "tokens": [
              "my",
              "coat",
              "I",
              "need"
            ],
            "answer": "I need my coat.",
            "why": "my coat 表示我的外套。",
            "id": "U06-L02-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "my"
              },
              {
                "id": "o1",
                "text": "coat"
              },
              {
                "id": "o2",
                "text": "I"
              },
              {
                "id": "o3",
                "text": "need"
              }
            ],
            "correct": "I need my coat.",
            "answerAudio": "1bb5a8ba003c0889"
          }
        ],
        "say": {
          "prompt": "给屏幕角色一条穿戴指令。",
          "model": "Put on your hat.",
          "note": "可以替换成已学衣物；按角色实际动作回听，不自动评分。"
        },
        "note": "Put on 是完整动作表达；与 U03 的空间 on 不做机械等同。成对衣物先使用自然的复数短语。",
        "number": 22,
        "withinUnit": 2,
        "unitId": "U06",
        "unitTitle": "森林与天气",
        "shortTitle": "选衣服",
        "sceneId": "U06-L02",
        "words": [
          {
            "en": "coat",
            "zh": "外套",
            "audio": "5214c7213e4be64e"
          },
          {
            "en": "hat",
            "zh": "帽子",
            "audio": "7f5eddd0a3a4e9f2"
          },
          {
            "en": "shirt",
            "zh": "衬衫",
            "audio": "f60d54fb88ea8598"
          },
          {
            "en": "shoes",
            "zh": "鞋；此处为复数",
            "audio": "8d09bd2336c0be0f"
          },
          {
            "en": "boots",
            "zh": "靴子；此处为复数",
            "audio": "a3dad488ed34f28e"
          },
          {
            "en": "socks",
            "zh": "袜子；此处为复数",
            "audio": "b092d43712ee2ff3"
          }
        ],
        "reviewWords": [
          {
            "en": "cold",
            "zh": "冷的",
            "audio": "88d1b68add913e37"
          },
          {
            "en": "blue",
            "zh": "蓝色",
            "audio": "ee13203b244711d5"
          },
          {
            "en": "red",
            "zh": "红色",
            "audio": "47c8ac9b39c2f171"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "It's cold.",
            "zh": "天气冷。",
            "audio": "a30de5164e6f4d68"
          },
          {
            "speaker": "玩家",
            "en": "I need my coat.",
            "zh": "我需要我的外套。",
            "audio": "a5f343241acac2d7"
          },
          {
            "speaker": "向导",
            "en": "Put on your hat too.",
            "zh": "也戴上帽子。",
            "audio": "4fb8bc420f935e30"
          },
          {
            "speaker": "玩家",
            "en": "Yes. My coat and my hat!",
            "zh": "好。我的外套和帽子！",
            "audio": "c844a5603ed82919"
          }
        ],
        "frameAudio": [
          "1bb5a8ba003c0889",
          "f9b03855a34a2fa7",
          "261b56ebf1aa3ddd"
        ],
        "modelAudio": "38b070ed8fafd0f6"
      },
      {
        "id": "U06-L03",
        "title": "森林里的地标",
        "objective": "辨认自然地标，并用 near 说明虚拟路线中的相对位置。",
        "core": [
          [
            "tree",
            "树"
          ],
          [
            "flower",
            "花"
          ],
          [
            "river",
            "河流"
          ],
          [
            "forest",
            "森林"
          ],
          [
            "path",
            "小路；路径"
          ],
          [
            "bridge",
            "桥"
          ]
        ],
        "review": [
          "near",
          "map",
          "walk"
        ],
        "frames": [
          "Where is the bridge?",
          "It's near the tree.",
          "I can see a river."
        ],
        "scene": "一张原创地图：树旁有桥，河边有小路，花在小屋旁；空间关系明确，避免透视歧义。",
        "dialogue": [
          [
            "向导",
            "Where is the bridge?",
            "桥在哪里？"
          ],
          [
            "玩家",
            "It's near the tree.",
            "它在树旁边。"
          ],
          [
            "向导",
            "Can you see a river?",
            "你能看到河流吗？"
          ],
          [
            "玩家",
            "Yes. I can see a river.",
            "能。我能看到一条河。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听地标名称，选对应图。",
            "audio": "A bridge.",
            "options": [
              "桥图卡",
              "小路图卡",
              "树图卡"
            ],
            "answer": "桥图卡",
            "why": "bridge 是桥。",
            "id": "U06-L03-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "桥图卡"
              },
              {
                "id": "o1",
                "text": "小路图卡"
              },
              {
                "id": "o2",
                "text": "树图卡"
              }
            ],
            "correct": "o0",
            "audioId": "d15752775d58d423"
          },
          {
            "type": "read-choice",
            "prompt": "按照本课地图，The bridge is near the ___. 应填什么？",
            "options": [
              "tree",
              "bed",
              "lamp"
            ],
            "answer": "tree",
            "why": "地图已明确规定桥在树旁。",
            "id": "U06-L03-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "tree"
              },
              {
                "id": "o1",
                "text": "bed"
              },
              {
                "id": "o2",
                "text": "lamp"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "说“我能看到一条河”。",
            "tokens": [
              "a",
              "river",
              "I",
              "see",
              "can"
            ],
            "answer": "I can see a river.",
            "why": "river 是可数名词，这里用 a river。",
            "id": "U06-L03-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "a"
              },
              {
                "id": "o1",
                "text": "river"
              },
              {
                "id": "o2",
                "text": "I"
              },
              {
                "id": "o3",
                "text": "see"
              },
              {
                "id": "o4",
                "text": "can"
              }
            ],
            "correct": "I can see a river.",
            "answerAudio": "db9838b8b4e85036"
          }
        ],
        "say": {
          "prompt": "指着地图说一个地标及其位置。",
          "model": "The bridge is near the tree.",
          "note": "也可用 I can see ... 描述实际出现的地标。"
        },
        "note": "本课只在虚拟地图中练习，不把英语指令变成现实中靠近河流或过桥的行动要求。",
        "number": 23,
        "withinUnit": 3,
        "unitId": "U06",
        "unitTitle": "森林与天气",
        "shortTitle": "认地标",
        "sceneId": "U06-L03",
        "words": [
          {
            "en": "tree",
            "zh": "树",
            "audio": "bbd40a4f531a62fa"
          },
          {
            "en": "flower",
            "zh": "花",
            "audio": "95a70450d8282fde"
          },
          {
            "en": "river",
            "zh": "河流",
            "audio": "1407d6cc60cdd6de"
          },
          {
            "en": "forest",
            "zh": "森林",
            "audio": "39a1732dbb5f07bd"
          },
          {
            "en": "path",
            "zh": "小路；路径",
            "audio": "e61ed49d3942217e"
          },
          {
            "en": "bridge",
            "zh": "桥",
            "audio": "385c08d71efdc18c"
          }
        ],
        "reviewWords": [
          {
            "en": "near",
            "zh": "在……附近",
            "audio": "e831f2c0b96ef031"
          },
          {
            "en": "map",
            "zh": "地图",
            "audio": "505881157bdaa6e8"
          },
          {
            "en": "walk",
            "zh": "走路",
            "audio": "f8fe598a1b9ef8b6"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Where is the bridge?",
            "zh": "桥在哪里？",
            "audio": "f46180a33b890d7b"
          },
          {
            "speaker": "玩家",
            "en": "It's near the tree.",
            "zh": "它在树旁边。",
            "audio": "0c5d4541844d994f"
          },
          {
            "speaker": "向导",
            "en": "Can you see a river?",
            "zh": "你能看到河流吗？",
            "audio": "188d3dad8729b551"
          },
          {
            "speaker": "玩家",
            "en": "Yes. I can see a river.",
            "zh": "能。我能看到一条河。",
            "audio": "a70826525621da67"
          }
        ],
        "frameAudio": [
          "f46180a33b890d7b",
          "0090f94021e3bf11",
          "db9838b8b4e85036"
        ],
        "modelAudio": "1642fb2b593c065e"
      },
      {
        "id": "U06-L04",
        "title": "照提示准备森林任务",
        "objective": "读懂天气、衣物与地标提示，完成一组有关联的选择。",
        "core": [],
        "review": [
          "cold",
          "coat",
          "boots",
          "path",
          "bridge",
          "tree"
        ],
        "frames": [
          "It's cold.",
          "Put on your coat and boots.",
          "Follow the path."
        ],
        "scene": "提示卡指定外套与靴子；虚拟地图上桥靠近树，小路通向桥。衣物题按卡片内容作答，不用常识替代文本。",
        "reading": "It is cold.\nPut on your coat and boots.\nFollow the path.\nThe bridge is near the tree.",
        "dialogue": [
          [
            "向导",
            "It's cold.",
            "天气冷。"
          ],
          [
            "玩家",
            "I need my coat.",
            "我需要我的外套。"
          ],
          [
            "向导",
            "Put on your boots too.",
            "也穿上你的靴子。"
          ],
          [
            "玩家",
            "Yes. I have my coat and boots.",
            "好。我有外套和靴子。"
          ]
        ],
        "tasks": [
          {
            "type": "read-choice",
            "prompt": "提示卡明确要求哪两样衣物？",
            "options": [
              "外套和靴子",
              "帽子和袜子",
              "衬衫和鞋"
            ],
            "answer": "外套和靴子",
            "why": "原文指定 coat and boots；本题不是问所有可能适合冷天的衣物。",
            "id": "U06-L04-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "外套和靴子"
              },
              {
                "id": "o1",
                "text": "帽子和袜子"
              },
              {
                "id": "o2",
                "text": "衬衫和鞋"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "listen-choice",
            "prompt": "听录音，选择匹配的位置说明图。",
            "audio": "The bridge is near the tree.",
            "options": [
              "桥在树附近",
              "桥在花附近",
              "桥在房子附近"
            ],
            "answer": "桥在树附近",
            "why": "near the tree 表示在树附近。",
            "id": "U06-L04-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "桥在树附近"
              },
              {
                "id": "o1",
                "text": "桥在花附近"
              },
              {
                "id": "o2",
                "text": "桥在房子附近"
              }
            ],
            "correct": "o0",
            "audioId": "9ccc746d7df03aa0"
          },
          {
            "type": "build",
            "prompt": "给朋友一条沿小路前进的指令。",
            "tokens": [
              "path",
              "the",
              "Follow"
            ],
            "answer": "Follow the path.",
            "why": "Follow 后接要沿着走的路径 the path。",
            "id": "U06-L04-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "path"
              },
              {
                "id": "o1",
                "text": "the"
              },
              {
                "id": "o2",
                "text": "Follow"
              }
            ],
            "correct": "Follow the path.",
            "answerAudio": "b0e404ec3784d366"
          }
        ],
        "say": {
          "prompt": "复述提示中的一项准备要求或一项位置线索。",
          "model": "Put on your coat. The bridge is near the tree.",
          "note": "允许分句说，不要求一次复述整张卡片。"
        },
        "note": "本关不新增核心词；如果图片与文字冲突，必须先修正素材，不能把冲突当作挑战。",
        "number": 24,
        "withinUnit": 4,
        "unitId": "U06",
        "unitTitle": "森林与天气",
        "shortTitle": "走小路",
        "sceneId": "U06-L04",
        "words": [
          {
            "en": "cold",
            "zh": "冷的",
            "audio": "88d1b68add913e37"
          },
          {
            "en": "coat",
            "zh": "外套",
            "audio": "5214c7213e4be64e"
          },
          {
            "en": "boots",
            "zh": "靴子；此处为复数",
            "audio": "a3dad488ed34f28e"
          },
          {
            "en": "path",
            "zh": "小路；路径",
            "audio": "e61ed49d3942217e"
          },
          {
            "en": "bridge",
            "zh": "桥",
            "audio": "385c08d71efdc18c"
          },
          {
            "en": "tree",
            "zh": "树",
            "audio": "bbd40a4f531a62fa"
          }
        ],
        "reviewWords": [
          {
            "en": "cold",
            "zh": "冷的",
            "audio": "88d1b68add913e37"
          },
          {
            "en": "coat",
            "zh": "外套",
            "audio": "5214c7213e4be64e"
          },
          {
            "en": "boots",
            "zh": "靴子；此处为复数",
            "audio": "a3dad488ed34f28e"
          },
          {
            "en": "path",
            "zh": "小路；路径",
            "audio": "e61ed49d3942217e"
          },
          {
            "en": "bridge",
            "zh": "桥",
            "audio": "385c08d71efdc18c"
          },
          {
            "en": "tree",
            "zh": "树",
            "audio": "bbd40a4f531a62fa"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "It's cold.",
            "zh": "天气冷。",
            "audio": "a30de5164e6f4d68"
          },
          {
            "speaker": "玩家",
            "en": "I need my coat.",
            "zh": "我需要我的外套。",
            "audio": "a5f343241acac2d7"
          },
          {
            "speaker": "向导",
            "en": "Put on your boots too.",
            "zh": "也穿上你的靴子。",
            "audio": "31c07e067f0c28d7"
          },
          {
            "speaker": "玩家",
            "en": "Yes. I have my coat and boots.",
            "zh": "好。我有外套和靴子。",
            "audio": "461e7413f3521fa5"
          }
        ],
        "frameAudio": [
          "a30de5164e6f4d68",
          "1ee8353a33966598",
          "b0e404ec3784d366"
        ],
        "modelAudio": "155c99bc6eb0f5d2",
        "readingAudio": "f56d4542276bfdd1",
        "readingZH": [
          "天气冷。",
          "穿上你的外套和靴子。",
          "沿着小路走。",
          "桥在树附近。"
        ]
      }
    ],
    "number": 6
  },
  {
    "id": "U07",
    "title": "村庄与协作",
    "goal": "听懂简单方向，认识村庄地点，用礼貌表达求助和传递信息。",
    "checkpoint": "在方向明确的地图上按指令选路，找到指定地点，尝试提出帮助请求。",
    "lessons": [
      {
        "id": "U07-L01",
        "title": "向左还是向右",
        "objective": "根据角色朝向理解左右与直行，听懂 go / turn / wait。",
        "core": [
          [
            "left",
            "左；左边"
          ],
          [
            "right",
            "右；右边"
          ],
          [
            "straight",
            "直；向前直行"
          ],
          [
            "turn",
            "转弯；转向"
          ],
          [
            "go",
            "去；走"
          ],
          [
            "wait",
            "等待"
          ]
        ],
        "review": [
          "walk",
          "stop",
          "path"
        ],
        "frames": [
          "Go straight.",
          "Turn left.",
          "Turn right.",
          "Wait, please."
        ],
        "scene": "角色面朝屏幕上方站在起点，前方为路口，左侧蓝色小屋、右侧红色小屋；全程保留朝向箭头，不自动旋转视角。",
        "dialogue": [
          [
            "向导",
            "Go straight.",
            "直走。"
          ],
          [
            "玩家",
            "Straight?",
            "直走？"
          ],
          [
            "向导",
            "Yes. Then turn left.",
            "对。然后左转。"
          ],
          [
            "玩家",
            "Left. OK!",
            "左边。好！"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "角色仍面朝屏幕上方。听指令，选择箭头。",
            "audio": "Turn right.",
            "options": [
              "向右转的箭头",
              "向左转的箭头",
              "直行箭头"
            ],
            "answer": "向右转的箭头",
            "why": "right 是右；题目先固定角色朝向，避免把地图左右与角色左右混淆。",
            "id": "U07-L01-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "向右转的箭头"
              },
              {
                "id": "o1",
                "text": "向左转的箭头"
              },
              {
                "id": "o2",
                "text": "直行箭头"
              }
            ],
            "correct": "o0",
            "audioId": "6d0203cc597d5d7a"
          },
          {
            "type": "scene-choice",
            "prompt": "按本课地图先直走到路口，再左转，会走向哪座小屋？",
            "options": [
              "蓝色小屋",
              "红色小屋",
              "原地的箱子"
            ],
            "answer": "蓝色小屋",
            "why": "地图规定路口左侧是蓝色小屋。",
            "id": "U07-L01-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "蓝色小屋"
              },
              {
                "id": "o1",
                "text": "红色小屋"
              },
              {
                "id": "o2",
                "text": "原地的箱子"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "礼貌地请同伴等一下。",
            "tokens": [
              "please",
              "Wait"
            ],
            "answer": "Wait, please.",
            "why": "Wait 表示等待，please 使指令更礼貌。",
            "id": "U07-L01-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "please"
              },
              {
                "id": "o1",
                "text": "Wait"
              }
            ],
            "correct": "Wait, please.",
            "answerAudio": "0d2d4896061f1ad9"
          }
        ],
        "say": {
          "prompt": "对屏幕角色发出一条方向指令。",
          "model": "Go straight. Turn left.",
          "note": "一次说一句也可以；角色朝向变化时要重新标明方向。"
        },
        "note": "wait 是等待，stop 是停止当前动作。不要靠强制速度判断是否理解方向。",
        "number": 25,
        "withinUnit": 1,
        "unitId": "U07",
        "unitTitle": "村庄与协作",
        "shortTitle": "辨方向",
        "sceneId": "U07-L01",
        "words": [
          {
            "en": "left",
            "zh": "左；左边",
            "audio": "eed81f8c35a4f8d1"
          },
          {
            "en": "right",
            "zh": "右；右边",
            "audio": "18c1acf88d5ae46b"
          },
          {
            "en": "straight",
            "zh": "直；向前直行",
            "audio": "c7aa891d840eb1e9"
          },
          {
            "en": "turn",
            "zh": "转弯；转向",
            "audio": "41430e836f4ee52a"
          },
          {
            "en": "go",
            "zh": "去；走",
            "audio": "1b03878430aa642d"
          },
          {
            "en": "wait",
            "zh": "等待",
            "audio": "fb3457102aab2cc8"
          }
        ],
        "reviewWords": [
          {
            "en": "walk",
            "zh": "走路",
            "audio": "f8fe598a1b9ef8b6"
          },
          {
            "en": "stop",
            "zh": "停止",
            "audio": "bf161ba524dcb163"
          },
          {
            "en": "path",
            "zh": "小路；路径",
            "audio": "e61ed49d3942217e"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Go straight.",
            "zh": "直走。",
            "audio": "91753b9d94d5b218"
          },
          {
            "speaker": "玩家",
            "en": "Straight?",
            "zh": "直走？",
            "audio": "66e6e87915171a2f"
          },
          {
            "speaker": "向导",
            "en": "Yes. Then turn left.",
            "zh": "对。然后左转。",
            "audio": "2f508e7620f44606"
          },
          {
            "speaker": "玩家",
            "en": "Left. OK!",
            "zh": "左边。好！",
            "audio": "8d24cd9077808ac1"
          }
        ],
        "frameAudio": [
          "91753b9d94d5b218",
          "5a81a3398e713de3",
          "6d0203cc597d5d7a",
          "0d2d4896061f1ad9"
        ],
        "modelAudio": "c347fc44dc613fce"
      },
      {
        "id": "U07-L02",
        "title": "到公园找朋友",
        "objective": "辨认六个常见地点，并结合位置与方向说明去哪里。",
        "core": [
          [
            "school",
            "学校"
          ],
          [
            "park",
            "公园"
          ],
          [
            "farm",
            "农场"
          ],
          [
            "home",
            "家"
          ],
          [
            "town",
            "城镇"
          ],
          [
            "store",
            "商店"
          ]
        ],
        "review": [
          "shop",
          "near",
          "right"
        ],
        "frames": [
          "Where is the park?",
          "It's near the school.",
          "Go straight. Then turn right.",
          "Go home."
        ],
        "scene": "原创小镇地图有明确英文地名和配图，公园位于学校附近；从起点直行后右转到公园。",
        "dialogue": [
          [
            "玩家",
            "Where is the park?",
            "公园在哪里？"
          ],
          [
            "向导",
            "Go straight. Then turn right.",
            "直走，然后右转。"
          ],
          [
            "玩家",
            "Is it near the school?",
            "它在学校附近吗？"
          ],
          [
            "向导",
            "Yes, it is.",
            "是的。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听地点词，选地图上的地点。",
            "audio": "School.",
            "options": [
              "学校图标",
              "公园图标",
              "农场图标"
            ],
            "answer": "学校图标",
            "why": "school 是学校。",
            "id": "U07-L02-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "学校图标"
              },
              {
                "id": "o1",
                "text": "公园图标"
              },
              {
                "id": "o2",
                "text": "农场图标"
              }
            ],
            "correct": "o0",
            "audioId": "8a5a76f645198cd6"
          },
          {
            "type": "read-choice",
            "prompt": "按本课地图，公园在哪里？",
            "options": [
              "学校附近",
              "商店附近",
              "农场附近"
            ],
            "answer": "学校附近",
            "why": "It's near the school. 对应地图上的位置。",
            "id": "U07-L02-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "学校附近"
              },
              {
                "id": "o1",
                "text": "商店附近"
              },
              {
                "id": "o2",
                "text": "农场附近"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "问“公园在哪里”。",
            "tokens": [
              "park",
              "is",
              "Where",
              "the"
            ],
            "answer": "Where is the park?",
            "why": "Where is the ...? 用来询问一个地点或物品的位置。",
            "id": "U07-L02-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "park"
              },
              {
                "id": "o1",
                "text": "is"
              },
              {
                "id": "o2",
                "text": "Where"
              },
              {
                "id": "o3",
                "text": "the"
              }
            ],
            "correct": "Where is the park?",
            "answerAudio": "eae74ae1bb6ac28c"
          }
        ],
        "say": {
          "prompt": "任选一个已学地点，问路或给一条方向提示。",
          "model": "Where is the park? Turn right.",
          "note": "回答必须结合对应地图，不把模型句当作所有地图的固定路线。"
        },
        "note": "store 与 shop 都可指商店；home 常用于 Go home，不机械说 Go to home。house 与 home 的差别可用图示解释，不作术语测验。",
        "number": 26,
        "withinUnit": 2,
        "unitId": "U07",
        "unitTitle": "村庄与协作",
        "shortTitle": "找公园",
        "sceneId": "U07-L02",
        "words": [
          {
            "en": "school",
            "zh": "学校",
            "audio": "20c5d987057cb1c2"
          },
          {
            "en": "park",
            "zh": "公园",
            "audio": "905d9fbf57788edd"
          },
          {
            "en": "farm",
            "zh": "农场",
            "audio": "3b7133d2c03fe246"
          },
          {
            "en": "home",
            "zh": "家",
            "audio": "46c6e5e450c6964d"
          },
          {
            "en": "town",
            "zh": "城镇",
            "audio": "7b0d5759eb0748c1"
          },
          {
            "en": "store",
            "zh": "商店",
            "audio": "631b9bf64a98ca4c"
          }
        ],
        "reviewWords": [
          {
            "en": "shop",
            "zh": "商店",
            "audio": "2c6acb15d46bbdfd"
          },
          {
            "en": "near",
            "zh": "在……附近",
            "audio": "e831f2c0b96ef031"
          },
          {
            "en": "right",
            "zh": "右；右边",
            "audio": "18c1acf88d5ae46b"
          }
        ],
        "lines": [
          {
            "speaker": "玩家",
            "en": "Where is the park?",
            "zh": "公园在哪里？",
            "audio": "ec5b0d8abde24c3b"
          },
          {
            "speaker": "向导",
            "en": "Go straight. Then turn right.",
            "zh": "直走，然后右转。",
            "audio": "b1f844f83f047f83"
          },
          {
            "speaker": "玩家",
            "en": "Is it near the school?",
            "zh": "它在学校附近吗？",
            "audio": "c64afa5b0e32256d"
          },
          {
            "speaker": "向导",
            "en": "Yes, it is.",
            "zh": "是的。",
            "audio": "b92c449775e1d14e"
          }
        ],
        "frameAudio": [
          "eae74ae1bb6ac28c",
          "d5e43faf4e3a647a",
          "b1f844f83f047f83",
          "f7cd500ee5ac681d"
        ],
        "modelAudio": "c036b83304e88bfa"
      },
      {
        "id": "U07-L03",
        "title": "把信息告诉队友",
        "objective": "认识常见学习与交流动作，能按指令读地图、写名字或说一句提示。",
        "core": [
          [
            "read",
            "读"
          ],
          [
            "write",
            "写"
          ],
          [
            "listen",
            "听"
          ],
          [
            "say",
            "说"
          ],
          [
            "ask",
            "问"
          ],
          [
            "answer",
            "回答"
          ]
        ],
        "review": [
          "map",
          "friend",
          "help"
        ],
        "frames": [
          "Read the map, please.",
          "Write your name.",
          "Listen, please.",
          "Can you help me, please?"
        ],
        "scene": "原创角色分别读地图、写名字、听同伴、开口说话；动作图卡通过姿态和对象区分，不使用只有文字不同的同一张图片。",
        "dialogue": [
          [
            "玩家",
            "Can you help me, please?",
            "请问你能帮我吗？"
          ],
          [
            "向导",
            "Yes. Read the map.",
            "能。读一读地图。"
          ],
          [
            "玩家",
            "Where is the school?",
            "学校在哪里？"
          ],
          [
            "向导",
            "Go straight. It's near the park.",
            "直走。它在公园附近。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听指令，选择对应动作。",
            "audio": "Write your name.",
            "options": [
              "在名牌上写名字",
              "听同伴说话",
              "打开箱子"
            ],
            "answer": "在名牌上写名字",
            "why": "write 是写；name 是已学的名字。",
            "id": "U07-L03-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "在名牌上写名字"
              },
              {
                "id": "o1",
                "text": "听同伴说话"
              },
              {
                "id": "o2",
                "text": "打开箱子"
              }
            ],
            "correct": "o0",
            "audioId": "f26d654a458b1b6d"
          },
          {
            "type": "read-choice",
            "prompt": "哪张动作卡与 read 对应？",
            "options": [
              "角色正在读地图",
              "角色正在吃苹果",
              "角色正在游泳"
            ],
            "answer": "角色正在读地图",
            "why": "read 指读；这里的对象是地图。",
            "id": "U07-L03-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "角色正在读地图"
              },
              {
                "id": "o1",
                "text": "角色正在吃苹果"
              },
              {
                "id": "o2",
                "text": "角色正在游泳"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "用词块说“请听”。",
            "tokens": [
              "please",
              "Listen"
            ],
            "answer": "Listen, please.",
            "why": "Listen, please. 是一条简短、自然的礼貌指令。",
            "id": "U07-L03-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "please"
              },
              {
                "id": "o1",
                "text": "Listen"
              }
            ],
            "correct": "Listen, please.",
            "answerAudio": "6b9ecfdeb40fbea8"
          }
        ],
        "say": {
          "prompt": "先向同伴求助，再问一个已学的问题。",
          "model": "Can you help me, please? Where is the park?",
          "note": "可由一人轮流扮演两个角色；没有真实同伴也能练习，但不伪装成已完成真实交流。"
        },
        "note": "ask / answer 可配“问问题—回答”的动作练习；read 与 write 在本课才作为明确核心词讲解，先前界面指令继续允许中文辅助。",
        "number": 27,
        "withinUnit": 3,
        "unitId": "U07",
        "unitTitle": "村庄与协作",
        "shortTitle": "传信息",
        "sceneId": "U07-L03",
        "words": [
          {
            "en": "read",
            "zh": "读",
            "audio": "47beedd598b772f2"
          },
          {
            "en": "write",
            "zh": "写",
            "audio": "d85f557d8645c814"
          },
          {
            "en": "listen",
            "zh": "听",
            "audio": "1799ba76855e4d55"
          },
          {
            "en": "say",
            "zh": "说",
            "audio": "9eb2beaa579ebac9"
          },
          {
            "en": "ask",
            "zh": "问",
            "audio": "48bcc5a7e5eafc62"
          },
          {
            "en": "answer",
            "zh": "回答",
            "audio": "11cacadef68f4e2b"
          }
        ],
        "reviewWords": [
          {
            "en": "map",
            "zh": "地图",
            "audio": "505881157bdaa6e8"
          },
          {
            "en": "friend",
            "zh": "朋友",
            "audio": "d6ad8bfd725db068"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          }
        ],
        "lines": [
          {
            "speaker": "玩家",
            "en": "Can you help me, please?",
            "zh": "请问你能帮我吗？",
            "audio": "e85b759e46b1d32e"
          },
          {
            "speaker": "向导",
            "en": "Yes. Read the map.",
            "zh": "能。读一读地图。",
            "audio": "1daf8d88b00e3b85"
          },
          {
            "speaker": "玩家",
            "en": "Where is the school?",
            "zh": "学校在哪里？",
            "audio": "4c518df8aa21b0e5"
          },
          {
            "speaker": "向导",
            "en": "Go straight. It's near the park.",
            "zh": "直走。它在公园附近。",
            "audio": "e0a8e5b5e34a0b26"
          }
        ],
        "frameAudio": [
          "afb27829cdd1df16",
          "f26d654a458b1b6d",
          "6b9ecfdeb40fbea8",
          "fa3332f45672d2f7"
        ],
        "modelAudio": "075acdf024da0583"
      },
      {
        "id": "U07-L04",
        "title": "把书送给公园里的朋友",
        "objective": "读懂任务与方向提示，在清楚的地图上选择路线并说明目的地。",
        "core": [],
        "review": [
          "left",
          "right",
          "map",
          "park",
          "help",
          "read"
        ],
        "frames": [
          "Give the book to your friend.",
          "Go straight. Turn left.",
          "The park is near the school."
        ],
        "scene": "本课单独地图：角色面朝上，路口左侧是公园，右侧是农场，学校在公园附近；不要复用上一课相反的路线图却不更新题目。",
        "reading": "Give the book to your friend.\nGo straight. Turn left.\nThe park is near the school.",
        "dialogue": [
          [
            "向导",
            "Can you help me?",
            "你能帮我吗？"
          ],
          [
            "玩家",
            "Yes. Where is my friend?",
            "能。我的朋友在哪里？"
          ],
          [
            "向导",
            "In the park. Go straight. Turn left.",
            "在公园里。直走，然后左转。"
          ],
          [
            "玩家",
            "I have the book. Thanks!",
            "我带着书。谢谢！"
          ]
        ],
        "tasks": [
          {
            "type": "read-choice",
            "prompt": "本课任务要求送什么给朋友？",
            "options": [
              "书",
              "苹果",
              "台灯"
            ],
            "answer": "书",
            "why": "Give the book to your friend. 中的 book 是书。",
            "id": "U07-L04-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "书"
              },
              {
                "id": "o1",
                "text": "苹果"
              },
              {
                "id": "o2",
                "text": "台灯"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "scene-choice",
            "prompt": "根据本课地图和便条，直走后左转到哪里？",
            "options": [
              "公园",
              "农场",
              "商店"
            ],
            "answer": "公园",
            "why": "本课地图规定左侧是公园；不能背用前一课的路线。",
            "id": "U07-L04-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "公园"
              },
              {
                "id": "o1",
                "text": "农场"
              },
              {
                "id": "o2",
                "text": "商店"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "把目的地告诉同伴：“我的朋友在公园里。”",
            "tokens": [
              "the",
              "friend",
              "park",
              "My",
              "in",
              "is"
            ],
            "answer": "My friend is in the park.",
            "why": "in the park 表示在公园里；My friend 是句子的主语。",
            "id": "U07-L04-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "the"
              },
              {
                "id": "o1",
                "text": "friend"
              },
              {
                "id": "o2",
                "text": "park"
              },
              {
                "id": "o3",
                "text": "My"
              },
              {
                "id": "o4",
                "text": "in"
              },
              {
                "id": "o5",
                "text": "is"
              }
            ],
            "correct": "My friend is in the park.",
            "answerAudio": "01be9e07acacc141"
          }
        ],
        "say": {
          "prompt": "说目的地或重复两步方向提示。",
          "model": "Go straight. Turn left. My friend is in the park.",
          "note": "可只选其中一句或两句；路径以本课地图为准。"
        },
        "note": "本关不新增核心词。路线错题要区分“没听懂英语”和“图上朝向不清楚”，不把界面问题算成语言问题。",
        "number": 28,
        "withinUnit": 4,
        "unitId": "U07",
        "unitTitle": "村庄与协作",
        "shortTitle": "送本书",
        "sceneId": "U07-L04",
        "words": [
          {
            "en": "left",
            "zh": "左；左边",
            "audio": "eed81f8c35a4f8d1"
          },
          {
            "en": "right",
            "zh": "右；右边",
            "audio": "18c1acf88d5ae46b"
          },
          {
            "en": "map",
            "zh": "地图",
            "audio": "505881157bdaa6e8"
          },
          {
            "en": "park",
            "zh": "公园",
            "audio": "905d9fbf57788edd"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          },
          {
            "en": "read",
            "zh": "读",
            "audio": "47beedd598b772f2"
          }
        ],
        "reviewWords": [
          {
            "en": "left",
            "zh": "左；左边",
            "audio": "eed81f8c35a4f8d1"
          },
          {
            "en": "right",
            "zh": "右；右边",
            "audio": "18c1acf88d5ae46b"
          },
          {
            "en": "map",
            "zh": "地图",
            "audio": "505881157bdaa6e8"
          },
          {
            "en": "park",
            "zh": "公园",
            "audio": "905d9fbf57788edd"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          },
          {
            "en": "read",
            "zh": "读",
            "audio": "47beedd598b772f2"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Can you help me?",
            "zh": "你能帮我吗？",
            "audio": "386355a3e9824dd9"
          },
          {
            "speaker": "玩家",
            "en": "Yes. Where is my friend?",
            "zh": "能。我的朋友在哪里？",
            "audio": "dd0ee355faaee328"
          },
          {
            "speaker": "向导",
            "en": "In the park. Go straight. Turn left.",
            "zh": "在公园里。直走，然后左转。",
            "audio": "5ec185f5e3a57477"
          },
          {
            "speaker": "玩家",
            "en": "I have the book. Thanks!",
            "zh": "我带着书。谢谢！",
            "audio": "0d96eccef10685ee"
          }
        ],
        "frameAudio": [
          "d075bae28deb0cdb",
          "e76cc088fb804343",
          "fe3eb689fc10fd8a"
        ],
        "modelAudio": "44b98fdee2928623",
        "readingAudio": "97eab2b8a99bf66f",
        "readingZH": [
          "把书给你的朋友。",
          "直走，然后左转。",
          "公园在学校附近。"
        ]
      }
    ],
    "number": 7
  },
  {
    "id": "U08",
    "title": "灯塔任务",
    "goal": "读短便条、说明需要的材料，使用顺序词把多个已学动作连成任务。",
    "checkpoint": "独立或在提示下读懂位置线索，按两至三步指令完成虚拟任务，并尝试说明自己的行动。",
    "lessons": [
      {
        "id": "U08-L01",
        "title": "夜里的营地便条",
        "objective": "认识简单时间与光线词，读懂含 now 的简短指令。",
        "core": [
          [
            "note",
            "便条"
          ],
          [
            "light",
            "光；灯光"
          ],
          [
            "dark",
            "黑暗的"
          ],
          [
            "night",
            "夜晚"
          ],
          [
            "day",
            "白天"
          ],
          [
            "now",
            "现在"
          ]
        ],
        "review": [
          "box",
          "open",
          "read"
        ],
        "frames": [
          "It is night.",
          "It is dark.",
          "Read the note.",
          "Open the box now."
        ],
        "scene": "营地夜晚与白天的对照图；夜晚图明确光线暗，不把所有夜晚都描述为必然全黑。箱子上有可放大的便条。",
        "dialogue": [
          [
            "向导",
            "It is night.",
            "现在是夜晚。"
          ],
          [
            "玩家",
            "It is dark.",
            "这里很暗。"
          ],
          [
            "向导",
            "Read the note.",
            "读一读便条。"
          ],
          [
            "玩家",
            "Open the box now.",
            "现在打开箱子。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听录音，选对应时间场景。",
            "audio": "It is night.",
            "options": [
              "标明夜晚的场景",
              "标明白天的场景",
              "单独的面包图"
            ],
            "answer": "标明夜晚的场景",
            "why": "night 是夜晚；day 是白天。",
            "id": "U08-L01-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "标明夜晚的场景"
              },
              {
                "id": "o1",
                "text": "标明白天的场景"
              },
              {
                "id": "o2",
                "text": "单独的面包图"
              }
            ],
            "correct": "o0",
            "audioId": "9c600571c09af8b7"
          },
          {
            "type": "read-choice",
            "prompt": "便条写着 Open the box now. 要求做什么？",
            "options": [
              "现在打开箱子",
              "现在关门",
              "现在去睡觉"
            ],
            "answer": "现在打开箱子",
            "why": "open、box、now 分别说明动作、对象和时间。",
            "id": "U08-L01-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "现在打开箱子"
              },
              {
                "id": "o1",
                "text": "现在关门"
              },
              {
                "id": "o2",
                "text": "现在去睡觉"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "用词块说“读便条”。",
            "tokens": [
              "note",
              "Read",
              "the"
            ],
            "answer": "Read the note.",
            "why": "Read 是动作，the note 是要读的对象。",
            "id": "U08-L01-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "note"
              },
              {
                "id": "o1",
                "text": "Read"
              },
              {
                "id": "o2",
                "text": "the"
              }
            ],
            "correct": "Read the note.",
            "answerAudio": "0ed6f1525f546a1f"
          }
        ],
        "say": {
          "prompt": "选择白天或夜晚场景，读出一句对应描述。",
          "model": "It is night. It is dark.",
          "note": "也可说 It is day.，根据实际选图回答。"
        },
        "note": "如示范 The light is on.，须说明 on 此时表示灯亮着，不把它当作 U03 空间位置的简单替换。主练习不强考该多义用法。",
        "number": 29,
        "withinUnit": 1,
        "unitId": "U08",
        "unitTitle": "灯塔任务",
        "shortTitle": "读便条",
        "sceneId": "U08-L01",
        "words": [
          {
            "en": "note",
            "zh": "便条",
            "audio": "e7179f391260bfa5"
          },
          {
            "en": "light",
            "zh": "光；灯光",
            "audio": "0f27cb9b7fc05244"
          },
          {
            "en": "dark",
            "zh": "黑暗的",
            "audio": "4865c13a35017c3c"
          },
          {
            "en": "night",
            "zh": "夜晚",
            "audio": "e12bcce5bb6ff840"
          },
          {
            "en": "day",
            "zh": "白天",
            "audio": "cb5aa0a7172611de"
          },
          {
            "en": "now",
            "zh": "现在",
            "audio": "55360b008d701399"
          }
        ],
        "reviewWords": [
          {
            "en": "box",
            "zh": "盒子；箱子",
            "audio": "6ddf405619257c0d"
          },
          {
            "en": "open",
            "zh": "打开",
            "audio": "694cc008c13b3ebf"
          },
          {
            "en": "read",
            "zh": "读",
            "audio": "47beedd598b772f2"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "It is night.",
            "zh": "现在是夜晚。",
            "audio": "9c600571c09af8b7"
          },
          {
            "speaker": "玩家",
            "en": "It is dark.",
            "zh": "这里很暗。",
            "audio": "5331ddd9bfe58491"
          },
          {
            "speaker": "向导",
            "en": "Read the note.",
            "zh": "读一读便条。",
            "audio": "0ed6f1525f546a1f"
          },
          {
            "speaker": "玩家",
            "en": "Open the box now.",
            "zh": "现在打开箱子。",
            "audio": "37a90b00339ec5bf"
          }
        ],
        "frameAudio": [
          "9c600571c09af8b7",
          "63ba7185344a4a2c",
          "0ed6f1525f546a1f",
          "7ea785df0cbe292d"
        ],
        "modelAudio": "a8392c400b849067"
      },
      {
        "id": "U08-L02",
        "title": "帮忙修好小桥",
        "objective": "辨认三种材料，表达需要什么以及自己能承担的动作。",
        "core": [
          [
            "rope",
            "绳子"
          ],
          [
            "wood",
            "木头；木材"
          ],
          [
            "stone",
            "石头；石材"
          ],
          [
            "carry",
            "拿；搬运；携带"
          ],
          [
            "build",
            "建造"
          ],
          [
            "fix",
            "修理"
          ]
        ],
        "review": [
          "bridge",
          "help",
          "box"
        ],
        "frames": [
          "Can you help me fix the bridge?",
          "What do you need?",
          "I need wood and rope.",
          "I can carry the wood."
        ],
        "scene": "完全虚构的像素修桥任务；材料卡清楚区分绳子、木材、石材，不提供现实桥梁施工方法，也不要求真实搬运。",
        "dialogue": [
          [
            "向导",
            "Can you help me fix the bridge?",
            "你能帮我修桥吗？"
          ],
          [
            "玩家",
            "Yes. What do you need?",
            "能。你需要什么？"
          ],
          [
            "向导",
            "Wood and rope, please.",
            "请给我木材和绳子。"
          ],
          [
            "玩家",
            "I can carry the wood.",
            "我可以搬木材。"
          ]
        ],
        "tasks": [
          {
            "type": "listen-choice",
            "prompt": "听请求，选择指定材料组合。",
            "audio": "Wood and rope, please.",
            "options": [
              "木材和绳子",
              "石材和绳子",
              "木材和面包"
            ],
            "answer": "木材和绳子",
            "why": "wood 和 rope 是录音要求的两种材料。",
            "id": "U08-L02-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "木材和绳子"
              },
              {
                "id": "o1",
                "text": "石材和绳子"
              },
              {
                "id": "o2",
                "text": "木材和面包"
              }
            ],
            "correct": "o0",
            "audioId": "d781b02d77a5b7a2"
          },
          {
            "type": "read-choice",
            "prompt": "图中旧桥需要修理，不是另建一座新桥。哪个动作词更符合任务？",
            "options": [
              "fix",
              "sleep",
              "swim"
            ],
            "answer": "fix",
            "why": "fix 表示修理。build 表示建造；本题不把两者混为完全相同的动作。",
            "id": "U08-L02-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "fix"
              },
              {
                "id": "o1",
                "text": "sleep"
              },
              {
                "id": "o2",
                "text": "swim"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "build",
            "prompt": "说“我可以搬木材”。",
            "tokens": [
              "wood",
              "carry",
              "the",
              "I",
              "can"
            ],
            "answer": "I can carry the wood.",
            "why": "can 后接 carry，the wood 指任务中的木材。",
            "id": "U08-L02-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "wood"
              },
              {
                "id": "o1",
                "text": "carry"
              },
              {
                "id": "o2",
                "text": "the"
              },
              {
                "id": "o3",
                "text": "I"
              },
              {
                "id": "o4",
                "text": "can"
              }
            ],
            "correct": "I can carry the wood.",
            "answerAudio": "cd71d9e60064394c"
          }
        ],
        "say": {
          "prompt": "选择一种任务需要的材料，说自己能帮什么忙。",
          "model": "I can carry the rope.",
          "note": "只在游戏中表达，不要求孩子现实搬重物。"
        },
        "note": "wood 在材料含义中通常不可数，不说 two woods。need 已在 U02 的目标句型中出现，本课不将其重复计作新核心词。",
        "number": 30,
        "withinUnit": 2,
        "unitId": "U08",
        "unitTitle": "灯塔任务",
        "shortTitle": "修小桥",
        "sceneId": "U08-L02",
        "words": [
          {
            "en": "rope",
            "zh": "绳子",
            "audio": "9eb6c7a14b51f9c5"
          },
          {
            "en": "wood",
            "zh": "木头；木材",
            "audio": "d50882dc22af42bc"
          },
          {
            "en": "stone",
            "zh": "石头；石材",
            "audio": "a6ba50c8ecca9caf"
          },
          {
            "en": "carry",
            "zh": "拿；搬运；携带",
            "audio": "9bd02074f9404d33"
          },
          {
            "en": "build",
            "zh": "建造",
            "audio": "5b1774fc40c0561a"
          },
          {
            "en": "fix",
            "zh": "修理",
            "audio": "228b3573180ff61c"
          }
        ],
        "reviewWords": [
          {
            "en": "bridge",
            "zh": "桥",
            "audio": "385c08d71efdc18c"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          },
          {
            "en": "box",
            "zh": "盒子；箱子",
            "audio": "6ddf405619257c0d"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Can you help me fix the bridge?",
            "zh": "你能帮我修桥吗？",
            "audio": "919ef135f71d9775"
          },
          {
            "speaker": "玩家",
            "en": "Yes. What do you need?",
            "zh": "能。你需要什么？",
            "audio": "4a7b65709bffcf81"
          },
          {
            "speaker": "向导",
            "en": "Wood and rope, please.",
            "zh": "请给我木材和绳子。",
            "audio": "d781b02d77a5b7a2"
          },
          {
            "speaker": "玩家",
            "en": "I can carry the wood.",
            "zh": "我可以搬木材。",
            "audio": "1b8913b73ed372a0"
          }
        ],
        "frameAudio": [
          "919ef135f71d9775",
          "30550af1d0a49eec",
          "bbe4b1314d522bbd",
          "cd71d9e60064394c"
        ],
        "modelAudio": "c68b8202b407179e"
      },
      {
        "id": "U08-L03",
        "title": "把任务按顺序完成",
        "objective": "听懂 first / next / last，把三步任务按顺序组织起来。",
        "core": [
          [
            "first",
            "首先；第一"
          ],
          [
            "next",
            "接下来"
          ],
          [
            "last",
            "最后"
          ],
          [
            "together",
            "一起"
          ],
          [
            "again",
            "再次"
          ],
          [
            "ready",
            "准备好的"
          ]
        ],
        "review": [
          "note",
          "key",
          "door"
        ],
        "frames": [
          "Ready?",
          "Let's work together.",
          "First, read the note.",
          "Next, find the key. Last, open the door.",
          "Try again."
        ],
        "scene": "三格连续任务图：读便条、找到钥匙、开门；按依赖关系推进，不在拿到钥匙前让门显示已经解锁。",
        "dialogue": [
          [
            "向导",
            "Ready?",
            "准备好了吗？"
          ],
          [
            "玩家",
            "Yes. Let's work together.",
            "好了。我们一起做吧。"
          ],
          [
            "向导",
            "First, read the note. Next, find the key.",
            "先读便条。接着找钥匙。"
          ],
          [
            "玩家",
            "Last, open the door!",
            "最后打开门！"
          ]
        ],
        "tasks": [
          {
            "type": "order",
            "prompt": "根据本课对话排列任务。",
            "options": [
              "Open the door.",
              "Read the note.",
              "Find the key."
            ],
            "answer": [
              "Read the note.",
              "Find the key.",
              "Open the door."
            ],
            "why": "First 对应读便条，Next 对应找钥匙，Last 对应开门。",
            "id": "U08-L03-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "Open the door."
              },
              {
                "id": "o1",
                "text": "Read the note."
              },
              {
                "id": "o2",
                "text": "Find the key."
              }
            ],
            "correct": [
              "o1",
              "o2",
              "o0"
            ]
          },
          {
            "type": "listen-choice",
            "prompt": "第一次没完成任务，听提示选择意思。",
            "audio": "Try again.",
            "options": [
              "再试一次",
              "马上告别",
              "原地睡觉"
            ],
            "answer": "再试一次",
            "why": "again 表示再次。Try again 作为完整反馈表达输入。",
            "id": "U08-L03-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "再试一次"
              },
              {
                "id": "o1",
                "text": "马上告别"
              },
              {
                "id": "o2",
                "text": "原地睡觉"
              }
            ],
            "correct": "o0",
            "audioId": "1783a6174ba4d1f8"
          },
          {
            "type": "build",
            "prompt": "说“我们一起做吧”。",
            "tokens": [
              "together",
              "work",
              "Let's"
            ],
            "answer": "Let's work together.",
            "why": "Let's work together. 是合作邀请；work 在此作为表达中的支架词，不额外计入核心词数。",
            "id": "U08-L03-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "together"
              },
              {
                "id": "o1",
                "text": "work"
              },
              {
                "id": "o2",
                "text": "Let's"
              }
            ],
            "correct": "Let's work together.",
            "answerAudio": "6dfd8c4ed6f66e97"
          }
        ],
        "say": {
          "prompt": "用 First / Next / Last 复述任务，可先说两步。",
          "model": "First, read the note. Next, find the key. Last, open the door.",
          "note": "听示范、看图和独立复述应分别记录，不能把跟读直接等同于独立表达。"
        },
        "note": "本课只测试三步以内的清晰顺序，不加入更长记忆负荷。last 是本任务最后一步，不必延伸到所有时间含义。",
        "number": 31,
        "withinUnit": 3,
        "unitId": "U08",
        "unitTitle": "灯塔任务",
        "shortTitle": "排顺序",
        "sceneId": "U08-L03",
        "words": [
          {
            "en": "first",
            "zh": "首先；第一",
            "audio": "5bdedd5bd1f73bef"
          },
          {
            "en": "next",
            "zh": "接下来",
            "audio": "2628c9394076ec0b"
          },
          {
            "en": "last",
            "zh": "最后",
            "audio": "c050f78e59411018"
          },
          {
            "en": "together",
            "zh": "一起",
            "audio": "5e4dbc56118fc076"
          },
          {
            "en": "again",
            "zh": "再次",
            "audio": "7d2241c0f806f251"
          },
          {
            "en": "ready",
            "zh": "准备好的",
            "audio": "2cf41427980df0ed"
          }
        ],
        "reviewWords": [
          {
            "en": "note",
            "zh": "便条",
            "audio": "e7179f391260bfa5"
          },
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "door",
            "zh": "门",
            "audio": "ffdc982cd77d6b8f"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Ready?",
            "zh": "准备好了吗？",
            "audio": "14a8c6cab3d27b0f"
          },
          {
            "speaker": "玩家",
            "en": "Yes. Let's work together.",
            "zh": "好了。我们一起做吧。",
            "audio": "7c97109d7bff3dd6"
          },
          {
            "speaker": "向导",
            "en": "First, read the note. Next, find the key.",
            "zh": "先读便条。接着找钥匙。",
            "audio": "0384d39cabc3be79"
          },
          {
            "speaker": "玩家",
            "en": "Last, open the door!",
            "zh": "最后打开门！",
            "audio": "f931498d116c5858"
          }
        ],
        "frameAudio": [
          "14a8c6cab3d27b0f",
          "6dfd8c4ed6f66e97",
          "a1f8f926697bc650",
          "c5cbd1413004114b",
          "1783a6174ba4d1f8"
        ],
        "modelAudio": "19a88f9a41da2838"
      },
      {
        "id": "U08-L04",
        "title": "终章：打开灯塔的门",
        "objective": "综合读取便条、理解位置、整理顺序并与同伴完成虚拟任务。",
        "core": [],
        "review": [
          "note",
          "key",
          "door",
          "under",
          "help",
          "together"
        ],
        "frames": [
          "Read the note.",
          "The key is under the table.",
          "Let's go home together."
        ],
        "scene": "完全原创的夜间灯塔内外场景。箱子里有便条，钥匙在桌子下方；取得钥匙后开门，任务结尾角色一起回营地。灯塔名称只作为中文情境，不额外考 lighthouse。",
        "reading": "It is night.\nRead the note in the box.\nThe key is under the table.\nOpen the door.\nGo home together.",
        "dialogue": [
          [
            "向导",
            "Can you help me?",
            "你能帮我吗？"
          ],
          [
            "玩家",
            "Yes. The key is under the table.",
            "能。钥匙在桌子下面。"
          ],
          [
            "向导",
            "Great! Open the door.",
            "太好了！打开门。"
          ],
          [
            "玩家",
            "Let's go home together.",
            "我们一起回营地吧。"
          ]
        ],
        "tasks": [
          {
            "type": "read-choice",
            "prompt": "按本课便条，钥匙在哪里？",
            "options": [
              "桌子下面",
              "箱子上面",
              "门附近的椅子上"
            ],
            "answer": "桌子下面",
            "why": "便条写着 under the table；便条在箱子里，不等于钥匙也在箱子里。",
            "id": "U08-L04-Q1",
            "choices": [
              {
                "id": "o0",
                "text": "桌子下面"
              },
              {
                "id": "o1",
                "text": "箱子上面"
              },
              {
                "id": "o2",
                "text": "门附近的椅子上"
              }
            ],
            "correct": "o0"
          },
          {
            "type": "order",
            "prompt": "按照便条和任务依赖，排列三步操作。",
            "options": [
              "Open the door.",
              "Find the key under the table.",
              "Read the note."
            ],
            "answer": [
              "Read the note.",
              "Find the key under the table.",
              "Open the door."
            ],
            "why": "先获得线索，再取得钥匙，最后开门；不能只凭图片顺序而忽略便条内容。",
            "id": "U08-L04-Q2",
            "choices": [
              {
                "id": "o0",
                "text": "Open the door."
              },
              {
                "id": "o1",
                "text": "Find the key under the table."
              },
              {
                "id": "o2",
                "text": "Read the note."
              }
            ],
            "correct": [
              "o2",
              "o1",
              "o0"
            ]
          },
          {
            "type": "build",
            "prompt": "邀请朋友“一起回家”。",
            "tokens": [
              "home",
              "together",
              "Let's",
              "go"
            ],
            "answer": "Let's go home together.",
            "why": "Go home 不加 to；together 表示一起。",
            "id": "U08-L04-Q3",
            "choices": [
              {
                "id": "o0",
                "text": "home"
              },
              {
                "id": "o1",
                "text": "together"
              },
              {
                "id": "o2",
                "text": "Let's"
              },
              {
                "id": "o3",
                "text": "go"
              }
            ],
            "correct": "Let's go home together.",
            "answerAudio": "7d9cd68d0b751807"
          }
        ],
        "say": {
          "prompt": "任选两句说明你找到了什么、它在哪里，或你能做什么。",
          "model": "The key is under the table. I can open the door.",
          "note": "不设唯一答案；只核对表达是否与当前场景一致。没有真人或可靠语音评测时不显示口语分数。"
        },
        "note": "终章不新增核心词，允许重听与提示。通关记录表示完成课程活动，不代表获得 CEFR 或其他语言等级认证。",
        "number": 32,
        "withinUnit": 4,
        "unitId": "U08",
        "unitTitle": "灯塔任务",
        "shortTitle": "开灯塔",
        "sceneId": "U08-L04",
        "words": [
          {
            "en": "note",
            "zh": "便条",
            "audio": "e7179f391260bfa5"
          },
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "door",
            "zh": "门",
            "audio": "ffdc982cd77d6b8f"
          },
          {
            "en": "under",
            "zh": "在……下面",
            "audio": "763ba1b9fa510c05"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          },
          {
            "en": "together",
            "zh": "一起",
            "audio": "5e4dbc56118fc076"
          }
        ],
        "reviewWords": [
          {
            "en": "note",
            "zh": "便条",
            "audio": "e7179f391260bfa5"
          },
          {
            "en": "key",
            "zh": "钥匙",
            "audio": "12642786fbbe43c8"
          },
          {
            "en": "door",
            "zh": "门",
            "audio": "ffdc982cd77d6b8f"
          },
          {
            "en": "under",
            "zh": "在……下面",
            "audio": "763ba1b9fa510c05"
          },
          {
            "en": "help",
            "zh": "帮助",
            "audio": "ec6a86019f64d184"
          },
          {
            "en": "together",
            "zh": "一起",
            "audio": "5e4dbc56118fc076"
          }
        ],
        "lines": [
          {
            "speaker": "向导",
            "en": "Can you help me?",
            "zh": "你能帮我吗？",
            "audio": "386355a3e9824dd9"
          },
          {
            "speaker": "玩家",
            "en": "Yes. The key is under the table.",
            "zh": "能。钥匙在桌子下面。",
            "audio": "b35335c33c15bac9"
          },
          {
            "speaker": "向导",
            "en": "Great! Open the door.",
            "zh": "太好了！打开门。",
            "audio": "2c4dd6bb5deb36b2"
          },
          {
            "speaker": "玩家",
            "en": "Let's go home together.",
            "zh": "我们一起回营地吧。",
            "audio": "24015554c83ba634"
          }
        ],
        "frameAudio": [
          "0ed6f1525f546a1f",
          "41c28576cde03cc3",
          "7d9cd68d0b751807"
        ],
        "modelAudio": "8a372299c22a871e",
        "readingAudio": "ff5475a07a5f6b6e",
        "readingZH": [
          "现在是夜晚。",
          "读箱子里的便条。",
          "钥匙在桌子下面。",
          "打开门。",
          "一起回家。"
        ]
      }
    ],
    "number": 8
  }
];
export const LESSONS = UNITS.flatMap(u=>u.lessons);
export const VOCAB = {"hello": "你好", "goodbye": "再见", "yes": "是；对", "no": "不；不是", "friend": "朋友", "name": "名字", "red": "红色", "blue": "蓝色", "green": "绿色", "yellow": "黄色", "black": "黑色", "white": "白色", "one": "一", "two": "二", "three": "三", "four": "四", "five": "五", "six": "六", "bag": "包；背包", "map": "地图", "book": "书", "pen": "笔", "key": "钥匙", "box": "盒子；箱子", "water": "水", "bread": "面包", "apple": "苹果", "milk": "牛奶", "rice": "米饭；大米", "egg": "鸡蛋", "seven": "七", "eight": "八", "nine": "九", "ten": "十", "small": "小的", "big": "大的", "house": "房子", "room": "房间", "door": "门", "window": "窗户", "bed": "床", "chair": "椅子", "in": "在……里面", "on": "在……上面", "under": "在……下面", "near": "在……附近", "table": "桌子", "lamp": "灯；台灯", "open": "打开", "close": "关上", "sit": "坐", "stand": "站立", "look": "看", "stop": "停止", "cat": "猫", "dog": "狗", "cow": "奶牛；牛", "pig": "猪", "hen": "母鸡", "duck": "鸭子", "run": "跑", "jump": "跳", "swim": "游泳", "walk": "走路", "fly": "飞", "sleep": "睡觉", "feed": "喂养", "help": "帮助", "find": "找到；寻找", "give": "给", "come": "来", "follow": "跟随", "banana": "香蕉", "orange": "橙子；本课指水果", "carrot": "胡萝卜", "potato": "土豆", "fish": "鱼；本课食物场景指鱼肉", "juice": "果汁", "want": "想要", "some": "一些", "more": "更多；再一些", "please": "请", "thanks": "谢谢", "hungry": "饿的", "buy": "买", "pay": "付钱", "coin": "硬币；游戏币", "shop": "商店", "basket": "篮子", "food": "食物", "sun": "太阳", "rain": "雨", "wind": "风", "cloud": "云", "hot": "热的", "cold": "冷的", "coat": "外套", "hat": "帽子", "shirt": "衬衫", "shoes": "鞋；此处为复数", "boots": "靴子；此处为复数", "socks": "袜子；此处为复数", "tree": "树", "flower": "花", "river": "河流", "forest": "森林", "path": "小路；路径", "bridge": "桥", "left": "左；左边", "right": "右；右边", "straight": "直；向前直行", "turn": "转弯；转向", "go": "去；走", "wait": "等待", "school": "学校", "park": "公园", "farm": "农场", "home": "家", "town": "城镇", "store": "商店", "read": "读", "write": "写", "listen": "听", "say": "说", "ask": "问", "answer": "回答", "note": "便条", "light": "光；灯光", "dark": "黑暗的", "night": "夜晚", "day": "白天", "now": "现在", "rope": "绳子", "wood": "木头；木材", "stone": "石头；石材", "carry": "拿；搬运；携带", "build": "建造", "fix": "修理", "first": "首先；第一", "next": "接下来", "last": "最后", "together": "一起", "again": "再次", "ready": "准备好的"};
