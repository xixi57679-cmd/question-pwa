// 汽车总线刷题系统题库
// 题目来源：汽车总线技术（最终版本）.docx
// 答案来源：汽车总线技术答案.docx
// 说明：仅包含填空题、选择题、判断题；不包含简答题。

export type QuestionType = "fill" | "choice" | "judge";

export interface FillQuestion {
  id: string;
  chapter: string;
  type: "fill";
  question: string;
  /** 填空题答案按空格顺序排列 */
  answer: string[];
  /** 可选：每个空可接受的不同写法，顺序与 answer 对应 */
  acceptedAnswers?: string[][];
  explanation?: string;
}

export interface ChoiceQuestion {
  id: string;
  chapter: string;
  type: "choice";
  question: string;
  options: string[];
  /** A/B/C/D */
  answer: string;
  explanation?: string;
}

export interface JudgeQuestion {
  id: string;
  chapter: string;
  type: "judge";
  question: string;
  /** 正确/错误 */
  answer: "正确" | "错误";
  explanation?: string;
}

export type Question = FillQuestion | ChoiceQuestion | JudgeQuestion;

export const chapters = [
  "第一章：汽车总线技术概论",
  "第二章：计算机网络基础",
  "第三章：CAN 总线技术基础",
  "第四章：动力 CAN 总线",
  "第五章：SAE J1939 协议",
] as const;

export const questions: Question[] = [
  {
    "id": "ch1-fill-001",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "汽车总线技术被誉为汽车的“____”，是实现众多电子控制单元（ECU）高效、可靠、实时交换信息的关键技术，是车载网络系统的核心基础。",
    "answer": [
      "神经网络"
    ]
  },
  {
    "id": "ch1-fill-002",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "1986 年，____公司在 SAE（美国汽车工程师学会）会议上正式介绍了控制器局域网（CAN）总线，标志着车载网络技术进入了规范化发展阶段。",
    "answer": [
      "博世（Bosch）"
    ],
    "acceptedAnswers": [
      [
        "博世（Bosch）",
        "博世",
        "Bosch"
      ]
    ]
  },
  {
    "id": "ch1-fill-003",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "按照 SAE 的车载网络分类标准，面向安全气囊系统、采用 10 Mbit/s 光纤传输、具备极高实时性与安全性的总线标准是____。",
    "answer": [
      "Byteflight 协议"
    ],
    "acceptedAnswers": [
      [
        "Byteflight 协议",
        "Byteflight"
      ]
    ]
  },
  {
    "id": "ch1-fill-004",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "动力传动总线速率范围为____～1 Mbit/s。",
    "answer": [
      "125 kbit/s"
    ],
    "acceptedAnswers": [
      [
        "125 kbit/s",
        "125kbit/s",
        "125 kbps",
        "125kbps"
      ]
    ]
  },
  {
    "id": "ch1-fill-005",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "车载网络高电压信号范围为____V，低电压为 0～2 V，2～6 V 为禁止区间。",
    "answer": [
      "6～12"
    ],
    "acceptedAnswers": [
      [
        "6～12",
        "6-12",
        "6~12"
      ]
    ]
  },
  {
    "id": "ch1-fill-006",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "数字信号在计算机中所有数据都以“____”和“____”的二进制序列形式表示，这是数字通信的基础，也是车载总线传输数据的底层逻辑。",
    "answer": [
      "0",
      "1"
    ]
  },
  {
    "id": "ch1-fill-007",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "串行传输中，仅针对字符的持续时间建立同步，无需在发送器和接收器之间使用同频同相时钟信号的方式，称为“____”传输。它通过起始位和停止位来标识字符的开始与结束。",
    "answer": [
      "异步"
    ]
  },
  {
    "id": "ch1-fill-008",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "为减少蓄电池静态功耗，车载网络系统具备“____”和“____”功能。在点火开关关闭后，网络节点进入低功耗休眠；有事件触发时则快速唤醒总线。",
    "answer": [
      "休眠",
      "唤醒"
    ]
  },
  {
    "id": "ch1-fill-009",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "CAN 总线的数据场长度可以是____个字节。",
    "answer": [
      "6-12个字节"
    ],
    "acceptedAnswers": [
      [
        "6-12个字节",
        "6～12个字节",
        "6-12",
        "6～12"
      ]
    ]
  },
  {
    "id": "ch1-fill-010",
    "chapter": "第一章：汽车总线技术概论",
    "type": "fill",
    "question": "智能驾驶中常用的分布式控制系统结构是____。",
    "answer": [
      "神经网络"
    ]
  },
  {
    "id": "ch1-choice-001",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "以下哪一年丰田公司在世纪牌汽车上最早采用了应用光缆的车门控制系统？",
    "options": [
      "1980 年",
      "1983 年",
      "1986 年",
      "1990 年"
    ],
    "answer": "B",
    "explanation": "1983 年丰田在世纪牌汽车上，首次搭载基于光缆的车门控制系统。"
  },
  {
    "id": "ch1-choice-002",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "按照 SAE 分类，应用于智能传感器或智能执行器之间的低速率、低成本子总线属于哪一类？",
    "options": [
      "A 类",
      "B 类",
      "C 类",
      "D 类"
    ],
    "answer": "A",
    "explanation": "SAE A 类网络为低速率、低成本总线，典型代表为 LIN 总线。"
  },
  {
    "id": "ch1-choice-003",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "下列哪种总线主要用于汽车动力传动系统，要求高实时性和高传输速率？",
    "options": [
      "LIN",
      "低速 CAN",
      "高速 CAN",
      "MOST"
    ],
    "answer": "C",
    "explanation": "高速 CAN 传输速率高、实时性强，主要用于发动机、变速器等动力传动系统。"
  },
  {
    "id": "ch1-choice-004",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "Byteflight 协议采用的传输介质和速率分别是？",
    "options": [
      "双绞线，250 kbit/s",
      "同轴电缆，1 Mbit/s",
      "光纤，10 Mbit/s",
      "光纤，100 Mbit/s"
    ],
    "answer": "C",
    "explanation": "Byteflight 采用光纤传输，标准传输速率为 10 Mbit/s。"
  },
  {
    "id": "ch1-choice-005",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "在异步数据传输中，用于表示一个字符传输开始的一个数据位称为？",
    "options": [
      "停止位",
      "校验位",
      "起始位",
      "同步位"
    ],
    "answer": "C",
    "explanation": "异步传输中，起始位标记字符传输的开始。"
  },
  {
    "id": "ch1-choice-006",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "当报文数据长度超过多少字节时，必须采用多帧传输机制（TP 协议）？",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": "B",
    "explanation": "标准 CAN 数据帧的数据域最大为 8 字节，超过 8 字节时需要 TP 多帧传输。"
  },
  {
    "id": "ch1-choice-007",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "诊断故障代码（DTC）中，FMI（故障模式标志）的位数为？",
    "options": [
      "3 位",
      "5 位",
      "7 位",
      "8 位"
    ],
    "answer": "B",
    "explanation": "FMI（故障模式标志）固定为 5 位。"
  },
  {
    "id": "ch1-choice-008",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "地址冲突解决机制中，多节点申请同一地址时，谁获得使用权？",
    "options": [
      "先发送请求的节点",
      "名称值最小的节点",
      "名称值最大的节点",
      "地址值最小的节点"
    ],
    "answer": "B",
    "explanation": "J1939 地址冲突机制中，NAME 值最小的节点优先获得地址使用权。"
  },
  {
    "id": "ch1-choice-009",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "DM1 报文用于传送什么信息？",
    "options": [
      "历史故障诊断代码",
      "当前的故障诊断代码",
      "清除历史故障代码",
      "停帧参数"
    ],
    "answer": "B",
    "explanation": "DM1 用于实时上报车辆当前激活的故障诊断代码。"
  },
  {
    "id": "ch1-choice-010",
    "chapter": "第一章：汽车总线技术概论",
    "type": "choice",
    "question": "SAE J1939 中，用于全局请求的目标地址是？",
    "options": [
      "0",
      "128",
      "255",
      "256"
    ],
    "answer": "C",
    "explanation": "255 为全局广播地址，用于全局请求、广播指令等场景。"
  },
  {
    "id": "ch1-judge-001",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "现代高端智能汽车的代码量已经超过千万行，其复杂程度远超早期的航天飞机（如阿波罗登月计划）。",
    "answer": "正确"
  },
  {
    "id": "ch1-judge-002",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "1986 年 Bosch 公司推出 CAN 总线后，各汽车厂家立即全面采用该技术，并迅速统一了全球的车身网络通信标准。",
    "answer": "错误",
    "explanation": "推出后并未立即全面采用，汽车厂商是逐步试点、分批应用。"
  },
  {
    "id": "ch1-judge-003",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "A 类网络（如 LIN 总线）主要应用于汽车的动力传动系统，这类系统对实时性要求极高，因此规定其传输速率需达到 1 Mbit/s。",
    "answer": "错误",
    "explanation": "A 类网络为低速网络，不用于动力传动系统。"
  },
  {
    "id": "ch1-judge-004",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "在计算机数字信号的计量中，数据存储单位 1 千字节（KB）的定义就是等于 1000 字节（Byte）。",
    "answer": "错误",
    "explanation": "计算机中 1KB=1024Byte。"
  },
  {
    "id": "ch1-judge-005",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "车载网络系统的“休眠”功能，指的是系统完全切断电源供应，不再消耗车辆蓄电池的任何电能。",
    "answer": "错误",
    "explanation": "休眠为低功耗状态，并非完全切断电源。"
  },
  {
    "id": "ch1-judge-006",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "同步数据传输需要发送端和接收端使用各自的时钟，并通过起始位和停止位同步。",
    "answer": "错误",
    "explanation": "同步传输依靠统一时钟；异步传输才使用起始位、停止位。"
  },
  {
    "id": "ch1-judge-007",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "CAN 总线属于 B 类和 C 类网络的标准之一，广泛应用于车身与动力系统控制。",
    "answer": "正确"
  },
  {
    "id": "ch1-judge-008",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "串行传输虽然布线成本低、线缆少，但数据传输时间较长，适合长距离或导线受限场景。",
    "answer": "正确"
  },
  {
    "id": "ch1-judge-009",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "E 类网络主要用于汽车信息娱乐系统，支持 DVD 播放、蓝牙连接、导航及多媒体数据交互。",
    "answer": "正确"
  },
  {
    "id": "ch1-judge-010",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "动力传动系统网络需要极高的传输速率，以保证发动机、变速器、ABS 等关键控制数据的实时响应。",
    "answer": "正确"
  },
  {
    "id": "ch1-judge-011",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "汽车 CAN 总线通信速率高、可靠性强，是目前应用最广泛的车用总线。",
    "answer": "正确"
  },
  {
    "id": "ch1-judge-012",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "A 类网络主要用于对实时性要求极高的安全关键系统，如电子制动系统。",
    "answer": "错误"
  },
  {
    "id": "ch1-judge-013",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "总线系统中的“同步传输”是指所有节点必须在同一物理时钟下工作。",
    "answer": "错误"
  },
  {
    "id": "ch1-judge-014",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "LIN 总线作为 CAN 的子网，其通信协议和物理层标准与 CAN 总线完全兼容。",
    "answer": "错误"
  },
  {
    "id": "ch1-judge-015",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "汽车总线的“显性”和“隐性”电平状态，仅由发送节点的物理特性决定。",
    "answer": "错误"
  },
  {
    "id": "ch1-judge-016",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "FlexRay 总线仅支持事件触发的通信模式，不支持时间触发模式。",
    "answer": "错误"
  },
  {
    "id": "ch1-judge-017",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "总线系统的“仲裁机制”能有效避免多个节点同时发送数据时的冲突。",
    "answer": "正确"
  },
  {
    "id": "ch1-judge-018",
    "chapter": "第一章：汽车总线技术概论",
    "type": "judge",
    "question": "车载以太网凭借高带宽、低成本和轻量化，正逐步成为新一代主流总线。",
    "answer": "正确"
  },
  {
    "id": "ch2-fill-001",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "计算机网络的主要功能包括资源共享与____。其中，____是计算机网络最基本的功能。",
    "answer": [
      "通信",
      "数据通信"
    ]
  },
  {
    "id": "ch2-fill-002",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "双绞线的传输距离一般为____米，同轴电缆的传输距离可达____米。",
    "answer": [
      "100",
      "5～50"
    ],
    "acceptedAnswers": [
      [
        "100"
      ],
      [
        "5～50",
        "5-50",
        "5~50"
      ]
    ]
  },
  {
    "id": "ch2-fill-003",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "单位时间内网络传输的数据量，通常用来衡量网络传输能力的指标是____。",
    "answer": [
      "吞吐量"
    ]
  },
  {
    "id": "ch2-fill-004",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "在信道中传输的信号分为模拟信号和____信号，计算机网络中主要使用后者。",
    "answer": [
      "数字"
    ]
  },
  {
    "id": "ch2-fill-005",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "以太网使用 CSMA/CD 协议来解决____层的介质访问控制问题，避免____的发生。",
    "answer": [
      "数据链路",
      "冲突"
    ]
  },
  {
    "id": "ch2-fill-006",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "IP 地址 172.16.5.1 属于____类地址，其默认的子网掩码是____。",
    "answer": [
      "B",
      "255.255.0.0"
    ],
    "acceptedAnswers": [
      [
        "B",
        "B类"
      ],
      [
        "255.255.0.0"
      ]
    ]
  },
  {
    "id": "ch2-fill-007",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "OSI 参考模型中，负责使分组以适当的路径通过通信子网的是____层。",
    "answer": [
      "网络"
    ],
    "acceptedAnswers": [
      [
        "网络",
        "网络层"
      ]
    ]
  },
  {
    "id": "ch2-fill-008",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "100BASE-TX 网络中，传输介质的最大段长为 100 米，其数据传输速率为____ Mbps。",
    "answer": [
      "31.25"
    ]
  },
  {
    "id": "ch2-fill-009",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "计算机网络是计算机技术和____技术结合的产物，其最基本的功能是____与____。",
    "answer": [
      "通信",
      "数据通信",
      "资源共享"
    ]
  },
  {
    "id": "ch2-fill-010",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "按地理范围分类，个人区域网（PAN）的范围约为____米；城域网（MAN）的作用距离一般为____km。",
    "answer": [
      "10",
      "10～100"
    ],
    "acceptedAnswers": [
      [
        "10"
      ],
      [
        "10～100",
        "10-100",
        "10~100"
      ]
    ]
  },
  {
    "id": "ch2-fill-011",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "在计算机网络性能指标中，____表示单位时间内通过网络某一点的实际数据量，其上限受网络带宽限制。",
    "answer": [
      "吞吐量"
    ]
  },
  {
    "id": "ch2-fill-012",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "网卡是连接计算机与网络的硬件接口，其核心功能是将计算机内部的____转换为通信线路可传输的电子信号或电磁信号，实现数据的编码与解码、数据的发送与接收。",
    "answer": [
      "数字信号"
    ]
  },
  {
    "id": "ch2-fill-013",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "交换机工作在 OSI 模型的____层，它基于 MAC 地址识别并转发数据帧。交换机通过划分独立的____域，隔离了网络中的数据冲突，可有效提升局域网的带宽利用率。",
    "answer": [
      "数据链路",
      "冲突"
    ]
  },
  {
    "id": "ch2-fill-014",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "IP 地址 172.16.0.0 属于____类地址，其默认子网掩码为____。",
    "answer": [
      "B",
      "255.255.0.0"
    ],
    "acceptedAnswers": [
      [
        "B",
        "B类"
      ],
      [
        "255.255.0.0"
      ]
    ]
  },
  {
    "id": "ch2-fill-015",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "OSI 参考模型共分为七层，其中____层负责确定分组从源端到目的端的路由选择。",
    "answer": [
      "网络"
    ],
    "acceptedAnswers": [
      [
        "网络",
        "网络层"
      ]
    ]
  },
  {
    "id": "ch2-fill-016",
    "chapter": "第二章：计算机网络基础",
    "type": "fill",
    "question": "现场总线技术中，基金会现场总线（FF）的 H1 总线传输速率为____ kb/s，并支持总线供电和本质安全。",
    "answer": [
      "31.25"
    ]
  },
  {
    "id": "ch2-choice-001",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "下列哪个网络拓扑结构具有中央节点，且中央节点负荷较重，但结构简单、便于管理？",
    "options": [
      "总线形",
      "环形",
      "星形",
      "网状形"
    ],
    "answer": "C",
    "explanation": "星形拓扑以一台设备作为中央节点，结构简单、便于管理，但中央节点负荷较重。"
  },
  {
    "id": "ch2-choice-002",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "在计算机网络性能指标中，时延由发送时延、传播时延、处理时延和下列哪一项组成？",
    "options": [
      "接收时延",
      "排队时延",
      "确认时延",
      "编码时延"
    ],
    "answer": "B",
    "explanation": "网络总时延由发送时延、传播时延、处理时延、排队时延组成。"
  },
  {
    "id": "ch2-choice-003",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "工作于 OSI 物理层，主要功能是对信号进行再生、整形、放大以扩大传输距离的设备是？",
    "options": [
      "网桥",
      "交换机",
      "路由器",
      "集线器"
    ],
    "answer": "D",
    "explanation": "集线器工作在 OSI 物理层，主要对电信号进行再生、整形与放大。"
  },
  {
    "id": "ch2-choice-004",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "路由器工作于 OSI 哪一层，根据什么转发数据？",
    "options": [
      "链路层 / MAC",
      "网络层 / IP",
      "传输层 / 端口",
      "物理层 / 比特流"
    ],
    "answer": "B",
    "explanation": "路由器工作在 OSI 网络层，依据 IP 地址完成路由寻址与转发。"
  },
  {
    "id": "ch2-choice-005",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "微软开发、我国局域网应用最广泛的网络操作系统是？",
    "options": [
      "Unix",
      "NetWare",
      "Windows",
      "Linux"
    ],
    "answer": "C",
    "explanation": "Windows 是微软开发的网络操作系统，操作简单、兼容性强。"
  },
  {
    "id": "ch2-choice-006",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "某 IP 地址为 192.168.1.100，子网掩码为 255.255.255.0，则该 IP 地址的网络地址是？",
    "options": [
      "192.168.1.0",
      "192.168.0.0",
      "192.0.0.0",
      "0.0.0.0"
    ],
    "answer": "A",
    "explanation": "网络地址由 IP 地址与子网掩码按位与得到。"
  },
  {
    "id": "ch2-choice-007",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "在 TCP/IP 参考模型中，与 OSI 模型的会话层和表示层功能相对应的层次是？",
    "options": [
      "主机至网络层",
      "互联网层",
      "传输层",
      "应用层"
    ],
    "answer": "D",
    "explanation": "TCP/IP 应用层整合了 OSI 的应用层、表示层、会话层功能。"
  },
  {
    "id": "ch2-choice-008",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "下列哪种现场总线采用 ISO/OSI 参考模型的全部七层协议，并将协议封装在 Neuron 芯片中？",
    "options": [
      "CAN",
      "Profibus",
      "LON",
      "FF H1"
    ],
    "answer": "C",
    "explanation": "LON（LonWorks）采用完整 OSI 七层协议，协议固件集成在 Neuron 芯片中。"
  },
  {
    "id": "ch2-choice-009",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "关于 CAN 总线，下列说法正确的是？",
    "options": [
      "CAN 总线包含物理层、数据链路层和应用层三层结构",
      "CAN 总线采用面向连接的点对点通信方式",
      "CAN 总线的应用层协议由用户或组织自定义，如 DeviceNet",
      "CAN 总线仅支持光纤作为传输介质"
    ],
    "answer": "C",
    "explanation": "CAN 总线应用层协议可由用户或组织自定义，如 DeviceNet、SAE J1939。"
  },
  {
    "id": "ch2-choice-010",
    "chapter": "第二章：计算机网络基础",
    "type": "choice",
    "question": "国际公认的三大现场总线标准族中，针对道路车辆数字信息交换的标准是？",
    "options": [
      "IEC 61158：工业控制系统用现场总线标准",
      "IEC 62026：建筑电气装置用数据通信信息总线",
      "ISO 11898：道路车辆控制器局域网（CAN）",
      "IEEE 802.3：以太网标准"
    ],
    "answer": "C",
    "explanation": "ISO 11898 是道路车辆 CAN 总线国际标准。"
  },
  {
    "id": "ch2-judge-001",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "计算机网络的发展经历了面向终端的单级网络、计算机网络对计算机网络、开放式标准化计算机网络三个阶段。",
    "answer": "正确"
  },
  {
    "id": "ch2-judge-002",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "广域网（WAN）的作用范围通常为几十千米到几千千米，因特网的核心部分采用高速链路进行数据传输，以保证长距离通信的效率。",
    "answer": "正确"
  },
  {
    "id": "ch2-judge-003",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "信道利用率并非越高越好，根据排队论，当利用率接近 1 时，网络时延会急剧增大并趋近于无穷大，而非趋近于零。",
    "answer": "正确"
  },
  {
    "id": "ch2-judge-004",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "服务器是网络系统的核心设备，其功能远不止文件存储，还承担着数据处理、计算、资源管理、响应客户端请求等关键任务，是网络服务的提供者。",
    "answer": "正确"
  },
  {
    "id": "ch2-judge-005",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "调制解调器（Modem）俗称“猫”，它的核心功能是实现数字信号与模拟信号的相互转换。",
    "answer": "正确"
  },
  {
    "id": "ch2-judge-006",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "交换机采用存储转发交换方式时，无法校验数据包的完整性，可能转发错误帧。",
    "answer": "错误",
    "explanation": "交换机会对收到的数据帧进行完整性、差错校验，错误帧会被丢弃。"
  },
  {
    "id": "ch2-judge-007",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "TCP/IP 协议中，TCP 是面向连接的、可靠传输的协议，而 UDP 是不可靠的无连接协议。",
    "answer": "正确"
  },
  {
    "id": "ch2-judge-008",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "OSI 参考模型是国际标准，TCP/IP 模型是事实上的工业标准，两者层次划分完全相同。",
    "answer": "错误",
    "explanation": "OSI 为七层模型，TCP/IP 为四层模型。"
  },
  {
    "id": "ch2-judge-009",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "现场总线技术是自动化领域的计算机局域网，其通信模型通常完全遵循 OSI 七层模型，不做任何简化。",
    "answer": "错误",
    "explanation": "现场总线通常会简化 OSI 层级，以提升实时性。"
  },
  {
    "id": "ch2-judge-010",
    "chapter": "第二章：计算机网络基础",
    "type": "judge",
    "question": "IEC 61158 标准包含了 8 种类型的现场总线，如 FF-H1、Profibus、ControlNet 等，该标准为工业通信网络的标准化奠定了重要基础。",
    "answer": "正确"
  },
  {
    "id": "ch3-fill-001",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "fill",
    "question": "CAN 是____的英文缩写，中文意思是____。它是一种应用广泛的串行通信协议，具有高可靠性和实时性。",
    "answer": [
      "Controller Area Network",
      "控制器局域网"
    ]
  },
  {
    "id": "ch3-fill-002",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "fill",
    "question": "CAN 总线通常采用____作为传输介质，其媒体访问方式为____，是一种多主总线，网络中的节点地位平等。",
    "answer": [
      "双绞线",
      "非破坏性逐位仲裁（多主竞争）"
    ],
    "acceptedAnswers": [
      [
        "双绞线"
      ],
      [
        "非破坏性逐位仲裁（多主竞争）",
        "非破坏性逐位仲裁",
        "多主竞争"
      ]
    ]
  },
  {
    "id": "ch3-fill-003",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "fill",
    "question": "CAN 总线两端各接一个____Ω 的终端电阻，其作用是防止信号在传输线终端产生____，确保信号稳定传输。",
    "answer": [
      "120",
      "信号反射"
    ]
  },
  {
    "id": "ch3-fill-004",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "fill",
    "question": "在 CAN 总线中，无源的总线电平称为____（隐性电平），此时 CAN_H 和 CAN_L 电压相等；有源的总线电平称为____（显性电平），此时 CAN_H 和 CAN_L 之间存在电压差，显性电平具有优先权。",
    "answer": [
      "隐性电平",
      "显性电平"
    ]
  },
  {
    "id": "ch3-fill-005",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "fill",
    "question": "标准 CAN 数据帧的标识符（ID）长度为____位；扩展帧的标识符长度为____位。",
    "answer": [
      "11",
      "29"
    ]
  },
  {
    "id": "ch3-choice-001",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "CAN 总线是由哪个公司于 1985 年左右为解决汽车控制单元之间的数据传输而开发的？",
    "options": [
      "丰田",
      "博世",
      "通用",
      "西门子"
    ],
    "answer": "B"
  },
  {
    "id": "ch3-choice-002",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "CAN 总线采用的通信机制是？",
    "options": [
      "轮询方式",
      "令牌传递",
      "基于优先级的载波侦听多路访问 / 冲突检测",
      "时分多址"
    ],
    "answer": "C",
    "explanation": "CAN 总线采用基于优先级的载波侦听多路访问/冲突检测与非破坏性逐位仲裁机制。"
  },
  {
    "id": "ch3-choice-003",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "在 CAN 总线中，代表逻辑“0”的电平状态是？",
    "options": [
      "隐性位",
      "显性位",
      "高阻抗位",
      "浮动位"
    ],
    "answer": "B",
    "explanation": "显性位代表逻辑 0，隐性位代表逻辑 1。"
  },
  {
    "id": "ch3-choice-004",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "CAN 总线终端电阻的典型阻值是？",
    "options": [
      "60Ω",
      "120Ω",
      "240Ω",
      "1kΩ"
    ],
    "answer": "B",
    "explanation": "CAN 总线标准终端电阻阻值为 120Ω，用于抑制信号反射。"
  },
  {
    "id": "ch3-choice-005",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "关于 CAN 总线电控单元（节点）的组成，下列哪项是 CAN 控制器和物理总线之间的接口电路？",
    "options": [
      "单片机",
      "光电隔离电路",
      "CAN 收发器",
      "输入电路"
    ],
    "answer": "C",
    "explanation": "CAN 收发器负责 TTL 电平与 CAN 差分电平的相互转换和收发。"
  },
  {
    "id": "ch3-choice-006",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "在 CAN 总线报文中，用于表示数据帧或远程帧的起始，由一个单独的显性位组成的域是？",
    "options": [
      "仲裁域",
      "控制域",
      "开始域",
      "结束域"
    ],
    "answer": "C",
    "explanation": "开始域由 1 个显性位构成，用来标识数据帧、远程帧的传输开始。"
  },
  {
    "id": "ch3-choice-007",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "以下哪种 CAN 报文没有数据域？",
    "options": [
      "数据帧",
      "远程帧",
      "错误帧",
      "过载帧"
    ],
    "answer": "B",
    "explanation": "远程帧用于请求数据，帧结构中无数据域。"
  },
  {
    "id": "ch3-choice-008",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "CAN 总线冲突仲裁中，节点 A（00010110010）、B（00010110011）、C（00010110100）同时发送，哪个获得总线使用权？",
    "options": [
      "节点 A",
      "节点 B",
      "节点 C",
      "同时发送"
    ],
    "answer": "A",
    "explanation": "CAN ID 数值越小优先级越高，节点 A 标识符数值最小。"
  },
  {
    "id": "ch3-choice-009",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "关于 CAN 总线的数据传输过程，下列说法正确的是？",
    "options": [
      "所有控制单元只接收与自己相关的信息，不接收其他信息",
      "发送信息时，发送单元需要先检测总线是否空闲",
      "接收信息后，接收单元不需要给发送单元任何应答",
      "光电隔离电路的作用是放大信号"
    ],
    "answer": "A",
    "explanation": "CAN 节点会依据报文 ID 进行滤波，只处理与自身相关的数据。"
  },
  {
    "id": "ch3-choice-010",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "choice",
    "question": "在 CAN 总线中，过载帧的作用是？",
    "options": [
      "指示数据错误，用于在检测到错误时通知其他节点",
      "请求发送数据，作为远程帧的补充机制",
      "在先行帧和后续帧之间提供附加延时，防止总线拥塞",
      "结束数据帧，标记报文传输的完成状态"
    ],
    "answer": "C",
    "explanation": "过载帧用于在帧与帧之间增加延时，避免总线数据拥塞。"
  },
  {
    "id": "ch3-judge-001",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "CAN 总线属于汽车 A 类网络，主要用于智能传感器和执行器之间的低速通信。",
    "answer": "错误",
    "explanation": "CAN 总线归属于 B 类、C 类网络，并非 A 类网络。"
  },
  {
    "id": "ch3-judge-002",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "CAN 总线采用双绞线作为传输介质，两条线缠绕在一起可以防止数据线所产生的辐射噪声并提高抗干扰能力。",
    "answer": "正确"
  },
  {
    "id": "ch3-judge-003",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "CAN 总线电控单元中的输入电路如果接收到模拟信号，需要进行 A/D 转换后才能送入单片机进行后续处理。",
    "answer": "正确"
  },
  {
    "id": "ch3-judge-004",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "CAN 收发器在不发送信号时处于高阻状态，并且在该状态也可以正常接收总线上传输的差分信号。",
    "answer": "正确",
    "explanation": "此题在答案源文档中缺少明确答案；按 CAN 收发器工作特性判定为正确。"
  },
  {
    "id": "ch3-judge-005",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "在 CAN 总线的仲裁机制中，隐性电平可以被显性电平覆盖；其中，显性电平代表逻辑“0”，隐性电平代表逻辑“1”。",
    "answer": "正确"
  },
  {
    "id": "ch3-judge-006",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "标准 CAN 数据帧和扩展数据帧的唯一区别是标识符长度不同，其余域完全相同。",
    "answer": "错误"
  },
  {
    "id": "ch3-judge-007",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "数据帧的安全域（CRC 域）用于检测数据传递中的错误，CAN 协议提供了 5 种错误检测方法，包括循环冗余校验、帧校验等。",
    "answer": "正确"
  },
  {
    "id": "ch3-judge-008",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "远程帧用于请求数据，其与数据帧的核心区别在于没有数据域，且远程传输请求位（RTR）为隐性电平（逻辑 1）。",
    "answer": "正确"
  },
  {
    "id": "ch3-judge-009",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "错误帧包含主动错误标志和被动错误标志。主动错误标志由 6 个连续的显性位组成，用于主动通知总线上的其他节点检测到了错误；被动错误标志则由 6 个隐性位组成。",
    "answer": "正确"
  },
  {
    "id": "ch3-judge-010",
    "chapter": "第三章：CAN 总线技术基础",
    "type": "judge",
    "question": "当多个控制单元同时发送信息时，总线通过逐位仲裁机制，比较标识符中“0”（显性位）的个数。标识符中“0”出现得越早、个数越多，其优先级越高，这决定了报文的发送顺序。",
    "answer": "错误",
    "explanation": "CAN 仲裁不是统计 0 的总个数，而是从最高位开始逐位比较标识符大小。"
  },
  {
    "id": "ch4-fill-001",
    "chapter": "第四章：动力 CAN 总线",
    "type": "fill",
    "question": "动力 CAN 总线的传输速率一般为____ kbps，属于高速 CAN 标准，能够满足实时性要求较高的动力系统通信需求。",
    "answer": [
      "500"
    ],
    "acceptedAnswers": [
      [
        "500",
        "500 kbps",
        "500kbps"
      ]
    ]
  },
  {
    "id": "ch4-fill-002",
    "chapter": "第四章：动力 CAN 总线",
    "type": "fill",
    "question": "CAN 总线最初由德国____公司于 1982 年开发，旨在解决汽车电子系统日益复杂导致的“布线危机”，提升通信效率。",
    "answer": [
      "博世（Bosch）"
    ],
    "acceptedAnswers": [
      [
        "博世（Bosch）",
        "博世",
        "Bosch"
      ]
    ]
  },
  {
    "id": "ch4-fill-003",
    "chapter": "第四章：动力 CAN 总线",
    "type": "fill",
    "question": "动力 CAN 总线两端必须安装____Ω 的终端电阻，其核心作用是防止信号在传输线终端产生____，保证信号传输的完整性。",
    "answer": [
      "120",
      "信号反射"
    ]
  },
  {
    "id": "ch4-fill-004",
    "chapter": "第四章：动力 CAN 总线",
    "type": "fill",
    "question": "在纯电动汽车动力 CAN 网络中，____（填写英文缩写）相当于整车的“大脑”，负责解析驾驶员的操作意图，并精准计算电机所需输出的扭矩，协调各动力部件工作。",
    "answer": [
      "VCU"
    ]
  },
  {
    "id": "ch4-fill-005",
    "chapter": "第四章：动力 CAN 总线",
    "type": "fill",
    "question": "ESP 车身电子稳定系统检测到车辆出现侧滑、甩尾等失稳征兆时，会首先向相关 ECU 发送____指令，通过调整动力输出或施加制动来修正车身姿态。",
    "answer": [
      "制动/减小扭矩"
    ],
    "acceptedAnswers": [
      [
        "制动/减小扭矩",
        "制动",
        "减小扭矩"
      ]
    ]
  },
  {
    "id": "ch4-fill-006",
    "chapter": "第四章：动力 CAN 总线",
    "type": "fill",
    "question": "诊断动力 CAN 总线时，使用万用表可以测量____电阻，以此判断总线物理连接的完整性与终端匹配情况是否正常。",
    "answer": [
      "终端"
    ],
    "acceptedAnswers": [
      [
        "终端",
        "终端电阻"
      ]
    ]
  },
  {
    "id": "ch4-fill-007",
    "chapter": "第四章：动力 CAN 总线",
    "type": "fill",
    "question": "动力 CAN 总线采用____信号传输方式，通过差分电压检测（CAN_H 与 CAN_L 的电压差）来识别数据，抗干扰能力极强。",
    "answer": [
      "差分"
    ]
  },
  {
    "id": "ch4-fill-008",
    "chapter": "第四章：动力 CAN 总线",
    "type": "fill",
    "question": "CAN FD 相比传统 CAN，数据场最大长度从 8 字节提升到____字节，数据段传输速率最高可达____ Mbit/s，大幅提升了传输效率。",
    "answer": [
      "64",
      "8"
    ]
  },
  {
    "id": "ch4-choice-001",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "动力 CAN 总线的通信速率是？",
    "options": [
      "125 kbps",
      "250 kbps",
      "500 kbps",
      "1 Mbps"
    ],
    "answer": "C",
    "explanation": "汽车动力 CAN 总线标准通信速率通常为 500 kbps。"
  },
  {
    "id": "ch4-choice-002",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "下列哪个控制单元通常不连接在动力 CAN 总线上？",
    "options": [
      "发动机 ECU",
      "自动变速器 TCU",
      "空调控制模块",
      "ABS/ESP 控制单元"
    ],
    "answer": "C",
    "explanation": "空调控制模块属于车身电气系统，一般连接车身 CAN 总线。"
  },
  {
    "id": "ch4-choice-003",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "关于终端电阻，下列说法正确的是？",
    "options": [
      "每个 ECU 内均有 120Ω 电阻",
      "安装在总线两个物理端点",
      "阻值越大越好",
      "用于放大信号"
    ],
    "answer": "B",
    "explanation": "CAN 总线 120Ω 终端电阻仅安装在总线两个物理端点。"
  },
  {
    "id": "ch4-choice-004",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "当 CAN_H 与 CAN_L 对电源短路时，会导致？",
    "options": [
      "总线通信正常，仅部分数据丢失",
      "仅连接的单个节点发生故障，不影响其他节点",
      "整个 CAN 网络无法进行通信，系统瘫痪",
      "通信速率自动降低以维持基本传输"
    ],
    "answer": "C",
    "explanation": "CAN_H、CAN_L 对电源短路会破坏整条总线差分电平，导致网络通信中断。"
  },
  {
    "id": "ch4-choice-005",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "以下哪项是 CAN 总线特有的技术优势？",
    "options": [
      "采用单线传输，布线成本极低",
      "非破坏性总线仲裁机制，确保高优先级数据优先发送",
      "仅支持点对点的通信方式",
      "通信速率限制在 10 kbps 以内，抗干扰能力弱"
    ],
    "answer": "B",
    "explanation": "CAN 采用非破坏性总线仲裁机制，高优先级报文可优先传输。"
  },
  {
    "id": "ch4-choice-006",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "在动力 CAN 网络中，哪个节点负责根据驾驶员踏板信号计算合适的电机扭矩值？",
    "options": [
      "MCU",
      "BMS",
      "VCU",
      "HEC"
    ],
    "answer": "C",
    "explanation": "VCU 是整车控制器，负责采集踏板信号并计算电机输出扭矩。"
  },
  {
    "id": "ch4-choice-007",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "动力 CAN 总线通常遵循的应用层协议是？",
    "options": [
      "IEEE 802.3",
      "SAE J1939",
      "TCP/IP",
      "ISO 14230"
    ],
    "answer": "B",
    "explanation": "SAE J1939 是商用车动力 CAN 总线主流应用层协议。"
  },
  {
    "id": "ch4-choice-008",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "以下哪种故障属于动力 CAN 总线的电气故障？",
    "options": [
      "控制单元 CAN 控制器损坏",
      "CAN_H 对电源短路",
      "发动机 ECU 软件错误",
      "仪表显示黑屏"
    ],
    "answer": "B",
    "explanation": "CAN_H 对电源短路属于总线线路类电气故障。"
  },
  {
    "id": "ch4-choice-009",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "关于 CAN FD，下列说法错误的是？",
    "options": [
      "CAN FD 兼容传统 CAN 网络",
      "CAN FD 的数据场长度最大为 64 字节",
      "CAN FD 的传输速率可达 8 Mbps",
      "CAN FD 已经完全替代了传统 CAN"
    ],
    "answer": "D",
    "explanation": "传统 CAN 仍大规模使用，CAN FD 并未完全替代传统 CAN。"
  },
  {
    "id": "ch4-choice-010",
    "chapter": "第四章：动力 CAN 总线",
    "type": "choice",
    "question": "在动力 CAN 总线诊断中，用于观测 CAN_H 和 CAN_L 波形的主要工具是？",
    "options": [
      "万用表",
      "示波器",
      "诊断仪",
      "CAN 分析仪"
    ],
    "answer": "B",
    "explanation": "示波器可实时显示 CAN_H/CAN_L 的电压变化波形。"
  },
  {
    "id": "ch4-judge-001",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "动力 CAN 总线是汽车 CAN 网络中优先级最高、安全等级最高的网络。",
    "answer": "正确"
  },
  {
    "id": "ch4-judge-002",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "CAN 总线采用单线传输方式，以降低成本，这是其广泛应用的主要原因之一。",
    "answer": "错误",
    "explanation": "CAN 总线采用 CAN_H、CAN_L 双绞差分线传输，并非单线传输。"
  },
  {
    "id": "ch4-judge-003",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "动力 CAN 总线的终端电阻通常安装在总线的两端，而非每个节点内部，以保证信号稳定传输。",
    "answer": "正确"
  },
  {
    "id": "ch4-judge-004",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "在纯电动汽车动力 CAN 网络中，HEC（仪表显示控制单元）通常配置为只接听不发送，属于典型的被动接收节点。",
    "answer": "正确"
  },
  {
    "id": "ch4-judge-005",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "CAN 总线的标识符数值越大，代表数据的优先级越高，能够优先获得总线的使用权进行数据传输。",
    "answer": "错误",
    "explanation": "CAN 总线仲裁规则为标识符数值越小，优先级越高。"
  },
  {
    "id": "ch4-judge-006",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "动力 CAN 总线的传输速率高于车身 CAN 总线。",
    "answer": "正确"
  },
  {
    "id": "ch4-judge-007",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "终端电阻阻值与总线特性阻抗不匹配时，会产生信号反射，导致通信质量下降。",
    "answer": "正确"
  },
  {
    "id": "ch4-judge-008",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "UDS 统一诊断服务协议运行于 CAN 总线的应用层。",
    "answer": "正确"
  },
  {
    "id": "ch4-judge-009",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "CAN FD 不支持向后兼容传统 CAN 网络。",
    "answer": "错误",
    "explanation": "CAN FD 支持向后兼容传统 CAN。"
  },
  {
    "id": "ch4-judge-010",
    "chapter": "第四章：动力 CAN 总线",
    "type": "judge",
    "question": "当多个节点同时发送时，CAN 总线通过比较标识符中“0”的个数来决定优先级，“0”越多的优先级越高。",
    "answer": "错误",
    "explanation": "CAN 总线采用逐位电平比对，从标识符最高位开始依次比较。"
  },
  {
    "id": "ch5-fill-001",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "SAE J1939 协议是一种基于____总线的通信协议，其物理层与____标准兼容，是商用车网络通信的核心协议标准。",
    "answer": [
      "CAN",
      "ISO 11898"
    ]
  },
  {
    "id": "ch5-fill-002",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "SAE J1939 使用 CAN 2.0B 的____帧格式，其标识符长度为____位。",
    "answer": [
      "扩展",
      "29"
    ]
  },
  {
    "id": "ch5-fill-003",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "SAE J1939 协议数据单元（PDU）由____、____、____、____、____、____和____这____部分共同组成。",
    "answer": [
      "优先级",
      "保留位",
      "数据页",
      "PF",
      "PS",
      "源地址",
      "数据域",
      "7"
    ]
  },
  {
    "id": "ch5-fill-004",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "参数组编号（PGN）是一个____位的值，它包含了保留位、数据页位、PF 和 PS。",
    "answer": [
      "24"
    ]
  },
  {
    "id": "ch5-fill-005",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "当消息数据长度____8 字节时，必须采用分组封装的方式进行多帧发送。",
    "answer": [
      "大于"
    ]
  },
  {
    "id": "ch5-fill-006",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "SAE J1939 中，每个 ECU 具有唯一的____位名称（NAME）和____位地址（Address）。",
    "answer": [
      "64",
      "8"
    ]
  },
  {
    "id": "ch5-fill-007",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "DTC 由____（可疑参数号）、____（故障模式标志）和____（发生次数）组成。",
    "answer": [
      "SPN（可疑参数号）",
      "FMI（故障模式标志）",
      "OC（发生次数）"
    ],
    "acceptedAnswers": [
      [
        "SPN（可疑参数号）",
        "SPN",
        "可疑参数号"
      ],
      [
        "FMI（故障模式标志）",
        "FMI",
        "故障模式标志"
      ],
      [
        "OC（发生次数）",
        "OC",
        "发生次数"
      ]
    ]
  },
  {
    "id": "ch5-fill-008",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "PDU1 格式的 PF（协议数据单元格式）值范围为____，该格式用于点对点通信，此时 PS 域代表的是____。",
    "answer": [
      "0～239",
      "目标节点地址"
    ],
    "acceptedAnswers": [
      [
        "0～239",
        "0-239",
        "0~239"
      ],
      [
        "目标节点地址",
        "目标地址"
      ]
    ]
  },
  {
    "id": "ch5-fill-009",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "在不使用网络连接设备的条件下，单个 SAE J1939 网段内最多可连接____个 ECU 节点；标准传输速率为____ kbps；在该速率下，最大传输线长度为____米。",
    "answer": [
      "30",
      "250",
      "40"
    ]
  },
  {
    "id": "ch5-fill-010",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "SAE J1939 的网络管理协议主要包含网络源地址的动态分配与释放管理、地址与功能的逻辑关联映射，以及____与____。",
    "answer": [
      "地址冲突检测",
      "地址冲突解决"
    ]
  },
  {
    "id": "ch5-fill-011",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "SAE J1939 主要用到 OSI 的四个层：____、____、____、____。",
    "answer": [
      "物理层",
      "数据链路层",
      "网络层",
      "应用层"
    ]
  },
  {
    "id": "ch5-fill-012",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "基于节点的分帧传输分为三步：____、____、____。",
    "answer": [
      "建立连接",
      "数据传输",
      "拆除连接"
    ]
  },
  {
    "id": "ch5-fill-013",
    "chapter": "第五章：SAE J1939 协议",
    "type": "fill",
    "question": "PDU2 格式的 PF 值 240～255 的报文为____格式。",
    "answer": [
      "PDU2"
    ]
  },
  {
    "id": "ch5-choice-001",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "SAE J1939 协议主要定义在 OSI 模型的哪些层？",
    "options": [
      "物理层、数据链路层、网络层、应用层",
      "物理层、数据链路层、传输层、会话层",
      "网络层、传输层、会话层、表示层",
      "数据链路层、网络层、传输层、应用层"
    ],
    "answer": "A"
  },
  {
    "id": "ch5-choice-002",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "PGN（参数组编号）是一个多少位的值？",
    "options": [
      "12 位",
      "16 位",
      "24 位",
      "29 位"
    ],
    "answer": "C",
    "explanation": "PGN 固定为 24 位。"
  },
  {
    "id": "ch5-choice-003",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "PDU 格式（PF）是一个 8 位域。PF 小于多少时为 PDU1 格式？",
    "options": [
      "8",
      "16",
      "240",
      "255"
    ],
    "answer": "C",
    "explanation": "PF<240 时为 PDU1 格式，240≤PF≤255 时为 PDU2 格式。"
  },
  {
    "id": "ch5-choice-004",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "在 SAE J1939 中，命令消息的默认优先级通常为？",
    "options": [
      "0",
      "3",
      "6",
      "7"
    ],
    "answer": "B",
    "explanation": "常规命令类消息默认优先级为 3。"
  },
  {
    "id": "ch5-choice-005",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "关于 PDU2 格式，下列说法正确的是？",
    "options": [
      "支持特定目标地址通信",
      "PS 域为目标地址",
      "仅支持全局传输（广播 / 多播）",
      "PF 值范围为 0~239"
    ],
    "answer": "C",
    "explanation": "PDU2 的 PS 域为组扩展，仅支持广播、多播等全局传输。"
  },
  {
    "id": "ch5-choice-006",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "当报文数据长度超过多少字节时，必须采用多帧传输机制（TP 协议）？",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": "B",
    "explanation": "标准 CAN 单帧报文的数据域最大长度为 8 字节。"
  },
  {
    "id": "ch5-choice-007",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "诊断故障代码（DTC）中，FMI（故障模式标志）的位数为？",
    "options": [
      "3 位",
      "5 位",
      "7 位",
      "8 位"
    ],
    "answer": "B",
    "explanation": "FMI 固定为 5 位。"
  },
  {
    "id": "ch5-choice-008",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "地址冲突解决机制中，多节点申请同一地址时，谁获得使用权？",
    "options": [
      "先发送请求的节点",
      "名称值最小的节点",
      "名称值最大的节点",
      "地址值最小的节点"
    ],
    "answer": "B",
    "explanation": "J1939 地址冲突仲裁中，NAME 值最小的节点优先获得地址使用权。"
  },
  {
    "id": "ch5-choice-009",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "DM1 报文用于传送什么信息？",
    "options": [
      "历史故障诊断代码",
      "当前的故障诊断代码",
      "清除历史故障代码",
      "停帧参数"
    ],
    "answer": "B",
    "explanation": "DM1 用来实时传输车辆当前激活的故障诊断代码。"
  },
  {
    "id": "ch5-choice-010",
    "chapter": "第五章：SAE J1939 协议",
    "type": "choice",
    "question": "SAE J1939 中，用于全局请求的目标地址是？",
    "options": [
      "0",
      "128",
      "255",
      "256"
    ],
    "answer": "C",
    "explanation": "255 为全网全局广播地址。"
  },
  {
    "id": "ch5-judge-001",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "SAE J1939 协议以 CAN 2.0A 标准帧为基础，标识符为 11 位。",
    "answer": "错误",
    "explanation": "SAE J1939 基于 CAN 2.0B 扩展帧，标识符长度为 29 位。"
  },
  {
    "id": "ch5-judge-002",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "PDU1 格式的 PS 域存放目标地址（DA），支持点对点通信。",
    "answer": "正确"
  },
  {
    "id": "ch5-judge-003",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "PGN 是一个 24 位的值，包括保留位（R）、数据页位（DP）、PF 和 PS。",
    "answer": "正确"
  },
  {
    "id": "ch5-judge-004",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "消息优先级数值越大，优先级越高。",
    "answer": "错误",
    "explanation": "优先级数值越小，优先级越高。"
  },
  {
    "id": "ch5-judge-005",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "数据超 8 字节时，须用 BAM 方式多帧传输，无需建立连接。",
    "answer": "错误",
    "explanation": "超过 8 字节时可采用 BAM 或 RTS/CTS，并非必须使用 BAM。"
  },
  {
    "id": "ch5-judge-006",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "每个 ECU 在网络上电后需要发送地址声明报文，名称值最小的节点获得地址使用权。这是 J1939 网络地址仲裁的关键机制。",
    "answer": "正确"
  },
  {
    "id": "ch5-judge-007",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "FMI（故障模式标识符）用于指示故障类型，其中 FMI=0 表示数据低于下限，FMI=1 表示数据超出上限，是诊断故障码解析的重要依据。",
    "answer": "正确"
  },
  {
    "id": "ch5-judge-008",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "DM1 报文在故障激活时会自动发送，其正常的更新速度为每秒一次，确保网络中的诊断工具能实时获取最新的故障状态信息。",
    "answer": "正确"
  },
  {
    "id": "ch5-judge-009",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "PDU2 格式支持特定目标地址，并非只能全局广播。",
    "answer": "错误",
    "explanation": "PDU2 仅支持广播/多播，无特定目标地址。"
  },
  {
    "id": "ch5-judge-010",
    "chapter": "第五章：SAE J1939 协议",
    "type": "judge",
    "question": "SAE J1939 协议虽主要用于商用车，但也可扩展应用于部分乘用车及工业设备。",
    "answer": "正确"
  }
];

export default questions;
