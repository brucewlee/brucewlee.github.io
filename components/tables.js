// tables.js - Shared table styles and functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add table styles
    const tableStyles = `
        .comparison-table {
            font-family: Palatino Linotype;
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
            font-size: 15px;
            background-color: var(--background-color);
        }
        .comparison-table th, 
        .comparison-table td {
            padding: 5px;
            text-align: center;  /* Center all text */
            border: 1px solid var(--border-color);
        }
        .comparison-table th {
            background-color: var(--background-color);
            color: var(--heading-color);
        }
        .comparison-table tr:nth-child(even) {
            background-color: rgba(244, 240, 236, 0.5);
        }
        .comparison-table tr:hover {
            background-color: rgba(244, 240, 236, 0.8);
        }
        .comparison-table .param-name {
            font-size: 15px;
            color: var(--text-color);
            text-align: left;
        }
        
        /* Responsive design for mobile */
        @media (max-width: 600px) {
            .comparison-table {
                font-size: 14px;
            }
            .comparison-table th, 
            .comparison-table td {
                padding: 8px;
            }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = tableStyles;
    document.head.appendChild(styleSheet);
});