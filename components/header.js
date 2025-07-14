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
            --background-color: #FEFCFF;
            --text-color: #2c3e50;        /* Main text - sophisticated blue-gray */
            --heading-color: #2c3e50;     /* Same as text for consistency */
            --link-color: #1e3a8a;        /* Subtle dark blue for links */
            --border-color: #e0e0e0;
            --secondary-text: #64748b;    /* Lighter gray for secondary text */
        }

        body {
            font-family: Palatino Linotype;
            line-height: 1.5;
            color: var(--text-color);
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--background-color);
            font-size: 15px;
        }

        h1, h2, h3, h4 { 
            color: var(--heading-color);
            font-weight: normal;
            margin-top: 30px;
            margin-bottom: 10px;
        }

        h1 {
            font-size: 32px;   /* 1.88x base - for main page title */
            font-weight: 700;  /* Stronger for main title */
            margin-top: 20px;
        }
        
        h2 {
            font-size: 23px;   /* 1.53x base - for main sections */
            margin-top: 40px;  /* More space before major sections */
        }
        
        h3 {
            font-size: 20px;   /* 1.29x base - for subsections */
            margin-top: 30px;
        }
        
        h4 {
            font-size: 19px;   /* 1.12x base - for minor headers */
            margin-top: 25px;
        }

        a { 
            color: var(--link-color);
            text-decoration: underline;
        }

        a:hover { 
            opacity: 0.7;
            text-decoration: underline;
        }

        .header {
            display: flex;
            align-items: center;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .profile-photo {
            width: 110%;
            max-width: 1000px;
            height: auto;
            border-radius: 20px;
        }

        .profile-info { 
            flex: 1; 
        }

        .social-links {
            margin-top: 10px;
        }

        .social-links a { 
            margin-right: 20px;
            color: var(--link-color);
        }

        .section-title {
            color: var(--heading-color);  /* Change from #2c3e50 to use variable */
            margin-bottom: 11px;
            border-bottom: 1px solid var(--border-color);  /* Also made border more subtle */
        }

        .research-item { 
            margin-bottom: 24px;
            padding: 16px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            background-color: #FEFCFF;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            font-size: 17px;
        }

        .research-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .research-title {
            font-size: 17px;
            margin-bottom: 0px;
        }

        .research-details {
            margin-top: 10px;
            color: var(--secondary-text);
            font-size: 17px;
            line-height: 1.5;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }

        .see-more { 
            font-size: 0.9em; 
        }

        .post-date {
            color: var(--secondary-text);
            margin-top: 5px;
        }

        .hover-message {
            display: inline;
            position: relative;
            border-bottom: 1px dashed var(--secondary-text);
            cursor: help;
        }

        .hover-message .message-content {
            display: none;
            position: absolute;
            background-color: var(--background-color);
            padding: 12px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            width: max-content;
            max-width: 300px;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 8px;
            z-index: 100;
            font-size: 0.9em;
            color: var(--text-color);
        }

        .hover-message .message-content::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: var(--border-color) transparent transparent transparent;
        }

        .hover-message:hover .message-content {
            display: block;
        }

        .publication-item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin: 10px 0;
            gap: 20px;
        }

        .publication-content {
            flex: 1;
        }

        .publication-venue {
            color: var(--secondary-text);
            font-style: italic;
            font-size: 0.9em;
            white-space: nowrap;
            flex-shrink: 0;
        }

        .takeaway-box {
            background-color: #f8f9fa;
            border-left: 4px solid #adb5bd;
            padding: 16px;
            margin: 20px 0;
            border-radius: 4px;
            font-style: italic;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Add MathJax configuration and script
    const mathjaxScript = document.createElement('script');
    mathjaxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js';
    mathjaxScript.async = true;

    // MathJax configuration
    const mathjaxConfig = document.createElement('script');
    mathjaxConfig.type = 'text/javascript';
    mathjaxConfig.text = `
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
                processEscapes: true
            },
            svg: {
                fontCache: 'global'
            }
        };
    `;

    document.head.appendChild(mathjaxConfig);
    document.head.appendChild(mathjaxScript);

    // Google Analytics
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XESS2TDK8Y';
    document.head.appendChild(gaScript);

    const gaConfig = document.createElement('script');
    gaConfig.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XESS2TDK8Y');
    `;
    document.head.appendChild(gaConfig);
});