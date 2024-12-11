// components/header.js

// Configuration object - edit this to update your information
const CONFIG = {
    name: "Bruce W. Lee",
    title: "AI Researcher at UPenn",
    description: "Researcher working on language models and linguistic features at the University of Pennsylvania",
    email: "brucelws@seas.upenn.edu",
    image: "https://brucewlee.com/pictures/bruce.jpeg",
    links: {
        github: "https://github.com/brucewlee",
        scholar: "https://scholar.google.com/citations?user=a9HZkjMAAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/bruce-w-lee/",
        twitter: "https://x.com/BruceWLee2"
    },
    expertise: [
        "Natural Language Processing",
        "Machine Learning",
        "Language Models",
        "Artificial Intelligence"
    ],
    publications: [
        {
            name: "Programming Refusal with Conditional Activation Steering",
            url: "https://arxiv.org/abs/2409.05907",
            year: "2024"
        },
        {
            name: "Language Models Don't Learn the Physical Manifestation of Language",
            url: "https://aclanthology.org/2024.acl-long.195/",
            year: "2024"
        },
        {
            name: "Instruction Tuning with Human Curriculum",
            url: "https://aclanthology.org/2024.findings-naacl.82/",
            year: "2024"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Add SEO metadata
    const seoScript = document.createElement('script');
    seoScript.type = 'application/ld+json';
    seoScript.textContent = JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Person",
        "name": CONFIG.name,
        "givenName": CONFIG.name.split(" ")[0],
        "familyName": CONFIG.name.split(" ").pop(),
        "jobTitle": "Researcher",
        "affiliation": {
            "@type": "Organization",
            "name": "University of Pennsylvania",
            "url": "https://www.upenn.edu"
        },
        "description": CONFIG.description,
        "url": window.location.origin,
        "email": CONFIG.email,
        "image": CONFIG.image,
        "sameAs": Object.values(CONFIG.links),
        "knowsAbout": CONFIG.expertise,
        "publications": CONFIG.publications.map(pub => ({
            "@type": "ScholarlyArticle",
            "name": pub.name,
            "url": pub.url,
            "datePublished": pub.year
        }))
    }, null, 2);
    document.head.appendChild(seoScript);

    // Add Open Graph and Twitter meta tags
    const metaTags = [
        {property: "og:type", content: "profile"},
        {property: "og:title", content: CONFIG.title},
        {property: "og:description", content: CONFIG.description},
        {property: "og:image", content: CONFIG.image},
        {property: "og:url", content: window.location.href},
        {name: "twitter:card", content: "summary"},
        {name: "twitter:site", content: CONFIG.links.twitter},
        {name: "author", content: CONFIG.name}
    ];

    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
    });

    // Add shared styles
    const styles = `
        :root {
            --background-color: #f9f9f9;
            --text-color: #333;
            --heading-color: #2c3e50;
            --link-color: #191970;
            --border-color: #191970;
            --secondary-text: #7f8c8d;
            --hover-bg: #fff;
            --card-border: #ddd;
        }

        [data-theme="dark"] {
            --background-color: #202124;  /* Google's dark grey */
            --text-color: #bdc1c6;        /* Soft grey for main text */
            --heading-color: #e8eaed;     /* Lighter grey for headings */
            --link-color: #8ab4f8;        /* Soft blue for links */
            --border-color: #3c4043;      /* Dark grey for borders */
            --secondary-text: #9aa0a6;    /* Medium grey for secondary text */
            --hover-bg: #282a2d;          /* Slightly lighter grey for hovers */
            --card-border: #3c4043;       /* Dark grey for borders */
        }

        body {
            font-family: 'Palatino Linotype';
            line-height: 1.6;
            color: var(--text-color);
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--background-color);
            transition: background-color 0.3s, color 0.3s;
        }

        h1, h2, h3 { 
            color: var(--heading-color); 
        }

        a { 
            color: var(--link-color);
            text-decoration: none; 
        }

        a:hover { 
            text-decoration: underline; 
        }

        /* Table styles updated for dark mode */
        td:first-child {
            color: var(--secondary-text);
        }

        /* Research details hover updated for dark mode */
        .research-details {
            background-color: var(--hover-bg);
            border: 1px solid var(--card-border);
            color: var(--text-color);
        }

        /* Theme toggle button */
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px;
            border-radius: 50%;
            border: none;
            background: var(--hover-bg);
            color: var(--text-color);
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        /* Rest of your original styles remain the same */
        .header {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
        }

        .profile-photo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 30px;
        }

        .profile-info { flex: 1; }
        .social-links a { margin-right: 10px; }
        
        table {
            width: 100%;
            border-collapse: collapse;
        }

        td {
            padding: 5px 0;
            vertical-align: top;
        }

        td:first-child {
            width: 80px;
            font-size: 0.9em;
        }

        .research-item { position: relative; }
        
        .research-title {
            display: inline-block;
            position: relative;
        }

        .research-details {
            display: none;
            position: absolute;
            padding: 10px;
            z-index: 1;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            width: 500px;
            left: 50%;
            top: 100%;
        }

        .research-item:hover .research-details {
            display: block;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 1em;
        }

        .see-more { font-size: 0.9em; }
    `;


    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Add dark mode toggle
    const toggle = document.createElement("button");
    toggle.className = "theme-toggle";
    toggle.id = "theme-toggle";
    toggle.title = "Toggle dark mode";
    toggle.innerHTML = "🌓";
    document.body.appendChild(toggle);

    // Dark mode functionality
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    setTheme(getPreferredTheme());

    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
});