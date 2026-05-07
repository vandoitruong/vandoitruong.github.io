// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-giới-thiệu-cách-tạo-trang-web-và-viết-blog",
        
          title: "Giới thiệu cách tạo trang web và viết blog",
        
        description: "Cách mình đã tạo blog này ^^",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/introduction/";
          
        },
      },{id: "post-yield-point-and-hardening-curve-fitting-điểm-chảy-và-khớp-đường-cong-hóa-bền",
        
          title: "Yield Point and hardening curve fitting: điểm chảy và khớp đường cong hóa...",
        
        description: "Mô tả về cách tìm điểm chảy và khớp đường cong hóa bền",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/yield_point_and_hardening_curve_fitting/";
          
        },
      },{id: "post-yield-criterion-tiêu-chuẩn-chảy-dẻo",
        
          title: "Yield Criterion: Tiêu chuẩn chảy dẻo",
        
        description: "Mô tả về tiêu chuẩn chảy của vật liệu",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/yield-criteria-ti%C3%AAu-chu%E1%BA%A9n-ch%E1%BA%A3y/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-new-paper-deep-learning-based-machine-vision-system-for-real-time-edge-fracture-detection-in-the-hole-expansion-test-has-been-published-in-the-journal-engineering-applications-of-artificial-intelligence",
          title: 'A new paper, “Deep learning-based machine vision system for real-time edge fracture detection...',
          description: "",
          section: "News",},{id: "news-graduation-ceremony-i-am-grateful-for-the-journey-the-lessons-learned-and-everyone-who-supported-me-along-the-way",
          title: 'Graduation ceremony: I am grateful for the journey, the lessons learned, and everyone...',
          description: "",
          section: "News",},{id: "news-a-new-paper-deep-learning-prediction-of-weld-bead-geometry-during-multi-pass-multi-layer-welding-process-has-been-published-in-the-journal-engineering-applications-of-artificial-intelligence",
          title: 'A new paper, “Deep learning prediction of weld bead geometry during multi-pass multi-layer...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%6E%64%6F%69%74%72%75%6F%6E%67%31%39%39%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vandoitruong", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/truongvandoi1909", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ppxfOYQAAAAJ&hl=en", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
