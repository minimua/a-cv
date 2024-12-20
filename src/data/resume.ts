import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  basics: {
    name: "慕静雅",
    label: "Java开发工程师",
    email: "mujaaa@163.com",
    image: "/img/image.jpg",
    phone: "150xxxxxxxx",
    location: "杭州",
    summary: "具有扎实的Java基础知识和丰富的微服务项目开发经验，熟练掌握Spring全家桶，对数据库、中间件等技术有深入了解，拥有良好的代码习惯和团队协作能力。",
    profiles: [ 
      {
      network: "GitHub",
      url: "https://github.com/minimua"
      }
  ]
  },
  skills: [
    "掌握Java基础知识，如集合框架，I/O，多线程和AQS等，阅读过ArrayList，HashMap源码。",
    "熟练掌握Spring Boot、Spring Cloud等主流开发框架，具备独立开发微服务项目的能力，了解领域驱动设计思想。",
    "熟练掌握MySQL的使用及常见优化手段，对索引，事务等相关知识有一定了解。",
    "熟悉Redis的使用，掌握Redis实现缓存，分布式锁的应用场景。",
    "熟悉RabbitMQ，RocketMQ等消息中间件，并在实际项目中有应用经验。",
    "理解JVM相关知识，如垃圾回收算法，对象创建过程，类加载机制等。",
    "熟练使用Linux常用命令，了解容器化和云原生技术，能够有效分析和解决线上问题。",
    "拥有丰富的前后端分离项⽬开发经验，了解React前端框架，Node.js和Python语⾔。",
    "熟悉Git，Maven，Jenkins等常用开发工具的使用，能够运用AI工具（ChatGPT/Claude/Cursor等）提高开发效率。",
    "熟悉常用设计模式，了解基本数据结构和算法，具备良好的编码习惯。"
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
      description: "整合多种资源信息查询与物流轨迹等接口，提供统一的公共服务供各业务线调用。项目通过外部交通服务数据的获取和统计分析，实现了费用结算、业务调用记录、接口对接及异常预警等功能，提升了物流信息的透明度和运营效率。",
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
        "梳理并设计技术方案，实现通用的服务调用接口，利用反射机制动态获取并调用接口方法，提升了接口调用的灵活性。",
        "通过定时调用交通服务接口，同步在线车辆的最新位置信息，采用异步处理机制，确保高效并发请求多辆车的数据，准确跟踪在途车辆信息。",
        "使用RabbitMQ构建消息驱动的预警系统，实现了预警通知推送功能，结合工厂模式动态管理不同预警服务，同时利用Redis缓存预警信息。"
      ]
    },
    {
      name: "军工物流APP2.0",
      company: "北方云景科技有限公司", 
      duration: "2023.01 - 2023.12", 
      description: "基于物流与安保平台需求开发的一款军工物流移动应用，与物流安保平台实现信息互通。提供登录自动注册、装卸货任务扫码、专用标识管理、问卷调查、视频培训与考试等核心功能，满足用户对物流任务的全流程管理需求。",
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
        "设计并开发运输任务完成后的问卷调查模块，实现问卷模板配置、动态获取与提交功能，提高运输问题的反馈效率。",
        "设计并实现视频培训与考试功能，基于动态规划算法生成随机试卷，确保考试内容的灵活性与公平性。利用 Spring 的事件机制监听用户考试行为，自动触发考试结果评估，实时反馈用户成绩与分析结果。",
        "使用Quartz框架定时同步物流安保服务数据，确保平台信息的实时性和一致性。"
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
        "参与项⽬⽇常的迭代需求以及系统的⽇常维护，包括制定详细的技术⽅案和实现计划，系统的功能设计与开发，线上问题的快速定位与修复。",
        "参与外⽹、商密⽹、内⽹之间的数据同步机制的设计和实现，开发跨环境的业务流程，确保数据⼀致性和系统的稳定运⾏。",
        "定期进⾏系统安全审计，识别并修复潜在安全漏洞，优化数据库查询和缓存机制，提升系统响应速度和处理能⼒。"
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
        "参与物流与仓储模块的功能开发，支撑整个电商系统的物流需求。利用RocketMQ消息队列，开发物流订单的创建、轨迹跟踪与状态更新功能，提供Feign接口支持电商系统实时查询物流信息。",
        "整合多个快递公司API，并集成了外部WMS/OMS系统，确保系统能够灵活处理复杂的物流操作，实现仓储与物流的高效对接。"
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
        "负责物流管理及付款流程的优化与完善，参与开发亚马逊商品的销量与库存统计功能，支持多维度数据查询与导出。",
        "通过XXL-JOB管理定时任务，实现销量、库存及调拨单的自动化同步，确保系统数据的实时更新与准确性。"
      ]
    },
    {
      name: "a-nav导航站",
      link: "https://anav.voidmu.com/",
      company: "开源项目",
      duration: "2024-09 - ⾄今",
      description: "a-nav是⼀个使⽤Next.js结合Notion API构建的现代导航⽹站，使⽤ Notion 作为 CMS，轻松管理导航内容，⽀持⼀键部署，旨在为⽤户提供灵活且易于使⽤的导航解决⽅案。",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Notion API"
      ],
      responsibilities: [
        
      ]
    },
    {
      name: "a-cv在线简历",
      link: "https://cv.voidmu.com/",
      company: "开源项目",
      duration: "2024-09 - ⾄今",
      description: "基于 Next.js开发的个⼈简历应⽤，实现了⼀个简洁优雅的在线简历系统，⽀持⾃定义数据，响应式设计和⼀键部署。",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "React"
      ],
      responsibilities: [
        
      ]
    },{
      name: "PicImpact",
      link: "https://pics.voidmu.com/",
      company: "开源项目",
      duration: "2024-09 - ⾄今",
      description: "摄影作品展示⽹站，基于Next.js和Hono.js 开发。提供瀑布流相册展示，⽀持实况照⽚、原图查看、EXIF信息浏览和标签筛选功能，并兼容多种存储接⼝（S3 API/Cloudflare R2/AList API），⽀持多种环境（Vercel/Node.js/Docker/k8s）快速部署。",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "React",
        "PostgreSQL",
        "Docker"
      ],
      responsibilities: [
        "Fork 并部署了开源项⽬ PicImpact，独⽴搭建完整的Node.js和Docker运⾏环境，配置PostgreSQL数据库，解决了本地项⽬版本升级过程中的数据迁移问题，确保系统平稳过渡并实现稳定运⾏。"
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