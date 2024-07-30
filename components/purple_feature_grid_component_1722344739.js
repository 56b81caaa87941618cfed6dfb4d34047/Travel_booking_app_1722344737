/* Summary: HTML file that describes a list of features.
It contains a grid layout with 6 feature sections, each with an icon, a title, and a description. 
The feature sections are organised in a grid of two rows, each with three columns.
*/

Vue.component("purple_feature_grid_component_1722344739", {
    template: `
    <div class="bg-deep-blue-900 p-8 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-auto text-purple-400">
            <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/>
            <path d="M3 21h18M5 17h2m4 0h2m4 0h2M12 3v18M4 7h16M4 11h16M4 15h16"/>
        </svg>
    </div>
    `,
    `,
    data() {
        return {
            expanded: false, 
            tab: null,
            textFillStylePrimary: "fill-slate-300",
            textPrimaryStyle: "text-slate-400",
            textSecondaryStyle: "text-slate-50",
        };
    },
                    