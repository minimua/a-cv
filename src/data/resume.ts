import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  basics: {
    name: "慕静雅",
    label: "Java开发工程师",
    email: "mujaaa@163.com",
    image: "/img/image.jpg",
    phone: "15093063219",
    location: "杭州",
    summary: "具有扎实的Java基础知识和丰富的微服务项目开发经验，熟练掌握Spring全家桶，对数据库、中间件等技术有深入了解，拥有良好的代码习惯和团队协作能力。",
    profiles: []
  },
  skills: [
    "掌握Java基础知识，如集合框架，I/O，多线程和AQS等，阅读过ArrayList，HashMap源码",
    "熟练掌握Spring Boot、Spring Cloud等主流开发框架，了解领域建模，具备独立开发微服务项目的能力",
    "熟练掌握MySQL的使用及常见优化手段，对索引，事务等相关知识有一定了解",
    "熟悉Redis的使用，掌握Redis实现缓存，分布式锁的应用场景",
    "熟悉RabbitMQ，RocketMQ等消息中间件，并在实际项目中有应用经验",
    "理解JVM相关知识，如垃圾回收算法，对象创建过程，类加载机制等",
    "熟练使用Linux常用命令，了解容器化和云原生技术，能够有效分析和解决线上问题",
    "掌握HTML，CSS，JavaScript等前端技术，了解React前端框架，拥有丰富的前后端分离项目开发经验",
    "熟悉常用设计模式，了解基本数据结构和算法，具备良好的编码习惯",
    "熟悉Git，Maven，Jenkins等常用开发工具的使用，能够运用AI工具提高开发协作效率"
  ],
  work: [
    {
      company: "北方云景科技有限公司",
      position: "Java开发工程师",
      startDate: "2022-04",
      endDate: "2024-08",
      summary: "参与公司各个项目日常的迭代需求以及系统的日常维护，包括定制详细的技术方案和实现计划，系统的功能设计与开发，协助线上问题的快速定位与修复。",
      highlights: []
    },
    {
      company: "杭州世擎网络科技有限公司",
      position: "Java开发工程师", 
      startDate: "2020-03",
      endDate: "2022-03",
      summary: "参与公司自研跨境电商APP物流相关需求的开发，负责ERP管理系统的需求分析，代码实现，快速上线和后期迭代。",
      highlights: []
    }
  ],

  projects: [
    {
      name: "智慧物流中台",
      company: "北方云景科技有限公司", 
      duration: "2024.01 - 2024.08", 
      description: "智慧物流服务，整合多种资源信息查询与物流轨迹等接口，提供统一的公共服务供各业务线调用。通过外部交通服务数据的获取和统计分析，优化费用结算流程，实现了费用合理分摊。",
      technologies: [
        "Spring Cloud",
        "Mybatis",
        "MySQL",
        "Redis",
        "RabbitMQ",
        "Maven",
        "Nacos",
        "XXL-JOB"
      ],
      responsibilities: [
        "梳理并设计技术解决方案，基于Spring Boot使用公司框架工具搭建整个项目",
        "实现通用的服务调用接口，利用反射机制动态获取并调用接口方法，提升了接口调用的灵活性",
        "通过定时调用交通服务接口，同步在线车辆的最新位置信息，采用异步处理机制，确保高效并发请求多辆车的数据，准确跟踪在途车辆信息",
        "使用RabbitMQ构建消息驱动的预警系统，实现了预警通知推送功能，结合工厂模式动态管理不同预警服务，同时利用Redis缓存预警信息"
      ]
    },
    {
      name: "军工物流APP2.0",
      company: "北方云景科技有限公司", 
      duration: "2023.01 - 2023.12", 
      description: "基于物流与安保平台的需求，开发的面向互联网的军工物流APP，与物流安保平台信息互通。为用户提供登录自动注册、装卸货扫码、专用标识、视频培训考试等核心业务功能。",
      technologies: [
        "Spring Boot",
        "MyBatis-Plus",
        "MySQL",
        "Maven",
        "Redis",
        "Quartz",
        "Docker"
      ],
      responsibilities: [
        "参与APP的需求分析，结合业务需求进行功能设计，制定详细的开发计划",
        "负责开发视频培训与考试模块，使用动态规划算法实现基于题库的随机试卷功能",
        "通过Spring的事件机制，监听用户考试事件，自动触发考试结果的评估并及时反馈给用户",
        "使用Quartz框架定时同步物流安保服务数据，确保平台信息的实时性和一致性"
      ]
    },
    {
      name: "物流与安保平台",
      company: "北方云景科技有限公司", 
      duration: "2022.04 - 2022.12", 
      description: "物流与安保平台是⼀个多环境（外⽹+商密⽹+内⽹）的业务系统，通过整合物流与安保资源、信息化监管⼿段、定制化解决⽅案，优化了国防军⼯领域的运输流程和安全保障。",
      technologies: [
        "Spring Boot",
        "MyBatis",
        "MySQL",
        "Maven",
        "Redis",
        "RabbitMQ",
        "Eureka",
        "Apollo"
      ],
      responsibilities: [
        "参与项⽬⽇常的迭代需求以及系统的⽇常维护，包括制定详细的技术⽅案和实现计划，系统的功能设计与开发，线上问题的快速定位与修复",
        "参与外⽹、商密⽹、内⽹之间的数据同步机制的设计和实现，开发跨环境的业务流程，确保数据⼀致性和系统的稳定运⾏",
        "定期进⾏系统安全审计，识别并修复潜在安全漏洞，优化数据库查询和缓存机制，提升系统响应速度和处理能⼒"
      ]
    },
    {
      name: "Ealingmom APP",
      company: "杭州世擎网络科技有限公司",
      duration: "2020.03 - 2022.03",
      description: "面向印度市场的母婴类B2C购物平台，使用分布式架构，涵盖电商、物流、运营后台三个模块。",
      technologies: [
        "SpringCloud",
        "MyBatis",
        "MySQL",
        "Redis",
        "RocketMQ"
      ],
      responsibilities: [
        "参与物流与仓储模块的功能开发，满足电商系统的物流需求",
        "利用RocketMQ消息队列，开发物流订单的创建、轨迹跟踪与状态更新功能，提供Feign接口支持电商系统实时查询物流信息",
        "整合多个快递公司API，并集成了外部WMS/OMS系统，确保系统能够灵活处理复杂的物流操作，实现仓储与物流的高效对接"
      ]
    },
    {
      name: "EALING V8 ERP管理系统",
      company: "杭州世擎网络科技有限公司",
      duration: "2021.03 - 2022.03",
      description: "为公司运营、采购、物流和财务提供线上管理功能，推动业务数字化发展。",
      technologies: [
        "SpringBoot",
        "MyBatis",
        "MySQL",
        "Redis",
        "Docker",
        "XXL-JOB"
      ],
      responsibilities: [
        "分析并实现物流相关业务需求，负责物流管理及付款流程的优化与完善",
        "开发亚马逊商品的销量与库存统计功能，支持多维度数据查询与导出",
        "通过XXL-JOB管理定时任务，实现销量、库存及调拨单的自动化同步，确保系统数据的实时更新与准确性"
      ]
    }
  ],
  education: [
    {
      institution: "沈阳科技学院",
      area: "计算机科学与技术",
      studyType: "本科",
      startDate: "2016-09",
      endDate: "2020-06"
    }
  ]
};

export default resumeData;