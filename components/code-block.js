// code-block.js - Complete version with styles and code loading
document.addEventListener('DOMContentLoaded', function() {
    // Add code block specific styles
    const codeblockStyles = `
        .pre-code {
            position: relative;
            background: #FEFCFF;
            padding: 1em;
            border-radius: 4px;
            font-size: 12px;
            line-height: 1.4;
            font-family: 'Consolas', monospace;
            margin: 1em 0;
            border: 1px solid #ddd;
            overflow-x: auto;
            max-height: 200px;
        }
        .copy-button {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 8px 12px;
            background-color: #FEFCFF;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.2s;
        }
        .copy-button:hover {
            background-color: #e0e0e0;
        }
        .copy-button.copied {
            background-color: #333333;
            color: white;
        }
        .code-title {
            font-size: 13px;
            color: #666;
            margin-bottom: 4px;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = codeblockStyles;
    document.head.appendChild(styleSheet);

    // Function to load code from a file
    async function loadCodeFromFile(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.text();
        } catch (error) {
            console.error('Error loading code file:', error);
            return '// Error loading code file';
        }
    }

    // Initialize code blocks with file paths
    async function initializeCodeBlock(block) {
        const filePath = block.getAttribute('data-code-path');
        if (filePath) {
            const code = await loadCodeFromFile(filePath);
            const codeElement = block.querySelector('code');
            if (codeElement) {
                codeElement.textContent = code;
            }
        }

        // Add copy button if it doesn't exist
        if (!block.querySelector('.copy-button')) {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copy code';
            
            copyButton.addEventListener('click', function() {
                const code = block.querySelector('code');
                if (code) {
                    navigator.clipboard.writeText(code.textContent).then(() => {
                        copyButton.textContent = 'Copied!';
                        copyButton.classList.add('copied');
                        setTimeout(() => {
                            copyButton.textContent = 'Copy code';
                            copyButton.classList.remove('copied');
                        }, 2000);
                    }).catch(err => {
                        console.error('Failed to copy:', err);
                        copyButton.textContent = 'Failed to copy';
                        setTimeout(() => {
                            copyButton.textContent = 'Copy code';
                        }, 2000);
                    });
                }
            });
            
            block.insertBefore(copyButton, block.firstChild);
        }
    }

    // Initialize all code blocks
    document.querySelectorAll('.pre-code').forEach(initializeCodeBlock);

    // Watch for new code blocks
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList && node.classList.contains('pre-code')) {
                        initializeCodeBlock(node);
                    }
                    node.querySelectorAll('.pre-code').forEach(initializeCodeBlock);
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});