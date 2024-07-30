/* Summary: HTML file that describes a list of features.
It contains a grid layout with 6 feature sections, each with an icon, a title, and a description. 
The feature sections are organised in a grid of two rows, each with three columns.
*/

Vue.component("purple_feature_grid_component_1722344739", {
    template: `
    <div class="bg-deep-blue-900 p-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-auto text-purple-400">
            <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/>
            <path d="M13.41 12.89c-.69.9-2.19 2.28-3.91 2.28-1.72 0-3.22-1.38-3.91-2.28M17.79 9.79c-.38-.38-.89-.59-1.42-.59-.53 0-1.04.21-1.42.59-.37.37-.59.88-.59 1.41 0 .53.22 1.04.59 1.42.38.38.89.59 1.42.59.53 0 1.04-.21 1.42-.59.37-.37.59-.88.59-1.42 0-.53-.22-1.04-.59-1.41zM14.5 6.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/>
        </svg>
    </div>
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
                    